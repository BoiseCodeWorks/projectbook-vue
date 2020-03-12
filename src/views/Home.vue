<template>
  <div class="home">
    <div>
      <input type="text">
      <div>
        <button
          @click="showCreateForm = !showCreateForm"
        >{{ showCreateForm ? "Cancel" : "Create Project"}}</button>
      </div>
      <project-creator v-if="showCreateForm" />
    </div>
    <project-selector />

    {{activeProject.name}}
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
  computed:{
    activeProject(){
      return this.$store.state.activeProject
    }
  },
  components: {
    projectCreator,
    projectSelector
  }
};
</script>
