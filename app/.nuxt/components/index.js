export { default as DCharts } from '../../components/DCharts.js'
export { default as MyBtn } from '../../components/MyBtn.vue'
export { default as PieChart } from '../../components/PieChart.js'
export { default as Popup } from '../../components/Popup.vue'

export const LazyDCharts = import('../../components/DCharts.js' /* webpackChunkName: "components/DCharts" */).then(c => c.default || c)
export const LazyMyBtn = import('../../components/MyBtn.vue' /* webpackChunkName: "components/MyBtn" */).then(c => c.default || c)
export const LazyPieChart = import('../../components/PieChart.js' /* webpackChunkName: "components/PieChart" */).then(c => c.default || c)
export const LazyPopup = import('../../components/Popup.vue' /* webpackChunkName: "components/Popup" */).then(c => c.default || c)
