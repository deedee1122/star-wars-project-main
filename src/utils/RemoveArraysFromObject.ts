export const removeArraysFromObject = (
  obj: Record<string, any>
): Record<string, any> => {
  const newObj: Record<string, any> = {};

  for (const key in obj) {
    if (!Array.isArray(obj[key])) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};
