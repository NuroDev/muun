<template>
  <v-card flat>
    <v-list three-line>
      <v-list-group v-for='item in tweets' :value='item.active' v-bind:key='item.title'>

        <!-- Main tweet card -->
        <v-list-tile slot='item'>
          <v-list-tile-avatar :tile='!roundedAvatars'>
            <img v-bind:src='item.avatar' />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <span v-html='item.displayName'></span>
              <span v-html='item.username'></span>
            </v-list-tile-title>
            <v-list-tile-sub-title :style='tweetTextStyles' v-html='item.text'></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-divider></v-divider>
        </v-list-tile>

        <!-- Tweet actions tab drop down -->
        <v-tabs centered>
          <v-tabs-bar class='secondary'>
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

      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  import tweetsStore from '../../store/modules/tweets'
  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
      tweetsStore
    },
    data () {
      return {
        tweets: tweetsStore.state.tweets,
        roundedAvatars: settingsStore.state.tweetOptions.roundedAvatars,
        replaceStarsWithHearts: settingsStore.state.tweetOptions.replaceStarsWithHearts,
        tweetTextStyles: {
          fontSize: settingsStore.state.tweetOptions.fontSize + 'px'
        }
      }
    }
  }
</script>
