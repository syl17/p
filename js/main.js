$(function(){
    $('#fullpage').fullpage({
		//options here
        anchors: ["firstPage","secondPage","3rdPage","4thPage","5thPage"],
        menu: '#rightnav',
		autoScrolling: true,
		scrollHorizontally: true,
        // navigation: true,
        // navigationposition: 'right',
    });
});