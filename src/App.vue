<template>
  <div id="app">
    <nav class="navbar navbar-light">
      <div class="container">
        <!-- Assuming you have the logo in your assets directory -->
        <img src="@/assets/Random.png" alt="Randomize logo" height="40" />

        <!-- Update these links as per your routing configuration -->
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/ImgGen" class="nav-link">
          Image Generator
        </router-link>
        <router-link to="/calculator" class="nav-link">Calculator</router-link>
        <!-- Example button, adjust as needed -->
        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
      </div>
    </nav>

    <div class="container main-content">
      <router-view></router-view>
    </div>
  </div>
  <LoginComponent />
</template>

<script>
import LoginComponent from './components/LoginComponent.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    LoginComponent
  }
}
</script>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container.main-content {
  margin-top: 60px; /* Adjust based on your navbar's height */
}

/* Navbar styles */
.navbar {
  background-color: #0a47b6;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar img {
  height: 40px;
}

.navbar .nav-link {
  color: rgb(254, 255, 255);
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
}

.navbar .nav-link.active,
.navbar .nav-link:hover {
  background-color: #feffff;
  color: #0a47b6;
  border-radius: 10px;
}

.btn-outline-light {
  border-color: #ffffff;
  color: #ffffff;
}

.btn-outline-light:hover {
  background-color: #ffffff;
  color: #0a47b6;
}
</style>
