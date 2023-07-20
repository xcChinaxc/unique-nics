import { Navbar, HeroHeader, Service, Footer, Product } from '../components';

export default async function Home() {

  return (
    <div className="max-w-5xl max-auto py-10">
      <Navbar />

      <HeroHeader />

      <Service />

      <Product />

    </div>

  );

}
