import { IAuthor, ILocation } from '../../api/IQuery';

export interface IPictureItem {
	imageUrl: string;
	name: string;
	created: string;
	authors: IAuthor[];
	authorId: number;
	locations: ILocation[];
	locationId: number;
}
