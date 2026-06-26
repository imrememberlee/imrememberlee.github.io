declare const getXDate: (time: Date) => string;
declare const getXHour: (time: Date) => string;
declare const renderItem: (params: any, api: any) => any;
declare const getTipHtml: (doctordExecute: any) => string;
declare const getPosition: (point: [number, number], _: any, dom: HTMLElement, __: DOMRect, size: {
    contentSize: DOMRect[];
    viewSize: DOMRect[];
}) => [number, number];
export { getXDate, getXHour, renderItem, getTipHtml, getPosition };
