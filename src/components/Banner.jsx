import iconRating from '../assets/rating.png'
import iconRatingHalf from '../assets/rating-half.png'
import temp from '../assets/temp-1.jpeg'
import hoverImage from '../assets/play-button.png'
const Banner = () => {
    return <div className="w-full bg-banner h-[700px] bg-cover bg-no-repeat relative">
        <div className="absolute w-full h-full bg-black opacity-30"></div>

        <div style={{ position: 'relative' }} className=" relative flex justify-between items-center p-20 z-20">
            <div className="space-y-9 w-80">
                <p className="text-white bg-gradient-to-r 
                    from-red-600 to-white py-1 px-2 w-24">
                    TV show
                </p>
                <h2 className="text-white font-bold text-4xl">Nghe nói em thích tôi</h2>

                <div className=" flex space-x-5">
                    <img className='w-8 h-8' src={iconRating} alt="" />
                    <img className='w-8 h-8' src={iconRating} alt="" />
                    <img className='w-8 h-8' src={iconRating} alt="" />
                    <img className='w-8 h-8' src={iconRating} alt="" />
                    <img className='w-8 h-8' src={iconRatingHalf} alt="" />
                </div>
                <p className='text-white'> Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting,
                </p>
                <div className='space-x-3 '>
                    <button className='bg-black text-white p-2'>Chi tiết</button>
                    <button className='bg-red-700 text-white p-2'>Xem Phim</button>
                </div>
            </div>

            {/* <div className='relative w-[350px] h-[500px]'>
                <img className='absolute w-full h-full ' src={temp} alt="Main" />
                <div className='absolute w-full h-full flex justify-center items-center'>
                    <img className='w-14 h-14' src={hoverImage} alt="Hover" />
                </div>
            </div> */}

            <div className='relative w-[350px] h-[500px] group'>
                <img className='absolute w-full h-full transition-opacity duration-300
                 ease-in-out ' src={temp} alt="Main" />
                <div className='absolute w-full h-full flex justify-center items-center
                    transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 backdrop-blur-sm'>
                    <img className='w-14 h-14' src={hoverImage} alt="Hover" />
                </div>
            </div>





        </div>
    </div>
}

export default Banner