export type ListMangaQueries = {
  q: string
  type: PopularMangaType
}

export enum PopularMangaType {
  ALL = 'all',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly'
}