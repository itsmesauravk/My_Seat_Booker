import React from 'react'
import '../Css/Homepage.css'
import { Link } from 'react-router-dom'

const PrivateDistributorsUser = () => {
  return (
    <div>
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
    </div>
  )
}

export default PrivateDistributorsUser