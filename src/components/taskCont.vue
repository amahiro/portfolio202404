<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';

const tasks = ref([
    {
        ttl: '出来るもの',
        cat: 'task01',
        task: [
            { name: 'HTML' },
            { name: 'CSS (SCSS)' },
            { name: 'JavaScript (jQuery)' },
            { name: 'PHP (WordPress)' },
        ]
    },
    {
        ttl: '勉強中・実務未経験',
        cat: 'task02',
        task: [
            { name: 'Vue.js' },
            { name: 'Nuxt.js' },
            { name: 'PHP' },
        ]
    },
    {
        ttl: 'これから勉強する',
        cat: 'task03',
        task: [
            { name: 'PHP Framework' },
            { name: 'React.js' },
            { name: 'Next.js' },
        ]
    }
]);

function doDelete(task, index) {
    task.task.splice(index, 1);
}

const sortableOptions = {
    animation: 300,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)', 
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag', 
};

function addNewList(name) {
    if(typeof name !== "undefined") {
        const newTask = {
            name: name
        };
        tasks.value[2].task.push(newTask);
    }
}

</script>
<template>
    <div class="p-skill">
        <h2 class="c-head">
            <span class="c-head--sm">skill</span>
            <span class="c-head--bg">スキル</span>
        </h2>
        <p class="p-skill__txt">
            ドラッグ＆ドロップで動かします。<br>
            全て出来るものに動かします。
        </p>
        <div class="l-inner p-skill__box">

            <div class="p-skill__new">
                <div class="p-skill__new-input">
                    <input type="text" v-model="newSkill" placeholder="スキルを追加する">
                </div>
                <button @click="addNewList(newSkill)">追加</button>
            </div>
            <ul class="p-skill__list">
                <li v-for="(task, task_index) in tasks" :key="task" class="p-skill__item">
                    <p class="p-skill__ttl">{{ tasks[task_index].ttl }}</p>
                    <draggable v-model="tasks[task_index].task" item-key="name" group="TASKS" :options="sortableOptions">
                        <template #item="{ element, index }">
                            <li class="c-task p-skill__tasks-item">
                                <div class="c-task__handle" :options="sortableHandle"><span></span></div>
                                {{ element.name }}
                                <span class="c-task__del" @click="doDelete(tasks[task_index], index)">[削除]</span>
                            </li>
                        </template>
                    </draggable>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.p-skill {
    padding: 100px 15px clamp(80px,12vw,120px);
}

.p-skill__txt {
    font-size: clamp(12px, 1.4vw, 14px);
    letter-spacing: 0.1em;
    line-height: 2;
    margin: 0 auto 30px;
    text-align: center;
    font-weight: 600;
}

.p-skill__box {
    background-color: #FFFFFF;
    box-shadow: 0 0 20px rgba(0, 0, 0, .16);
    padding: 40px;
    border-radius: 20px;
}

.p-skill__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.p-skill__item {
    width: calc((100% - 20px * 2) / 3);
}

.p-skill__ttl {
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
}

.p-skill__tasks-item {
    border: 1px solid #D4D6D5;
    padding: 15px;
}

.p-skill__tasks-item+.p-skill__tasks-item {
    margin-top: 2px;
}

.p-skill__new {
    display: flex;
    justify-content: center;
    gap: 2px;
    margin-bottom: 30px;
}

.p-skill__new-input input {
    border: 1px solid #D4D6D5;
    padding-inline: 4px;
    height: 100%;
}

.p-skill__new button {
    background-color: #0b9904;
    color: #FFFFFF;
    padding-inline: 8px;
    border-radius: 2px;
    font-weight: 600;
}

.p-skill__new button:hover {
    opacity: .6;
}

.sortable-ghost {
    opacity: 0.6;
    transition: opacity 0.3s;
}

.sortable-chosen {
    border: 2px solid #000000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.sortable-drag {
    background-color: #f0f0f0;
}

.c-task {
    position: relative;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    cursor: grab;
    transition: all .3s ease;
}

.c-task__del {
    font-size: 13px;
    position: absolute;
    top: 2px;
    right: 2px;
    color: red;
    cursor: pointer;
    z-index: 2;
}

.c-task__handle {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: 1px solid #D4D6D5;
}
.c-task__handle::before,
.c-task__handle::after {
    content: '';
    position: absolute;
    left: 50%;
    width: 15px;
    height: 2px;
    background: #D4D6D5;
}
.c-task__handle::before {
    top: calc(50% - 7px);
    transform: translateX(-50%);
}
.c-task__handle::after {
    top: calc(50% + 5px);
    transform: translateX(-50%);
}
.c-task__handle span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 15px;
    height: 2px;
    background: #D4D6D5;
}
@media screen and (max-width: 768px) {
    
    .p-skill__list {
        gap: 40px;
    }

    .p-skill__item {
        width: 100%;
    }

}
</style>
