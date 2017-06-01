$(document).ready(function() {
    
    // Hidden menu
    $( '.btn-menu, .hidden-menu ul a' ).click( function() {
        if ( $( '.hidden-menu' ).is( ':hidden' ) ) {
            $( '.hidden-menu' ).show();
        } else {
            $( '.hidden-menu' ).hide();
        }
    });
    
    // Page scroll
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset:30
    });
    
    // Slider
    $("#owl-demo").owlCarousel({
        autoPlay: 10000, //Set AutoPlay to 3 seconds
        items : 1,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });

    /*// gallery
    $(function() {
                Grid.init();
            });*/

    // Tabs
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'tabs'
    });
    
});