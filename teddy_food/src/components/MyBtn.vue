<template>
  <button @click="$emit('btn-click')" class="btn">
    <slot></slot>
  </button>
</template>
<script>
  export default {
      name: 'Btn'
  };
</script>
<style>
.btn {
  display: block;
  height: 56px;
  padding: 0 35px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 56px;
  border-radius: 4px;
  transition: background-color .3s ease-in, color .3s ease-in, border .3s ease-in, opacity .3s ease-in;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
