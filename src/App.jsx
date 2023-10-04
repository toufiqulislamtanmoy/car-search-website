import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Pagination from "./Components/Pagenation/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import CarrSearch from "./Components/CarrSearch";


const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
  };



  useEffect(() => {
    if (location.pathname === "/") {
      navigate("page/1");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="bg-[#F1F5FC] px-10 py-6">
       <Navbar onSearch={handleSearch} />
      <CarrSearch currentPage={currentPage} searchTerm={searchTerm} />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );

};

export default App;
