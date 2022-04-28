import { FC, useEffect, useRef, useState } from "react";

interface ISection {
  className?: string;
  isPriority?: boolean;
  children?: React.ReactNode;
  id?: string;
}

const Section: FC<ISection> = (props) => {
  const { children, id, isPriority = false, className = "" } = props;

  const sectionRef = useRef<HTMLDivElement>(null);

  const [show, setshow] = useState<boolean>(isPriority);

  useEffect(() => {
    if (!sectionRef?.current) return;

    const intObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setshow(true);
        }
      });
    });

    intObserver.observe(sectionRef.current);
  }, [sectionRef]);

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${
        show ? "fade-in-section" : ""
      } ${className}`}
      ref={sectionRef}
    >
      {show ? children : <></>}
    </section>
  );
};

export default Section;
