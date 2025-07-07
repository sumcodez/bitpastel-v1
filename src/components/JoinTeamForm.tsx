'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Paperclip } from 'lucide-react';
import * as countryCodesList from 'country-codes-list';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

interface JoinTeamProps {
  title?: string;
  className?: string;
  jobTitle?: string;
}

export default function JoinTeam({ title = 'Join Our Team', className, jobTitle }: JoinTeamProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentLocation: '',
    qualification: '',
    experience: '',
    noticePeriod: '',
    referredBy: '',
    jobTitle: '',
    job_title: '',
    resume: null as File | null,
  });
  
  const [defaultCountry, setDefaultCountry] = useState<string>('IN');
  const [isLoading, setIsLoading] = useState(true);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid.';
    // if (!formData.phone) newErrors.phone = 'Phone number is required.';

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else {
      const numericPhone = formData.phone.replace(/\D/g, '');
      if (numericPhone.length > 0 && numericPhone.length < 8) {
        newErrors.phone = 'Mobile number should be at least 8 digits.';
      }
    }
    
    if (!formData.currentLocation.trim())
      newErrors.currentLocation = 'Current location is required.';
    if (!formData.resume) newErrors.resume = 'Please attach your resume.';
    return newErrors;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const validationErrors = validateForm();
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [formData]);

  const experienceOptions = ['Fresher', '1 year', '2 years', '3 years', '4 years', '5+ years'];
  const noticePeriodOptions = [
    'Immediately',
    '15 days',
    '1 month',
    '2 months',
    '3 months',
    'More than 3 months',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    
    if (!captchaToken) {
      alert("Please verify that you're not a robot.");
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || '');
    formDataToSend.append('url', window.location.pathname);
    formDataToSend.append('current_location', formData.currentLocation);
    formDataToSend.append('qualification', formData.qualification);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('notice_period', formData.noticePeriod);
    formDataToSend.append('job_title', formData.jobTitle || '');
    formDataToSend.append('referred_by', formData.referredBy || '');
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      const response = await fetch('https://www.bitpastel.com/api/sendemail.php/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit:', response.status);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };



  if (isLoading) {
    return <div className="max-w-[800px] mx-auto px-4 p-6 text-center">Loading...</div>;
  }

  if (isSubmitted) {
    return (
      <div className={`${className ?? ''} max-w-[800px] mx-auto px-4 md:pt-[90px] pt-[70px] text-center`}>
        <p className="text-[#009999] text-lg font-roboto">
          Thank you {formData.name} for your job application!
        </p>
      </div>
    );
  }

  return (
    <div className={`${className ?? ''} max-w-[800px] mx-auto px-4 md:pt-[90px] pt-[70px] relative`} id="joinTeamForm">
      {/* Loading overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-transparent bg-opacity-90 flex flex-col items-center justify-center z-10 rounded-lg">
          <div className="text-white text-xl mb-4 font-semibold">Sending your application...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      <h2 className="title text-title font-semibold font-source text-center mb-8">
        {title}
      </h2>
      
      <form onSubmit={handleSubmit} className={`space-y-8 ${isSubmitting ? 'pointer-events-none opacity-70' : ''}`}>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div
              className={`flex items-end gap-4 border-b  ${
                errors.name ? 'border-red-500' : formData.name ? 'border-[#04ff04]' : 'border-gray-300'
              }`}
            >
              <div className="flex-1">
                <input
                  autoComplete="new-text-2"
                  readOnly
                  onFocus={(e) => e.target.removeAttribute('readOnly')}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 text-title subheading font-source font-thin focus:outline-none bg-transparent"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                  {errors.name}
                </p>
              )}
            </div>
            
            <div
              className={`relative flex gap-2 pt-[6px] border-b ${errors.mobile ? 'border-red-500' : formData.phone ? 'border-[#04ff04]' : 'border-gray-300'}`}
            >
              <PhoneInput
                international
                defaultCountry={defaultCountry as any}
                countryCallingCodeEditable={false}
                value={formData.phone}
                onChange={(value) => {
                  if (!value) {
                    handleInputChange('phone', '');
                    return;
                  }

                  const digitsOnly = value.replace(/\D/g, '');

                  if (digitsOnly.length <= 15) {
                    handleInputChange('phone', value);
                  } else {
                    // Prevent update — keep previous valid value
                    return;
                  }

                  // Re-run validation
                  const newErrors = validateForm();
                  setErrors(newErrors);
                }}

                onKeyDown={(e: React.KeyboardEvent) => {
                  const digitsOnly = formData.phone.replace(/\D/g, '');

                  const allowedKeys = [
                    'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab',
                  ];

                  if (
                    digitsOnly.length >= 15 &&
                    !allowedKeys.includes(e.key) &&
                    // prevent typing digits when max reached
                    /^\d$/.test(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}

                placeholder="Mobile number (optional)"
                autoComplete="new-text-852"
                className="!border-none gap-[20px] subheading font-roboto w-full !p-0 [&>input]:!text-title [&>input]:!subheading [&>input]:font-source [&>input]:font-thin [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!flex-1 [&>input]:placeholder-[#2A2A2A]"
              />
              {!formData.phone && (
                <p className="text-white absolute top-[16px] subheading left-[130px] whitespace-nowrap font-[100] pointer-events-none">
                  Mobile number (optional)
                </p>
              )}
              {errors.phone && (
                <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                  {errors.phone}
                </p>
              )}
            </div>
            
            <div className="border-b border-[#04ff04]">
              <input
                autoComplete="new-text-99"
                readOnly
                onFocus={(e) => e.target.removeAttribute('readOnly')}
                type="text"
                name="qualification"
                placeholder="Qualification (Optional)"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full p-2 text-title subheading font-source font-thin focus:outline-none"
              />
            </div>
            
            <div className="relative cursor-pointer group ">
              <select
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className="w-full p-2 text-title subheading font-source font-thin appearance-none bg-transparent focus:outline-none cursor-pointer opacity-0 absolute inset-0"
              >
                <option value="" className="text-title subheading font-source font-thin">
                  Notice Period (Optional)
                </option>
                {noticePeriodOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option}
                    className="text-title subheading font-source font-thin hover:bg-[rgba(0,0,0,0.12)] focus:bg-[rgba(0,0,0,0.12)]"
                  >
                    {option}
                  </option>
                ))}
              </select>

              <div className="flex justify-between items-center w-full p-2 border-b border-[#04ff04]">
                <span className="text-white subheading font-source font-thin">
                  {formData.noticePeriod || 'Notice Period (Optional)'}
                </span>
                <ChevronDown className="h-4 w-4 text-black" />
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <div
              className={`flex items-end gap-4 border-b pb- ${
                errors.email ? 'border-red-500' : formData.email ? 'border-[#04ff04]' : 'border-gray-300'
              }`}
            >
              <div className="flex-1">
                <input
                  autoComplete="new-text-2"
                  readOnly
                  onFocus={(e) => e.target.removeAttribute('readOnly')}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 text-title subheading font-source font-thin focus:outline-none bg-transparent"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                  {errors.email}
                </p>
              )}
            </div>
            
            <div
              className={`flex items-end gap-4 border-b !mt-6 ${errors.currentLocation ? 'border-red-500' : formData.currentLocation ? 'border-[#04ff04]' : 'border-gray-300'}`}
            >
              <input
                autoComplete="new-text-754"
                readOnly
                onFocus={(e) => e.target.removeAttribute('readOnly')}
                type="text"
                name="currentLocation"
                placeholder="Current Location"
                value={formData.currentLocation}
                onChange={handleChange}
                className="flex-1 text-title mt-1.5 subheading p-2 sm:subheading font-source font-thin focus:outline-none bg-transparent"
              />
              {errors.currentLocation && (
                <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                  {errors.currentLocation}
                </p>
              )}
            </div>
            
            <div className="relative cursor-pointer group border-b border-[#04ff04]">
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 text-title subheading font-source font-thin appearance-none bg-transparent focus:outline-none cursor-pointer opacity-0 absolute inset-0"
              >
                <option value="" className="text-title subheading font-source font-thin">
                  Years of experience (Optional)
                </option>
                {experienceOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option}
                    className="text-black hover:bg-[rgba(0,0,0,0.12)] focus:bg-[rgba(0,0,0,0.12)]"
                  >
                    {option}
                  </option>
                ))}
              </select>

              <div className="flex justify-between items-center w-full p-2">
                <span className="text-white subheading font-source font-thin">
                  {formData.experience || 'Years of experience (Optional)'}
                </span>
                <ChevronDown className="h-4 w-4 text-black" />
              </div>
            </div>
            
            <div className="border-b border-[#04ff04]">
              <input
                autoComplete="new-text-452"
                readOnly
                onFocus={(e) => e.target.removeAttribute('readOnly')}
                type="text"
                name="referredBy"
                placeholder="Referred By (Optional)"
                value={formData.referredBy}
                onChange={handleChange}
                className="w-full p-2 text-title subheading font-source font-thin focus:outline-none"
              />
            </div>
          </div>
        </div>
        
        {/* File input section */}
        <div className="pt-[10px]">
          <input
            type="file"
            name="resume"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          <div
            className={`flex items-center gap-3 border-b ${errors.resume ? 'border-red-500' : formData.resume ? 'border-[#04ff04]' : 'border-gray-300'}`}
          >
            <button
              type="button"
              onClick={handleAttachmentClick}
              className="flex items-center gap-2 pb-[5px] text-white subheading font-source font-thin"
            >
              <Paperclip className="w-5 h-5" />
              <span>Attach your CV/Resume</span>
            </button>
            {formData.resume && (
              <span className="text-sm text-gray-600">{formData.resume.name}</span>
            )}
            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center md:pt-6 pt-2 gap-2">
          {/* ReCAPTCHA */}
          {isFormValid && (
            <ReCAPTCHA
              sitekey="6LdSzGEUAAAAABG0EhsRTOkyJUyTqwFz6gpNX8g1"
              onChange={(token) => setCaptchaToken(token)}
              className="mb-4"
            />
          )}

          <button
            type="submit"
            className={`bg-green-btn text-primary-white font-medium py-2 px-28 rounded transition duration-200 text-center ${
              !isFormValid || !captchaToken ? 'opacity-20 cursor-not-allowed' : ''
            }`}
            disabled={!isFormValid || !captchaToken}
          >
            Send
          </button>

          {/* Privacy Policy */}
          <p className="text-white text-center font-roboto text-[10px]">
            By clicking "Send", you agree to our{' '}
            <Link href="/privacy-policys" className=" text-till hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}