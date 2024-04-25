<script setup>
import { ref } from 'vue';
import fvCont from '../components/fvCont.vue'
import aboutCont from '../components/aboutCont.vue'
import colorPicker from '../components/colorPicker.vue'
import topNews from '../components/topNews.vue'
import taskCont from '../components/taskCont.vue'

// 色の配列を定義
const selectedColor = ref([
    '#29323c',
    '#485563',
    '#FF6B6B',
    '#556270',
    '#556270',
    '#7ea0c4',
    '#f0ab51',
    '#eceba3'
]);

const handleColorUpdate = (color, index) => {
    selectedColor.value[index] = color;
};

</script>

<template>
    <div>
        <colorPicker v-model="selectedColor" :selectedColor="selectedColor" @update:selectedColor="handleColorUpdate" />
        <fvCont :selectedColor="selectedColor" />
        <aboutCont />
        <topNews />
        <topTabs />
        <taskCont />
    </div>

</template>

<style scoped></style>
