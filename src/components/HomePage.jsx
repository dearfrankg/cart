import { createMemo, For } from "solid-js";
import { Link } from "@solidjs/router";
import { products, cart, search } from "../store";

const resources = {
  components: {
    ThreeColumnGrid: ({ children }) => <div class="grid grid-cols-3">{children}</div>,

    CardLink: ({ children, product }) => (
      <Link
        href={`/detail/${product.id}`}
        class="m-2 border border-1 border-blue-600 rounded-t-lg  bg-white"
      >
        {children}
      </Link>
    ),

    CardTitle: ({ product }) => (
      <h3 class="title font-bold truncate w-full max-w-full py-2 px-4 text-white bg-blue-600">
        {product.title}
      </h3>
    ),

    CardContent: ({ children }) => <div class=" p-3">{children}</div>,

    ProductImage: ({ product }) => (
      <div class="w-full flex justify-center">
        <img src={product.image} alt={product.title} class="h-32" />
      </div>
    ),

    ProductDescription: ({ product }) => (
      <div class="text-lg overflow-ellipsis description">{product.description}</div>
    ),

    Row: ({ children }) => <div class="flex flex-row mt-2">{children}</div>,

    ProductCategory: ({ product }) => <div class="text-md mt-1">{product.category}</div>,

    ProductPrice: ({ product }) => (
      <div class="text-lg text-right flex-grow justify-end mt-1 mr-4 font-bold">
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    ),

    AddToCartButton: ({ product }) => (
      <button
        onClick={(evt) => {
          evt.preventDefault();
          cart.addToCart(product);
        }}
        class="text-lg px-8 py-1 font-bold bg-blue-800 text-white rounded-full"
      >
        <i class="fas fa-cart-plus mr-2"></i>
        Add To Cart
      </button>
    ),
  },
};

const {
  ThreeColumnGrid,
  CardLink,
  CardTitle,
  CardContent,
  ProductImage,
  ProductDescription,
  Row,
  ProductCategory,
  ProductPrice,
  AddToCartButton,
} = resources.components;

export const HomePage = () => {
  const filteredProducts = createMemo(() =>
    products().filter(
      (product) =>
        product.title.toLocaleLowerCase().includes(search().toLocaleLowerCase()) ||
        product.description.toLocaleLowerCase().includes(search().toLocaleLowerCase())
    )
  );

  return (
    <ThreeColumnGrid>
      <For each={filteredProducts()}>
        {(product) => (
          <CardLink product={product}>
            <CardTitle product={product} />

            <CardContent>
              <ProductImage product={product} />

              <ProductDescription product={product} />

              <Row>
                <ProductCategory product={product} />
                <ProductPrice product={product} />
                <AddToCartButton product={product} />
              </Row>
            </CardContent>
          </CardLink>
        )}
      </For>
    </ThreeColumnGrid>
  );
};
