import { LineSeriesOption } from 'echarts/charts';
import { TooltipComponentOption, TitleComponentOption, GridComponentOption, LegendComponentOption, DataZoomComponentOption } from 'echarts/components';
import { ComposeOption } from 'echarts/core';
import * as echarts from 'echarts/core';
export type ECOption = ComposeOption<LineSeriesOption | GridComponentOption | TitleComponentOption | TooltipComponentOption | LegendComponentOption | DataZoomComponentOption>;
export default echarts;
