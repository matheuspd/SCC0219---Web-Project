"use strict"

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.isPhone = (value, message) => {
    var reg = new RegExp(/\(\d{2}\)\d{4}\-\d{4}/gm);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.isGreaterThan = (value, number, message) => {
    if (value < number)
        errors.push({ message: message });
}

ValidationContract.prototype.isLessThan = (value, number, message) => {
    if (value > number)
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

ValidationContract.prototype.isImage = (value, message) => {
    var reg = new RegExp(/(\.\/src\/assets\/img\/shirts\/(\w*)\.jpg)|(^$)/gm);
    if (!reg.test(value))
        errors.push({ message: message });
}

module.exports = ValidationContract;