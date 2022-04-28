import Image from "next/image";
import IconsCard from "../../Cards/IconsCard";
import SVG from "../../SVG";
import Typewrite from "../../Typewrite";
import Tilt from "../../Wrappers/Tilt";
import { TOOLS } from "./constants";

interface IBalls {
  reverse?: boolean;
  qty?: number;
}
const Balls = (props: IBalls) => {
  const { reverse, qty = 5 } = props;

  const MIN_LIMIT = 15;
  const REVERSE_MULT = reverse ? -1 : 1;
  const FIRST = reverse ? MIN_LIMIT + (qty - 1) * qty : MIN_LIMIT;

  return (
    <div className="flex items-end flex-1 justify-between w-full py-3 md:py-0">
      {[...new Array(qty)].map((e, i) => {
        const fill = i % 2 === 0 ? "orange" : "gray";
        const size = FIRST + i * qty * REVERSE_MULT;

        return <SVG key={size} src="svg/circle.svg" {...{ size, fill }} />;
      })}
    </div>
  );
};

const WhoAmI = () => {
  return (
    <div className="flex flex-col p-5 pt-10 bg-gray-800 text-white min-h-[90vh] md:pl-20 md:pt-20">
      <Typewrite
        textLine="A little bit about myself"
        delay={1000}
        className="text-4xl font-bold mb-5"
      />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 py-5 leading-9 font-thin md:pr-3">
          <p>
            I'm a latino, Venezuelan{" "}
            <img src="svg/ve.svg" className="inline-block w-5" /> / Chilean{" "}
            <img src="svg/cl.svg" className="inline-block w-5" />, Fullstack
            typescript developer with
            <b> 8 years of professional experience</b> and a special passion and
            love for the frontend and mobile development, and also a{" "}
            <u>certified Unity developer</u> with a managing background leading
            multiple teams.
          </p>
          <br />
          <p>
            I am a firm believer that the learn-by-doing method is the best so I
            always try to improve by crafting something new. Also, I've taken
            some excellent online courses and I keep myself updated by reading
            books and articles, funny enough,{" "}
            <b>Twitter is one of my most valuable academic tools</b>. I'm always
            looking forward to keep on learning and creating.
          </p>
        </div>

        <div className="p-5 overflow-hidden h-[70vh] md:pl-3 md:flex-1">
          <Tilt
            className="relative h-full fade-in-right"
            shadowColor="transparent"
          >
            <Image
              src="/jfif/me.jfif"
              alt="luis-egan"
              className="rounded-xl"
              layout="fill"
              objectFit="cover"
              sizes="50vw"
            />
          </Tilt>
        </div>
      </div>

      <div className="flex flex-col py-20">
        <div className="flex flex-col py-10 items-center justify-around md:flex-row">
          {/* <Balls /> */}
          <div className="text-4xl px-5 font-bold text-center">
            Tools I'm most comfortable with
          </div>
          {/* <Balls reverse /> */}
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          {Object.keys(TOOLS).map((category) => (
            <IconsCard
              key={category}
              icons={TOOLS[category].stack}
              title={category}
              mainIcon={TOOLS[category].icon}
              className="h-[45vh] w-full"
            />
          ))}

          <div className="w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
