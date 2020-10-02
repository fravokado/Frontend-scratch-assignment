<template>
  <div class="box-row">
    <Box
      class="box"
      v-for="(boxIndex, rowIndex) in boxCounter"
      :key="boxIndex"
      :boxIndex="boxIndex"
      :rowIndex="rowIndex"
    >
      {{ boxIndex }}
    </Box>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Box from "@/components/Box.vue";

@Component({
  components: {
    Box
  }
})
export default class BoxRow extends Vue {
  @Prop() private boxCounter!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-row {
  height: 100px;
  display: flex;
}
</style>
