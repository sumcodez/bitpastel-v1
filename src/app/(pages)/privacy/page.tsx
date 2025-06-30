import React from 'react';

const page = () => {
  return (
    <>
      <div className="relative">
          <div className="title flex align-center items-center justify-center min-h-[300px] bg-primary-teal">
            <h1 className="text-white">Privacy Policy</h1>
          </div>
          <div className="privacy-content pt-10">
        <div className="container mx-auto px-4 text-[12.5px]">
            <p className=''>
              Bitpastel recognises the importance of maintaining your privacy. We value your privacy
              and appreciate your trust in us. This Policy describes how we treat user information
              we collect on www.bitpastel.com and other offline sources. This Privacy Policy applies
              to current and former visitors to our website. By visiting and/or using our website,
              you agree to this Privacy Policy.
            </p>
            <article>
              <h5>Information we collect</h5>
              <ul>
                <li>
                  <span>Contact information: </span>
                  We might collect your name, email, mobile number, and ip address.
                </li>
                <li>
                  <span>Information you post: </span>
                  We collect information you post in a public space on our website or on a
                  third-party social media site belonging to Bitpastel.
                </li>
                <li>
                  <span> Other information: </span>
                  If you use our website, we may collect information about your IP address and the
                  browser you're using. We might look at what site you came from, duration of time
                  spent on our website, pages accessed.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
