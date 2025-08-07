<script lang="ts">
import {useCartStore} from '../stores/cart.ts'

export default{
    methods: {
        decrementQuantity(productId : number){
            this.cartStore.decrement(productId);
        },
        incrementQuantity(productId : number){
            this.cartStore.increment(productId);
        },
        deleteProduct(productId : number){
            this.cartStore.deleteProduct(productId)
        },
    },
    computed: {
        cartStore(){
            return useCartStore();
        },
        details(){
            return useCartStore().details;
        }
    }
}

</script>

<template>
    <v-card class="mt-4">
        <v-card-title>
                Productos agregados al carrito:
        </v-card-title>

        <v-card-text>
            <v-list v-if="details.length > 0">
                <v-list-item v-for="detail in details"
                :key="detail.productId"
                :value="detail.productId">
                    <v-list-item-title>
                        Producto {{ detail.productId }} 
                        <v-btn 
                            class="ml-2"
                            icon="mdi-minus" 
                            size="x-small" 
                            @click="decrementQuantity(detail.productId)">
                        </v-btn>
                        Cantidad: {{ detail.quantity }}
                        <v-btn 
                            icon="mdi-plus" 
                            size="x-small" 
                            @click="incrementQuantity(detail.productId)">
                        </v-btn>
                        <v-btn 
                            class="ml-2"
                            prepend-icon="mdi-delete"
                            size="small"
                            @click="deleteProduct(detail.productId)">
                            Eliminar 
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <p v-else>
                Aún no has agregado items a tu carrito de compas.
                Haz <RouterLink to="/">click aquí</RouterLink> para ve los productos
                disponibles.
            </p>
        </v-card-text>
    </v-card>
</template>