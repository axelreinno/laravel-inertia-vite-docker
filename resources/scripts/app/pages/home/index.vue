<template>
    <div :class="darkMode ? 'bg-gray-700' : 'bg-indigo-700'">
        <div class="h-[100vh] flex items-center justify-center">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                    <span class="block">HOME PAGE.</span>
                </h2>

                <Link class="text-white" href="/about">ABOUT</Link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/inertia-vue3';
interface Props {
    darkMode: boolean;
}

defineProps<Props>();
</script>
