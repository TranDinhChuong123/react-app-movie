import { createContext, useState } from "react";
import YouTube from 'react-youtube';
const MovieContext = createContext();
import Modal from 'react-modal';
import PropType from 'prop-types'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

const MovieProvider = ({ children }) => {

    const [trailerKey, setTrailerKey] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleTrailer = async (id) => {
        setTrailerKey('')
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTg0ZjFiZjdiMmYzZDI0YjA4YmQwNTI1ZDBjNzc1NSIsIm5iZiI6MTcyMTg5MDUyOS4zNjI0NDksInN1YiI6IjY2YTBhZjMwNGQzMzA3OTYyNWNkZmFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2lfvhmeQ1IFdXVCdQN7pj4VNH40QF_0oCV6bpIskDbo'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setTrailerKey(data.results[0].key)
            console.log('data.results[0].key ', data.results[0].key);
            setModalIsOpen(true)
        } catch (error) {
            setModalIsOpen(false)
            console.log(error);
        }


    }

    return (
        <MovieContext.Provider value={{ handleTrailer }}>

            {children}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />;
            </Modal>

        </MovieContext.Provider>
    )

}

MovieProvider.propTypes = {
    children: PropType.node,
}

export { MovieProvider, MovieContext }