import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ParamsContext } from "../context/ParamsProvider";

const CollectionNav = () => {
  //   const [active, setActive] = useState("");
  const { active, setActive } = useContext(ParamsContext);
  return (
    <div className="d-flex gap-4 fs-5 mb-3 fw-bold">
      <Link
        to="/trending"
        className={`text-black  px-3 py-1 rounded hover-background ${
          active === "trending" && "activeTab"
        }`}
        onClick={() => setActive("trending")}
      >
        <div>Treding</div>
      </Link>
      <Link
        to="/hot"
        className={`text-black  px-3 py-1 rounded hover-background ${
          active === "hot" && "activeTab"
        }`}
        onClick={() => setActive("hot")}
      >
        <div>Hot Mints</div>
      </Link>
      <Link
        to="/newly"
        className={`text-black  px-3 py-1 rounded hover-background ${
          active === "newly" && "activeTab"
        }`}
        onClick={() => setActive("newly")}
      >
        <div>NewlyAdded</div>
      </Link>
      <Link
        to="/top"
        className={`text-black  px-3 py-1 rounded hover-background ${
          active === "top" && "activeTab"
        }`}
        onClick={() => setActive("top")}
      >
        <div>Top Collection</div>
      </Link>
    </div>
  );
};

export default CollectionNav;
