import { useState } from 'react';

import usePage from '../shared/hooks/usePage/usePage';
import useTheme from '../shared/hooks/useTheme/useTheme';
import Search from '../shared/ui/search/search';
import Header from '../widgets/header/header';
import Pagination from '../widgets/pagination/pagination';
import Picture from '../widgets/picture/picture';
import style from './main.module.scss';

function Main() {
	const [textFilter, setTextFilter] = useState('');
	const { theme, setTheme } = useTheme();
	const { pageActive, setPageActive, allCurrentPage } = usePage(textFilter);

	return (
		<>
			<Header
				theme={theme}
				setTheme={setTheme}
			/>
			<Search
				theme={theme}
				setTheme={setTheme}
				setTextFilter={setTextFilter}
			/>
			<ul className={style.picture_list}>
				<Picture
					pageActive={pageActive}
					textFilter={textFilter}
				/>
			</ul>
			<Pagination
				pageActive={pageActive}
				setPageActive={setPageActive}
				allCurrentPage={allCurrentPage}
				theme={theme}
				setTheme={setTheme}
			/>
		</>
	);
}

export default Main;
