<template>
  <div class="container">
    <div class="row">
      <form style="min-width: 100%">
        <label>Quote Application</label>
        <textarea
          placeholder="Enter your new quote here!"
          class="form-control col-xs-12"
          rows="2"
          v-model="quote"
        ></textarea>
        <b-button
          style="margin: 10px"
          variant="success"
          @click.prevent="createNewQuote()"
        >
          Add Quote
        </b-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return { quote: "" };
  },
  methods: {
    createNewQuote() {
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Proza+Libre");
textarea {
  font-family: "Proza Libre", sans-serif;
  color: black;
  font-weight: 100;
}
</style>
