import React, { useState } from "react";
import md5 from "md5";
import { useCookie } from "next-cookie";

function internelMd5(str) {
  if (str) {
    return md5(str);
  } else {
    return "";
  }
}

const PasscodeProtectProvider = ({ children }) => {
  const cookie = useCookie();
  //
  const siteProtectedByPasscode = !!process.env.NEXT_PUBLIC_MD5_PASSCODE;

  if (siteProtectedByPasscode) {

    const [isPassed, setPassed] = useState(
      internelMd5(cookie.get("passcode")) === process.env.NEXT_PUBLIC_MD5_PASSCODE
    );

    const [passcode, setPasscode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handlePasscodeSubmit = (event) => {
      if (internelMd5(passcode) === process.env.NEXT_PUBLIC_MD5_PASSCODE) {
        cookie.set("passcode", passcode, {path: "/"});
        setPassed(true);
      } else {
        setErrorMessage("Passcode is not matched");
      }
      event.preventDefault();
    };

    if (!isPassed) {
      return (
        <form onSubmit={handlePasscodeSubmit}>
          <h1>Protected Page</h1>
          {errorMessage && (
            <div style={ { color: "red" } }>{errorMessage}</div>
          )}
          <input type="password" value={passcode} onChange={(event) => setPasscode(event.target.value)} />
          <input type="submit" value="enter" />
        </form>
      );
    }
  }

  return (
    <>
      { children }
    </>
  );

};

export default PasscodeProtectProvider;
