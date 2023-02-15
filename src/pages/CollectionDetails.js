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

  useEffect(() => {
    console.log("id", id);

    axios
      .get(`https://api.reservoir.tools/users/${id}/collections/v2`)
      .then((response) => {
        setCollections(response.data.collections);
        // setFilteredData(response.data.collections);
      });
  }, []);

  useEffect(() => {
    console.log("id", id);

    fetch(`https://api.reservoir.tools/collections/v5?id=${id}`)
      .then((res) => res.json())
      .then((data) => setCollection(data.collections));
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = collections.filter((data) => {
      return data.collections.name.search(value) != -1;
    });
    setFilteredData(result);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${collection[0]?.banner},
    )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "550px",
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
            <Link to={collection[0]?.twitterUsername}>
              <img className="me-3" width={30} src={twitter} alt="" />
            </Link>
            <Link to={collection[0]?.discordUrl}>
              <img className="me-3" width={30} src={ether} alt="" />
            </Link>
            <Link to={collection[0]?.externalUrl}>
              <i class="fs-3 text-black fa-solid fa-globe"></i>
            </Link>
          </div>
          <div className="w-50 mx-auto bg-white px-5 py-2 rounded mb-3">
            <div className="row">
              <div className="col-3">
                <h6>{collection[0]?.tokenCount}</h6>
                <p className="text-secondary p-0 m-0">items</p>
              </div>
              <div className="col-3">
                <h6>🥈💸 {collection[0]?.tokenCount}</h6>
                <p className="text-secondary p-0 m-0">top offer</p>
              </div>
              <div className="col-3">
                <h6>💸 {collection[0]?.floorSale["1day"]}</h6>
                <p className="text-secondary p-0 m-0">floor</p>
              </div>
              <div className="col-3">
                <h6>💸 {collection[0]?.volume?.allTime}</h6>
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
          <div className="col-3">
            <h2>Filter</h2>
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
            </div>
          </div>
          <div className="col-9">
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
                      : item.collection?.name
                          ?.toLowerCase()
                          .includes(filteredData);
                  })
                  .map((collection, index) => (
                    <div className="col-3" key={index}>
                      <Link to={`/details/${collection.collection.id}`}>
                        <img
                          className="w-100"
                          src={collection.collection.image}
                          alt=""
                        />
                      </Link>
                      <p className="text-center">
                        {collection.collection.name}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
