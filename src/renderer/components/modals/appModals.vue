<template>
  <section>
    <modalAccounts />
    <modalAddColumn />
    <modalKeyBindings />
    <modalLoginAccount />
    <modalSettings />
  </section>
</template>

<script>
  import modalAccounts from './modalAccounts'
  import modalAddColumn from './modalAddColumn'
  import modalKeyBindings from './modalKeyBindings'
  import modalLoginAccount from './modalLoginAccount'
  import modalSettings from './modalSettings'

  export default {
    components: {
      modalAccounts,
      modalAddColumn,
      modalKeyBindings,
      modalLoginAccount,
      modalSettings
    }
  }
</script>
