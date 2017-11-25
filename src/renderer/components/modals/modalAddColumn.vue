<template>
    <v-layout row justify-center>
        <v-dialog v-model='showAddColumnDialog' max-width='750px'>
            <v-card>
                <!-- Add column modal toolbar -->
                <v-toolbar>
                    <v-toolbar-title>Accounts</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon flat @click='showAddColumnDialog = !showAddColumnDialog'>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-toolbar>

                <!-- Add column modal content -->
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
        showAddColumnDialog: modalsStore.state.showAddColumnDialog
      }
    }
  }
</script>