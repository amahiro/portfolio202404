export const IntersectionObserverMixin = {
    data() {
        return {
        isVisible: false
        };
    },
    mounted() {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            this.isVisible = true;
            observer.unobserve(entry.target); // 一度要素が表示されたら監視を停止する
            }
        });
        }, {
        rootMargin: '-50px 0px 0px 0px' // 上端から50pxの位置を監視する
        });

        observer.observe(this.$el);
    }
};