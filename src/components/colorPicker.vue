<script setup>
// import { ref } from 'vue';

const props = defineProps({
    selectedColor: Array,
});
const emit = defineEmits(['update:selectedColor']);
const handleChange = (event, index) => {
    const color = event.target.value;
    emit('update:selectedColor', color, index); // インデックスを一緒に渡す
};
</script>

<template>
    <div class="p-color-picker">
        <p>色を選択してください</p>
        <ul>
            <li v-for="(color, index) in props.selectedColor" :key="color">

                <div class="p-color-picker__input">
                    <input type="color" v-modal="color" :value="color" @change="handleChange($event, index)" />
                </div>
                <p>{{ color }}</p>
            </li>
        </ul>
    </div>
</template>


<style>
.p-color-picker {
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 30px 20px;
    border: 1px solid #D4D6D5;
    border-radius: 10px;
    width: 200px;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .16);
}

.p-color-picker>p {
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 10px;
}

.p-color-picker ul {
    list-style: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.p-color-picker ul li {
    width: calc((100% - 10px) / 2);
}

.p-color-picker__input {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 16px;
    overflow: hidden;
}

.p-color-picker__input input {
    width: 100%;
    height: 100%;
    outline: 0;
    border: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, .16);
}

.p-color-picker ul li p {
    margin-top: 2px;
    font-size: 12px;
    text-align: center;

}

.colorpick-eyedropper-input-trigger {
    display: none;
}

@media screen and (max-width: 768px) {
    .p-color-picker {
        width: 100px;
        padding: 10px;
    }
    .p-color-picker ul {
        gap: 5px;
    }
    .p-color-picker ul li {
    width: calc((100% - 5px) / 2);
}
.p-color-picker ul li p {
    margin-top: -5px;
    font-size: 10px;
}

}
</style>