import { useState } from 'react';
import { usePage } from '../shared/hooks/usePage/usePage';
import { useTheme } from '../shared/hooks/useTheme/useTheme';
import { Search } from '../shared/ui/search/search';
import { Header } from '../widgets/header/header';
import { Pagination } from '../widgets/pagination/pagination';
import { Picture } from '../widgets/picture/picture';
import style from './main.module.scss';

function Main() {
	const [textFilter, setTextFilter] = useState('');
	const theme = useTheme();
	const page = usePage(textFilter);

	return (
		<>
			<Header {...theme} />
			<Search
				{...theme}
				setTextFilter={setTextFilter}
			/>
			<ul className={style.picture_list}>
				<Picture
					page={page}
					textFilter={textFilter}
				/>
			</ul>
			<Pagination
				{...page}
				{...theme}
			/>
		</>
	);
}

export default Main;
