<template>
    <v-navigation-drawer permanent floating mini-variant fixed app transition='slide-x-transition'>

        <!-- If on MacOS add spacer to top of sidebar to accomadate for custom titlebar -->
        <v-spacer v-if='os === "darwin"' style='height: 32px;'></v-spacer>

        <v-list>
            <!-- Search item always first (TEMP) -->
            <v-list-tile>
              <v-list-tile-action>
                 <v-tooltip right>
                  <v-btn flat slot="activator" :icon='smallItemBtn'>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <span>Search</span>
                 </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>

            <!-- Generate list of column items based on array in columns store -->
            <v-list-tile :key='i' v-for='(column, i) in columns' exact>
              <v-list-tile-action>
                 <v-tooltip right>
                  <v-btn flat slot="activator" href='#' v-scroll-to='column.id' :icon='smallItemBtn'>
                    <v-icon v-html="column.icon"></v-icon>
                  </v-btn>
                  <span v-html="column.title"></span>
                </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>

            <!-- Add column item always last -->
            <v-list-tile>
              <v-list-tile-action>
                <v-tooltip right>
                  <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop="showAddColumnDialog = !showAddColumnDialog">
                    <v-icon>add</v-icon>
                  </v-btn>
                  <span>Add Column</span>
                  <modalAddColumn></modalAddColumn>
                 </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>

            <section style='position: fixed; bottom: 10px;left: -18px;'>
              <v-list-tile>
                <v-list-tile-action>
                  <v-tooltip right>
                    <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop="showAccountsDialog = !showAccountsDialog">
                      <v-icon>group</v-icon>
                    </v-btn>
                    <span>Accounts</span>
                    <modalAccounts></modalAccounts>
                  </v-tooltip>
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-tooltip right>
                    <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop="showSettingsDialog = !showSettingsDialog">
                      <v-icon>settings</v-icon>
                    </v-btn>
                    <span>Settings</span>
                    <modalSettings></modalSettings>
                  </v-tooltip>
                </v-list-tile-action>
              </v-list-tile>
            </section>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
  import settingsStore from '../store/modules/settings'
  import modalsStore from '../store/modules/modals'
  import columnsStore from '../store/modules/columns'

  import modalSettings from './modals/modalSettings'
  import modalAccounts from './modals/modalAccounts'
  import modalAddColumn from './modals/modalAddColumn'

  export default {
    components: {
      modalSettings,
      modalAccounts,
      modalAddColumn
    },
    data () {
      return {
        showDrawer: settingsStore.state.general.showDrawer,
        showSettingsDialog: modalsStore.state.showSettingsDialog,
        showAccountsDialog: modalsStore.state.showAccountsDialog,
        showAddColumnDialog: modalsStore.state.showAddColumnDialog,
        smallItemBtn: settingsStore.state.general.sidebarItemsSmallerBtn,
        columns: columnsStore.state.columns,
        os: process.platform
      }
    }
  }
</script>