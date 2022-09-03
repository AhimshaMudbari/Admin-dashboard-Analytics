import * as React from 'react';
import ReactDOM from 'react-dom';

import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

class SparkLine extends React.Component {
  render() {
    const { color, currentColor, id, height, width, data, type } = this.props;
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}
// const SparkLine = ({ color, currentColor, id, height, width, data, type }) => {
//   return (
//     <SparklineComponent
//       id={id}
//       height={height}
//       width={width}
//       lineWidth={1}
//       valueType="Numeric"
//       fill={color}
//       border={{ color: currentColor, width: 2 }}
//       dataSource={data}
//       xName="X"
//       yName="Y"
//       type={type}
//     >
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   );
// };
export default SparkLine;
// ReactDOM.render(<SparkLine />, document.getElementById('root'));
