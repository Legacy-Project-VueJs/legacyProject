<template>
  
  <button @click="$event=>addOrRemove()"> <i :class="toAdd"></i>X</button>
   
     <CartAddRemove v-if="!toAdd" :product="cartItems"/>
  
</template>

<script>
import {toast} from "vue3-toastify"
import CartAddRemove from "./CartAddRemove.vue"
export default {
  name: "CartBadge",
  props:['product'],
  components:{CartAddRemove},
  data(){
  return {
  toAdd:true,
  cartItems:[]
  }
  },
  methods:{
   async addOrRemove(){
   this.cartItems.qty=1
   this.$store.commit('addRemoveCart',{product :this.cartItems, toAdd: this.toAdd})
   let toastMSG
   this.toAdd ? toastMSG ='Added to cart ' : toastMSG='Removed'
   toast(toastMSG,{autoClose:1000,})
   this.toAdd =!this.toAdd
   },
  },
  mounted(){
  let cart =this.$store.state.cart
  let obj =cart.find(o=>o._id===this.product._id)
  if(obj){
  this.toAdd=false
  this.cartItems=obj
  }else{
  this.cartItems=this.product
  this.toAdd=true
  }
  }
  
};
</script>

<style>
button {
  background-color: black;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: crimson;
}

i {
  display: inline-block;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: contain;
}

.CartAddRemove {
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
}

.CartAddRemove button {
  background-color: crimson;
  padding: 8px 16px;
  font-size: 14px;
}

.CartAddRemove button:hover {
  background-color: crimson;
}

.CartAddRemove span {
  font-size: 14px;
  margin-left: 8px;
  color: #666;
}
</style>


