fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    console.log(products);

    let tableData = "";
    products.forEach((product) => {
      tableData += `<tr>
      <td>${product.title}</td>
      <td>${product.description}</td>
      <td>${product.price}</td>
      <td><img src="${product.image}" alt="Product 1" /></td>
    </tr>`;
    });

    document.getElementById("table-body").innerHTML = tableData;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
