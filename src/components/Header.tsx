import React from 'react';

interface HeaderProps {
	title: string;
	subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title = '', subtitle = '' }) => {
	return (
    <header className="py-10 px-4  text-center border-b dark:border-primary">
      <h2 className="lg:text-7xl  text-4xl font-extrabold text-orange-500 drop-shadow-lg mb-6">
        {title}
      </h2>
      <p className="lg:text-4xl text-2xl font-bold dark:text-white drop-shadow-lg shadow-black">
        {subtitle}
      </p>
    </header>
  );
};

export default Header;
