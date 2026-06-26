interface EchartOption {
    medicineGroup: any[];
    startTime: number | string;
    endTime: number | string;
    interval?: number | string;
    hideLabel: Boolean | undefined;
}
/**
 * @description: 用药情况甘特图 option
 * @param: {
 *     medicineGroup: any[]
 *     startTime: number | string
 *     endTime: number | string
 *     hideLabel: Boolean | undefined
 * }
 * @return {EchartOption}
 */
declare const getMedicineGanttOption: (echartOption: EchartOption) => {
    tooltip: {
        show: boolean;
    };
    title: {
        show: boolean;
        text: string;
    };
    grid: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    xAxis: {
        min: string | number;
        max: string | number;
        interval: string | number;
        axisLabel: {
            show: boolean;
            formatter: (val: string) => string;
            rich: {
                day: {
                    color: string;
                };
                hour: {
                    color: string;
                    fontWeight: number;
                };
            };
        };
        position: string;
        splitLine: {
            show: boolean;
        };
        axisLine: {
            show: boolean;
            lineStyle: {
                color: string;
            };
        };
        axisTick: {
            show: boolean;
            length: number;
            lineStyle: {
                width: number;
                type: string;
            };
        };
        axisPointer: {
            show: boolean;
            type: string;
            status: string;
            lineStyle: {
                type: string;
                color: string;
                width: number;
            };
            label: {
                formatter: (params: any) => string;
            };
            triggerTooltip: boolean;
            triggerOn: string;
        };
        tooltip: {
            show: boolean;
        };
    };
    yAxis: {
        data: any[] | number[];
        splitLine: {
            show: boolean;
            lineStyle: {
                color: string;
            };
        };
        splitArea: {
            show: boolean;
            areaStyle: {
                color: string[];
            };
        };
        axisLine: {
            show: boolean;
        };
        axisLabel: {
            show: boolean;
        };
        axisTick: {
            show: boolean;
        };
        inverse: boolean;
        tooltip: {
            show: boolean;
        };
        boundaryGap: string[];
    };
    series: any[];
    animation: boolean;
};
export default getMedicineGanttOption;
