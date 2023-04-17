<template>
  <div class="food-details">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img :src="foodItem.img" alt="Food Image" class="food-image" />
        </div>
        <div class="col-md-6">
          <h1 class="food-name">{{ foodItem.name }}</h1>
          <p class="food-description">{{ foodItem.des }}</p>
          <p class="food-price">Price: {{ foodItem.price }}</p>
         
        </div>
      </div>
    </div>
    <div >
    <h1>Shop</h1>
    <form>
  <label for="first-name">First Name:</label>
  <input type="text" id="first-name" name="first-name" required>
  <label for="last-name">Last Name:</label>
  <input type="text" id="last-name" name="last-name" required>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <label for="address">Address:</label>
  <input type="text" id="address" name="address" required>
  <label for="city">City:</label>
  <input type="text" id="city" name="city" required>
  <button type="submit">Send</button>
</form>
  </div>
  </div>
</template>

<script>
export default {
  name: "FoodDetails",
  props: {
    foodItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.food-details {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f8f8f8;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}

.food-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 30px;
}

.food-name {
  font-size: 3rem;
  margin-bottom: 20px;
}

.food-description {
  font-size: 1.5rem;
  margin-bottom: 20px;
  line-height: 1.5;
}

.food-price {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #0066cc;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
}

.back-link:hover {
  background-color: #004080;
}

@media (max-width: 991px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .food-price {
    font-size: 1.5rem;
  }
}
</style>