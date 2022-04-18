import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
//Luxon date time library
import { DateTime } from "luxon"

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
    SET_INDICATORS(state, coinAndIndicators) {
      state.inditators = coinAndIndicators;
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
    async get_indicators({commit, state} , id) {
      const copiaCoin = state.coins.filter(coin => coin.id === id);
      //DATE TIME SETTINGS
      const date = DateTime.local();
      const fechaActual = date.toFormat("yyyy-MM-dd");
      const fechaAnterior = date.minus({ days: 6 }).toFormat("yyyy-MM-dd");
      //
      const urlIndicators = `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/historical?start=${fechaAnterior}&end=${fechaActual}&interval=1d`;
      const response = await axios.get(urlIndicators);
      const  { data: indicator }  = response;
      const coinAndIndicators = {
        coin: copiaCoin[0],
        indicators: indicator
      }
      commit("SET_INDICATORS", coinAndIndicators);
    }
  },
  getters: {
    getIndicators(state) {
      return state.inditators;
    }

  },
});

store.dispatch("get_coins");

export default store;
