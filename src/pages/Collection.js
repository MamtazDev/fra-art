import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ParamsContext } from "../context/ParamsProvider";
import { FaEthereum } from "react-icons/fa";

const Collection = () => {
  const { setUserId } = useContext(ParamsContext);

  const [collections, setCollection] = useState([]);

  const [load, setLoad] = useState(6);
  const [show, setShow] = useState(true);

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

  console.log("okCollection", collections);

  return (
    <div>
      <div className="container my-5 ">
        <h2 className="mt-5 text-center  py-5">All Collection</h2>
        <div className="row g-5">
          <table className="table caption-top">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Collection</th>
                <th scope="col">Volume</th>
                <th scope="col"> Price</th>
                <th scope="col"> Sales</th>
                <th scope="col">Supply</th>
              </tr>
            </thead>
            <tbody>
              {collections
                // .slice(0, load)
                .sort((a, b) => b.floorSale["1day"] - a.floorSale["1day"])
                .map((collection, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td
                    // onClick={() => setUserId(collection?.primaryContract)}
                    >
                      <Link to={`/trending/${collection?.primaryContract}`}>
                        <img
                          width={50}
                          height={50}
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
                        {(
                          (collection.volume["30day"] -
                            collection.volume["1day"]) /
                          100
                        ).toFixed(2)}{" "}
                        %
                      </span>
                    </td>
                    <td>
                      {" "}
                      <FaEthereum />
                      {collection.floorAsk?.price?.amount?.decimal.toFixed(
                        2
                      )}{" "}
                    </td>
                    <td className="d-flex flex-column ">
                      <p className="mb-0">
                        {collection.floorSale["1day"].toFixed(2)}
                      </p>

                      <p className="mb-0">
                        <span
                          className={
                            collection.floorSale["30day"] -
                              collection.floorSale["1day"] >=
                            0
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {" "}
                          {(
                            (collection.floorSale["30day"] -
                              collection.floorSale["1day"]) *
                            100
                          ).toFixed(1)}{" "}
                          %
                        </span>
                      </p>
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

export default Collection;
