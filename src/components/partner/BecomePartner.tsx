import React from 'react';

const BecomePartner = () => {
  return (
    <section className="become-partner-area " id="become-a-partner">
      <div className="container mx-auto px-4">
        <div className="grid mx-[-15px] md:grid-cols-2 grid-cols-1 font-source">
          <div className="px-[15px]">
            <div className="become-partner-title-area">
              <div className="become-partner-circle">
                <svg
                  _ngcontent-c10=""
                  fill="none"
                  height="64"
                  viewBox="0 0 80 64"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    _ngcontent-c10=""
                    d="M68 31.0002V31.4127L76.7125 22.7002C79.45 19.9627 79.45 15.5377 76.7125 12.8002L66.95 3.05019C64.2125 0.312695 59.7875 0.312695 57.05 3.05019L52.0375 8.06269C51.7 8.02519 51.35 8.00019 51 8.00019H37C32.3625 8.00019 28.55 11.5002 28.05 16.0002H28V31.0002C28 33.7627 30.2375 36.0002 33 36.0002C35.7625 36.0002 38 33.7627 38 31.0002V20.0002H58C63.525 20.0002 68 24.4752 68 30.0002V31.0002ZM42 24.0002V31.0002C42 35.9752 37.975 40.0002 33 40.0002C28.025 40.0002 24 35.9752 24 31.0002V16.1752C19.5125 16.9502 15.775 20.2127 14.5 24.7002L12.4375 31.9002L3.2875 41.0502C0.55 43.7877 0.55 48.2127 3.2875 50.9502L13.05 60.7127C15.7875 63.4502 20.2125 63.4502 22.95 60.7127L27.6625 56.0002C27.775 56.0002 27.8875 56.0127 28 56.0127H48C51.3125 56.0127 54 53.3252 54 50.0127C54 49.3127 53.875 48.6377 53.6625 48.0127H54C57.3125 48.0127 60 45.3252 60 42.0127C60 40.4127 59.375 38.9627 58.35 37.8877C61.5625 37.2627 63.9875 34.4377 64 31.0377V30.9877C63.9875 27.1377 60.8625 24.0127 57 24.0127H42V24.0002Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <h2 className="font-source">Become a Partner</h2>
            </div>
          </div>
          <div className="px-[15px]">
            <div className="become-partner-form-area">
              <form action="#">
                <div className="become-input">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="become-input">
                  <input type="text" name="email" placeholder="Email Address" />
                </div>
                <div className="become-input">
                  <input type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="phonenumber" placeholder="Phone" />
                </div>
                <div className="become-textarea">
                  <textarea name="" id="" placeholder="Your Message"></textarea>
                </div>
                <button className="form-button bg-green-btn" type="submit" disabled>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
