export interface FormInputList {
  title: string;
  description: string;
  category: "Movie" | "Anime" | "TV Series";
}

export interface FormInputItem {
  title: string;
  description: string;
  genre: string;
  status: "Watched" | "Planning to Watch" | "Watching";
  rating?: number;
  watchlist: number;
  review?: string;
}
