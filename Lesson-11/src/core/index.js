export const initialState = {
  filterText: '',
  titles: [
    'Star Wars: The Force Awakens',
    'The Hobbit',
    'The Lord of the Rings',
    'Star Trek',
  ]
}

export function changeFilterText(state, filterText) {
  return Object.assign({}, state, {
    filterText
  });
}

