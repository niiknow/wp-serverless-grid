import {
  Dataset,
  DatasetItem,
  DatasetInfo,
  DatasetPager,
  DatasetSearch,
  DatasetShow
} from 'vue-dataset'

export default function VueDs(app) {
  app.component('Dataset', Dataset)
  app.component('DatasetItem', DatasetItem)
  app.component('DatasetInfo', DatasetInfo)
  app.component('DatasetPager', DatasetPager)
  app.component('DatasetSearch', DatasetSearch)
  app.component('DatasetShow', DatasetShow)
}
