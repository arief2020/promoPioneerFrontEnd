import BioUserPage from "@/components/user/BioUserPage";

export const metadata = {
  title: "Bio Profile - Promo Pioneer",
  description: "Bio Profile Page",
};

export default async function Page() {
  // const bio = await fetch("https://api.promo-pioneer.msyaifullahalarief.my.id/api/users/bio", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  // });
  // const data = await bio.json();
  // console.log(data);
  return <BioUserPage />;
}
