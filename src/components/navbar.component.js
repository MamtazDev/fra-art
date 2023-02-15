import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { client01, logoLight, logoDark } from "../utils/images.util";

const Navbar = ({ nav }) => {
  const [myPublicAddress, setMyPublicAddress] = useState("qhut0...hfteh45");
  const [headerId, setHeaderId] = useState(0);

  const isMetaMaskInstalled = useCallback(() => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  }, []);

  const checkWalletConnet = useCallback(async () => {
    if (isMetaMaskInstalled()) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (!!accounts[0]) {
        const walletAddress =
          accounts[0].split("").slice(0, 6).join("") +
          "..." +
          accounts[0]
            .split("")
            .slice(accounts[0].length - 7, accounts[0].length)
            .join("");
        setMyPublicAddress(walletAddress);
      }
    }
  }, [isMetaMaskInstalled]);

  useEffect(() => {
    checkWalletConnet();
  }, [checkWalletConnet]);

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

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var immediateParent = getClosest(matchingMenuItem, "li");
        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(matchingMenuItem, ".parent-menu-item");
        if (parent) {
          parent.classList.add("active");
          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }
          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };

  const toggleMenu = () => {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };

  useEffect(() => {
    if (nav.includes("crowdpad")) {
      setHeaderId(1);
    } else if (nav.includes("rockpool")) {
      setHeaderId(2);
    } else if (nav.includes("marketplace")) {
      setHeaderId(3);
    } else {
      setHeaderId(0);
    }
  }, [nav]);

  useEffect(() => {
    checkWalletConnet();
  }, [checkWalletConnet]);

  return (
    <>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <a className="logo" href="/">
            <span className="">
              <img src={logoDark} height="42" className={"l-dark"} alt="" />
              <img src={logoLight} height="42" className={"l-light"} alt="" />
            </span>
          </a>
          <div className="menu-extras">
            <div className="menu-item">
              <a
                className="navbar-toggle"
                id="isToggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0 me-3">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="uil uil-search text-dark btn-icon-light fs-5 align-middle"></i>
                  <i className="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                  style={{ width: 300 }}
                >
                  <div className="search-bar">
                    <div id="itemSearch" className="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchItemform"
                        className="searchform"
                      >
                        <input
                          type="text"
                          className="form-control border rounded"
                          name="s"
                          id="searchItem"
                          placeholder="Search..."
                        />
                        <input
                          type="submit"
                          id="searchItemsubmit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-inline-item mb-0 me-3">
              <p id="connectWallet" onClick={_handleConnectWallet}>
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
            </li>

            <li className="list-inline-item mb-0">
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-pills dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={client01}
                    className="rounded-pill avatar avatar-sm-sm"
                    alt=""
                  />
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded"
                  style={{ minWidth: 200 }}
                >
                  <div className="position-relative">
                    <div className="pt-5 pb-3 bg-gradient-primary"></div>
                    <div className="px-3">
                      <div className="d-flex align-items-end mt-n4">
                        <img
                          src={client01}
                          className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md"
                          alt=""
                        />
                        <h6 className="text-dark fw-bold mb-0 ms-1">
                          Calvin Carlo
                        </h6>
                      </div>
                      <div className="mt-2">
                        <small className="text-start text-dark d-block fw-bold">
                          Wallet:
                        </small>
                        <div className="d-flex justify-content-between align-items-center">
                          <small id="myPublicAddress" className="text-muted">
                            {myPublicAddress}
                          </small>
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            className="text-primary"
                          >
                            <span className="uil uil-copy"></span>
                          </a>
                        </div>
                      </div>

                      <div className="mt-2">
                        <small className="text-dark">
                          Balance:{" "}
                          <span className="text-primary fw-bold">
                            0.00045ETH
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/creator-profile"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-user align-middle h6 mb-0 me-1"></i>
                      </span>{" "}
                      Profile
                    </a>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/creator-profile-edit"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-cog align-middle h6 mb-0 me-1"></i>
                      </span>
                      Settings
                    </a>
                    <div className="dropdown-divider border-top"></div>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/lock-screen"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i>
                      </span>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div id="navigation">
            {headerId === 0 ? (
              <ul className="navigation-menu nav-left">
                <li className="parent-parent-menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="parent-parent-menu-item">
                  <Link to="/trending">Trending</Link>
                </li>
                <li className="parent-parent-menu-item">
                  <Link to="/crowdpad">Crowdpad</Link>
                </li>
                <li className="parent-parent-menu-item">
                  <Link to="/rockpool">Rockpool</Link>
                </li>
                <li className="parent-parent-menu-item">
                  <Link to="/marketplace">Marketplace</Link>
                </li>
                <li className="parent-parent-menu-item">
                  <Link to="/bridge">Bridge</Link>
                </li>
              </ul>
            ) : headerId === 1 ? (
              <ul className="navigation-menu nav-right">
                <li className="parent-parent-menu-item">
                  <Link to="/crowdpad">Join Crowdpads</Link>
                </li>
                <li className="parent-parent-menu-item">
                  <Link to="/crowdpad/create">Create Crowdpad</Link>
                </li>
              </ul>
            ) : headerId === 2 ? (
              <ul className="navigation-menu nav-right">
                <li className="parent-parent-menu-item">
                  <Link to="/rockpool/pools">Join Pools</Link>
                </li>
                <li className="parent-parent-menu-item">
                  <Link to="/rockpool/create">Create a Pool</Link>
                </li>
              </ul>
            ) : (
              headerId === 3 && (
                <ul className="navigation-menu nav-right">
                  <li className="parent-parent-menu-item">
                    <Link to="/marketplace">Explore</Link>
                  </li>
                  <li className="parent-parent-menu-item">
                    <Link to="/marketplace/create">Fractionalize NFTs</Link>
                  </li>
                </ul>
              )
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
