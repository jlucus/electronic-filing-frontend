export function cleanUpSubmit(info, entity_id) {
  // backend expects one or more of these to be true
  ['firm', 'org', 'expenditure'].forEach(
    (elem) => (info[`entity_${elem}`] = info.lobbyist.includes(elem))
  );

  console.log(entity_id);
  // need to include the id
  info['entity_id'] = entity_id;

  // don't need lobbyist info since we got it above
  delete info.lobbyist;

  return info;
}
