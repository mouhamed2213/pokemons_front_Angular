export interface Pokemons {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: string[];
  created: Date;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
