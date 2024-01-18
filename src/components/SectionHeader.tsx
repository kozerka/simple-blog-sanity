import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<HeaderProps> = ({
  title = "",
  subtitle = "",
}) => {
  return (
    <header className="py-6 px-4  text-center">
      <p className="mb-2 inline-block border-b border-primary border-b-4 lg:text-lg text-primary text-md font-bold dark:text-white drop-shadow-lg shadow-black uppercase">
        {subtitle}
      </p>
      <h2 className="lg:text-3xl  text-xl font-extrabold  uppercase">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeader;
