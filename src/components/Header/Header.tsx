import logo from "../../assets/logo.webp"; 

export function Header() {
  return (
    <>
      <header className="bg-green-700 text-white flex items-center p-4">
        <img src={logo} alt="Logo" className="h-12 w-10 mr-3" />
        <h1 className="text-lg font-bold">UNIESQUINA</h1>
      </header>
    </>
  );
}
