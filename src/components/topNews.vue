<script setup>
</script>

<template>
    <div class="p-top-news">
        <div class="l-inner800">
            <h2 class="c-head">
                <span class="c-head--sm">NEWS</span>
                <span class="c-head--bg">お知らせ</span>
            </h2>
            <ul class="p-top-news__list">
                <li>
                    <a href="" class="hover">
                        <div class="p-top-news__tag">お知らせ</div>
                        <div class="p-top-news__date">2024/04/22</div>
                        <p class="p-top-news__ttl">
                            初めての投稿です。
                        </p>
                        <div class="p-top-news__more">詳しく見る</div>
                    </a>
                </li>
            </ul>
            <div class="c-btn">
                <RouterLink to="/news" :class="'hover'">一覧を見る</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.p-top-news {
    padding: 100px 15px 0;
}
.p-top-news__list {
    margin-bottom: clamp(30px,4vw,40px);
}
.p-top-news__list > li > a {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #D4D6D5;
}
.p-top-news__tag {
    padding: 5px 10px;
    background: #000;
    color: #FFF;
    font-size: 14px;
    line-height: 1;
    font-weight: 600;
    margin-right: 15px;
}
.p-top-news__date {
    font-size: 14px;
    font-weight: 300;
    margin-right: 20px;
    color: #000;
}
.p-top-news__ttl {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    margin-right: auto;
}
.p-top-news__more {
    font-size: 14px;
    color: #000;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: clamp(10px,2vw,20px);
}
.p-top-news__more::after {
    content: '';
    font-size: 13px;
    color: #000;
    width: 6px;
    height: 6px;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    transform: rotate(45deg);
}
@media screen and (max-width: 768px) {
    .p-top-news__more {
        display: none;
    }
}
</style>
