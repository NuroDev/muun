<template>
    <section v-bind:style='customColumnStyles' class='appColumn' :id='columnId' transition='scale-transition' origin='center center'>
        <v-spacer :style='"height:" + columnOptions.columnHeaderSpacer + "px;"' />
        <appColumnList :icon='icon' :title='title' />
    </section>
</template>

<script>
  import appColumnTitlebar from './appColumnTitlebar'
  import appColumnList from './appColumnList'
  import appTweet from '../tweets/appTweet'

  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
      appColumnTitlebar,
      appColumnList,
      appTweet
    },
    props: ['icon', 'title', 'columnId'],
    data () {
      return {
        columnOptions: settingsStore.state.columnOptions,
        customColumnStyles: {
          width: settingsStore.state.columnOptions.columnWidth + 'px',
          padding: '1px'
        }
      }
    }
  }
</script>

<style>
  .container {
    padding: 1px;
  }
  .appColumn {
      height: 100vh;
  }
</style>
