import { PropType } from 'vue';
interface Option {
    label: string;
    value: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<any[]>;
        default: () => never[];
    };
    fieldNames: {
        type: PropType<Option>;
        default: () => {
            label: string;
            value: string;
        };
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<any[]>;
        default: () => never[];
    };
    fieldNames: {
        type: PropType<Option>;
        default: () => {
            label: string;
            value: string;
        };
    };
}>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}>, {
    name: string;
    value: string;
    options: any[];
    fieldNames: Option;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
