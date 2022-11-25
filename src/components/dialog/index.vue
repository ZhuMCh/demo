<template>
    <el-dialog :title="title" :visible.sync="drawer">
        <slot />
        <div slot="footer" class="dialog-footer">
            <el-button @click="drawer = false">取 消</el-button>
            <el-button type="primary" @click="saveData">确 定</el-button>
        </div>
    </el-dialog>
</template>
   
<script>
function generateDeferredPromise() {
    return (() => {
        let resolve;
        let reject;
        let p = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });

        return {
            promise: p,
            reject,
            resolve,
        };
    })();
}
export default {
    name: "modal",
    props: {
        title: {
            type: String,
            default: undefined,
        },
        handle: {
            type: Function,
            default: (res) => {},
        },
    },
    data() {
        return {
            drawer: false,
            promise: null,
        };
    },
    mounted() {
        if (this.handle) {
            this.handle(this);
        }
    },
    methods: {
        show() {
            this.drawer = true;
            this.promise = new generateDeferredPromise();
            return this.promise.promise;
        },
        saveData() {
            this.promise.resolve();
            this.promise.promise.then(() => {
                this.drawer = false;
            });
        },
    },
};
</script>
   
<style>

</style>