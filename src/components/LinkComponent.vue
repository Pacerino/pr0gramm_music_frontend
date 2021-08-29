<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{data['title']}}</div>
      <div class="text-subtitle2">by {{data['artist']}}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn v-if="data['soundcloudURL']" color="soundcloud" icon="fab fa-soundcloud" @click="handleClick(data['soundcloudURL'])"/>
      <q-btn v-if="data['spotifyURL']" color="spotify" icon="fab fa-spotify" @click="handleClick(data['spotifyURL'])"/>
      <q-btn v-if="data['deezerURL']" color="deezer" icon="fab fa-deezer" @click="handleClick(data['deezerURL'])"/>
      <q-btn v-if="data['youtubeURL']" color="youtube" icon="fab fa-youtube" @click="handleClick(data['youtubeURL'])"/>
      <q-btn v-if="data['applemusicURL']" color="applemusic" icon="fab fa-itunes" @click="handleClick(data['applemusicURL'])"/>
      <q-btn v-if="data['tidalURL']" color="tidal" icon="img:/tidal.svg" @click="handleClick(data['tidalURL'])"/>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LinkComponent',
  props: ['data'],
  setup() {
    return{
      handleClick(url: string) {
        window.open(url, '_blank')
      }
    }
  }
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