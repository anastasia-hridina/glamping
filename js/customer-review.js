const slides = [
    `<article class="customer-review__carousel-item">
                <div class="customer-review__carousel-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p>"The geodesic dome we stayed in was a unique experience, offering unparalleled views of the
                    star-studded
                    sky at night."
                </p>
                <span class="customer-review__carousel-name">Amanda Lawson, New York</span>
            </article>`,
    `<article class="customer-review__carousel-item">
                <div class="customer-review__carousel-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p>"We opted for a tent overlooking the tranquil lake, and it was the perfect setting for a peaceful
                    retreat."
                </p>
                <span class="customer-review__carousel-name">Jessica Wilson, Tampa</span>
            </article>`,
    `<article class="customer-review__carousel-item">
                <div class="customer-review__carousel-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p>"Hidden Heaven Glamping exceeded all our expectations. The tree house accommodation was like a
                    fairytale!"
                </p>
                <span class="customer-review__carousel-name">Eric Wastler, California</span>
            </article>`,
    `<article class="customer-review__carousel-item">
                <div class="customer-review__carousel-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p>"We enjoyed exploring the nearby trails for mountain biking, and the kids had a blast roasting
                    marshmallows over the
                    campfire."
                </p>
                <span class="customer-review__carousel-name">Dean Peterson, Nebraska</span>
            </article>`,
];

let slideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector(".customer-review__slides");
    slideContainer.innerHTML = slides[slideIdx];
    if (window.matchMedia("(min-width:768px)").matches) {
        const secondSlideIdx =
            slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia("(min-width:980px)").matches) {
            const thirdSlideIdx =
                secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
}

function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".customer-review__carousel-nextbtn");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".customer-review__carousel-prevbtn");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
