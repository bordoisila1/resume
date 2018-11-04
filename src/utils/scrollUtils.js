export const getScrollPercentage = (selector) => {
    let element = document.querySelector(selector)
    let scrolled = 0
    if (element) {
        let scrollTop = element.scrollTop
        let scrollHeight = element.scrollHeight
        let clientHeight = element.clientHeight
        scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100
    }
    return scrolled
}