import React, { useCallback, useEffect, useState } from 'react';
import Styled from './style';
import Slider from 'react-slick';
import { sliderConfig } from '../../../utils/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  MarkSeries,
  LineMarkSeries
} from 'react-vis';
import Loader from '../../Loader/Loader';
import { accessData } from '../../../utils/constants';
const Visualization = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Styled>
      {loading ? (
        <Loader />
      ) : (
        <div className="visualization__container">
          <h2 className="visualization__header">Data of visualization</h2>
          <XYPlot width={1600} height={1200}>
            <HorizontalGridLines />

            <XAxis title="Year" />
            <YAxis title="Access to electricity" />
            <LineMarkSeries
              style={{
                strokeWidth: '5px'
              }}
              lineStyle={{ stroke: 'green' }}
              markStyle={{ stroke: 'red', fill: 'white', width: '4px' }}
              curve={'curveCatmullRom'}
              colorType="literal"
              data={accessData.map((item, index) => {
                return {
                  x: item.Year,
                  y: item['Access.to.electricity']
                };
              })}
              fill="blue"
            />
          </XYPlot>
        </div>
      )}
    </Styled>
  );
};

export default Visualization;
