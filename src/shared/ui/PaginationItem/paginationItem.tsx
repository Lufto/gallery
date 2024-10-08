import clsx from 'clsx';
import { FC } from 'react';
import { IPaginationItem } from './IPaginationItem';

import style from './paginationItem.module.scss';

export const PaginationItem: FC<IPaginationItem> = ({
	current,
	arrow,
	active,
	disable,
	onClick,
}) => {
	return (
		<li>
			<button
				className={clsx(
					arrow ? style.arrow : '',
					active ? style.active : '',
					disable ? style.disable : '',
					!disable && !arrow && !active ? style.pagination_item : ''
				)}
				onClick={onClick}
			>
				{current}
			</button>
		</li>
	);
};
