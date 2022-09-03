import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import {
  stackedPrimaryYAxis,
  stackedPrimaryXAxis,
  stackedCustomSeries,
} from '../../data/dummy';
import React from 'react';

class Stacked extends React.Component {
  render() {
    const { height, width } = this.props;
    return (
      <ChartComponent
        height={height}
        width={width}
        id="stack-chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    );
  }
}
export default Stacked;
