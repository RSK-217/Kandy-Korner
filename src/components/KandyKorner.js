import React from "react"
import { Locations } from "./Locations/Locations.js"
import { Products } from "./Products/Products.js"

export const KandyKorner = () => {
  return (
    <>
    <h1>Kandy Korner</h1>

    <h3>Locations</h3>
    <Locations />

    <h3>Products</h3>
    <Products />
    </>
  );
}

export default KandyKorner;
