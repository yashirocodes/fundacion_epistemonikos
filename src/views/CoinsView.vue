<template>
  <div>
    
    <CardCoins :coins="coins"/>
    
  </div>
</template>

<script>
import CardCoins from "@/components/CardCoins.vue";
export default {
    components: {
        CardCoins,
    },
    props: {
    coins: Array,
  },
   
};
</script>

<style>
</style>