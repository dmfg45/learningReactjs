import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.745235625101!2d-9.174962041768206!3d38.70654688798694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934a6b70ec23d%3A0xc902ea21b0ef934c!2sAv.%20Ceuta%2C%201350-278%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1573179658014!5m2!1spt-PT!2spt"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;