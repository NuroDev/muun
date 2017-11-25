<template>
  <v-app :dark='isDarkTheme'>
    <appSidebar></appSidebar>
    <v-content>
      <v-container fluid>
        <v-layout row>
          <section v-for='i in columns' :key='i'>
            <appColumn :icon='i.icon' :title='i.title' :columnId='i.id'></appColumn>
          </section>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import appSidebar from './appSidebar'
  import appColumn from './columns/appColumn'

  import settingsStore from '../store/modules/settings'
  import columnsStore from '../store/modules/columns'

  export default {
    components: {
      appSidebar,
      appColumn
    },
    data () {
      return {
        isDarkTheme: settingsStore.state.theme.isDarkTheme,
        columns: columnsStore.state.columns
      }
    }
  }
</script>

<style>
  /** 
  * Core Vuetify overwrites
  **/
  .container {
    padding: 5px;
  }
  .application--light,
  .application.theme--light {
    background: linear-gradient(180deg, rgba(238, 238, 238, 0.75) 0%, rgba(238, 238, 238, 0.75) 100%) fixed;
    background-attachment: fixed;
    background-size: cover;
  }
  .application--dark,
  .application.theme--dark {
    background: linear-gradient(180deg, rgba(51, 51, 51, 0.75) 0%, rgba(51, 51, 51, 0.75) 100%) fixed;
    background-attachment: fixed;
    background-size: cover;
  }
  .content {
    padding-left: 0!important;
  }
  .content--wrap {
    margin-left: 80px!important;
  }
  .list {
    padding: 0;
  }
  .list--group__header > li {
    transition: all .3s;
  }
  .list--group__header > li:hover {
    transition: all .3s;
  }
</style>
