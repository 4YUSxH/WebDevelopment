import axios from "axios";

export const getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    return res.data;
  };