/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function BioUserPage() {
  const[cookies, _setCookies, _removeCookie] = useCookies(["accessToken"]);
  const router = useRouter();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchBio = async () => {
      const bio = await fetch(
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
      const data = await bio.json();
      // console.log(data.users);
      setUser(data.users);
    };
    fetchBio();
  }, []);
  const handleClick = async () => {
    router.push("/user/bio/update");
    // try {
    //   const login = await fetch("https://api.promo-pioneer.msyaifullahalarief.my.id/api/auth/login", {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: "adi@gmail.com",
    //       password: "12345678",
    //     }),
    //   });
    //   const token = await login.json();
    //   console.log(token);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <main className="bg-white shadow-lg rounded-md p-5 h-80 flex-1 flex flex-col gap-6 md:gap-0 justify-between">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm md:text-base">
        <div className="photo justify-between flex flex-col">
          <img
            src={
              user.avatar ||
              "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1718582400&semt=ais_user"
            }
            alt="alt"
            className="rounded-full w-36 h-36"
          />
          <button
            onClick={handleClick}
            className="mt-3 hidden md:block px-3 py-1.5 font-sans font-semibold text-white hover:text-black hover:bg-white bg-gradient-to-l from-orange-600 to-orange-500 rounded-full shadow-md duration-300"
          >
            Edit Profile
          </button>
        </div>
        <div className="detail-profile flex gap-8 md:gap-16">
          <div className="field">
            <p className="mb-2">Name</p>
            <p className="mb-2">Age</p>
            <p className="mb-2">Gender</p>
            <p className="mb-2">Address</p>
            <p className="mb-2">Phone Number</p>
            <p className="mb-2">Email</p>
            <p className="mb-2">Affiliate Code</p>
          </div>
          <div className="field-detail">
            <p className="mb-2">
              {": "}
              {user.name}
            </p>
            <p className="mb-2">
              {": "}
              {user.age}
            </p>
            <p className="mb-2">
              {": "}
              {user.gender}
            </p>
            <p className="mb-2">
              {": "}
              {user.full_address}
            </p>
            <p className="mb-2">
              {": "}
              {user.phone_number}
            </p>
            <p className="mb-2">
              {": "}
              {user.email}
            </p>
            <p className="mb-2">{": "}8JKDWZ</p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="mt-3 md:hidden px-3 py-1.5 font-sans font-semibold text-white hover:text-black hover:bg-white bg-orange-600 rounded-full shadow-md duration-300"
        >
          Edit Profile
        </button>
      </div>
    </main>
  );
}
