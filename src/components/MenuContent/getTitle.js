export function getTitle(title) {
  return title
    .split(' ')
    .map(ti => ti[0].toUpperCase() + ti.slice(1))
    .join(' ');
}
