<script>
import {Character, Script} from "@/types.ts";

export default {
    name: 'CreateScene',
    data() {
      return{
        title: ''
      }
    },
    methods: {
      onSubmit() {
        if (this.title.trim()) {
          const newScene = {
            id: Date.now(),
            name: this.title,
            scripts: [],
            characters: [],
          }
          this.title = '';
          this.$parent.$emit('create', newScene);
        }
      }
    }
  }
</script>

<template>
  <form id="create-game" @submit.prevent="onSubmit">
    <input v-model="title" placeholder="Test" type="text" name="games" class="input" />
    <button type="submit" class="btn">Создать сцену</button>
  </form>
</template>

<style scoped>
  #create-game {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
</style>