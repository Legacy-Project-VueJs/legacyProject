<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Contact Us</h3>
          <p>
            Fast && Yummy Delivery<br>
            123 Main St.<br>
            Marsa, TN 12345<br>
            Phone: 216-55-555-555<br>
            Email: info@fastandyummy.com
          </p>
        </div>
        <div class="col-md-4">
          <h3>Connect With Us</h3>
          <div class="centered">
            <ul class="list-inline">
              <li class="list-inline-item"><router-link to="/">Home</router-link></li>
              <li class="list-inline-item"><router-link to="/about">About</router-link></li>
              <li class="list-inline-item"><router-link to="/contact"> Contact</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Sign up to receive updates on our latest offers and promotions.</p>
          <form>
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Email address">
              <span class="input-group-btn">
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSectionContainer',
};
</script>

<style>
footer {
  background-color: #f5f5f5;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

footer p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer ul li {
  display: inline-block;
  margin-right: 10px;
}

footer ul li:last-child {
  margin-right: 0;
}

footer ul li a {
  color: #666;
  font-size: 16px;
  text-decoration: none;
}

footer form input[type="email"] {
  height: 42px;
}

footer form button {
  height: 42px;
  padding: 0 30px;
}

footer .col-md-4:first-child {
  margin-right: 20px;
}

div.col-md-4 {
  text-align: center;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>