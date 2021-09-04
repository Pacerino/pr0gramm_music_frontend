<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ data.title }}</div>
      
      <div class="row no-wrap items-center">
        <div class="text-subtitle2">by {{ data.artist }}</div>
        <span class="text-caption text-grey q-ml-sm">( + {{data.Comment.up}} | - {{data.Comment.down}})</span>
      </div>
      <div class="text-caption text-grey" v-if="data.Comment.UpdatedAt">Letzte Aktualisierung: {{ formatDate(data.Comment.UpdatedAt) }} Uhr</div>
    </q-card-section>
    

    <q-separator />

    <q-card-actions vertical>
      <q-btn
        v-if="data.Metadata.soundcloudURL"
        color="soundcloud"
        icon="fab fa-soundcloud"
        @click="handleClick(data.Metadata.soundcloudURL)"
      />
      <q-btn
        v-if="data.Metadata.spotifyURL"
        color="spotify"
        icon="fab fa-spotify"
        @click="handleClick(data.Metadata.spotifyURL)"
      />
      <q-btn
        v-if="data.Metadata.deezerURL"
        color="deezer"
        icon="fab fa-deezer"
        @click="handleClick(data.Metadata.deezerURL)"
      />
      <q-btn
        v-if="data.Metadata.youtubeURL"
        color="youtube"
        icon="fab fa-youtube"
        @click="handleClick(data.Metadata.youtubeURL)"
      />
      <q-btn
        v-if="data.Metadata.applemusicURL"
        color="applemusic"
        icon="fab fa-itunes"
        @click="handleClick(data.Metadata.applemusicURL)"
      />
      <q-btn
        v-if="data.Metadata.tidalURL"
        color="tidal"
        icon="img:/tidal.svg"
        @click="handleClick(data.Metadata.tidalURL)"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import moment from 'moment';

interface InfoResponse {
  id: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
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
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  up: number;
  down: number;
  content: string;
  created: Date;
  thumb: string;
}

export default defineComponent({
  name: 'LinkComponent',
  props: {
    data: {
      type: Object as PropType<InfoResponse>,
    },
  },
  setup() {
    return {
      handleClick(url: string) {
        window.open(url, '_blank');
      },
      formatDate(date: string) {
        const momentDate = moment(date)
        if (momentDate.isValid()) {
          momentDate.locale('de')
          return momentDate.format('LLL')
        }
      }
    };
  },
});
</script>

<style scoped>
.bg-spotify {
  background: #1db954;
}

.bg-soundcloud {
  background: #ff8800;
}

.bg-youtube {
  background: #ff0000;
}

.bg-deezer {
  background: #ef5466;
}

.bg-applemusic {
  background: #fa243c;
}

.bg-tidal {
  background: black;
}
</style>