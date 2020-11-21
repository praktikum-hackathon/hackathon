<template>
  <div class="page">
    <div class="page__section _bg">
    <section class="section">
      <div class="section__text-content">
        <h1 class="section__title title">Исследование на тему "Котики или киски?"</h1>
        <p class="section__subtitle">Ну вот мы такие, сидим исследуем</p>
        <my-btn class="section__btn" @btn-click="showPopup">Результат</my-btn>
        <img class="section__img" src="https://i.ibb.co/PFpsjWQ/Artboard-4-2x.png" alt="Илюстрация">
      </div>
    </section>
    </div>
    <Popup :active="popupOpened"
            @popup-close="popupOpened = false">
      <div class="tabs">
        <button class="tabs__tab" @click="fillData('Мальчики')">Показать мальчиков</button>
        <button class="tabs__tab" @click="fillData('Девочки')">Показать девочек</button>
        <button class="tabs__tab" @click="fillData('Общее количество')">Показать всех</button>
      </div>
      <section class="graphs">
        <div class="graphs__graphs">
          <pie-chart v-if="graphType === 'pie'" :chart-data="datacollection"/>
          <DCharts v-else-if="graphType === 'doughnut'" :chart-data="datacollection"/>
        </div>
      </section>
    </Popup>
  </div>
</template>

<script>
import PieChart from '@/components/PieChart.js'
import DCharts from '@/components/DCharts.js';
import Popup from '@/components/Popup';
import MyBtn from '@/components/MyBtn';

export default {
  components: {
    Popup,
    PieChart,
    DCharts,
    MyBtn
  },
  data () {
    return {
      datacollection: {},
      first: true,
      graphType: 'pie',
      content: 'content',
      popupOpened: false,
    };
  },
  mounted () {
    this.loadInitial()
  },
  methods: {
    loadInitial() {
      this.datacollection = {
        labels: ['Мальчики', 'Девочки'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['blue','red'],
            data: [466,607]
          },
        ]
      }
    },

    fillData(title) {
      this.datacollection = this.getObject(title)
    },

    getObject(title) {
      if(title === 'Общее количество') return {
        labels: ['Мальчики', 'Девочки'],
        datasets: [
          {
            label: 'Общее количество',
            backgroundColor: ['blue','red'],
            data: [1073,326]
          },
        ]
      }
      if(title === 'Мальчики') return { //мальчики
        labels: ['Забрали домой', 'Еще не забрали'],
        datasets: [
          {
            label: 'Мальчики',
            backgroundColor: ['blue','red'],
            data: [466,607]
          },
        ]
      }
      if(title === 'Девочки') return { //Девочки
        labels: ['Забрали домой', 'Еще не забрали'],
        datasets: [
          {
            label: 'Девочки',
            backgroundColor: ['blue','red'],
            data: [121,205]
          },
        ]
      }
    },

    showPopup() {
      this.popupOpened = true
      console.log(this.popupOpened)
    }
  }
}
</script>

<style>

html {
  box-sizing: border-box;
  font-family: 'Helvetica', Arial,serif;
}

*, *:before, *:after {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: inherit;
}

.section {
  max-width: 1440px;
  padding: 0 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
}

.section__text-content {
  width: 40%;
}

.page {
  width: 100%;
}

.page__section {
  background-color: #c8dde5;
}
.section__title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
}

.section__subtitle {
  font-size: 18px;
  margin-bottom: 28px;
}

.section__btn {
}


.graphs__graphs {
  width: 400px;
}

.tabs {
  display: flex;
}

.tabs__tab {
  position: relative;
  flex-shrink: 0;
  display: block;
  padding: 18px 24px;
  margin: 0 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.44;
  color: #2a2a30;
  border: none;
  outline: none;
  background-color: transparent;
  transition: color .3s cubic-bezier(.165,.84,.44,1);
}

@media only screen and (max-width:1358px) {
  .tabs__tab {
    height: 44px;
    padding: 14px 16px;
    font-size: 14px;
    line-height: 1.2;
  }
}


</style>
