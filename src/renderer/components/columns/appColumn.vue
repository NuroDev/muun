<template>
    <section v-bind:style='customColumnStyles' class='appColumn' :id='columnId' transition='scale-transition' origin='center center'>
        <v-spacer :style='"height:" + columnOptions.columnHeaderSpacer + "px;"' />
        <v-card>
          <appColumnTitlebar :icon='icon' :title='title' :username='username' :loading='loading'/>
          <appColumnError :error='error'/>
          <v-container class="appColumn scroll-y pt-0" :id="'scroll-for-' + columnId">
              <v-layout row align-center justify-center v-scroll="{target: '#scroll-for-' + this.columnId, callback: this.onScroll}">
                  <v-flex xs12>
                      <appCard v-for='i in cards' :card='i'/>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-card>
    </section>
</template>

<script>
  import appColumnError from './appColumnError'
  import appColumnTitlebar from './appColumnTitlebar'
  import suppliers from '../../../api/twitter/suppliers/suppliers'
  import appCard from './cards/appCard'

  import settingsStore from '../../store/modules/settings'

  export default {
    components: {
      appColumnError,
      appColumnTitlebar,
      appCard
    },
    created () {
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    props: ['icon', 'title', 'username', 'columnId', 'supplierSettings'],
    data () {
      return {
        columnOptions: settingsStore.state.columnOptions,
        customColumnStyles: {
          width: settingsStore.state.columnOptions.columnWidth + 'px',
          padding: '0 3px'
        },
        cards: [],
        loading: true,
        post: null,
        error: null,
        show_error: false,
        supplier: suppliers.provide(this.supplierSettings, (err, tweets) => {
          this.loading = false
          if (err) {
            this.error = JSON.stringify(err)
          } else {
            this.cards = tweets
          }
        })
      }
    },
    methods: {
      fetchData () {
        this.error = this.cards = null
        this.loading = true
        this.supplier.load()
      },
      onScroll (e) {
        let distanceFromBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight
        if (distanceFromBottom <= 100 && !this.loading) {
          this.loading = true
          this.supplier.loadOlder(20)
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
