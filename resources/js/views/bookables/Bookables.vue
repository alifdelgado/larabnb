<template>
    <div class="m-10 mx-auto">
        <bookable-list-item :bookables="bookables"></bookable-list-item>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bookables: {},
            };
        },
        mounted() {
            axios.get('/api/bookables').then(response => {
                this.bookables = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    }
</script>
