import { FC } from 'react';
import themeLight from '../../assets/icons/dark_icon.svg';
import themeDark from '../../assets/icons/light_icon.svg';
import logoDark from '../../assets/icons/logo_dark.svg';
import logoLight from '../../assets/icons/logo_light.svg';
import { ITheme } from '../../shared/hooks/useTheme/ITheme';

import style from './header.module.scss';

export const Header: FC<ITheme> = ({ theme, setTheme }) => {
	return (
		<header className={style.container}>
			<img
				src={theme == 'light' ? logoLight : logoDark}
				alt="Логотип"
				className={style.logo}
			/>
			<div className={style.warper}>
				<img
					src={theme == 'light' ? themeLight : themeDark}
					alt={theme == 'light' ? 'Светлая тема' : 'Тёмная тема'}
					onClick={() =>
						theme == 'light' ? setTheme('dark') : setTheme('light')
					}
					className={style.theme}
				/>
			</div>
		</header>
	);
};
