<template>

        <!-- Main tweet card -->
        <v-card :value='tweet.active' :key='tweet.title'  class="column-card pt-2 pb-2">

          <v-card-title class="tweet-title">
            <img class="wrapping-avatar" v-bind:src='tweet.sender.avatarSrc'/>
            <h3 class="no-expansion"><span class="one-line" v-html='tweet.sender.displayName' /><br/><small>@<span class="one-line" v-html='tweet.sender.twitterHandle' /></small></h3>
          </v-card-title>
          <v-card-text class="tweet-text">
            <p><span  v-html='tweet.text' /></p>
            <!-- TODO <app-tweet-actions /> ~ Zed 16/12/17-->
          </v-card-text>
          <v-card-media v-if="tweet.attachment" :src="tweet.attachment.img.src" height="175px" class="tweet-media"/>
          <!-- TODO support multiple attachments - need to update tweet model so attachment is array ~ Zed 16/12/17 -->
          <v-divider/>

        </v-card>
        <!-- Tweet actions tab drop down -->
</template>

<script>
  import appTweetActions from './appTweetActions'

  import settingsStore from '../../../../store/modules/settings'

  export default {
    components: {
      appTweetActions
    },
    props: ['tweet'],
    data () {
      return {
        roundedAvatars: settingsStore.state.tweetOptions.roundedAvatars,
        tweetTextStyles: {
          fontSize: settingsStore.state.tweetOptions.fontSize + 'px'
        }
      }
    }
  }
</script>

<style>

  .column-card {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .wrapping-avatar {
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
    width: auto;
  }

  .tweet-title {
    vertical-align: middle;
    padding-top: 0;
    padding-bottom: 5px;
    height: 48px;
    flex-wrap: nowrap;
  }

  .tweet-text {
    padding-top: 0;
    padding-bottom: 0;
  }

  .tweet-media {
    margin-bottom: 5px; /* So the separator is still visible */
  }

  .one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: none;
    white-space: nowrap;
    -webkit-line-clamp: 1;
  }
</style>
