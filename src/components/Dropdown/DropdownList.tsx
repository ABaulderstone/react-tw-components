import DropdownOption from "./SearchableDropdown/DropdownOption";

interface OptionObj {
  label: string;
  value: any;
}

interface DropdownListProps {
  filteredOptions: Array<OptionObj>;
  onOptionClick: (value: any, label: string) => unknown;
}

const DropdownList = ({
  filteredOptions,
  onOptionClick,
}: DropdownListProps) => {
  return (
    <ul>
      {filteredOptions.map((opt) => (
        <DropdownOption
          key={opt.value}
          value={opt.value}
          label={opt.label}
          onClick={onOptionClick}
        />
      ))}
    </ul>
  );
};

export default DropdownList;
