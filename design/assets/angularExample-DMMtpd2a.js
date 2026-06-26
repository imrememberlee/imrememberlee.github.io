import{j as n,M as o,S as s}from"./index-8g36ZuKP.js";import{useMDXComponents as t}from"./index-BR-YmCUG.js";import{BasicMedicineGantt as c}from"./digiMedicineGantt.stories-BX0SPcVs.js";import"./iframe-DWIjy_qw.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-Cu4lwwaE.js";import"./index-Cgug7aQA.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-DwFmfttj.js";import"./BaseEchart-DznECrYh.js";import"./universalTransition-DVg0_tq2.js";import"./multiYAxisLineData-C-KT8vlO.js";import"./index-CIQZp6r3.js";import"./useConfigInject-rp0DIWLo.js";function i(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"readme/angular 示例"}),`
`,n.jsx(e.h1,{id:"定义",children:"定义"}),`
`,n.jsx(e.p,{children:"前端组件库支持通过 Web Components 的方式引入项目中，下面是 angular 引入业务组件的示例"}),`
`,n.jsx(e.h2,{id:"使用",children:"使用"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"安装前端组件库"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install design-ui@0.1.0
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:'" app.module.ts " 要配置 CUSTOM_ELEMENTS_SCHEMA'}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"只有配置才能正常使用Web Components 组件"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';\r
@NgModule({\r
  ...\r
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]\r
})\r
export class AppModule { }
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsx(e.li,{children:"在引用页面引入组件"}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:'"design-ui/lib/customElements " 目录下的都是可使用的 Web Components 组件'}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { register as registerMedicineGantt } from 'design-ui/lib/customElements/digiMedicineGantt/index.es.js';\r
import medicineGroupData from './mock/medicineGroupData';\r
// mock 数据文件位置：'design-ui/src/components/digiMedicineGantt/mock/medicineGroupData' \r
...\r
export class TestComponent implements OnInit {\r
  constructor() {\r
    // 注册组件，只有注册后就可以在页面直接使用组件，一定要在 ngOnInit 生命周期前\r
    registerMedicineGantt('digi-medicine-gantt');\r
  }\r
  @ViewChild('medicineGroupRef') medicineGroupRef: any;\r
  ngAfterViewInit(): void {\r
    // setOption 为组件的内部方法，medicineGroupData 为入参\r
    this.medicineGroupRef.nativeElement._instance.exposed.setOption(medicineGroupData);\r
  }\r
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`/** html */ \r
/** width 和 height 为组件的入参 */ \r
<div>\r
  <digi-medicine-gantt #medicineGroupRef width="1200" height="420"></digi-medicine-gantt>\r
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// *.d.ts 组件声明，不然会 ts 报错\r
declare module 'design-ui/lib/customElements/digiMedicineGantt/index.es.js' {\r
  // export default any;\r
  export declare const DigiMedicineGantt: import('vue').VueElementConstructor<\r
    // 组件的入参\r
    import('vue').ExtractPropTypes<{\r
      width: {\r
        type: NumberConstructor;\r
        default: number;\r
      };\r
      height: {\r
        type: NumberConstructor;\r
        default: number;\r
      };\r
    }>\r
  >;\r
  export declare function register(tagName?: string): void;\r
}
`})}),`
`,n.jsx(e.h2,{id:"效果",children:"效果"}),`
`,n.jsx(s,{of:c})]})}function G(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{G as default};
