<template>
  <iframe title="deezer-widget" v-bind:src="deezerIFrameURL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
const deezerIFrameURL = ref('')

export default defineComponent({
  name: 'DeezerComponent',
  props: {
    data: {
      type: String as PropType<string>,
    },
  },
  mounted() {
    if(this.data) {
      const slice = this.data.split('::')
      if(slice[1].length > 0) {
        deezerIFrameURL.value = 'https://widget.deezer.com/widget/dark/track/' + slice[1]
      }
    }
  },
  setup() {
    return {
      deezerIFrameURL,
    }
  }
})
</script>