<template>
    <v-layout row justify-center>
        <v-dialog v-model='showAccountLoginModal' max-width='750px'>
            <v-card>
                <!-- Accounts modal toolbar -->
                <v-toolbar>
                    <v-toolbar-title>Log in</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon flat @click='showAccountLoginModal = !showAccountLoginModal'>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-toolbar>

                <!-- Accounts modal content -->
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
        showAccountLoginModal: modalsStore.state.showAccountLoginModal
      }
    }
  }
</script>