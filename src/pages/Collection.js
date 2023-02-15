import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/blog/09.jpg";

const Collection = () => {
  const [collections, setCollection] = useState([]);
  const [load, setLoad] = useState(6);
  const [show, setShow] = useState(true);
  console.log(collections.length);

  useEffect(() => {
    fetch("https://api.reservoir.tools/collections/v5")
      .then((res) => res.json())
      .then((data) => setCollection(data.collections));
  }, []);
  const handleLoadMore = () => {
    setLoad(load + 6);
  };
  useEffect(() => {
    if (load >= collections.length) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [load]);

  return (
    <div>
      {/* <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.514)",
          margin: "80px 0",
        }}
      >
      
      </div> */}

      <div className="container my-5 ">
        <h2 className="mt-5 text-center  py-5">Trending Collections</h2>
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
              {collections
                // .slice(0, load)
                .reverse()
                .map((collection, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <Link to={`/item/${collection?.primaryContract}`}>
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
                      {collection.volume["1day"].toFixed(2)} k <br />{" "}
                      <span className="text-success">
                        {" "}
                        {(collection.volume["30day"] / 100).toFixed(2)} %
                      </span>
                    </td>
                    <td> {collection.floorSale["1day"].toFixed(2)} </td>
                    <td>@mdo</td>
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

export default Collection;
