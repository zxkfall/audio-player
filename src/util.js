const getElSize = (array, pos) => (array[pos] << 24) +
    (array[pos + 1] << 16) +
    (array[pos + 2] << 8) +
    array[pos + 3];

const getContentSize = (array, pos) => (array[pos] << 16) +
    (array[pos + 1] << 8) +
    array[pos + 2];

const uint8ToBase64 = (uint8, type) => {
    const str = uint8.reduce((data, byte) => {
        return data + String.fromCharCode(byte);
    }, '');
    return `data:${type};base64,${(window.btoa(str.toString()))}`
};

const isSupportedCssVar = () => {
    const b = window.CSS && window.CSS.supports && window.CSS.supports('--background-image', "./images/flower.jpg");
    if (b) {
        console.log('support CSS var')
    } else {
        console.log('not support CSS var')
    }
}

module.exports = {getContentSize, getElSize, isSupportedCssVar, uint8ToBase64}
