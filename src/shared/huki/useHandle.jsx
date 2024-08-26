import { useEffect, useState } from "react";

const useOutsideClick = (ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (path && !path.includes(ref.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return [isOpen, setIsOpen];
};

export default useOutsideClick;
