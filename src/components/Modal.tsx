'use client';

import type React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as countryCodesList from 'country-codes-list';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from 'next/link';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom ChevronDown component
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const services = [
  'Web Development',
  'Mobile App Development',
  'E-commerce Solutions',
  'Digital Marketing',
  'UI/UX Design',
  'Custom Software',
  'Other',
];

const myCountryCodesObject = countryCodesList.customList(
  'countryCode',
  '[{countryCode}] {countryNameEn}: +{countryCallingCode}'
);

const countryCodes1 = Object.entries(myCountryCodesObject)
  .map(([countryCode, value]) => {
    const match = value.match(/\[(\w+)\] (.*?): \+?(\d+)/);
    if (!match) return null;

    return {
      code: `+${match[3]}`,
      country: match[1],
      name: match[2],
    };
  })
  .filter(Boolean);

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      // Small delay to ensure the element is rendered before starting animation
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      setTimeout(() => setIsVisible(false), 200);
    }
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const initialFormData = {
    service: '',
    fullName: '', // Add this line
    email: '',
    // countryCode: '+91', // Default to India
    // mobile: '',
    phone: '',
    message: '',
  };

  // const [formData, setFormData] = useState({
  //   service: '',
  //   fullName: '',
  //   email: '',
  //   countryCode: '+91', // Default to India
  //   mobile: '',
  //   message: '',
  // });

  const [defaultCountry, setDefaultCountry] = useState<string>('IN');
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState(initialFormData);

  const [validationErrors, setValidationErrors] = useState({
    service: false,
    fullName: false,
    email: false,
  });

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // Detect user's country based on IP
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country) {
          setDefaultCountry(data.country);
        }
      } catch (error) {
        console.error('Could not detect country, using default:', error);
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const errors = {
      service: !formData.service,
      fullName: !formData.fullName,
      email: !formData.email,
    };

    setValidationErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      return; // Don't submit if any errors
    }

    let phoneCode = '';
    let phoneNumber = '';

    if (formData.phone) {
      try {
        const parsedNumber = parsePhoneNumber(formData.phone);
        if (parsedNumber) {
          phoneCode = `+${parsedNumber.countryCallingCode}`;
          phoneNumber = parsedNumber.nationalNumber;
        }
      } catch (error) {
        console.error('Error parsing phone number:', error);
      }
    }

    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone, // Full formatted number
      phone_no: phoneNumber, // Just the number part
      phone_code: phoneCode.replace('+', ''), // Country code without +
      choice: formData.service,
      message: formData.message,
    };

    const formEncoded = new URLSearchParams(payload as any).toString();

    try {
      const response = await fetch('https://www.bitpastel.com/api/quote.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formEncoded,
      });

      if (response.ok) {
        const result = await response.text();
        console.log('Success:', result);
        alert('Thank you! Your request has been submitted.');
        setFormData(initialFormData); // Reset form data
        onClose();
      } else {
        console.error('Failed to submit form:', response.status);
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again later.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Reset error on change if field is now filled
    if (value.trim() !== '' && validationErrors[field as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  if (!isVisible) return null;

  if (isLoading) {
    return <div className="max-w-4xl mx-auto p-6 text-center">Loading...</div>;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center modal-overlay transition-opacity duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative modal-container w-full max-w-4xl mx-4 transform transition-all duration-500 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <div className=" rounded-lg shadow-xl overflow-hidden">
          <div className="md:pt-[30px] md:px-[30px] md:pb-[35px]">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left side - Image and details */}
              <div className="lg:w-[60%] md:w-[50%] md:flex md:flex-col hidden">
                <div className="mb-3">
                  {/* <img
                    src="/images/bitpastel_Clientele_5_new.png"
                    alt="bitpastel client image"
                    className="w-full h-auto object-cover"
                  /> */}
                  <Image
                    src={'/images/modal-new-img-desktop.png'}
                    alt="bitpastel client image"
                    className="w-full h-auto object-cover "
                    width={400}
                    height={300}
                  />
                </div>

                <div className="modal-details mt-auto">
                  <h2 className="subheading font-bold md:mb-10 mb-6 text-title font-source">
                    Satisfied Client Worldwide
                  </h2>

                  <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-6 lg:px-[50px]">
                    <div className="text-center">
                      <Image
                        src="/images/img_fasolidusers.svg"
                        alt="modal-1"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">900</h6>
                      <p className="text-[#212529] text-[13px]">Clients</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="/images/Bulb.svg"
                        alt="modal-2"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">1400+</h6>
                      <p className="text-[#212529] text-[13px]">Projects</p>
                    </div>

                    <div className="text-center ">
                      <Image
                        src="/images/img_group.svg"
                        alt="modal-2"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">50M</h6>
                      <p className="text-[#212529] text-[13px]">Lines of Code</p>
                    </div>

                    <div className="text-center">
                      <Image
                        src="/images/img_tdesignlocationfilled.svg"
                        alt="modal-2"
                        width={30}
                        height={30}
                        className="mx-auto mb-2 h-[30px]"
                      />
                      <h6 className="text-[#099]">32</h6>
                      <p className="text-[#212529] text-[13px]">Countries</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center lg:gap-0 gap-4 pt-6 text-center lg:mr-[-17px]">
                    {/* UK - Visible on all screens */}
                    <p className="text-[#099] md:border-right text-[14px] w-full md:w-full lg:w-1/3 flex justify-center mb-2 lg:mb-0">
                      <a href="tel:+442081446579">UK: +44 2081 446579</a>
                    </p>

                    {/* US - Hidden on md, visible only on lg */}
                    <p className="text-[#099] md:border-right text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center mb-2 lg:mb-0">
                      <a href="tel:+18724446679">US: +1 (872) 444 6679</a>
                    </p>

                    {/* IN - Hidden on md, visible only on lg */}
                    <p className="text-[#099] text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center">
                      <a href="tel:+919830566248">IN: +91 9830 566 248</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Right side - Form */}
              <div className="lg:w-[40%] md:w-[50%] w-full ">
                <div className="md:hidden">
                  {/* <Image
                    src={'/images/quote_banner_mob02.png'}
                    alt="bitpastel client image"
                    className="w-full h-auto object-cover"
                    width={400}
                    height={400}
                  /> */}

                  <div className="bg-[#3dcb90] text-primary-white">
                    <h3 className="title p-4">
                      Get Your Business Online Today <br />
                      With <span className="font-bold text-primary-white">Bitpastel</span>
                    </h3>
                  </div>
                </div>
                <div className="bg-[#fff] md:p-[35px] p-[15px] md:shadow-[1px_-2px_20px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.12)]">
                  <h2 className="text-center title font-source mb-4 font-light text-title ">
                    Get a Free Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="space-y-2">
                      {/* Combined "I want" and service selection */}
                      <div className="relative pb-1 border-b border-gray-200">
                        <button
                          type="button"
                          onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                          className={`w-full flex items-center focus:outline-none py-2 px-0 h-auto justify-start ${
                            validationErrors.service ? 'text-red-500' : ''
                          }`}
                        >
                          <span className="text-[#212529] font-[100]">I want</span>
                          <span
                            className={`ml-12 text-[#B2B2B2] font-light ${
                              validationErrors.service ? 'text-red-500' : ''
                            }`}
                          >
                            {formData.service || 'select*'}
                          </span>
                          <ChevronDown
                            className={`ml-auto mr-[20px] w-4 h-4 text-[#212529] transition-transform ${
                              isServiceDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isServiceDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-[#ffffff] border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                            {services.map((service) => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => {
                                  handleInputChange('service', service);
                                  setIsServiceDropdownOpen(false);
                                  setValidationErrors((prev) => ({ ...prev, service: false }));
                                }}
                                className="w-full p-3 text-left hover:bg-gray-50 transition-colors justify-start"
                              >
                                {service}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Error Message */}
                        {validationErrors.service && (
                          <p className="text-xs text-red-500 mt-1 absolute right-0 z-10">Please select a service.</p>
                        )}
                      </div>

                      {/* Full Name */}
                      <div className="pb-1 mt-1 border-b border-gray-200 relative">
                        <input
                          autoComplete="new-text"
                          readOnly
                          onFocus={(e) => e.target.removeAttribute('readOnly')}
                          type="text"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className={`w-full focus:outline-none py-2 ${validationErrors.fullName ? 'placeholder-red-500' : ''}`}
                        />

                        {validationErrors.fullName && (
                          <p className="text-xs text-red-500 mt-1 absolute right-0 z-10">Please enter your full name.</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="pb-1 mt-1 border-b border-gray-200 relative">
                        <input
                          autoComplete="new-text-1"
                          readOnly
                          onFocus={(e) => e.target.removeAttribute('readOnly')}
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full focus:outline-none py-2 ${validationErrors.email ? 'placeholder-red-500' : ''}`}
                        />
                        {validationErrors.email && (
                          <p className="text-xs text-red-500 mt-1 absolute right-0 z-10">
                            {formData.email
                              ? 'Please enter a valid email.'
                              : 'Please enter your email.'}
                          </p>
                        )}
                      </div>

                      {/* Mobile Number */}
                      <div className={`relative flex gap-2 pt-[6px] border-b `}>
                        <PhoneInput
                          international
                          defaultCountry={defaultCountry as any}
                          value={formData.phone}
                          onChange={(value) => handleInputChange('phone', value || '')}
                          placeholder="Mobile number (optional)"
                          autoComplete="new-text-4"
                          readOnly
                          onFocus={(e) => e.target.removeAttribute('readOnly')}
                          className="!border-none gap-[20px] w-full !p-0 [&>input]:!text-title [&>input]:!subheading [&>input]:font-source [&>input]:font-thin [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!flex-1 [&>input]:placeholder-[#2A2A2A]"
                        />
                        {!formData.phone && (
                          <p className="text-white z-10 top-[14px] left-[115px] whitespace-nowrap font-[100] pointer-events-none absolute right-0">
                            Mobile number (optional)
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="pb-1 border-b border-gray-200">
                        <textarea
                          autoComplete="new-text-8"
                          readOnly
                          onFocus={(e) => e.target.removeAttribute('readOnly')}
                          placeholder="Message (optional)"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={2}
                          className="w-full focus:outline-none resize-none min-h-[60px] py-2"
                        />
                      </div>
                    </div>

                    {/* Buttons and Footer - Fixed at bottom */}
                    <div className=" pt-4">
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full btn bg-green-btn text-primary-white transition-colors duration-200"
                      >
                        Lets Work Together
                      </button>

                      {/* Privacy Policy */}
                      <p className="text-[11px] mt-[3px] text-white text-center">
                        By clicking "Lets Work Together", you agree to our{' '}
                        <Link href="/privacy-policys" className="text-till" onClick={onClose}>
                          Privacy Policy
                        </Link>
                      </p>

                      {/* Chat Button */}
                      <button
                        type="button"
                        className="w-full text-[#52d09c] mt-5 border-[1px] h-[40px] rounded-[4px] border-[#52d09c] hover:bg-green-btn hover:text-primary-white transition-all duration-300"
                      >
                        Chat with Us
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex flex-wrap gap-4 flex-col justify-center pt-6 pb-5 text-center md:hidden">
                  {/* UK - Visible on all screens */}
                  <p className="text-[#099] text-[14px] w-full md:w-full lg:w-1/3 flex justify-center mb-2 lg:mb-0">
                    <a href="tel:+442081446579">UK: +44 2081 446579</a>
                  </p>

                  {/* US - Hidden on md, visible only on lg */}
                  <p className="text-[#099]  text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center mb-2 lg:mb-0">
                    <a href="tel:+18724446679">US: +1 (872) 444 6679</a>
                  </p>

                  {/* IN - Hidden on md, visible only on lg */}
                  <p className="text-[#099] text-[14px] w-full lg:w-1/3 md:w-full lg:flex justify-center">
                    <a href="tel:+919830566248">IN: +91 9830 566 248</a>
                  </p>
                </div>
              </div>
              <div className="md-hidden absolute top-[10px] right-[10px]">
                <button onClick={onClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    width="20px"
                    height="20px"
                    viewBox="-3.5 0 19 19"
                    className="cf-icon-svg"
                  >
                    <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
