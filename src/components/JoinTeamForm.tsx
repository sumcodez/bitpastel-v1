"use client";
import React, { useState, useRef } from "react";
import { ChevronDown, Paperclip } from "lucide-react";
import * as countryCodesList from "country-codes-list";
export default function JoinTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    currentLocation: "",
    qualification: "",
    experience: "",
    noticePeriod: "",
    referredBy: "",
    resume: null as File | null,
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const experienceOptions = [
    "Fresher",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5+ years",
    "10+ years",
  ];
  const noticePeriodOptions = [
    "Immediately",
    "15 days",
    "1 month",
    "2 months",
    "3 months",
    "More than 3 months"
  ];
  const myCountryCodesObject = countryCodesList.customList(
    "countryCode",
    "[{countryCode}] {countryNameEn}: +{countryCallingCode}"
  );
  const countryCodes = Object.entries(myCountryCodesObject)
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
    // Validate required fields
    const {
        name,
        email,
        mobile,
        countryCode,
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
        !mobile ||
        !countryCode ||
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
    formDataToSend.append("phone", `${countryCode} ${mobile}`);
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
        body: formDataToSend, // No Content-Type header needed - browser will set it automatically with boundary
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
  return (
    <div className="max-w-4xl mx-auto p-6" id="joinTeamForm">
      <h2 className="text-[32px] font-semibold font-source text-gray-900 text-center mb-8">
        Join Our Team
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border-b text-[#B3B3B3] text-[19px] font-source font-thin focus:outline-none"
                required
              />
            </div>
            <div className="flex gap-2 pb-1 border-b border-gray-200">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none min-w-[80px] py-2 px-0 h-auto"
                >
                  {formData.countryCode && (
                    <img
                      src={`https://flagsapi.com/${countryCodes.find(c => c?.code === formData.countryCode)?.country}/flat/64.png`}
                      alt="Country flag"
                      className="w-5 h-3.5 object-cover"
                    />
                  )}
                  <span className="text-gray-900">{formData.countryCode}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      isCountryDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 max-w-80 overflow-y-auto">
                    {countryCodes.map((country) => {
                      if (!country) return null;
                      return (
                        <button
                          
                          key={country.code + country.country}
                          type="button"
                          onClick={() => {
                            handleInputChange("countryCode", country.code);
                            setIsCountryDropdownOpen(false);
                          }}
                          className="w-full p-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 min-w-[180px] justify-start"
                        >
                          <img
                            src={`https://flagsapi.com/${country.country}/flat/64.png`}
                            alt={`${country.name} flag`}
                            className="w-6 h-4 object-cover"
                          />
                          <span className="text-gray-900 text-sm font-medium">
                            {country.name} {country.code}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className="flex-1 focus:outline-none py-2 text-[#B3B3B3] text-[19px] font-source font-thin"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full p-2 border-b border-[#04ff04] text-[#B3B3B3] text-[19px] font-source font-thin focus:outline-none"
                required
              />
            </div>
            <div>
              <select
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className="w-full p-2 border-b text-[#B3B3B3] text-[19px] font-source font-thin appearance-none bg-transparent focus:outline-none"
                required
              >
                <option value="" className="text-[#B3B3B3] text-[19px] font-source font-thin">Select Notice Period</option>
                {noticePeriodOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border-b text-[#B3B3B3] text-[19px] font-source font-thin focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="currentLocation"
                placeholder="Current Location"
                value={formData.currentLocation}
                onChange={handleChange}
                className="w-full mt-1 p-2 border-b text-[#B3B3B3] text-[19px] font-source font-thin focus:outline-none"
                required
              />
            </div>
            <div>
                <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-2 border-b border-[#04ff04] focus:outline-none focus:border-blue-500 appearance-none bg-transparent text-[#B3B3B3] text-[19px] font-source font-thin"
                    required
                >
                    <option value="" className="text-[#B3B3B3]">Select experience</option>
                    {experienceOptions.map((option, index) => (
                    <option key={index} value={option} className="text-black">
                        {option}
                    </option>
                    ))}
                </select>
            </div>
            <div>
              <input
                type="text"
                name="referredBy"
                placeholder="Referred By (if any)"
                value={formData.referredBy}
                onChange={handleChange}
                className="w-full p-2 border-b text-[#B3B3B3] text-[19px] font-source font-thin focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* File input section */}
        <div className="pt-6">
          <input
            type="file"
            name="resume"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
            required
          />
          <div className="flex items-center gap-3 pb-1 border-b border-gray-200">
            <button
              type="button"
              onClick={handleAttachmentClick}
              className="flex items-center gap-2 text-[#B3B3B3] text-[19px] font-source font-thin"
            >
              <Paperclip className="w-5 h-5" />
              <span>Attach CV/Resume</span>
            </button>
            {formData.resume && (
              <span className="text-sm text-gray-600">
                {formData.resume.name}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-6 gap-2">
            <button
                type="submit"
                className="bg-green-btn text-white font-medium py-2 px-28 rounded transition duration-200 text-center"
            >
                Send
            </button>
            {/* Privacy Policy */}
            <p className="text-gray-500 text-center font-roboto text-[10px]">
                By clicking "Send", you agree to our{' '}
                <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
                </a>
            </p>
        </div>
      </form>
    </div>
  );
}