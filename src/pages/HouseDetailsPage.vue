<template>
  <div>
    <h1>Hello From House Details!</h1>
    {{ route.params.id }}
    {{ state.house }}
    <button type="button" class="btn btn-danger" @click="deleteHouse">
      Delete
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { housesService } from '../services/HousesService'

export default {
  name: 'HouseDetails',
  setup() {
    // ROUTE is the current page info
    const route = useRoute()
    // ROUTER is the toolset of changing routes automatically
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })

    onMounted(async() => {
      try {
        await housesService.getHouseById(route.params.id)
      } catch (error) {
      }
    })

    return {
      route,
      state,
      async deleteHouse() {
        try {
          await housesService.deleteHouse(state.house.id)
          // Router is a toolset, here used to change the page after the delete is completed
          // returning the user to the cars page
          AppState.activeHouse = null
          router.push({ name: 'Houses' })
        } catch (error) {
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
