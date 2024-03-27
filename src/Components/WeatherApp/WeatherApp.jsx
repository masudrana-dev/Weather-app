import searchIcon from '../Assets/search.png'
import './WeatherApp.css'

const WeatherApp = () => {
    return (
        <div>
            <div className="container">
                <div className="top-bar">
                    <input type="text" className="city-input" placeholder='search' />
                    <div className="search-icon">
                        <img src={searchIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp