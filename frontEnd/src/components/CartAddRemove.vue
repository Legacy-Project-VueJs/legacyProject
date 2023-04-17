<template>
  <div v-if='product'>
    <button :class="loading?'disabled':''" @click="addOrRemove(-1)">-</button>
    <input type="number" v-model="qty"/>
    <button :class="loading?'disabled':''" @click="addOrRemove(1)">+</button>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
export default {
  name: 'CartAddRemove',
  props: ['product'],
  data() {
  return {
    qty: 1,
    loading: false,
    productCopy: { ...this.product }
  };
},
methods: {
  async addOrRemove(number) {
    this.loading = true;
   if (number === 1) {
      if (this.qty < 10) {
        this.qty++;
        this.productCopy.qty = this.qty;
        await this.$store.commit('updateCart', { product: this.productCopy });
        toast.success('cart updated');
      } else {
        toast.warning('you reached the limit'); // <-- fix typo here
      }
    }
    if (number === -1) {
      if (this.qty > 1) {
        this.qty--;
        this.productCopy.qty = this.qty;
        await this.$store.commit('updateCart', { product: this.productCopy });
        toast.success('cart updated');
      } else {
        toast.warning('you reached the limit'); // <-- fix typo here
      }
    }
    this.loading = false;
  }
},
mounted() {
  this.qty = this.productCopy.qty;
}
};
</script>

<style>
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: black;
    border: 1px solid #000;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #000;
    color: #fff;
  }
  
  input[type="number"] {
    width: 4rem;
    padding: 0.5rem;
    text-align: center;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1rem;
    margin: 0 0.5rem;
  }
</style>