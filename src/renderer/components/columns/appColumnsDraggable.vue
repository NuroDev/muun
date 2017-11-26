<template>
  <draggable element="section" class="draggable" :options="draggable" v-model="columns">
    <section v-for='i in columns' :key='i'>
      <appColumn :icon='i.icon' :title='i.title' :columnId='i.id'></appColumn>
    </section>
  </draggable>
</template>

<script>
  import appColumn from './appColumn'
  import columnsStore from '../../store/modules/columns'
  import draggable from 'vuedraggable'

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
        set (value) {
          this.$store.commit('updateColumnsOrder', value)
        }
      }
    },
    data () {
      return {
        draggable: {
          handle: '.draggable-handle'
        }
      }
    }
  }
</script>
