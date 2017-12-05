<template>
  <section>
    <appColumn :icon='icon' :title='title' :username='username' :columnId='id' />
  </section>
</template>

<script>
  import appColumn from './appColumn'
  import columnsStore from '../../store/modules/columns'

  export default {
    components: {
      appColumn
    },
    props: ['icon', 'title', 'username', 'id'],
    data () {
      return {
        columns: columnsStore.state
      }
    }
  }
</script>
