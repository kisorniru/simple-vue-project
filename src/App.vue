<template>
  <div class="wrapper">

    <!-- Header section -->
    <div class="ah-row align-items-bottom">
      <div class="ah-column"></div>
      <div class="ah-column">
        <div class="logo">
          <router-link :to="{ name: 'App'}">
            <img src="./assets/images/logo.png" alt="logo"/>
          </router-link>
        </div>
      </div>
      <div class="ah-column">
        <h1 class="site-title">Toka Ink Bangladesh Limited</h1>
      </div>
    </div>

    <!-- Middle Section -->
    <div class="ah-row">

      <!-- Menu Bar -->
      <Navbar>
        <router-view />
      </Navbar>

      <!-- Middle Tiger Section -->
      <div class="ah-column">
        <div class="tiger">
          <router-link :to="{ name: 'App'}">
            <img src="./assets/images/tiger.png" alt="tiger"/>
          </router-link>
        </div>
      </div>

      <!-- Slider Section -->
      <component v-bind:is="componentName" />

    </div>

    <!-- Footer Section -->
    <div class="ah-row">
      <div class="ah-column"></div>
      <div class="ah-column">
        <div class="contacts">
          <p>2 DIT Avenue (Extention)<br/>
            Motijheel Commercial Area<br/>
            Dhaka - 1000, Bangladesh<br/>
            Phone - 880-2-956-8888, 955-4143<br/>
            Fax - 880-2-956-8887<br/>
            E-Mail : toka@bangla.net</p>
          <p style="display: none;">{{ $route.name }}</p>
        </div>
      </div>
      <div class="ah-column p-relative">
        <h3 class="page-name">{{ pageName }}</h3>
        <p class="copyright">Redevelop by: N.A. Siddique</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../views/Navbar";
import Slider from "../views/Slider";
import AboutUs from "../views/AboutUs";
import ManagingDirector from "../views/ManagingDirector";
import BoardOfDirectors from "../views/BoardOfDirectors";
import Managements from "../views/Managements";
import MethodOfTesting from "../views/MethodOfTesting";
import Products from "../views/Products";
import Gallery from "../views/Gallery";
import ContactUs from "../views/ContactUs";

export default {
  name: 'App',
  data: () => ({
    componentName: 'Slider',
    pageName: '',
  }),
  updated() {

    // Convert route name to page name
    const routeName = this.$route.name;
    const result = routeName.replace(/([A-Z])/g, " $1");
    this.pageName = result.charAt(0).toUpperCase() + result.slice(1);

    // Check route name with component name and set component to re-render
    if (this.$route.name === "AboutUs") {
      this.componentName = this.$route.name;
    } else if (this.$route.name === "ManagingDirector") {
      this.componentName = this.$route.name;
    } else if (this.$route.name === "BoardOfDirectors") {
      this.componentName = this.$route.name;
    } else if (this.$route.name === "Managements") {
      this.componentName = this.$route.name;
    } else if (this.$route.name === "MethodOfTesting") {
      this.componentName = this.$route.name;
    } else if (this.$route.name === "Products") {
      this.componentName = this.$route.name;
    } else if (this.$route.name === "Gallery") {
      this.componentName = this.$route.name;
    } else if (this.$route.name === "ContactUs") {
      this.componentName = this.$route.name;
    } else {
      this.pageName = '';
      this.componentName = 'Slider';
    }

  },
  components: {
    Navbar,
    Slider,
    AboutUs,
    ManagingDirector,
    BoardOfDirectors,
    Managements,
    MethodOfTesting,
    Products,
    Gallery,
    ContactUs,
  },
}
</script>

<style>

</style>
