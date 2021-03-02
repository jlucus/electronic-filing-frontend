export function processData(rawData, fields, accessors, cellRenders) {
  // gets header and accessor in correct format
  const columns = fields.map((field, i) => {
    return {
      Header: field,
      accessor: accessors[i],
      Cell: ({ value }) =>
        cellRenders && cellRenders[i] ? cellRenders[i](value) : value || null,
    };
  });

  return columns;
}
