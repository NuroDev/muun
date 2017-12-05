<template>
  <v-card class='appColumnTitlebar'>
    <v-toolbar :class='!$vuetify.dark ? "primary" : ""'>
        <v-icon class='draggable-handle' :class='!$vuetify.dark ? "white--text" : ""'>drag_handle</v-icon>
        <v-spacer />
        <v-icon v-html='icon' :class='!$vuetify.dark ? "white--text" : ""' />
        <v-tooltip bottom>
          <v-toolbar-title slot='activator' v-html='title' :class='!$vuetify.dark ? "white--text" : ""'/>
          <span>
            @<span v-html='username' />
          </span>
        </v-tooltip>
        <v-spacer />
        <v-btn icon>
            <v-icon :class='!$vuetify.dark ? "white--text" : ""'>more_vert</v-icon>
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
