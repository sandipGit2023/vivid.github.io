$(function () {
    $(document).ready(function () {
        $(window).resize(function() {
            if ($(window).width() < 481) {
                $('.view-more-cat').text(">");
                $('.view-more-cat').css("padding", "5px");
                $('.view-more-cat').css("width", "30px");
            }else{
                $('.view-more-cat').text("view more>");
                $('.view-more-cat').css("padding", "15px");
            }
        });

        $("a")
            .mouseenter(function () {
                var title = $(this).attr("title");
                $(this).attr("tmp_title", title);
                $(this).attr("title", "");
            })
            .mouseleave(function () {
                var title = $(this).attr("tmp_title");
                $(this).attr("title", title);
            })
            .click(function () {
                var title = $(this).attr("tmp_title");
                $(this).attr("title", title);
            });
    });
    $("yige-header .navs .header-nav>ul>li>a").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            $(this).parent("li").siblings().removeClass("actived");
            $(this).parent("li").addClass("actived");
        }
    })
    $("yige-header .navs .sub-menu>ul>li>a").each(function () {
        $this = $(this);
        if ($this[0].href == String(window.location)) {
            $(this).parent("li").siblings().removeClass("actived");
            $(this).parent("li").addClass("actived");
        }
    })

    // header
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("yige-header .topbar").hide();
            $("yige-header .header-info").hide();
            $("yige-header .area").hide();
            $("yige-header .subMenu").addClass("subMenuFilex");
            $(".scroll-top").show(600);
        } else {
            $("yige-header .subMenu").removeClass("subMenuFilex");
            $("yige-header .topbar").show();
            $("yige-header .header-info").show();
            $("yige-header .area").show();
            $(".scroll-top").hide(600)
        }
    });
    // wap-nav
    $(".navbar-toggle").click(function () {
        var wnlBlock = $(".wnl").is(":hidden");
        if (wnlBlock) {
            $(".wnl").show()
        } else {
            $(".wnl").hide()
        }
        $(".header-nav").slideToggle(300);
    });
    $(".submenu-button").click(function () {
        $(this).next('.sub-menu').slideToggle(300);
        $(this).next('.third-sub').slideToggle(300);
        $(this).next('.fourth-sub').slideToggle(300);
    })
    // swiper_index
    var swiper_index = new Swiper('.swiper_index', {
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.swiper_index-next',
            prevEl: '.swiper_index-prev',
        },
        pagination: {
            el: '.swiper_pagination',
            clickable: true,
        },
    });
    $('.swiper_index').mouseover(function () {
        swiper_index.autoplay.stop();
    })
    $('.swiper_index').mouseout(function () {
        swiper_index.autoplay.start();
    })
    // scroll-top
    $(".scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    var yigeSolution2 = new Swiper(".yige-solution2 .swiper-container", {
        slidesPerView: "auto",
        centeredSlides: !0,
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.yige-solution2-next',
            prevEl: '.yige-solution2-prev',
        },
    });
    $('.yige-solution2 .swiper-container').mouseover(function () {
        yigeSolution2.autoplay.stop();
    })
    $('.yige-solution2 .swiper-container').mouseout(function () {
        yigeSolution2.autoplay.start();
    })
    $(".counter").countUp({
        delay: 5,
        time: 150
    })
    $(".yige-products-all .yige-productForm  .bnt_a").click(function () {
        $(".contact_us_yc").show()
    })
    $(".contact_us_yc .colse").click(function () {
        $(".contact_us_yc").hide()
    })
    var HomeUrl = window.location.pathname
    if (HomeUrl == '/AffiliatePolicy.html') {
        $("#cateb").hide()
    }
    if (HomeUrl == '/Company.html') {
        $("#cateb").hide()
    }
    $(".yige-policy-c .aa .title ul li").click(function () {
        $(this).toggleClass("active")
    })
    $("table").wrap('<div class="table-responsive"></div>');
    $(".yige-productDetails .total img").wrap('<div class="ImgUrl"></div>');
    var NavsHeight = $("yige-header").height()
    var MIndex = $(".swiper_index")
    MIndex.css("margin-top", NavsHeight)
    var BannerImg = $("yige-banner-img .img")
    BannerImg.css("margin-top", NavsHeight)
    var subMenuTop = $(".subMenu")
    subMenuTop.css("top", NavsHeight)

    if (navigator.userAgent.match(/mobile/i)) {} else {
        // header
        var qcloud = {};
        $('[data-id]').hover(function () {
            $("#IconSub").hide()
            var _nav = $(this).attr('data-id');
            clearTimeout(qcloud[_nav + '_timer']);
            qcloud[_nav + '_timer'] = setTimeout(function () {
                $('[data-id]').each(function () {
                    $(this)[_nav == $(this).attr('data-id') ? 'addClass' : 'removeClass']('actives');
                });
                $('#' + _nav).stop(true, true).slideDown(500);
            }, 150);
        }, function () {
            var _nav = $(this).attr('data-id');
            clearTimeout(qcloud[_nav + '_timer']);
            qcloud[_nav + '_timer'] = setTimeout(function () {
                $('[data-id]').removeClass('nav-up-selected');
                $('#' + _nav).stop(true, true).hide();
            }, 150);
        });
    }

    $('.navs .top-right .img').click(function () {
        $(this).children('#IconSub').stop().slideToggle(500);
    })
    $(".wap-nav .wnl").css("top", NavsHeight)

    $(document).on("click", ".view-product", function(){
        localStorage.setItem("product-id", $(this).attr("data-product-id"));
    })

    $(document).on("click", ".category-prodcuts", function(){
        localStorage.setItem("cat-id", $(this).attr("data-cat-id"));
    })

    fetch('../../Json/footer.json')
        .then(res => res.json())
        .then(data => {
            $('.footer-address').text(data.address);
            $('.footer-phone-number').text(data.phone);
            $('.footer-email').text(data.email);
            $('.footer-solution').text(data.solution);

            let social = ''
            data.social.map((soc, i) => {
                if (i % 2 === 0) {
                    social += `<li>`
                }

                social +=  `<a href="${soc.url}"
                                title="${soc.name}"
                                target="_blank">
                                <embed src="${soc.icon}"
                                    style="pointer-events:none;" width="57" height="40">
                            </a>`

                if (i % 2 != 0) {
                    social += `</li>`
                }

            })

            $('.footer-social').append(social)
        })
    });

function openFooterPhone() {
    let phoneNumber = $(".footer-phone-number").text();
    if (phoneNumber || phoneNumber == '') {
        phoneNumber = $("#contact-me .phone-number").text();
    }
    window.open(`tel: ${phoneNumber}`)
}

function openFooterEmail() {
    let email = $(".footer-email").text();
    if (email || email == '') {
        phoneNumber = $("#contact-me .email").text();
    }
    window.open(`mailto:${email}`)
}

// form
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function beforeSubmit2(form) {
    if (form.name.value == '') {
        toastr.error('Name can not be empty')
        form.name.focus();
        return false;
    } else if (form.email.value == '') {
        toastr.error('Please enter the correct email format')
        form.email.focus();
        return false;
    } else if (!form.email.value.match(mailformat)) {
        toastr.error('The Email is wrong')
        form.email.focus();
        return false;
    } else if (form.message.value == '') {
        toastr.error('The Message can not be empty')
        form.message.focus();
        return false;
    } else {
        Email.send({
            SecureToken: "d4371f1d-34ee-4a25-a56e-43055a180f28",
            To: "ghodasarasandip011@gmail.com",
            From: form.email.value,
            Subject: "Contact Form Submission",
            Body: "Name: " + form.name.value + "<brr><br><hr><br>Message: " + form.message.value
        }).then(function(response) {
            toastr.success('Thank you for contact, will reach you soon..!')
            $(document).find("#contact_form").find("input[type=text], textarea").val("");
            return false;
        }).catch(function(error) {
            toastr.error("Error sending message:", error)
            return false;
        });

        return false;
    }
}