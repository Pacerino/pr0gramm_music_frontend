<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn :ripple="false" to="/" flat label="pr0gramm_music" />
        </q-toolbar-title>

        <q-space />
        <q-btn-group>
          <q-btn flat icon="insights" label="Statistik" to="stats" />
          <q-btn flat icon="view_list" label="Changelog" to="changelog" />
          <q-btn flat icon="code" label="Github" to="/" @click="handleGithub"/>
        </q-btn-group>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return{
      handleGithub() {
        window.open('https://github.com/Pacerino?tab=repositories&q=pr0gramm_music', '_blank')
      }
    }
  }
});
</script>
