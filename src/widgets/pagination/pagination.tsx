import { FC } from 'react';
import arrowLeftDark from '../../assets/icons/arrow-left-dark.svg';
import arrowLeftLight from '../../assets/icons/arrow-left-light.svg';
import arrowRightDark from '../../assets/icons/arrow-right-dark.svg';
import arrowRightLight from '../../assets/icons/arrow-right-light.svg';
import { IPage } from '../../shared/hooks/usePage/IPage';
import { ITheme } from '../../shared/hooks/useTheme/ITheme';
import PaginationItem from '../../shared/ui/paginationItem/paginationItem';
import style from './pagination.module.scss';
import PaginationList from './PaginationList/paginationList';

const Pagination: FC<IPage & ITheme> = function Pagination({
	pageActive,
	setPageActive,
	allCurrentPage,
	theme,
}) {
	const handlePageClick = (page: number) => {
		if (page >= 1 && page <= allCurrentPage) {
			setPageActive(page);
		}
	};

	if (!allCurrentPage || allCurrentPage === 1) {
		return null;
	}

	return (
		<nav className={style.navigate}>
			<PaginationItem
				current={
					<img
						src={theme === 'light' ? arrowLeftLight : arrowLeftDark}
						alt="Стрелка влево"
					/>
				}
				arrow={pageActive !== 1}
				disable={pageActive === 1}
				onClick={() => handlePageClick(pageActive - 1)}
			/>

			<ul className={style.navigate_list}>
				<PaginationList
					allCurrentPage={allCurrentPage}
					pageActive={pageActive}
					setPageActive={setPageActive}
				/>
			</ul>

			<PaginationItem
				current={
					<img
						src={theme === 'light' ? arrowRightLight : arrowRightDark}
						alt="Стрелка вправо"
					/>
				}
				arrow={pageActive !== allCurrentPage}
				disable={pageActive === allCurrentPage}
				onClick={() => handlePageClick(pageActive + 1)}
			/>
		</nav>
	);
};

export default Pagination;
