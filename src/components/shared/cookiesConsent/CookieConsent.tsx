import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = (props:any) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };
  const declineCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "false", {});
  };

  if (showConsent) {
    return null;
  }

  return (
<div className="fixed-top bg-slate-700">
    <div className="fixed-bottom left-0 right-0 d-flex justify-content-between align-items-center px-4 py-2"  style={{backgroundColor: "rgb(41, 47, 67)"}}>
        <span className="text-white text-base mr-3">
            <h6>This website uses cookies</h6>
            <p style={{fontSize:"14px"}} className="pe-4 mt-1 lh-sm">We use cookies to ensure you get the best experience on our website. Cookies also assit in our marketing efforts and analytics. By clicking Accept, you agree to our use of cookies. Learn more about our <Link href={"/privacy-policy"} className="underline" style={{color: "#EC2628"}}>
              <u>Privacy Policy</u></Link></p>
        </span>
        <div className="d-flex flex-column me-4">
          <button className="btn btn-success py-1 mb-2" onClick={declineCookie} style={{fontSize: "15px", borderRadius: "5px"}}>
              Accept
          </button>
          <button className="btn btn-danger py-1" onClick={declineCookie} style={{fontSize: "15px", borderRadius: "5px"}}>
              Decline
          </button>
        </div>
    </div>
</div>

  );
};

export default CookieConsent;