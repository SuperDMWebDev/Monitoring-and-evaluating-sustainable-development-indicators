import React, { useEffect, useState } from 'react';
import Styled from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineMarkSeries } from 'react-vis';
import { Select } from 'antd';
import Loader from '../../Loader/Loader';
import { accessData } from '../../../utils/constants';
import { DataType } from '../ReportList';
import { getReports, getTitle } from '../../../utils/api';
import AutoSizer from 'react-virtualized-auto-sizer';

const Visualization = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(1);
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const getTitleForReportList = async () => {
      const data = await getTitle();
      setTitle(data);
    };
    getTitleForReportList();
  }, []);

  useEffect(() => {
    const keyData = 'jsonData';
    const getReportsForReportList = async (currentTitle: number) => {
      const data = await getReports(currentTitle);
      const dataArr = data[keyData];
      const keys = Object.keys(dataArr[0]);
      const dataKey = keys.filter((key) => key != "Entity" && key != "Code" && key != "Year")[0];
      let newListArr = [];
      for (let i = 0; i < dataArr.length; i++) {
        const newObject = {
          Entity: dataArr[i]['Entity'],
          Code: dataArr[i]['Code'],
          Year: dataArr[i]['Year'],
          Data: dataArr[i][dataKey]
        };
        newListArr.push(newObject);
      }
      console.log('newListArr  ', newListArr);
      setData(newListArr);
    };
    getReportsForReportList(currentTitle);
  }, [currentTitle]);

  const handleChangeTitle = (value: number) => {
    console.log('change value ', value);
    setCurrentTitle(value);
  };

  return (
    <Styled>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {title && (
            <Select
              defaultValue={title[currentTitle - 1].title}
              onChange={handleChangeTitle}
              style={{ width: 'fit-content' }}
              options={title.map((item, index) => {
                return {
                  label: item.title,
                  value: item.id
                };
              })}
            />
          )}
          <div className="visualization__container">
            <h2 className="visualization__header">{`Visualization of ${
              title[currentTitle - 1].title
            }`}</h2>
            <div style={{ width: '100%', height: '1200px' }}>
              <AutoSizer>
                {({ width, height }) => (
                  <XYPlot width={width} height={height}>
                    <HorizontalGridLines />
                    <XAxis title="Year" />
                    <YAxis title="Data" />
                    <LineMarkSeries
                      style={{
                        strokeWidth: '5px'
                      }}
                      lineStyle={{ stroke: 'green' }}
                      markStyle={{ stroke: 'red', fill: 'white', width: '4px' }}
                      curve={'curveCatmullRom'}
                      data={data.map((item, index) => {
                        console.log('year ', item.Year);
                        return {
                          x: item.Year,
                          y: item.Data
                        };
                      })}
                    />
                  </XYPlot>
                )}
              </AutoSizer>
            </div>
          </div>
        </div>
      )}
    </Styled>
  );
};

export default Visualization;
