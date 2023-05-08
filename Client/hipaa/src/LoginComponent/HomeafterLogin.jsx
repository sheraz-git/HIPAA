import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
function HomeafterLogin() {
  const navigate = useNavigate();
  const handleLogout = () => {
    const token = Cookies.get("token"); // Get the token from the cookie
    console.log(token);
    // Expire the token cookie by setting its expiry date to a past date
    Cookies.remove("token", { path: "/" });
    // Redirect to the login page using react-router-dom
    window.location.href = "/";
    return null;
  };

  useEffect(() => {
    const myCookieValue = Cookies.get("token"); // Get the token from the cookie
    if (!myCookieValue) {
      // Redirect to the login page using react-router-dom if token is not found
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="main">
      <button
        className="button"
        style={{ position: "relative", top: "10px" }}
        onClick={handleLogout}
      >
        LOGOUT
      </button>
      <div className="body">
        <h2 style={{ padding: "0 80px" }}>Dashboard</h2>
        <div className="services">
          <div className="service1" id="margins">
            <h3 id="center">
              <Link to="/PatientRecord"><h3>ADD RECORDS</h3> AND<h4>SHOW LISTS</h4></Link>
            </h3>
          </div>
          <div className="service2" id="margins">
            <h3 id="center">
              <Link to="/View_specificuser_records">
              <h2>  ALL RECORDS </h2>
              SHOW
             <h3>DELETE</h3> 
             <h2>UPDATE</h2> 
              </Link>{" "}
            </h3>
          </div>
        </div>
      </div>
      <Outlet /> {/* Add the Outlet component here */}
    </div>
  );
}
export default HomeafterLogin;
