"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

const inline = "flex justify-start ";
const cursor = "cursor-pointer ";

countries.registerLocale(enLocale);

interface Country {
  codeCountry: string;
  imgSRC: string;
  countryName: string;
  callingCode: string;
}

const us: Country = {
  codeCountry: "US",
  imgSRC: `https://flagsapi.com/US/flat/24.png`,
  countryName: "United States",
  callingCode: "+1",
};

const uk: Country = {
  codeCountry: "GB",
  imgSRC: `https://flagsapi.com/GB/flat/24.png`,
  countryName: "United Kingdom",
  callingCode: "+44",
};

const alignCSS = "relative w-full";
const buttonCSS = "px-4 py-2 bg-[#df054a] text-white rounded-full basis-1/4 ";
const dropdownCSS = "cursor-pointer p-2 basis-1/8 ";
const textboxCSS =
  "flex justify-center px-4 py-2 bg-white text-black rounded-full ";
const optionsCSS =
  "border-solid border border-[#ccc] bg-white text-black max-h-52 overflow-y-auto p-2 -translate-y-3 w-full absolute ";
const phoneNumberCSS = "grow focus:outline-none";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(us);
  const [phoneNumber, setPhoneNumber] = useState("");
  if (phoneNumber) {
    //Send to database
  }

  const dropdownRef = useRef<HTMLDivElement>(null);

  const countriesList = getCountries();

  const countriesObjectList: Country[] = countriesList
    .map((countryCode) => {
      const countryName = countries.getName(countryCode, "en");
      if (!countryName) return null;
      if (countryCode == "US" || countryCode == "GB") return null;

      const codeCountry = countryCode.toString();
      const callingCode = `+${getCountryCallingCode(countryCode)}`;
      const imgSRC = `https://flagsapi.com/${countryCode}/flat/24.png`;

      return { codeCountry, imgSRC, countryName, callingCode };
    })
    .filter((country): country is Country => country !== null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={alignCSS} ref={dropdownRef}>
      <div className={textboxCSS}>
        <div onClick={toggleDropdown} className={dropdownCSS}>
          <div className={inline}>
            <Image src={selectedCountry.imgSRC} alt="" width={24} height={24} />
            <p>{selectedCountry.callingCode}</p>
          </div>
        </div>
        <span className="inline-block w-[0.25px] h-10 bg-[#787879] ml-2 mr-3 opacity-30" />
        <input
          type="tel"
          required
          autoComplete="off"
          maxLength={256}
          placeholder="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          className={phoneNumberCSS}
        />
        <button className={buttonCSS}>
          <div>Call Me</div>
          <div></div>
        </button>
      </div>
      {isOpen && (
        <div className={optionsCSS}>
          <div>
            <div
              key={us.codeCountry}
              onClick={() => handleSelect(us)}
              className={inline + cursor + "m-2 "}
            >
              <Image src={us.imgSRC} alt="" width={24} height={24} />
              <p>
                {us.countryName} {us.callingCode}
              </p>
            </div>
            <div
              key={uk.codeCountry}
              onClick={() => handleSelect(uk)}
              className={inline + cursor + "m-2 "}
            >
              <Image src={uk.imgSRC} alt="" width={24} height={24} />
              <p>
                {uk.countryName} {uk.callingCode}
              </p>
            </div>
          </div>
          <hr />
          {countriesObjectList.map((country) => (
            <div
              key={country.codeCountry}
              onClick={() => handleSelect(country)}
              className={inline + cursor + "m-2 "}
            >
              <Image src={country.imgSRC} alt="" width={24} height={24} />
              <p>
                {country.countryName} {country.callingCode}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
