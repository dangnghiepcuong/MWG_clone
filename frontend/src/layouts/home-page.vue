<template>
    <Header />
    <slot />
    <Footer />
</template>
<style></style>
<script setup lang="ts">
import Header from '~/components/_Shared/Header.vue';
import Footer from '~/components/_Shared/Footer.vue';
</script>