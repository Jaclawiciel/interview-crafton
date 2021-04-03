import debounce from "lodash/debounce";

export const handleScrollMixin = {
    mounted () {
        this.handleDebouncedScroll = debounce(this.handleScroll, 25);
        window.addEventListener('scroll', this.handleDebouncedScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.isOnTop = window.scrollY === 0;
        }
    }
};
