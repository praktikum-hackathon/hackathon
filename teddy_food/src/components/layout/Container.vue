<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Section',
};
</script>
<style>
.container {
  max-width: 1440px;
  padding: 0 48px;
  margin: 0 auto;
}

</style>
