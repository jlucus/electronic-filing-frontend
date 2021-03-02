import styled from 'styled-components';

const SearchResultStyles = styled.div`
  width: 100%;
  min-height: 300px;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 8px;
    white-space: nowrap;
  }

  table > * {
    font-size: 0.8rem;
  }

  thead {
    text-align: left;
    background-color: rgb(7, 141, 211, 0.9);
    color: white;
  }

  td {
    background-color: rgba(94, 182, 228, 0.3);
    color: black;
    height: 10px;
  }

  th,
  td {
    padding-left: 10px;
  }

  td:nth-child(5) {
    width: 50px;
  }

  @media only screen and (max-width: 47.99em) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      white-space: normal;
      text-align: left;
    }

    td {
      height: 60px;
    }

    div {
      justify-content: flex-start;
    }

    td:nth-child(5) {
      width: 100%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      left: 6px;
      width: 45%;
      white-space: nowrap;
      word-wrap: break-word;
      text-align: left;
      font-weight: bold;
    }

    /*
    Label the data
    */
    td:before {
      content: attr(data-title);
    }
  }
`;

export default SearchResultStyles;
