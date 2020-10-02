<template>
  <div :key="key" class="box" :style="flexGrow">
    {{ boxIndex }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface FlexGrowComputed {
  [key: string]: number;
}

@Component
export default class Box extends Vue {
  @Prop() private boxIndex!: number;
  @Prop() private rowIndex!: number;

  get key(): string {
    return `${this.rowIndex}-${this.boxIndex}`;
  }

  get flexGrow(): FlexGrowComputed {
    let value: number;
    if (this.boxIndex < 2) {
      value = this.boxIndex;
    } else {
      value = this.boxIndex - 1;
    }
    return {
      "--flex-grow": value
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  border: 1px solid;
  flex-grow: var(--flex-grow);
}
</style>
