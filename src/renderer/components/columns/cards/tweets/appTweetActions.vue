<template>
  <v-tabs centered>
    <v-tabs-bar>
      <v-tabs-item>
        <v-icon>reply</v-icon>
      </v-tabs-item>
      <v-tabs-item>
        <v-icon v-if='replaceStarsWithHearts'>star</v-icon>
        <v-icon v-if='!replaceStarsWithHearts'>favorite</v-icon>
      </v-tabs-item>
      <v-tabs-item>
        <v-icon>repeat</v-icon>
      </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>

<script>
  import settingsStore from '../../../../store/modules/settings'

  export default {
    props: ['item'],
    data () {
      return {
        replaceStarsWithHearts: settingsStore.state.tweetOptions.replaceStarsWithHearts
      }
    }
  }
</script>
