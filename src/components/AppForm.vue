<template>
  <aside>
    <fieldset>
      <label>Screen Size</label>
      <div>
        <label>
          <input
            type="radio"
            name="size"
            value="small"
            v-bind:checked="screen === 'small'"
            @change="$store.commit(`updateScreenSize`, $event.target.value)"
          />
          <span v-text="'Small (&lt; 768px)'"></span>
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="medium"
            v-bind:checked="screen === 'medium'"
            @change="$store.commit(`updateScreenSize`, $event.target.value)"
          />
          <span v-text="'Medium (&lt; 1024px)'"></span>
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="large"
            v-bind:checked="screen === 'large'"
            @change="$store.commit(`updateScreenSize`, $event.target.value)"
          />
          <span v-text="'Large (>= 1024px)'"></span>
        </label>
      </div>
    </fieldset>

    <fieldset>
      <label for="columns">{{ $t("form.columns") }}</label>
      <span>{{ columns }}</span>
    </fieldset>

    <fieldset>
      <label for="rows">{{ $t("form.rows") }}</label>
      <input
        id="rows"
        type="number"
        min="0"
        max="12"
        @input="$store.commit(`updateRows`, $event.target.value)"
        :value="rows"
      />
    </fieldset>

    <fieldset>
      <label for="columngap"
        >{{ $t("form.columngap") }}
        <span class="label-extra-info">{{ $t("form.units") }}</span></label
      >
      <input
        id="columngap"
        type="number"
        min="0"
        max="50"
        @input="$store.commit(`updateColumnGap`, $event.target.value)"
        :value="columngap"
      />
    </fieldset>

    <fieldset>
      <label for="rowgap"
        >{{ $t("form.rowgap") }}
        <span class="label-extra-info">{{ $t("form.units") }}</span></label
      >
      <input
        id="rowgap"
        type="number"
        min="0"
        max="50"
        @input="$store.commit(`updateRowGap`, $event.target.value)"
        :value="rowgap"
      />
    </fieldset>

    <button @click="showCodeModal = true">{{ $t("form.codebutton") }}</button>
    <button type="reset" @click="$store.commit(`resetGrid`)">
      {{ $t("form.reset") }}
    </button>
    <AppModal v-if="showCodeModal" @close="showCodeModal = false">
      <template v-slot:header>
        <h3>{{ $t("modal.header.yourcode") }}</h3>
      </template>
      <template v-slot:body>
        <div>
          <AppCode />
        </div>
      </template>
    </AppModal>

    <p class="wat" @click="showExplainModal = true">{{ $t("form.project") }}</p>
    <AppModal v-if="showExplainModal" @close="showExplainModal = false">
      <template v-slot:header>
        <h3>{{ $t("modal.header.what") }}</h3>
      </template>
      <template v-slot:body>
        <div>
          <AppExplain />
        </div>
      </template>
    </AppModal>
  </aside>
</template>
<script>
import AppExplain from "./AppExplain.vue";
import AppModal from "./AppModal.vue";
import AppCode from "./AppCode.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppExplain,
    AppModal,
    AppCode,
  },
  data() {
    return {
      showCodeModal: false,
      showExplainModal: false,
    };
  },
  computed: {
    ...mapState({
      screen: (state) => state.screen,
      columns: (state) => state[state.screen].columns,
      rows: (state) => state[state.screen].rows,
      columngap: (state) => state[state.screen].columngap,
      rowgap: (state) => state[state.screen].rowgap,
    }),
  },
};
</script>

<style lang="scss" scoped>
aside {
  margin: 0 60px 60px 60px;
  font-size: 17px;
  width: 300px;
}

.wat {
  font-family: "Caveat", cursive;
  font-size: 22px;
  margin-top: 18px;
  color: #a8c9cc;
  opacity: 0.9;
  font-weight: normal;
  cursor: pointer;
}

button {
  display: block;
}

@media screen and (max-width: 767px) {
  aside {
    width: 80vw;
    margin: 100px 0;
  }
  button[type="reset"] {
    margin-left: 20px;
  }
}
</style>
