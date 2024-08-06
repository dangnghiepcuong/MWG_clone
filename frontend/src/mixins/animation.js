import _get from 'lodash/get';

export default {
    methods: {
        navigateSlider(frameSelector, direction, adjustWidth = 0, numberOfShownEls = 1, event) {
            let frameEl = document.querySelector(frameSelector);
            let frameWidth = frameEl.offsetWidth + adjustWidth
            let sliderEl = frameEl.querySelector('.slider')
            let elements = sliderEl.querySelectorAll('.slide')
            let numberOfEls = _get(elements, 'length');

            if (!numberOfEls) {
                return
            }

            const leftPosFrameSliderEl = Math.floor(frameEl.offsetLeft);
            const leftPosSliderEl = Math.floor(sliderEl.offsetLeft);

            if ((leftPosSliderEl - leftPosFrameSliderEl) % frameWidth != 0) {
                return
            }

            let isEdge = true;
            switch (direction) {
                case 'right': 
                    isEdge = leftPosSliderEl <= leftPosFrameSliderEl + Math.ceil(numberOfEls / numberOfShownEls - 1) * -frameWidth;
                    sliderEl.style.left = isEdge ? frameEl.offsetLeft + 'px' : (sliderEl.offsetLeft - frameWidth) + 'px';
                    event.target.style.opacity = isEdge ? '50%' : '80%';

                    break;
                case 'left':
                    isEdge = leftPosSliderEl >= leftPosFrameSliderEl;
                    sliderEl.style.left = isEdge ?
                        (leftPosFrameSliderEl + Math.ceil(numberOfEls / numberOfShownEls - 1) * -frameWidth) + 'px' :
                        (sliderEl.offsetLeft + frameWidth) + 'px';
                    event.target.style.opacity = isEdge ?  '50%' : '80%';
                    break;
            }
        }
    }
}
