import SVG from "../SVG";

const Footer = () => {
  return (
    <>
      <hr className="border-gray-500" />
      <footer className="text-center flex flex-col justify-center items-center bg-gray-800 text-gray-400 font-light text-xs py-10">
        Designed and coded by me with ❤️ <br />
        <br />
        Want to check how?
        <br />
        <a
          href="https://github.com/LuisEgan/ldev3d"
          target="_blank"
          className="underline m-auto flex"
        >
          Here you go &nbsp;<SVG src="svg/github.svg" size={15}/>
        </a>
      </footer>
    </>
  );
};

export default Footer;
