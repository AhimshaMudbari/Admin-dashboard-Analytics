import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 mt-24 bg-white md:m-10 p-z md:p-10 rounded-3xl">
      <Header title="Customers Details" category="Page" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
        width="auto"
        editSettings={editing}
        selectionSettings={selectionsettings}
        pageSettings={{ pageCount: 3 }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Sort, Filter, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
