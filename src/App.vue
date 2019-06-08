<template>
  <div id="app" class="container">
    <new-quote @quoteAdded="newQuote($event)"></new-quote>
    <quote-grid :quotes="quotes"></quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";

export default {
  name: "app",
  data: function() {
    return {
      maxNumberOfQuotes: 10,
      quotes: ["Sample Quote"]
    };
  },
  components: {
    "quote-grid": QuoteGrid,
    "new-quote": NewQuote
  },
  methods: {
    newQuote(data) {
      this.quotes.push(data);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
