$(document).ready(function(){
  
	switch( $('body').attr("id") ) {
		case "homepage":
			drawHomepage();
			break;
		case "directory":
			drawDirectory();
			break;
		case "work":
			drawWork();
			break;
		default:
			console.log('Nothing drawn.');
			break;
	}

});


function drawHomepage(){	
	var template = _.template( $('#nav-template').html() );
	var data = { 'nav' : nav };
	$('ul.nav').html( template(data) );
	$('ul#topnav').html( template(data) );
	$('p#bio').html(bio);
}

function drawDirectory(){
	var works_template = _.template( $('#directory-template').html() );
	var works_data = {
		'ord'  : ord,
		'dir'  : dir,
		'lib'  : lib, 
		'curr' : getURI()
	};
	$('.works').append( works_template(works_data) );
}


function drawWork(){


	var work_data = givenTitleFindWork( getURI() );
	var work = {'category':work_data.category, 'id':work_data.id};
	// console.log(work_data);

	$('.content'      ).html( _.template( $( '#work-template'        ).html( ) ) ( work_data ) );
	$('.plaque'       ).html( _.template( $( '#plaque-template'      ).html( ) ) ( work_data ) );
	$('.arrow-back'   ).html( _.template( $( '#left-arrow-template'  ).html( ) ) ( { 'link' : work_data.prev } ) );
	$('.arrow-forward').html( _.template( $( '#right-arrow-template' ).html( ) ) ( { 'link' : work_data.next } ) );
	$('.arrow-home'   ).html( _.template( $( '#home-arrow-template'  ).html( ) ) ( { 'link' : 'index.html'} ) );
	$('.arrow-cat'    ).html( _.template( $( '#cat-arrow-template'   ).html( ) ) ( { 'link' : 'directory.html?c='+work_data.category, 'cat' : dir[work_data.category].name  } ) );
	
	if ( _.isUndefined( work_data.layout ) ) {
		$(' .left-rec').remove();
		$('.right-rec').remove();

		$('.image-rec').append( _.template( $( '#main-image-template'   ).html( ) ) ( work ) );
	} else if ( work_data.layout == 'left-right' ) {
		$('.image-rec').remove();

		$('.two-image-rec').addClass('left-right');
		$('.two-image-rec').attr('colspan', '3');

		$(' .left-rec').append( _.template( $( ' #left-image-template'  ).html( ) ) ( work ) );
		$('.right-rec').append( _.template( $( '#right-image-template'  ).html( ) ) ( work ) );
	} else if ( work_data.layout == 'top-bottom' ) {
		$(' .left-rec').remove();
		$('.right-rec').remove();

		$('.image-rec').addClass('top-bottom');
		$('.image-rec').attr('colspan', '3');

		$('.image-rec').append( _.template( $( '#top-image-template'    ).html( ) ) ( work ) );
		$('.image-rec').append( _.template( $( '#bottom-image-template' ).html( ) ) ( work ) );
	}

	if ( work_data.details==0 ){
		$('.small-details-row').remove();
	} else if ( work_data.details == 1 ) {
		$('.detail-rec').append( _.template( $( '#detail-template' ).html( ) ) ( work ) );
	} else if ( work_data.details == 2 ) {
		$('.detail-rec').append( _.template( $( '#details-template' ).html( ) ) ( work ) );
	}


	$('.materialboxed').materialbox();

	$(document).keyup(function(e) {
	  if(e.keyCode == 37) { // left
	  	window.location = $(".arrow-back a").attr('href');
	  }
	  else if(e.keyCode == 39) { // right
	  	window.location = $(".arrow-forward a").attr('href');
	  }
	});

}

function givenTitleFindWork(title){
	thisWork = lib[title];
	thisWork.id = title;
	thisWork.category = givenTitleFindCategory(title);

	var arrows = givenTitleFindLinks(title, thisWork.category);
	thisWork.next = arrows.next;
	thisWork.prev = arrows.prev;

	return thisWork;
}

function givenTitleFindCategory(title){
	key = null;
	_.each(dir, function(d_obj, d_key){
		_.each(d_obj.works, function(w_obj){
			if (w_obj == title){
				key = d_key;
			}
		});
	});
	return key;
}

function givenTitleFindLinks(title, category){
	var next = '';
	var prev = '';

	var index = _.indexOf(dir[category].works, title);
	var length = dir[category].works.length;
	// console.log('index' + index + 'length' + length);

	if(index == 0){
		prev = "directory.html?c="+category;
	} else {
		prev = "work.html?id=" + dir[category].works[index-1];
	}

	if(index == length-1){
		next = "directory.html?c="+ord[_.indexOf(ord, category)+1];
	} else {
		next = "work.html?id=" + dir[category].works[index+1];
	}

	return { 'next':next, 'prev':prev };
}

function getURI(){
	if((window.location.href).indexOf('?') != -1) {
	    var queryString = (window.location.href).substr((window.location.href).indexOf('?') + 1); 
	    // "queryString" will now contain kerdesPost=fdasdas%20ad%20asd%20ad%20asdas

	    var value = (queryString.split('='))[1];
	    // "value" will now contain fdasdas%20ad%20asd%20ad%20asdas

	    value = decodeURIComponent(value);
	    // "value" will now contain fdasdas ad asd ad asdas (unescaped value)

	    return value;
	} else {
		return null;		
	}
}



