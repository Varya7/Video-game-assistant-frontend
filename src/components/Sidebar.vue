<template>
  <div id="sidebar">
    <CreateGame/>
    <Games @addScript="addScript" v-bind:games="games"/>
  </div>
</template>

<style scoped>
  #sidebar{
    width: 25%;
  }
</style>

<script>
import CreateGame from "@/components/CreateGame.vue";
import Games from "@/components/Games.vue";
export default {
  name: 'Sidebar',
  props: ['games'],
  components: {
    CreateGame,
    Games
  },
  methods: {
    addScript(game) {
      this.$emit('addScript', game);
    }
  }
}
</script>