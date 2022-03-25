import { ReactNode } from "react";

export interface IProvidersProps {
	children: ReactNode;
}

export interface IBook {
	title: string;
	authors: string[];
	pageCount: number;
	published: number;
	publisher: string;
	description: string;
	category: string;
	imageUrl: string;
	language: string;
	isbn10: string;
	isbn13: string;
	id: string;
}
export interface IPropsBook {
	book: IBook;
	onClick?: () => void;
}