<template>
  
  <button @click="$event=>addOrRemove()"> <i :class="toAdd"></i></button>
   
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






