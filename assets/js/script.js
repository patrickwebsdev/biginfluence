let statistics = document.querySelector(".statistics__container");

let counter = () => {
    document.querySelectorAll("[countup]").forEach(counter => {
        const maxCount = parseInt(counter.getAttribute("countup"));
        const time = 200;
        const updateCounter = () => {
            const actualCount = parseInt(counter.getAttribute("actualcount"));

            const increment = maxCount / time;

            if(actualCount < maxCount) {
                counter.innerText = new Intl.NumberFormat('en-EN').format(Math.floor(actualCount+increment));
                counter.setAttribute("actualcount", Math.floor(actualCount+increment));
                setTimeout(updateCounter, 1);
            }
            else {
                counter.innerText = new Intl.NumberFormat('en-EN').format(maxCount);
            }
        };
        updateCounter();
    });
};
const startCount = (elements) => {
    elements.forEach((element) => {
        if(element.isIntersecting) {
            if(element.target.classList.contains("statistics__container")){
                counter();
            }
        }
    })
};


const observerCount = new IntersectionObserver(startCount, {
    root: null,
    rootMargin: "-25%",
    threshold: 0
});

observerCount.observe(statistics);