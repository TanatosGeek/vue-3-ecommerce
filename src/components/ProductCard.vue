<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types.ts';

export default{
    props:{
        product:{
            type: Object as PropType<Product>,
            required: true
        }
    },
    emits:['addProduct'],
    methods:{
        onAddBunttonClick(){
            //console.log("Agregado al carrito " + this.product.id)
            this.$emit('addProduct')
        }
    }
}
</script>

<template>
    <v-card>
        <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover>
        </v-img>
        <v-card-title>
            {{ product.name }}
        </v-card-title>
        <v-card-text>
            <p class="mb-4">
                Esta es una descripción de ejemplo
            </p>
            <v-chip>
                $ {{ product.price }} MX
            </v-chip>
        </v-card-text>
        
        <v-card-actions>
            <v-btn color="orange-lighten-2"
            @click="onAddBunttonClick">
                Agregar al carrito
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
