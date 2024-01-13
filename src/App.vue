<script setup lang="ts">
</script>

<template>
  <div id="app-area">
    <!-- Color Schemes to Try:
    Scheme 1 -> #0E0B16 (Void)   #A239CA (Fuschia)  #4717F6 (Jewel) #E7DFDD (Stark)
    Scheme 2 -> #000000 (Black)  #062F4F (Ink)  #813772 (Posy)  #B82601 (Embers)
    https://www.canva.com/learn/website-color-schemes/
    -->
    <nav class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/About">About Me</router-link>
      <router-link to="/Projects">Projects</router-link>
      <router-link to="/Contact">Contact Me</router-link>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
  #app-area {
      height: 100vh;
      /* background-color: rgb(64, 64, 64); */
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
  }
  router-view {
    overflow: auto;
  }
  a {
    color: #E7DFDD;
    font-size: 20px;
    margin: 8px;
  }
  .nav-bar {
    background-color: #A239CA;
    border-radius: 4px;
    padding: 5px;
    width: 100vw;
  }

  
  /* Fade Transition */
  /* .fade-leave-active {
    transition-property: all;
    transition-duration: 1000ms;
    transition-timing-function: ease;
  }
  .fade-leave {
    transform: translateY(50%);
  }
  .fade-leave-to {
    transform: translateY(100%);
    background: green;
  } */
</style>
