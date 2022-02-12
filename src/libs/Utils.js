export function If(props) {
    if (!!props.condition) {
        return props.children
    }
    return null
}

export function visibleY(el) {
    var rect = el.getBoundingClientRect(),
        top = rect.top,
        height = rect.height,
        el = el.parentNode;
    do {
        rect = el.getBoundingClientRect();
        if (top <= rect.bottom === false) return false;
        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) return false
        el = el.parentNode;
        // eslint-disable-next-line eqeqeq
    } while (el != document.body);
    // Check its within the document viewport
    return top <= document.documentElement.clientHeight;
}

// Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
export function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function () {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function () {
            var now = Date.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

export default function Utils(){
    
};