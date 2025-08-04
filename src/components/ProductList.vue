<script lang="ts">
import type { Product } from '../model/types.ts';
import ProductCard from '../components/ProductCard.vue'
import Cart from '../components/Cart.vue';

export default{
  components:{
    ProductCard,
    Cart
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
  },
  methods:{
    onProductAdded(productId: number){

    }
  }
}
</script>


<template>
  <v-row>
    <v-col v-for="p in products" cols="4">
      <ProductCard 
        :product="p"
        @addProduct="onProductAdded(p.id)" />
    </v-col>
  </v-row>
</template>