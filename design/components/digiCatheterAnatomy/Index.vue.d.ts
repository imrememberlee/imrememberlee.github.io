import { AnatomyPartCatheters } from '../../tools/echarts/catheterAnatomyOption/Catheter';
interface AnatomyPartCathetersData {
    anatomyPartCatheters: AnatomyPartCatheters;
    rightInfoId: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    /** 获取 ECharts 实例的方法，可直接通过实例调用原生函数 */
    getInstance: () => any;
    /** 设置 ECharts option 方法 */
    setOption: (anatomyPartCathetersData: AnatomyPartCathetersData) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    changeCatheter: (...args: any[]) => void;
    addCatheter: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onChangeCatheter?: ((...args: any[]) => any) | undefined;
    onAddCatheter?: ((...args: any[]) => any) | undefined;
}>, {
    width: number;
    height: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    chartRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
