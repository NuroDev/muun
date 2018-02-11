<template>
    <section v-bind:style='customColumnStyles' class='appColumn' :id='columnId' transition='scale-transition' origin='center center'>
        <v-spacer :style='"height:" + columnOptions.columnHeaderSpacer + "px;"' />
        <v-card>
          <appColumnTitlebar :icon='icon' :title='title' :username='username' :loading='loading'/>
          <appColumnError :error='error'/>
          <v-container class="appColumn scroll-y pt-0" :id="'scroll-for-' + columnId">
              <v-layout row align-center justify-center v-scroll="{target: '#scroll-for-' + this.columnId, callback: this.onScroll}">
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
  import appTweet from './cards/tweets/appTweet'
  import tweetsStore from '../../store/modules/tweets'
  import homeTimeline from '../../../api/twitter/streams/home_timeline'

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
        post: null,
        error: null,
        notDummy: false,
        show_error: false,
        homeTimeline: homeTimeline.newTimeline((err, tweets) => {
          this.loading = false
          if (err) {
            this.error = JSON.stringify(err)
          } else {
            this.tweets = tweets
          }
        })
      }
    },
    methods: {
      fetchData () {
        this.error = this.tweets = null
        this.loading = true
        if (this.columnId === 'column-0') {
          this.notDummy = true
          this.homeTimeline.load()
        } else {
          setTimeout(() => {
            this.tweets = tweetsStore.state.getTweets(40)
            this.loading = false
          }, 4000)
        }
      },
      onScroll (e) {
        let distanceFromBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight
        if (distanceFromBottom <= 100 && !this.loading) {
          if (this.notDummy) {
            this.loading = true
            this.homeTimeline.loadOlder(20)
          } else {
            console.log('LOADING')
            this.loading = true
            setTimeout(() => {
              this.tweets = this.tweets.concat(tweetsStore.state.getTweets(40))
              this.loading = false
            }, 500)
          }
        }
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
