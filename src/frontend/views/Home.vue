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
              ref="multiselect"
            />
          </div>
          <div class="col-md-6 mb-3">
            <label style="text-transform: uppercase;">Cuisines</label>
            <Multiselect
  v-model="filters.cuisines"
  mode="multiple"
  :close-on-select="false"
  :options="cuisines"
  ref="multiselect"
/>
          </div>
          <div class="col-md-3 mb-3">
            <label style="text-transform: uppercase;">Preparation Time (minutes)</label>
          </div>
                    <div class="col-md-3 mb-3">
            <label style="text-transform: uppercase;">Cook Time (minutes)</label>
          </div>
                    <div class="col-md-3 mb-3">
            <label style="text-transform: uppercase;">Total Time (minutes)</label>
          </div>
          <div class="col-md-3">Clear all filters</div>
        </div>
    </div>
    <dataset
      v-slot="{ ds }"
      :ds-data="recipes"
      :ds-search-in="['title', 'cnt']"
    >
      <div class="row" :data-page-count="ds.dsPagecount">
        <div class="col-md-6 mb-3">
        </div>
        <div class="col-md-6">
          <div class="form-floating mb-3 ">
            <dataset-search ds-search-placeholder="Type to search..." />
            <label for="floatingInput">Type to search...</label>
          </div>

        </div>
      </div>

      <dataset-item class="row" style="overflow-y: auto; max-height: 600px">
        <template #default="{ row, rowIndex }">
          <a class="recipe-item scale-down col-sm-12 col-md-6 col-lg-4" :href="row.url">
            <div class="card" style="">
              <img :src="row.image_url ? 'https://www.ucook.com/' + row.image_url : 'https://www.ucook.com/wp-content/uploads/2021/05/UCook-official-logo.png'" class="card-img-top" :alt="row.title" style="height: 250px; overflow-y: hidden">
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
      <div class="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <dataset-info class="mb-2 mb-md-0" />
        <dataset-pager />
      </div>
    </dataset>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Multiselect from '@vueform/multiselect'

export default defineComponent({
  components: {
    Multiselect
  },
  name: 'Home',
  data () {
    // get menus from appSettings
    return {
      recipes: [],
      dropdown: { height: 0 },
      filters: { categories: [], cuisines: [], cooktimes: 0, preptimes: 0, totaltimes: 0 },
      menus: { categories: false, cuisines: false, cooktimes: false, preptimes: false, totaltimes: false },
      searchText: '',
      onlineFilter: '',
      categories: {
        'appetizers': 'Appetizers',
        'barbecue-and-grilling': 'Barbecue and Grilling'
      },
      cuisines: []
    }
  },

  computed: {
    activeMenu() {
      return Object.keys(this.menus).reduce(($$, set, i) => (this.menus[set]) ? i : $$, -1)
    },

    list() {
      let { countries, categories } = this.activeFilters

      return this.companies.filter(({ country, keywords, rating }) => {
        if (rating < this.filters.rating) return false
        if (countries.length && !~countries.indexOf(country)) return false
        return !categories.length || categories.every(cat => ~keywords.indexOf(cat))
      })
    },

    activeFilters() {
      let { countries, categories } = this.filters

      return {
        countries: Object.keys(countries).filter(c => countries[c]),
        categories: Object.keys(categories).filter(c => categories[c]),
        rating: (this.filters.rating > this.rating.min) ? [this.filters.rating] : []
      }
    }
  },

  watch: {
    activeMenu(index, from) {
      if (index === from) return;

      this.$nextTick(() => {
        if (!this.$refs.menu || !this.$refs.menu[index]) {
          this.dropdown.height = 0
        } else {
          this.dropdown.height = `${this.$refs.menu[index].clientHeight + 16}px`
        }
      })
    }
  },

  methods: {
  },
  beforeMount() {
    fetch('http://ucook.com/wp-content/search-index.json')
      .then(response => response.json())
      .then(recipes => {
        const items = Object.keys(recipes).map((key) => {
          // collect categories
          // collect cuisines
          return recipes[key]
        })
        // debugger
        // var first = items[0];
        this.recipes = items
      })
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
