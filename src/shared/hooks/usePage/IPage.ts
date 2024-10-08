export interface IPage {
	pageActive: number;
	setPageActive: React.Dispatch<React.SetStateAction<number>>;
	allCurrentPage: number;
	loadPicture?: boolean;
	errorPicture?: Error | null;
}
