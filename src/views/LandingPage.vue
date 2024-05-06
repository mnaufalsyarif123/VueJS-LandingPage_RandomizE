<!-- <template>
    <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        </div>
      </div>
    </div
    <LoginComponent />
  </div>
</template>

<script>

export default {
  name: 'LandingPage'
}
</script> -->

<template>
  <div class="landing-page">
    <div class="judul">
      <span class="title">{{ title }}</span
      ><br />
      <span class="name">{{ name }}</span>
    </div>

    <div class="parag col-md-6">
      <transition mode="out-in">
        <div v-if="show">
          <p class="center">
            RandomizE, your ultimate destination for randomness!
          </p>
          <p class="center">
            RandomizE is a website that offers you the experience of something
            very random and unstructured.
          </p>
          <p class="center">Try our features that you can see in our navbar!</p>
          <div>
            <a>
              <img
                src="https://i.chzbgr.com/full/9323165184/h64C1CADF/person-they-said-could-be-anything-obecame-disappointment-r"
                alt="Gamelab"
                style="margin-top: 20px"
              />
            </a>
          </div>
        </div>
        <div v-else>
          <h1>Welcome to RandomizE</h1>
        </div>
      </transition>
      <button class="btn btn-outline-primary col-6" @click="show = !show">
        Try Me!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hellooo",
      name: "Ladies and Gentlemen",
      show: false,
    };
  },
};
</script>

<style scoped>
/* Styling for the landing page */
/* .landing-page {
} */

/* Additional styling for the content */
.container {
  margin: 180px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  color: #0a47b6;
}

p {
  font-size: 18px;
  color: #555;
}

img {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.judul {
  margin-top: 80px;
  margin-bottom: 0px;
}

.title {
  font-size: 37px;
  font-weight: bold;
  color: #0a47b6;
}

.parag {
  max-width: 1150px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  word-wrap: break-word;
}

.name {
  font-size: 22px;
  font-weight: semi-bold;
  color: #333;
}

.center {
  text-align: center;
}

.v-enter-active,
.v-leave-active {
  /* transition: opacity 0.5s ease; */
  transition: transform 0.5s cubic-bezier(0, 0, 0.1, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: transform 0.9s;
}

.list-enter,
.list-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
