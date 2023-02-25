import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ParamsContext } from "../context/ParamsProvider";
import { FaEthereum } from "react-icons/fa";
import CollectionNav from "./CollectionNav";

const Collection = () => {
  const { setUserId } = useContext(ParamsContext);

  const [collections, setCollection] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [allNewCollections, setAllNewCollections] = useState([]);
  const [dataSort, setDataSort] = useState("1h");

  const [load, setLoad] = useState(6);
  const [show, setShow] = useState(true);

  const handleChange = (event) => {
    const searchValue = event.target.value;

    const searchedData = allNewCollections.filter((item) => {
      const searchTerm = searchValue.toLocaleLowerCase();
      const collectionName = item.collection?.name.toLocaleLowerCase();
      return searchTerm && collectionName.startsWith(searchTerm);
    });

    if (searchValue.length > 0) {
      setNewCollections(searchedData);
    } else {
      setNewCollections(allNewCollections);
    }

    console.log(searchedData);
  };

  useEffect(() => {
    fetch("https://api.reservoir.tools/collections/v5")
      .then((res) => res.json())
      .then((data) => setCollection(data.collections));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.nftgo.io/api/v1/ranking/trending-collections?sortby=saleNum&asc=-1&offset=0&limit=100&range=${dataSort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNewCollections(data?.data?.list);
        setAllNewCollections(data?.data?.list);
      });
  }, [dataSort]);

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

  // console.log("okCollection", collections);

  return (
    <div>
      <div className="container custom__container  my-5 ">
        <h2 className="mt-5 text-center  py-5">All Collection</h2>
        <CollectionNav></CollectionNav>

        {/* data sorting navbar start */}
        <div className="d-flex justify-content-between">
          <div>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
          </div>
          <div className="border d-flex gap-3 align-items-center px-3 bg-light rounded pointer">
            <div
              onClick={() => setDataSort("5m")}
              className={
                dataSort === "5m" && "bg-primary p-1 rounded text-light"
              }
            >
              5Min
            </div>
            <div
              onClick={() => setDataSort("10m")}
              className={
                dataSort === "10m" && "bg-primary p-1 rounded text-light"
              }
            >
              10Min
            </div>
            <div
              onClick={() => setDataSort("30m")}
              className={
                dataSort === "30m" && "bg-primary p-1 rounded text-light"
              }
            >
              30Min
            </div>
            <div
              onClick={() => setDataSort("1h")}
              className={
                dataSort === "1h" && "bg-primary p-1 rounded text-light"
              }
            >
              1H
            </div>
            <div
              onClick={() => setDataSort("6h")}
              className={
                dataSort === "6h" && "bg-primary p-1 rounded text-light"
              }
            >
              6H
            </div>
            <div
              onClick={() => setDataSort("12h")}
              className={
                dataSort === "12h" && "bg-primary p-1 rounded text-light"
              }
            >
              12H
            </div>
            <div
              onClick={() => setDataSort("24h")}
              className={
                dataSort === "24h" && "bg-primary p-1 rounded text-light"
              }
            >
              24H
            </div>
          </div>
        </div>
        {/* data sorting navbar end */}

        <div className="row g-5">
          <table className="table caption-top">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Collection</th>
                <th scope="col">Floor Price</th>
                <th scope="col"> Volume({dataSort})</th>
                <th scope="col"> Sales({dataSort})</th>
                <th scope="col">Holders</th>
                <th scope="col">Listed</th>
              </tr>
            </thead>
            {/* <tbody>
              {collections
                // .slice(0, load)
                .sort((a, b) => b.floorSale["1day"] - a.floorSale["1day"])
                .map((collection, index) => (
                  <tr key={index} className="pointer hover-background">
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
            </tbody> */}

            {/* collection list */}
            <tbody>
              {newCollections.map((collection, index) => {
                return (
                  <tr key={index} className="pointer hover-background">
                    <th scope="row">{index + 1}</th>
                    <td
                    // onClick={() => setUserId(collection?.primaryContract)}
                    >
                      <Link
                        to={`/trending/${collection.collection?.collTags?.contract}`}
                      >
                        <img
                          width={50}
                          height={50}
                          className="rounded-circle  me-4"
                          src={collection.collection?.logo}
                          alt=""
                        />

                        {collection.collection?.name}
                      </Link>{" "}
                    </td>
                    <td>
                      <div>
                        <FaEthereum />
                        {collection.floorPrice?.tokenPrice}
                        <div>
                          {(collection.floorPriceChange * 100).toFixed(3)}%
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <FaEthereum />
                        {collection.volumeEth.toFixed(2)}
                        <div>
                          {(collection.volumeEthChange * 100).toFixed(2)}%
                        </div>
                      </div>
                    </td>
                    <td>
                      {collection.saleNum}
                      <div>{(collection.saleNumChange * 100).toFixed(2)}%</div>
                    </td>
                    <td>{collection.holderNum}</td>
                    <td>
                      {(
                        (collection.listingNum / collection.supply) *
                        100
                      ).toFixed(2)}
                      %
                    </td>
                  </tr>
                );
              })}
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
