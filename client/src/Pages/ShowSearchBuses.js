import React from 'react'
import Navbar from '../Components/Navbar'
import AboutUsUser from '../Components/AboutUsUser'
import '../Css/ShowSearchBuses.css'
import { Link } from 'react-router-dom'

const ShowSearchBuses = () => {
  return (
    <>
        <Navbar />
        <div className='main-container'>
            
            {/* showing the search location  */}
            <div className="search-container">
                <div className='search-container-items'>
                    <div className='search-container-item'>
                        <label htmlFor='from'>From</label>
                        <input type='text' id='from' placeholder='Enter your location' />
                    </div>
                    <div className='search-container-item'>
                        <label htmlFor='to'>To</label>
                        <input type='text' id='to' placeholder='Enter your destination' />
                    </div>
                    <div className='search-container-item'>
                        <label htmlFor='date'>Date</label>
                        <input type='date' id='date' />
                    </div>
                    <div className='search-container-item'>
                        <button type='submit'>Update Search</button>
                    </div>
                </div>

            </div>

            {/* sorting the result of the search  */}
            <div className="sort-container">
                <div className='sort-container-items'>
                    <div className='sort-container-item'>
                        <label htmlFor='sort'>Sort By</label>
                        <select name='sort' id='sort'>
                            <option value='price'>Price</option>
                            <option value='rating'>Rating</option>
                            <option value='time'>Time</option>
                        </select>
                    </div>
                    <div className='sort-container-item'>
                        <label htmlFor='order'>Order</label>
                        <select name='order' id='order'>
                            <option value='asc'>Ascending</option>
                            <option value='desc'>Descending</option>
                        </select>
                    </div>
                    <div className='sort-container-item'>
                        <button type='submit'>Sort</button>
                    </div>
                </div>
            </div>

            {/* showing the search result  */}
            <div className="search-result-container">
                <div className='result-bus'>

                    <div className='bus-image'>
                        <img src='https://4.imimg.com/data4/WI/CB/GLADMIN-28156490/37.jpg' alt='bus' />
                    </div>

                    <div className='bus-details'>
                        <div className='details1 bus-detail'>
                            <div className='bus-distributor-group'>Nepal Yatayat</div>
                            <div className='bus-feature'>AC / Non AC</div>
                            <div className='bus-route'>Kathmandu - Pokhara</div>
                        </div>

                        <div className='details2 bus-detail'>
                            <div className='bus-arrival-time'> Arrival Time :</div>
                            <div className='bus-arrival-time'> <b>07:15 AM</b></div>

                            <div className='bus-arrival-location'>Arrivs At : </div>
                            <div className='bus-arrival-location'>Buspark, Kathmandu</div>

                        </div>

                        <div className='details3 bus-detail'>
                            <div className='bus-price-per-seat'>Price Per Seat : </div>
                            <div className='bus-price-per-seat'><b> Rs : 3200</b></div>

                            <div className='bus-total-seats-left'>Seat Rem : 3 </div>

                            <div className='select seat'>
                                <Link to='/select-seat'><button className='select-seat-btn'>Select Seat</button></Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="search-result-container">
                <div className='result-bus'>

                    <div className='bus-image'>
                        <img src='https://4.imimg.com/data4/WI/CB/GLADMIN-28156490/37.jpg' alt='bus' />
                    </div>

                    <div className='bus-details'>
                        <div className='details1 bus-detail'>
                            <div className='bus-distributor-group'>Nepal Yatayat</div>
                            <div className='bus-feature'>AC / Non AC</div>
                            <div className='bus-route'>Kathmandu - Pokhara</div>
                        </div>

                        <div className='details2 bus-detail'>
                            <div className='bus-arrival-time'> Arrival Time :</div>
                            <div className='bus-arrival-time'> <b>07:15 AM</b></div>

                            <div className='bus-arrival-location'>Arrivs At : </div>
                            <div className='bus-arrival-location'>Buspark, Kathmandu</div>

                        </div>

                        <div className='details3 bus-detail'>
                            <div className='bus-price-per-seat'>Price Per Seat : </div>
                            <div className='bus-price-per-seat'><b> Rs : 3200</b></div>

                            <div className='bus-total-seats-left'>Seat Rem : 3 </div>

                            <div className='select seat'>
                                <button className='select-seat-btn'>Select Seat</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        <AboutUsUser />

    </>
  )
}

export default ShowSearchBuses