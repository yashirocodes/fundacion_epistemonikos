<template>
  <div>
    <main class="container mt-5">
      <section class="row">
        <article
          class="col-12 col-lg-4"
          v-for="(coin, i) in pageOfItems"
          :key="i"
        >
          <div class="card mb-5 m-auto">
            <h5 class="card-title m-auto py-3">{{ coin.symbol }}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Moneda : <span class="fw-bolder">{{ coin.name }}</span></li>
              <li class="list-group-item">
                <div v-if="coin.is_active === true" class="alert alert-success m-auto">
                  Activa
                </div>
                <div v-else class="alert alert-danger m-auto">Caida</div>
              </li>
              <li class="list-group-item m-auto">
                <button class="btn btn-primary" @click="showDetails(coin.id)">Mostrar Indicadores</button>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <jw-pagination
        :pageSize="itemNumber"
        :labels="customLabels"
        :items="coins"
        @changePage="onChangePage"
      ></jw-pagination>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
const customLabels = {
  first: "Primero",
  last: "Ultimo",
  previous: "Anterior",
  next: "Siguiente",
};
export default {
  data() {
    return {
      pageOfItems: [],
      customLabels,
      itemNumber: 15,
    };
  },
  computed: {
    ...mapState(["coins"]),
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    showDetails(id){
      const coinRute = `/coins/${id}`;
      this.$router.push(coinRute);
    }
  },
};
</script>

<style scoped>
.card{
  width: 18rem;
}
.alert{
  width: 5rem;
  padding: 5px;
  text-align: center;
  margin: 0;
}
</style>