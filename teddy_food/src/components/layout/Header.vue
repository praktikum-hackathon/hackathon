<template>
  <header class="header">
  <cont class="header__container">
    <a href="/" class="header__logo-link"><img src="https://raw.githubusercontent.com/praktikum-hackathon/hackathon/dev/Research/logo/logo.png" alt="Котаны против Кис" class="header__logo"></a>
    <nav class="header__nav">
      <button class="header__btn" @click="scrollTo(0)">Гипотеза 1</button>
      <button class="header__btn" @click="scrollTo(1)">Гипотеза 2</button>
      <button class="header__btn" @click="scrollTo(2)">Гипотеза 3</button>
    </nav>
  </cont>
  </header>
</template>
<script>
import Container from './Container.vue';
export default {
  name: 'Header',
  components: {
    'cont': Container
  },
  methods: {
    scrollTo(num) {
      this.$emit('scroll-to',num)
    }
  }
};
</script>
<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 0 0px 0 1px #bcbfbf;
}

.header::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
}

.header__container {
  height: 100%;
}

.header__nav {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.header__btn {
  border: none;
  outline: none;
  background-color: #fff;
  margin: 0 20px;
}

.header__logo-link {
  position: absolute;
  top: 5px;
  height: 70px;
}

.header__logo {
  height: 100%;
}

@media only screen and (max-width: 1358px) {
  .header__container {
    display: flex;
  }

  .header__logo-link {
    position: static;
  }

  .header__nav {
    width: auto;
  }
}


@media only screen and (max-width: 919px) {
  .header {
    height: 50px;
  }

  .header__logo {
    height: auto;
    width: 240px;
  }

  .header__nav {
    display: none;
  }
}

</style>
