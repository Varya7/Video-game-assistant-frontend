<script>
import Checkbox from "@/components/Checkbox.vue";
export default {
  name: "PlayerGetsSettings",
  props: ['checkbox', 'input'],
  components: {
    Checkbox
  },
  methods: {
    checkboxChanged(value){
      this.gets = value;
      console.log(value);
    }
  },
  data(){
    return {
      gets: false
    };
  }
}
</script>

<template>
  <div class="player-gets-settings">
    <Checkbox  :id="checkbox" :label="'Персонаж получит '+checkbox" :value="gets" @onChange="checkboxChanged"/>
    <div class="player-gets-settings-name-input" :class="{'gray': !gets}">
      <span class="player-gets-settings-name-label label">{{ input }}</span>
      <input class="input" type="text" value="" :disabled="!gets" />
    </div>
    <div class="player-gets-settings-condition-input" :class="{gray: !gets}">
      <span class="player-gets-settings-condition-label">Условие достижения</span>
      <input class="input player-gets-settings-condition-input-field" type="text" value="" :disabled="gets" />
    </div>
  </div>
</template>

<style scoped>
  .gray>* {
    border-color: #a5a5a5;
    color: #a5a5a5;
    pointer-events: none;
  }
  .player-gets-settings-name-input {
    margin-top: 12px;
    width: 100%;
    display: flex;
  }
  .player-gets-settings-condition-input {
    margin-top: 7px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
  }
  .player-gets-settings-condition-label {
    margin-bottom: 5px;
  }
  .player-gets-settings-condition-input-field {
    width: auto;
  }
</style>