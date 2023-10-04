import { useEffect, useState } from "react";
import Card from "./Card/Card";

const CarrSearch = ({ currentPage, searchTerm }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredData = searchTerm
        ? data.filter(car => car.carName.toLowerCase().includes(searchTerm.toLowerCase()))
        : data;
    console.log(filteredData);
    console.log(searchTerm);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPageData = filteredData.slice(startIndex, endIndex);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
            {currentPageData.map(data => (
                <Card key={data.carId} details={data} />
            ))}
        </div>
    );
};

export default CarrSearch;