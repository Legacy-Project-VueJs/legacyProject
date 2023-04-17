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