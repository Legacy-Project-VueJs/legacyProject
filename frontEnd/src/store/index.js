import { createStore } from "vuex";

export default createStore({
    state:{
        cart:[],
        cartTotal:0
    },

    mutations:{
        addRemoveCart(state,payload){
            payload.toAdd?
            state.cart.push(payload.product):
            state.cart=state.cart.filter(function(obj){
                return obj._id !==payload.product._id
            })
            state.cartTotal= state.cart.reduce((acc,object)=>{
                return parseFloat(acc)+ parseFloat(object.price*object.qty)
            },0)
            localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal))
            localStorage.setItem('cart',JSON.stringify(state.cart))

        },
        updateCart(state,payload){
            const cartItem = state.cart.find(o=>o._id===payload.product._id);
            if(cartItem){
              cartItem.qty = payload.product.qty;
              state.cartTotal = state.cart.reduce((acc,object)=>{
                return parseFloat(acc)+ parseFloat(object.price*object.qty);
              },0);
              localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal));
              localStorage.setItem('cart',JSON.stringify(state.cart));
            } else {
              console.warn(`Product with id ${payload.product._id} not found in cart.`);
            }
          }
    },
    actions:{},
    modules:{}

})