<template>
  <div id="sidebar">
    <CreateScene/>
    <Scenes @addScript="addScript" :scenes="scenes"/>
  </div>
</template>

<style scoped>
  #sidebar{
    width: 25%;
  }
</style>

<script>
import CreateScene from "@/components/CreateScene.vue";
import Scenes from "@/components/Scenes.vue";
export default {
  name: 'Sidebar',
  props: ['scenes'],
  components: {
    CreateScene,
    Scenes
  },
  methods: {
    addScript(scene) {
      this.$emit('addScript', scene);
    }
  }
}
</script>