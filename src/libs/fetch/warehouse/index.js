export const getWarehouse = async () => {
  try {
    const res = await fetch(
      "https://api.promo-pioneer.msyaifullahalarief.my.id/api/warehouses",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    return data.warehouse;
  } catch (error) {}
};
