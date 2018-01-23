<template>
    <section v-bind:style='customColumnStyles' class='appColumn' :id='columnId' transition='scale-transition' origin='center center'>
        <v-spacer :style='"height:" + columnOptions.columnHeaderSpacer + "px;"' />
        <v-card>
          <appColumnTitlebar :icon='icon' :title='title' :username='username' :loading='loading'/>
          <appColumnError :error='error'/>
          <v-container class="appColumn scroll-y pt-0" id="scroll-area">
              <v-layout row align-center justify-center v-scroll="{target: '#scroll-area'}">
                  <v-flex xs12>
                      <appTweet v-for='i in tweets' :tweet='i' :key="i.id"/>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-card>
    </section>
</template>

<script>
  import appColumnError from './appColumnError'
  import appColumnTitlebar from './appColumnTitlebar'
  import appTweet from '../tweets/appTweet'
  import twitter from '../../../main/lib/auth'

  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
      appColumnError,
      appColumnTitlebar,
      appTweet
    },
    created () {
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    props: ['icon', 'title', 'username', 'columnId'],
    data () {
      return {
        columnOptions: settingsStore.state.columnOptions,
        customColumnStyles: {
          width: settingsStore.state.columnOptions.columnWidth + 'px',
          padding: '0 3px'
        },
        tweets: [],
        loading: true,
        post: null
      }
    },
    methods: {
      fetchData () {
        this.error = this.tweets = null
        this.loading = true
        twitter.get('statuses/home_timeline', {}, (error, tweets, response) => {
          if (!error) {
            var processedTweets = []
            var tweet = null
            for (tweet of tweets) {
              console.log(tweet)
              processedTweets.push({
                id: tweet.id,
                text: tweet.text,
                displayName: tweet.user.name,
                username: tweet.user.screen_name,
                avatar: tweet.user.profile_image_url_https
              })
            }
            this.tweets = processedTweets
            this.loading = false
          } else {
            this.error = JSON.stringify(error)
            this.loading = false
          }
        })
      }
    }
  }
</script>

<style>
  .container {
      padding: 0 1px;
  }
  .appColumn {
      height: 100vh;
  }
</style>
