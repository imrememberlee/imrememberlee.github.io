export declare const DigiMedicineGantt: import('vue').VueElementConstructor<import('vue').ExtractPropTypes<{
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
        'DigiMedicineGantt': typeof DigiMedicineGantt;
    }
}
