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


@media only screen and (max-width: 1358px) {
  .container {
    padding: 0 36px;
  }
}


@media only screen and (max-width: 919px) {
  .container {
    padding: 0 24px;
  }
}

</style>
