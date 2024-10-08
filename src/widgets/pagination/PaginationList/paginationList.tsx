import { FC } from 'react';
import { IPage } from '../../../shared/hooks/usePage/IPage';
import { PaginationItem } from '../../../shared/ui/PaginationItem/paginationItem';

export const PaginationList: FC<IPage> = ({
	pageActive,
	allCurrentPage,
	setPageActive,
}) => {
	const createPaginationItem = (page: number | string, disable = false) => (
		<PaginationItem
			key={page}
			current={page}
			active={page === pageActive}
			disable={disable}
			onClick={() => typeof page === 'number' && setPageActive(page)}
		/>
	);

	const paginationItems = [];

	paginationItems.push(createPaginationItem(1));

	if (pageActive > 3) paginationItems.push(createPaginationItem('...', true));

	for (
		let i = Math.max(2, pageActive - 1);
		i <= Math.min(allCurrentPage - 1, pageActive + 1);
		i++
	) {
		paginationItems.push(createPaginationItem(i));
	}

	if (pageActive < allCurrentPage - 2)
		paginationItems.push(createPaginationItem('...', true));

	paginationItems.push(createPaginationItem(allCurrentPage));

	return <>{paginationItems}</>;
};
