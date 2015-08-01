$(document).ready(function(){
  
  	// HOMEPAGE
  	if( $('body').attr("id")=="homepage" ){
  		
  		console.log("Homepage");
		
		var template = _.template( $('#nav-template').html() );
		var data = {
			'nav' : nav
		}
		$('ul#nav').html( template(data) );

	// DIRECTORY
  	} else if ( $('body').attr('id')=="directory" ) {
  		
  		var cat = dir[getURI()];		

		var template = _.template( $('#nav-template').html() );
		var data = { 'nav' : nav, 'curr' : getURI() };
		$('ul#topnav').append( template(data) );

		$('#directory h1').html( cat.name );

		var len = dir[getURI()].works.length;
		var cols = 0;
		var rows = 0;

		if (len < 5) {
			cols = 1; rows = len;			
		} else if (len < 10) {
			cols = 2; rows = Math.ceil(len/cols);
		} else {
			cols = 3; rows = Math.ceil(len/cols);
		}

		var list = dir[getURI()].works;

		var works_template = _.template( $('#works-template').html() );
		var works_data = {
			'list' : list,
			'lib'  : lib, 
			'name' : dir[getURI()].name,
			'curr' : getURI(),
			'cols' : cols,
			'rows' : rows
		};

		$('.works').append( works_template(works_data) );


	// WORK PAGE
  	} else if ( $('body').attr('id')=="work" ) {
  		
  		console.log("Work Page");

  		console.log(dir);

  		work_template = _.template( $('#work-template').html() );
  		work_data = givenTitleFindWork( getURI() );

  		// console.log(dir[work_data.category].works);

  		$('.content').html( work_template(work_data));
		$('.materialboxed').materialbox();

		nav_template = _.template($('#nav-item-template').html());
		nav_data = nav;
  		$('ul#topnav').append( nav_template(nav_data));

  		$(document).keyup(function(e) {
		  if(e.keyCode == 37) { // left
		  	console.log('clicking back');
		  	window.location = $(".arrow-back").attr('href');
		  }
		  else if(e.keyCode == 39) { // right
		  	console.log('clicking forward');
		  	window.location = $(".arrow-forward").attr('href');
		  }
		});


  	}

	

});{}


function givenTitleFindWork(title){
	thisWork = lib[title];
	thisWork.id = title;
	thisWork.category = givenTitleFindCategory(title);

	var arrows = givenTitleFindLinks(title, thisWork.category);
	thisWork.next = arrows.next;
	thisWork.prev = arrows.prev;

	console.log(thisWork);

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
		prev = "directory.html?category="+category;
	} else {
		prev = "work.html?id=" + dir[category].works[index-1];
	}

	if(index == length-1){
		next = "directory.html?category="+ord[_.indexOf(ord, category)+1];
	} else {
		next = "work.html?id=" + dir[category].works[index+1];
	}

	return {
		'next':next,
		'prev':prev
	};
}

function getURI(){
	if((window.location.href).indexOf('?') != -1) {
	    var queryString = (window.location.href).substr((window.location.href).indexOf('?') + 1); 
	    // console.log(queryString);
	    // "queryString" will now contain kerdesPost=fdasdas%20ad%20asd%20ad%20asdas

	    var value = (queryString.split('='))[1];
	    // console.log(value);

	    // "value" will now contain fdasdas%20ad%20asd%20ad%20asdas

	    value = decodeURIComponent(value);
	    // console.log(value);

	    // "value" will now contain fdasdas ad asd ad asdas (unescaped value)
	    return value;
	}
	return null;
}



