import { FC } from 'react';
import {
	queryAuthors,
	queryLocations,
	queryPaintings,
	URL,
} from '../../shared/api/query';
import { Error } from '../../shared/ui/error/error';
import { Spinner } from '../../shared/ui/spinner/spinner';
import { IPicture } from './IPicture';
import style from './picture.module.scss';

export const Picture: FC<IPicture> = ({ textFilter, page }) => {
	const { paintings, errorPicture, loadPicture } = queryPaintings(
		textFilter,
		page.pageActive,
		6
	);
	const { authors, errorAuthors, loadAuthors } = queryAuthors();
	const { locations, errorLocations, loadLocations } = queryLocations();

	return loadAuthors || loadLocations || loadPicture ? (
		<Spinner />
	) : errorPicture || errorAuthors || errorLocations ? (
		<Error
			manege={
				'Ошибка загрузки. Перезагрузите страницу или повторите попытку позже'
			}
		/>
	) : paintings?.length == 0 ? (
		<section className={style.empty}>
			<h2>
				No matches for <span>{textFilter}</span>
			</h2>
			<p>Please try again with a different spelling or keywords.</p>
		</section>
	) : paintings && authors && locations ? (
		<>
			{paintings.map(e => {
				return (
					<li key={e.id}>
						<img
							src={`${URL}${e.imageUrl}`}
							alt={e.name}
							className={style.picture}
						/>
						<div className={style.info_picture}>
							<div className={style.info_picture__main}>
								<h1>{e.name}</h1>
								<time>{e.created}</time>
							</div>
							<div className={style.info_picture__secondary}>
								<h1>{authors[e.authorId - 1].name}</h1>
								<address>{locations[e.locationId - 1].location}</address>
							</div>
						</div>
					</li>
				);
			})}
		</>
	) : (
		''
	);
};
