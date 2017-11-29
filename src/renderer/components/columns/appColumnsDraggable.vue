<template>
  <draggable element='section' class='d-flex' :options='dragOptions' v-model='columns'>
    <section v-for='column in columns' :key='column.id'>
      <appColumn :icon='column.icon' :title='column.title' :columnId='column.id' />
    </section>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable'

  import appColumn from './appColumn'
  import settingsStore from '../../store/modules/settings'
  import columnsStore from '../../store/modules/columns'

  export default {
    components: {
      appColumn,
      draggable
    },
    computed: {
      columns: {
        get () {
          return columnsStore.state.columns
        },
        set (columns) {
          this.$store.commit('updateColumnsOrder', columns)
        }
      }
    },
    data () {
      return {
        dragOptions: settingsStore.state.dragOptions
      }
    }
  }
</script>

<style>
  .ghost {
    opacity: .5;
  }
</style>
