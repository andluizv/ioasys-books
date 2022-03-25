import { IPropsBook } from "../../types";
import { Author, BookCover, BookInfos, Container, Description, Field, FieldValue, List, ListItem, Section, SubTitle, Title } from "./styles";

const BookDetails = (props: IPropsBook | undefined) => {
    const { authors, title, description, pageCount, imageUrl, language, isbn10, isbn13, publisher, published } = props?.book!
    return (
		<Container>
			<BookCover src={imageUrl} alt={`${title} cover`}/>
			<BookInfos>
				<Section>
                    <Title>{title}</Title>
                    {authors.map(author => <Author key={author}>{author}</Author>)}

                </Section>
				<Section>
                    <SubTitle>Informações</SubTitle>
                    <List>
                        <ListItem>
                            <Field>Páginas</Field>
                            <FieldValue>{pageCount}</FieldValue>
                        </ListItem>
                        <ListItem>
                            <Field>Editora</Field>
                            <FieldValue>{publisher}</FieldValue>
                        </ListItem>
                        <ListItem>
                            <Field>Publicação</Field>
                            <FieldValue>{published}</FieldValue>
                        </ListItem>
                        <ListItem>
                            <Field>Idioma</Field>
                            <FieldValue>{language}</FieldValue>
                        </ListItem>
                        <ListItem>
                            <Field>Título Original</Field>
                            <FieldValue>{title}</FieldValue>
                        </ListItem>
                        <ListItem>
                            <Field>ISBN-10</Field>
                            <FieldValue>{isbn10}</FieldValue>
                        </ListItem>
                        <ListItem>
                            <Field>ISBN-13</Field>
                            <FieldValue>{isbn13}</FieldValue>
                        </ListItem>
                    </List>
                </Section>
				<Section>
                    <SubTitle>Resenha da Editora</SubTitle>
                    <Description>{description}</Description>
                </Section>
			</BookInfos>
		</Container>
	);
};

export default BookDetails;