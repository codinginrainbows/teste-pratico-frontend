import { useEffect } from "react";

export function useHandleResize(setIsOpen: (isOpenState: boolean) => void) {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);
}
