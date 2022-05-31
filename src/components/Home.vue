<template>
  <div class="wrapper">
    <div class="ah-row align-items-bottom">
      <div class="ah-column"></div>
      <div class="ah-column">
        <div class="logo">
          <a href="#"><img src="./assets/images/logo.png" alt="logo"/></a>
        </div>
      </div>
      <div class="ah-column">
        <h1 class="site-title">Toka Ink Bangladesh Limited</h1>
      </div>
    </div>
    <div class="ah-row">
      <div class="ah-column">
        <ul class="menu">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Managing Director</a></li>
          <li><a href="#">Board of Directord</a></li>
          <li><a href="#">Managements</a></li>
          <li><a href="#">Method of Testing</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="ah-column">
        <div class="tiger">
          <a href="#"><img src="images/tiger.png" alt="tiger"/></a>
        </div>
      </div>
      <div class="ah-column">
        <div class="main-content">
          <div class="camera_wrap camera_azure_skin" id="slider">
            <div data-src="images/slider-1.jpg"></div>
            <div data-src="images/slider-2.jpg"></div>
            <div data-src="images/slider-3.jpg"></div>
          </div><!-- #camera_wrap_1 -->
        </div>
      </div>
    </div>
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
        </div>
      </div>
      <div class="ah-column p-relative">
        <p class="copyright">Powered by: ConnectBD Ltd.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
