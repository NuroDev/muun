<template>
  <draggable element='section' class='d-flex' :options='draggable' v-model='columns'>
    <section v-for='column in columns' :key='column.id'>
      <appColumn :icon='column.icon' :title='column.title' :columnId='column.id'></appColumn>
    </section>
  </draggable>
</template>

<script>
  import appColumn from './appColumn'
  import columnsStore from '../../store/modules/columns'
  import draggable from 'vuedraggable'

  import settingsStore from '../../store/modules/settings'

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
        draggable: {
          animation: settingsStore.state.columnOptions.draggableSpeed,
          ghostClass: 'ghost',
          handle: '.draggable-handle'
        }
      }
    }
  }
</script>

<style>
  .ghost {
    opacity: .5;
  }
</style>
