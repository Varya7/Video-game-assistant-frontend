<script>
import Scrollview from "@/components/Scrollview.vue";
import CharacterItem from "@/components/CharacterItem.vue";
import PlayerGetsSettings from "@/components/PlayerGetsSettings.vue";

export default {
  name: "CreateScriptModal",
  components: {CharacterItem, Scrollview, PlayerGetsSettings},
  data() {
    return {
      answers_count: 0,
      branches_count: 0,
    };
  }
}
</script>

<template>
  <div class="create-script-modal-container">
    <div class="create-script-modal-cell create-script-modal-name">
      <h2 class="create-script-modal-h2 create-script-modal-name-text">Имя</h2>
      <input class="input" type="text" value="" />
    </div>
    <div class="create-script-modal-cell create-script-modal-count">
      <div class="create-script-modal-count-answers">
        <label class="create-script-modal-count-answers-label label" for="create-script-modal-count-answers-input">Количество ответов:</label>
        <input class="input number-input" id="create-script-modal-count-answers-input" type="number" :value="answers_count" />
      </div>
      <div class="create-script-modal-count-branches">
        <label class="create-script-modal-count-branches-label label" for="create-script-modal-count-branches-input">Количество сюжетных веток:</label>
        <input class="input number-input" id="create-script-modal-count-branches-input" type="number" :value="branches_count" />
      </div>
    </div>
    <div class="create-script-modal-cell create-script-modal-characters">
      <h2 class="create-script-modal-h2">Персонажи <span class="add-btn">+</span></h2>
      <button class="btn">Выбрать из игры</button>
      <Scrollview :w="'100%'" :h="'200px'">
        <CharacterItem />
        <CharacterItem />
      </Scrollview>
    </div>
    <div class="create-script-modal-cell create-script-modal-description">
      <h2 class="create-script-modal-h2">Краткое содержание</h2>
      <textarea class="input create-script-modal-description-input" />
    </div>
    <div class="create-script-modal-cell create-script-modal-getting-item">
      <PlayerGetsSettings :checkbox="'предмет'" :input="'Предмет'"/>
    </div>
    <div class="create-script-modal-cell create-script-modal-getting-info">
      <PlayerGetsSettings :checkbox="'информацию'" :input="'Информация'"/>
    </div>
    <div class="create-script-modal-cell create-script-modal-additional">
      <h2 class="create-script-modal-h2">Дополнительно</h2>
      <textarea class="input create-script-modal-additional-input" />
    </div>
  </div>
</template>

<style scoped>
  .create-script-modal-additional-input {
    height: 75px;
    resize: none;
    width: calc(100% - 6px);
  }
  .create-script-modal-container{
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(4, auto);
    width: 100%;
    height: 100%;
    grid-gap: 10px;
  }
  .create-script-modal-h2{
    text-align: left;
    font-weight: normal;
    margin-right: 5px;
    margin-top: 0;
  }
  .create-script-modal-name-text{
    margin-top: .75em;
  }
  .create-script-modal-cell{
    justify-self: left;
    width: 100%;
    justify-content: left;
    text-align: left;
  }
  .create-script-modal-name {
    display: flex;
    align-items: center;
  }
  .create-script-modal-count {
  }
  .create-script-modal-characters {
  }
  .create-script-modal-description {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }
  .create-script-modal-description-input{
    height: 100%;
    resize: none;
  }
  .create-script-modal-getting-item {
  }
  .create-script-modal-getting-info {
  }
  .create-script-modal-additional {
    grid-column: span 2;
    width: 100%;
  }
  .add-btn {
    cursor: pointer;
  }
</style>