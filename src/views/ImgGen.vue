<template>
  <div class="img-generator">
    <button @click="generateImage" class="btn btn-primary col-4 generate-btn">Generate Random Image</button>
    <img v-if="image" :src="image" alt="Random Image" class="img"/>
  </div>
</template>

<script>
export default {
  name: "Imggen",
  data() {
    return {
      image: null
    };
  },
  methods: {
    generateImage() {
      // Generate URL for random image from picsum.photos
      const randomImageURL = `https://picsum.photos/1000/450?random=${Math.random()}`;
      this.image = randomImageURL;
    },
    moveButtonUp() {
      // Move button up after image loads
      this.$el.querySelector(".generate-btn").style.marginTop = "50px";
    },
  },
};
</script>

<style scoped>
.img{
  margin-top: 9%;
}

.generate-btn {
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, 10%);
  transition: margin 0.5s ease;
  background-color: #0a47b6;
}
</style>
