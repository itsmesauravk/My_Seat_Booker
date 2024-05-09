import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import '../Css/Homepage.css'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Categories />
        <div className='main-homepage-div'>
            {/* for ticket booking  */}
            <div className='ticket-book-bus'>
                <div className='bus-ticket-book-title'>Book Your Bus Ticket</div>
                <div className='bus-ticket-booking-part'>
                    <div className='bus-ticketing'>
                        <form className='bus-ticket-form'>
                            <label htmlFor='from'>From</label>
                            <input type='text' id='from' placeholder='Enter your location' />
                            <label htmlFor='to'>To</label>
                            <input type='text' id='to' placeholder='Enter your destination' />
                            <label htmlFor='date'>Date</label>
                            <input type='date' id='date' />

                            <button type='submit'>Find Buses</button>

                        </form>
                    </div>
                    <div className='advertising'>
                        <div className='text-ads'>
                            <h1>Book Your Bus Ticket</h1>
                            <p>Book your bus ticket with us and get the best deals on your bus ticket</p>
                        </div>
                        <div className='bus-offer-ads'>
                            <h1>Offers</h1>
                            <p>Get 10% off on your first bus ticket booking</p>
                            <p>Get 20% off on your second bus ticket booking</p>
                            <p>Get 30% off on your third bus ticket booking</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* showing offer */}
            <div className="page-discount-ad">
                <div className='page-dis-offers'>
                    <img className='img1' src='https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-single-bus-ticket-boarding-pass-with-tire-off-control-line-isolated-png-image_4649174.png' alt='offer' />
                    <img className='img2' src='https://ticket-simply-africa-cms.s3.af-south-1.amazonaws.com/uploads/bcc/cms/asset/avatar/67884/banner_banner1.png' alt='offer' />
                    <img className='img3' src='https://png.pngtree.com/png-vector/20220912/ourmid/pngtree-high-detailed-bus-vector-png-image_6172563.png' alt='offer' />
                </div>
            </div>


        </div>
    </>
  )
}

export default Homepage