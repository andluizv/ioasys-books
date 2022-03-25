import { IPropsBook } from "../../types";
import { BookAuthor, BookCover, BookInfos, BookTitle, Card, ContentBreaker, InfosContainer } from "./styles";



const CardBook = (props: IPropsBook) => {
    const { imageUrl, title, authors, pageCount, published, publisher} = props.book;
	const { onClick } = props;
    return (
		<Card onClick={onClick}>
			<BookCover src={imageUrl} alt={`${title} cover`} />
			<InfosContainer>
				<ContentBreaker>
					<BookTitle>{title}</BookTitle>
					{authors.map(author => <BookAuthor key={author}>{author}</BookAuthor>)}
				</ContentBreaker>
				<ContentBreaker>
					<BookInfos>{pageCount} páginas</BookInfos>
					<BookInfos>Editora {publisher}</BookInfos>
					<BookInfos>Publicado em {published}</BookInfos>
				</ContentBreaker>
			</InfosContainer>
		</Card>
	);
};

export default CardBook;