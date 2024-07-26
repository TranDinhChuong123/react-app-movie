import PropType from 'prop-types'
import { useState } from 'react'
const Header = ({ onSearch }) => {
    const [textSearch, setTextSearch] = useState('')
    return <div>
        <nav className="bg-black p-6">

            <div className="flex justify-between items-center">

                <div className="flex items-center space-x-9">
                    <div className="text-red-600 text-2xl font-bold ">
                        My Website
                    </div>

                    <ul className="flex space-x-4">
                        <li><a href="https://www.facebook.com/" className="text-white hover:text-gray-300 w-4 h-10" >Home</a></li>
                        <li><a href="https://www.youtube.com/" className="text-white hover:text-gray-300">About</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>

                <div className="items-center space-x-4">
                    <input value={textSearch} onChange={(e) => setTextSearch(e.target.value)} className="p-4 h-5 rounded-sm" type="text" placeholder="Search Film" />
                    <button onClick={() => onSearch(textSearch)} className="bg-red-600 rounded-md  h-8 w-20 text-white"
                    >Search</button>
                </div>


            </div>
        </nav>
    </div>
}

Header.propTypes = {
    onSearch: PropType.func.isRequired
}

export default Header;