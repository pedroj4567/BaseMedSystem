import { useTable, useFilters, usePagination } from 'react-table'

const data = [
    { name: 'John Doe', age: 25, sex: 'male' },
    { name: 'Jane Doe', age: 30, sex: 'female' },
    { name: 'Bob Smith', age: 35, sex: 'male' },
    { name: 'Alice Johnson', age: 40, sex: 'female' },
    { name: 'Sam Jones', age: 45, sex: 'male' },
    { name: 'Eva Davis', age: 50, sex: 'female' },
  ];

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Sex', accessor: 'sex' },
  ];

const TableDoctor = () => {
    const tableInstance = useTable(
      {
        columns,
        data,
      },
      useFilters,
      usePagination,
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state: { pageIndex, pageSize, filters },
      setPageSize,
      gotoPage,
      setFilter,
    } = tableInstance;
  
    const pageCount = Math.ceil(rows.length / pageSize);
 
    
    return (
      <div>
      

        <table {...getTableProps()} className="border-collapse border border-gray-400">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="p-2 border border-gray-400">
                    {column.render('Header')}
                   
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((row) => {
              prepareRow(row);
              return (
                <tr  {...row.getRowProps()} className="border cursor-pointer hover:bg-teal-100 border-gray-400">
                  {row.cells.map((cell) => (
                    <td onClick={(e)=>{console.log(e.target)}} {...cell.getCellProps()} className="p-2 border border-gray-400">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>
            <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
              {'<<'}
            </button>{' '}
            <button onClick={() => gotoPage(pageIndex - 1)} disabled={pageIndex === 0}>
              {'<'}
            </button>{' '}
            <button onClick={() => gotoPage(pageIndex + 1)} disabled={pageIndex >= pageCount - 1}>
              {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={pageIndex >= pageCount - 1}>
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageCount}
              </strong>{' '}
            </span>
           
          </div>
          <div>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  };

export default TableDoctor