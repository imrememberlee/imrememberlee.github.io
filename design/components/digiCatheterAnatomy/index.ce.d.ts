export declare const DigiCatheterAnatomy: import('vue').VueElementConstructor<import('vue').ExtractPropTypes<{
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
        'DigiCatheterAnatomy': typeof DigiCatheterAnatomy;
    }
}
