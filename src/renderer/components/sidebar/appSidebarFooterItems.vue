<template>
  <section style='position: fixed; bottom: 10px;left: -18px;'>
    <v-list-tile>
      <v-list-tile-action>
        <v-tooltip right>
          <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop='$store.commit("toggleDarkTheme")'>
            <v-icon :class='!$vuetify.dark ? "white--text" : ""'>opacity</v-icon>
          </v-btn>
          <span>Toggle Theme</span>
        </v-tooltip>
      </v-list-tile-action>
    </v-list-tile>

    <v-list-tile>
      <v-list-tile-action>
        <v-tooltip right>
          <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop='$store.commit("toggleAccountsModal")'>
            <v-icon :class='!$vuetify.dark ? "white--text" : ""'>group</v-icon>
          </v-btn>
          <span>Accounts</span>
        </v-tooltip>
      </v-list-tile-action>
    </v-list-tile>

    <v-list-tile>
      <v-list-tile-action>
        <v-tooltip right>
          <v-btn flat slot="activator" :icon='smallItemBtn' @click.stop='$store.commit("toggleSettingsModal")'>
            <v-icon :class='!$vuetify.dark ? "white--text" : ""'>settings</v-icon>
          </v-btn>
          <span>Settings</span>
        </v-tooltip>
      </v-list-tile-action>
    </v-list-tile>
  </section>
</template>

<script>
  import settingsStore from '../../store/modules/settings'

  export default {
    data () {
      return {
        smallItemBtn: settingsStore.state.general.sidebarItemsSmallerBtn
      }
    }
  }
</script>