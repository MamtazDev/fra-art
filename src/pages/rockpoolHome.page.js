import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import useIsDesktop from "../hooks/useIsDesktop";
import {
  bluechip,
  client05,
  client06,
  client08,
  createPool,
  gif4,
  ownFrac,
  reachFaster,
  reachValue,
  rockBy,
  rockpoolImg,
  shareComm,
} from "../utils/images.util";

function RockpoolHome() {
  const isDesktop = useIsDesktop();

  return (
    <>
      <section className="bg-half-170 d-table w-100">
        <div className="bg-overlay bg-gradient-primary opacity-8"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="title-heading">
                <h6 className="text-light title-dark fw-normal">
                  FraPool: the best of the Opensea is here
                </h6>
                <h4 className="heading text-white title-dark fw-bold mb-3">
                  Buy collectively to own <br /> extraordinary NFTs
                </h4>
                <p className="text-white-50 para-desc mb-0 mb-0">
                  FraPool is a tool that allows you to collectively buy any NFT
                  (ERC721) listed at a fixed price on OpenSea.
                </p>

                <div className="mt-4 pt-2">
                  <Link
                    to="/rockpool/pools"
                    className="btn btn-pills btn-primary"
                  >
                    Join Pools
                  </Link>
                  <Link
                    to="/rockpool/create"
                    className="mx-3 btn btn-pills btn-outline-primary"
                  >
                    Create a Pool
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="card bg-white nft-items nft-primary img-skewed rounded-md shadow overflow-hidden mb-1 p-3">
                <div className="d-flex justify-content-between">
                  <div className="img-group">
                    <Link to="/creator-profile" className="user-avatar">
                      <img
                        src={client08}
                        alt="user"
                        className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                      />
                    </Link>
                    <Link to="/creator-profile" className="user-avatar ms-n3">
                      <img
                        src={client05}
                        alt="user"
                        className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                      />
                    </Link>
                    <Link to="/creator-profile" className="user-avatar ms-n3">
                      <img
                        src={client06}
                        alt="user"
                        className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                      />
                    </Link>
                  </div>

                  <span className="like-icon shadow-sm">
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="text-muted icon"
                    >
                      <i className="mdi mdi-18px mdi-heart mb-0"></i>
                    </a>
                  </span>
                </div>

                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden shadow">
                  <img src={gif4} className="img-fluid" alt="" />
                  <div className="position-absolute top-0 start-0 m-2">
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="badge badge-link bg-primary"
                    >
                      GIFs
                    </a>
                  </div>
                </div>

                <div className="card-body content position-relative p-0 mt-3">
                  <div className="title text-dark h5">Deep Sea Phantasy</div>

                  <div className="d-flex justify-content-between mt-2">
                    <small className="rate fw-bold">20.5 ETH</small>
                    <small className="text-dark fw-bold">1 out of 10</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
            <div className="col">
              <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden text-center">
                  <img src={bluechip} className="img-fluid" alt="" />
                </div>

                <div className="card-body content position-relative p-3 mt-3 bg-light text-center">
                  <h4 className="title fw-bold">
                    An easier way to get a bluechip NFT
                  </h4>
                  <h4 className="title text-dark h6">
                    By buying collectively, you fulfill the dream of owning an
                    extraordinary NFT
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden text-center">
                  <img src={reachFaster} className="img-fluid" alt="" />
                </div>

                <div className="card-body content position-relative p-3 mt-3 bg-light text-center">
                  <h4 className="title fw-bold">
                    Reach value faster through a Pool
                  </h4>
                  <h4 className="title text-dark h6">
                    When the value is reached through a Pool, the Smart Contract
                    will buy the NFT automatically
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden text-center">
                  <img src={rockBy} className="img-fluid" alt="" />
                </div>

                <div className="card-body content position-relative p-3 mt-3 bg-light text-center">
                  <h4 className="title fw-bold">
                    Rock by diversifying your portfolio
                  </h4>
                  <h4 className="title text-dark h6">
                    It's your time to have an NFT bluechip. Diversify and get a
                    fraction of many of them
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 mb-4">
              <div className="title-heading">
                <h5 className="heading title-dark fw-bold">Trust the codes:</h5>
                <h5 className="title-dark fw-normal mb-3 text-primary">
                  you don't have to trust anyone to collect the money and keep
                  the NFT
                </h5>
                <ul>
                  <li className="para-desc">
                    You can create a Pool and join it with the amount you want.
                    If you have only 1 ETH to spend on it, you can join this
                    pool with this 1 ETH. In the same way, other users can
                    contribute with any other amount they want
                  </li>
                  <li className="para-desc">
                    Once the Target Price is reached, the Smart Contract will
                    buy the item on OpenSea and Fractionalize it on Fra-Art
                  </li>
                  <li className="para-desc">
                    After that, all the participants can claim their fractions
                    proportionally to the amount they contributed.
                  </li>
                </ul>
                <p className="para-desc">
                  It’s all in a decentralized and trustless way. Investing in an
                  NFT together with others means validation!
                </p>
                <Link className="btn btn-primary" to="/rockpool/create">
                  Create a Pool
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-3 position-relative mt-0">
              <img className={!isDesktop && "img-fluid"} src={gif4} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="title mb-5 fw-bold">From OpenSea to your wallet</h3>
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
            <div className="col">
              <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden text-center">
                  <img src={createPool} className="img-fluid" alt="" />
                </div>

                <div className="card-body content position-relative p-3 mt-3 bg-light hstack gap-2">
                  <h5 className="badge bg-primary rounded-lg">1</h5>
                  <h4 className="title text-dark h6">
                    Create a pool or Join a pool
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden text-center">
                  <img src={shareComm} className="img-fluid" alt="" />
                </div>

                <div className="card-body content position-relative p-3 mt-3 bg-light hstack gap-2">
                  <h5 className="badge bg-primary rounded-lg">2</h5>
                  <h4 className="title text-dark h6">Share with communities</h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden text-center">
                  <img src={reachValue} className="img-fluid" alt="" />
                </div>

                <div className="card-body content position-relative p-3 mt-3 bg-light hstack gap-2">
                  <h5 className="badge bg-primary rounded-lg">3</h5>
                  <h4 className="title text-dark h6">
                    Reach the value of the NFT
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden text-center">
                  <img src={ownFrac} className="img-fluid" alt="" />
                </div>

                <div className="card-body content position-relative p-3 mt-3 bg-light hstack gap-2">
                  <h5 className="badge bg-primary rounded-lg">4</h5>
                  <h4 className="title text-dark h6">
                    Own a fraction of the NFT you want
                  </h4>
                </div>
              </div>
            </div>
            <Link className="btn btn-primary" to="/rockpool/create">
              Start Now
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="bg-overlay bg-gradient-light opacity-6"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="title-heading">
                <h5 className="heading title-dark fw-bold">
                  Discover, collect, sell, and fractionalize
                </h5>
                <h5 className="title-dark fw-normal mb-3 text-primary">
                  Buy any NFT (ERC721) listed at a fixed price on OpenSea.
                </h5>
                <h4 className="title-dark fw-normal fw-bold">
                  Join as you want
                </h4>
                <p className="para-desc">
                  Create Public Pools, in which anyone in the world can join or
                  Private Pools, in which only users with the link of that pool
                  are able to join.
                </p>
                <h4 className="title-dark fw-normal mt-3 fw-bold">
                  Receive a Curator's fee
                </h4>
                <p className="para-desc">
                  The curator sets the fee amount in Private Pools, which is a
                  percentage of the NFT Price that will be transferred to the
                  curator wallet after Fractionation.
                </p>
                <h4 className="title-dark fw-normal mt-3 fw-bold">
                  Boost your NFT community
                </h4>
                <p className="para-desc">
                  Create Private Pools to receive a Curator's fee and also to
                  boost and activate your community without needing financial
                  resources
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-3 mt-0">
              <img
                className={!isDesktop && "img-fluid"}
                src={rockpoolImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <h3 className="title mb-5 fw-bold">
              The best of the OpenSea is on the RockPool!
            </h3>
            <iframe
              width="1300"
              height="730"
              src="https://www.youtube.com/embed/o-DCkoy25uk"
              title="FraArt - Trustless way of sharing ownership of NFTs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="title text-center fw-bold">F.A.Q</h2>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="accordion mt-4 pt-2">
                <div className="accordion-item rounded">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button border-0"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      How long does it take to join or create a Pool?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse border-0 collapse show"
                    aria-labelledby="headingOne"
                  >
                    <div className="accordion-body text-muted bg-white">
                      It's pretty fast, as FraPool has optimization. So just
                      click "Join Pools" or "Create a Pool" to start. To join a
                      Pool, it will certainly be faster. And to create a Private
                      Pool, you will have to choose the curator fee and a few
                      necessary settings.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      Who sets the Curator's fee percentage?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingTwo"
                  >
                    <div className="accordion-body text-muted bg-white">
                      The person responsible for setting this percentage is the
                      creator of the Pool. The platform does not automatically
                      set this fee, which means that these creators are free to
                      choose it.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      What is the use of creating a Private Pool?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingThree"
                  >
                    <div className="accordion-body text-muted bg-white">
                      With Private Pools, you can stir up a community or use it
                      to own an NFT with your friends. Overall, it may have a
                      goal beyond the speed and ease of getting a great NFT.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                    >
                      Why use RockPool when I can buy NFTs from OpenSea?
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingFour"
                  >
                    <div className="accordion-body text-muted bg-white">
                      You will still be buying from OpenSea! But with FraPool,
                      you buy fractions of NFTs collectively, which makes you
                      vary the portfolio, expose yourself to less risk and
                      acquire an NFT more easily. In addition, buying this
                      collectively means that several people want it. We can
                      consider this a validation.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      aria-expanded="false"
                      aria-controls="faq5"
                    >
                      Why does NFT need to be listed at a fixed price?
                    </button>
                  </h2>
                  <div
                    id="faq5"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingFive"
                  >
                    <div className="accordion-body text-muted bg-white">
                      Because Pools need to have a target value to reach and
                      because the buyer (when that value is reached) isa Smart
                      Contract. Have you ever thought about creating a Pool to
                      buy an NFT, and when the Smart Contract was going to buy,
                      some coins were missing in its pocket?
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq6"
                      aria-expanded="false"
                      aria-controls="faq6"
                    >
                      What if someone else wants to sell the NFT?
                    </button>
                  </h2>
                  <div
                    id="faq6"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingSix"
                  >
                    <div className="accordion-body text-muted bg-white">
                      Your fraction is your ownership percentage of the NFT.
                      After the contract buys the NFT from OpenSea, it sends it
                      to the fractionalizer contract, which holds the NFT and
                      emits ERC20 fractions to be claimed by Pool participants.
                      Thus, the NFT is locked in the Smart Contract and can only
                      be withdrawn upon payment of the exit price or with 100%
                      ownership of the fractions. The owner, therefore, is the
                      Smart Contract (it's like a vault). And it holds the NFT
                      in stake.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq7"
                      aria-expanded="false"
                      aria-controls="faq7"
                    >
                      How can I sell my fractions after joining a Pool?
                    </button>
                  </h2>
                  <div
                    id="faq7"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingSeven"
                  >
                    <div className="accordion-body text-muted bg-white">
                      You can sell your fractions at any time, via p2p, by using
                      our order book, or by creating a Liquidity Pool.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq8"
                      aria-expanded="false"
                      aria-controls="faq8"
                    >
                      What if the price of the NFT rises?
                    </button>
                  </h2>
                  <div
                    id="faq8"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingEight"
                  >
                    <div className="accordion-body text-muted bg-white">
                      Every NFT purchased and fractionalized by FraPool has a
                      multiplier of the final amount (Auction Price Multiplier).
                      Example: a Mutant Ape that costs 20 Eth with the Auction
                      Price Multiplier of 1.5x – its resale price is 30 Eth. In
                      this case, you can either buy the entire NFT for 30 Eth or
                      buy 100% of the fractions or some combination of the two
                      options (like 15 Eth and 50% of the fractions).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#F8F8FC" }}>
          <div className="py-5 container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center">
                  <h6 className="text-muted fw-normal">
                    Receive relevant news and information
                  </h6>
                  <h4 className="title mb-2">
                    Subscribe to Fra-Art newsletter
                  </h4>
                  <div className="mt-2 pt-2">
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <div className="form-icon position-relative">
                          <FiMail className="fea icon-sm icons" />
                          <input
                            type="email"
                            name="email"
                            id="emailsubscribe"
                            className="form-control ps-5 rounded"
                            placeholder="Your best email"
                            required
                            style={{ height: 46 }}
                          />
                        </div>
                      </div>
                      <div className="col-md-auto">
                        <input
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="btn btn-soft-primary h-100"
                          value="Subscribe"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title mb-2">Try now.</h4>
                <h6 className="text-muted fw-normal">
                  Receive relevant news and informationand get that NFT you want
                  so much
                </h6>
                <div className="mt-2 pt-2">
                  <Link
                    className="btn btn-soft-primary h-100"
                    to="/rockpool/create"
                  >
                    Start Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RockpoolHome;
