<template>
  <v-card>
    <v-container class="appColumn scroll-y pt-0" id="scroll-area">
        <v-layout row align-center justify-center v-scroll="{target: '#scroll-area'}">
            <v-flex xs12>
                <v-list v-for='i in 20' :key='i' style='padding: 0;'>
                    <appTweet />
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import appTweet from '../tweets/appTweet'

  export default {
    components: {
      appTweet
    }
  }
</script>