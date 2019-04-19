let number = prompt('Mời bạn nhập số điện thoại bạn của bạn');
let regex = /^(096|097|036|098|)[0-9]{7}$/;
let result = regex.test(number);
if (result === true) {
    alert("Bạn đang dùng số điện thoại của nhà mạng Viettel");
} else {
    alert("Số điện thoại của bạn không thuộc nhà mạng Viettel");
}