<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p>Have a question or feedback? We'd love to hear from you.</p>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContactPage',
  mounted() {
    document.title = 'Contact Us - Food Delivery Service'
  }
}
</script>
<style>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

p {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-size: 18px;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #e64a19;
}

</style>