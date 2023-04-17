<template>
  <div>
  <section v-if="!selectedFood">
  <v-container>
    <v-row class="d-flex align-items-center justify-content-between">
      <v-col cols="6">
        <div class="hero_content">
          <div class="hero_subtitle d-flex align-items-center">
            <p> Know Before You Go</p>
            <img src="https://media.istockphoto.com/id/1276365565/vector/food-delivery-icon-vector-for-graphic-design-logo-web-site-social-media-mobile-app-ui.jpg?s=612x612&w=0&k=20&c=VAC6PLrWW-edpUIq_YaEbdcV4aU7lEdMI_UqJKIEkik=" alt="img" />
          </div>
          <h1>
            Fast && Yummy
          </h1>
          <p>
           Welcome to our food delivery website, where we offer a hassle-free and convenient way for you to enjoy delicious meals in the comfort of your own home. We understand the importance of good food and convenience, which is why we offer a wide range of cuisines from different restaurants, all at the click of a button.
          </p>
        </div>
      </v-col>
      <v-col cols="6">
      
        <div class="hero-img-box mt-5">
          <img src="https://static.vecteezy.com/system/resources/previews/007/487/564/original/cute-pizza-icon-illustration-pizza-sticker-cartoon-logo-food-icon-concept-flat-cartoon-style-suitable-for-web-landing-page-banner-sticker-background-kawaii-pizza-vector.jpg" alt="img" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</section>

        <div class="search-bar" v-if="!selectedFood">
          <input
            type="text"
            v-model="searchText"
            placeholder="Search for food..."
          />
          <button @click="searchFood">Search</button>
        </div>
     
    <div class="container" v-if="!selectedFood">
      <div class="containerr">
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
    <FooterSectionContainer />
  </div>
</template>

<script>
import axios from "axios";
import CartBadge from "./CartBadge.vue"
import FoodDetails from "./FoodDetails.vue";
import FooterSectionContainer from "./FooterSectionContainer.vue";

export default {
  name: "HomePage",
  
  components:{CartBadge,FoodDetails,FooterSectionContainer},
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
      this.selectedFood = null; 
    }
  },
};
</script>

<style>

.containerr {
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

.hero_subtitle img{
  width: 3.3rem ;
  height: 2.3rem;
}
.hero_content h1{
  font-size: 3.2rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: black;
}

.hero_content p {
  font-size: 1.1rem;
  color: black; 
  line-height: 2rem;
}
.hero-img-box img{
  width: 100%;
  height: 350px;
  border-radius: 20px;
  border: 1px solid crimson;
  object-fit: cover;
}
.hero_content{
  padding-top: 3.5rem;
}
.hero-img-box{
  padding-top: 2rem;
}
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.search-bar input{
  width: 60%;
  height: 50px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  font-size: 1.1rem;
}

.search-bar button {
  width: 20%;
  height: 50px;
  margin-left: 1rem;
  border-radius: 5px;
  border: none;
  background: crimson;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
}

.search-bar button:hover {
  background: #fff;
  color: crimson;
  border: 2px solid crimson;
}

</style>