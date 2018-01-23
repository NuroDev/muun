<template>
  <v-card v-if='error'>
      <v-card-title primary-title>
          <div class='headline'>
            <v-icon>error</v-icon>
            <span>Well that's not right</span>
          </div>
          <div>An error occurred as we asked Twitter something :( ... try again in a bit</div>
      </v-card-title>
      <v-card-actions>

          <v-spacer />
          <v-btn flat @click.native='showError = !showError'>
              More details
              <v-icon>{{ showError ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
          <v-card-text v-show='showError'>
              {{ error }}
          </v-card-text>
      </v-slide-y-transition>
  </v-card>
</template>

<script>
  export default {
    props: ['error'],
    data () {
      return {
        showError: false
      }
    }
  }
</script>
