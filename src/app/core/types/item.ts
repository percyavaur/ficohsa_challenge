export interface Item {
  title: string;
  title_english: string;
  title_japanese: string;
  synopsis: string;
  duration: string;
  episodes: number;
  year: number;
  score: number;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };
  };
}
