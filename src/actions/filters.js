export const CHANGE_FILTERS = 'CHANGE_FILTERS';

export const changeFilters = (payload) => {
  return {
    type: CHANGE_FILTERS,
    payload
  }
}
