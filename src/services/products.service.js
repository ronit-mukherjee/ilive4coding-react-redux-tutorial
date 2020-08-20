function service() {
  const getAllProducts = () => {
    return fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key":
            "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => data.products)
      .catch((e) => e);
  };

  return {
    getAllProducts,
  };
}

const productsService = service();

export default productsService;
