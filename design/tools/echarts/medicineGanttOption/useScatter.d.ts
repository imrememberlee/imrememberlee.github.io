declare const getStartScatter: (startData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getEndScatter: (endData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getUpScatter: (upData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getDownScatter: (downData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getStopScatter: (stopData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getRenewScatter: (renewData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getDiscardScatter: (discardData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getOnceScatter: (onceData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number[];
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
declare const getExpectancyScatter: (expectancyData: any[]) => {
    type: string;
    symbol: string;
    symbolSize: number;
    encode: {
        x: number;
        y: number;
    };
    z: number;
    itemStyle: {
        opacity: number;
    };
    label: {
        show: boolean;
        formatter: (val: any) => string;
        position: string;
        distance: number;
        rich: {
            timeString: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
            label: {
                fontSize: number;
                lineHeight: number;
                height: number;
                color: string;
                textShadowColor: string;
                padding: number[];
            };
        };
    };
    tooltip: {
        show: boolean;
        padding: number;
        enterable: boolean;
        borderWidth: number;
        confine: boolean;
        position: (point: [number, number], params: any, dom: HTMLElement, rect: DOMRect, size: {
            contentSize: DOMRect[];
            viewSize: DOMRect[];
        }) => [number, number];
        formatter: (val: any) => string;
    };
    data: any[];
};
export { getStartScatter, getEndScatter, getUpScatter, getDownScatter, getStopScatter, getRenewScatter, getDiscardScatter, getOnceScatter, getExpectancyScatter, };
