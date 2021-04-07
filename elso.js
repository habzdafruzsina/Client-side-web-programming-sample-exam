const percentageObserver = new IntersectionObserver(entries => {
    entries
      //.filter(entry => entry.isIntersecting)
      .forEach(entry => {
        const element = entry.target;
        element.innerHTML = entry.intersectionRatio*100 + "%";
      });
  }, { threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.00]});
  
  
  document.querySelectorAll('#percentagediv').forEach(elem => {
    percentageObserver.observe(elem);
  });