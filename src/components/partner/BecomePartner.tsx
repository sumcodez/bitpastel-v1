'use client';

import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const BecomePartner = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [defaultCountry, setDefaultCountry] = useState('IN');

  // Detect user's country
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
      }
    };

    detectCountry();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handlePhoneChange = (value?: string) => {
    setFormData({ ...formData, phone: value || '' });
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://www.bitpastel.com/api/partnersSendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        } as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("Success! We'll get back to you soon.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="become-partner-area" id="become-a-partner">
      <div className="container mx-auto px-4">
        <div className="grid mx-[-15px] md:grid-cols-2 grid-cols-1 font-source">
          <div className="px-[15px]">
            <div className="become-partner-title-area">
              <div className="become-partner-circle">
                <svg
                  fill="none"
                  height="64"
                  viewBox="0 0 80 64"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68 31.0002V31.4127L76.7125 22.7002C79.45 19.9627 79.45 15.5377 76.7125 12.8002L66.95 3.05019C64.2125 0.312695 59.7875 0.312695 57.05 3.05019L52.0375 8.06269C51.7 8.02519 51.35 8.00019 51 8.00019H37C32.3625 8.00019 28.55 11.5002 28.05 16.0002H28V31.0002C28 33.7627 30.2375 36.0002 33 36.0002C35.7625 36.0002 38 33.7627 38 31.0002V20.0002H58C63.525 20.0002 68 24.4752 68 30.0002V31.0002ZM42 24.0002V31.0002C42 35.9752 37.975 40.0002 33 40.0002C28.025 40.0002 24 35.9752 24 31.0002V16.1752C19.5125 16.9502 15.775 20.2127 14.5 24.7002L12.4375 31.9002L3.2875 41.0502C0.55 43.7877 0.55 48.2127 3.2875 50.9502L13.05 60.7127C15.7875 63.4502 20.2125 63.4502 22.95 60.7127L27.6625 56.0002C27.775 56.0002 27.8875 56.0127 28 56.0127H48C51.3125 56.0127 54 53.3252 54 50.0127C54 49.3127 53.875 48.6377 53.6625 48.0127H54C57.3125 48.0127 60 45.3252 60 42.0127C60 40.4127 59.375 38.9627 58.35 37.8877C61.5625 37.2627 63.9875 34.4377 64 31.0377V30.9877C63.9875 27.1377 60.8625 24.0127 57 24.0127H42V24.0002Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="font-source title text-title">Become a Partner</h2>
            </div>
          </div>
          <div className="px-[15px]">
            <div className="become-partner-form-area">
              <form onSubmit={handleSubmit}>
                <div className="become-input flex items-start border-b-[1px] border-[#B2B2B2]">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="subheading"
                    />
                  </div>
                  {errors.name && (
                    <span className="text-red-500 text-sm ml-2 mt-2">{errors.name}</span>
                  )}
                </div>
                <div className="become-input flex items-start border-b-[1px] border-[#B2B2B2]">
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="subheading"
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-500 text-sm ml-2 mt-2">{errors.email}</span>
                  )}
                </div>

                {/* <div className="become-input flex items-start border-b-[1px] border-[#B2B2B2] ">
                  <div className="flex-1">
                    <PhoneInput
                      international
                      defaultCountry={defaultCountry as any}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="Phone"
                      className="!border-none border-b-0 !p-0 [&>input]:focus:outline-none [&>input]:py-2 [&>input]:flex-1"
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-red-500 text-sm ml-2 mt-2">
                      {errors.phone}
                    </span>
                  )}
                </div> */}

                <div className={`relative flex gap-2 py-[8px] border-b `}>
                  <PhoneInput
                    international
                    defaultCountry={defaultCountry as any}
                    value={formData.phone}
                    onChange={(value) => handlePhoneChange(value)}
                    placeholder="Mobile number (optional)"
                    className="!border-none bg-transparent gap-[20px] w-full !p-0 [&>input]:!text-[#ffffff] [&>input]:!subheading [&>input]:font-source [&>input]:font-thin [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!flex-1 [&>input]:placeholder-[#B2B2B2]"
                  />
                  {!formData.phone && (
                    <p className="text-white subheading absolute top-[14px] left-[130px] whitespace-nowrap font-[100] pointer-events-none">
                      Mobile number (optional)
                    </p>
                  )}
                  {errors.phone && (
                    <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="become-textarea flex items-start border-b-[1px] border-[#B2B2B2]">
                  <div className="flex-1">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="subheading"
                    />
                  </div>
                  {errors.message && (
                    <span className="text-red-500 text-sm ml-2 mt-2">{errors.message}</span>
                  )}
                </div>
                <button
                  className="form-button mt-[30px] bg-green-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                {status && (
                  <p
                    className={`mt-3 text-center ${
                      status.includes('Success') ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
