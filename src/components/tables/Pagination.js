import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const Container = styled.div`
  display: flex;
  justify-content: center;

  .pagination {
    display: flex;
    list-style: none;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    width: fit-content;
    align-items: center;
    padding: 0;
    margin: 1rem 0;

    li {
      a {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 10px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      &.active {
        a {
          font-weight: bold;
          text-decoration: underline;
          pointer-events: none;
        }
      }
    }
  }
`;

function Pagination({ pageIndex, pageCount, gotoPage }) {
  const onClick = (event) => {
    const { selected } = event;
    gotoPage(selected);
  };
  return (
    <Container>
      <ReactPaginate
        forcePage={pageIndex} // if page changed outside, send to that page
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        activeClassName="active"
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        initialPage={pageIndex}
        onPageChange={onClick}
        pageCount={pageCount} //page count
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
    </Container>
  );
}

export default Pagination;
