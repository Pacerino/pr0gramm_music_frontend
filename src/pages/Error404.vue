<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        HEY GEH WEG
      </div>

      <q-btn
        class="q-mt-xl"
        unelevated
        color="secondary"
        to="/"
        label="/"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
