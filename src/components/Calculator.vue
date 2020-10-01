<template>
  <div class="Calculator">
    <div class="row">
      <label>Value 1:</label>
      <input v-model="value1" placeholder="0.00000000" />
    </div>
    <div class="row">
      <label>Value 2:</label>
      <input v-model="value2" placeholder="0.00000000" />
    </div>
    <div class="row">
      <button @click="add">
        Add
      </button>
      <label>Accumulated result: {{ result }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Calculator extends Vue {
  private value1: string | number = "";
  private value2: string | number = "";
  private result = 0;

  add() {
    let value1: number, value2: number;

    if (this.value1 !== "") {
      if (typeof this.value1 === "string") {
        value1 = parseFloat(this.value1);
      } else {
        value1 = this.value1;
      }
    }

    if (this.value2 !== "") {
      if (typeof this.value2 === "string") {
        value2 = parseFloat(this.value2);
      } else {
        value2 = this.value2;
      }
    }

    const valid = !isNaN(value1) && value1 > 0 && !isNaN(value2) && value2 > 0;

    if (valid) {
      const previousResult = this.result;
      this.result = value1 + value2 + previousResult;
      this.value1 = "";
      this.value2 = "";
    } else {
      window.alert("Both values need to be defined and positive numbers!");
    }
  }
}
</script>

<style scoped>
.row {
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.row button {
  width: 80px;
  height: 30px;
}
</style>
