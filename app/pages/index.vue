<template>
  <div class="page">
    <section class="page__section section">
      <div class="section__text-content">
        <h1 class="section__title title">Исследование на тему "Котики или киски?"</h1>
        <p class="section__subtitle">Ну вот мы такие, сидим исследуем</p>
        <my-btn class="section__btn" @btn-click="showPopup">Результат</my-btn>
      </div>
    </section>
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
* {
  box-sizing: border-box;
}
.section {
  max-width: 1440px;
  padding: 0 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  background-color: tomato;
}

.section__text-content {
  width: 70%;
  text-align: center;
}
.page {
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
  margin: 0 auto;
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
