"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Paperclip } from "lucide-react";
import * as countryCodesList from "country-codes-list";
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from "next/link";
interface JoinTeamProps{
  title?: string;
  className?: string
}
export default function JoinTeam({title = "Join Our Team", className}: JoinTeamProps) {
  // Form state 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // mobile: "",
    // countryCode: "+91",
    phone: "",
    currentLocation: "",
    qualification: "",
    experience: "",
    noticePeriod: "",
    referredBy: "",
    resume: null as File | null,
  });
  const [defaultCountry, setDefaultCountry] = useState<string>("IN");
  const [isLoading, setIsLoading] = useState(true);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


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
        console.error("Could not detect country, using default:", error);
      } finally {
        setIsLoading(false);
      }
    };
    detectCountry();
  }, []);



  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email is invalid.";
    // if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    // else if (!/^\d{7,15}$/.test(formData.mobile)) newErrors.mobile = "Invalid mobile number.";    
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.currentLocation.trim()) newErrors.currentLocation = "Current location is required.";
    // if (!formData.qualification.trim()) newErrors.qualification = "Qualification is required.";
    // if (!formData.experience.trim()) newErrors.experience = "Please select your experience.";
    // if (!formData.noticePeriod.trim()) newErrors.noticePeriod = "Please select your notice period.";
    if (!formData.resume) newErrors.resume = "Please attach your resume.";
    return newErrors;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const validationErrors = validateForm();
    setIsFormValid(Object.keys(validationErrors).length === 0);
  }, [formData]);


  const experienceOptions = [
    "Fresher",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5+ years"
  ];
  
  const noticePeriodOptions = [
    "Immediately",
    "15 days",
    "1 month",
    "2 months",
    "3 months",
    "More than 3 months"
  ];
  // const myCountryCodesObject = countryCodesList.customList(
  //   "countryCode",
  //   "[{countryCode}] {countryNameEn}: +{countryCallingCode}"
  // );
  // const countryCodes = Object.entries(myCountryCodesObject)
  //   .map(([countryCode, value]) => {
  //     const match = value.match(/\[(\w+)\] (.*?): \+?(\d+)/);
  //     if (!match) return null;
  //     return {
  //       code: `+${match[3]}`,
  //       country: match[1],
  //       name: match[2],
  //     };
  //   })
  //   .filter(Boolean);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    // Validate required fields
    const {
      name,
      email,
      // mobile,
      // countryCode,
      phone,
      currentLocation,
      qualification,
      experience,
      noticePeriod,
      referredBy,
      resume,
    } = formData;
    
    if (
      !name ||
      !email ||
      // !mobile ||
      // !countryCode ||
      !phone ||
      !currentLocation ||
      !qualification ||
      !experience ||
      !noticePeriod ||
      !resume
    ) {
      alert("Please fill in all required fields including the resume.");
      return;
    }
    // Create FormData instead of URLSearchParams
    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone || ""); // Use phone instead of mobile
    formDataToSend.append("url", window.location.pathname);
    formDataToSend.append("current_location", currentLocation);
    formDataToSend.append("qualification", qualification);
    formDataToSend.append("experience", experience);
    formDataToSend.append("notice_period", noticePeriod);
    formDataToSend.append("referred_by", referredBy || "");
    formDataToSend.append("resume", resume);
    try {
      const response = await fetch("https://www.bitpastel.com/api/sendemail.php/", {
        method: "POST",
        body: formDataToSend,
      });
      
      if (response.ok) {
        const result = await response.text();
        console.log("Success:", result);
        alert("Thank you! Your application has been submitted.");
      } else {
        console.error("Failed to submit:", response.status);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection.");
    }
  };
  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };
  if (isLoading) {
    return <div className="max-w-[800px] mx-auto px-4 p-6 text-center">Loading...</div>;
  }
  return (
    <div className={`${className ?? ""} max-w-[800px] mx-auto px-4 md:pt-[90px] pt-[70px]`} id="joinTeamForm">
      <h2 className="title text-title font-semibold font-source text-center mb-8">
        {title}
        {/* Join Our Team */}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div
              className={`flex items-end gap-4 border-b  ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            >
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 text-white subheading font-source font-thin focus:outline-none bg-transparent"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                  {errors.name}
                </p>
              )}
            </div>
            {/* Phone number */}
            <div className={`flex gap-2 pt-[6px] border-b ${errors.mobile ? "border-red-500" : "border-gray-300"}`}>
              <PhoneInput
                international
                defaultCountry={defaultCountry as any} // Default to India
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value || '')}
                placeholder="Mobile number (optional)"
                className="!border-none gap-[20px] w-full !p-0 [&>input]:!text-white [&>input]:!subheading [&>input]:font-source [&>input]:font-thin [&>input]:focus:!outline-none [&>input]:!py-2 [&>input]:!flex-1 [&>input]:placeholder-[#2A2A2A]"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="border-b border-[#04ff04]">
              <input
                type="text"
                name="qualification"
                placeholder="Qualification (Optional)"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full p-2 text-white subheading font-source font-thin focus:outline-none"
              />
            </div>
            <div className="relative cursor-pointer group ">
              <select
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className="w-full p-2 text-text-white subheading font-source font-thin appearance-none bg-transparent focus:outline-none cursor-pointer opacity-0 absolute inset-0"
              >
                <option value="" className="text-white subheading font-source font-thin">
                  Notice Period (Optional)
                </option>
                {noticePeriodOptions.map((option, index) => (
                  <option 
                    key={index} 
                    value={option}
                    className="text-white subheadingfont-source font-thin hover:bg-[rgba(0,0,0,0.12)] focus:bg-[rgba(0,0,0,0.12)]"
                  >
                    {option}
                  </option>
                ))}
              </select>
              
              {/* Custom dropdown display */}
              <div className="flex justify-between items-center w-full p-2 border-b border-[#04ff04]">
                <span className="text-white subheading font-source font-thin">
                  {formData.noticePeriod || "Notice Period (Optional)"}
                </span>
                <ChevronDown className="h-4 w-4 text-black" />
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            <div
              className={`flex items-end gap-4 border-b pb- ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            >
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 text-white subheading font-source font-thin focus:outline-none bg-transparent"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm whitespace-nowrap mb-[2px]">
                  {errors.email}
                </p>
              )}
            </div>
            <div className={`flex items-end gap-4 border-b !mt-6 ${errors.currentLocation ? 'border-red-500' : 'border-gray-300'}`}>
              <input
                type="text"
                name="currentLocation"
                placeholder="Current Location"
                value={formData.currentLocation}
                onChange={handleChange}
                className="flex-1 text-white subheading p-2 sm:subheading font-source font-thin focus:outline-none bg-transparent"
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
                className="w-full p-2 text-white subheading font-source font-thin appearance-none bg-transparent focus:outline-none cursor-pointer opacity-0 absolute inset-0"
              >
                <option value="" className="text-white subheading font-source font-thin">
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
              
              {/* Custom dropdown display */}
              <div className="flex justify-between items-center w-full p-2">
                <span className="text-white subheading font-source font-thin">
                  {formData.experience || "Years of experience (Optional)"}
                </span>
                <ChevronDown className="h-4 w-4 text-black" />
              </div>
            </div>
            <div className="border-b border-[#04ff04]">
              <input
                type="text"
                name="referredBy"
                placeholder="Referred By (Optional)"
                value={formData.referredBy}
                onChange={handleChange}
                className="w-full p-2 text-white subheading font-source font-thin focus:outline-none"
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
          <div className={`flex items-center gap-3 border-b ${errors.resume ? "border-red-500" : "border-gray-300"}`}>
            <button
              type="button"
              onClick={handleAttachmentClick}
              className="flex items-center gap-2 pb-[5px] text-white subheading font-source font-thin"
            >
              <Paperclip className="w-5 h-5" />
              <span>Attach your CV/Resume</span>
            </button>
            {formData.resume && (
              <span className="text-sm text-gray-600">
                {formData.resume.name}
              </span>
            )}
            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:pt-6 pt-2 gap-2">
          <button
            type="submit"
            // className="bg-green-btn text-primary-white font-medium py-2 px-28 rounded transition duration-200 text-center"
              className={`bg-green-btn text-primary-white font-medium py-2 px-28 rounded transition duration-200 text-center ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isFormValid}
          >
            Send
          </button>
          {/* Privacy Policy */}
          <p className="text-white text-center font-roboto text-[10px]">
            By clicking "Send", you agree to our{' '}
            <Link href="/privacy-policys" className=" text-[#52d09c] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}







