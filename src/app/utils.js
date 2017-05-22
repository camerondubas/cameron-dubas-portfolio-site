
export const loadImagesInViewport = () => {
  const IntersectionObserver = IntersectionObserver || false;
  const images = [].slice.call(document.querySelectorAll('img[data-src]')); // Convert NodeList to Array

  const displaySrc = elem => {
    if (elem.dataset.src) {
      elem.src = elem.dataset.src;
    }

    if (elem.dataset.srcset) {
      elem.srcset = elem.dataset.srcset;
    }
  }

  if (IntersectionObserver) {
    const handleEntries = entries => {
      entries.forEach(entry => {
        displaySrc(entry.target);
        io.unobserve(entry.target);
      });
    };

    let io = new IntersectionObserver(handleEntries);

    images.forEach(img => io.observe(img));
  } else {
    // Fallback
    images.forEach(img => displaySrc(img));
  }
};
