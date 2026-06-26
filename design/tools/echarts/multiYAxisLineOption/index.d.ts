interface MultiYAxisLineData {
    legend: string[];
    xAxis: number[];
    series: number[];
}
/**
 * @description: 多 y 轴折线图 option
 * @param: Array [
 *  {
 *      legend: string[];
 *      xAxis: number[];
 *      series: number[];
 *  }
 * ]
 * @return {EchartOption}
 */
declare const getMultiYAxisLineOption: (multiYAxisLineData: MultiYAxisLineData) => {
    title: {
        text: string;
    };
    color: string[];
    tooltip: {
        trigger: string;
        formatter: (param: any[]) => string;
        axisPointer: {
            type: string;
        };
    };
    dataZoom: {
        type: string;
        xAxisIndex: number;
        start: number;
        end: number;
    }[];
    grid: {
        left: string;
        bottom: string;
    };
    toolbox: {
        feature: {
            saveAsImage: {
                show: boolean;
            };
        };
    };
    legend: {
        data: string[];
    };
    xAxis: {
        min: number;
        max: number;
        type: string;
        showMaxLabel: boolean;
        showMinLabel: boolean;
        splitNumber: number;
        connectNulls: boolean;
        hideOverlap: boolean;
        axisLabel: {
            formatter: string;
        };
        splitLine: {
            show: boolean;
            lineStyle: {
                color: string;
                width: number;
                type: string;
            };
        };
    }[];
    yAxis: any[];
    series: any[];
};
export default getMultiYAxisLineOption;
