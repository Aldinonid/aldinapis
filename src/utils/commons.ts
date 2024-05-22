export const slugify = (slug: string): string => slug.split(' ').join('-').toLowerCase()

export const lowerCaseCompare = (string1: string, string2: string): boolean => string1.toLocaleLowerCase() === string2.toLocaleLowerCase()

export const toCamelCase = (str: string): string => str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
  return index == 0 ? word.toLowerCase() : word.toUpperCase();
}).replace(/\s+/g, '');