import Image from "next/image";
import YouTube from "react-youtube";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { IJob } from "../_Pages/Me/constants";

interface IPortfolioModal extends IJob {
  className?: string;
}
const PortfolioModal = (props: IPortfolioModal) => {
  const {
    description,
    title,
    headerImg,
    link,
    youtubeId,
    className = "",
  } = props;

  const { screenW } = useWindowSize();

  const openLink = () => {
    window.open(link, "_blank").focus();
  };

  const videoOpts = {
    height: "300",
    width: Math.min(screenW * 0.6, 400),
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={`flex flex-col w-full text-gray-400 ${className}`}>
      <div className="relative w-full h-72">
        {youtubeId ? (
          <div className="flex justify-center items-center">
            <YouTube videoId={youtubeId} opts={videoOpts} />
          </div>
        ) : (
          <Image
            src={headerImg || ""}
            alt={"imgAlt"}
            layout="fill"
            objectFit="cover"
            sizes="50vw"
          />
        )}
      </div>

      <div className="flex flex-col overflow-y-auto flex-1 my-10 px-10">
        <div className="w-full text-center text-3xl font-bold mb-5 text-white">
          {title}
        </div>

        <p className="font-light">{description}</p>
      </div>

      {link && (
        <div
          onClick={openLink}
          className="flex justify-center items-center w-full p-5 cursor-pointer bg-gray-800 text-gray-400 hover:bg-main-500 hover:text-black"
        >
          {link}
        </div>
      )}
    </div>
  );
};

export default PortfolioModal;
