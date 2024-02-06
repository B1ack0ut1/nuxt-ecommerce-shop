<template>
  <div v-for="product in products">
    <div>{{ product.title }}</div>
  </div>
</template>

<script setup>
const { products } = await useProducts();

console.log(products);
</script>
