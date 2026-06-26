export declare const DigiEcg: import('vue').VueElementConstructor<import('vue').ExtractPropTypes<{
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
        'DigiEcg': typeof DigiEcg;
    }
}
