import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins


export default {
  extends: Pie,
  mixins: [reactiveProp,mixins],
  props: ['options','type'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
}
