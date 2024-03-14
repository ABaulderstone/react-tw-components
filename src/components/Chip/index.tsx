import { TWBGColor } from "../../utilities/utility-types/tw-color";

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
  return (
    <span
      onClick={handleSpanClick}
      className={`relative m-1 inline-flex select-none items-center justify-between whitespace-nowrap rounded-full px-3 py-1 font-sans font-bold text-white ${backgroundColor}`}
    >
      {label}
      {onClose && (
        <button onClick={handleCloseClick} className="ml-2">
          X
        </button>
      )}
    </span>
  );
};

export default Chip;
