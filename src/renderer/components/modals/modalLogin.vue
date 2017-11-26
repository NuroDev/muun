<template>
    <v-layout row justify-center>
        <v-dialog v-model='showAccountsDialog' max-width='750px'>
            <v-card>
                <!-- Accounts modal toolbar -->
                <v-toolbar>
                    <v-toolbar-title>Accounts</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon flat @click='showAccountsDialog = !showAccountsDialog'>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-toolbar>

                <!-- Accounts modal content -->
                <v-card>
                    <v-container grid-list-md text-xs-center>
                        <v-layout row wrap>
                            
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
        showAccountsDialog: modalsStore.state.showAccountsDialog
      }
    }
  }
</script>