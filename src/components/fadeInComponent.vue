<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    }
  }
}
</script>

<template>
  <div :class="{ fadeIn: visible, fade: true }">
    <slot></slot>
  </div>
</template>

<style>
.fade {
  opacity: 0;
  transform: translateY(50px);
  transition: all .6s ease;
}

.fade.fadeIn {
  opacity: 1;
  transform: translateY(0px);
}
</style>