import { requests } from "../core/axiosAgent";

const searchAnime = (searchText: string, limit: number) =>
  requests.get(`anime?q=${searchText}&sfw&limit=${limit}`);

const getAnimeById = (id: number) => requests.get(`anime/${id}/full`);

const animeServices = {
  searchAnime,
  getAnimeById,
};

export default animeServices;
