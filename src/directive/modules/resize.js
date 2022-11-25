// import Vue from 'vue'
// Vue.directive('resize', {
//     bind(el,binding) {
//         let width = '', height = '';
//         function isResize() {
//             const style = document.defaultView.getComputedStyle(el);
//             if (width !== style.width || height !== style.height) {
//                 binding.value();
//             }
//             width = style.width;
//             height = style.height;
//         }
//         el._vueSetInterval_ = setInterval(isResize,100);
//     },
//     unbind(el) {
//         clearInterval(el._vueSetInterval_);
//     }
// })

export default {
    bind(el,binding) {
        let width = '', height = '';
        function isResize() {
            const style = document.defaultView.getComputedStyle(el);
            if (width !== style.width || height !== style.height) {
                binding.value();
            }
            width = style.width;
            height = style.height;
        }
        el._vueSetInterval_ = setInterval(isResize,100);
    },
    unbind(el) {
        clearInterval(el._vueSetInterval_);
    }
}