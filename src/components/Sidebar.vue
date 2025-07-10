<template>
  <div id="sidebar">
    <CreateGame/>
    <Scenes @addScript="addScript" :scenes="scenes"/>
  </div>
</template>

<style scoped>
  #sidebar{
    width: 25%;
  }
</style>

<script>
import CreateGame from "@/components/CreateGame.vue";
import Scenes from "@/components/Scenes.vue";
export default {
  name: 'Sidebar',
  props: ['scenes'],
  components: {
    CreateGame,
    Scenes
  },
  methods: {
    addScript(scene) {
      this.$emit('addScript', scene);
    }
  }
}
</script>