<template>
  <div class="base-layout">
    <p class="title">FORXAI<sup>clone</sup> Prototype Version 1.0</p>
    <main id="main" class="main" role="main">
      <div class="content">
        <nav class="navbar mb-3">
          <router-link class="nav-link" :to="{ name: 'HelloWorld'}">Hello World</router-link>
          <router-link class="nav-link" :to="{ name: 'HelloDhaka'}">Hello Dhaka</router-link>
          <router-link class="nav-link" :to="{ name: 'HelloSylhet'}">Hello Sylhet</router-link>
        </nav>
        <slot></slot>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  components: {},
  props: {},
  data: function () {
    return {};
  }
}
</script>

<style scoped>

.base-layout {
  /* code goes here */
}
.title {
  font-size: 32px;
  margin-bottom: 10px;
  margin-top: 0;
}
.navbar {
  /* code goes here */
}
.nav-link {
  margin: 0 5%;
}
a.router-link-exact-active {
  color: #317bec;
}

</style>