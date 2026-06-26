import { default as echarts } from './echart';
interface Props {
    option: any;
    width: string;
    height: string;
    theme?: object | string;
    loading?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {
    getInstance: () => echarts.ECharts | undefined;
    resize: () => void;
    draw: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    loading: boolean;
    theme: object | string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    chartRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
