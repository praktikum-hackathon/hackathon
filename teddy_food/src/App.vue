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
                      @click="fillData($event.currentTarget.dataset.title,getHomeGraph)"
                      data-title="Мальчики">Показать мальчиков
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Девочки'}]"
                      @click="fillData($event.currentTarget.dataset.title,getHomeGraph)"
                      data-title="Девочки">Показать девочек
              </button>
              <button :class="['tabs__tab',{'_active' : tabTitle==='Общее количество'}]"
                      @click="fillData($event.currentTarget.dataset.title,getHomeGraph)"
                      data-title="Общее количество">Показать всех
              </button>
            </div>
            <div class="graphs__graphs">
              <bar-chart :chart-data="datacollection" :options="initialOptions" />
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
              <div class="tabs">
                <button :class="['tabs__tab',{'_active' : tabTitle==='Мальчики'}]"
                        @click="fillData($event.currentTarget.dataset.title,getCategoriesGraph)"
                        data-title="Мальчики">Показать мальчиков
                </button>
                <button :class="['tabs__tab',{'_active' : tabTitle==='Девочки'}]"
                        @click="fillData($event.currentTarget.dataset.title,getCategoriesGraph)"
                        data-title="Девочки">Показать девочек
                </button>
                <button :class="['tabs__tab',{'_active' : tabTitle==='Общее количество'}]"
                        @click="fillData($event.currentTarget.dataset.title,getCategoriesGraph)"
                        data-title="Общее количество">Показать всех
                </button>
              </div>
            </div>
            <div class="graphs__graphs">
              <bar-chart :chart-data="datacollection" :options="initialOptions"/>
            </div>
          </div>
        </section>
        <section v-if="activePopup === 3" class="stats">
          <div class="stats__text-content">
            <h2 class="stats__title">Занимательная статистика</h2>
            <p class="stats__subtitle">Если немного изменить сам запрос к нашей чудесной БД, то можно собрать разную аналитику:

              <span>например, во время анализа был замечен интересный момент, что среди топ-20 питомцев обоих видов, добавленных в избранное, только у 5 уже есть дом, их можно так и отображать, топ-20 всеобщих любимчиков без дома, если добавить еще пятерых, и помогать им таким образом его обрести.</span>

              <span>есть всего 6 городов из 13 (Самара, Пермь, Москва, Санкт-Петербург, Казань, Волгоград), где число питомцев, перечисленных на сайте, превысило 100. И всего лишь в 3 приюта активно добавляют своих питомцев, потому что сумма кошек и собак в этих трех приютах от всех питомцев на сайте составляет 53%, другим городам и приютам стоило бы присоединиться к этому движению.</span>

            </p>
          </div>

          <div class="graphs">
            <img class="graphs__img" src="https://i.ibb.co/hMmZNxH/Artboard-1-2x.png" alt="Котики">
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
      categories: '',
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
    this.loadHomeStats('api/v1/data');
    this.loadCategories('api/v1/sex');
    this.sections = document.querySelectorAll('.js-section');
  },
  methods: {
    loadHomeStats(url) {
      fetch(url)
        .then(res=>res.json())
        .then(res=> this.homeStats = res)
        .then(res=> this.datacollection = this.getHomeGraph('Общее количество'))
    },

    loadCategories(url) {
      fetch(url)
        .then(res =>res.json())
        .then(res => this.categories = res)
        .then(res => this.datacollection = this.getCategoriesGraph('Общее количество'))
    },

    scrollTo(num) {
      const rect = this.sections[num].getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      window.scrollTo({
        top: rect.top + scrollTop,
        behavior: 'smooth'
      });
    },

    fillData(title,callback) {
      this.datacollection = callback(title);
      this.tabTitle = title;
    },

    getHomeGraph(title) {
      if (title === 'Общее количество') return {
          ...this.initialOptions,
          offset: false,
          labels: ['Мальчики', 'Девочки'],
          datasets: [
            {
              label: 'Забрали домой',
              backgroundColor: ['#5E81F4', '#00C4B4'],
              data: [this.homeStats[1].home,
                    this.homeStats[0].home],
            },

            {
              label: 'Еще не забрали',
              backgroundColor: ['#FFAE33', '#0CC3E7'],
              data: [this.homeStats[1].total - this.homeStats[1].home,
                    this.homeStats[0].total - this.homeStats[0].home],
            },
          ],
        };

      if (title === 'Мальчики') return {
        ...this.initialOptions, //мальчики
        labels: ['Мальчики'],
        datasets: [
          {
            label: 'Забрали домой',
            backgroundColor: ['#5E81F4'],
            data: [this.homeStats[0].home],
          },

          {
            label: 'Еще не забрали',
            backgroundColor: ['#FFAE33'],
            data: [this.homeStats[0].total - this.homeStats[0].home],
          },
        ],
      };
      if (title === 'Девочки') return { //Девочки
        ...this.initialOptions,
        offset: false,
        labels: ['Девочки'],
        datasets: [
          {
            label: 'Забрали домой',
            backgroundColor: '#00C4B4',
            data: [this.homeStats[1].home],
          },

          {
            label: 'Еще не забрали',
            backgroundColor: ['#0CC3E7'],
            data: [this.homeStats[1].total - this.homeStats[1].home],
          },
        ],
      };
    },

    getCategoriesGraph(title) {
      if (title === 'Общее количество') return {
        ...this.initialOptions,
        offset: false,
        labels: ['Мальчики', 'Девочки'],
        datasets: [
          {
            label: 'На медицину',
            backgroundColor: ['#5E81F4', '#00C4B4'],
            data: [this.categories[0].meds,
              this.categories[1].meds],
          },

          {
            label: 'На игрушки',
            backgroundColor: ['#FFAE33', '#0CC3E7'],
            data: [this.categories[0].toys,
              this.categories[1].toys],
          },
        ],
      };

      if (title === 'Мальчики') return {
        ...this.initialOptions, //мальчики
        labels: ['Мальчики'],
        datasets: [
          {
            label: 'На игрушки',
            backgroundColor: ['#5E81F4'],
            data: [this.categories[0].toys],
          },

          {
            label: 'На медицину',
            backgroundColor: ['#FFAE33'],
            data: [this.categories[0].meds],
          },
        ],
      };
      if (title === 'Девочки') return { //Девочки
        ...this.initialOptions,
        offset: false,
        labels: ['Девочки'],
        datasets: [
          {
            label: 'На игрушки',
            backgroundColor: '#00C4B4',
            data: [this.categories[1].toys],
          },

          {
            label: 'На медицину',
            backgroundColor: ['#0CC3E7'],
            data: [this.categories[1].meds],
          },
        ],
      };
    },

    showPopup(num) {
      this.popupOpened = true;
      this.activePopup = num
      if(num === 1) {
        this.datacollection = this.getHomeGraph('Общее количество')
      } else {
        this.datacollection = this.getCategoriesGraph('Общее количество')
      }
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
  line-height: 1.7;
}

.section__text-content {
  width: 40%;
}

.section__img {
  width: 50%;
}


@media only screen and (max-width: 720px) {
  .section {
    position: relative;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .section__img {
    position: absolute;
    bottom: 40px;
    left: 50%;
    width: 100%;
    max-width: 400px;
    height: auto;
    transform: translate(-50%);
  }

  .section__text-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .section__btn {
    justify-self: flex-end;
  }
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
  line-height: 1.7;
}

.stats__subtitle span {
  display: block;
  margin-top: 18px;
  margin-left: 36px;
}

.stats__text-content {
  width: 50%;
}

@media only screen and (max-width: 1358px) {
  .stats {
    display: block;
  }

  .stats__text-content {
    width: 100%;
  }
}


.graphs__graphs {
  width: 400px;
  margin-right: auto;
}

.graphs__img {
  width: 100%;
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
  line-height: 1;
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
  }
}

</style>
