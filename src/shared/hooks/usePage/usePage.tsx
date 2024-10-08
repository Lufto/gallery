import { useEffect, useState } from 'react';
import { queryPaintings } from '../../api/query';
import { IPage } from './IPage';

export const usePage = (sort: string): IPage => {
	const [allCurrentPage, setAllCurrentPage] = useState(0);
	const [pageActive, setPageActive] = useState(1);
	const { paintings, loadPicture, errorPicture } = queryPaintings(sort);

	useEffect(() => {
		console.log(pageActive);
		console.log(allCurrentPage);
		console.log(pageActive >= allCurrentPage);
		setAllCurrentPage(paintings ? Math.ceil(paintings?.length / 6) : 0);
		if (pageActive >= allCurrentPage && allCurrentPage != 0) {
			setPageActive(allCurrentPage);
		}
	}, [paintings, pageActive]);

	return {
		pageActive,
		setPageActive,
		allCurrentPage,
		loadPicture,
		errorPicture,
	};
};
