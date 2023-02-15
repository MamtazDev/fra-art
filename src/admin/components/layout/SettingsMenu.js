import { Link, useLocation } from "react-router-dom";

function SettingsMenu() {
  const location = useLocation();

  return (
    <>
      <ul className="settings-menu">
        <li className={location == "/admin/settings-profile" ? "active" : ""}>
          <Link to="/admin/settings-profile">
            <a>Profile</a>
          </Link>
        </li>
        <li
          className={location == "/admin/settings-application" ? "active" : ""}
        >
          <Link to="/admin/settings-application">
            <a>Application</a>
          </Link>
        </li>
        <li className={location == "/admin/settings-security" ? "active" : ""}>
          <Link to="/admin/settings-security">
            <a>Security</a>
          </Link>
        </li>
        <li className={location == "/admin/settings-activity" ? "active" : ""}>
          <Link to="/admin/settings-activity">
            <a>Activity</a>
          </Link>
        </li>
        <li
          className={
            location == "/admin/settings-payment-method" ? "active" : ""
          }
        >
          <Link to="/admin/settings-payment-method">
            <a>Payment Method</a>
          </Link>
        </li>
        <li className={location == "/admin/settings-api" ? "active" : ""}>
          <Link to="/admin/settings-api">
            <a>API</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
export default SettingsMenu;
