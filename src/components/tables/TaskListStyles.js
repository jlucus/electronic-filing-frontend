import styled from 'styled-components';

const TaskListStyles = styled.div`
  width: 100%;
  margin: 0 2px;
  min-height: 300px;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 8px;
    white-space: nowrap;
  }

  table > * {
    font-size: 1rem;
  }

  thead {
    text-align: left;
    background-color: rgb(7, 141, 211, 0.9);
    color: white;
  }

  th:last-child {
    display: none;
  }

  tr {
    height: 35px;
  }

  th,
  td {
    padding-left: 10px;
  }

  td {
    background-color: rgba(94, 182, 228, 0.3);
    color: black;
  }

  th:nth-child(1) {
    width: 60%;
  }

  td:nth-child(3) {
    background-color: white;
  }
`;

export default TaskListStyles;
