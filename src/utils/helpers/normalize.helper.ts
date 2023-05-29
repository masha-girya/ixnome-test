export function normalizeTd(td: string) {
  if (td === 'id') {
    return 'ID';
  }

  const capitalIndex = td.lastIndexOf('A');

  return capitalIndex > 0
    ? `${td[0].toUpperCase()}${td.slice(1, capitalIndex)} ${td.slice(capitalIndex)}`
    : `${td[0].toUpperCase()}${td.slice(1)}`;
}
