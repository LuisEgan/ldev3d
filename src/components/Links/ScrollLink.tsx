interface IScrollLink {
  scrollToId: string;
  title?: string;
  offset?: number;
  className?: string;
  onClick?: () => void;
}

const ScrollLink = (props: IScrollLink) => {
  const { scrollToId, title, onClick, offset = -120, className = "" } = props;

  const scrollTo = () => {
    const element = document.getElementById(scrollToId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: "smooth" });

    if (onClick) onClick();
  };

  return (
    <div className={`cursor-pointer mx-2 ${className}`} onClick={scrollTo}>
      {title || scrollToId}
    </div>
  );
};

export default ScrollLink;
