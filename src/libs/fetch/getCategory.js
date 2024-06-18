export default async function getCategory() {
  const response = await fetch(
    "https://api.promo-pioneer.msyaifullahalarief.my.id/api/categories",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const data = await response.json();
  return data.category;
}
