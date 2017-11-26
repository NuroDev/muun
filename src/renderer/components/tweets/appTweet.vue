<template>
  <v-card flat>
    <v-list three-line>
      <v-list-group v-for='i in tweets' :value='i.active' :key='i.title'>

        <!-- Main tweet card -->
        <v-list-tile slot='item'>
          <v-list-tile-avatar :tile='!roundedAvatars'>
            <img v-bind:src='i.avatar' />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <span v-html='i.displayName'></span>
              <span v-html='i.username'></span>
            </v-list-tile-title>
            <v-list-tile-sub-title :style='tweetTextStyles' v-html='i.text'></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>

        <!-- Tweet actions tab drop down -->
        <appTweetActions></appTweetActions>

      </v-list-group>
    </v-list>
  </v-card>
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
        tweets: tweetsStore.state.tweets,
        roundedAvatars: settingsStore.state.tweetOptions.roundedAvatars,
        tweetTextStyles: {
          fontSize: settingsStore.state.tweetOptions.fontSize + 'px'
        }
      }
    }
  }
</script>
