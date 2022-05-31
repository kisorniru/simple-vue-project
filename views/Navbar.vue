<template>
  <div class="ah-column">
    <ul class="menu">
      <li>
        <router-link :to="{ name: 'AboutUs'}">About Us</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ManagingDirector'}">Managing Director</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'BoardOfDirectors'}">Board of Directors</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Managements'}">Managements</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'MethodOfTesting'}">Method of Testing</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Products'}">Products</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Gallery'}">Gallery</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ContactUs'}">Contact Us</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
* ...
*/
</style>
