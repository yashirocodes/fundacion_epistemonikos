<template>
  <div>
    <main class="container mt-5">
      <section class="row">
        <article
          class="col-12 col-md-6 col-lg-4"
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
      <div class="container d-flex justify-content-center my-5">
        <jw-pagination
        :pageSize="itemNumber"
        :labels="customLabels"
        :items="coins"
        :maxPages="maxPages"
        @changePage="onChangePage"
        
      ></jw-pagination>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const customLabels = {
  first: "Primero",
  last: "Ultimo",
  previous: "<",
  next: ">",
};
export default {
  data() {
    return {
      pageOfItems: [],
      customLabels,
      itemNumber: 15,
      maxPages: 3,
    };
  },
  computed: {
    ...mapState(["coins","indicators"]),
  },
  methods: {
    ...mapActions(["get_indicators"]),
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    async showDetails(id){
      await this.get_indicators(id);
      const coinRute = `/coins/${id}`;
      this.$router.push(coinRute);
    }
  },
};
</script>

<style scoped>
.card{
  width: 20rem;
}
.alert{
  width: 5rem;
  padding: 5px;
  text-align: center;
  margin: 0;
}
</style>