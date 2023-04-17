<template>
    <div>
        <button @click="handleshows">Show Data</button>
        <ul v-if="saveit.length">
            <li v-for="item in saveit" :key="item.id">
                <span>{{ item.name }}</span>
                <button @click="deleteFood(item.id)">Delete</button>
            </li>
        </ul>
    </div>
    <div>
        <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
        <router-link to="/" class="text-blue-500 text-lg flex justify-center mt-5 font-bold">
            BACK TO HOME
        </router-link>
        <div class="relative flex items-center justify-center mt-10">
            <router-link class="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" to="/Add">
                Add Items
            </router-link>
        </div>

        <div class="max-w-2xl">
            <div class="">
                <div class="p-4">
                    <label v-bind:for="table - search" class="sr-only">
                        Search
                    </label>
                    <div class="relative mt-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">

                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col mt-8">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                                    Rating
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                                    Image
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="e in saveit" :key="e._id"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {{ e.name }}
                                </td>
                                <td class="px-6 py-4">{{ e.rate }}/5</td>
                                <td class="px-6 py-4">{{ e.dsc }}</td>
                                <td class="px-6 py-4">{{ e.price }} $</td>
                                <td class="py-0">{{ e.img }} $</td>
                                <td class="px-6 py-4 text-right">
                                    <a @click="editItem(e)"
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </a>
                                </td>

                                <td class="px-6 py-4 text-right">
                                    <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        @click="deleteItem(e._id)">
                                        DELETE
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import { reactive, ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'MyComponent',
    components: {},
    setup() {
        const navigate = useNavigate();
        const saveit = reactive([]);
        const chek = ref(false);

        const handleshows = () => {
            chek.value = !chek.value;
        };
        const deleteFood = (id) => {
            axios
                .delete("http://localhost:5000/api/Foods/" + id)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => console.log(err));
        };
        onMounted(() => {
            axios
                .get("http://localhost:5000/api/Foods/getall")
                .then((res) => {
                    saveit.value = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        return {
            saveit,
            chek,
            handleshows,
            deleteFood,
        };
    },
};
</script>
  