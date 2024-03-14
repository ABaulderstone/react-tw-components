import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TWBGColor } from "../../utilities/utility-types/tw-color";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ChipProps {
  label: string;
  backgroundColor?: TWBGColor;
  onClick?: (label: string) => unknown;
  onClose?: (label: string) => unknown;
}

const Chip = ({
  label,
  onClick,
  onClose,
  backgroundColor = "bg-sky-500",
}: ChipProps) => {
  const handleSpanClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onClick && onClick(label);
  };
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClose && onClose(label);
  };

  const onClickClasses = onClick ? "hover:scale-105 hover:cursor-pointer" : "";
  return (
    <span
      onClick={handleSpanClick}
      className={`m-1 inline-flex select-none items-center justify-between whitespace-nowrap rounded-full px-3 py-1 font-sans font-bold text-white ${backgroundColor} ${onClickClasses}`}
    >
      {label}
      {onClose && (
        <button
          onClick={handleCloseClick}
          className="ml-2.5 text-sm focus:outline-none hover:text-black self-start"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      )}
    </span>
  );
};

export default Chip;
