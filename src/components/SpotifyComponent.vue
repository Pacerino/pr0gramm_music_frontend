<template>
  <iframe v-bind:src="spotifyIFrameURL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
const spotifyIFrameURL = ref('')

export default defineComponent({
  name: 'SpotifyComponent',
  props: {
    data: {
      type: String as PropType<string>,
    },
  },
  mounted() {
    if(this.data) {
      const slice = this.data.split('::')
      if(slice[1].length > 0) {
        spotifyIFrameURL.value = 'https://open.spotify.com/embed/track/' + slice[1]
      }
    }
  },
  setup() {
    return {
      spotifyIFrameURL,
    }
  }
})
</script>