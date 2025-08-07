<script lang="ts">
import type { Product } from '../model/types.ts';
import ProductCard from '../components/ProductCard.vue'

export default{
  components:{
    ProductCard
  },
  props: ['details'],
  data() {
    return{
      products: <Array<Product>> [
        {id:1, name: 'Silla', price: 56},
        {id:2, name: 'Monitor', price: 450},
        {id:3, name: 'Micrófono',price:20},
        {id:1, name: 'Silla', price: 56},
        {id:2, name: 'Monitor', price: 450},
        {id:3, name: 'Micrófono',price:20}
      ]
    }
  }
}
</script>


<template>
  <v-row>
    <v-col v-for="p in products" :key="p.id" cols="4">
      <ProductCard 
        :product="p"
        />
    </v-col>
  </v-row>
</template>