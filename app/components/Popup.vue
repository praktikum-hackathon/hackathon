<template>
  <div :class="['popup',{'_active' : active}]">
    <div class="popup__overlay"></div>
    <div class="popup__close" @click="closePopup"></div>
    <div :class="['popup__inner',{'_active' : activeInner}]">
      <slot v-if="activeInner"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeInner: false,
    };
  },
  watch: {
    active() {
      if (this.active == true) setTimeout(() => this.activeInner = true, 800);
    },

  },
  methods: {
    closePopup() {
      this.$emit('popup-close')
      this.activeInner = false
    }
  }
};

</script>
<style>

@keyframes toTopAppear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0;
  height: 0;
  z-index: 10;
  transform: translateY(-150%);
  transition: transform 0s ease 1.1s, width 3s 4s, height 3s 4s;
}

@media only screen and (max-width: 1358px) {
  .popup {
    padding: 70px 0;
  }
}

@media only screen and (max-width: 919px) {
  .popup {
    padding: 20px 0;
  }
}

@media only screen and (max-width: 720px) {
  .popup {
    padding: 58px 0 0;
  }
}

.popup._active {
  width: 100vw;
  height: 100%;
  transform: translateY(0);
  transition: transform 0s ease;
}

.popup._active:after {
  transform: scaleX(1);
  transition: transform .7s cubic-bezier(.785, .135, .15, .86);
}

.popup._active .popup__overlay {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition: -webkit-transform .5s cubic-bezier(.785, .135, .15, .86);
  transition: -webkit-transform .5s cubic-bezier(.785, .135, .15, .86);
  transition: transform .5s cubic-bezier(.785, .135, .15, .86);
}

.popup._active .popup__close {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform .3s cubic-bezier(.09, 1.16, .34, 1.37) .7s;
  transition: -webkit-transform .3s cubic-bezier(.09, 1.16, .34, 1.37) .7s;
  transition: transform .3s cubic-bezier(.09, 1.16, .34, 1.37) .7s;
}

.popup._active .popup__close:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: -webkit-transform .3s cubic-bezier(.09, 1.16, .34, 1.37);
  transition: -webkit-transform .3s cubic-bezier(.09, 1.16, .34, 1.37);
  transition: transform .3s cubic-bezier(.09, 1.16, .34, 1.37);
}

.popup._noanimate {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: -webkit-transform 0s ease;
  transition: -webkit-transform 0s ease;
  transition: transform 0s ease;
  transition: transform 0s ease, -webkit-transform 0s ease;
}

.popup._noanimate .popup__overlay, .popup._noanimate:after {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition: -webkit-transform -1s cubic-bezier(.785, .135, .15, .86);
  transition: -webkit-transform -1s cubic-bezier(.785, .135, .15, .86);
  transition: transform -1s cubic-bezier(.785, .135, .15, .86);
  transition: transform -1s cubic-bezier(.785, .135, .15, .86), -webkit-transform -1s cubic-bezier(.785, .135, .15, .86);
}

.popup._noanimate .popup__close {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform -1s cubic-bezier(.09, 1.16, .34, 1.37) -1s;
  transition: -webkit-transform -1s cubic-bezier(.09, 1.16, .34, 1.37) -1s;
  transition: transform -1s cubic-bezier(.09, 1.16, .34, 1.37) -1s;
  transition: transform -1s cubic-bezier(.09, 1.16, .34, 1.37) -1s, -webkit-transform -1s cubic-bezier(.09, 1.16, .34, 1.37) -1s;
}

.popup._noanimate .popup__close:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: -webkit-transform -1s cubic-bezier(.09, 1.16, .34, 1.37);
  transition: -webkit-transform -1s cubic-bezier(.09, 1.16, .34, 1.37);
  transition: transform -1s cubic-bezier(.09, 1.16, .34, 1.37);
  transition: transform -1s cubic-bezier(.09, 1.16, .34, 1.37), -webkit-transform -1s cubic-bezier(.09, 1.16, .34, 1.37);
}

.popup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #fff;
  z-index: 0;
  transform-origin: 100% 0;
  transform: scaleX(0);
  transition: transform .5s cubic-bezier(.785, .135, .15, .86);

}

.popup__inner {
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
}

.popup__inner._active {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease;
}


@media only screen and (max-width: 1358px) {
  .popup__inner {
    height: 100%;
    width: 57.61719vw;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 720px) {
  .popup__inner {
    width: calc(100vw - 40px);
    overflow-y: auto;
  }
}

.popup__close {
  position: absolute;
  top: 84px;
  right: calc(50vw - 550px);
  width: 22px;
  height: 22px;
  cursor: pointer;
  z-index: 3;
  -webkit-transform: scale(0);
  transform: scale(0);
  transition: -webkit-transform .3s cubic-bezier(.25, .46, .45, .94);
  transition: transform .3s cubic-bezier(.25, .46, .45, .94);
}

@media only screen and (max-width: 1358px) {
  .popup__close {
    right: 15.42969vw;
  }
}

@media only screen and (max-width: 919px) {
  .popup__close {
    top: 42px;
  }
}

@media only screen and (max-width: 720px) {
  .popup__close {
    top: 21px;
    right: 20px;
  }
}

.popup__close:after, .popup__close:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 31px;
  height: 1px;
  background-color: #2a2a30;
}

@media only screen and (max-width: 720px) {
  .popup__close:after, .popup__close:before {
    height: 2px;
  }
}

.popup__close:before {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}

.popup__close:after {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
