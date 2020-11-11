<template>
    <div class="flex flex-wrap justify-evenly">
        <bookable-item v-for="bookable in bookables" :key="bookable.id" :bookable="bookable"></bookable-item>
    </div>
</template>
<script>
    export default {
        props: ['bookables'],
        mounted() {
            console.log(this.bookables)
        }
    }
</script>
