<template>
  <div class="challenge-2">
    <button class="add-button" @click="addBox">Add box</button>
    <h1>My Boxing Area</h1>
    <BoxRow
      v-for="(boxIndex, rowIndex) in rows"
      :key="rowIndex"
      :boxCounter="boxIndex"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BoxRow from "@/components/BoxRow.vue";

@Component({
  components: {
    BoxRow
  }
})
export default class Challenge2 extends Vue {
  private rows: Array<number> = [];

  addBox() {
    if (this.rows.length === 0) {
      this.rows.push(1);
    } else {
      for (const rowIndex in this.rows) {
        let boxNumber = this.rows[rowIndex];
        if (boxNumber < 8) {
          boxNumber++;
          this.rows[rowIndex] = boxNumber;
          this.rows = [...this.rows];
        } else {
          const rowIndexNumber = parseInt(rowIndex, 10);
          if (rowIndexNumber === this.rows.length - 1) {
            this.rows.push(1);
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.add-button {
  width: 80px;
  height: 30px;
}
</style>
