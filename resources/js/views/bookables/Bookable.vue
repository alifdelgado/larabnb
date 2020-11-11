<template>
    <div>
        <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mx-1 justify-evenly mt-10">
            <div class="w-full md:w-3/6 lg:w-3/6 xl:w-3/6 p-3 shadow border border-gray-300">
                <h1 class="text-center text-lg text-teal-500 py-2" v-text="bookable.title"></h1>
                <p class="text-teal-700 text-justify py-2" v-text="bookable.description"></p>
            </div>
            <availability-component :bookableId="bookable.id"></availability-component>
        </div>
        <div class="w-4/6 border mx-auto my-10 p-5">
            <review-list-item></review-list-item>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bookable: {}
            };
        },
        mounted() {
            axios.get(`/api/bookables/${this.$route.params.id}`).then(response => {
                this.bookable = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    }
</script>
