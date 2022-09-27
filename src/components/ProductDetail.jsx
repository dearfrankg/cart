import { createMemo } from "solid-js";
import { useParams } from "@solidjs/router";
import { products, cart } from "../store";

const resources = {
  components: {
    Container: ({ children, product }) => <div class="p-10">{product() && children}</div>,

    ProductTitle: ({ product }) => (
      <h3 class="title font-bold text-3xl truncate w-full max-w-full mb-2">{product().title}</h3>
    ),

    TwoColumnGrid: ({ children }) => <div class="grid grid-cols-2 gap-10">{children}</div>,

    ProductImage: ({ product }) => (
      <div class="w-full flex justify-center">
        <img src={product().image} alt={product().title} class="text-center" />
      </div>
    ),

    Container2: ({ children }) => <div class="bg-white p-3">{children}</div>,

    ProductDescription: ({ product }) => (
      <div class="text-lg overflow-ellipsis description">{product().description}</div>
    ),

    Row: ({ children }) => <div class="flex flex-row mt-2">{children}</div>,

    ProductCategory: ({ product }) => <div class="text-md mt-1">{product().category}</div>,

    ProductPrice: ({ product }) => (
      <div class="text-2xl text-right flex-grow justify-end mt-1 mr-4">
        {product().price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    ),

    AddToCartBtn: ({ product }) => (
      <button
        onClick={(evt) => {
          evt.stopPropagation();
          cart.addToCart(product());
        }}
        class="text-2xl px-8 py-1 font-bold bg-blue-800 text-white rounded-full"
      >
        <i class="fas fa-cart-plus mr-2"></i>
        Add To Cart
      </button>
    ),
  },
};

const {
  Container,
  ProductTitle,
  TwoColumnGrid,
  ProductImage,
  Container2,
  ProductDescription,
  Row,
  ProductCategory,
  ProductPrice,
  AddToCartBtn,
} = resources.components;

export const ProductDetail = () => {
  const { id } = useParams();

  const product = createMemo(() => products().find((p) => p.id === parseInt(id)));

  return (
    <Container {...{ product }}>
      <>
        {product() && (
          <>
            <ProductTitle {...{ product }} />
            <TwoColumnGrid>
              <ProductImage {...{ product }} />

              <Container2>
                <ProductDescription {...{ product }} />
                <Row>
                  <ProductCategory {...{ product }} />
                  <ProductPrice {...{ product }} />
                  <AddToCartBtn {...{ product }} />
                </Row>
              </Container2>
            </TwoColumnGrid>
          </>
        )}
      </>
    </Container>
  );
};
