const api = "https://fakestoreapi.com/products/"
export const getAllProducts = async () => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
}

export const getAllCategories = async () => {
    const getCategories = api + "categories"
    const response = await fetch(getCategories);
    const data = await response.json();
    return data;
}

export const getProductById = async (id) => {
    const getProductById = api + id;
    console.log(getProductById);
    const response = await fetch(getProductById);
    const data = await response.json();
    return data;
}

export const getProductByCategory= async (category) => {
    const getProductByCategory = api + `category/${category}`
    console.log(getProductByCategory);
    const response = await fetch(getProductByCategory);
    const data = await response.json();
    return data;
}