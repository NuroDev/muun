<template>
    <v-layout row justify-center>
        <v-dialog v-model='showSettingsDialog' max-width='750px'>
            <v-card>
                <!-- Setting modal toolbar -->
                <v-tabs grow>
                    <v-toolbar>
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon flat @click='showSettingsDialog = !showSettingsDialog'>
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-tabs-bar slot="extension">
                            <v-tabs-slider color="primary"></v-tabs-slider>
                            <v-tabs-item v-for="(item, i) in settingsDialogTabs" :key="i" :href="'#settingsModalTab-' + (i + 1)">
                                <v-tooltip top>
                                    <div slot="activator">
                                        <v-icon v-html='item.icon'></v-icon>
                                    </div>
                                    <span v-html='item.title'></span>
                                </v-tooltip>
                            </v-tabs-item>
                        </v-tabs-bar>
                    </v-toolbar>
                </v-tabs>

                <!-- Setting modal content -->
                <v-card>
                    <v-container grid-list-md text-xs-center>
                        <v-layout row wrap>
                            <v-flex xs4 v-for='i in 3' :key='i'>
                                <v-card color='primary'>
                                    <v-card-text class='px-0'>4</v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
  import modalsStore from '../../store/modules/modals'

  export default {
    data () {
      return {
        showSettingsDialog: modalsStore.state.showSettingsDialog,
        settingsDialogTabs: modalsStore.state.settingsTabs
      }
    }
  }
</script>