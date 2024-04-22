export const fetchAllProducts = async () => {
    const response = await fetch('http://localhost:4000/allproducts');
    const data = await response.json();
    return data;
  };