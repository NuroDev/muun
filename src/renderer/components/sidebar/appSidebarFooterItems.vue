<template>
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
</template>

