<template>
    <div v-if="!card || !card.__MUUN_MODEL_TYPE">Invalid Card (is not truthy or no model type) {{JSON.stringify(card)}}</div>
    <app-tweet v-else-if="card.__MUUN_MODEL_TYPE === 'TWEET'" :tweet="card" />
    <div v-else>Do not know how to render card type {{card.__MUUN_MODEL_TYPE}} for card {{JSON.stringify(card)}}</div>
</template>

<script>
    import appTweet from './tweets/appTweet'

    export default {
      components: {
        appTweet
      },
      props: ['card']
    }
</script>
