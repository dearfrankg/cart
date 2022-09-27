import { Link } from "@solidjs/router";
import { cart, search, onSetSearch } from "../store";

const resources = {
  components: {
    Container: ({ children }) => (
      <div class="bg-blue-900 text-white flex flex-row w-full py-4">{children}</div>
    ),

    EcommerceLink: () => (
      <div class="text-2xl px-10 py-2">
        <Link href="/">
          <i class="fas fa-donate mr-2"></i>
          Simple eCommerce
        </Link>
      </div>
    ),

    Input: () => (
      <div class="flex-grow">
        <input
          type="text"
          value={search()}
          onKeyUp={(evt) => onSetSearch(evt.currentTarget.value)}
          class="p-2 text-xl bg-white text-black rounded-lg max-w-md w-96"
        />
      </div>
    ),

    Tooltip: () => {
      const _components = {
        Container: ({ children }) => (
          <div class="px-10 py-2 justify-end has-tooltip">{children}</div>
        ),

        Tooltip: () => (
          <span class="tooltip cart">
            <div>Cart ({cart.products.length})</div>
            <For each={cart.products}>
              {(p) => (
                <div class="flex flex-row my-2">
                  <img src={p.image} alt={p.title} class="h-8 mr-2" />
                  <h3 class="title text-md truncate flex-grow">{p.title}</h3>
                  <div class="text-md text-right flex-grow justify-end ml-2">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
              )}
            </For>
            <div class="flex">
              <button
                onClick={() => cart.clearCart()}
                class="text-md px-8 py-1 font-bold bg-blue-800 text-white rounded-full"
              >
                Clear Cart
              </button>
              <div class="text-md text-right flex-grow justify-end ml-2">
                {cart.total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
          </span>
        ),
      };

      const { Container, Tooltip } = _components;

      return (
        <Container>
          <Tooltip />
          <i class="fas fa-shopping-cart mr-2"></i>
          <span class="font-bold text-xl">{cart.products.length}</span>
        </Container>
      );
    },
  },
};

const { Container, EcommerceLink, Input, Tooltip } = resources.components;

export const Header = () => (
  <Container>
    <EcommerceLink />
    <Input />
    <Tooltip />
  </Container>
);
