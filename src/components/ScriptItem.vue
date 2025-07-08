<script>
export default {
    name: 'ScriptItem',
    props: {
      script: {
        type: Object,
        required: true
      }
    }
};
</script>

<template>
  <div class="script-item">
    {{script}}
  </div>
</template>

<style scoped>

</style>