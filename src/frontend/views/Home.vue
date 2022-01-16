<template>
  <div class="app-home">
    <div class="row filter-font">
      <h3>Filters</h3>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label style="text-transform: uppercase;">Category</label>
          <Multiselect
            v-model="filters.categories"
            mode="tags"
            :searchable="true"
            :close-on-select="false"
            :create-option="true"
            :options="categories"
          />
        </div>
        <div class="col-md-6 mb-3">
          <label style="text-transform: uppercase;">Cuisines</label>
          <Multiselect
            v-model="filters.cuisines"
            mode="tags"
            :searchable="true"
            :close-on-select="false"
            :create-option="true"
            :options="cuisines"
          />
        </div>
        <div class="col-md-3 mb-3">
          <label style="text-transform: uppercase;">Preparation Time (minutes)</label>
          <select class="form-select" v-model="filters.prepm">
            <option v-for="option in recipeTimes" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="col-md-3 mb-3">
          <label style="text-transform: uppercase;">Cook Time (minutes)</label>
          <select class="form-select" v-model="filters.cookm">
            <option v-for="option in recipeTimes" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="col-md-3 mb-3">
          <label style="text-transform: uppercase;">Total Time (minutes)</label>
          <select class="form-select" v-model="filters.totalm">
            <option v-for="option in recipeTimes" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="col-md-3 mb-3">
          <br /><button type="button" class="btn btn-outline-primary" @click="clearFilters">Clear all filters</button>
        </div>
      </div>
    </div>
    <dataset
      v-slot="{ ds }"
      :ds-data="recipes"
      :ds-filter-fields="{ wprm_course: filterCategories, wprm_cuisine: filterCuisines, wprm_cook_time: filterCookTime, wprm_prep_time: filterPrepTime, wprm_total_time: filterTotalTime }"
      :ds-search-in="['title', 'cnt']"
      ref="myds"
    >
      <div class="row" :data-page-count="ds.dsPagecount">
        <div class="col-md-6 search-font">
          <br /><br />
          <dataset-info class="mb-2 mb-md-0" />
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input name="searchInput" id="searchInput" type="text" placeholder="Type to search..." class="form-control" v-model="dsSearch">
            <label for="searchInput">Type to search...</label>
          </div>
        </div>
      </div>
      <hr />
      <dataset-item class="row search-font" style="overflow-y: auto; max-height: 600px">
        <template #default="{ row, rowIndex }">
          <a class="recipe-item scale-down col-sm-12 col-md-6 col-lg-4" :href="row.src" :title="row.title">
            <div class="card" style="">
              <div style="margin-bottom: 20px">
                <img :src="row.img ? 'https://www.ucook.com/' + row.img : 'https://www.ucook.com/wp-content/uploads/2021/05/UCook-official-logo.png'" class="card-img-top" :alt="row.title">
              </div>
              <div class="card-body">
                <div class="cut-off-2" style="margin-bottom: 20px">
                  <h5 class="card-title">{{ row.title }}</h5>
                </div>
                <div class="cut-off-2" style="margin-bottom: 20px">
                  <p class="card-text text-truncate">{{ getCourses(row.wprm_course) }}</p>
                </div>
              </div>
            </div>
          </a>
        </template>
        <template #noDataFound>
          <div class="col-md-12 search-font">
            <p class="text-center">No results found</p>
          </div>
        </template>
      </dataset-item>
      <hr />
      <div class="d-flex flex-md-row flex-column justify-content-between align-items-center search-font" style="text-decoration: none !important">
        <dataset-info class="mb-2 mb-md-0" />
        <dataset-pager />
      </div>
    </dataset>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, watchEffect } from 'vue'
import Multiselect from '@vueform/multiselect'

export default defineComponent({
  components: {
    Multiselect
  },
  setup(props, context) {
    const filters = reactive({ categories: [], cuisines: [], cookm: 0, prepm: 0, totalm: 0 })
    const recipes = ref([])
    const dsSearch = ref('')

    return {
      dsSearch,
      recipes,
      filters,
      categories: ref({}),
      cuisines: ref({}),
      recipeTimes: [
        { text: 'Please select one', value: 0 },
        { text: '< 15 minutes', value: 14 },
        { text: '< 30 minutes', value: 29 },
        { text: '< 60 minutes', value: 59 },
        { text: '>= 60 minutes', value: 60 }
      ]
    }
  },
  methods: {
    getCourses(courses) {
      if (courses.length <= 0) {
        return ''
      }

      let myCourses = []
      courses.forEach(c => {
        myCourses.push(this.categories[c])
      })

      return 'Course ' + myCourses.join(', ')
    },
    filterByUrl() {
      if (this.$route.query.category) {
        this.filters.categories.push(this.$route.query.category)
      }

      if (this.$route.query.s) {
        this.dsSearch = this.$route.query.s
      }
    },
    filterCategories(value) {
      if (this.filters.categories.length <= 0) {
        return true
      }

      return this.filters.categories.some(r => value.includes(r))
    },
    filterCuisines(value) {
      if (this.filters.cuisines.length <= 0) {
        return true
      }

      return this.filters.cuisines.some(r => value.includes(r))
    },
    filterPrepTime(value) {
      return this.filterTime(value, this.filters.prepm)
    },
    filterCookTime(value) {
      return this.filterTime(value, this.filters.cookm)
    },
    filterTotalTime(value) {
      return this.filterTime(value, this.filters.totalm)
    },
    filterTime(value, selectedValue) {
      if (selectedValue <= 0) {
        return true
      }

      const intVal = parseInt(value)
      if (selectedValue < 60) {
        return intVal <= selectedValue
      } else {
        return intVal >= 60
      }
    },
    clearFilters() {
      this.filters.categories.length = 0
      this.filters.cuisines.length = 0
      this.filters.cookm = 0
      this.filters.prepm = 0
      this.filters.totalm = 0
    },
    doLoad() {

      // @ts-ignore
      this.handleSearch = this.$win.$appConfig.debounce((value) => {
        this.$refs.myds.search(value)
      }, 300)

      watchEffect(() => {
        this.handleSearch(this.dsSearch)
      })

      // @ts-ignore
      const tax = this.$win.vue_wp_plugin_config_frontend.taxonomies
      const courses = tax['wprm_course']
      const cuisines = tax['wprm_cuisine']
      courses.forEach((item) => {
        this.categories[item.value] = item.text
      })
      cuisines.forEach((item) => {
        this.cuisines[item.value] = item.text
      })

      fetch(this.$win.vue_wp_plugin_config_frontend.indexFileUrl)
        .then(response => response.json())
        .then(recipes => {
          const hasImage = []
          const noImage = []
          const items = Object.keys(recipes).forEach((key) => {
            const item = recipes[key]
            if (item.img) {
              hasImage.push(item)
            } else {
              noImage.push(item)
            }
          })

          // sort by title asc
          hasImage.sort(function(x, y) {
            let a = x.title, b = y.title

            return ((a > b) - (b > a))
          });
          noImage.sort(function(x, y) {
            let a = x.title, b = y.title

            return ((a > b) - (b > a))
          });

          this.recipes = hasImage.concat(noImage)

          // auto filter by url
          this.filterByUrl()
        })
    }
  },
  beforeMount() {
    const that = this

    // @ts-ignore
    if (that.$win && that.$win.vue_wp_plugin_config_admin) {
      that.doLoad()
      return
    }

    document.onreadystatechange = async () => {
      if (document.readyState == "complete") {
        that.doLoad()
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a.recipe-item {
  transition: .2s ease-in;
  -webkit-transition: .2s ease-in;
  text-align: center;
}

.card-img-top {
  height: 300px;
}

.card {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
  height: 500px;
  overflow: hidden;
  margin-top: 10px
}

.card-title {
  font-weight: 700 !important;
  font-family: Raleway;
  font-size: 2.5rem;
}

.cut-off-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  padding: 0 10px;
  min-height: 70px;
}

.scale-down:hover {
  transform: scale(.95);
  -webkit-transform: scale(.95);
}

.app-home a {
  text-decoration: none !important;
}

.search-font {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.filter-font label, .filter-font h3 {
  font-weight: bold;
}


.search-font .page-link {
  text-decoration: none !important;
}
</style>

<style src=""></style>
