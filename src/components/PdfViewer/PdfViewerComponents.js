import styled from 'styled-components';

export const BlockContainer = styled.div`
  padding-top: ${(props) => props.paddingTop || '10px'};
`;

export const PageContainer = styled.div`
  padding: ${(props) => props.padding || '20px'};
  background-color: white;
`;

export const InlineContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin: ${(props) => props.margin || 0};
`;

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'initial'};
  min-height: 45px;
  border-bottom: ${(props) => props.borderBottom || '1px solid #ddd'};
  background-color: ${(props) => props.backgroundColor || 'inherit'};
  padding: ${(props) => props.padding || '4px'};
`;

export const NavButton = styled.button`
  padding: 5px;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background-color: inherit;
  height: ${(props) => props.height || '34px'};
  width: ${(props) => props.width || '34px'};
  margin: ${(props) => props.margin || 0};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hover || '#e7e7e7'};
    cursor: pointer;

    span {
      visibility: visible;
    }
  }
`;

export const PageInput = styled.input`
  padding: 3px 6px;
  line-height: 1.35;
  border: 1px solid #cccccc;
  border-radius: 2px;
  width: 50px;
  margin: ${(props) => props.margin || 0};
`;

export const ToggleSpan = styled.span`
  font-size: 13.5px;
  cursor: pointer;
  color: #0069ba;
  &:hover {
    text-decoration: underline;
  }
`;

export const TotalPages = styled.div`
  font-size: 14px;
  margin: ${(props) => props.margin || 0};
`;

export const ZoomDropdown = styled.select`
  width: 100px;
  padding: 3px 6px;
  line-height: 1.35;
  border: 1px solid #cccccc;
  border-radius: 2px;
  margin: ${(props) => props.margin || 0};
`;

export const Table = styled.table`
  width: 100%;
  background-color: rgba(94, 182, 228, 0.3);
  border-collapse: collapse;
`;

export const THead = styled.thead`
  text-align: left;
  border-bottom: 1px solid white;
`;

export const THeader = styled.th`
  padding: 5px 5px;
  width: 50%;
`;

export const TData = styled.td`
  text-align: left;
  padding: 5px 5px;
`;
