import { ChangeEvent, useEffect, useState } from "react";
import DropdownList from "./DropdownList";
import ScrollableBox from "./ScrollableBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faClose } from "@fortawesome/free-solid-svg-icons";
interface OptionObj {
  label: string;
  value: any;
}
interface SearchableDropdownProps {
  value: any;
  onChange: (value: any) => unknown;
  placeholder: string;
  options: OptionObj[];
}

const SearchableDropdown = ({
  options,
  value,
  onChange,
  placeholder,
}: SearchableDropdownProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);
  const [isBlurDelayed, setIsBlurDelayed] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onOptionClick = (value: any, label: string) => {
    console.log("Clicked");
    onChange(value);
    setSearchTerm(label);
    setIsListOpen(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleBlur = () => {
    if (!isBlurDelayed) {
      setTimeout(() => {
        setIsListOpen(false);
        setIsBlurDelayed(false);
      }, 100); // Adjust the delay as needed
      setIsBlurDelayed(true);
    }
  };

  useEffect(() => {
    if (!isListOpen) {
      setIsBlurDelayed(false);
    }
  }, [isListOpen]);

  console.log(value);
  return (
    <div className="z-5 h-16 relative">
      <div className="relative">
        <input
          className="w-full
          appearance-none 
          rounded border 
          py-2
          px-2
          leading-tight 
          text-gray-700 
          shadow 
          bg-white
          focus:border-blue-500
          focus:bg-white
          focus:outline-none
          disabled:bg-gray-200"
          type="text"
          value={searchTerm}
          placeholder={placeholder}
          onFocus={() => setIsListOpen(true)}
          onBlur={handleBlur}
          onChange={onInputChange}
        />
        {searchTerm.length > 0 ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FontAwesomeIcon onClick={() => setSearchTerm("")} icon={faClose} />
          </div>
        ) : (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        )}
      </div>
      {isListOpen && (
        <ScrollableBox>
          <DropdownList
            filteredOptions={filteredOptions}
            onOptionClick={onOptionClick}
          />
        </ScrollableBox>
      )}
    </div>
  );
};

export default SearchableDropdown;
