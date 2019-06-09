<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      v-on:contextmenu.native.prevent="deleteQuote(index, $event)"
      v-bind:key="index"
      class="avoid-clicks extra-padding"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    "app-quote": Quote
  },
  methods: {
    deleteQuote(index, event) {
      var info = { index, event };
      this.$emit("quoteDeleted", info);
    },
    doNothing() {}
  }
};
</script>

<style scoped>
.avoid-clicks {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}
.extra-padding {
  margin: 10px;
}
</style>
