import PropType from 'prop-types'
import { useContext } from 'react';
import { MovieContext } from '../../context/MovieProvider';



const MovieSearch = ({ title, data }) => {
    const { handleTrailer } = useContext(MovieContext)
    return <div className=" bg-black text-white p-10">

        <div className="mb-4 uppercase">{title}</div>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3  md:grid-cols-4 '>
            {data && data.length > 0 && data.map((item) => (
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
        </div>







    </div>
}

MovieSearch.propTypes = {
    title: PropType.string.isRequired,
    data: PropType.array.isRequired,

}


export default MovieSearch
