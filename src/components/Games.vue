<template>
  <div id="games">
    <GameItem v-for="game of games" v-bind:game="game" @addScript="addScript" />
  </div>
</template>

<style scoped>

</style>

<script>
import GameItem from "@/components/GameItem.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: 'Games',
  props: ['games'],
  components: {
    Sidebar,
    GameItem
  },
  methods: {
    addScript(game) {
      this.$emit('addScript', game);
    }
  }
}
</script>