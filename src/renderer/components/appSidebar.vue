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
                  <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop='$store.commit("toggleAddColumnModal")'>
                    <v-icon>add</v-icon>
                  </v-btn>
                  <span>Add Column</span>
                 </v-tooltip>
              </v-list-tile-action>
            </v-list-tile>

            <section style='position: fixed; bottom: 10px;left: -18px;'>
              <v-list-tile>
                <v-list-tile-action>
                  <v-tooltip right>
                    <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop='$store.commit("toggleAccountsModal")'>
                      <v-icon>group</v-icon>
                    </v-btn>
                    <span>Accounts</span>
                  </v-tooltip>
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-tooltip right>
                    <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop='$store.commit("toggleSettingsModal")'>
                      <v-icon>settings</v-icon>
                    </v-btn>
                    <span>Settings</span>
                  </v-tooltip>
                </v-list-tile-action>
              </v-list-tile>
            </section>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
  import settingsStore from '../store/modules/settings'
  import columnsStore from '../store/modules/columns'

  export default {
    data () {
      return {
        smallItemBtn: settingsStore.state.general.sidebarItemsSmallerBtn,
        columns: columnsStore.state.columns,
        os: process.platform
      }
    }
  }
</script>