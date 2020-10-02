<template>
  <div class="localization">
    <form class="form" @submit="checkForm">
      <input
        type="string"
        placeholder="Enter locale entry key here"
        v-model="searchLocaleEntryKey"
      />
      <select v-model="selectedLocaleKey">
        <option v-for="locale in locales" :key="locale">{{ locale }}</option>
      </select>
      <button type="submit">GO</button>
    </form>
    <div class="result-container">
      <span v-if="error">{{ error }}</span>
      <span v-if="result">{{ result }}</span>
      <span v-if="!result && !error"
        >There is no result for the given key!</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as en from "@/locales/en.json";
import * as hr from "@/locales/hr.json";

@Component
export default class Localization extends Vue {
  private locales: string[] = ["EN", "HR"];
  private searchLocaleEntryKey = "";
  private selectedLocaleKey = "EN";
  private error = "";
  private result = "";

  checkForm(e: Event) {
    if (this.searchLocaleEntryKey && this.selectedLocaleKey) {
      this.error = "";

      let result: string;

      if (this.selectedLocaleKey === "EN") {
        result = en.default[this.searchLocaleEntryKey];
      }

      if (this.selectedLocaleKey === "HR") {
        result = hr.default[this.searchLocaleEntryKey];
      }

      this.result = result;

      return true;
    }

    if (this.searchLocaleEntryKey === "") {
      this.error = "Search key needs to be provided!";
    }

    e.preventDefault();
  }
}
</script>

<style scoped>
.form {
  display: flex;
  height: 30px;
  margin-bottom: 50px;
}

.form input {
  height: "100%";
  flex-grow: 4;
  margin-left: 5px;
}

.form select {
  height: "100%";
  flex-grow: 1;
  margin-left: 5px;
}

.form button {
  height: "100%";
  flex-grow: 1;
  margin-left: 5px;
}
</style>
