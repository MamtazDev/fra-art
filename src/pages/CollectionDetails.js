import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import twitter from "../assets/images/Twitter.svg";
import ether from "../assets/images/etherscan-logo-circle.svg";
import { ParamsContext } from "../context/ParamsProvider";
import { FaEthereum } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import {MdShoppingCart} from 'react-icons/md';
const CollectionDetails = () => {
  const { id } = useParams();
  // const { userId } = useContext(ParamsContext);

  const [collections, setCollections] = useState([]);
  const [collectionsAll, setCollectionsAll] = useState({});

  const [collection, setCollection] = useState([]);
  const [visible, setVisible] = useState(false);
  const [attribute, setAttribute] = useState([]);

  const [customAttribues, setCustomAttribute] = useState([]);
  const [searchAtt, setSearchAtt] = useState([]);
  const [myPublicAddress, setMyPublicAddress] = useState("qhut0...hfteh45");

  // const volumeHandler = (e) => {
  //   console.log("Input value", e.target.value);
  //   const valN = e.target.value;
  //   const vluSrt = collectionsAll.filter((item) =>
  //     JSON.stringify(item.collection?.volume?.allTime).includes(valN)
  //   );
  //   setCollections(vluSrt);
  //   // parseInt(item?.volume?.allTime) === valN
  //   console.log(vluSrt);
  // };

  const nameHandler = (e) => {
    console.log("Input value", e.target.value);
    const valN = e.target.value;
    const vluSrt = collectionsAll.filter((item) =>
      item.token?.name.toLowerCase().includes(valN)
    );
    setCollections(vluSrt);
    // parseInt(item?.volume?.allTime) === valN
    console.log(vluSrt);
  };

  const isMetaMaskInstalled = useCallback(() => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  }, []);

  const _handleConnectWallet = useCallback(async () => {
    const modal = document.getElementById("modal-metamask");

    if (!isMetaMaskInstalled()) {
      modal.classList.add("show");
      modal.style.display = "block";
      return;
    }
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const walletAddress =
        accounts[0].split("").slice(0, 6).join("") +
        "..." +
        accounts[0]
          .split("")
          .slice(accounts[0].length - 7, accounts[0].length)
          .join("");
      setMyPublicAddress(walletAddress);
    } catch (error) {
      console.error(error);
    }
  }, [isMetaMaskInstalled]);

  const handleAttribute = (keys, values) => {
    if (searchAtt.length > 0) {
      searchAtt.map((item) => {
        if (item.keys === keys) {
          item.values = values;
          let x = [...searchAtt];
          // console.log(x);
          return setSearchAtt(x);
        } else {
          return setSearchAtt([...searchAtt, { keys, values }]);
        }
      });
    } else {
      setSearchAtt([...searchAtt, { keys, values }]);
    }
  };

  console.log(searchAtt, "gggg");

  const handleCross = (keys, values) => {
    const updateAtt = searchAtt.filter((item) => item.keys !== keys);
    setSearchAtt(updateAtt);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.reservoir.tools/tokens/v5?collection=${id}&sortBy=floorAskPrice&sortDirection=asc&includeTopBid=false&includeAttributes=true&includeDynamicPricing=true&normalizeRoyalties=true`
      )
      .then(
        (response) => {
          setCollections(response.data.tokens);
          setCollectionsAll(response.data.tokens);
        }
        // setCollections(response.data.collections);
      );
  }, []);

  useEffect(() => {
    fetch(`https://api.reservoir.tools/collections/v5?id=${id}`)
      .then((res) => res.json())
      .then((data) => setCollection(data.collections));

    // attribute
  }, []);

  useEffect(() => {
    fetch(`https://api.reservoir.tools/collections/${id}/attributes/all/v2`)
      .then((response) => response.json())
      .then((response) => setCustomAttribute(response.attributes))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`
    https://api.reservoir.tools/collections/${id}/attributes/explore/v4`)
      .then((res) => res.json())
      .then((data) => setAttribute(data.attributes));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.reservoir.tools/tokens/v5?collection=${id}&sortBy=floorAskPrice&sortDirection=asc&includeTopBid=false&includeAttributes=true&includeDynamicPricing=true&normalizeRoyalties=true&${searchAtt
        .map((atri) => `attributes%5B${atri.keys}%5D=${atri.values}`)
        .join("&")} `
    )
      .then((res) => res.json())
      .then((data) => setCollections(data.tokens));
  }, [searchAtt]);

  useEffect(() => {}, [collections]);
  // console.log("collec", collections);

  console.log("collection", collection);
  return (
    <div>
      {/* <div
        style={{
          backgroundImage: `url(${collection[0]?.banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.685)",
          margin: "80px 0",
        }}
      >
        <div className="text-center py-3">
          <img
            width={100}
            className="rounded-circle"
            src={collection[0]?.image}
            alt=""
          />
          <h2 className="mt-2">{collection[0]?.name}</h2>
          <div className="d-flex justify-content-center mb-3">
            <Link to={"https://twitter.com/" + collection[0]?.twitterUsername}>
              <img className="me-3" width={30} src={twitter} alt="" />
            </Link>
            <Link to={collection[0]?.discordUrl}>
              <img className="me-3" width={30} src={ether} alt="" />
            </Link>
            <Link to={collection[0]?.externalUrl}>
              <i className="fs-3 text-black fa-solid fa-globe"></i>
            </Link>
          </div>
          <div className=" w-50 mx-auto bg-white px-5 py-2 rounded mb-3">
            <div className="row g-5">
              <div className="col-6 col-lg-3">
                <h6>{collection[0]?.tokenCount}</h6>
                <p className="text-secondary p-0 m-0">items</p>
              </div>
              <div className="col-6 col-lg-3">
                <h6>
                  🥈💸{" "}
                  {Math.max(
                    collection[0]?.floorSale["1day"],
                    collection[0]?.floorSale["7day"],
                    collection[0]?.floorSale["30day"]
                  )}
                </h6>
                <p className="text-secondary p-0 m-0">top offer</p>
              </div>
              <div className="col-6 col-lg-3">
                <h6>💸 {collection[0]?.floorAsk?.price?.amount?.decimal}</h6>
                <p className="text-secondary p-0 m-0">floor</p>
              </div>
              <div className="col-6 col-lg-3">
                <h6>
                  💸 {(collection[0]?.volume?.allTime / 1000).toFixed(2)}k
                </h6>
                <p className="text-secondary p-0 m-0">total volume</p>
              </div>
            </div>
          </div>

          {visible ? (
            <p className="w-50 mx-auto fw-bold">{collection[0]?.description}</p>
          ) : (
            <p className="w-50 mx-auto fw-bold">
              {collection[0]?.description &&
                collection[0]?.description.slice(0, 300)}
            </p>
          )}
          <p
            className={
              collection[0]?.description &&
              collection[0]?.description.length < 300
                ? "d-none"
                : "d-block"
            }
            onClick={() => setVisible(!visible)}
          >
            <i className="fa-solid fa-angle-down"></i>
          </p>
        </div>
      </div> */}

      <section style={{ marginTop: "60px" }}>
        <div
          style={{
            backgroundImage: `url(${collection[0]?.banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // backgroundBlendMode: "overlay",
            backgroundColor: "rgba(255, 255, 255, 0.685)",
            height: "200px",
          }}
        ></div>

        <div style={{ marginTop: "-70px" }} className="container ">
          {" "}
          <img
            width={100}
            className="rounded-circle border border-5 "
            src={collection[0]?.image}
            alt=""
          />
        </div>

        <div className="container">
          <section className="d-flex flex-column flex-lg-row align-items-center gap-5">
            <div className="d-flex flex-column w-50">
              <h2>{collection[0]?.name}</h2>
              <p className="small-text">{collection[0]?.description}</p>
            </div>

            <div className="w-50 px-3 py-3">
              <div className="row g-4 ">
                <div className="col-12 col-lg-3 border rounded-start py-3 text-center">
                  <p className="text-secondary p-0 m-0">Floor Price</p>
                  <h6>
                    {" "}
                    <FaEthereum />
                    {collection[0]?.floorAsk?.price?.amount?.decimal}
                  </h6>
                </div>
                <div className="col-12 col-lg-3 border  py-3 text-center">
                  <p className="text-secondary p-0 m-0">Total volume</p>
                  <h6>
                    <FaEthereum />
                    {(collection[0]?.volume?.allTime / 1000).toFixed(2)}k
                  </h6>
                </div>
                <div className="col-12 col-lg-3 border  py-3 text-center">
                  <p className="text-secondary p-0 m-0">Items</p>
                  <h6>{collection[0]?.tokenCount}</h6>
                </div>
                <div className="col-12 col-lg-3 border rounded-end py-3 text-center">
                  <p className="text-secondary p-0 m-0">Top Offer</p>
                  <h6>
                    {/* 🥈💸{" "} */}
                    {Math.max(
                      collection[0]?.floorSale["1day"],
                      collection[0]?.floorSale["7day"],
                      collection[0]?.floorSale["30day"]
                    )}
                  </h6>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="py-5 my-5 px-4">
        <div className="row g-5">
          <div className="col-12 col-lg-3">
            <h2>Filter</h2>

            {/* accordion with collection api */}
            {/* <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Name
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <input
                      className="w-100 py-2 mb-5 px-4"
                      type="text"
                      onChange={(e) => nameHandler(e)}
                      // onChange={(e) => setFilteredData(e.target.value)}
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Volume
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <input
                      className="w-100 py-2 mb-5 px-4"
                      type="text"
                      // onChange={(e) => volumeHandler(e)}
                      // onChange={(e) => setFilteredData(e.target.value)}
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div> */}

            {/* accordion with attribute api */}
            <div className="accordion " id="accordionExample">
              {customAttribues &&
                customAttribues.map((item, index) => (
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={"heading" + index}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapse" + index}
                        aria-expanded="false"
                        aria-controls={"collapse" + index}
                      >
                        {item.key}
                      </button>
                    </h2>
                    <div
                      id={"collapse" + index}
                      className="accordion-collapse collapse"
                      aria-labelledby={"heading" + index}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body pointer">
                        {item.values?.map((subItem) => (
                          <p
                            onClick={() =>
                              handleAttribute(item.key, subItem.value)
                            }
                          >
                            {subItem.value} - {subItem.count}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* data from user collection */}

          {/* <div>hello</div> */}

          <div className="col-12 col-lg-9">
            {/* <h1>Data from user collection api: {id}</h1> */}
            <div className="d-flex gap-2 mb-3">
              {searchAtt
                .filter(
                  (obj, index, self) =>
                    index === self.findIndex((t) => t.keys === obj.keys)
                )
                .map((item, idx) => (
                  <div className="border p-2 px-3 rounded-pill bg-light d-flex gap-3">
                    <p className="m-0">
                      {" "}
                      {item.keys} {item.values}
                    </p>{" "}
                    <p
                      className="m-0 pointer"
                      onClick={() => handleCross(item.keys, item.values)}
                    >
                      x
                    </p>
                  </div>
                ))}
            </div>
            <div>
              <div className="row g-0 gap-0">
                {/* {collections && collection.length === 0 && (
                  <div>
                    <h1 className="text-danger text-center">
                      No item available in this collection
                    </h1>
                  </div>
                )} */}
                {collections && collections.length > 0 ? (
                  collections
                    // ?.filter((item) => {
                    //   return filteredData.toLowerCase() === ""
                    //     ? item
                    //     : (
                    //         item.collection?.name.toLowerCase() ||
                    //         JSON.stringify(item.collection?.volume?.allTime)
                    //       ).includes(filteredData);
                    // })
                    .map((collection, index) => (
                      // console.log(collection, "gggg")
                      <div
                        className="col-12 col-md-6 col-lg-3 card "
                        key={index}
                      >
                        <div className="border  m-1 box position-relative">
                          <Link
                            to={`/trendingDetails/${collection.token?.collection?.id}/${collection.token.tokenId}`}
                          >
                            <div className="card__box">
                              <div className="main">
                                <img
                                  className="parent_img w-100"
                                  src={collection.token?.image}
                                  alt=""
                                />
                                <MdShoppingCart className="cart_icon"/>
                                <p className="bg-white p-2 rounded">0.0222</p>
                                <div className="w-100 card_bottom px-4 d-flex justify-content-between align-items-center">
                                  <div className="small-img">
                                    <img
                                      className="rounded-circle"
                                      width={30}
                                      src={collection.token?.image}
                                      alt=""
                                    />
                                  </div>
                                  <div
                                    style={{ height: "25px", width: "25px" }}
                                    className="text-center bg-success  rounded-circle"
                                  >
                                    <AiOutlineStar className="text-secondary fw-bold" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                          <div className="text-center mt-2 ">
                            <div className="d-flex px-2 mt-4">
                              <p className="fw-bold mb-0">
                                {" "}
                                #{collection.token?.rarity}
                              </p>
                              {/* <p>{collection.token?.name}</p>{" "} */}
                            </div>
                            <div className="d-flex justify-content-between px-2">
                              <p>Last Price</p>
                              <p className="text-start ms-4">
                                <FaEthereum />
                                {
                                  collection.market?.floorAsk?.price?.amount
                                    ?.decimal
                                }
                              </p>
                            </div>
                            <div class="d-flex align-items-center">
                              <a
                                href="#!"
                                class="w-100  text-primary fw-bold text-center pb-3"
                                onClick={_handleConnectWallet}
                                id="connectWallet"
                              >
                                <BsLightningChargeFill className="me-2" />
                                Buy Now
                              </a>
                            </div>
                          </div>
                          {/* <div className="text-center mt-2">
                            <div className="d-flex justify-content-around">
                              <p>{collection.token?.name}</p>{" "}
                              <p className="border rounded px-2">
                                {" "}
                                {collection.token?.rarity}
                              </p>
                            </div>
                            <p className="text-start ms-4">
                              <FaEthereum />
                              {
                                collection.market?.floorAsk?.price?.amount
                                  ?.decimal
                              }
                            </p>
                            <div>
                              <button type="">Buy Now</button>
                            </div>
                          </div> */}
                          {/* <li className="list-inline-item mb-0 me-3">
                            <p
                              id="connectWallet"
                              onClick={_handleConnectWallet}
                            >
                              <span className="btn-icon-dark">
                                <span className="btn btn-icon btn-pills btn-primary">
                                  <i className="uil uil-wallet fs-6"></i>
                                </span>
                              </span>
                              <span className="btn-icon-light">
                                <span className="btn btn-icon btn-pills btn-light">
                                  <i className="uil uil-wallet fs-6"></i>
                                </span>
                              </span>
                            </p>
                          </li> */}
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="mt-5">
                    <h1 className="text-danger text-center">
                      No item available in this collection
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* data from attribute */}
          {/* <div className="col-12 col-lg-9">
            <h1>Data from attributes api: {id}</h1>
            <div>
              <div className="row g-5">
                {attribute.length === 0 && (
                  <div>
                    <h1 className="text-danger text-center">
                      No item available in this collection
                    </h1>
                  </div>
                )}
                {attribute.length > 0 &&
                  attribute
                    ?.filter((item) => {
                      return filteredData.toLowerCase() === ""
                        ? item
                        : item.key.toLowerCase().includes(filteredData);
                    })
                    .map((att, index) => (
                      <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <Link to={`/trendingDetails/${index}`}>
                          {att.sampleImages.map((pic, index) => (
                            <img
                              key={index}
                              className="w-100 my-2"
                              src={pic}
                              alt=""
                            />
                          ))}
                        </Link>
                        <p className="text-center">
                          {att.key} <br />
                          {att.value}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
