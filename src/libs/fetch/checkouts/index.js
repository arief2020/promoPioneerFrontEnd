const storeCarts = async (token) => {
  try {
    const res = await fetch(
      "https://api.promo-pioneer.msyaifullahalarief.my.id/api/checkouts/carts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(),
      }
    );
    const data = await res.json();
    // console.log(res);
    return { data, res };
  } catch (error) {
    console.log(error);
  }
};

const fetchCheckouts = async (id, token) => {
  try {
    const res = await fetch(
      `https://api.promo-pioneer.msyaifullahalarief.my.id/api/checkouts/${id}`,
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
    return data.getCheckCollection;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchCities = async () => {
  try {
    const res = await fetch(
      `https://api.promo-pioneer.msyaifullahalarief.my.id/api/cities`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    return data.city;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchBio = async (token) => {
  try {
    const res = await fetch(
      `https://api.promo-pioneer.msyaifullahalarief.my.id/api/users/bio`,
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
    return data.users;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchPostPayment = async (id, token) => {
  try {
    const res = await fetch(
      `https://api.promo-pioneer.msyaifullahalarief.my.id/api/payments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          checkoutColectionId: +id,
        }),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const fecthChangeAddress = async (newAddress, token) => {
  await fetch(
    `https://api.promo-pioneer.msyaifullahalarief.my.id/api/users/change-address`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(newAddress),
    }
  );
};

module.exports = {
  storeCarts,
  fetchCheckouts,
  fetchCities,
  fetchBio,
  fetchPostPayment,
  fecthChangeAddress,
};
