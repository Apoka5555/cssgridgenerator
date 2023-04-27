import { createStore } from "vuex";

export default createStore({
  state: {
    screen: "small",
    small: {
      columns: 4,
      rows: 1,
      columngap: 0,
      rowgap: 0,
      childarea: [],
    },
    medium: {
      columns: 12,
      rows: 1,
      columngap: 0,
      rowgap: 0,
      childarea: [],
    },
    large: {
      columns: 12,
      rows: 1,
      columngap: 0,
      rowgap: 0,
      childarea: [],
    },
  },
  getters: {
    colTemplate(state) {
      return `repeat(${state[state.screen].columns}, 1fr)`;
    },
    rowTemplate(state) {
      return `repeat(${state[state.screen].rows}, 1fr)`;
    },
    divNum(state) {
      return (
        Math.max(state[state.screen].columns, 0) *
        Math.max(state[state.screen].rows, 0)
      );
    },
  },
  mutations: {
    addChildren(state, payload) {
      state[state.screen].childarea.push(payload);
    },
    removeChildren(state, payload) {
      state[state.screen].childarea.splice(payload, 1);
    },
    updateColumns(state, payload) {
      state[state.screen].columns = payload;
    },
    updateRows(state, payload) {
      state[state.screen].rows = payload;
    },
    updateColumnGap(state, payload) {
      state[state.screen].columngap = payload;
    },
    updateRowGap(state, payload) {
      state[state.screen].rowgap = payload;
    },
    resetGrid(state) {
      state[state.screen].childarea = [];
    },
    updateScreenSize(state, payload) {
      state.screen = payload;
    },
  },
});
