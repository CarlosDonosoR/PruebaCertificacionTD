<template>
    <v-container>
        <v-row justify="space-around">
            <v-col cols="12" sm="6" md="3" v-for="tipo in tiposproductos"
        :key="tipo.name">
                <v-card
        class="mx-auto"
        max-width="400"
        height="700"
    >
        <v-img
        class="white--text align-end"
        height="450px"
        :src="tipo.image"
        >
        <v-card-title class="black--text">{{tipo.name}}</v-card-title>
        </v-img>
        <v-card-text class="text--primary">
        <div>{{tipo.text}}</div>
        </v-card-text>
    </v-card>
            </v-col>
            </v-row>        
    </v-container>
</template>

<script>
import {mapState} from "vuex"
export default {
    name: 'cardhome-c',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(["tiposproductos"])
    },
    methods: {
    
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>