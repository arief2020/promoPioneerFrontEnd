export const getBio = async (req) => {
  try {
	const token = req.cookies.get("accessToken")?.value;
	console.log(token, "dari frontend")
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
	return data.users
  } catch (error) {
    console.log(error);
  }
};
