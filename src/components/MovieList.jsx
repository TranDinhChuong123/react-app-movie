import PropTypes from "prop-types"
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../../context/MovieProvider";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 7,
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2,
    },
};




const MovieList = ({ title, data }) => {

    const { handleTrailer } = useContext(MovieContext)

    return <div className="w-full h-96 bg-black text-white p-10">

        <div className="mb-4 uppercase">{title}</div>

        <Carousel className="flex " responsive={responsive}>

            {data.length > 0 && data.map((item) => (
                <div className="" key={item.id} onClick={() => handleTrailer(item.id)}>

                    <div className="group relative w-[200px] h-[300px]  
                        transition-transform ease-in-out">
                        <div className="w-full h-full cursor-pointer group-hover:scale-105">
                            <div className="absolute w-full h-full bg-black/40 top-0 left-0"></div>
                            <img className="w-full h-full top-0 left-0" src={`${import.meta.env.VITE_IMAGE_URL}${item.backdrop_path}`} alt="" />

                            <div className="absolute bottom-4 left-2">
                                <p className="uppercase text-white">{item.title || item.original_title}</p>

                            </div>
                        </div>
                    </div>
                </div>
            )

            )}
        </Carousel>

        {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <YouTube videoId={trailerKey} opts={opts} />;
        </Modal> */}



    </div>


}

MovieList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            backdrop_path: PropTypes.string,
            title: PropTypes.string,
            original_title: PropTypes.string,
        })
    ).isRequired,
};



export default MovieList

