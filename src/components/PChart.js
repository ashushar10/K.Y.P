import React from 'react';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';

const Multicolorordered = () => (
  <div style={{ height: '230px', width: '350px' }}>
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea
      data={[{ x: 'Devloper', y: 35 }, { x: 'DevOps', y: 55 }, { x: 'QE', y: 10 }]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      legendData={[{ name: 'Devloper: 35' }, { name: 'DevOps: 55' }, { name: 'QE: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      name="chart2"
      padding={{
        bottom: 20,
        left: 20,
        right: 140, // Adjusted to accommodate legend
        top: 20
      }}
      subTitle="Pets"
      title="100"
      themeColor={ChartThemeColor.multiOrdered}
      width={350}
    />
  </div>
)
export default Multicolorordered;