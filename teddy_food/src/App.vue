<template>
  <div ref="page" class="page">
    <my-header @scroll-to="scrollTo"/>
    <div class="page__section _bg">
      <cont>
        <section class="section js-section">
          <div class="section__text-content">
            <h1 class="section__title title">Исследование на тему "Котики или кисы?"</h1>
            <p class="section__subtitle">Разрушаем гендерные стереотипы о животных</p>
            <my-btn class="section__btn" @btn-click="showPopup(1)">Результат</my-btn>
          </div>
          <img class="section__img" :src="'https://i.ibb.co/wd6ZFgS/Artboard-3-2x.png'" alt="Иллюстрация">
        </section>
      </cont>
    </div>

    <div class="page__section">
      <cont>
        <section class="section js-section">
          <div class="section__text-content">
            <h1 class="section__title title">Что же важнее?</h1>
            <p class="section__subtitle">Для выстраивания маркетинговой стратегии</p>
            <my-btn class="section__btn" @btn-click="showPopup(2)">Результат</my-btn>
          </div>
          <img class="section__img" :src="'https://i.ibb.co/1f01w9L/Artboard-2-2x.png'" alt="Иллюстрация">
        </section>
      </cont>
    </div>

    <div class="page__section _bg">
      <cont>
        <section class="section js-section">
          <div class="section__text-content">
            <h1 class="section__title title">Еще немного аналитики</h1>
            <p class="section__subtitle">Лучше посмотрите результат</p>
            <my-btn class="section__btn" @btn-click="showPopup(3)">Результат</my-btn>
          </div>
          <img class="section__img" :src="'https://i.ibb.co/PFpsjWQ/Artboard-4-2x.png'" alt="Иллюстрация">
        </section>
      </cont>
    </div>

    <Popup :active="popupOpened"
           @popup-close="popupOpened = false">
      <cont>

        <section v-if="activePopup === 1" class="stats">
          <div class="stats__text-content">
            <h2 class="stats__title">Котов-мальчиков берут реже, чем кошечек</h2>
            <p class="stats__subtitle">Для разрушения гендерных стереотипов о животных: например, можно писать информационные статьи, рассказывающие, что метят территорию не только коты. И что стерилизация в большинстве случаев решает вопрос. Это будет повышать информированность общества и снижать их страх перед котами (особенно, если они кастрированные)

            </p>
          </div>

          <div class="graphs">
            <div class="tabs">
              <button :class="['tabs__tab',{'_active' : tabTitle==='Мальчики'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Мальчики">Показать мальчиков
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Девочки'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Девочки">Показать девочек
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Общее количество'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Общее количество">Показать всех
              </button>
            </div>
            <div class="graphs__graphs">
              <bar-chart v-if="graphType === 'pie'" :chart-data="datacollection" :options="initialOptions" />
              <DCharts v-else-if="graphType === 'doughnut'" :chart-data="datacollection" />
            </div>
          </div>
        </section>

        <section v-if="activePopup === 2" class="stats">
          <div class="stats__text-content">
            <h2 class="stats__title">Девчонкам дарят цацки, тогда как пацанам - полезные подарки (например, полис ДМС на мед. услуги)
            </h2>
            <p class="stats__subtitle">Для выстраивания маркетинговой стратегии: например, если коту Гаврюше уже сделали все необходимые операции, а игрушки у него так и нет, то можно устроить кампанию по сбору средств под слоганом “Гаврюша тоже хочет немного веселья”

            </p>
          </div>

          <div class="graphs">
            <div class="tabs">
              <button :class="['tabs__tab',{'_active' : tabTitle==='Мальчики'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Мальчики">Показать мальчиков
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Девочки'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Девочки">Показать девочек
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Общее количество'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Общее количество">Показать всех
              </button>
            </div>
            <div class="graphs__graphs">
              <bar-chart v-if="graphType === 'pie'" :chart-data="datacollection" :options="initialOptions" />
              <DCharts v-else-if="graphType === 'doughnut'" :chart-data="datacollection" />
            </div>
          </div>
        </section>
        <section v-if="activePopup === 3" class="stats">
          <div class="stats__text-content">
            <h2 class="stats__title">Заголовок исследования</h2>
            <p class="stats__subtitle">Вот здесь будет много много много много много много много много много много
              много много много много много много много много много много
              много много много много много много много много много много
              много многомного многомного многом
              много много текста
            </p>
          </div>

          <div class="graphs">
            <div class="tabs">
              <button :class="['tabs__tab',{'_active' : tabTitle==='Мальчики'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Мальчики">Показать мальчиков
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Девочки'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Девочки">Показать девочек
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Общее количество'}]"
                      @click="fillData($event.currentTarget.dataset.title)"
                      data-title="Общее количество">Показать всех
              </button>
            </div>
            <div class="graphs__graphs">
              <bar-chart v-if="graphType === 'pie'" :chart-data="datacollection" :options="initialOptions" />
              <DCharts v-else-if="graphType === 'doughnut'" :chart-data="datacollection" />
            </div>
          </div>
        </section>



      </cont>
    </Popup>
  </div>
</template>

<script>
import BarChart from './components/charts/BarChart.js';
import DCharts from './components/charts/DCharts.js';
import Popup from './components/Popup';
import MyBtn from './components/MyBtn';
import Header from './components/layout/Header';
import Container from './components/layout/Container';

export default {
  components: {
    Popup,
    BarChart,
    DCharts,
    MyBtn,
    'my-header': Header,
    'cont': Container,
  },
  data() {
    return {
      datacollection: {},
      first: true,
      graphType: 'pie',
      content: 'content',
      popupOpened: false,
      tabTitle: 'Общее количество',
      sections: '',
      activePopup: 0,
      initialOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
  },
  mounted() {
    this.loadHomeStats('/data');
    this.sections = document.querySelectorAll('.js-section');
  },
  methods: {
    async loadHomeStats(url) {
      this.datacollection = this.getObject('Общее количество')
      this.homeStats = await fetch(url)
      console.log(this.homeStats)
    },

    scrollTo(num) {
      const rect = this.sections[num].getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     console.log (rect.top + scrollTop)

      window.scrollTo({
        top: rect.top + scrollTop,
        behavior: 'smooth'
      });
    },

    fillData(title) {
      this.datacollection = this.getObject(title);
      this.tabTitle = title;
    },

    getObject(title) {
      if (title === 'Общее количество') return {
          ...this.initialOptions,
          offset: false,
          labels: ['Мальчики', 'Девочки'],
          datasets: [
            {
              label: 'Забрали домой',
              backgroundColor: ['#5E81F4', '#00C4B4'],
              data: [466, 607],
            },

            {
              label: 'Еще не забрали',
              backgroundColor: ['#FFAE33', '#0CC3E7'],
              data: [300, 400],
            },
          ],
        };

      if (title === 'Мальчики') return {
        ...this.initialOptions, //мальчики
        labels: ['Забрали домой', 'Еще не забрали'],
        datasets: [
          {
            label: 'Забрали домой',
            backgroundColor: ['blue', 'red'],
            data: [466, 607],
          },
        ],
      };
      if (title === 'Девочки') return { //Девочки
        ...this.initialOptions,
        offset: false,
        labels: ['Забрали домой', 'Еще не забрали'],
        datasets: [
          {
            label: 'Девочки',
            backgroundColor: ['blue', 'red'],
            data: [121, 205],
          },
        ],
      };
    },

    showPopup(num) {
      this.popupOpened = true;
      this.activePopup = num
    },
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html {
  box-sizing: border-box;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}

*, *:before, *:after {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: inherit;
}

.section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
}


.page {
  width: 100%;
}

.page__section._bg {
  background-color: #efefef;
}

.section__title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
}

.section__subtitle {
  font-size: 18px;
  margin-bottom: 28px;
  line-height: 1.5;
}

.section__text-content {
  width: 40%;
}

.section__img {
  width: 50%;
}

.section__btn {
  background-color: #d29ddd;
  color: white;
}
.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats__title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
}

.stats__subtitle {
  font-size: 16px;
  margin-bottom: 28px;
  line-height: 1.5;
}

.stats__text-content {
  width: 40%;
}



.graphs__graphs {
  width: 400px;
  margin-right: auto;
}

.tabs {
  display: flex;
  margin-bottom: 48px;
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
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  transition: color .3s cubic-bezier(.165, .84, .44, 1);
}

.tabs__tab._active {
  border: 1px solid #100e0e;
}

@media only screen and (max-width: 1358px) {
  .tabs__tab {
    height: 44px;
    padding: 14px 16px;
    font-size: 14px;
    line-height: 1.2;
  }
}

</style>
