import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, onPageChange }) => {
    const totalPages = 10;
    const displayPages = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    const handlePrevClick = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

  return (
    <div className="flex justify-between items-center my-5">
      <div>
        <h2>{currentPage} from {totalPages}</h2>
      </div>
      <div className="space-x-4">
        <Link to={`page/${currentPage-1}`}
          className="bg-white text-black font-bold py-3 px-4 rounded-xl"
          onClick={handlePrevClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        {displayPages.map(pageNumber => (
          <Link to={`page/${pageNumber}`}
            key={pageNumber}
            className={`bg-white text-black font-bold py-3 px-4 rounded-xl ${pageNumber === currentPage ? ' text-green-500' : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Link >
        ))}
        <Link to={`page/${currentPage+1}`}
          className="bg-white text-black font-bold py-3 px-4 rounded-xl"
          onClick={handleNextClick}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
