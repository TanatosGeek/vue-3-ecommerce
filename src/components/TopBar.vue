<script lang="ts">
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cart';
export default{
    computed : {
        itemCount(){
            const cartStore = useCartStore();
            return cartStore.cartItemCount;
        }
    }
}
</script>

<template>
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>

        <RouterLink to="/" custom v-slot="{ navigate }">
          <v-btn variant="text" @click="navigate">
            Home
          </v-btn>
        </RouterLink>

        <RouterLink to="/cart" custom v-slot="{ navigate }">
          <v-badge location="top center" :content="itemCount"
            color="orange-lighten-2"
            :model-value="itemCount > 0">
            <v-btn variant="text" @click="navigate">
            Cart
          </v-btn>

          </v-badge>
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{ navigate }">
          <v-btn variant="text" @click="navigate">
            About
          </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field density="compact" label="Search" rounded="lg" variant="solo-filled" flat hide-details
            single-line></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>