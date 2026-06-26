import{_ as s,m as d}from"./multiYAxisLineData-C-KT8vlO.js";import{r as m,n as c}from"./vue.esm-bundler-DwFmfttj.js";import"./BaseEchart-DznECrYh.js";import"./universalTransition-DVg0_tq2.js";const p={title:"业务组件/MultiYAxisLine多y轴折线图",component:s,tags:["autodocs"],argTypes:{width:{control:"number",description:"宽度"},height:{control:"number",description:"高度"}},args:{width:1200,height:360},render:o=>({components:{DigiMultiYAxisLine:s},setup(){const t=m();return c(()=>{var e;(e=t.value)==null||e.setOption(d)}),{args:o,digiMultiYAxisLineRef:t}},template:`
      <div>
        <digi-multi-y-axis-line
          ref="digiMultiYAxisLineRef"
          :width="args.width"
          :height="args.height"
        >
        </digi-multi-y-axis-line>
      </div>`})},i={args:{width:1200,height:360}};var r,n,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    width: 1200,
    height: 360
  }
}`,...(a=(n=i.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const x=["BasicMultiYAxisLine"];export{i as BasicMultiYAxisLine,x as __namedExportsOrder,p as default};
