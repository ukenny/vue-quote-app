<template>
  <div class="container-fluid">
    <h5>Quote Number</h5>
    <b-progress
      height="2rem"
      :value="value"
      :max="max"
      show-value
      :variant="getVariant"
      class="5mb"
    >
      <b-progress-bar :value="value">{{ value }} / {{ max }}</b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number },
    max: { type: Number }
  },
  computed: {
    getVariant() {
      if (this.value < 7) {
        return "success";
      } else if (this.value < 9) {
        return "warning";
      } else {
        return "danger";
      }
    }
  }
};
</script>

<style></style>
