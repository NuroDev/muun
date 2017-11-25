<template>
    <section v-bind:style='customColumnStyles' class='appColumn' :id='columnId'>
        <v-card class='appColumn'>
            <v-toolbar>
                <v-btn icon>
                    <v-icon v-html='icon'></v-icon>
                </v-btn>
                <v-toolbar-title v-html='title'></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
        <v-spacer :style='"height:" + columnOptions.columnHeaderSpacer + "px;" '></v-spacer>
        <v-card>
            <v-container style="height: 90vh;" class="scroll-y pt-0" id="scroll-area">
                <v-layout row align-center justify-center v-scroll="{target: '#scroll-area'}">
                    <v-flex xs12>
                        <v-list v-for='i in 20' :key='i' style='padding: 0;'>
                            <appTweet></appTweet>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </section>
</template>

<script>
  import appTweet from '../tweets/appTweet'
  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
      appTweet,
      settingsStore
    },
    props: ['icon', 'title', 'columnId'],
    data () {
      return {
        columnOptions: settingsStore.state.columnOptions,
        customColumnStyles: {
          width: settingsStore.state.columnOptions.columnWidth + 'px',
          padding: settingsStore.state.columnOptions.columnPadding + 'px'
        }
      }
    }
  }
</script>

<style>
    .appColumn {
        height: 99vh;
    }
</style>
