import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { pid } = useParams();
  const [collection, setCollection] = useState({});
  useEffect(() => {
    console.log("id", pid);

    fetch(`https://api.reservoir.tools/collections/v5?id=${pid}`)
      .then((res) => res.json())
      .then((data) => setCollection(data.collections));
  }, []);

  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row g-5">
          <div className="col-6">
            <img
              className="w-100 border rounded"
              src={collection[0]?.image}
              alt=""
            />
            <div className="border rounded p-3 my-3">
              <h3>Collection Info</h3>
              <div className="d-flex align-items-center mb-3">
                <img
                  width={30}
                  className="rounded-circle me-3"
                  src={collection[0]?.image}
                  alt=""
                />
                <h6> {collection[0]?.name}</h6>
              </div>
              <p> {collection[0]?.description}</p>
            </div>
            <div className="border rounded p-3">
              <div className="d-flex justify-content-between">
              <h3>Token Info</h3>
              <h3>💎💰</h3>
                </div>
              <div className="d-flex justify-content-between">
                <p> Contract Address :</p>
                <p className="fw-bold text-primary">
                  {" "}
                  {collection[0]?.floorAsk?.token?.contract
                    ? collection[0]?.floorAsk?.token?.contract.slice(0, 4) +
                      "..." +
                      collection[0]?.floorAsk?.token?.contract.slice(
                        collection[0]?.floorAsk?.token?.contract.length - 4,
                        collection[0]?.floorAsk?.token?.contract.length
                      )
                    : "not available"}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> Token ID :</p>
                <p className="fw-bold">
                  {" "}
                  {collection[0]?.floorAsk?.token?.tokenId
                    ? collection[0]?.floorAsk?.token?.tokenId
                    : "not available"}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> Token Standard :</p>
                <p className="fw-bold">
                  {" "}
                  {collection[0]?.floorAsk?.token?.name
                    ? collection[0]?.floorAsk?.token?.name
                    : "not available"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="border rounded p-3 mb-3">
              <div className="d-flex align-items-center">
                <img
                  width={30}
                  className="rounded-circle me-3"
                  src={collection[0]?.floorAsk?.token?.image}
                  alt=""
                />
                <h3>{collection[0]?.floorAsk?.token?.name}</h3>
              </div>
              <h6>Owner</h6>

              {collection && (
                <p>
                  {collection[0]?.royalties?.recipient?.slice(0, 4) +
                    "..." +
                    collection[0]?.royalties?.recipient.slice(
                      collection[0]?.royalties?.recipient.length - 4,
                      collection[0]?.royalties?.recipient.length
                    )}
                </p>
              )}
            </div>

            <div className="border rounded p-3 mb-3">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>List Price</h5>
                  <p>
                    {collection[0]?.floorAskPrice
                      ? collection[0]?.floorAskPrice
                      : "-"}
                  </p>
                </div>
                <div>
                  <h5>Top Offer</h5>
                </div>
              </div>
            </div>

            <div className="border rounded p-3">
              <h6>Attributes</h6>
              <div className="row g-3">
                <div className="col-6 ">
                  <div className="bg-light rounded p-3">
                    <h6> Sea {collection[0]?.floorSale["1day"]}</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="bg-light rounded p-3">
                    <h6> Egg {collection[0]?.floorSale["7day"]}</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="bg-light rounded p-3">
                    <h6> Egg {collection[0]?.floorSale["30day"]}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row g-5 my-5">
          <h1 className="text-center">Sample Images</h1>
          {collection[0]?.sampleImages?.length === 0 && (
            <h1 className="text-danger text-center my-5">
              No Sample Image Available
            </h1>
          )}
          {collection[0]?.sampleImages?.map((pic, index) => (
            <div className="col-3" key={index}>
              <img className="w-100" src={pic} alt="" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default User;
