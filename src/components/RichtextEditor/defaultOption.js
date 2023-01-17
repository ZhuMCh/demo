import '@toast-ui/editor/dist/toastui-editor.css';
// 暗黑主题
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
// 中文菜单
import '@toast-ui/editor/dist/i18n/zh-cn'

// Chart Plugin
import chart from '@toast-ui/editor-plugin-chart';
// Code Syntax Highlight Plugin
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
// Color Syntax Plugin
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// Table Merged Cell Plugin
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
//Uml Plugin
import uml from '@toast-ui/editor-plugin-uml';

export default {
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