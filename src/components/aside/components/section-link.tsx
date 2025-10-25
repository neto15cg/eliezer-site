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
        className="text-lg block hover:text-secondary-300 transition-all duration-300 relative group font-medium text-base-200 hover:translate-x-2"
      >
        <div className="py-3 px-4 rounded-lg hover:bg-base-800/50 transition-colors duration-300">
          {children}
        </div>
        <span className="absolute h-0.5 w-0 bg-gradient-to-r from-secondary-500 to-secondary-300 bottom-2 left-4 transition-all duration-300 group-hover:w-8"></span>
      </a>
    </div>
  );
};
