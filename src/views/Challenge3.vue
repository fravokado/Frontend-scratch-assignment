<template>
  <div class="challenge-3">
    <h1>Localization</h1>
    <Localization />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Localization from "@/components/Localization.vue"; // @ is an alias to /src

@Component({
  components: {
    Localization
  }
})
export default class Challenge3 extends Vue {}
</script>
