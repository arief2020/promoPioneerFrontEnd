/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
// import { cookies } from "next/headers";

export default function AvatarUser({token}) {
  const [avatar, setAvatar] = useState(null);
  // const cookieStore = cookies();
  // const jwtAuth = cookieStore.get("accessToken");

  const getAvatar = async () => {
    // console.log(jwtAuth)
    try {
      const res = await fetch(
        "https://api.promo-pioneer.msyaifullahalarief.my.id/api/users/bio",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      console.log(data.users, "hasil fetch di avatar user")
      setAvatar(data.users.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvatar();
  }, []);
  
  // useffect(() => {
  //   const bio = async () => {
  //     try {
  //       const user = await getBio()
  //       console.log(user, "avatar user")
  //       setAvatar(user.avatar);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   bio()
  // }, []);

  return (
    <>
    {console.log(token, "ini token avatar")}
      {avatar ? (
        <div
          tabIndex={0}
          role="button"
          className="px-0 w-[34px] h-[34px] border border-white rounded-full"
        >
          <img
            src={avatar}
            alt="Avatar"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ) : (
        <div
          tabIndex={0}
          role="button"
          className="btn px-0 bg-transparent border-none hover:bg-transparent shadow-none h-0 min-h-0"
        >
          <FaUserCircle size={28} className="text-white translate-y-0.5" />
        </div>
      )}
    </>
  );
}
