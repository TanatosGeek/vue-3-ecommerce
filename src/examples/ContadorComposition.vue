<script setup>
    import { onMounted, ref } from 'vue'

    const count = ref(0);

    function aumentar() {
        count.value++;
    }
    onMounted(() => {
        count.value = 20;
        console.log('El valor inicial del contador es ' + count.value);
    });

</script>

<template>
    <p>Hola soy la version con Composicion API</p>
    <h1>Contador: {{count}} </h1> 
    <button @click="aumentar">
        Incrementar contador
    </button>
</template>