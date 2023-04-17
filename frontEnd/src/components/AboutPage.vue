<template>
  <div class="about-page">
    <h1>About Us</h1>
    <p>We are a food delivery service that brings your favorite meals to your doorstep.</p>
    <h2>Our Mission</h2>
    <p>Our mission is to make food delivery easy, convenient, and affordable for everyone. We believe that good food should be accessible to everyone, regardless of their location or budget.</p>
    <h2>Our Values</h2>
    <ul>
      <li>Customer satisfaction is our top priority.</li>
      <li>We value honesty, transparency, and accountability in everything we do.</li>
      <li>We are committed to using sustainable and eco-friendly packaging materials.</li>
      <li>We support local restaurants and food vendors.</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  mounted() {
    document.title = 'About Us - Food Delivery Service'
  }
}
</script>
<style>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
  align-items: center;
}

h2 {
  font-size: 36px;
  margin-top: 40px;
  margin-bottom: 20px;
  align-items: center;
}

p {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

li {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.about-page {
  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

</style>