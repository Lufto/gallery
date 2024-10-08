import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IAuthor, ILocation, IPainting } from './IQuery';

export const URL = 'https://test-front.framework.team';

export const queryPaintings = (q: string, page?: number, limit?: number) => {
	const { data, isPending, error } = useQuery({
		queryKey: ['paintings', page, q],
		queryFn: async () =>
			await axios.get<IPainting[]>(
				`${URL}/paintings?${q ? `&q=${q}` : ''}${page ? `&_page=${page}` : ''}${limit ? `&_limit=${limit}` : ''}`
			),
	});
	return {
		paintings: data?.data,
		loadPicture: isPending,
		errorPicture: error,
	};
};

export const queryAuthors = () => {
	const { data, isPending, error } = useQuery({
		queryKey: ['authors'],
		queryFn: async () => await axios.get<IAuthor[]>(`${URL}/authors`),
	});
	return { authors: data?.data, loadAuthors: isPending, errorAuthors: error };
};

export const queryLocations = () => {
	const { data, isPending, error } = useQuery({
		queryKey: ['locations'],
		queryFn: async () => await axios.get<ILocation[]>(`${URL}/locations`),
	});
	return {
		locations: data?.data,
		loadLocations: isPending,
		errorLocations: error,
	};
};
