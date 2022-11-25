<template>
    <dialog title="审批/反馈" ref="modal">
        <el-descriptions :model="audit"  class="margin-top"  :column="1"  border>
            <el-descriptions-item label="意见">
                <el-radio-group v-model="audit.state">
                    <el-radio  :label="true">通过</el-radio>
                    <el-radio  :label="false">不通过</el-radio>
                </el-radio-group>
            </el-descriptions-item>
            <el-descriptions-item label="内容">
                <el-input type="textarea" v-model="audit.comment"></el-input>
            </el-descriptions-item>
        </el-descriptions>
    </dialog>

</template>

<script>
import dialog from './index.vue'
export default {
    components: {
        dialog
    },
    data() {
        return {
            audit: {
                state: '',
                comment: '' 
            }
        }
    },
    methods: {
        async handleAudit(row) {
            const { show } = this.$refs["modal"] || {};
            show().then(async () => {
                //保存逻辑处理
            });
        },
    }
}
</script>

<style>

</style>