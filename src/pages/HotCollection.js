import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ParamsContext } from "../context/ParamsProvider";
import { FaEthereum } from "react-icons/fa";
import CollectionNav from "./CollectionNav";

const HotCollection = () => {
  const { setUserId } = useContext(ParamsContext);

  const [dataSort, setDataSort] = useState("5m");

  const [floorCollection, setFloorCollection] = useState([]);
  const [hotCollections, setHotCollections] = useState([]);
  const [allHotCollections, setAllHotCollections] = useState([]);
  const [load, setLoad] = useState(6);
  const [show, setShow] = useState(true);

  const handleChange = (event) => {
    const searchValue = event.target.value;

    // allHotCollections.filter((item) => console.log(item));

    const searchedData = allHotCollections.filter((item) => {
      const searchTerm = searchValue.toLocaleLowerCase();
      const collectionName =
        item.collection?.collectionName?.toLocaleLowerCase();
      return searchTerm && collectionName.startsWith(searchTerm);
    });

    if (searchValue.length > 0) {
      setHotCollections(searchedData);
    } else {
      setHotCollections(allHotCollections);
    }

    console.log(searchedData);
  };

  useEffect(() => {
    fetch("https://api.reservoir.tools/collections/v5?sortBy=floorAskPrice")
      .then((res) => res.json())
      .then((data) => setFloorCollection(data.collections));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.nftgo.io/api/v1/analytics/top-mints?timeRange=${dataSort}&suspiciousFilter=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setHotCollections(data.data);
        setAllHotCollections(data.data);
      });
  }, [dataSort]);

  const handleLoadMore = () => {
    setLoad(load + 6);
  };
  useEffect(() => {
    if (load >= floorCollection.length) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [load]);

  console.log("hotts", hotCollections);

  return (
    <div>
      <div className="container my-5 ">
        <h2 className="mt-5 text-center  py-5">Hot Mints</h2>
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
                <th scope="col">Mints({dataSort})</th>
                <th scope="col">Notable Minters</th>
                <th scope="col"> Unique Minters</th>
                <th scope="col">Mint Price</th>
                <th scope="col">Total Mints</th>
                <th scope="col">Sales({dataSort})</th>
              </tr>
            </thead>
            <tbody>
              {hotCollections.map((collection, index) => (
                // <tr key={index} className="pointer hover-background">
                //   <th scope="row">{index + 1}</th>
                //   <td
                //   //  onClick={() => setUserId(collection?.primaryContract)}
                //   >
                //     <Link to={`/trending/${collection?.primaryContract}`}>
                //       <img
                //         width={50}
                //         height={50}
                //         className="rounded-circle  me-4"
                //         src={collection.image}
                //         alt=""
                //       />
                //       {collection.name}
                //     </Link>{" "}
                //   </td>
                //   <td>
                //     {" "}
                //     {(collection.volume["allTime"] / 1000).toFixed(2)} k <br />{" "}
                //     <span className="text-success">
                //       {" "}
                //       {(collection.volume["30day"] / 100).toFixed(2)} %
                //     </span>
                //   </td>
                //   <td>
                //     {/* <FaEthereum /> */}
                //     {collection.floorSale["1day"] &&
                //       collection.floorSale["1day"].toFixed(2)}
                //   </td>
                //   <td>{collection.tokenCount}</td>
                // </tr>

                <tr key={index} className="pointer hover-background">
                  <th scope="row">{index + 1}</th>
                  <td
                  //  onClick={() => setUserId(collection?.primaryContract)}
                  >
                    <Link
                      to={`/trending/${collection.collection?.contractAddress}`}
                    >
                      <img
                        width={50}
                        height={50}
                        className="rounded-circle  me-4"
                        src={collection.collection?.logo}
                        alt=""
                      />
                      {collection.collection?.collectionName}
                    </Link>{" "}
                  </td>
                  <td>
                    <div>
                      {collection.mints}
                      <div>{(collection.mintsChange * 100).toFixed(2)}%</div>
                    </div>
                  </td>
                  <td>
                    <div>{collection.notableMinterNum}</div>
                  </td>
                  <td>
                    <div>
                      {collection.uniqueMinterNum}
                      <span className="ms-2">
                        (
                        {(
                          (collection.uniqueMinterNum / collection.totalMints) *
                          100
                        ).toFixed(2)}
                        %)
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <FaEthereum />{" "}
                      {collection.latestMintPriceInETH.toFixed(4)}
                      <div>
                        <span className="me-2">floor</span>
                        <span>
                          <FaEthereum />
                          {collection.floorPriceInETH
                            ? collection.floorPriceInETH
                            : 0}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{collection.totalMints}</div>
                  </td>
                  <td>
                    <div>
                      {collection.sales}
                      <div>
                        {collection.salesChange
                          ? (collection.salesChange * 100).toFixed(2)
                          : 0}
                        %
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HotCollection;
