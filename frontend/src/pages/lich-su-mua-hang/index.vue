<template>
    Lich su mua hang
    <div>{{ authStore.authToken }}</div>
</template>
<script setup>
definePageMeta({
    middleware: [
        // 'setup',
        'auth',
    ]
})

import { useAuthStore } from '~/stores/auth.ts';

const authStore = useAuthStore()
</script>
