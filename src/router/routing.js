import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import ReactTooltip from "react-tooltip";

import store from "../admin/redux/store";

import Navbar from "../components/navbar.component";

import Home from "../pages/home.page";
import Crowdpad from "../pages/crowdpad.page";
import CrowdpadDetails from "../pages/crowdpadDetails.page";
import CrowdpadCreate from "../pages/crowdpadCreate.page";
import Marketplace from "../pages/marketplace.page";
import MarketplaceDetails from "../pages/marketplaceDetails.page";
import MarketplaceCreate from "../pages/marketplaceCreate.page";
import Rockpool from "../pages/rockpool.page";
import RockpoolCreate from "../pages/rockpoolCreate.page";
import RockpoolCreateDetails from "../pages/rockpoolCreateDetails.page";
import RockpoolDetails from "../pages/rockpoolDetails.page";
import Bridge from "../pages/bridge.page";

import Index from "../admin/pages/index";
import Invoice from "../admin/pages/bids";
import CreateInvoice from "../admin/pages/saved";
import Bill from "../admin/pages/collection";
import Profile from "../admin/pages/profile";
import SettingsProfile from "../admin/pages/settings-profile";
import SettingsPreferences from "../admin/pages/settings-application";
import SettingsSecurity from "../admin/pages/settings-security";
import SettingsActivity from "../admin/pages/settings-activity";
import SettingsPayment from "../admin/pages/settings-payment-method";
import SettingsApi from "../admin/pages/settings-api";
import Signin from "../admin/pages/signin";
import Signup from "../admin/pages/signup";
import Lock from "../admin/pages/lock";
import Otp1 from "../admin/pages/otp1";
import Otp2 from "../admin/pages/otp2";
import Balance from "../admin/pages/wallet";
import VerifyEmail from "../admin/pages/verify-email";
import Reset from "../admin/pages/reset";

import Footer from "../components/footer.component";
import BackToTop from "../components/backtotop.component";
import RockpoolHome from "../pages/rockpoolHome.page";
import Collections from "../pages/collections.page";
import Explore from "../pages/explore.page";
import CreatorProfile from "../pages/creatorProfile.page";
import CreatorProfileEdit from "../pages/creatorProfileEdit.page";
import BecomeCreator from "../pages/becomeCreator.page";
import Login from "../pages/login.page";
import SignUp from "../pages/signUp.page";
import LockScreen from "../pages/lockScreen.page";
import ResetPassword from "../pages/resetPassword.page";
import ItemDetail from "../pages/itemDetail.page";
import Collection from "../pages/Collection";
import CollectionDetails from "../pages/CollectionDetails";
import User from "../pages/User";
import HotCollection from "../pages/HotCollection";
import NewlyCollection from "../pages/NewlyCollection";
import TopCollection from "../pages/TopCollection";
import Slider from "../pages/Slider";

const Routing = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [css, setCss] = useState("/css/style.min.css");
  const [nav, setNav] = useState(undefined);

  useEffect(() => {
    setCss(
      location.pathname.includes("admin")
        ? "/admin-css/style.min.css"
        : "/css/style.min.css"
    );
    setNav(location.pathname);
  }, [location]);

  useEffect(() => {
    if (css) {
      document.getElementById("theme-opt").href = css;
      setInterval(() => {
        setLoading(false);
      }, 200);
    }
  }, [css]);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    !loading && (
      <Provider store={store}>
        <ReactTooltip effect="solid" className="tooltip" clickable="true" />
        {!location.pathname.includes("admin") && <Navbar nav={nav} />}
        <ToastContainer
          position="bottom-left"
          autoClose={6000}
          hideProgressBar
          closeOnClick
          theme="dark"
          toastStyle={{
            bottom: 10,
            border: "1px solid rgba(var(--primary-rgb), 0.75)",
            boxShadow:
              "0 0 60px 5px rgba(var(--primary-rgb), 0.2), 0 0 50px 0px rgba(var(--secondary-rgb), 0.6)",
            backgroundImage:
              "linear-gradient(to right, rgba(var(--secondary-rgb), 0.3), rgba(var(--primary-rgb), 0.6)",
            color: "var(--light)",
            borderRadius: 50,
            textAlign: "center",
            fontSize: 16,
          }}
          rtl={false}
          draggable
          pauseOnHover
        />
        <Routes>
          <Route exact path="*" element={<Navigate to="/" />} />
          <Route exact path="/" element={<Home />} />

          <Route path="/crowdpad" element={<Crowdpad />} />
          <Route path="/crowdpad/details/:id" element={<CrowdpadDetails />} />
          <Route path="/crowdpad/create" element={<CrowdpadCreate />} />

          <Route path="/marketplace" element={<Marketplace />} />
          <Route
            path="/marketplace/details/:id"
            element={<MarketplaceDetails />}
          />
          <Route path="/marketplace/create" element={<MarketplaceCreate />} />

          <Route path="/rockpool" element={<RockpoolHome />} />
          <Route path="/rockpool/pools" element={<Rockpool />} />
          <Route path="/rockpool/create" element={<RockpoolCreate />} />
          <Route
            path="/rockpool/create/pool-details"
            element={<RockpoolCreateDetails />}
          />
          <Route path="/rockpool/details/:id" element={<RockpoolDetails />} />

          <Route path="/bridge" element={<Bridge />} />

          <Route path="/collections" element={<Collections />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/item-details" element={<ItemDetail />} />

          <Route path="/creator-profile" element={<CreatorProfile />} />
          <Route
            path="/creator-profile-edit"
            element={<CreatorProfileEdit />}
          />
          <Route path="/become-creator" element={<BecomeCreator />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/lock-screen" element={<LockScreen />} />

          <Route path="/admin" element={<Index />} />
          <Route path="/admin/bids" element={<Invoice />} />
          <Route path="/admin/saved" element={<CreateInvoice />} />
          <Route path="/admin/collections" element={<Bill />} />
          <Route path="/admin/wallet" element={<Balance />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/settings-profile" element={<SettingsProfile />} />
          <Route
            path="/admin/settings-application"
            element={<SettingsPreferences />}
          />
          <Route
            path="/admin/settings-security"
            element={<SettingsSecurity />}
          />
          <Route
            path="/admin/settings-activity"
            element={<SettingsActivity />}
          />
          <Route
            path="/admin/settings-payment-method"
            element={<SettingsPayment />}
          />
          <Route path="/admin/settings-api" element={<SettingsApi />} />
          <Route path="/admin/signin" element={<Signin />} />
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/lock" element={<Lock />} />
          <Route path="/admin/otp1" element={<Otp1 />} />
          <Route path="/admin/otp2" element={<Otp2 />} />
          <Route path="/admin/verify-email" element={<VerifyEmail />} />
          <Route path="/admin/reset" element={<Reset />} />
          <Route path="/trending" element={<Collection />} />
          <Route path="/hot" element={<HotCollection />} />
          <Route path="/newly" element={<NewlyCollection />} />
          <Route path="/top" element={<TopCollection />} />
          <Route path="/trending/:id" element={<CollectionDetails />} />
          <Route path="/trendingDetails/:pid/:token" element={<User />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
        <BackToTop />
        {!location.pathname.includes("admin") && <Footer />}
      </Provider>
    )
  );
};

export default Routing;
