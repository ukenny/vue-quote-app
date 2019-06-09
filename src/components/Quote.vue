<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    consoleLog(event) {
      console.log(event);
    }
  }
};
</script>

<style>
.panel-body {
  font-family: "Arizonia", cursive;
  font: large;
  color: grey;
  size: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: black !important;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>
