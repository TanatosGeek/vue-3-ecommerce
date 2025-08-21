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
        {id:1, name: 'Silla', price: 56, image: 'https://png.pngtree.com/png-vector/20240306/ourlarge/pngtree-chair-vector-png-image_11897179.png'},
        {id:2, name: 'Monitor', price: 450, image: 'https://th.bing.com/th/id/R.6a9013939971d06e083fd169d4afe2b8?rik=dqnUW96NUFRL%2bw&pid=ImgRaw&r=0'},
        {id:3, name: 'Micrófono',price:20, image: 'https://cdn.pixabay.com/photo/2023/03/26/21/36/microphone-7879172_960_720.png'},
        {id:4, name: 'Parlante', price: 56},
        {id:5, name: 'Audifono', price: 450},
        {id:6, name: 'Mouse Gamer',price:20}
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