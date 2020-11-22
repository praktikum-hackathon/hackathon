import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp,mixins],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
}
