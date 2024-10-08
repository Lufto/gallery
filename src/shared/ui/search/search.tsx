import { FC, useState } from 'react';
import deleteDark from '../../../assets/icons/close_dark.svg';
import deleteLight from '../../../assets/icons/close_light.svg';
import searchDark from '../../../assets/icons/icon_dark.svg';
import searchLight from '../../../assets/icons/icon_light.svg';

import { IPaginationItem } from './ISearch';
import style from './search.module.scss';

export const Search: FC<IPaginationItem> = ({ theme, setTextFilter }) => {
	const [value, setValue] = useState('');
	const [focus, setFocus] = useState(false);

	return (
		<section>
			<div className={style.wrapper}>
				<button
					className={style.search}
					onSubmit={e => e.preventDefault()}
				>
					<img
						src={theme == 'light' ? searchLight : searchDark}
						alt="Кнопка поиска"
					/>
				</button>
				<input
					type="text"
					name="search"
					placeholder="Painting title"
					value={value}
					onChange={e => {
						setValue(e.target.value);
						setTextFilter(e.target.value);
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className={style.search_area}
				/>
				{value && !focus ? (
					<button
						className={style.close}
						onClick={() => {
							setValue('');
							setTextFilter('');
						}}
					>
						<img
							src={theme == 'light' ? deleteLight : deleteDark}
							alt="Кнопка удаления текста"
						/>
					</button>
				) : (
					''
				)}
			</div>
		</section>
	);
};
