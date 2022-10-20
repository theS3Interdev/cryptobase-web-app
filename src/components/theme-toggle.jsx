import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="p-2">
			{theme === 'dark' ? (
				<div
					className="flex cursor-pointer items-center"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					<HiSun className="mr-2 text-2xl text-primary" /> Light Mode
				</div>
			) : (
				<div
					className="flex cursor-pointer items-center"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					<HiMoon className="mr-2 text-2xl text-primary" /> Dark Mode
				</div>
			)}
		</div>
	);
};

export default ThemeToggle;
