import data from "../data.json";

export async function GET(request, { params }) {
  const produto = data.products.find((product) => product.slug === params.slug);

  return Response.json(produto);
}
