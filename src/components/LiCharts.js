import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor } from '@patternfly/react-charts';
import { getResizeObserver } from '@patternfly/react-core';
import { VictoryZoomContainer } from 'victory-zoom-container';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.observer = () => {};
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if (this.containerRef.current && this.containerRef.current.clientWidth) {
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };
  }

  componentDidMount() {
    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.observer();
  }

  render() {
    const { width } = this.state;
    
    return (
      <div ref={this.containerRef}>
        <div style={{ height: '275px' }}>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Line chart example"
            containerComponent={<VictoryZoomContainer zoomDimension="x" />}
            legendData={[{ name: 'Devloper' }, { name: 'DevOps', symbol: { type: 'dash' } }, { name: 'QE' }, { name: 'Buisness Owner' }]}
            legendPosition="bottom-left"
            height={275}
            maxDomain={{y: 10}}
            minDomain={{y: 0}}
            name="chart3"
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 50
            }}
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
           >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
            <ChartGroup>
              <ChartLine
                data={[
                  { name: 'Devloper', x: '2015', y: 1 },
                  { name: 'Devloper', x: '2016', y: 2 },
                  { name: 'Devloper', x: '2017', y: 5 },
                  { name: 'Devloper', x: '2018', y: 3 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'DevOps', x: '2015', y: 2 },
                  { name: 'DevOps', x: '2016', y: 1 },
                  { name: 'DevOps', x: '2017', y: 7 },
                  { name: 'DevOps', x: '2018', y: 4 }
                ]}
                style={{
                  data: {
                    strokeDasharray: '3,3'
                  }
                }}
              />
              <ChartLine
                data={[
                  { name: 'QE', x: '2015', y: 3 },
                  { name: 'QE', x: '2016', y: 4 },
                  { name: 'QE', x: '2017', y: 9 },
                  { name: 'QE', x: '2018', y: 5 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Buisness Owner', x: '2015', y: 3 },
                  { name: 'Buisness Owner', x: '2016', y: 3 },
                  { name: 'Buisness Owner', x: '2017', y: 8 },
                  { name: 'Buisness Owner', x: '2018', y: 7 }
                ]}
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
export default MultiColorChart;