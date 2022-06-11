import { requests } from "../core/axiosAgent";

const searchAnime = (searchText: string, limit: number) =>
  requests.get(`anime?q=${searchText}&sfw&limit=${limit}`);

const animeServices = {
  searchAnime,
};

export default animeServices;
