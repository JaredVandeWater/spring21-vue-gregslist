<template>
  <div class="container">
    <div class="row">
      <div class="col  py-3">
        <h2>Cars</h2>
        <CreateCarModal />
        <button title="Open Create Car Form"
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#new-car-form"
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
      <Car v-else v-for="car in state.cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import Car from '../components/CarComponent'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import CreateCarModal from '../components/CreateCarModal'

export default {
  name: 'CarsPage',
  setup() {
    const state = reactive({
      loading: true,
      cars: computed(() => AppState.cars)
    })

    // This fires everytime this component is rendered to the Dom
    // similar to how we were using the 'constructor' of the controllers in MVC
    onMounted(async() => {
      try {
        await carsService.getCars()
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
    Car,
    CreateCarModal
  }
}
</script>

<style lang="scss" scoped>

</style>
