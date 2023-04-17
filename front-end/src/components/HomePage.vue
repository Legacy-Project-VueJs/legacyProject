<template>
  <div>
    <div class="search-bar">
      <input type="text" v-model="searchText" placeholder="Search for food...">
      <button @click="searchFood">Search</button>
    </div>
    <div v-if="!selectedFood">
      <h1>Home Page</h1>
      <div class="container">
        <ul class="product-list">
          <li v-for="ele in damy" :key="ele._id" class="product-item">
            <div class="product-img">
              <img :src="ele.img" />
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ ele.des }}</h3>
              <p class="product-name">{{ ele.name }}</p>
              <p class="product-price">$ {{ ele.price }}</p>
              <div>
                <CartBadge :product="ele" />
                <button @click="viewFoodDetails(ele)">View Details</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <button @click="goBack">Back to Home</button>
      <FoodDetails :foodItem="selectedFood" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CartBadge from "./CartBadge.vue"
import FoodDetails from "./FoodDetails.vue";

export default {
  name: "HomePage",
  
  components:{CartBadge,FoodDetails},
  data() {
    return {
      damy: null,
      selectedFood: null,
      searchText: ''
    };
  },
  mounted() {
    this.loadFoods();
  },
  methods: {
    loadFoods() {
      axios
        .get("http://localhost:5000/api/Foods/getall")
        .then((res) => (this.damy = res.data))
        .catch((err) => console.log(err));
    },
    viewFoodDetails(foodItem) {
      this.selectedFood = foodItem; // set the selected food item
    },
    searchFood() {
      if (this.searchText.trim() !== '') {
        axios
          .get(`http://localhost:5000/api/Foods/${this.searchText}`)
          .then((res) => (this.damy = res.data))
          .catch((err) => console.log(err));
      } else {
        this.loadFoods();
      }
    },
    goBack() {
      this.selectedFood = null; // clear the selected food item
    }
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.product-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  flex: 1 0 30%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}

.product-img img {
  max-width: 100%;
}

.product-title {
  margin: 10px 0;
  font-size: 1.2em;
}

.product-price {
  margin: 10px 0;
  font-weight: bold;
  font-size: 1.5em;
}

.add-to-cart-btn {
  display: inline-block;
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  background-color: #0066cc;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
}

.add-to-cart-btn:hover {
  background-color: #004080;
}
</style>