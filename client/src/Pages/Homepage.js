import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import '../Css/Homepage.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

            {/* showing government distributors */}
            <div className='government-distributors'>
                <div className='government-distributors-title'>Government Distributors</div>

                <div className='government-distributors-list'>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat</div>
                    </div>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat</div>
                    </div>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat</div>
                    </div>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat</div>
                    </div>

                    <div className='see-all-distributors'>
                        <Link to={'#'} className='see-all'>See All</Link>
                    </div>
                    

                </div>

            </div>


             {/* showing private distributors */}
             <div className='government-distributors'>
                <div className='government-distributors-title'>Private Distributors</div>

                <div className='government-distributors-list'>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat Pvt. Ltd</div>
                    </div>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat Pvt. Ltd</div>
                    </div>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat Pvt. Ltd</div>
                    </div>
                    <div className='government-distributors-list-item'>
                        <div className='government-distributors-list-item-img'>
                            <img src='https://www.shutterstock.com/image-vector/bus-repair-logo-design-vector-600nw-2451996559.jpg' alt='government' />
                        </div>
                        <div className='government-distributors-list-item-name'>Nepal Yatayat Pvt. Ltd</div>
                    </div>
                    
                    <div className='see-all-distributors'>
                        <Link to={'#'} className='see-all'>See All</Link>
                    </div>

                </div>

            </div>

            {/* showing popular bus routes */}
            <div className='popular-bus-routes'>
                <div className='popular-bus-routes-title'>Popular Bus Routes</div>

                <div className='popular-bus-routes-list'>
                    <div className='popular-bus-routes-list-item'>
                        <div className='popular-bus-routes-list-item-icon'>
                            <FontAwesomeIcon icon="fa-solid fa-bus" />
                        </div>
                        <div className='popular-bus-routes-list-item-name'>
                            <div className='popular-bus-routes-list-item-name-from'>Kathmandu</div>
                            <div className='popular-bus-routes-list-item-name-to'>Pokhara</div>
                        </div>
                    </div>

                    <div className='popular-bus-routes-list-item'>
                        <div className='popular-bus-routes-list-item-icon'>
                            <FontAwesomeIcon icon="fa-solid fa-bus" />
                        </div>
                        <div className='popular-bus-routes-list-item-name'>
                            <div className='popular-bus-routes-list-item-name-from'>Kathmandu</div>
                            <div className='popular-bus-routes-list-item-name-to'>Pokhara</div>
                        </div>
                    </div>

                    <div className='popular-bus-routes-list-item'>
                        <div className='popular-bus-routes-list-item-icon'>
                            <FontAwesomeIcon icon="fa-solid fa-bus" />
                        </div>
                        <div className='popular-bus-routes-list-item-name'>
                            <div className='popular-bus-routes-list-item-name-from'>Kathmandu</div>
                            <div className='popular-bus-routes-list-item-name-to'>Pokhara</div>
                        </div>
                    </div>

                </div>

            </div>

            {/* about us */}
            <div className='about-us'>
                <div className='about-us-title'>Online Booking On MySeatBooker</div>
                <div className='about-us-content'>
                    <p>
                    Travellers love exploring India by road. The spellbinding landscapes provide a deeper insight into the culture and beauty of India. Unlike flights, travelling by road is much more intimate. That's why buses are among the most preferred ways among travellers to explore India. Moreover, countless Indians make their bus booking everyday to travel to other states. Besides private operators, you will also find that Indian states have their own bus services. You can find buses running from one city to another throughout the day. So, an extensive network of buses is connecting the different parts of the country and offering an affordable and easier way of travelling.
                    </p>
                </div>

            </div>


            {/* bus booking FaQ  */}

            <div className='bus-booking-faq'>
                <div className='bus-booking-faq-title'>Bus Booking FAQ</div>
                <div className='bus-booking-faq-content'>
                    <p><b>What are the advantages of online bus booking?</b></p>
                    <p>There are many advantages of online bus ticket booking.</p>
                    <ul>
                        <li>You can choose your preferred seats.</li>
                        <li>Online bus ticket booking keeps you away from the long queues of the offline ticket counters.</li>
                        <li>You can view plenty of buses and choose an appropriate bus for your travel considering the amenities, reviews, ratings and bus images available.</li>
                        <li>You can choose the preferred bus type (Volvo Bus, AC or Non AC) and also pickup and dropping point and timings.</li>
                        <li>Your tickets can be booked at a reasonable price with the ongoing bank and e-wallet discounts.</li>
                    </ul>
                    <p><b>Can we book state road transport corporation buses from MySeatBooker?</b></p>
                    <p>Yes, almost all fleets of state road transport corporation buses can be booked from MySeatBooker. For example, Deluxe AC and Non Ac buses and Volvo bus booking.</p>
                    <p><b>Is it compulsory to carry the printout of the ticket to board the bus?</b></p>
                    <p>The bus operators validate e-tickets received on your e-mail, Whatsapp or available on the MySeatBooker app. But, it is advisable to carry the e-ticket's print out to be on a safer side for a hassle-free travel experience.</p>
                    <p><b>What if I miss the bus? Will I get a refund?</b></p>
                    <p>Refund will not be initiated if you miss the bus. A refund is initiated in case of bus operator cancels the bus and have not provided any other bus as an alternate option. Please note that MySeatBooker will not be liable for refund as it can be permitted only by the bus operators.</p>
                    <p><b>How to book bus tickets online through MySeatBooker?</b></p>
                    <p>Browse the MySeatBooker website or mobile app, go to the Bus section, enter the to and from city name and the journey date. The results displayed will bring forth various bus options. You can apply filters as per your travel preferences, like bus timings, boarding or dropping points, bus operators, bus type (Volvo Bus, AC or Non AC Bus). After deciding the bus, you can also select the seat as per your choice. After selecting the seat you must select the pickup and dropping point before confirming the booking.</p>
                    <p>Enter the traveller detail on the booking confirmation page. You can also check the current offers and promo codes available on the booking and also redeem GoCash if any. You can protect your journey with Travel Insurance policy. After confirming all the details pay the final amount through payment options like Credit/Debit cards, Netbanking or e-Wallets.</p>
                    <p><b>Where can I check current offers on online bus booking via MySeatBooker?</b></p>
                    <p>The exciting discounts and offers come with validity, hence, you must check the current offers before booking bus tickets. The exclusive bank offers, promo codes and discounts are displayed on the bus page of the website and Bus section on the MySeatBooker app.</p>
                </div>
            </div>



            {/* footer  */}

            <footer className='footer'>
                <div className='footer-container'>
                    <div className='footer-section about'>
                        <h2>About Us</h2>
                        <p>MySeatBooker is your go-to platform for booking bus tickets across India. We provide a seamless and convenient way to travel with a wide range of options from various bus operators. Our mission is to make bus travel easy and accessible for everyone.</p>
                    </div>
                    <div className='footer-section links'>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Bus Routes</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className='footer-section contact'>
                        <h2>Contact Us</h2>
                        <ul>
                            <li><FontAwesomeIcon icon="fa-solid fa-map-marker-alt" /> 123 Travel Lane, City, State</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-phone" /> +91 12345 67890</li>
                            <li><FontAwesomeIcon icon="fa-solid fa-envelope" /> support@myseatbooker.com</li>
                        </ul>
                    </div>
                    <div className='footer-section social'>
                        <h2>Follow Us</h2>
                        <div className='social-links'>
                            <a href='#'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                            <a href='#'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a href='#'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a href='#'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; 2024 MySeatBooker. All Rights Reserved.</p>
                </div>
            </footer>




        </div>
    </>
  )
}

export default Homepage