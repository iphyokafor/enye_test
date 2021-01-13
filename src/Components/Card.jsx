import React from "react";

import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import logo from "./../Images/cardProfile.jpg";
import logo1 from "./../Images/avatar.jpeg";
import logo2 from "./../Images/spinner.svg";

const Card = ({ userInfo, loading }) => {
  if (loading) {
    return <img className="w-full" src={logo2} alt="logo2" />;
  }
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-3">
        {userInfo.map((val, i) => (
          <div className="flex flex-col items-center justify-center p-4 rounded-lg">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
              <div
                className="relative z-10"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3vw))",
                }}>
                <img className="w-full" src={logo} alt="logo" />
                <div
                  className="text-center absolute w-full"
                  style={{ bottom: "4rem" }}>
                  <p className="text-white tracking-wide uppercase text-lg font-semibold">
                    {val.FirstName} {val.LastName}
                  </p>

                  <p className="block mt-1 text-white text-sm leading-tight font-medium  hover:underline">
                    <span>
                      <EmailIcon />{" "}
                    </span>
                    <span>email: </span>
                    {val.Email}
                  </p>
                </div>
              </div>
              <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                <p className="flex items-center text-sm text-gray-400">
                  <span className="inline-block w-3 h-3  rounded-full"></span>
                </p>
                <img
                  className="rounded-full w-14 h-14"
                  src={logo1}
                  alt="logo"
                />
              </div>
              <div className="pt-6 pb-8 text-gray-600 text-center">
                <p
                  className="block  text-sm leading-tight font-medium text-black hover:underline"
                  style={{ color: "#00809d" }}>
                  <span>
                    <PermIdentityIcon />{" "}
                  </span>
                  <span>Username: </span>
                  {val.UserName}
                </p>
                <p
                  className="block mt-1 text-sm leading-tight font-medium text-black hover:underline"
                  style={{ color: "#00809d" }}>
                  <span>
                    <PhoneIcon />{" "}
                  </span>
                  <span>Phone no: </span>
                  {val.PhoneNumber}
                </p>
              </div>

              <div className="pb-10 text-center tracking-wide flex justify-around">
                <div className="posts">
                  <p className="block text-gray-400  text-sm leading-tight font-medium text-black hover:underline">
                    <span>Gender: </span>
                  </p>
                  <p className="text-sm font-semibold text-blue-300">
                    {val.Gender}
                  </p>
                </div>
                <div className="followers">
                  <p className="block text-gray-400 text-sm leading-tight font-medium text-black hover:underline">
                    <span>PayMethod: </span>
                  </p>
                  <p className="text-sm font-semibold text-blue-300">
                    {val.PaymentMethod}
                  </p>
                </div>
                <div className="following">
                  <p className="block text-gray-400 text-sm leading-tight font-medium text-black hover:underline">
                    <span>CardType: </span>
                  </p>
                  <p className="text-sm font-semibold text-blue-300">
                    {val.CreditCardType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
