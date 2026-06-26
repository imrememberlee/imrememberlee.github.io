import { AnatomyPartCatheters } from './Catheter';
declare const getCatheterAnatomyOption: (anatomyPartCatheters: AnatomyPartCatheters | any, rightInfoId: string, activeBtn: string) => {
    tooltip: {
        show: boolean;
    };
    animation: boolean;
    geo: {
        name: string;
        type: string;
        map: string;
        roam: string;
        z: number;
        tooltip: {
            enterable: boolean;
            triggerOn: string;
            trigger: string;
            hideDelay: number;
            alwaysShowContent: boolean;
            position: string;
            backgroundColor: string;
            formatter: (params: any) => any;
        };
        layoutCenter: string[];
        layoutSize: string;
        selectedMode: string;
        emphasis: {
            label: {
                show: boolean;
            };
            itemStyle: {
                areaColor: string;
                color: string;
            };
        };
        select: {
            label: {
                show: boolean;
            };
            itemStyle: {
                areaColor: string;
                color: string;
                borderColor: string;
            };
        };
        itemStyle: {
            label: {
                show: boolean;
            };
            areaColor: string;
            color: string;
            borderColor: string;
        };
        regions: any[];
    };
    graphic: {
        type: string;
        id: string;
        right: string;
        bottom: string;
        z: number;
        bounding: string;
        style: {
            image: string;
            width: number;
            height: number;
        };
    }[];
    series: ({
        type: string;
        coordinateSystem: string;
        geoIndex: number;
        zlevel: number;
        symbolSize: number;
        universalTransition: {
            enabled: boolean;
        };
        tooltip: {
            zlevel: number;
            enterable: boolean;
            triggerOn: string;
            trigger: string;
            hideDelay: number;
            alwaysShowContent: boolean;
            position: string;
            backgroundColor: string;
            borderWidth: number;
            padding: number;
            formatter: (params: any) => string;
            show?: undefined;
        };
        label: {
            show: boolean;
            formatter: (params: any) => string;
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
            borderRadius: number;
            padding: number[];
            color: string;
            fontSize: number;
            shadowBlur: number;
            shadowColor: string;
            shadowOffsetX: number;
            shadowOffsetY: number;
            lineHeight: number;
            width: number;
            height: number;
            rich: {
                term: {
                    fontSize: number;
                    color: string;
                };
            };
            verticalAlign?: undefined;
        };
        data: any;
        polyline?: undefined;
        lineStyle?: undefined;
        symbol?: undefined;
        color?: undefined;
        z?: undefined;
        fontSize?: undefined;
        lineHeight?: undefined;
        backgroundColor?: undefined;
        opacity?: undefined;
    } | {
        type: string;
        zlevel: number;
        polyline: boolean;
        lineStyle: {
            normal: {
                color: string;
                width: number;
                curveness: number;
            };
            type?: undefined;
            color?: undefined;
            width?: undefined;
            opacity?: undefined;
        };
        tooltip: {
            show: boolean;
            zlevel?: undefined;
            enterable?: undefined;
            triggerOn?: undefined;
            trigger?: undefined;
            hideDelay?: undefined;
            alwaysShowContent?: undefined;
            position?: undefined;
            backgroundColor?: undefined;
            borderWidth?: undefined;
            padding?: undefined;
            formatter?: undefined;
        };
        data: any;
        coordinateSystem?: undefined;
        geoIndex?: undefined;
        symbolSize?: undefined;
        universalTransition?: undefined;
        label?: undefined;
        symbol?: undefined;
        color?: undefined;
        z?: undefined;
        fontSize?: undefined;
        lineHeight?: undefined;
        backgroundColor?: undefined;
        opacity?: undefined;
    } | {
        type: string;
        coordinateSystem: string;
        geoIndex: number;
        zlevel: number;
        symbol: string;
        symbolSize: number[];
        color: string;
        lineStyle: {
            type: string;
            color: string;
            width: number;
            opacity: number;
            normal?: undefined;
        };
        tooltip: {
            show: boolean;
            zlevel?: undefined;
            enterable?: undefined;
            triggerOn?: undefined;
            trigger?: undefined;
            hideDelay?: undefined;
            alwaysShowContent?: undefined;
            position?: undefined;
            backgroundColor?: undefined;
            borderWidth?: undefined;
            padding?: undefined;
            formatter?: undefined;
        };
        label: {
            show: boolean;
            formatter?: undefined;
            backgroundColor?: undefined;
            borderColor?: undefined;
            borderWidth?: undefined;
            borderRadius?: undefined;
            padding?: undefined;
            color?: undefined;
            fontSize?: undefined;
            shadowBlur?: undefined;
            shadowColor?: undefined;
            shadowOffsetX?: undefined;
            shadowOffsetY?: undefined;
            lineHeight?: undefined;
            width?: undefined;
            height?: undefined;
            rich?: undefined;
            verticalAlign?: undefined;
        };
        data: any;
        universalTransition?: undefined;
        polyline?: undefined;
        z?: undefined;
        fontSize?: undefined;
        lineHeight?: undefined;
        backgroundColor?: undefined;
        opacity?: undefined;
    } | {
        type: string;
        coordinateSystem: string;
        geoIndex: number;
        zlevel: number;
        z: number;
        symbol: string;
        symbolSize: number[];
        fontSize: number;
        lineHeight: number;
        color: string;
        backgroundColor: string;
        opacity: number;
        lineStyle: {
            type: string;
            color: string;
            width: number;
            opacity: number;
            normal?: undefined;
        };
        tooltip: {
            show: boolean;
            zlevel?: undefined;
            enterable?: undefined;
            triggerOn?: undefined;
            trigger?: undefined;
            hideDelay?: undefined;
            alwaysShowContent?: undefined;
            position?: undefined;
            backgroundColor?: undefined;
            borderWidth?: undefined;
            padding?: undefined;
            formatter?: undefined;
        };
        label: {
            show: boolean;
            color: string;
            fontSize: number;
            lineHeight: number;
            verticalAlign: string;
            formatter: (params: any) => any;
            backgroundColor?: undefined;
            borderColor?: undefined;
            borderWidth?: undefined;
            borderRadius?: undefined;
            padding?: undefined;
            shadowBlur?: undefined;
            shadowColor?: undefined;
            shadowOffsetX?: undefined;
            shadowOffsetY?: undefined;
            width?: undefined;
            height?: undefined;
            rich?: undefined;
        };
        data: any;
        universalTransition?: undefined;
        polyline?: undefined;
    })[];
};
export default getCatheterAnatomyOption;
