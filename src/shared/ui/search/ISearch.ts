import { ITheme } from '../../hooks/useTheme/ITheme';

export interface IPaginationItem extends ITheme {
	setTextFilter: (text: string) => void;
}
