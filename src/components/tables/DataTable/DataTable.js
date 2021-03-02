import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useTable, useSortBy, usePagination } from 'react-table';

import { FlexWrapper } from '../../layout-containers';
import { Button } from '../../buttons';
import { baseColors, palletColors } from '../../../styles/colors';
import { Pagination, ResultsSelect } from '..';

import { processData } from './utils';

const DefaultStyles = styled.div`
  width: 100%;
  margin: 0 2px;
  min-height: 300px;
  overflow-x: auto;
  font-size: 12px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 8px;
    white-space: nowrap;
  }

  table > * {
    font-size: 14px;
  }

  thead {
    text-align: left;
    background-color: ${(props) =>
      props.color && baseColors[props.color]
        ? palletColors[`${props.color}6`]
        : '#078dd3'};
    color: white;
  }

  tr {
    height: 35px;
  }
  td {
    background-color: ${(props) =>
      props.color && baseColors[props.color]
        ? palletColors[`${props.color}1`]
        : '#E7F8FF'};
    color: black;
  }

  th,
  td {
    padding: 5px 10px;
  }

  th.has-link,
  td.has-link {
    width: 3rem;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    th,
    td {
      font-size: 12px;
      padding: 2px 5px;
    }
  }

  @media screen and (max-width: 575px) {
    table {
      table-layout: fixed;
    }
    th,
    td {
      font-size: 11px;
      max-width: 100px;
      padding: 2px;
    }
  }
`;
const TdContent = styled.div`
  word-break: break-all;
  white-space: break-spaces;
  overflow-wrap: break-word;
  word-wrap: break-word;
  display: inline;
`;

function DataTable({
  data,
  headers,
  accessors,
  cellRenders,
  Styles,
  pagination,
  color = 'blue',
}) {
  const [isAscending, setIsAscending] = useState(false);
  const router = useRouter();
  const columns = useMemo(
    () => processData(data, headers, accessors, cellRenders),
    [data, headers, accessors, cellRenders]
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    toggleSortBy,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const table = (
    <>
      <table {...getTableProps()} className="dataTable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.Header === 'link' ? 'has-link' : ''}
                >
                  <FlexWrapper
                    alignItems="center"
                    display="flex"
                    justifyContent="space-between"
                  >
                    {column.Header !== 'link' && column.render('Header')}
                    {column.isSorted && pagination ? (
                      column.isSortedDesc ? (
                        <i className="icon-chevron-up" />
                      ) : (
                        <i className="icon-chevron-down" />
                      )
                    ) : (
                      pagination && <i className="icon-chevron-left" />
                    )}
                  </FlexWrapper>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.Header === 'link') {
                    return (
                      <td {...cell.getCellProps()} className="has-link">
                        <Button
                          color={color}
                          noMargin={true}
                          size="small"
                          onClick={() => router.push(cell.value)}
                        >
                          Go
                        </Button>
                      </td>
                    );
                  }
                  return (
                    <td
                      data-title={cell.column.Header}
                      onClick={() => {
                        toggleSortBy(cell.column.id, isAscending, false);
                        setIsAscending(!isAscending);
                      }}
                      {...cell.getCellProps()}
                    >
                      <TdContent>{cell.render('Cell')}</TdContent>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {pagination && data.length >= 10 && (
        <FlexWrapper alignItems="center" justifyContent="space-between">
          <div style={{ width: '100px' }} />
          <Pagination
            gotoPage={gotoPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
          />
          <ResultsSelect pageSize={pageSize} setPageSize={setPageSize} />
        </FlexWrapper>
      )}
    </>
  );

  if (Styles) {
    return <Styles>{table}</Styles>;
  }

  return <DefaultStyles color={color}>{table}</DefaultStyles>;
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired, // Data must come in as an array!
  headers: PropTypes.array.isRequired, // same as above, the visual of the header
  accessors: PropTypes.array.isRequired, // same as above, the key used to access the correct data
  Styles: PropTypes.any, // a styled component that will have your custom styles
};

export default DataTable;
