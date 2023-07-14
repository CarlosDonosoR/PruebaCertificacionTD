<template>
    <v-container>
    <v-row>
      <carousel-c></carousel-c>
    </v-row>
    <h1 class="text-center pa-5">Nuestros Productos</h1>
        <cardhome-c></cardhome-c>
  </v-container>
</template>

<script>
import Carousel from "@/components/Carousel.vue"
import Cardhome from "@/components/Cardhome.vue"
import { mapActions } from 'vuex'
export default {
    name: 'Home-c',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['fetchInfo'])
    },
    // watch: {},
    components: {
        "carousel-c": Carousel,
        "cardhome-c": Cardhome
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>