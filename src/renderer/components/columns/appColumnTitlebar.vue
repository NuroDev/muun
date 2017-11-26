<template>
  <v-card class='appColumnTitlebar'>
    <v-toolbar>
        <v-btn class="draggable-anchor" icon>
            <v-icon v-html='icon'></v-icon>
        </v-btn>
        <v-toolbar-title v-html='title'></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    props: ['icon', 'title', 'columnId']
  }
</script>

<style>
  .appColumnTitlebar {
    z-index: 1;
  }
</style>
