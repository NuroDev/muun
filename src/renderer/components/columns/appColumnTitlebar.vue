<template>
  <v-card class='appColumnTitlebar'>
    <v-toolbar>
        <v-icon class='draggable-handle'>drag_handle</v-icon>
        <v-spacer />
        <v-icon v-html='icon' />
        <v-tooltip bottom>
          <v-toolbar-title slot='activator' v-html='title' />
          <span>
            @<span v-html='username'></span>
          </span>
        </v-tooltip>
        <v-spacer />
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    props: ['icon', 'title', 'username', 'columnId']
  }
</script>

<style>
  .appColumnTitlebar {
    z-index: 1;
  }
  .appColumnTitlebar .draggable-handle {
    cursor: move;
  }
</style>
