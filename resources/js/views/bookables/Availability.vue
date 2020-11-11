<template>
    <div class="w-full md:w-2/6 lg:w-2/6 xl:w-2/6 mt-2 mx-1 md:mt-0 lg:mt-0 xl:mt-0 p-3 shadow border border-gray-300">
        <h1 class="text-center text-lg text-teal-500" v-text="`Availability`"></h1>
        <div class="w-4/5 mx-auto my-2 flex flex-col justify-center justify-content-center">
            <span class="text-red-500 text-center" v-if="errorMessage!=null" v-text="errorMessage"></span>
            <span class="text-center" :class="`${available==0 ? 'text-red-500' : 'text-teal-500'}`" v-if="available!=null" v-text="message"></span>
        </div>
        <div class="w-4/5 mx-auto my-2 flex flex-col justify-center justify-content-center">
            <div class="font-bold text-teal-600">From</div>
            <input type="date" name="" id="" class="w-full p-2 appearance-none outline-none rounded text-teal-400" v-model="from">
            <div v-if="errors.from">
                <div class="text-red-500 text-xs py-1" v-for="(error, key) in errors.from" :key="key" v-text="error"></div>
            </div>
        </div>
        <div class="w-4/5 mx-auto my-2 flex flex-col justify-center justify-content-center">
            <div class="font-bold text-teal-600">To</div>
            <input type="date" name="" id="" class="w-full p-2 appearance-none outline-none rounded text-teal-400" v-model="to">
            <div v-if="errors.to">
                <div class="text-red-500 text-xs py-1" v-for="(error, key) in errors.to" :key="key" v-text="error"></div>
            </div>
        </div>
        <div class="w-4/5 mx-auto my-3 flex flex-col justify-center justify-content-center">
            <button type="button" class="w-full p-2 rounded bg-teal-500 text-white" @click="verifyDates">Verify</button>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['bookableId'],
        data() {
            return {
                to: null,
                from: null,
                errors: {},
                loading: true,
                message: null,
                available: null,
                errorMessage: null
            };
        },
        methods: {
            verifyDates() {
                this.errors = {};
                this.loading = true;
                this.message = null;
                this.available = null;
                this.errorMessage = null;
                axios.get(`/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`).then(response => {
                    this.available = response.data.available;
                    if(this.available==0) {
                        this.message = '(NOT AVAILABLE)';
                    } else {
                        this.message = '(AVAILABLE)';
                    }
                    this.loading = false;
                }).catch(error => {
                    this.errors = error.response.data.errors;
                    this.errorMessage = error.response.data.message;
                });
            }
        }
    }
</script>
