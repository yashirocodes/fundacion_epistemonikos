<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            Indicadores de {{ getIndicators.coin.name }}
          </h5>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Open</th>
            <th scope="col">CLose</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(item, i) in getIndicators.indicators" :key="i">
            <td>$ {{formatCoin(item.open)}}</td>
            <td>$ {{formatCoin(item.close)}}</td>
            <td>$ {{formatCoin(item.high)}}</td>
            <td>$ {{formatCoin(item.low)}}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardCoinIndicator",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getIndicators"]),
  },
  methods: {
    formatCoin(coin){
      return coin.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }
  },
};
</script>

<style>
</style>