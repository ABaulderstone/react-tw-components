interface DropdownOptionProps {
  value: any;
  label: string;
  onClick: (value: any, label: string) => unknown;
}
const DropdownOption = ({ value, label, onClick }: DropdownOptionProps) => {
  const handleOptionClick = () => {
    onClick(value, label);
  };
  return (
    <>
      <li
        className="hover:bg-blue-300 hover:cursor-pointer"
        onClick={handleOptionClick}
      >
        {label}
      </li>
    </>
  );
};

export default DropdownOption;
