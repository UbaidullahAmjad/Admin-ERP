/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // alert($(window).outerWidth());
    if ($(window).outerWidth() < 1199) {
        if (window.location.pathname == "/") {
            $('nav.side-navbar').removeClass('shrink');
            $('.page').removeClass('active');
            $('#close-sidebar').show();
        }
        else {
            $('nav.side-navbar').addClass('shrink');
            $('.page').addClass('active');
            $('#close-sidebar').show();
        }
    } else {
        $('#close-sidebar').hide();
    }

    window.onresize = function (event) {
        // alert($(window).outerWidth());
        if ($(window).outerWidth() < 1199) {
            if (window.location.pathname == "/") {
                $('nav.side-navbar').removeClass('shrink');
                $('.page').removeClass('active');
                $('#close-sidebar').show();
            }
            else {
                $('nav.side-navbar').addClass('shrink');
                $('.page').addClass('active');
                $('#close-sidebar').show();
            }
        } else {
            $('nav.side-navbar').removeClass('shrink');
            $('.page').removeClass('active');
            $('#close-sidebar').hide();
        }
    };
    var width = $(window).outerWidth();
    // alert(width);

    // ------------------------------------------------------- //
    // full screen button
    // ------------------------------------------------------ //

    function toggleFullscreen(elem) {
        elem = elem || document.documentElement;
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    if (('#btnFullscreen').length > 0) {
        document.getElementById('btnFullscreen').addEventListener('click', function () {
            toggleFullscreen();
        });
    }

    //Custom select
    $('select').selectpicker();

    $('[data-toggle="tooltip"]').tooltip();

    // Main Template Color
    var brandPrimary = '#33b35a';

    // ------------------------------------------------------- //
    // Custom Scrollbar
    // ------------------------------------------------------ //

    if ($(window).outerWidth() > 992) {
        $("nav.side-navbar,.table-container,.transaction-list,.right-sidebar").mCustomScrollbar({
            theme: "light",
            scrollInertia: 200
        });
    }

    // ------------------------------------------------------- //
    // Side Navbar Functionality
    // ------------------------------------------------------ //

    $('#toggle-btn').on('click', function (e) {

        e.preventDefault();

        if ($(window).outerWidth() > 1199) {
            $('nav.side-navbar').toggleClass('shrink');
            $('.page').toggleClass('active');
        } else {
            $('nav.side-navbar').toggleClass('shrink');
            $('.page').toggleClass('active-sm');
        }
    });
    $('#close-sidebar').on('click', function (e) {

        e.preventDefault();
        $('nav.side-navbar').addClass('shrink');
        $('.page').addClass('active');
    });

    // ------------------------------------------------------- //
    // Header Dropdown / Right Sidebar
    // ------------------------------------------------------ //
    $(document).on('click', 'header .dropdown-item', function () {
        $('.right-sidebar.open').removeClass('open');
        $(this).siblings('.right-sidebar').addClass('open');
        $('.page,.pos-page').on('click', function () {
            $('.right-sidebar.open').removeClass('open');
        })
    });


    // ------------------------------------------------------- //
    // Login  form validation
    // ------------------------------------------------------ //
    $('#login-form').validate({
        messages: {
            loginUsername: 'please enter your username',
            loginPassword: 'please enter your password'
        }
    });

    // ------------------------------------------------------- //
    // Register form validation
    // ------------------------------------------------------ //
    $('#register-form').validate({
        messages: {
            registerUsername: 'please enter your first name',
            registerEmail: 'please enter a vaild Email Address',
            registerPassword: 'please enter your password'
        }
    });

    // ------------------------------------------------------- //
    // Jquery Progress Circle
    // ------------------------------------------------------ //
    var progress_circle = $("#progress-circle").gmpc({
        color: brandPrimary,
        line_width: 5,
        percent: 80
    });
    progress_circle.gmpc('animate', 80, 3000);

    // ------------------------------------------------------- //
    // External links to new window
    // ------------------------------------------------------ //

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $('.periods li').on('click', function () {
        $('.decade-select').addClass('hidden');
        $('.month-select').removeClass('hidden');
        $('.year-select').removeClass('hidden');
    });

    $('.periods li:nth-child(5)').on('click', function () {
        $('.decade-select').removeClass('hidden');
        $('.month-select').addClass('hidden');
        $('.year-select').addClass('hidden');
    });

    $('.periods li:nth-child(3), .periods li:nth-child(4)').on('click', function () {
        $('.decade-select').addClass('hidden');
        $('.month-select').addClass('hidden');
        $('.year-select').removeClass('hidden');
    });

});
