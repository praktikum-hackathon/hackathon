import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp,mixins],
  props: ['options','type'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
}
