<template>
  <div class="bg-gray-100 p-4 rounded-md">
    <div class="flex items-center mb-4">
      <label class="mr-2">Upload Image:</label>
      <input type="file" @change="onFileChange" class="border border-gray-400 px-2 py-1 rounded-md" />
      <button @click="uploadImg" class="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white">Upload</button>
    </div>
    <img :src="url" class="mb-4 rounded-md" />

    <label class="block mb-2 font-medium">Name:</label>
    <input type="text" placeholder="Name" v-model="name"
      class="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

    <label class="block mb-2 font-medium">Description:</label>
    <input type="text" placeholder="Description" v-model="desc"
      class="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

    <label class="block mb-2 font-medium">Price:</label>
    <input type="number" placeholder="Price" v-model="price"
      class="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

    <button @click="addFood" class="px-4 py-2 rounded-md bg-blue-500 text-white">Add</button>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'CreatFood',
  setup() {
    const file = ref('');
    const url = ref('');
    const name = ref('');
    const desc = ref('');
    const price = ref(0);

    const onFileChange = (event) => {
      file.value = event.target.files[0];
    };

    const uploadImg = () => {
      const form = new FormData();
      form.append('file', file.value);
      form.append('upload_preset', 'jassery');

      axios
        .post('https://api.cloudinary.com/v1_1/dj6am9a7q/upload', form)
        .then((res) => {
          url.value = res.data.secure_url;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };


    const addFood = () => {
      axios
        .post('http://localhost:5000/api/Foods/add', {
          name: name.value,
          dsc: desc.value,
          img: url.value,
          price: price.value,
        })
        .then((result) => {
          alert('added to menu');
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      file,
      url,
      name,
      desc,
      price,
      onFileChange,
      uploadImg,
      addFood,
    };
  },
};
</script>

<style scoped>
/* CSS styles go here */
</style>
