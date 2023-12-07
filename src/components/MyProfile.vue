<template>
    <h1>My Profile</h1>
    <h2>My profile views {{ $store.getters['test/views'] }} </h2>
    <button @click="AddViews">add</button>
</template>


<script>
export default { 
    methods : {
        AddViews: function () { 
            this.$store.dispatch('test/incrementViews'); 
        }
    }
}
</script>


