import { FiCheck, FiCheckCircle, FiShare } from "react-icons/fi";
import { useParams } from "react-router-dom";

import {
  ethereum,
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
  profileDefault,
  collectionDefault,
  userPlus,
  balancerIcon,
  uniswapIcon,
  sushiswapIcon,
} from "../utils/images.util";

const MarketplaceDetails = () => {
  const { id } = useParams();

  const AuctionData = [
    {
      image: gif1,
      title: "Deep Sea Phantasy",
      id: 1,
      price: 0.4,
      type: "GIFs",
      progress: 50,
      nfts: 1,
      participants: [
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
      ],
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
      participants: [],
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
      participants: [
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
      ],
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
      participants: [
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
      ],
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
      participants: [],
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
      participants: [],
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
      participants: [],
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
      participants: [
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
      ],
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
      participants: [],
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
      participants: [],
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
      participants: [],
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
      participants: [
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
        { id: 0, address: "0x9e6...ef07b", val: 0.0001 },
      ],
      filter: ["all", "music"],
    },
  ];

  return (
    <section className="bg-item-detail d-table w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="sticky-bar">
              <img
                src={AuctionData[id - 1].image}
                className="img-fluid rounded-md shadow"
                alt=""
              />
              <div className="hstack gap-3 mt-4 justify-content-center">
                <button className="btn btn-pills btn-soft-primary">
                  <lable>
                    <img src={ethereum} style={{ paddingRight: 8 }} />
                  </lable>
                  Ethereum
                </button>
                <button className="btn btn-pills btn-soft-primary">
                  <span style={{ paddingRight: 8 }}>
                    <FiShare />
                  </span>
                  Share
                </button>
                <button className="btn btn-pills btn-soft-primary">
                  <span style={{ paddingRight: 8 }}>
                    <i className="uil uil-discord"></i>
                  </span>
                  Community
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="ms-lg-5">
              <h5 className="text-dark d-flex align-items-center">
                <FiCheckCircle style={{ marginRight: 10, color: "green" }} />
                Verified by FA
              </h5>
              <div className="title-heading">
                <h4 className="h3 fw-bold mb-0">{AuctionData[id - 1].title}</h4>
              </div>

              <div className="row">
                <div className="col-md-4 mt-4">
                  <h6>Reserve Price</h6>
                  <h4 className="mb-0 text-gradient-primary">
                    <strong>{AuctionData[id - 1].price} ETH</strong>
                  </h4>
                </div>
                <div className="col-md-4 mt-4">
                  <h6>Valuation</h6>
                  <h4 className="mb-0 text-gradient-primary">
                    <strong>{AuctionData[id - 1].price} ETH</strong>
                  </h4>
                </div>
                <div className="col-md-4 mt-4">
                  <h6>Supply</h6>
                  <h4 className="mb-0 text-gradient-primary">
                    <strong>{AuctionData[id - 1].price} MTCAT</strong>
                  </h4>
                </div>
              </div>

              <div className="my-3">
                <ul
                  className="nav nav-tabs border-bottom"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="fractions-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#fractionsItem"
                      type="button"
                      role="tab"
                      aria-controls="fractionsItem"
                      aria-selected="true"
                    >
                      Buy Fractions
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="nft-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nftItem"
                      type="button"
                      role="tab"
                      aria-controls="nftItem"
                      aria-selected="true"
                    >
                      Buy NFT
                    </button>
                  </li>
                </ul>

                <div className="tab-content mt-3">
                  <div
                    className="tab-pane fade show active"
                    id="fractionsItem"
                    role="tabpanel"
                    aria-labelledby="fractions-tab"
                  >
                    <div className="hstack">
                      <h5>You Pay</h5>
                      <p className="ms-auto">Balance: 0 ETH</p>
                    </div>
                    <div className="hstack gap-3">
                      <img src={ethereum} alt="eth" width={30} />
                      <p className="my-auto">ETH</p>
                      <span className="badge badge-link bg-secondary">
                        USE MAX
                      </span>
                      <h4 className="ms-auto">0</h4>
                    </div>
                    <div className="hstack">
                      <p className="ms-auto">-</p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="nftItem"
                    role="tabpanel"
                    aria-labelledby="nft-tab"
                  >
                    <p>
                      Once you pay the Reserve Price to purchase the NFT, you
                      will receive it in your wallet and all the Fraction
                      holders will be able to claim their funds.
                    </p>
                    <div className="hstack">
                      <h5>Reserve Price</h5>
                      <p className="ms-auto">0.8 ETH</p>
                    </div>
                    <div className="hstack" style={{ marginTop: -20 }}>
                      <p className="ms-auto" style={{ fontSize: 12 }}>
                        $1,205.49
                      </p>
                    </div>
                    <button className="btn btn-primary w-100 mb-3">BUY</button>
                    <h5>Order Details</h5>
                    <div
                      className="rounded-md"
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        padding: "15px 15px 0px 15px",
                      }}
                    >
                      <div className="hstack gap-3">
                        <p>My Fractions</p>
                        <p>0%</p>
                        <p className="ms-auto">0 MTCAT</p>
                      </div>
                      <div className="hstack gap-3" style={{ marginTop: -15 }}>
                        <p>Pay Amount</p>
                        <p>100%</p>
                        <p className="ms-auto">0.8 ETH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-12">
                  <ul
                    className="nav nav-tabs border-bottom"
                    id="myTab2"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="detail-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#detailItem"
                        type="button"
                        role="tab"
                        aria-controls="detailItem"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="member-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#memberItem"
                        type="button"
                        role="tab"
                        aria-controls="memberItem"
                        aria-selected="false"
                      >
                        Members ({AuctionData[id - 1].participants.length})
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contract-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contractInfo"
                        type="button"
                        role="tab"
                        aria-controls="contractInfo"
                        aria-selected="false"
                      >
                        Contract Info
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content mt-3">
                    <div
                      className="tab-pane fade show active"
                      id="detailItem"
                      role="tabpanel"
                      aria-labelledby="detail-tab"
                    >
                      <p className="text-dark">
                        9,999 cats mutated by a disease on the Ethereum
                        blockchain.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="memberItem"
                      role="tabpanel"
                      aria-labelledby="member-tab"
                    >
                      {AuctionData[id - 1].participants.length > 0 ? (
                        <div
                          className="row justify-content-start"
                          style={{
                            height: "100%",
                            maxHeight: 200,
                            overflowY: "auto",
                          }}
                        >
                          {AuctionData[id - 1].participants.map((p) => (
                            <div className="col-1 my-3 mx-2">
                              <img src={profileDefault} width={45} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <img
                            src={userPlus}
                            width={50}
                            className="mx-auto d-flex mb-3"
                          />
                          <p className="text-muted text-center">
                            This pool is still empty.
                            <br />
                            Get it started and invite your friends!
                          </p>
                        </>
                      )}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contractInfo"
                      role="tabpanel"
                      aria-labelledby="contract-tab"
                    >
                      <div className="hstack gap-3 mb-4">
                        <div className="hstack gap-3">
                          <img src={collectionDefault} width={50} />
                          <p className="text-dark my-auto">
                            Collection
                            <br />
                            <strong>FraArt</strong>
                          </p>
                        </div>
                        <div className="hstack gap-3">
                          <img src={profileDefault} width={50} />
                          <p className="text-dark my-auto">
                            Seller
                            <br />
                            <strong>John</strong>
                          </p>
                        </div>
                      </div>
                      <div className="hstack justify-content-between bg-light p-3 rounded">
                        <p className="text-dark my-auto">0x9c8a2b3...</p>
                        <p className="text-dark my-auto">Token Id: 8254</p>
                        <p className="text-dark my-auto">Edition: 1/1</p>
                      </div>
                      <div className="hstack gap-3 mt-4">
                        <button className="btn btn-pills btn-soft-primary">
                          View on OpenSea
                        </button>
                        <button className="btn btn-pills btn-soft-primary">
                          Block Explorer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="title-heading my-4">
          <b>Liquidity Overview</b>
        </h3>
        <div
          className="p-4 mt-4 rounded-md"
          style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
        >
          <h4 className="mb-1">Limit Order</h4>
          <p className="text-dark lh-lg">
            A limit order is a type of exchange order that allows traders to
            sell tokens at a specified price. A limit order will only be
            executed at the limit price. This stipulation allows traders to
            better control the prices they trade.
          </p>
          <div className="row gap-3 align-items-center">
            <div className="col-md-auto hstack gap-1">
              <img
                src={AuctionData[id - 1].image}
                alt=""
                width={50}
                style={{ borderRadius: 50 }}
              />
              <img src={ethereum} alt="" width={50} />
            </div>

            <p className="col-md-auto">
              <b>MTCAT/ETH</b>
              <br />
              Order Book
            </p>
            <p className="col-md-auto">
              Total Tokens Locked
              <br />
              <b>5,000 MTCAT</b>
            </p>
            <p className="col-md-auto">
              Token Average Price
              <br />
              <b>0.00004 ETH</b>
            </p>
            <p className="col-md-auto">
              Total Cost
              <br />
              <b>0.2 ETH</b>
            </p>
            <button className="col-md-auto ms-auto btn btn-primary">
              See All Orders
            </button>
          </div>
        </div>
        <div
          className="p-4 mt-4 rounded-md"
          style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
        >
          <h4 className="mb-1">AMM Liquidity Pools</h4>
          <p className="text-dark lh-lg">
            Automated Market Maker (AMMs) allow digital assets to be traded
            without permission and automatically by using liquidity pools
            instead of a traditional market of buyers and sellers. On a
            traditional exchange platform, buyers and sellers offer up different
            prices for an asset.
          </p>
          <div className="row mt-4 gap-3 align-items-center">
            <div className="col-md-auto hstack gap-1">
              <img
                src={AuctionData[id - 1].image}
                alt=""
                width={50}
                style={{ borderRadius: 50 }}
              />
              <img src={ethereum} alt="" width={50} />
            </div>
            <div className="col-md-auto">
              <h5>
                <b>Liquidity Pool</b>
              </h5>
              <p>Choose an AMM to provide liquidity</p>
            </div>

            <div className="col-md-auto ms-auto">
              <div className="row gap-2">
                <button className="col-md-auto btn btn-secondary">
                  <img
                    src={balancerIcon}
                    width={20}
                    alt=""
                    style={{ marginRight: 10 }}
                  />
                  Balancer
                </button>
                <button className="col-md-auto btn btn-secondary">
                  <img
                    src={uniswapIcon}
                    width={20}
                    alt=""
                    style={{ marginRight: 10 }}
                  />
                  Uniswap V2
                </button>
                <button className="col-md-auto btn btn-secondary">
                  <img
                    src={uniswapIcon}
                    width={20}
                    alt=""
                    style={{ marginRight: 10 }}
                  />
                  Uniswap V3
                </button>
                <button className="col-md-auto btn btn-secondary">
                  <img
                    src={sushiswapIcon}
                    width={20}
                    alt=""
                    style={{ marginRight: 10 }}
                  />
                  Sushi Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceDetails;
