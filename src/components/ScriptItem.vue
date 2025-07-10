<script>
import { Script } from "@/types.ts";

export default {
    name: 'ScriptItem',
    props: {
      script: {
        type: Script,
        required: true
      }
    }
};
</script>

<template>
  <div class="script-item">
    {{script.name}}
  </div>
</template>

<style scoped>
  .script-item {
    cursor: pointer;
    width: 100%;
  }
  .script-item:hover {
    background: #eeeeee;
  }
</style>