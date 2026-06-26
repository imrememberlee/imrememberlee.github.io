import { default as DigiMultiYAxisLineIndex } from './Index.vue';
export declare const DigiMultiYAxisLine: import('vue').VueElementConstructor<import('vue').ExtractPropTypes<{
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>>;
export declare function register(tagName?: string): void;
declare module 'vue' {
    interface GlobalComponents {
        'DigiMultiYAxisLineIndex': typeof DigiMultiYAxisLineIndex;
    }
}
