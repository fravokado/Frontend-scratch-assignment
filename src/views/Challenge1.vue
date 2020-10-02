<template>
  <div class="challenge-1">
    <h1>Calculator</h1>
    <Calculator />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calculator from "@/components/Calculator.vue"; // @ is an alias to /src

@Component({
  components: {
    Calculator
  }
})
export default class Challenge1 extends Vue {}
</script>
