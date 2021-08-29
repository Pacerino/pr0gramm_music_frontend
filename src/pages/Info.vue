<template>
  <div class="row q-mt-md">
    <div class="fit row wrap justify-center items-start content-start">
      <pre v-cloak>
        <LinkComponent :data="apiData"></LinkComponent>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import { AxiosResponse } from 'axios';
import { ref } from 'vue';
import LinkComponent from 'components/LinkComponent.vue';

interface InfoResponse {
  deezerURL: string;
  deezerID: string;
  soundcloudURL: string;
  soundcloudID: string;
  spotifyURL: string;
  spotifyID: string;
  youtubeURL: string;
  youtubeID: string;
  tidalURL: string;
  tidalID: string;
  applemusicURL: string;
  applemusicID: string;
  title: string;
	album: string;
	artist: string;
  acrID: string;
}

export default {
  setup() {
    const $q = useQuasar();
    const apiData = ref<InfoResponse>();
    $q.loading.show();
    const route = useRoute();
    console.log(route.params.id);
    api
      .get(`/info/${route.params.id.toString()}`)
      .then((res: AxiosResponse<InfoResponse>) => {
        $q.loading.hide();
        if (res.status == 200) {
          apiData.value = res.data;
        } else {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        }
      })
      .catch((err) => console.log(err));
    return {
      apiData
    };
  },
  components: {
    LinkComponent,
  },
};
</script>