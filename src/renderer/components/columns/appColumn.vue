<template>
    <section v-bind:style='customColumnStyles' class='appColumn' :id='columnId' transition='scale-transition' origin='center center'>
        <v-spacer :style='"height:" + columnOptions.columnHeaderSpacer + "px;"' />
        <v-card>
          <appColumnTitlebar :icon='icon' :title='title' :username='username' :loading='loading'/>
            <v-card v-if="error">
                <v-card-title primary-title>
                    <div class="headline">Well that's not right</div>
                    <div>An error occurred as we asked Twitter something :( ... try again in a bit</div>
                </v-card-title>
                <v-card-actions>

                    <v-spacer />
                    <v-btn flat @click.native="show_error = !show_error">
                        More details
                        <v-icon>{{ show_error ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                    <v-card-text v-show="show_error">
                        {{ error }}
                    </v-card-text>
                </v-slide-y-transition>
            </v-card>
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
  import appColumnTitlebar from './appColumnTitlebar'
  import appTweet from '../tweets/appTweet'
  import tweetsStore from '../../store/modules/tweets'
  import homeTimeline from '../../../app/twitter/streams/home_timeline'

  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
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
          this.homeTimeline.load()
        } else {
          setTimeout(() => {
            this.tweets = tweetsStore.state.getTweets(40)
            this.loading = false
          }, 2000)
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
