import React from "react";
import {useRouteData} from "@remix-run/react";

// export function headers() {
//   return {
//     "cache-control": "public, max-age=300, s-max-age=3600",
//   };
// }

export function meta() {
  return {
    title: "Public Gists",
    description: "View the latest gists from the public",
  };
}

export default function Gists() {
  let data = useRouteData();
  console.log(data);
  return (
    <div>
      <h2>Public Gists</h2>
    </div>
  );
}