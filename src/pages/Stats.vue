<template>
  <div class="row q-mt-md">
    <div
      class="fit row wrap justify-center items-start content-center text-white"
    >
      <q-chip clickable icon="date_range"
        >Zeitraum
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date
            v-model="date"
            range
            color="secondary"
            text-color="white"
            mask="YYYY-MM-DD"
            minimal="true"
            navigation-min-year-month="2021/06"
          >
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn label="Cancel" color="white" flat v-close-popup />
              <q-btn
                label="OK"
                color="white"
                flat
                @click="save"
                v-close-popup
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-chip>
    </div>
  </div>
  <div class="row q-mt-md">
    <div class="fit row wrap justify-center items-start content-start">
      <LineChart v-bind="lineChartProps" v-if="loaded" class="fit" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';
import { ChartData, ChartOptions, Chart, registerables } from 'chart.js';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import { AxiosResponse } from 'axios';
Chart.register(...registerables);

export default defineComponent({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: { LineChart },
  setup() {
    interface Datum {
      id: number;
      uid: number;
      date: string;
      type: string;
      region: string;
      access_key: string;
      result: number;
      noresult: number;
      error: number;
      created_at: Date;
    }

    interface ResponseObject {
      data: Datum[];
    }
    const loaded = ref(false);
    const $q = useQuasar();
    const date = ref({ from: '', to: '' });
    const data = computed<ChartData<'line'>>(() => ({
      labels: [],
      datasets: [],
    }));
    $q.loading.show();
    function callApi(dateStart?: string, dateEnd?: string) {
      const params = new URLSearchParams(location.search);
      if (dateStart) {
        params.append('start', dateStart);
      }
      if (dateEnd) {
        params.append('end', dateEnd);
      }
      api
        .get(`/stats?${params.toString()}`)
        .then((response: AxiosResponse<ResponseObject>) => {
          let dataLabels: string[] = [];
          let errorValues: number[] = [];
          let noresultValues: number[] = [];
          let resultValues: number[] = [];
          let totalValues: number[] = [];
          if (response.data.data.length > 0) {
            response.data.data.map(
              (day) =>
                dataLabels.push(day.date) &&
                errorValues.push(day.error) &&
                noresultValues.push(day.noresult) &&
                resultValues.push(day.result) &&
                totalValues.push(day.result + day.error + day.noresult)
            );

            let tempDataset = [
              {
                label: 'Posts mit Ergebnissen',
                data: resultValues,
                fill: false,
                borderColor: '#1db992',
                tension: 0,
              },
              {
                label: 'Posts ohne Ergebnise',
                data: noresultValues,
                fill: false,
                borderColor: '#f0ad4e',
                tension: 0,
              },
              {
                label: 'Totale Anfragen',
                data: totalValues,
                fill: false,
                borderColor: '#008fff',
                tension: 0,
              },
              {
                label: 'Fehlerhafte Anfragen',
                data: errorValues,
                fill: false,
                borderColor: '#d9534f',
                tension: 0,
              },
            ];
            data.value.labels = dataLabels;
            data.value.datasets = tempDataset;
            loaded.value = true;
            $q.loading.hide();
          } else {
            $q.notify({
              color: 'negative',
              position: 'top',
              message:
                'Anscheinend gibt es für den ausgewählten Zeitraum keine Daten!',
              icon: 'report_problem',
            });
            $q.loading.hide();
          }
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        });
    }
    callApi();
    const options = computed<ChartOptions<'line'>>(() => ({
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'pr0gramm_music Statistik',
        },
      },
    }));

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData: data,
      options,
    });
    return {
      data,
      options,
      lineChartRef,
      lineChartProps,
      loaded,
      date,
      save() {
        $q.loading.show();
        loaded.value = false;
        console.log(date.value);
        if (!date.value.from || !date.value.to) {
          callApi();
        } else {
          const dateStart = new Date(date.value.from);
          const dateEnd = new Date(date.value.to);
          callApi(
            dateStart.toISOString().substring(0, 10),
            dateEnd.toISOString().substring(0, 10)
          );
        }
      },
    };
  },
});
</script>