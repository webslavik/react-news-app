export const cutText = value => {
  const count = value.split('');

  if (count.length < 200) {
    return value;
  }

  const cutValue = count.splice(0, 200);
  const lastElement = cutValue[cutValue.length -1];

  if (lastElement === ' ') {
    cutValue.pop();
  }
  
  const unitedValue = cutValue.join('');

  return `${unitedValue}...`;
}