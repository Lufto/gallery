import { FC } from 'react';
import {
	queryAuthors,
	queryLocations,
	queryPaintings,
} from '../../shared/api/query';

import { IPicture } from './IPicture';
import Spinner from '../../shared/ui/spinner/spinner';
import NoSearch from '../../shared/ui/noSearch/noSearch';
import Error from '../../shared/ui/error/error';
import PictureItem from '../../shared/ui/pictureItem/pictureItem';

const Picture: FC<IPicture> = function Picture({ textFilter, pageActive }) {
	const { paintings, errorPicture, loadPicture } = queryPaintings(
		textFilter,
		pageActive,
		6
	);
	const { authors, errorAuthors, loadAuthors } = queryAuthors();
	const { locations, errorLocations, loadLocations } = queryLocations();

	if (loadAuthors || loadLocations || loadPicture) {
		return <Spinner />;
	}

	if (errorPicture || errorAuthors || errorLocations) {
		return (
			<Error manege="Ошибка загрузки. Перезагрузите страницу или повторите попытку позже" />
		);
	}

	if (paintings?.length === 0) {
		return <NoSearch textFilter={textFilter} />;
	}

	if (paintings && authors && locations) {
		return (
			<>
				{paintings.map(
					({ id, imageUrl, name, created, authorId, locationId }) => (
						<PictureItem
							key={id}
							imageUrl={imageUrl}
							name={name}
							created={created}
							authors={authors}
							authorId={authorId}
							locations={locations}
							locationId={locationId}
						/>
					)
				)}
			</>
		);
	}

	return null;
};

export default Picture;
