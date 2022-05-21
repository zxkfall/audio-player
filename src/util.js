const getID3TotalSize = (array, pos) => ((array[pos] & 0x7f) << 21) +
    ((array[pos + 1] & 0x7f) << 14) +
    ((array[pos + 2] & 0x7f) << 7) +
    (array[pos + 3] & 0x7f);

const getID3FrameSize = (array, pos) => ((array[pos] & 0xff) << 24) +
    ((array[pos + 1] & 0xff) << 16) +
    ((array[pos + 2] & 0xff) << 8) +
    (array[pos + 3] & 0xff);

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

module.exports = {getContentSize, getElSize, isSupportedCssVar, uint8ToBase64, getID3TotalSize, getID3FrameSize}
