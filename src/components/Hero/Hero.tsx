import hero from "../../assets/hero.jpg";

export function Hero() {
  return (
    <>
      <section className="w-full h-[300px]">
        <img
          src={hero}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </section>
    </>
  );
}
