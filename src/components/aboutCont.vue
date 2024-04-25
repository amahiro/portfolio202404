<script setup>
import aboutImg from "@/assets/images/about.png";
import fadeInComponent from "./fadeInComponent.vue";
</script>

<template>
    <div class="p-about">
            <div class="l-inner800 js-scroll">
                <div class="p-about__img">
                    <img :src="aboutImg" loading="lazy" width="160" height="160">
                </div>
                <fadeInComponent>
                    <p class="p-about__text">
                        初めまして、天野広揮です。<br>
                        都内でWebサイト制作をしています。<br>
                        現在Vueの学習をしております。<br>
                        このサイトは少しでもVue.jsに慣れるために作成しました。<br>
                        シンプルで無駄のないサイト制作が得意です。<br>
                        もっとこうしてほしい...これ追加してほしいなど<br>
                        ウェブサイトに関することはお気軽にご相談ください。
                    </p>
                    <ul class="p-about__info">
                        <li>
                            <h3 class="p-about__info-ttl">保有資格・免許</h3>
                            <ul class="p-about__info-cont">
                                <li>日商簿記検定２級</li>
                                <li>電卓検定２級</li>
                                <li>普通免許第一種免許(AT限定)</li>
                                <li>Excel検定２級</li>
                                <li>Access検定３級</li>
                                <li>ファイナンシャルプランニング技能士３級</li>
                            </ul>
                        </li>
                        <li>
                            <h3 class="p-about__info-ttl">使用可能ツール・言語</h3>
                            <ul class="p-about__info-cont">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>WordPress</li>
                                <li>Scss（glup）</li>
                                <li>Vue.js</li>
                                <li>Photoshop（コーディング出来る程度）</li>
                                <li>Xd</li>
                            </ul>
                        </li>
                    </ul>
                </fadeInComponent>
            </div>
    </div>
</template>

<style scoped>
.p-about {
    padding: 100px 15px 0;
}

.p-about * {
    font-weight: 600;
    font-family: 游ゴシック medium, yu gothic medium, 游ゴシック, yu gothic, メイリオ, meiryo, ヒラギノ角ゴ pro, hiragino kaku gothic pro, sans-serif;
}

.p-about__inner {
    -webkit-transform: translateY(50px);
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.3s ease;
}

.p-about__img {
    margin: 0 auto 30px;
    width: 160px;
}

.p-about__text {
    font-size: clamp(12px, 1.4vw, 14px);
    letter-spacing: 0.1em;
    line-height: 2;
    margin: 0 auto 30px;
    text-align: center;
}

.p-about__info {
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    gap: clamp(10px, 4vw, 40px);
    list-style: none;
}

.p-about__info>li {
    border: 1px solid #D4D6D5;
    padding: 10px 20px 20px;
    width: calc((100% - clamp(10px, 4vw, 40px)) / 2);
}

.p-about__info-ttl {
    border-bottom: 1px solid #D4D6D5;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

.p-about__info-cont {
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    gap: clamp(5px, 1vw, 10px);
    list-style: none;
}

.p-about__info-cont>li {
    background-color: #EDEDEB;
    font-size: 13px;
    letter-spacing: 0.1em;
    line-height: 1;
    padding: 5px;
}

@media screen and (max-width: 768px) {
    .p-about {
        padding: 80px 15px 0;
    }

    .p-about__info>li {
        width: 100%;
    }
}
</style>
