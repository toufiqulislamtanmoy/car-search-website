import { faDharmachakra, faGasPump, faGauge, faHeart, faUserGroup, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Card = ({ details }) => {
    const {
        carName,
        seatingCapacity,
        fuelEconomy,
        fuelType,
        transmission,
        monthlyRent,
        year,
        carImages, } = details;
    return (
        <div className="card bg-[#EDF0F6] shadow-xl">
            <div className="relative">
                <figure className="">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        {carImages.map((singleImage, ind) => (
                            <SwiperSlide key={ind}>
                                <img src={singleImage} alt="Cover Not Found" className="rounded-xl h-[250px]" />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </figure>
            </div>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{carName}</h2>
                    <span className="bg-white border-dashed border-[3px] border-blue-600  py-1 px-3 rounded-xl">{year}</span>
                </div>

                <div className="grid grid-cols-2">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faUserGroup} style={{ color: "#4999ec", }} />
                        <h3 className="text-xl font-bold">{seatingCapacity} People</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faGasPump} style={{ color: "#4999ec", }} />
                        <h3 className="text-xl font-bold">{fuelType}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faGauge} style={{ color: "#4999ec", }} />
                        <h3 className="text-xl font-bold">{fuelEconomy}km/1-litre</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faDharmachakra} style={{ color: "#4999ec", }} />
                        <h3 className="text-xl font-bold">{transmission}</h3>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-10">
                    <div>
                        <h2><span className="text-2xl">${monthlyRent}</span>/month</h2>
                    </div>
                    <div className="space-x-3">
                        <button className="bg-[#dbeafa] py-1 px-2 rounded-lg"> <FontAwesomeIcon icon={faHeart} style={{ color: "#79b9f2", }} /></button>
                        <button className="bg-[#4999ec] text-white px-2 rounded-lg py-1">Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;