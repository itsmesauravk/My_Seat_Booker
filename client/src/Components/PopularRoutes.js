import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import '../Css/Homepage.css';

const PopularRoutes = () => {
  return (
    <div className='popular-bus-routes'>
      <div className='popular-bus-routes-title'>Popular Bus Routes</div>
      <div className='popular-bus-routes-list'>
        <div className='popular-bus-routes-list-item'>
          <div className='popular-bus-routes-list-item-icon'>
            <FontAwesomeIcon icon={faBus} />
          </div>
          <div className='popular-bus-routes-list-item-name'>
            <div className='popular-bus-routes-list-item-name-from'>Kathmandu</div>
            <div className='popular-bus-routes-list-item-name-to'>Pokhara</div>
          </div>
        </div>
        <div className='popular-bus-routes-list-item'>
          <div className='popular-bus-routes-list-item-icon'>
            <FontAwesomeIcon icon={faBus} />
          </div>
          <div className='popular-bus-routes-list-item-name'>
            <div className='popular-bus-routes-list-item-name-from'>Kathmandu</div>
            <div className='popular-bus-routes-list-item-name-to'>Pokhara</div>
          </div>
        </div>
        <div className='popular-bus-routes-list-item'>
          <div className='popular-bus-routes-list-item-icon'>
            <FontAwesomeIcon icon={faBus} />
          </div>
          <div className='popular-bus-routes-list-item-name'>
            <div className='popular-bus-routes-list-item-name-from'>Kathmandu</div>
            <div className='popular-bus-routes-list-item-name-to'>Pokhara</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularRoutes;
