import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useState } from "react";

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

const Giphy = ({ word }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      if (word) {
        const { data } = await gf.search(word, { limit: 20, sort: 'relevant'});
        setGifs(data);
      }
    };
    fetchGifs();
  }, [word]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.fixed_height.url}
          alt={gif.title}
          style={{ margin: "5px" }}
        />
      ))}
    </div>
  );
};

export default Giphy;
