<script>
  export default {
    name: 'CreateGame',
    data() {
      return{
        title: ''
      }
    },
    methods: {
      onSubmit() {
        if (this.title.trim()) {
          const newGame = {
            id: Date.now(),
            title: this.title,
            scripts: [],
            characters: []
          }
          this.title = '';
          this.$parent.$emit('create', newGame);
        }
      }
    }
  }
</script>

<template>
  <form id="create-game" @submit.prevent="onSubmit">
    <input v-model="title" placeholder="Test" type="text" name="games" class="input" />
    <button type="submit" class="btn">Create new game</button>
  </form>
</template>

<style scoped>
  #create-game {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
</style>