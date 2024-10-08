import { useEffect, useState } from 'react';
import { queryPaintings } from '../../api/query';
import { IPage } from './IPage';

const usePage = (sort: string): IPage => {
	const [allCurrentPage, setAllCurrentPage] = useState(0);
	const [pageActive, setPageActive] = useState(1);
	const { paintings, loadPicture, errorPicture } = queryPaintings(sort);

	useEffect(() => {
		setAllCurrentPage(
			paintings && paintings.length ? Math.ceil(paintings.length / 6) : 0
		);

		if (pageActive > allCurrentPage && allCurrentPage !== 0) {
			setPageActive(allCurrentPage);
		}
	}, [paintings, pageActive, allCurrentPage]);

	return {
		pageActive,
		setPageActive,
		allCurrentPage,
		loadPicture,
		errorPicture,
	};
};

export default usePage;
