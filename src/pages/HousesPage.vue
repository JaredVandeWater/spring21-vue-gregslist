<template>
  <div class="container">
    <div class="row">
      <div class="col py-3">
        <h2>Houses</h2>
        <CreateHouseModal />
        <button title="Open Create House Form"
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#new-house-form"
        >
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <!-- cars go here v-for car in cars -->
      <div v-if="state.loading">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <House v-else v-for="house in state.houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import House from '../components/HouseComponent'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import CreateHouseModal from '../components/CreateHouseModal'

export default {
  name: 'HousesPage',
  setup() {
    const state = reactive({
      loading: true,
      houses: computed(() => AppState.houses)
    })

    // This fires everytime this component is rendered to the Dom
    // similar to how we were using the 'constructor' of the controllers in MVC
    onMounted(async() => {
      try {
        await housesService.getHouses()
        state.loading = false
      } catch (error) {
        console.error(error)
      }
    })

    return {
      state
    }
  },
  components: {
    House,
    CreateHouseModal
  }
}
</script>

<style lang="scss" scoped>

</style>
