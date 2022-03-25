import { useEffect, useState } from "react";
import CardBook from "../../components/CardBook";
import Header from "../../components/Header";
import { useAuth } from "../../providers/Authentication";
import api from "../../services";
import { BooksList, Container, PageCounter, PageNumber, PaginationBtn, PaginationContainer } from "./styles";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import { IBook } from "../../types";
import Modal from "../../components/Modal";
import BookDetails from "../../components/BookDetails";

const DashBoardPage = () => {
    const [page, setPage] = useState(1);
    const [books, setBooks] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const { token } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [modalBook, setModalBook] = useState<IBook>();


    useEffect(() =>{
        api.get(`/books?page=${page}&amount=12`, {headers: {Authorization: 'Bearer ' + token}}).then(response => {
            setBooks(response.data.data);
            setTotalPages(response.data.totalPages);
        })
    }, [page, token]);

    const handleNextPage = () => {
        if (page < Math.floor(totalPages)) {
            setPage(page + 1);
        };
    };
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page -1);
        }
    };
    const handleModal = (book: IBook) => {
        setModalBook(book)
        setShowModal(!showModal);
    };

    return (
		<>
            {showModal && <Modal func={handleModal}> <BookDetails book={modalBook!}/> </Modal>}
			<Container>

				<Header />
				<BooksList>
					{books.map((book: IBook) => (
						<CardBook
							book={book}
							key={book.id}
							onClick={()=> handleModal(book)}
						/>
					))}
				</BooksList>
				<PaginationContainer>
					<PageCounter>
						Página <PageNumber>{page}</PageNumber> de{" "}
						<PageNumber>{Math.round(totalPages)}</PageNumber>
					</PageCounter>
					<PaginationBtn
						disabled={page === 1}
						onClick={handlePreviousPage}
					>
						<MdNavigateBefore />
					</PaginationBtn>
					<PaginationBtn
						disabled={page === Math.floor(totalPages)}
						onClick={handleNextPage}
					>
						<MdNavigateNext />
					</PaginationBtn>
				</PaginationContainer>
			</Container>
		</>
	);
};

export default DashBoardPage;