import styled from 'styled-components';


export const TaskListStyles = styled.div`
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
    background-color: #35C5B1;
    color: white;
  }

  tr {
    height: 35px;
  }
  td {
    background-color: #E4F9F7;
    color: black;
  }

  th,
  td {
    padding: 5px 10px;
  }

  th:nth-child(1), td:nth-child(1) {
    width: 3rem;
    text-align: center;
  }
  td:nth-child(1) > * {
    margin: 0;
  }
  th:nth-child(3), td:nth-child(3) {
    width: 4rem;
  }
  th:nth-child(4), td:nth-child(4) {
    width: 4rem;
  }
`;

export const EntityListStyles = styled.div`
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
    background-color: #36B6FF;
    color: white;
  }

  tr {
    height: 35px;
  }
  td {
    background-color: #E7F8FF;
    color: black;
  }

  th,
  td {
    padding: 5px 10px;
  }

  th:nth-child(1), td:nth-child(1) {
    width: 3rem;
    text-align: center;
  }
  td:nth-child(1) > * {
    margin: 0;
  }
  th:nth-child(3), td:nth-child(3) {
    width: 4rem;
  }
  th:nth-child(4), td:nth-child(4) {
    width: 4rem;
  }
`;

