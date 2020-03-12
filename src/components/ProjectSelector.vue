<template>
  <div class="project-selector">
    <div v-for="project in projects" :key="project.id" class="project">
      <h5>{{project.name}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-selector",
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>

<style>
</style>