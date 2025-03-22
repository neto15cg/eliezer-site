export const SectionLink = ({
  href = "#",
  children,
  onClick,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex" onClick={onClick}>
      <a
        href={href}
        className="text-[1.3rem] block hover:text-base-50 transition-colors relative group font-medium "
      >
        <div className="py-1 font-bold">{children}</div>
        <span className="absolute h-0.5 w-0 bg-base-50 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </div>
  );
};
