import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopCollection = () => {
  const [volumeCollection, setVolumeCollection] = useState([]);

  const [load, setLoad] = useState(6);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://api.reservoir.tools/collections/v5?sortBy=allTimeVolume")
      .then((res) => res.json())
      .then((data) => setVolumeCollection(data.collections));
  }, []);
  const handleLoadMore = () => {
    setLoad(load + 6);
  };
  useEffect(() => {
    if (load >= volumeCollection.length) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [load]);
  return (
    <div>
      <div className="container my-5 ">
        <h2 className="mt-5 text-center  py-5">Top Collection</h2>
        <div className="row g-5">
          <table className="table caption-top">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Collection</th>
                <th scope="col">Volume</th>
                <th scope="col"> Floor Price</th>
                <th scope="col">Supply</th>
              </tr>
            </thead>
            <tbody>
              {volumeCollection
                // .slice(0, load)
                .reverse()
                .map((collection, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <Link to={`/trending/${collection?.primaryContract}`}>
                        <img
                          width={50}
                          className="rounded-circle  me-4"
                          src={collection.image}
                          alt=""
                        />
                        {collection.name}
                      </Link>{" "}
                    </td>
                    <td>
                      {" "}
                      {(collection.volume["allTime"] / 1000).toFixed(2)} k{" "}
                      <br />{" "}
                      <span className="text-success">
                        {" "}
                        {(collection.volume["30day"] / 100).toFixed(2)} %
                      </span>
                    </td>
                    <td>
                      {" "}
                      {collection.floorSale["1day"] &&
                        collection.floorSale["1day"].toFixed(2)}{" "}
                    </td>
                    <td>{collection.tokenCount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {show && (
            <button onClick={handleLoadMore} type="">
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
