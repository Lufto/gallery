import { FC } from 'react';
import { URL } from '../../api/query';
import { IPictureItem } from './IPictureItem';
import style from './pictureItem.module.scss';

const PictureItem: FC<IPictureItem> = function PictureItem({
	imageUrl,
	name,
	created,
	authors,
	authorId,
	locations,
	locationId,
}) {
	return (
		<li>
			<img
				src={`${URL}${imageUrl}`}
				alt={name}
				className={style.picture}
			/>
			<div className={style.info_picture}>
				<div className={style.info_picture__main}>
					<h1>{name}</h1>
					<time>{created}</time>
				</div>
				<div className={style.info_picture__secondary}>
					<h1>{authors[authorId - 1].name}</h1>
					<address>{locations[locationId - 1].location}</address>
				</div>
			</div>
		</li>
	);
};

export default PictureItem;
