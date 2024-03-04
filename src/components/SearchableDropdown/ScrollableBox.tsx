import { ReactNode } from "react";

interface ScrollableBoxProps {
  children: ReactNode;
}

const ScrollableBox = ({ children }: ScrollableBoxProps) => {
  return (
    <div className="relative">
      <div className="border border-gray-300 rounded-md overflow-y-auto max-h-40 bg-white">
        {children}
      </div>
    </div>
  );
};

export default ScrollableBox;
