interface EchartOptionItem {
    title?: string;
    xAxis: number[] | string[];
    yAxis: number[];
    min?: number | undefined;
    max?: number | undefined;
    color?: string | undefined;
}
/**
 * @description: 获取监护仪 option
 * @param: Array [
 *  {
 *      xAxis: number[] | string[]
 *      yAxis: number[] | string[]
 *      min?: number
 *      max?: number
 *      color?: string 折线颜色
 *  }
 * ]
 * @return {EchartOption}
 */
declare const getEcgOption: (ecgList: EchartOptionItem[]) => {
    tooltip: {
        show: boolean;
        trigger: string;
        axisPointer: {
            type: string;
        };
    };
    xAxis: {
        gridIndex: number;
        show: boolean;
        axisLabel: {
            show: boolean;
        };
        axisTick: {
            show: boolean;
        };
        axisLine: {
            lineStyle: {
                color: string;
            };
        };
        type: string;
        boundaryGap: boolean;
        data: string[] | number[];
    }[];
    yAxis: {
        gridIndex: number;
        axisLabel: {
            show: boolean;
        };
        axisTick: {
            show: boolean;
        };
        splitLine: {
            show: boolean;
        };
        splitNumber: number;
        name: string;
        min: number;
        max: number;
        nameLocation: string;
        nameGap: number;
        nameRotate: number;
        nameTextStyle: {
            color: string;
            width: string;
            align: string;
            padding: number[];
        };
    }[];
    grid: {
        top: string;
        left: string;
        right: string;
        height: string;
    }[];
    series: {
        name: string;
        type: string;
        data: number[];
        xAxisIndex: number;
        yAxisIndex: number;
        smooth: boolean;
        showSymbol: boolean;
        lineStyle: {
            color: string;
        };
    }[];
};
export default getEcgOption;
