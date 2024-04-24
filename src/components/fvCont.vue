<script setup>
import { ref, onMounted, watch } from 'vue';
import Granim from 'granim';

const GObj = ref(null);

// props と emit を定義
const props = defineProps({
    selectedColor: Array,
});

// colors リファレンスを定義
const colors = ref(props.selectedColor);

// gradients 配列を定義
let gradients = ref([
    [colors.value[0], colors.value[1]],
    [colors.value[2], colors.value[3]],
    [colors.value[4], colors.value[5]],
    [colors.value[6], colors.value[7]]
]);

// props.selectedColor の変更を監視し、colors を更新
const emit = defineEmits(['update:selectedColor']);
watch(props.selectedColor, (newColors) => {
    emit('update:selectedColor', newColors);
    colors.value = newColors;
    updateGradients();
});

// Granim インスタンスを作成
onMounted(() => {
    GObj.value = new Granim({
        element: '.granim-canvas',
        name: 'granim',
        opacity: [1, 1],
        states: {
            'default-state': {
                gradients: gradients.value
            }
        }
    });
});

// gradients 配列を更新する関数
function updateGradients() {
    gradients.value.splice(0, gradients.value.length); // グラデーション配列をクリア
    gradients.value.push([colors.value[0], colors.value[1]]);
    gradients.value.push([colors.value[2], colors.value[3]]);
    gradients.value.push([colors.value[4], colors.value[5]]);
    gradients.value.push([colors.value[6], colors.value[7]]);

    // statesオブジェクトを更新する
    GObj.value = new Granim({
        element: '.granim-canvas',
        name: 'granim',
        opacity: [1, 1],
        states: {
            'default-state': {
                gradients: gradients.value
            }
        }
    });
}
</script>

<template>
    <div class="p-fv">
        <div class="p-fv__txt">
            <h2>Vue.js</h2>
            <p>Vue.jsのポートフォリオです。</p>
        </div>
        <canvas class="granim-canvas"></canvas>
    </div>

</template>

<style scoped>
.p-fv {
    padding: 150px 15px 200px;
    background: #000;
    position: relative;
}

.p-fv canvas {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

.p-fv__txt {
    position: relative;
    color: #FFFFFF;
    text-align: center;
    z-index: 2;
}

.p-fv__txt h2 {
    font-size: clamp(50px,10vw,100px);
    margin-bottom: clamp(5px,2vw,20px);
    line-height: 1;
    font-weight: 600;
    font-family: 游ゴシック medium, yu gothic medium, 游ゴシック, yu gothic, メイリオ, meiryo, ヒラギノ角ゴ pro, hiragino kaku gothic pro, sans-serif;
}

.p-fv__txt p {
    font-size: clamp(20px,5vw,50px);
    font-weight: 600;
    font-family: 游ゴシック medium, yu gothic medium, 游ゴシック, yu gothic, メイリオ, meiryo, ヒラギノ角ゴ pro, hiragino kaku gothic pro, sans-serif;
}
</style>
