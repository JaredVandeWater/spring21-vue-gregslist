<template>
  <div class="col-md-4 mb-3">
    <!-- Route parameter getting set with the Params object -->
    <router-link :to="{name: 'HouseDetails', params: { id: house.id }}">
      <div class="card shadow">
        <img class="card-img-top" :src="house.imgUrl" alt="">
        <div class="card-body">
          <h4 class="card-title">
            {{ house.price }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'House',
  props: {
    house: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
