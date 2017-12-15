<template>

        <!-- Main tweet card -->
  <section>
        <v-card v-for='i in tweets' :value='i.active' :key='i.title'>

          <v-card-text>
            <img class="wrapping-avatar" v-bind:src='i.avatar' />
            <h3><span v-html='i.displayName' />   <small><span v-html='i.username' /></small></h3>
            <p><span  v-html='i.text' /></p>
          </v-card-text>

        </v-card>
        <!-- Tweet actions tab drop down -->
        <appTweetActions />
  </section>
</template>

<script>
  import appTweetActions from './appTweetActions'

  import tweetsStore from '../../store/modules/tweets'
  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
      appTweetActions
    },
    data () {
      return {
        tweets: tweetsStore.state.getTweets(40),
        roundedAvatars: settingsStore.state.tweetOptions.roundedAvatars,
        tweetTextStyles: {
          fontSize: settingsStore.state.tweetOptions.fontSize + 'px'
        }
      }
    }
  }
</script>

<style>
  .show-all {
    -webkit-line-clamp: inherit !important;
  }
  .auto-height > .list__tile {
    height: auto;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .wrapping-avatar {
    float: left;
  }

  .allow-wrapping-images {
    flex-direction: row;
  }
</style>
