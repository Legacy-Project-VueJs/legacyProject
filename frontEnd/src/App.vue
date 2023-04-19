<template>

  <div id="nav" class="sticky_header">
    <div class="header">
      <div class="logo">
        <img src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" alt="Logo" />
      </div>
      <div class="mobile-menu">&#9776;</div>
      <ul class="menu">
        <li class="nav_item">
          <router-link to="/HomePage" exact active-class="active_link">Home</router-link>
        </li>
        <li class="nav_item">
          <router-link to="/about" active-class="active_link">About</router-link>
        </li>
        <li class="nav_item">
          <router-link to="/contact" active-class="active_link">Contact</router-link>
        </li>
        <li class="nav_item">
          <router-link to="/carte" active-class="active_link">
            Cart
            <span v-if="$store.state.cart.length > 0">{{$store.state.cart.length}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <router-view />

  <!-- <div v-if="!isLoggedIn">
   
    <template v-if="showLogin">
      <login-form @loggedIn="isLoggedIn = true"/>
      <p>No account yet? <span @click="showLogin=false">Sign up</span> instead.</p>
    </template>
 
    <template v-else>
      <signup-form @loggedIn="isLoggedIn = true"/>
      <p>Already registered? <span @click="showLogin=true">Login</span> instead.</p>
    </template>
  </div>
 
  <div v-else>
    <h2>Welcome {{ displayName }}</h2>
    <button @click="signOut">Sign Out</button>
  </div> -->

</template>

<script>

</script>


<style>



.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  line-height: 80px;
  width: 100%;
}

.logo img {
  width: 30%;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav_item {
  margin-right: 20px;
}

.nav_item a {
  color: black;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
}

.nav_item a:hover {
  color: inherit;
}

.nav_item a.active_link {
  color: crimson;
}

.mobile-menu {
  display: none;
}

@media only screen and (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #ffe4b5;
    padding: 20px;
  }

  .menu li {
    margin-bottom: 10px;
  }

  .mobile-menu {
    display: block;
    cursor: pointer;
  }
}
</style>


