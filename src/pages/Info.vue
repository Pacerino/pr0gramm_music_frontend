<template>
  <div class="row q-gutter-y-md">
    <div class="fit row wrap justify-center items-start content-start">
      <LinkComponent :data="apiData" v-cloak v-if="apiData"></LinkComponent>
      <h2 v-else>Keine Daten gefunden!</h2>
    </div>
    <div class="fit row wrap justify-center items-start content-start q-gutter-md">
      <DeezerComponent v-if="apiData.Metadata.deezerID" :data="apiData.Metadata.deezerID"/>
      <SpotifyComponent v-if="apiData.Metadata.spotifyID" :data="apiData.Metadata.spotifyID"/>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import { AxiosResponse } from 'axios';
import { ref, onMounted } from 'vue';
import LinkComponent from 'components/LinkComponent.vue';
import SpotifyComponent from 'components/SpotifyComponent.vue';
import DeezerComponent from 'components/DeezerComponent.vue';

interface InfoResponse {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  itemID: number;
  title: string;
  album: string;
  artist: string;
  url: string;
  acrID: string;
  Metadata: Metadata;
  Comment: Comment;
}

interface Metadata {
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
}

interface Comment {
    commentID: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    up:        number;
    down:      number;
    content:   string;
    created:   Date;
    thumb:     string;
}

export default {
  setup() {
    const $q = useQuasar();
    const apiData = ref<InfoResponse>();
    $q.loading.show();
    const route = useRoute();
    const acrID = route.params.id.toString();
    onMounted(() => {
      if (acrID.length > 0) {
        api
          .get(`/info/${acrID}`)
          .then((res: AxiosResponse<InfoResponse>) => {
            $q.loading.hide();
            if (res.status == 200) {
              console.log(res.data)
              const spotifyURL = res.data.Metadata.spotifyURL;
              const deezerURL = res.data.Metadata.deezerURL;
              if (spotifyURL.length == 0 && deezerURL.length == 0) {
                if (res.data.acrID)
                  window.location.href = 'https://aha-music.com/' + res.data.acrID
              }

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
      } else {
        window.open('/', '_blank');
      }
    });
    return {
      apiData,
    };
  },
  components: {
    LinkComponent,
    SpotifyComponent,
    DeezerComponent,
  },
};
</script>