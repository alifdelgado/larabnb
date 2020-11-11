<template>
    <div class="sm:w-full md:w-1/3 lg:w-1/4 mx-2 my-3 bg-gray-200 shadow rounded border border-gray-400 px-3 py-2">
        <router-link :to="{ name: 'bookable_show', params: { id: bookable.id } }">
            <h1 class="text-center text-lg text-teal-500 my-2" v-text="bookable.title"></h1>
        </router-link>
        <p class="text-teal-700 text-justify" v-text="bookable.description"></p>
    </div>
</template>
<script>
    export default {
        props: ['bookable']
    }
</script>
