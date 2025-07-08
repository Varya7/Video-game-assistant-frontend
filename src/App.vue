<template>
  <div id="app">
    <Sidebar v-bind:games="games" @create="createGame" @addScript="addScript"/>
    <Main/>
    <ModalWindow v-if="createScriptModalOpened" :header="'Создать сценарий'" @closeModal="setCreateScriptModalState"><CreateScriptModal/></ModalWindow>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import GameItem from "@/components/GameItem.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import CreateScriptModal from "@/components/CreateScriptModal.vue";
export default {
  name: 'App',
  components: {
    CreateScriptModal,
    ModalWindow,
    Sidebar,
    Main
  },
  methods: {
    createGame(game) {
      this.games.push(game);
    },
    setCreateScriptModalState(state) {
      this.createScriptModalOpened = state;
    },
    addScript(game) {
      this.setCreateScriptModalState(true);
    }
  },
  data() {
    return {'games': [
        {id: 1, title: 'Game 1', scripts: [], characters: []},
        {id: 2, title: 'Game 2', scripts: [], characters: []},
      ],
      createScriptModalOpened: false,
    };
  }
}
</script>

<style>
body{
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 97.5vh;
}
.btn{
  background: none;
  cursor: pointer;
  border: #363636  1px solid;
  padding: 7px 4.5%;
  border-radius: 7px;
}
.input {
  border-radius: 10px;
  border: black 1px solid;
  height: fit-content;
  width: 100%;
}
.number-input {
  field-sizing: content;
  width: fit-content;
}
.label {
  margin-right: 2%;
}
.flipped-vert {
  -webkit-transform: scale(-1, -1);
  -moz-transform: scale(-1, -1);
  -o-transform: scale(-1, -1);
  transform: scale(-1, -1);
}
</style>
