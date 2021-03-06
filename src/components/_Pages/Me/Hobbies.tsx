import SmallCard from "../../Cards/SmallCard";
import Typewrite from "../../Typewrite";
import { HOBBIES } from "./constants";

const Hobbies = () => {
  return (
    <div className="flex flex-col p-5 pt-10 bg-gray-800 text-white min-h-[90vh] md:pl-20 md:pt-20">
      <Typewrite
        textLine="We can also talk about"
        delay={1000}
        className="text-5xl font-bold my-10"
      />

      <p className="font-light">
        Programming is fun, but we must never forget to straighten our back,
        lift our gaze, look around and enjoy everything life's got to offer.
        <br />
        <br />
        <i>
          "...medicine, law, business, engineering, these are noble pursuits and
          necessary to sustain life. But poetry, beauty, romance, love, these
          are what we stay alive for." - John Keating, Dead Poets Society
        </i>
      </p>

      <div className="flex flex-wrap justify-around">
        {HOBBIES.map((h) => (
          <SmallCard
            key={h.title}
            {...h}
            className="my-10 w-full md:w-[25vw]"
            shadowColor="transparent"
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
