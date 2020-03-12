<template>
  <div class="home">
    <div>
      <div>
        <button
          @click="showCreateForm = !showCreateForm"
        >{{ showCreateForm ? "Cancel" : "Create Project"}}</button>
      </div>
      <project-creator v-if="showCreateForm" />
    </div>
    <project-selector />
  </div>
</template>

<script>
import projectCreator from "../components/ProjectCreator";
import projectSelector from "../components/ProjectSelector";
export default {
  name: "Home",
  data() {
    return {
      showCreateForm: false
    };
  },
  components: {
    projectCreator,
    projectSelector
  }
};
</script>
