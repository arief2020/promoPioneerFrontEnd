/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function CounterCart({token}) {
  const [count, setCount] = useState(null);

  const getCount = async () => {
    try {
      const res = await fetch(
        "https://api.promo-pioneer.msyaifullahalarief.my.id/api/carts",
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
      setCount(data.carts.cartItem.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <>
      {count > 0 ? (
        <span className="text-[10px] font-semibold bg-white text-orange-600 rounded-full py-0 px-1.5 absolute top-0 right-0">
          {count}
        </span>
      ) : null}
    </>
  );
}
