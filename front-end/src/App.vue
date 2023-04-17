<template>
 <div id='nav'>
<router-link to='/'>Home</router-link>
<router-link to='/about'>About</router-link>
<router-link to='/contact'>Contact</router-link>
<router-link to='/carte'>
  <span v-if='$store.state.cart.length > 0'></span>{{$store.state.cart.length}}
</router-link>
 </div>
 <router-view/>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav{
display: flex;
justify-content: space-between;
background:#ffe4b5;
padding:30px;

}
#nav a{
  font-weight:bold;
  color:#2c3e50;
  text-decoration: none; 
  transition: color 0.3s ease-in-out;
}
#nav a:hover {
  color: white;
  background: crimson;
}
#nav a.router-link-exact-active{
  color: white;
  background: crimson;
  
}
</style>
