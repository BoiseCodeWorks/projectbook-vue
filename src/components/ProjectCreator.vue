<template>
  <form @submit.prevent="createProject">
    <div class="form-group">
      <label for="name">Project Name:</label>
      <input type="text" v-model="project.name" required />
    </div>
    <div class="btn-group">
      <button class="btn btn-danger" type="reset">Clear</button>
      <button class="btn btn-info" type="submit">Create</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "project-creator",
  data() {
    return {
      project: {}
    };
  },
  methods: {
    createProject() {
      this.$store.dispatch("createProject", this.project);
      this.project = {};
    }
  }
};
</script>

<style scoped>
input {
  background: black;
  color: white;
}
</style>