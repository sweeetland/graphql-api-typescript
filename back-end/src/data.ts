const actors = [
  {
    id: 1,
    name: 'Actor 1',
    birthday: '1953-12-12',
    country: 'US',
    directors: [1],
    movies: [1]
  },
  {
    id: 2,
    name: 'Actor 2',
    birthday: '1954-05-24',
    country: 'US',
    directors: [1],
    movies: [1]
  },
  {
    id: 3,
    name: 'Actor 3',
    birthday: '1955-08-22',
    country: 'US',
    directors: [1],
    movies: [2]
  }
]

const directors = [
  {
    id: 1,
    name: 'Director 1',
    birthday: '1959-01-28',
    country: 'US',
    moviesDirected: [1, 2]
  }
]

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    year: '1994',
    rating: 9.3,
    actors: [1, 2],
    directors: [1]
  },
  {
    id: 2,
    title: 'Movie 2',
    year: '2011',
    rating: 7.8,
    actors: [3],
    directors: [1]
  }
]

export const data = { actors, directors, movies }
