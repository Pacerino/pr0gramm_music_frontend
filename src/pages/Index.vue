<template>
  <div class="row q-mt-md">
    <div class="fit row wrap justify-center items-start content-start">
      <div class="q-pa-md full-width">
        <q-table
          title="Gespeicherte Metadaten"
          class="my-sticky-virtscroll-table"
          :rows="rows"
          :columns="columns"
          v-model:pagination="pagination"
          :loading="loading"
          :virtual-scroll-sticky-size-start="18"
          virtual-scroll
          row-key="name"
          :grid="$q.screen.xs"
          @request="onRequest"
          @row-click="handleClick"
        >
          <template v-slot:loading>
            <q-inner-loading showing color="secondary" />
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { api } from 'boot/axios';
import { AxiosResponse } from 'axios';

interface props {
  pagination: propsProps;
}

interface propsProps {
  page: number;
  rowsPerPage: number;
  rowsNumber: number;
}

interface Row {
  id: number;
  itemID: number;
  title: string;
  album: string;
  artist: string;
  url: string;
  noData: number;
}
interface ResponseObject {
  limit: number;
  page: number;
  sort: string;
  total_rows: number;
  total_pages: number;
  rows: Row[];
}

const columns = [
  /* {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',
    sortable: true,
    classes: 'hidden'
  }, */
  {
    name: 'itemid',
    label: 'Post ID',
    field: 'itemID',
    sortable: false,
    required: true,
  },
  { name: 'title', label: 'Titel', field: 'title', required: false },
  { name: 'album', label: 'Album', field: 'album', required: false},
  { name: 'artist', label: 'Artist', field: 'artist', required: false },
  { name: 'url', label: 'URL', field: 'url', required: false},
];

export default {
  setup() {
    const loading = ref(true);
    const rows = ref([{}, {}, {}, {}, {}, {}, {}, {}]);
    const $q = useQuasar();
    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10,
    });

    function onRequest(props: props) {
      const { page, rowsPerPage } = props.pagination;
      api
        .get(`/items?limit=${rowsPerPage}&page=${page}&sort=desc`)
        .then((response: AxiosResponse<ResponseObject>) => {
          rows.value.splice(0, rows.value.length, ...response.data.rows);

          pagination.value.page = page;
          pagination.value.rowsNumber = response.data.total_rows;
          pagination.value.rowsPerPage = rowsPerPage;
          loading.value = false;
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
          loading.value = false;
        });
    }

    function handleClick(_event: Record<string, unknown> , row: Row) {
      window.open(`https://pr0gramm.com/new/${row.itemID}`, '_blank')
    }

    onMounted(() => {
      onRequest({
        pagination: pagination.value,
      });
    });

    return {
      columns,
      rows,
      loading,
      pagination,
      onRequest,
      handleClick,
    };
  },
};
</script>

<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  max-height: 85vh

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #161618

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>