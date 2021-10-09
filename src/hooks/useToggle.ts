import { useEffect, useState, useCallback } from "react";

type BooleanType = {
  onTrue(): void;
  onFalse(): void;
};

export const useToggle = (
  inititalValue: boolean = false,
  { onTrue, onFalse }: BooleanType
) => {
  const [isOpen, setIsOpen] = useState<boolean>(inititalValue);

  const toggleOpen = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      if (typeof onTrue === "function") {
        onFalse();
      }
      return false;
    } else {
      setIsOpen(true);
      if (typeof onFalse === "function") {
        onTrue();
      }
      return true;
    }
  }, [isOpen, onFalse, onTrue]);

  useEffect(() => {
    setIsOpen(inititalValue);
    return () => {};
  }, [inititalValue]);

  return [isOpen, toggleOpen];
};
