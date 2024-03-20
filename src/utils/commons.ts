export const slugify = (slug: string): string => slug.split(' ').join('-').toLowerCase()

export const lowerCaseCompare = (string1: string, string2: string): boolean => string1.toLocaleLowerCase() === string2.toLocaleLowerCase()