## 使用说明

<richtext-editor :content.sync="content" :options="options" :config="config" @change="handleChange"></richtext-editor>

content 文本编辑内容
options 富文本选项参数
    默认配置
    {
        language: 'zh-CN',
        height: '100%', //in string or auto ex) 300px | auto
        initialEditType: 'wysiwyg',//Initial type to show markdown | wysiwyg
        previewStyle: 'tab',//Preview style of Markdown mode tab | vertical
        placeholder: '请输入',
        initialValue: '',//Initial value. Set Markdown string
        usageStatistics: false,//Let us know the hostname. We want to learn from you how you are using the Editor.
        toolbarItems: [
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
        ],
        plugins: [
            chart,
            [codeSyntaxHighlight,{ highlighter: Prism }],
            [
                colorSyntax,
                {
                    // preset: ['#333', '#f1f1f1', '#409eff']
                }
            ],
            tableMergedCell,
            uml
        ],
    }

config 自定义配置参数
    {
        hasSave: false, //是否需要保存按钮
        hasReset: false, //是否需要清除按钮
        isViewer: false //是否开启预览模式(无法编辑)
    }

@change 编辑器内容变化函数 当content为异步sync时不需要此方法