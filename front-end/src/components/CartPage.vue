<template>
  <div class="cart-page" >
    <div class="cart-page-overlay" @click="$emit('close-cart')"></div>
    <div class="cart-page-content">
      <h2 class="cart-page-title">Cart</h2>
      <div v-for="item in $store.state.cart" :key="item._id" class="cart-item">
        <div class="cart-item-info">
          <h3 class="cart-item-title">{{ item.dsc }}</h3>
          <p class="cart-item-name">{{ item.name }}</p>
          <div><CartAddRemove :product="item"/></div>
          <p class="cart-item-price">$ {{ item.price*item.qty }}</p>
          <a role="button" @click="removeItem(item)"><span class="material-icons">delete</span></a>
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