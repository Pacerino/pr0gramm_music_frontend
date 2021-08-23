<template>
  <div class="row q-mt-md">
    <div class="fit row wrap justify-center items-start content-start">
      <LineChart v-bind="lineChartProps" v-if="loaded" class="fit"/>
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
    let dataLabels: string[] = [];
    let errorValues: number[] = [];
    let noresultValues: number[] = [];
    let resultValues: number[] = [];
    let totalValues: number[] = [];
    const loaded = ref(false);
    const $q = useQuasar();
    $q.loading.show()
    api
      .get('/stats')
      .then((response: AxiosResponse<ResponseObject>) => {
        response.data.data.map(
          (day) =>
            dataLabels.push(day.date) &&
            errorValues.push(day.error) &&
            noresultValues.push(day.noresult) &&
            resultValues.push(day.result) &&
            totalValues.push(day.result + day.error + day.noresult)
        );
        loaded.value = true
        $q.loading.hide()
      })
      .catch((err) => {
        console.log(err);
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem',
        });
      });
    const data = computed<ChartData<'line'>>(() => ({
      labels: dataLabels,
      datasets: [
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
      ],
    }));

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
    console.log(data)
    return {
      data,
      options,
      lineChartRef,
      lineChartProps,
      loaded,
    };
  },
});
</script>