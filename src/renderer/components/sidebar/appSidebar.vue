<template>
    <v-navigation-drawer :class='!$vuetify.dark ? "primary" : ""' permanent floating mini-variant fixed app transition='slide-x-transition'>

        <!-- If on MacOS add spacer to top of sidebar to accomadate for custom titlebar -->
        <v-spacer v-if='os === "darwin"' style='height: 32px;' />

        <v-list :class='!$vuetify.dark ? "white--text" : ""'>
            <!-- Search item always first (TEMP) -->
            <v-list-tile>
              <v-list-tile-action>
                 <v-tooltip right>
                  <v-btn flat slot="activator" :icon='smallItemBtn'>
                    <v-icon :class='!$vuetify.dark ? "white--text" : ""'>search</v-icon>
                  </v-btn>
                  <span>Search</span>
                 </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>

            <!-- Generate list of column items based on array in columns store -->
            <v-list-tile :key='i' v-for='(column, i) in columns' exact>
              <appSidebarColumnItems :id='column.id' :title='column.title' :icon='column.icon' :smallIcon='smallItemBtn' />
            </v-list-tile>

            <!-- Add column item always last -->
            <v-list-tile>
              <v-list-tile-action>
                <v-tooltip right>
                  <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop='$store.commit("toggleAddColumnModal")'>
                    <v-icon :class='!$vuetify.dark ? "white--text" : ""'>add</v-icon>
                  </v-btn>
                  <span>Add Column</span>
                 </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>

            <appSidebarFooterItems />

        </v-list>
    </v-navigation-drawer>
</template>

<script>
  import appSidebarColumnItems from './appSidebarColumnItems'
  import appSidebarFooterItems from './appSidebarFooterItems'

  import settingsStore from '../../store/modules/settings'
  import columnsStore from '../../store/modules/columns'

  export default {
    components: {
      appSidebarColumnItems,
      appSidebarFooterItems
    },
    data () {
      return {
        smallItemBtn: settingsStore.state.general.sidebarItemsSmallerBtn,
        columns: columnsStore.state,
        os: process.platform
      }
    }
  }
</script>
