<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto">
          <div class="card my-4">
            <div class="card-header">
              <h5 class="card-title text-center">
                Indicadores de {{ getIndicators.coin.name }}
              </h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-center"><strong>{{getIndicators.coin.symbol}}</strong></li>
              </ul>
              <div v-if="getIndicators.coin.is_active === true" class="alert alert-success m-auto">
                    Activa
                  </div>
                  <div v-else class="alert alert-danger m-auto">Caida</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="table-responsive">
      <table class="table">
        <thead class="bg-dark text-light text-center">
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Apertura</th>
            <th scope="col">Cierre</th>
            <th scope="col">Precio mas alto</th>
            <th scope="col">Precio mas bajo</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(item, i) in getIndicators.indicators" :key="i">
            <td>{{ formatDateString(item.time_open) }}</td>
            <td>$ {{ formatCoin(item.open) }}</td>
            <td>$ {{ formatCoin(item.close) }}</td>
            <td>$ {{ formatCoin(item.high) }}</td>
            <td>$ {{ formatCoin(item.low) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DateTime } from "luxon";
export default {
  name: "CardCoinIndicator",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["getIndicators"]),
  },
  methods: {
    formatCoin(coin) {
      return coin.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
    formatDateString(date) {
     const dt = DateTime
     return dt.fromISO(date).toFormat('yyyy LL dd')
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
}
.alert {
  width: 8rem;
  text-align: center;
}
</style>