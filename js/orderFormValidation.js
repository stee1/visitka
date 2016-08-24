/**
 * Created by dmitry on 12.08.2016.
 */

$.validator.addMethod("regexp", function(value, element, param) {
    //console.log("v: "+value+"; p: "+param);
    //console.log(value.match(new RegExp( param )));
    return value.match(new RegExp(param));
});

$("#orderForm").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            regexp: "[a-zA-Zа-яА-Я ]+"
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            regexp: "[0-9]{10}",
            maxlength: 10
        },
        service: {
            required: true
        },
        amount: {
            required: true,
            maxlength: 3,
            min: 1
        },
        design: {
            required: true
        }

    },
    messages: {
        name: {
            required: "Введите имя",
            minlength: "Минимальная длина имени 3 символа",
            regexp: "Имя может состоять только из букв"
        },
        email: {
            required: "Введите e-mail",
            email: "Введите корректный e-mail (example@mail.com)"
        },
        phone: {
            required: "Введите номер телефона",
            regexp: "Номер телефона должен быть в формате 10 цифр без пробелов и тире",
            maxlength: "Длина телефонного номера не должена превышать 10 символов "
        },
        service: {
            required: "Выберите тип услуги"
        },
        amount: {
            required: "Введите количество",
            maxlength: "Значение не должно превышать трехзначное число",
            min: "Значение должно быть больше 0"
        },
        design: {
            required: "Выберите один из вариантов ниже"
        }
    }
});