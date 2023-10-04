import { useState } from "react";
import "./Navbar.css"
const Navbar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        console.log(query);
        onSearch(query);
    };


    return (
        <div className="navbar shadow-xl rounded-xl bg-[#e4ecf7]">

            <div className="w-[80%] flex flex-col lg:flex-row justify-center lg:justify-start">
                <div className="">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-white mx-5 rounded-xl focus:outline-none py-1 px-5 w-24 md:w-auto search-icon"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />

                </div>
                <ul className="menu-horizontal menu mx-3 z-10">
                    <li tabIndex={0}>
                        <details>
                            <summary>Relevance</summary>
                            <ul className="p-2">
                                <li><a>Tata</a></li>
                                <li><a>BMW</a></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>All Brand</summary>
                            <ul className="p-2">
                                <li><a>Lamborghini</a></li>
                                <li><a>Tesla</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;