import { SECTIONS_IDS } from "../../../utils/constants";
import Section from "../../Section";
import Contact from "./Contact";
import Hi from "./Hi";
import Hobbies from "./Hobbies";
import Portfolio from "./Portfolio";
import WhoAmI from "./WhoAmI";

export const MeComponents = [
  { id: SECTIONS_IDS.Hi, page: <Hi /> },
  { id: SECTIONS_IDS.WhoAmI, page: <WhoAmI /> },
  { id: SECTIONS_IDS.Portfolio, page: <Portfolio /> },
  { id: SECTIONS_IDS.Hobbies, page: <Hobbies /> },
  { id: SECTIONS_IDS.Contact, page: <Contact /> },
];

const Me = () => {
  return (
    <>
      {MeComponents.map(({ id, page }) => (
        <Section id={id} key={id} isPriority={id === SECTIONS_IDS.Hi}>
          {page}
        </Section>
      ))}
    </>
  );
};

export default Me;
