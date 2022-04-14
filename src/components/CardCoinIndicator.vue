<template>
  <div>
    Indicadores de
    <div class="container">
      <ul>
        <li v-for="(indicator, i) in getIndicators" :key="i">{{indicator.close}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    
    name:'CardCoinIndicator',
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters(["getIndicators"]),
    },
}
</script>

<style>

</style>