import { useState } from "react";
import { IoIosWarning } from "react-icons/io";
import { Link } from "react-router-dom";
import { item1, gif1, gif2, ethereum, iconGroup } from "../utils/images.util";

const RockpoolCreate = () => {
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
  ];

  const [allData, setAllData] = useState(AuctionData);

  return (
    <>
      <section className="bg-half-100 w-100 pb-0 mb-0">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 text-center">
              <h4 className="display-6 text-dark title-dark fw-medium">
                Create Pools to collectively purchase NFTs from OpenSea
              </h4>
              <p>
                Buy any NFT listed on OpenSea at a fixed price, together with
                your friends!
              </p>
              <div className="hstack gap-1">
                <div className="form-floating w-100">
                  <input
                    type="email"
                    className="form-control"
                    id="LoginEmail"
                    placeholder="Enter the URL of an OpenSea listing at a fixed price."
                  />
                  <label htmlFor="LoginEmail" style={{ fontSize: 14 }}>
                    Enter the URL of an OpenSea listing at a fixed price.
                  </label>
                </div>
                <Link
                  to="/rockpool/create/pool-details"
                  className="btn btn-secondary rounded-sm"
                  type="submit"
                >
                  Start a Pool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-4">
        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col-lg-8">
              <h4 className="display-6 text-dark title-dark fw-medium">
                Join Pools
              </h4>
            </div>
          </div>
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            {allData.map((data) => {
              return (
                <div className="col" key={data.title}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="d-flex justify-content-between">
                      <div className="img-group">
                        <a href="/" className="user-avatar">
                          <span className="badge badge-link bg-muted">
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
                      <img src={ethereum} style={{ marginLeft: "5px" }} />
                    </div>

                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <Link to={`/rockpool/details/${data.id}`}>
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
                        to={`/rockpool/details/${data.id}`}
                        className="title text-dark h6"
                      >
                        {data.title}
                      </Link>

                      <div className="d-flex justify-content-between mt-2">
                        Accumulated{" "}
                        <small className="rate fw-bold">{data.price} ETH</small>
                      </div>

                      <hr />
                      <div className="hstack justify-content-between my-3 gap-1">
                        <small className="text-dark fw-bold">
                          <IoIosWarning size={18} />
                          <span style={{ marginLeft: 5, fontSize: 13 }}>
                            Pool Lost
                          </span>
                        </small>

                        <div
                          className="progress bg-secondary"
                          style={{
                            height: 8,
                            width: "30%",
                          }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{
                              width: `${data.progress}%`,
                            }}
                          />
                        </div>

                        <small style={{ fontSize: 14, marginLeft: 5 }}>
                          {data.progress}%
                        </small>
                      </div>
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

export default RockpoolCreate;
