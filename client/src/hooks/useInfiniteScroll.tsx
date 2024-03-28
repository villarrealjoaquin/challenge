import { useEffect, useRef, useState } from "react";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

export default function useInfiniteScroll() {
  const [isObserver, setIsObserver] = useState(false);
  const [numProductsToShow, setNumProductsToShow] = useState(6);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNumProductsToShow((prev) => prev + 4);
        setIsObserver(entry.isIntersecting);
      }
    }, options);
    const elementToObserve = ref.current;
    if (elementToObserve) observer.observe(elementToObserve);
    return () => {
      if (elementToObserve) {
        observer.disconnect();
      }
    };
  }, [ref.current]);

  return { isObserver, numProductsToShow, ref };
}
