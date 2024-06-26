/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function AvatarAdmin() {
  const [cookies, _setCookies, _removeCookie] = useCookies(["accessToken"]);
  const [avatar, setAvatar] = useState(null);
  console.log(avatar);

  const getAvatar = async () => {
    try {
      const res = await fetch(
        "https://api.promo-pioneer.msyaifullahalarief.my.id/api/users/bio",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${cookies.accessToken}`,
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      setAvatar(data.users.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvatar();
  }, []);

  return (
    <>
      {avatar ? (
        <div className="w-32 h-32 rounded-full">
          <img
            src={avatar}
            alt="Avatar"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      ) : (
        <div className="bg-gray-400 rounded-full w-32 h-32 p-6 text-center my-6">
          <span className="text-xs text-center ">img</span>
        </div>
      )}
    </>
  );
}
