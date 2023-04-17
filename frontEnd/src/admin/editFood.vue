<template>
  <div>
    <div class="bg-gray-100 p-4 rounded-md">
      <div class="flex items-center mb-4">
        <label class="mr-2">Upload Image:</label>
        <input type="file" @change="onFileChange" class="border border-gray-400 px-2 py-1 rounded-md" />
        <button class="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white" @click="uploadImg">Upload</button>
        <img :src="url" class="w-32" />
      </div>

      <label class="block mb-2 font-medium">Name:</label>
      <input type="text" v-model="name" class="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

      <label class="block mb-2 font-medium">Description:</label>
      <input type="text" v-model="desc" class="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

      <label class="block mb-2 font-medium">Price:</label>
      <input type="number" v-model="price" class="w-full border border-gray-400 px-2 py-1 rounded-md mb-4" />

      <button type="button" value="Update" @click="updateFood"
        class="px-4 py-2 rounded-md bg-blue-500 text-white">Update</button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import { reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const data = reactive(route.params);

    const state = reactive({
      file: null,
      url: data.img,
      name: data.name,
      desc: data.dsc,
      price: data.price,
    });

    const onFileChange = (event) => {
      state.file = event.target.files[0];
    };

    const uploadImg = () => {
      const form = new FormData();
      form.append('file', state.file);
      form.append('upload_preset', 'jassery');

      axios.post('https://api.cloudinary.com/v1_1/dj6am9a7q/upload', form)
        .then((response) => {
          state.url = response.data.secure_url;
        })
        .catch((error) => {
          console.error(error);
        });
    };


    const updateFood = () => {
      axios.put(`http://localhost:5000/api/Foods/${data._id}`, {
        name: state.name,
        dsc: state.desc,
        img: state.url,
        price: state.price,
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    };

    return {
      ...toRefs(state),
      onFileChange,
      uploadImg,
      updateFood,
    };
  },
};
</script>
  
<style>
/* add your styles here */
</style>
  