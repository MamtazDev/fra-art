import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import twitter from "../assets/images/Twitter.svg";
import ether from "../assets/images/etherscan-logo-circle.svg";

const CollectionDetails = () => {
  const { id } = useParams();
  const [collections, setCollections] = useState({});
  const [filteredData, setFilteredData] = useState("");
  const [collection, setCollection] = useState({});
  const [visible, setVisible] = useState(false);
  const [attribute, setAttribute] = useState([]);

  const [customAttribues, setCustomAttribute] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.reservoir.tools/users/${id}/collections/v2`)
      .then((response) => {
        setCollections(response.data.collections);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.reservoir.tools/collections/v5?id=${id}`)
      .then((res) => res.json())
      .then((data) => setCollection(data.collections));

    // attribute
    fetch(`https://api.reservoir.tools/collections/${id}/attributes/all/v2`)
      .then((response) => response.json())
      .then((response) => setCustomAttribute(response.attributes))
      .catch((err) => console.error(err));
  }, []);
  console.log("customAtt", customAttribues);
  useEffect(() => {
    fetch(`
    https://api.reservoir.tools/collections/${id}/attributes/explore/v4`)
      .then((res) => res.json())
      .then((data) => setAttribute(data.attributes));
  }, []);
  console.log(attribute);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${collection[0]?.banner},
    )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "550px",
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
              <i class="fs-3 text-black fa-solid fa-globe"></i>
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
              {collection[0]?.description.slice(0, 300)}
            </p>
          )}
          <p
            className={
              collection[0]?.description.length < 300 ? "d-none" : "d-block"
            }
            onClick={() => setVisible(!visible)}
          >
            <i class="fa-solid fa-angle-down"></i>
          </p>
        </div>
      </div>

      <div className="py-5 my-5 px-4">
        <div className="row g-5">
          <div className="col-12 col-lg-3">
            <h2>Filter</h2>
            {/* <ul>
              {customAttribues.map((item) => (
                <li>
                  {item.key}
                  <ul>
                    {item.values.map((subItem) => (
                      <li>
                        {subItem.value} - {subItem.count}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul> */}

            <div class="accordion" id="accordionExample">
              {customAttribues.map((item, index) => (
                <div class="accordion-item">
                  <h2 class="accordion-header" id={"heading" + index}>
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapse" + index}
                      aria-expanded="true"
                      aria-controls={"collapse" + index}
                    >
                      {item.key}
                    </button>
                  </h2>
                  <div
                    id={"collapse" + index}
                    class="accordion-collapse collapse show"
                    aria-labelledby={"heading" + index}
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {item.values.map((subItem) => (
                        <p>
                          {subItem.value} - {subItem.count}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
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
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <input
                      className="w-100 py-2 mb-5 px-4"
                      type="text"
                      onChange={(e) => setFilteredData(e.target.value)}
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button"
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
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <input
                      className="w-100 py-2 mb-5 px-4"
                      type="text"
                      onChange={(e) => setFilteredData(e.target.value)}
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* data from user collection */}
          <div className="col-12 col-lg-9">
            <h1>data from user collection api</h1>
            <div>
              <div className="row g-5">
                {collections.length === 0 && (
                  <div>
                    <h1 className="text-danger text-center">
                      No item available in this collection
                    </h1>
                  </div>
                )}
                {collections.length > 0 &&
                  collections
                    ?.filter((item) => {
                      return filteredData.toLowerCase() === ""
                        ? item
                        : (
                            item.collection?.name.toLowerCase() ||
                            JSON.stringify(item.collection?.volume?.allTime)
                          ).includes(filteredData);
                    })
                    .map((collection, index) => (
                      <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <Link
                          to={`/trendingDetails/${collection.collection.id}`}
                        >
                          <img
                            className="w-100"
                            src={collection.collection.image}
                            alt=""
                          />
                        </Link>
                        <p className="text-center">
                          {collection.collection.name} <br />
                          {collection.collection.volume["allTime"]}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* data from attribute */}
          <div className="col-12 col-lg-9">
            <h1>data from attributes api</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
