import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      {/* <a href="/users">users</a> */}
      <Link href={"/users"}>users</Link>
      <ProductCard />
    </main>
  );
}
