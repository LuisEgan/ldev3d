import PreviewCard from "../../Cards/PreviewCard";
import PortfolioModal from "../../Modal/PortfolioModal";
import Typewrite from "../../Typewrite";
import { JOBS } from "./constants";

const Portfolio = () => {
  return (
    <div className="text-white mt-20">
      <Typewrite
        textLine="Some projects I've helped build"
        delay={1000}
        className="text-5xl font-bold my-20 px-5 text-center md:text-left md:px-20"
      />

      <div className="grid grid-cols-2 min-h-[90vh] md:grid-cols-3">
        {JOBS.map((j) => (
          <PreviewCard
            key={j.cardImg}
            bgSrc={j.cardImg}
            className="max-h-[50vh]"
          >
            <PortfolioModal {...j} />
          </PreviewCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
