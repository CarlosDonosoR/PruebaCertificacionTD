<template>
  <v-app>
    <navbar-c></navbar-c>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import {mapActions} from "vuex"
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    "navbar-c":Navbar,
  },
  methods: {
    ...mapActions(["fetchInfo"])
  },
  created(){
    this.fetchInfo()
  }
};
</script>
