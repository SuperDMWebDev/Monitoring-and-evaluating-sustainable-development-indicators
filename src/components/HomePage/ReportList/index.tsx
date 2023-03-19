import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, MoreOutlined, DeleteOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table, Select } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import type { MenuProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Loader from '../../Loader/Loader';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { accessData } from '../../../utils/constants';
import { getReports, getTitle } from '../../../utils/api';

export interface DataType {
  Entity: String;
  Code: String;
  Year: number;
  Data: number;
}

type DataIndex = keyof DataType;

// Menu Dropdown
const items: MenuProps['items'] = [
  {
    label: (
      <div className="button_delete" onClick={(e) => console.log(e.target)}>
        <DeleteOutlined style={{ marginRight: '10px' }} />
        Delete
      </div>
    ),
    key: 'delete'
  }
];

const ReportList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(1);
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const x = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(x);
    };
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
      let newListArr = [];
      for (let i = 0; i < dataArr.length; i++) {
        const newObject = {
          Entity: dataArr[i][keys[0]],
          Code: dataArr[i][keys[1]],
          Year: dataArr[i][keys[2]],
          Data: dataArr[i][keys[3]]
        };
        newListArr.push(newObject);
      }
      console.log('newListArr  ', newListArr);
      setData(newListArr);
    };
    getReportsForReportList(currentTitle);
  }, [currentTitle]);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}>
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}>
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? text : text)
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Entity',
      dataIndex: 'Entity',
      key: 'Entity',
      width: '20%',
      ...getColumnSearchProps('Entity')
    },
    {
      title: 'Code',
      dataIndex: 'Code',
      key: 'Code',
      width: '5%',
      ...getColumnSearchProps('Code')
    },
    {
      title: 'Year',
      dataIndex: 'Year',
      key: 'Year',
      width: '5%',
      ...getColumnSearchProps('Year')
    },
    {
      title: 'Data',
      dataIndex: 'Data',
      key: 'Data',
      ...getColumnSearchProps('Data'),
      sorter: (a, b) => a['Data'] - b['Data']
    }
  ];
  const handleChangeTitle = (value: number) => {
    console.log('change value ', value);
    setCurrentTitle(value);
  };
  return (
    <>
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
          <div className="header_table">
            <span className="title_table">{`List data of ${title[currentTitle - 1].title}`}</span>
          </div>
          <Table
            pagination={{ pageSize: 7 }}
            columns={columns}
            dataSource={data}
            rowClassName={(record, index) =>
              index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            }
          />
        </div>
      )}
    </>
  );
};

export default ReportList;
