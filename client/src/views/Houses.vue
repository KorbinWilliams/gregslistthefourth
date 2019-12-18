<template>
  <div class="housesmain container-fluid">
    <header class="row">
      <div class="col">
        <h1>Houses</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createHouse">
          <input required type="text" v-model="newHouse.location" placeholder="location" />
          <input required type="number" v-model="newHouse.price" placeholder="price" />
          <input required type="number" v-model="newHouse.year" placeholder="year" />
          <input required type="text" v-model="newHouse.imgUrl" placeholder="imgUrl" />
          <input required type="text" v-model="newHouse.description" placeholder="description" />
          <button class="btn btn-success" type="submit">Add House</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row houses">
          <div class="col-4" v-for="house in houses" :key="house.id">
            <!-- Props are data passed from parent to child with :propName="DATA" -->
            <house-component :houseData="house" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HouseComponent from "@/components/House";
export default {
  name: "housesmain",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getHouses");
  },
  data() {
    return {
      newHouse: {
        location: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      }
    };
  },
  methods: {
    createHouse() {
      let house = { ...this.newHouse };
      this.$store.dispatch("createHouse", house);
      this.newHouse = {
        loaction: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      };
    }
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  components: {
    HouseComponent
  }
};
</script>
<style>
</style>
