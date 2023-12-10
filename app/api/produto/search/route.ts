import data from "../data.json";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("q");
  const product = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return Response.json(product);
}
