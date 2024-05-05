export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const trimDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }
  return description;
};
