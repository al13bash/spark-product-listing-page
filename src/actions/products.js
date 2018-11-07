export const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = (colorId, productId) => {
  return {
    type: CHANGE_COLOR,
    colorId,
    productId
  }
}
