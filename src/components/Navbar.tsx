import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export const Navbar = () => {
	return (
		<nav className="w-full border-b	border-gray-200 dark:border-primary py-6">
			<div className="flex items-center justify-between mx-auto px-4 max-w-6xl">
				<Link href="/" className="text-3xl font-bold">
					<span className="text-primary font-logo font-extrabold">Simple</span>
					Blog
				</Link>
				<ModeToggle />
			</div>
		</nav>
	);
};
