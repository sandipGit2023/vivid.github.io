//增加token秘钥
function token_check(form){
    var key = '500f71851f22f13c914c7a0747f19ab8';
    var all =  form.name.value + key + form.email.value;
    var token = $.md5(all);

    $("input[name='token']").attr('value',token);


}