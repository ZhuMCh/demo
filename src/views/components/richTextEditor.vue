<template>
    <list-page>
        <richtext-editor :content.sync="content" :options="editorOptions" :config="config" @change="handleChange"></richtext-editor>
    </list-page>
</template>

<script>
export default {
    data() {
        return {
            config: {
                hasSave: true,
                hasReset: true,
                isViewer: false,
            },
            content: '',
            editorOptions: {
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                initialValue: '',
                // theme: 'dark'
            }
        }
    },
    watch:{
        content:function(){
            console.log('富文本内容',this.content)
        }
    },
    methods: {
        handleChange(data) {
            console.log(data)
            this.content = data
        }
    }
}
</script>

<style lang="scss">

</style>