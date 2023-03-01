import { useEffect } from "react";
import Choices from "choices.js";

import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  ethereum,
  polygon,
  iconGroup,
  flashIcon,
  labelIcon,
} from "../utils/images.util";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const AuctionData = [
    {
      image: gif1,
      title: "Deep Sea Phantasy",
      id: 1,
      price: 0.4,
      type: "GIFs",
      progress: 50,
      nfts: 1,
      filter: ["all", "games"],
    },
    {
      image: item1,
      title: "CyberPrimal 042 LAN",
      id: 2,
      price: 0.4,
      type: "Arts",
      progress: 5,
      nfts: 1,
      filter: ["all", "art"],
    },
    {
      image: gif2,
      title: "Crypto Egg Stamp #5",
      id: 3,
      price: 0.4,
      type: "Games",
      progress: 75,
      nfts: 1,
      filter: ["all", "music", "meme"],
    },
    {
      image: item2,
      title: "Colorful Abstract Painting",
      id: 4,
      price: 0.4,
      type: "Art",
      progress: 12,
      nfts: 1,
      filter: ["all", "video"],
    },
    {
      image: item3,
      title: "Liquid Forest Princess",
      id: 5,
      price: 0.4,
      type: "",
      progress: 18,
      nfts: 1,
      filter: ["all", "video", "meme"],
    },
    {
      image: gif3,
      title: "Spider Eyes Modern Art",
      id: 6,
      price: 0.4,
      type: "GIFs",
      progress: 25,
      nfts: 1,
      filter: ["all", "games"],
    },
    {
      image: item4,
      title: "Synthwave Painting",
      id: 7,
      price: 0.4,
      type: "",
      progress: 30,
      nfts: 1,
      filter: ["all", "art"],
    },
    {
      image: gif4,
      title: "Contemporary Abstract",
      id: 8,
      price: 0.4,
      type: "GIFs",
      progress: 44,
      nfts: 1,
      filter: ["all", "music"],
    },
    {
      image: item5,
      title: "Valkyrie Abstract Art",
      id: 9,
      price: 0.4,
      type: "",
      progress: 21,
      nfts: 1,
      filter: ["all", "video", "meme"],
    },
    {
      image: gif5,
      title: "The girl with the firefly",
      id: 10,
      price: 0.4,
      type: "",
      progress: 4,
      nfts: 1,
      filter: ["all", "art"],
    },
    {
      image: item6,
      title: "Dodo hide the seek",
      id: 11,
      price: 0.4,
      type: "",
      progress: 18,
      nfts: 1,
      filter: ["all", "games"],
    },
    {
      image: gif6,
      title: "Pinky Ocean",
      id: 12,
      price: 0.4,
      type: "",
      progress: 20,
      nfts: 1,
      filter: ["all", "music"],
    },
  ];

  useEffect(() => {
    new Choices("#filter-type");
    new Choices("#filter-type2");
  }, []);

  return (
    <>
      <section className="bg-half-100 w-100 pb-0 mb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4 className="display-6 text-dark title-dark fw-medium">
                Explore
              </h4>
            </div>
            <div className="col-lg-4">
              {/* <div className="hstack gap-3 justify-content-end">
                <button className="btn btn-soft-primary">
                  <img src={ethereum} style={{ paddingRight: 10 }} alt="" />
                  Ethereum
                </button>
                <button className="btn btn-soft-primary">
                  <img src={polygon} style={{ paddingRight: 10 }} alt="" />
                  Polygon
                </button>
              </div> */}
            </div>
          </div>
          <div className="row g-lg-0 align-items-center">
            <div className="col-lg-3 col-md-6">
              <button className="btn btn-dark">Items</button>
            </div>

            <div className="col-lg-5 col-md-6 ms-auto">
              <div className="hstack gap-3 justify-content-end">
                <div className="w-100 filter-search-form position-relative filter-border">
                  <select
                    className="form-select"
                    data-trigger
                    name="filter-type"
                    id="filter-type"
                    aria-label="Default select example"
                    defaultValue={"All"}
                  >
                    <option value="1">All</option>
                    <option value="2">Start Auction</option>
                    <option value="3">Live Auction</option>
                    <option value="4">Buy Now</option>
                    <option value="5">Recently Sold</option>
                  </select>
                </div>

                <div className="w-100 filter-search-form position-relative filter-border">
                  <select
                    className="form-select"
                    data-trigger
                    name="filter-type2"
                    id="filter-type2"
                    aria-label="Default select example"
                    defaultValue={"Recent"}
                  >
                    <option value="1">Recent</option>
                    <option value="2">Old</option>
                    <option value="3">A-Z</option>
                    <option value="4">Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-4">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            {AuctionData.map((data) => {
              return (
                <div className="col" key={data.title}>
                  <div className="card nft-items rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="d-flex justify-content-between">
                      <div className="img-group">
                        <a href="/" className="user-avatar">
                          <span className="badge badge-link bg-dark2">
                            <img
                              src={iconGroup}
                              alt="user"
                              width={15}
                              className="avatar-sm-sm rounded-circle"
                            />
                            <span style={{ marginLeft: 10, fontWeight: 600 }}>
                              1
                            </span>
                          </span>
                        </a>
                      </div>
                      <img
                        src={ethereum}
                        style={{ marginLeft: "5px" }}
                        alt=""
                      />
                    </div>

                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <Link to={`/marketplace/details/${data.id}`}>
                        <img src={data.image} className="img-fluid" alt="" />
                      </Link>

                      <div className="position-absolute top-0 start-0 m-2">
                        <span className="badge badge-link bg-primary">
                          {data.nfts} NFT
                        </span>
                      </div>
                    </div>

                    <div className="card-body content position-relative p-0 mt-3">
                      <Link
                        to={`/marketplace/details/${data.id}`}
                        className="title text-dark h6"
                      >
                        {data.title}
                      </Link>

                      <div className="d-flex justify-content-between mt-2">
                        <small className="text-secondary fw-bold">
                          {data.price} ETH
                        </small>
                      </div>
                      <hr />
                      <button className="btn btn-soft-secondary justify-content-start">
                        <img
                          alt=""
                          src={data.id % 2 === 0 ? labelIcon : flashIcon}
                          style={{ paddingRight: 10 }}
                          width={30}
                        />
                        {data.id % 2 === 0 ? "Place Bid" : "Buy Now"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplace;
