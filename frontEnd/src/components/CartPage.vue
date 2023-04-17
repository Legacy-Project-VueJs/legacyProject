<template>
  <div class="cart-page">
    <div class="cart-page__overlay" @click="$emit('close-cart')"></div>
    <div class="cart-page__container">
      <h2 class="cart-page__title">Cart</h2>
      <div v-for="item in $store.state.cart" :key="item._id" class="cart-page__item">
        <div>
          <h3>{{ item.dsc }}</h3>
          <p>{{ item.name }}</p>
          <div><CartAddRemove :product="item"/></div>
          <p>$ {{ item.price*item.qty }}</p>
          <a role="button" @click="removeItem(item)">delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartAddRemove from "./CartAddRemove.vue"
export default {
  name: "CartPage",
  components:{CartAddRemove},
  methods: {
    removeItem(item){
      this.$store.commit('addRemoveCart',{product :item, toAdd: false})
    }
  },
};
</script>
<style>
.cart-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-page__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cart-page__container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-height: 80%;
  overflow-y: auto;
  z-index: 1;
}

.cart-page__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-page__item {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

.cart-page__item h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.cart-page__item p {
  font-size: 14px;
  margin-bottom: 5px;
}

.cart-page__item a {
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: crimson;
  text-decoration: none;
}

.cart-page__item a:hover {
  text-decoration: underline;
}

.cart-page__item button {
  margin-right: 10px;
}
</style>