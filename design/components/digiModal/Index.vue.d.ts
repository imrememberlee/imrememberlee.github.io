declare function __VLS_template(): any;
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    confirmLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    confirmLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    confirmLoading: boolean;
    maskClosable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, any, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
