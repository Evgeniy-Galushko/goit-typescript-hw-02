import axios from "axios";
import { Data } from "./components/App/App.types";

export default async function requestAp(
  textSearch: string,
  pages: number
): Promise<Data> {
  const savedQuery = await axios.get<Data>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: "gTIaBrNroRq-C3Cc0c230WokBG-ut0gZc17PvdScx8I",
        query: `${textSearch}`,
        per_page: 12,
        page: `${pages}`,
      },
    }
  );
  return savedQuery.data;
}
