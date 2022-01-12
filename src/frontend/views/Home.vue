<template>
  <div class="app-home">
    <div class="row">
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
        <div class="col-md-6">
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
      <dataset-item class="row" style="overflow-y: auto; max-height: 600px">
        <template #default="{ row, rowIndex }">
          <a class="recipe-item scale-down col-sm-12 col-md-6 col-lg-4" :href="row.src">
            <div class="card" style="">
              <img :src="row.img ? 'https://www.ucook.com/' + row.img : 'https://www.ucook.com/wp-content/uploads/2021/05/UCook-official-logo.png'" class="card-img-top" :alt="row.title" style="height: 250px; overflow-y: hidden">
              <div class="card-body">
                <h5 class="card-title">{{ row.title }}</h5>
                <p class="card-text text-truncate">{{ row.cnt }}</p>
              </div>
            </div>
          </a>
        </template>
        <template #noDataFound>
          <div class="col-md-12">
            <p class="text-center">No results found</p>
          </div>
        </template>
      </dataset-item>
      <hr />
      <div class="d-flex flex-md-row flex-column justify-content-between align-items-center">
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
    }
  },
  beforeCreate() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.handleSearch = this.$win.$appConfig.debounce((value) => {
          this.$refs.myds.search(value)
        }, 300)

        watchEffect(() => {
          this.handleSearch(this.dsSearch)
        })

        const tax = this.$win.vue_wp_plugin_config.taxonomies
        const courses = tax['wprm_course']
        const cuisines = tax['wprm_cuisine']
        courses.forEach((item) => {
          this.categories[item.value] = item.text
        })
        cuisines.forEach((item) => {
          this.cuisines[item.value] = item.text
        })

        fetch(this.$win.vue_wp_plugin_config.indexFileUrl)
          .then(response => response.json())
          .then(recipes => {
            const items = Object.keys(recipes).map((key) => {
              return recipes[key]
            })

            this.recipes = items

            // auto filter by url
            this.filterByUrl()
          })
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.recipe-item {
  transition: .2s ease-in;
  -webkit-transition: .2s ease-in;
}

.card {
  box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
  height: 350px;
  overflow: hidden;
  margin-top: 10px
}

.scale-down:hover {
  transform: scale(.95);
  -webkit-transform: scale(.95);
}

</style>

<style src="@vueform/multiselect/themes/default.css"></style>
