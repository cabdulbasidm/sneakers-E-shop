import { useState } from "react";

const ShoppingItems = () => {
  const [products, setProducts] = useState([]);

  const sneakers = [
    {
      id: "1",
      name: "SkyRunner 3000",
      url: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Lightweight and breathable, perfect for runners who want speed and comfort on every step.",
      price: 89,
      quantity: 1,
    },
    {
      id: "2",
      name: "Urban Glide",
      url: "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Sleek design with superior grip, made for navigating city streets in style.",
      price: 75,
      quantity: 1,
    },
    {
      id: "3",
      name: "FlashStride",
      url: "https://images.pexels.com/photos/9252069/pexels-photo-9252069.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "High-performance cushioning and bold colors designed to keep you ahead of the pack.",
      price: 89,
      quantity: 1,
    },
    {
      id: "4",
      name: "MetroFlex Pro",
      url: "https://images.pexels.com/photos/9244882/pexels-photo-9244882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Durable and flexible, built to handle both your daily commute and weekend adventures.",
      price: 110,
      quantity: 1,
    },
    {
      id: "5",
      name: "Volt Racer",
      url: "https://images.pexels.com/photos/1750045/pexels-photo-1750045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Electrify your run with vibrant energy-return soles and a snug fit.",
      price: 85,
      quantity: 1,
    },
    {
      id: "6",
      name: "NeoPulse",
      url: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Modern tech meets classic style for a sneaker that's as versatile as your lifestyle.",
      price: 99,
      quantity: 1,
    },
    {
      id: "7",
      name: "StreetWave",
      url: "https://images.pexels.com/photos/13236696/pexels-photo-13236696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Urban-inspired with extra ankle support for all-day wear and comfort.",
      price: 80,
      quantity: 1,
    },
    {
      id: "8",
      name: "Titan Sprint",
      url: "https://images.pexels.com/photos/11924646/pexels-photo-11924646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Engineered for speed and endurance, featuring advanced shock absorption.",
      price: 120,
      quantity: 1,
    },
    {
      id: "9",
      name: "AeroMax",
      url: "https://images.pexels.com/photos/7748767/pexels-photo-7748767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Maximize airflow and minimize weight with this aerodynamic design.",
      price: 105,
      quantity: 1,
    },
    {
      id: "10",
      name: "PulseTrack",
      url: "https://images.pexels.com/photos/6847398/pexels-photo-6847398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: "Responsive cushioning with a dynamic sole for smooth and steady strides.",
      price: 90,
      quantity: 1,
    },
  ];

  //   Handle add product
  const handleAddProduct = (productId) => {
    const sneakersList = sneakers.find((sneaker) => sneaker.id === productId);

    const existingProduct = products.find(
      (product) => product.id === productId
    );

    if (existingProduct) {
      const updatedProducts = products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setProducts(updatedProducts);
    } else {
      setProducts([...products, sneakersList]);
    }
  };

  //   Remove product
  const removeProduct = (productId) => {
    const sneakersList = products.filter((product) => product.id !== productId);

    setProducts(sneakersList);
  };

  //   Increment product
  const increment = (productId) => {
    const sneakersList = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setProducts(sneakersList);
  };

  //   Decrement product
  const deccrement = (productId) => {
    const sneakersList = products
      .map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);

    setProducts(sneakersList);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return (
    <>
      <h1>Sneakers e-Shop</h1>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
          {sneakers.map((sneaker) => (
            <div key={sneaker.id} style={{ maxWidth: 300, marginBottom: 28 }}>
              <img src={sneaker.url} alt="sneaker image" width={250} />
              <p>
                <strong>{sneaker.name}</strong> - {sneaker.info}
              </p>
              <span>
                <strong>${sneaker.price}</strong>
              </span>
              <button
                style={{ marginLeft: 12, cursor: "pointer" }}
                onClick={() => handleAddProduct(sneaker.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            borderTop: "2px solid gray",
            paddingTop: 12,
          }}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <div style={{ maxWidth: 300, marginBottom: 28 }}>
                <img src={product.url} alt="Sneaker image" width={250} />
                <p>
                  <strong>{product.name}</strong> - {product.info}
                </p>
                <span>
                  <strong>${product.price}</strong>
                </span>
                <button
                  style={{ marginLeft: 12, cursor: "pointer" }}
                  onClick={() => removeProduct(product.id)}
                >
                  Remove from Cart
                </button>
                <div style={{ marginTop: 12 }}>
                  <button
                    style={{ marginRight: 12, cursor: "pointer" }}
                    onClick={() => deccrement(product.id)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    style={{ marginLeft: 12, cursor: "pointer" }}
                    onClick={() => increment(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {products.length > 0 ? <h2>Your total price: ${totalPrice} </h2> : ""}
      </div>
    </>
  );
};

export default ShoppingItems;
