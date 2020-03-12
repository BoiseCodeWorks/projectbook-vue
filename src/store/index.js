import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeProject: {},
    projects: [{ id: "1834fdla", name: "Big Tank" }, { id: "18312a", name: "CodeWorks" }]
  },
  mutations: {
    addProject(state, project) {
      state.projects.push(project)
    },
    setActiveProject(state, project){
      state.activeProject = project
    }
  },
  actions: {
    createProject({ commit, dispatch }, project) {
      // TODO take data from controller 
      // Send data to API
      // On API response 
      // CALL MUTATION
      console.log("IN THE STORE ACTION", project)
      setTimeout(() => {
        //FAKE ME
        project.id = Math.floor(Math.random() * 99999999) + "_abcd"
        commit("addProject", project)
      }, 1000)

    }
  },
  modules: {
  }
})
