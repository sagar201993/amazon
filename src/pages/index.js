import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "../components/ProductFeed";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/*header*/}

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>

      <ProductFeed products={products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch("https://fakestoreapi.com/products");

  const products = await data.json();

  return {
    props: {
      products,
    },
  };
}
