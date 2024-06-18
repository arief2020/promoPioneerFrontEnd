import FilterPage from "@/components/filter/FilterPage";
import React, { Suspense } from "react";
import "tailwindcss/tailwind.css";

export default function SearchPage() {
	return (
    <Suspense fallback={<div>Loading...</div>}>
      <FilterPage />
    </Suspense>
  );
}
