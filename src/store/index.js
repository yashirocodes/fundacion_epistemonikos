import axios from "axios";
import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    coins: [],
    inditators: [],
  },
  mutations: {
    SET_COINS(state, moneda) {
      state.coins = moneda;
    },
    SET_INDICATORS(state, indicador) {
      state.inditators = indicador;
    }
  },
  actions: {
    //Consulta la API de CoinPaprika para obtener la lista de monedas
    async get_coins({ commit }) {
      const urlCoins = "https://api.coinpaprika.com/v1/coins/";
      const response = await axios.get(urlCoins);
      const { data } = response;
      const moneda = [];
      data.forEach(element => {
        moneda.push({
          id: element.id,
          name: element.name,
          symbol: element.symbol,
          is_active: element.is_active,
        })
      });
      commit("SET_COINS", moneda);
    },
    //Consulta la API de CoinPaprika para obtener los indicadores de una moneda
    async get_indicators({commit}){
      const urlIndicators = `https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/historical?start=2022-04-07&end=2022-04-13`
      const response = await axios.get(urlIndicators);
      const  { data: indicator }  = response;
      console.log(indicator)
      commit("SET_INDICATORS", indicator);
    }
  },
  getters: {
  },
});

store.dispatch("get_coins");
store.dispatch("get_indicators");

export default store;
