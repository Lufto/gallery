import { FC } from 'react';
import { INoSearch } from './INoSearch';
import style from './noSearch.module.scss';

const NoSearch: FC<INoSearch> = function NoSearch({ textFilter }) {
	return (
		<section className={style.empty}>
			<div className={style.wrapper}>
				<h2>
					No matches for <span>{textFilter}</span>
				</h2>
				<p>Please try again with a different spelling or keywords.</p>
			</div>
		</section>
	);
};

export default NoSearch;
