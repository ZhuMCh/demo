<template>
    <div id="richTextEditor"></div>
</template>

<script>
import Editor from '@toast-ui/editor';
import defaultOption from './defaultOption'
export default {
    name: 'RichtextEditor',
    props: {
        content: String,
        config: {
            type: Object,
            default() {
                return {
                    hasSave: false,
                    hasReset: false,
                    isViewer: false
                }
            }
        },
        options: {
            type: Object,
            default() {
                return defaultOption
            }
        },
    },
    data() {
        return {
           editor: null
        }
    },
    computed: {
        editorOptions() {
            const op = Object.assign({},defaultOption,this.options);
            op.viewer = this.config.isViewer;
        
            let btns = []
            if(this.config.hasReset){
                btns.push(
                    {
                        el: this.resetButton(),
                    }
                )
            }
            if(this.config.hasSave){
                btns.push(
                    {
                        el: this.saveButton(),
                    }
                )
            }
            op.toolbarItems.push(btns)
            
            return op
        }
    },
    mounted() {
        this.initEditor();
        if(this.content){
            this.editor.setHTML(this.content)
        }
    },
    methods: {
        initEditor(){
            this.editor = Editor.factory({
                el: document.querySelector('#richTextEditor'),
                ...this.editorOptions
            });
            this.editor.on("change",()=>{
                this.sentContent()
            })
            // this.editor.getMarkdown();
        },
        sentContent() {
            let content = this.editor.getHTML()
            this.$emit("update:content",content);
            this.$emit("change",content)
        },
        saveButton() {
            const button = document.createElement('button');

            button.className = 'rich-text-button save-button';
            button.style.margin = '0';
            button.innerHTML = '保存';
            button.addEventListener('click', () => {
                this.sentContent()
            });

            return button;
        },
        resetButton() {
            const button = document.createElement('button');
            button.background = 'none'
            button.className = 'rich-text-button';
            button.style.margin = '0';
            button.innerHTML = '清除';
            button.addEventListener('click', () => {
                this.editor.reset()
                this.sentContent()
            });

            return button;
        }
    }
}
</script>

<style lang="scss" scoped>
#richTextEditor{
    ::v-deep .rich-text-button{
        width: auto !important;
        padding-left: 10px !important;
        padding-right: 10px !important;
    }
    ::v-deep .save-button {
        background: #409eff !important;
        color: #fff !important;
    }
}
</style>