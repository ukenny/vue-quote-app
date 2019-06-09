<template>
  <div id="app" class="container">
    <b-alert
      v-on="maxQuotesReached"
      b-alert
      variant="danger"
      :show="maxQuotesReached"
    >
      Maximum number of quotes added! Please delete a quote before adding more!
    </b-alert>
    <app-header :value="quotes.length" :max="10"></app-header>
    <new-quote @quoteAdded="newQuote($event)"></new-quote>
    <quote-grid
      :quotes="quotes"
      class="extra-padding"
      @quoteDeleted="deleteQuote($event)"
    ></quote-grid>
    <div class="row extra-padding">
      <div class="col-sm-12 text-center">
        <div class="alert alert-warning">
          <h5><i>INFO:</i> To delete a quote on right click it!</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  data: function() {
    return {
      maxNumberOfQuotes: 10,
      quotes: ["Sample Quote"],
      maxQuotesReached: false
    };
  },
  components: {
    "quote-grid": QuoteGrid,
    "new-quote": NewQuote,
    "app-header": Header
  },
  methods: {
    newQuote(data) {
      if (this.quotes.length >= 10) {
        this.maxQuotesReached = true;
        return;
      }
      this.quotes.push(data);
    },
    deleteQuote(info) {
      info.event.preventDefault();
      this.quotes.splice(info.index, 1);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
i {
  color: red;
}
.extra-padding {
  padding-top: 10px;
}
</style>
