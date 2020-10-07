import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import Draggable from 'react-draggable';

const DetailsInfo = () => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);
  return (
    <Draggable>
      <div className="detailsContainer">
        <div
          className="closeButton"
          onKeyDown={e => {
            console.log(e);
          }}
          onClick={() => setDetailsData(null)}
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="detailsInfo">
          <h2>
            <strong>{detailsData.bridge_site_name}</strong>
          </h2>
          <div className="bridge-image">
            {detailsData.bridge_image ? (
              <div className="bridge-image">
                <img alt="bridge_image" src={`${detailsData.bridge_image}`} />
              </div>
            ) : (
              <div className="bridge-image">
                <img
                  alt="bridge_image_needed"
                  src={require('../../../styles/imgs/bridgeIconGreenBig.png')}
                />
                Bridge image is unavailiable
              </div>
            )}
          </div>

          <div>
            <p>Project Stage: {detailsData.stage}</p>
            <p>Province: {detailsData.province}</p>
            <p>District: {detailsData.district}</p>
            <p>Bridge Type: {detailsData.type}</p>
            <p>Project Sub Stage: {detailsData.sub_stage}</p>
            {/* need to find locations of data for people/communities served */}
            <p>
              Estimate of People Served:{' '}
              {detailsData.Individuals_directly_served}
            </p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DetailsInfo;
