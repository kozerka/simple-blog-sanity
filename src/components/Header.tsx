import React from 'react';

interface HeaderProps {
	title: string;
	subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title = '', subtitle = '' }) => {
	return (
		<header className="py-10 px-4 mb-12 text-center border-b dark:border-primary">
			<h2 className="text-7xl font-extrabold text-orange-500 drop-shadow-lg mb-6">
				{title}
			</h2>
			<p className="text-4xl font-bold dark:text-white drop-shadow-lg shadow-black">
				{subtitle}
			</p>
		</header>
	);
};

export default Header;
