<template>
    <section v-bind:style='customColumnStyles' class='appColumn' :id='columnId' transition='scale-transition' origin='center center'>
        <v-spacer :style='"height:" + columnOptions.columnHeaderSpacer + "px;"' />
        <v-card>
          <v-container class="appColumn scroll-y pt-0" id="scroll-area">
              <v-layout row align-center justify-center v-scroll="{target: '#scroll-area'}">
                  <v-flex xs12>
                      <appColumnTitlebar :icon='icon' :title='title' :username='username'/>
                      <v-list v-for='i in 20' :key='i' style='padding: 0;'>
                          <appTweet />
                      </v-list>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-card>
    </section>
</template>

<script>
  import appColumnTitlebar from './appColumnTitlebar'
  import appTweet from '../tweets/appTweet'

  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
      appColumnTitlebar,
      appTweet
    },
    props: ['icon', 'title', 'username', 'columnId'],
    data () {
      return {
        columnOptions: settingsStore.state.columnOptions,
        customColumnStyles: {
          width: settingsStore.state.columnOptions.columnWidth + 'px',
          padding: '0 3px'
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
