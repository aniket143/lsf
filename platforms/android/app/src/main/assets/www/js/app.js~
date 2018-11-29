// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.gpsnet.net', // App bundle ID
  name: 'LSF', // App name
  theme: 'auto', // Automatic theme detection
  init: true,
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

var notificationFull = app.notification.create({
  icon: '<i class="icon demo-icon">*</i>',
  title: 'Alert',
  titleRightText: 'now',
  subtitle: 'No Network',
  text: 'Internet Connection Lost',
  closeTimeout: 3000,
});

function Offline() {
	
	  notificationFull.open();


}

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#save_photo', {
  url: '/save_photo/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

console.log('userid'+localStorage.userid);
//console.log('userid-'+localStorage.userid);
if ((localStorage.userid == '') || (localStorage.userid == undefined) || (localStorage.userid == ' ') ) {
console.log('entry');
	 app.router.navigate('/', {
  										reloadCurrent: true,
  										ignoreCache: true,
  										}); 
	
}
else {
console.log('entry2');
     app.router.navigate('/home/', {
  										reloadCurrent: true,
  										ignoreCache: true,
										}); 

}

/*document.addEventListener("deviceready", onDeviceReady, false);
var fileTransfer;
var pdfreder;
	function onDeviceReady() {
		
				console.log(navigator.device.capture);
		     fileTransfer = new FileTransfer();
		     pdfreder = new widows.PDFViewer();
			
			
			   // pendingcaptureresult is fired if the capture call is successful
    document.addEventListener('pendingcaptureresult', function(mediaFiles) {
        // Do something with result
        console.log('pendingcapture'+mediaFiles);
    });

    // pendingcaptureerror is fired if the capture call is unsuccessful
    document.addEventListener('pendingcaptureerror', function(error) {
        // Handle error case
                console.log('pendingcapturerror'+error);
    });
	}*/

  // Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () 	{
	
  var email = $$('#my-login-screen [name="email"]').val();
  var fpass = $$('#my-login-screen [name="password"]').val();
  
  if (email=='') {
  $$('#message1').html("Please Enter Email");
  }
  
  if (fpass=='') {
  $$('#message2').html("Please Enter Password");
  }
  
  if (email !== '' && fpass !== '') {
 app.request.postJSON('http://139.59.36.238/lsf/chklogin.php', { email:email, pass:fpass }, function (data) {
      //$$('.articles').html(data);
      console.log('afterlogin'+data[3])
      //app.dialog.alert(data[1]);
		//localStorage.removeItem(userid);       
       
      if (data[0] == "Success") {
      	
      	    //console.log('Load was performed-Success');
      	    localStorage.userid = data[1];
      	    localStorage.enc_id = data[2];
      	    localStorage.username = data[3];
      		
             app.loginScreen.close('#my-login-screen');
				 app.router.navigate('/home/', {
  										reloadCurrent: true,
  										ignoreCache: true,
										});               
                
          } else {
          			//app.dialog.alert(app.router.currentRoute.url);
                //app.router.refreshPage('#my-login-screen');
                app.dialog.alert("Invalid Login...");
                $$('#message1').hide();
                $$('#message2').hide();
                $$('#email').val('');
                $$('#passwd').val('');
                //app.router.refreshPage('#my-login-screen');
              /* app.router.navigate('#my-login-screen', {
  						reloadCurrent: true,
 						 ignoreCache: true,
							});*/
                }
            
      });
      
      }

	     // app.initImagesLazyLoad('.page[data-page="about"]');
	
}); 

$$('.signup-button-first').on('click', function () 	{
	
	console.log('signup');						
				 app.router.navigate('/signup/', {
  										reloadCurrent: true,
  										ignoreCache: true,
										});                
}); 
$$('.signup-button').on('click', function () 	{
	
							
             app.loginScreen.close('#my-login-screen');
				 app.router.navigate('/signup/', {
  										reloadCurrent: true,
  										ignoreCache: true,
										});                
}); 
$$('.logout').on('click', function () 	{
				
				 localStorage.userid = '';
      	    localStorage.enc_id = '';	
      	    localStorage.username = '';	
             app.router.navigate('/', {
  										reloadCurrent: true,
  										ignoreCache: true,
										});  
				               
}); 

$$(document).on('page:init', '.page[data-name="showpdf"]', function (e) {
	
	
		$$("#pdfview").on("click",function(e){
			
			var ref = cordova.InAppBrowser.open('https://docs.google.com/viewer?url=139.59.36.238/lsf/ELDVPS.pdf', '_blank','location=no','hidden=yes');
// some time later...
       app.preloader.show();
			ref.show();

    });
    
  
    
    
	});
	

$$(document).on('page:init', '.page[data-name="signup"]', function (e) {
	
	$$('.register-button').on('click', function () 	{
		
		
  var mailid = $$('#mailid').val();
  var password = $$('#password').val();
  var name = $$('#name').val();
  var contactno = $$('#contactno').val();
  var birthdate = $$('#birthdate').val();
  var gender = $$('#gender').val();
 
  var result=isEmail(mailid);
  var respass=isPassword(password);
  
if (result==true) {
	
	if (respass==true) {
  	
app.request.postJSON('http://139.59.36.238/lsf/user_registration.php', {mailid:mailid,password:password,name:name,contactno:contactno,birthdate:birthdate,gender:gender}, function (data) {
	
console.log(data);

	if (data == "Success") {
		
	app.dialog.alert('User Registration Done Successfully...', function () {
		
   app.loginScreen.open('#my-login-screen');
   
  });
		
	}
	
	 else if(data == "fail") {
	 	app.dialog.alert("This Email is Already Exist...Please Enter another");
	 $$('#mailid').val(' ');
	 }
	  else if(data == "failed") {
	 	app.dialog.alert("This mobile number is Already Exist...Please Enter another");
	 $$('#contactno').val(' ');
	 }
	 
	
	 										
		}); 
		
	}
	
  else {
    	app.dialog.alert("Please Enter correct Password.....");
  }
}  
  
else {
    	app.dialog.alert("Please Enter correct Email.....");
  }
  
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isPassword(pass) {
    var regex = /^(?=.*?[0-9])|(?=.*?[#?!@$%^&*-]).{8,}$/;
    return regex.test(pass);
}



}); 

});

$$('#my-login').on('click', function () 	{
	
 app.loginScreen.open('#my-login-screen');
	
}); 


$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized

         cameraTakePicture();
     	var userno = localStorage.userid;   	       	
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
	 var imageloc;
	 var logitute;
	 var latitute;
	 var imageData;
	 var imagepath;
  
    function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      //destinationType: Camera.DestinationType.DATA_URL,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit : false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false   
      
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('myImage'); 
            image.style.display = 'block';
      image.src =imageData; 
				
            //call gps function
            
      navigator.geolocation.getCurrentPosition(onSuccess, onError); 

        function onSuccess(position) {
        	logitute = position.coords.longitude;
        	latitute = position.coords.latitude;
        var element = document.getElementById('geolocation');
        element.innerHTML = '<span id="lat" name="lat">'           + position.coords.latitude              + '</span><br />' +
                            '<span id="lon" name="lon">'          + position.coords.longitude             + '</span><br />' +
                            '<span id="acc" name="acc">Accuracy: ' + position.coords.accuracy              + '</span><br />' +
                            '<span id="speed" name="speed">Speed: '+ position.coords.speed                 + '</span><br />' +
                            '<span id="tim" name="tim">'+ new Date(position.timestamp)          + '</span><br />';
    }

    // onError Callback receives a [PositionError](PositionError/positionError.html) object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

   
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}

     $$('#savedata').on('click', function () {
     	
     	var img = document.getElementById('myImage');
        var imageURI = img.src;
        if (!imageURI || (img.style.display == "none")) {
            document.getElementById('camera_status').innerHTML = "Take picture  from Camera first.";
            return;
        }
        var imagename=imageURI.substr(imageURI.lastIndexOf('/')+1);
        //alert(imageURI);
//save data in local storage
var db = window.sqlitePlugin.openDatabase({
    name: 'lsf.db',
    location: 'default'
  });
 db.transaction(function(tx) {
 	   
 	 //tx.executeSql('DROP TABLE  `attendance`');
    tx.executeSql('CREATE TABLE IF NOT EXISTS attendance (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER,log float not null,lat float not null,photo text,sqltime DATETIME DEFAULT CURRENT_TIMESTAMP )');
	 tx.executeSql("SELECT DATETIME(sqltime, 'localtime') FROM attendance");    
    var s="INSERT OR IGNORE INTO attendance(user_id,log,lat,photo,sqltime) VALUES("+userno+","+logitute+","+latitute+",'"+imageURI+"',datetime('now','localtime'))"; //
		tx.executeSql(s);
    //alert('table created');
  }, function(error) {
    //console.log('Transaction ERROR: ' + error.message);
    alert('Transaction ERROR: ' + error.message);
  }, function() {
    //console.log('Populated database OK');
    alert('Populated database OK');
  });
  
  app.router.navigate('/show_attendance/', {
  										reloadCurrent: true,
  										ignoreCache: true,
										}); 



});

     $$('#Uploadimg').on('click', function () {
    	  //alert("function call");
        console.log("function call");

        uploadPicture();
    });
    function uploadPicture() {
    	
    	// Get URI of picture to upload
        var img = document.getElementById('myImage');
        var imageURI = img.src;
        if (!imageURI || (img.style.display == "none")) {
            document.getElementById('camera_status').innerHTML = "Take picture  from Camera first.";
            return;
        }
        
        // Verify server has been entered
        //server = document.getElementById('serverUrl').value;
       var server = "http://sbitinfo.in/mysms/yaju_upload.php";
        if (server) {
        	
            // Specify transfer options
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            
            var headers={'headerParam':'headerValue'};
             options.headers = headers; 

            // var params = new Object();
             var params = {};
             params.latitude = document.getElementById('lat').innerHTML;
             params.longitude = document.getElementById('lon').innerHTML;
             params.comments = document.getElementById('input_text').value;
             params.userid = "A0004";
             
            options.params = params;
            options.chunkedMode = false;
            
            // Transfer picture to server
            var ft = new FileTransfer();
            ft.onprogress = function(progressEvent) {
              if (progressEvent.lengthComputable) {
                 loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
                } else {
                    loadingStatus.increment();
                 }
              };            
            document.getElementById('camera_status').innerHTML= "Please Wait......."
            ft.upload(imageURI, server, win, fail, options ); 
        }
    }
    
    
    function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    document.getElementById('camera_status').innerHTML = "Upload successful: "+r.bytesSent+" bytes uploaded."; 
    //document.getElementById('Uploadimg').href="catlog";
    //document.getElementById('Uploadimg').value="back";
               	
     }
     
     function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
   document.getElementById('camera_status').innerHTML = "Upload failed: Code = "+error.code;            	
      }
    
  
});


$$(document).on('page:init', '.page[data-name="show_attendance"]', function (e) {
		//var allattendanceTemplate=$$("#allattendancetemplate").html();
	//var compiledallattendanceTemplate=Template7.compile(allattendanceTemplate);
	

var db = window.sqlitePlugin.openDatabase({
    name: 'lsf.db',
    location: 'default'
  },function (db) {

    // Here, you might create or open the table.

}, function (error) {
    alert('Open database ERROR: ' + JSON.stringify(error));
});
//count record

 db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM attendance', [], function(tx, rs) {
      //alert('Record count (expected to be 2): ' + rs.rows.item(0).log + 'latitude-'+rs.rows.item(0).lat +'userid-'+rs.rows.item(0).user_id);
   //   document.getElementById("att_data").innerHTML="<p>"+rs.rows.item(0).log+"<br>"+rs.rows.item(0).lat+"<br>"+rs.rows.count()+"<br>"+rs.rows.item(0).sqltime+"</p>";
     // var len = rs.rows.length,i;
      	$$("#att_data").html(compiledallattendanceTemplate(rs));

   /* for (i = 0; i < len; i++){
          document.getElementById("att_data").insertAdjacentHTML('beforeend','<div class="card"><div class="card-content">Attendance DateTime - '+ rs.rows.item(i).sqltime +'</div>  <div class="card-footer"><button  id="btn" name="btn" onclick="test();" data-id="" class="btnt button button-round button-fill">Upload</button></div></div>');
         }
  */
      //document.getElementById("mylocation").src=rs.rows.item(0).photo;
    }, function(tx, error) {
      //console.log('SELECT error: ' + error.message);
      alert('SELECT error: ' + error.message);
    });
  });
  

  $$('.btnt').on('click', function (e) {
	alert(e);
    console.log(e);
   // app.dialog.alert(e);
  });
  
  function test(){
	alert('clear');  
  }
  
  });
  
  
$$(document).on('page:init', '.page[data-name="home"]', function (e) {
	//console.log('load home page'+localStorage.username);
	//console.log(e);
		var alltutorialTemplate=$$("#alltutorialtemplate").html();
	var compiledalltutorialTemplate=Template7.compile(alltutorialTemplate);
	
	app.request.postJSON('http://localhost/lsfapp/www/load_home.php',{testdata:"testdata"}, function (data) {
	
	//console.log(data);
	$$("#showalltutorial").html(compiledalltutorialTemplate(data));
		
});
	
	$$('#username').text(localStorage.username);
});

$$(document).on('page:init', '.page[data-name="listening_video"]', function (e) {
	//console.log('load home page'+localStorage.username);
	console.log(e);
		var alllistnvideoTemplate=$$("#listingvideo").html();
	var compiledalllistnvideoTemplate=Template7.compile(alllistnvideoTemplate);
	
	app.request.postJSON('http://localhost/lsfapp/www/load_videopage_static.php',{testdata:"testdata"}, function (data) {
	
	console.log(data);
	$$("#listnvideo").html(compiledalllistnvideoTemplate(data));
		
});
	
	//$$('#username').text(localStorage.username);
});

$$(document).on('page:init', '.page[data-name="videopage"]', function (e) {
	//console.log('load home page'+localStorage.username);
	console.log(e);
	console.log("t-id:"+e.detail.route.query.t_id);
	var id = e.detail.route.query.t_id;
		var allyoutoubvideoTemplate=$$("#allyoutoubvideotemplate").html();
	var compiledallyoutoubvideoTemplate=Template7.compile(allyoutoubvideoTemplate);
	
	app.request.postJSON('http://localhost/lsfapp/www/load_videopage.php',{pid:id}, function (data) {
	
	console.log(data);
	$$("#videolink").html(compiledallyoutoubvideoTemplate(data));
		
});
	
	$$('#username').text(localStorage.username);
});

$$(document).on('page:init', '.page[data-name="listenvideo1"]', function (e) {
	var id = e.detail.route.query.video_link;
	$$("#urlvideo").attr('src',id);
	
});

$$(document).on('page:init', '.page[data-name="showpdf"]', function (e) {
	//var id = e.detail.route.query.video_link;
	//$$("#urlvideo").attr('src',id);
	
});


$$(document).on('page:init', '.page[data-name="voicecapture"]', function (e) {
	console.log(e);
	console.log("t-id:"+e.detail.route.query.youtoublink);
	
	var youtoublink = e.detail.route.query.youtoublink;
	var id = e.detail.route.query.t_id;
		var allvoicecaptureTemplate=$$("#voicecapturetemplate").html();
	var compiledallvoicecaptureTemplate=Template7.compile(allvoicecaptureTemplate);
	
	app.request.postJSON('http://localhost/lsfapp/www/load_voicedata.php',{t_id:id,youtoublink:youtoublink}, function (data) {
	
	//console.log(data);
	$$("#voicecapture").html(compiledallvoicecaptureTemplate(data));
		
});
	
	
	
	
	

console.log('voice-page initialise2');
$$('#play_voice').hide();
    var src = "myrecording.mp3";
var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );
    
$$('#start_voice').on('click', function (e) {
		            // Record audio
      mediaRec.startRecord();
      $$('#start_voice').hide(); 
});

$$('#stop_voice').on('click', function (e) {
	            mediaRec.stopRecord();
	            $$('#play_voice').show();
});

$$('#play_voice').on('click', function (e) {
            mediaRec.play();
});	
	
});

$$(document).on('page:init', '.page[data-name="voicecapture_headandshow"]', function (e) {


console.log('voice-page initialise2');
$$('#play_voice').hide();
    var src = "myrecording1.mp3";
var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );
    
$$('#start_voice').on('click', function (e) {
		            // Record audio
      mediaRec.startRecord();
      $$('#start_voice').hide(); 
});

$$('#stop_voice').on('click', function (e) {
	            mediaRec.stopRecord();
	            $$('#play_voice').show();
});

$$('#play_voice').on('click', function (e) {
            mediaRec.play();
});	
	
});

$$(document).on('page:init', '.page[data-name="voicecapture_colors1"]', function (e) {

console.log('voice-page initialise2');
$$('#play_voice').hide();
    var src = "myrecording2.mp3";
var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );
    
$$('#start_voice').on('click', function (e) {
		            // Record audio
      mediaRec.startRecord();
      $$('#start_voice').hide(); 
});

$$('#stop_voice').on('click', function (e) {
	            mediaRec.stopRecord();
	            $$('#play_voice').show();
});

$$('#play_voice').on('click', function (e) {
            mediaRec.play();
});	
	
});

$$(document).on('page:init', '.page[data-name="voicecapture_colors2"]', function (e) {

console.log('voice-page initialise2');
$$('#play_voice').hide();
    var src = "myrecording3.mp3";
var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );
    
$$('#start_voice').on('click', function (e) {
		            // Record audio
      mediaRec.startRecord();
      $$('#start_voice').hide(); 
});

$$('#stop_voice').on('click', function (e) {
	            mediaRec.stopRecord();
	            $$('#play_voice').show();
});

$$('#play_voice').on('click', function (e) {
            mediaRec.play();
});	
	
});
$$(document).on('page:init', '.page[data-name="voicecapture_headandshow"]', function (e) {

console.log('voice-page initialise2');
$$('#play_voice').hide();
    var src = "myrecording4.mp3";
var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );
    
$$('#start_voice').on('click', function (e) {
		            // Record audio
      mediaRec.startRecord();
      $$('#start_voice').hide(); 
});

$$('#stop_voice').on('click', function (e) {
	            mediaRec.stopRecord();
	            $$('#play_voice').show();
});

$$('#play_voice').on('click', function (e) {
            mediaRec.play();
});	
	
});
$$(document).on('page:init', '.page[data-name="voicecapture_stringofaction"]', function (e) {

console.log('voice-page initialise2');
$$('#play_voice').hide();
    var src = "myrecording5.mp3";
var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );
    
$$('#start_voice').on('click', function (e) {
		            // Record audio
      mediaRec.startRecord();
      $$('#start_voice').hide(); 
});

$$('#stop_voice').on('click', function (e) {
	            mediaRec.stopRecord();
	            $$('#play_voice').show();
});

$$('#play_voice').on('click', function (e) {
            mediaRec.play();
});	
	
});

$$(document).on('page:init', '.page[data-name="voicecapture_spellcheck"]', function (e) {

console.log('voice-page initialise2');
$$('#play_voice').hide();
    var src = "myrecording6.mp3";
var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );
    
$$('#start_voice').on('click', function (e) {
		            // Record audio
      mediaRec.startRecord();
      $$('#start_voice').hide(); 
});

$$('#stop_voice').on('click', function (e) {
	            mediaRec.stopRecord();
	            $$('#play_voice').show();
});

$$('#play_voice').on('click', function (e) {
            mediaRec.play();
});	
	
});
/*$$(document).on('page:init', '.page[data-name="memory"]', function (e) {

$$('#uploadtext').on('click', function (e) {
	
	  var title = $$('#input-header').val();
	  var details = $$('#input_text').val();
	  app.dialog.alert('Username-ani'+ title + 'deatils'+ details);
	  
	  app.request.get('http://sbitinfo.in/mysms/memory.php', { tit:title, det_text:details }, function (data) {
      //$$('.articles').html(data);
      app.dialog.alert(data);
      console.log('Load was performed');
      });
	  
});
});*/

/* $$(document).on('page:init', '.page[data-name="save_photo"]', function (e) {
	
	  app.request.get('http://sbitinfo.in/mysms/show_data.php', { }, function (data) {
      $$('#imag').html(data);
      //app.dialog.alert(data);
      console.log('Load was performed');
      });	 
	

});*/
/*$$(document).on('page:init', '.page[data-name="uploadimg"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized

         cameraTakePicture();
     	       	       	
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

      function onDeviceReady() { 
        pictureSource=navigator.camera.PictureSourceType.PHOTOLIBRARY;
        destinationType=navigator.camera.DestinationType.FILE_URI;
        quality: 50;
         
               }
    function cameraTakePicture() { 
 navigator.camera.getPicture(onSuccess, onFail, { 
                    quality: 50,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY, 
                    allowEdit: true,
                    destinationType: Camera.DestinationType.FILE_URI
                });    
    
   function onSuccess(imageURI) { 
      var image = document.getElementById('myImage1'); 
            image.style.display = 'block';
     // image.src = "data:image/jpeg;base64," + imageURI; 
      
           image.src = imageURI;

            //call gps function
            
      navigator.geolocation.getCurrentPosition(onSuccess, onError); 

        function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = '<span id="lat" name="lat">'           + position.coords.latitude              + '</span><br />' +
                            '<span id="lon" name="lon">'          + position.coords.longitude             + '</span><br />' +
                            '<span id="acc" name="acc">Accuracy: ' + position.coords.accuracy              + '</span><br />' +
                            '<span id="speed" name="speed">Speed: '+ position.coords.speed                 + '</span><br />' +
                            '<span id="tim" name="tim">'+ new Date(position.timestamp)          + '</span><br />';
    }

    // onError Callback receives a [PositionError](PositionError/positionError.html) object
    //
    function onError(error) {
        app.dialog.alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

   
   }  
   
   function onFail(message) { 
      app.dialog.alert('Failed because: ' + message); 
   } 
}

     $$('#Uploadimg1').on('click', function () {
    	  //app.dialog.alert("function call");
        console.log("function call");

        uploadPicture();
    });
    function uploadPicture() {
    	
    	// Get URI of picture to upload
        var img = document.getElementById('myImage1');
        var imageURI = img.src;
        if (!imageURI || (img.style.display == "none")) {
            document.getElementById('camera_status').innerHTML = "Please Select image first";
            return;
        }
        
        // Verify server has been entered
        //server = document.getElementById('serverUrl').value;
       var server = "http://sbitinfo.in/mysms/yaju_upload.php";
        if (server) {
        	
            // Specify transfer options
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            
            var headers={'headerParam':'headerValue'};
             options.headers = headers; 

            // var params = new Object();
             var params = {};
             params.latitude = document.getElementById('lat').innerHTML;
             params.longitude = document.getElementById('lon').innerHTML;
             params.comments = document.getElementById('input_text').value;
             params.userid = "A0004";
             
            options.params = params;
            options.chunkedMode = false;
            
            // Transfer picture to server
            var ft = new FileTransfer();
            ft.onprogress = function(progressEvent) {
              if (progressEvent.lengthComputable) {
                 loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
                } else {
                    loadingStatus.increment();
                 }
              };            
            document.getElementById('camera_status').innerHTML= "Please Wait......."
            ft.upload(imageURI, server, win, fail, options ); 
        }
    }
    
    
    function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    document.getElementById('camera_status').innerHTML = "Upload successful: "+r.bytesSent+" bytes uploaded."; 
    //document.getElementById('Uploadimg').href="catlog";
    //document.getElementById('Uploadimg').value="back";
               	
     }
     
     function fail(error) {
    app.dialog.alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
   document.getElementById('camera_status').innerHTML = "Upload failed: Code = "+error.code;            	
      }
    
  
}); */

$$(document).on('page:init', '.page[data-name="self_prac"]', function (e) {
	
	
			
			console.log(e);
	console.log("t-id==:"+e.detail.route.query.t_id);
	
	//var youtoublink = e.detail.route.query;
	var id = e.detail.route.query.t_id;
		var allselfpracTemplate=$$("#selfpracdatatemplate").html();
	var compiledallselfpracTemplate=Template7.compile(allselfpracTemplate);
	
	app.request.postJSON('http://localhost/lsfapp/www/load_selfprac.php',{t_id:id}, function (data) {
	
	console.log(data);
	$$("#qtyarea").html(compiledallselfpracTemplate(data));
		
});
	//var userid=localStorage.userid;
	
	 $$('.selfprac').on('click', function (e) {

	 	var age=$$('input[name=age1]:checked').val();
	 	console.log("age"+age);
	 	
	 	var counte= $$('input[name=cout]').length; // no of entry
	 	var test_arr = $$("input[name=members]").length; //no of textbox
	 	var test_arr1 = $$("input[name=members]"); //no of textbox
		var checkb_arr = counte-test_arr;	
	 	//console.log("chkbk"+checkb_arr);
	 	//console.log("test_arr"+test_arr);
	 	
                                 var textbx = [];
                                 var chkbox = [];
                                 var q_idbox = [];
                                 var q_chkbox = [];
                                 var t_idbox = [];
                                 var t_chkbox = [];
                                 
                                 for(var i=0;i<test_arr1.length;i++) {
                                 		q_idbox.push($$(test_arr1[i]).data('qid'));
                                 		t_idbox.push($$(test_arr1[i]).data('tid'));
                                 		textbx.push($$(test_arr1[i]).val());
    												//console.log('val-'+$$(test_arr1[i]).val());
																						}
																							console.log(q_idbox);
																						
											for(var ii=1;ii<=checkb_arr;ii++) {
													 	var age=$$('input[name=age'+ii+']:checked').val();
													 	var q_chk=$$('input[name=age'+ii+']').data('qid');
													 	var t_chk=$$('input[name=age'+ii+']').data('tid');
													 	q_chkbox.push(q_chk);
													 	chkbox.push(age);
													 	t_chkbox.push(t_chk);
    												//console.log('chkbx-'+age);
																						}
																			   console.log(chkbox);
																			   console.log(q_chkbox);
	 	//var mname = $$('#mname').val();
	 	//var mname = $$('input[name=members]').val();
	 	//console.log("textb"+mname);
	 	//console.log("mname"+mname);
	 	
		var userid = localStorage.userid;
		//console.log("birthdate"+birthdate);
		
		
		app.request.postJSON('http://localhost/lsfapp/www/save_selfprac.php',{textbx:textbx,chkbox:chkbox,q_idbox:q_idbox,q_chkbox:q_chkbox,counte:counte,t_idbox:t_idbox,t_chkbox:t_chkbox,userid:userid}, function (data) {
			
			
			//if (data="Success") {
		console.log('rece_data'+data);		
			 app.dialog.alert("self practice is submitted");
			//	 $$('#anssheet').html(data);
			//}
			
			});
	 	
	 	
	 	});
	
	});
	
	$$(document).on('page:init', '.page[data-name="self_prac_headandshow"]', function (e) {
		

	
	//var userid=localStorage.userid;
	
	 $$('.selfprac_head').on('click', function () {
	 	
	 	var bpart=$$('input[name=bpart]:checked').val();
	 	//console.log("fathername"+fathername);
	 	
	 	var sequence=$$('input[name=sequence]:checked').val();
	 	//console.log("mothername"+mothername);
	 	
	 	var sentence=$$('input[name=sentence]:checked').val();
	 	//console.log("brother"+brother);
	 	
	 	var userid = localStorage.userid;
		//console.log("birthdate"+birthdate);
		
		
		app.request.postJSON('http://139.59.36.238/lsf/save_selfprac_headandshow.php',{bpart:bpart,sequence:sequence,sentence:sentence,userid:userid}, function (data) {
			
			
			//if (data="Success") {
				
				 app.dialog.alert("self practice is submitted");
				 $$('#anssheet').html(data);
			//}
			
			});
	 	
	 	
	 	});
	
	});
	
	$$(document).on('page:init', '.page[data-name="self_prac_colors1"]', function (e) {
	
	//var userid=localStorage.userid;
	
	 $$('.selfprac_colors1').on('click', function () {
	 	
	 	var crayons=$$('input[name=crayons]:checked').val();
	 	//console.log("fathername"+fathername);
	 	
	 	var correct=$$('input[name=correct]:checked').val();
	 	//console.log("mothername"+mothername);
	 	
	 	var word=$$('input[name=word]:checked').val();
	 	//console.log("brother"+brother);
	 	 
	 	 	var color=$$('input[name=color]:checked').val();
	 	//console.log("brother"+brother);
	 	
	 		 	 	var favorite=$$('input[name=favorite]').val();
	 	//console.log("brother"+brother);
	 	
	 	var userid = localStorage.userid;
		//console.log("birthdate"+birthdate);
		
		
		app.request.postJSON('http://139.59.36.238/lsf/save_selfprac_colors1.php',{crayons:crayons,correct:correct,word:word,color:color,favorite:favorite,userid:userid}, function (data) {
			
			
			//if (data="Success") {
				
				 app.dialog.alert("self practice is submitted");
				 $$('#anssheet').html(data);
			//}
			
			});
	 	
	 	
	 	});
	
	});

$$(document).on('page:init', '.page[data-name="self_prac_colors2"]', function (e) {
	
	//var userid=localStorage.userid;
	
	 $$('.selfprac_colors2').on('click', function () {
	 	
	 	var brown=$$('input[name=brown]:checked').val();
	 	//console.log("fathername"+fathername);
	 	
	 	var shrubs=$$('input[name=shrubs]:checked').val();
	 	//console.log("mothername"+mothername);
	 	
	 	var river=$$('input[name=river]:checked').val();
	 	//console.log("brother"+brother);
	 	 
	 	 	var white=$$('input[name=white]:checked').val();
	 	//console.log("brother"+brother);
	 	
	 		 	 	//var favorite=$$('input[name=favorite]').val();
	 	//console.log("brother"+brother);
	 	
	 	var userid = localStorage.userid;
		//console.log("birthdate"+birthdate);
		
		
		app.request.postJSON('http://139.59.36.238/lsf/save_selfprac_colors2.php',{brown:brown,shrubs:shrubs,river:river,white:white,userid:userid}, function (data) {
			
			
			//if (data="Success") {
				
				 app.dialog.alert("self practice is submitted");
				 $$('#anssheet').html(data);
			//}
			
			});
	 	
	 	
	 	});
	
	});


$$(document).on('page:init', '.page[data-name="self_prac_stringofaction"]', function (e) {
	
	//var userid=localStorage.userid;
	
	 $$('.selfprac_stringofaction').on('click', function () {
	 	
	 	var father=$$('input[name=father]:checked').val();
	 	//console.log("fathername"+fathername);
	 	
	 	var Babalee=$$('input[name=Babalee]:checked').val();
	 	//console.log("mothername"+mothername);
	 	
	 	//var river=$$('input[name=river]:checked').val();
	 	//console.log("brother"+brother);
	 	 
	 	 //	var white=$$('input[name=white]:checked').val();
	 	//console.log("brother"+brother);
	 	
	 		 	 	//var favorite=$$('input[name=favorite]').val();
	 	//console.log("brother"+brother);
	 	
	 	var userid = localStorage.userid;
		//console.log("birthdate"+birthdate);
		
		
		app.request.postJSON('http://139.59.36.238/lsf/save_selfprac_stringofaction.php',{father:father,Babalee:Babalee,userid:userid}, function (data) {
			
			
			//if (data="Success") {
				
				 app.dialog.alert("self practice is submitted");
				 $$('#anssheet').html(data);
			//}
			
			});
	 	
	 	
	 	});
	
	});
	
	$$(document).on('page:init', '.page[data-name="feedback"]', function (e) {
		
		//var userid=localStorage.userid;
	//alert('click'+e);
	 $$('.feedback').on('click', function () {
	 	
	 	var option1=$$('input[name=demo-radio1]:checked').val();
	 	console.log("option1"+option1);
	 	
	 	var option2=$$('input[name=demo-radio2]:checked').val();
	 	//console.log("option2"+option2);
	 	
	 	var option3=$$('input[name=demo-radio3]:checked').val();
	   console.log("option3"+option3);
	 	
	 	var que1 = $$('#que1').val();
	 	console.log("que1"+que1);
	 	
		//var que2 = $$('#que2').val();
		//console.log("que2"+que2);
				var userid = localStorage.userid;
				
		app.request.postJSON('http://139.59.36.238/lsf/save_feedback.php',{option1:option1,option2:option2,option3:option3,que1:que1,userid:userid},function (data) {
			
			if (data="Success") {	
				 app.dialog.alert("Feedback is submitted");
				 //$$('#anssheet').html(data);
			}
			
			});
	 	
	 	
	 	});
	
	});
	
	$$(document).on('page:init', '.page[data-name="feedback_headandshow"]', function (e) {
		
		//var userid=localStorage.userid;
	
	 $$('.feedback_headandshow').on('click', function () {
	 	
	 	var teach=$$('input[name=teach]:checked').val();
	 	//console.log("option1"+option1);
	 	
	 	var poem=$$('input[name=poem]:checked').val();
	 	//console.log("option2"+option2);
	 	
	 	var topic=$$('input[name=topic]:checked').val();
	   //console.log("option3"+option3);
	 	
	 	//var que1 = $$('#que1').val();
	 	//console.log("que1"+que1);
	 	
		//var que2 = $$('#que2').val();
		//console.log("que2"+que2);
				var userid = localStorage.userid;
				
		app.request.postJSON('http://139.59.36.238/lsf/save_feedback_headandshow.php',{teach:teach,poem:poem,topic:topic,userid:userid},function (data) {
		
			if (data="Success") {	
				 app.dialog.alert("Feedback is submitted");
				 //$$('#anssheet').html(data);
			}
			
			});
	 	
	 	
	 	});
	
	});
	
		$$(document).on('page:init', '.page[data-name="feedback_colors"]', function (e) {
		
		//var userid=localStorage.userid;
	
	 $$('.feedback_color').on('click', function () {
	 	
	 	//var teach=$$('input[name=teach]:checked').val();
	 	//console.log("option1"+option1);
	 	
	 	//var poem=$$('input[name=poem]:checked').val();
	 	//console.log("option2"+option2);
	 	
	 	//var topic=$$('input[name=topic]:checked').val();
	   //console.log("option3"+option3);
	 	
	 	var que1 = $$('#que1').val();
	 	//console.log("que1"+que1);
	 	
		//var que2 = $$('#que2').val();
		//console.log("que2"+que2);
				var userid = localStorage.userid;
				
		app.request.postJSON('http://139.59.36.238/lsf/save_feedback_headandshow.php',{que1:que1,userid:userid},function (data) {
		
			if (data="Success") {	
				 app.dialog.alert("Feedback is submitted");
				 //$$('#anssheet').html(data);
			}
			
			});
	 	
	 	
	 	});
	
	});
	
	$$(document).on('page:init', '.page[data-name="feedback_stringofaction"]', function (e) {
		
		//var userid=localStorage.userid;
	
	 $$('.feedback_stringofaction').on('click', function () {
	 	
	 	var action=$$('input[name=action]:checked').val();
	 	//console.log("option1"+option1);
	 	
	 	//var poem=$$('input[name=poem]:checked').val();
	 	//console.log("option2"+option2);
	 	
	 	//var topic=$$('input[name=topic]:checked').val();
	   //console.log("option3"+option3);
	 	
	 	var que1 = $$('#que1').val();
	 	//console.log("que1"+que1);
	 	
		//var que2 = $$('#que2').val();
		//console.log("que2"+que2);
				var userid = localStorage.userid;
				
		app.request.postJSON('http://139.59.36.238/lsf/save_feedback_headandshow.php',{que1:que1,action:action,userid:userid},function (data) {
		
			if (data="Success") {	
				 app.dialog.alert("Feedback is submitted");
				 //$$('#anssheet').html(data);
			}
			
			});
	 	
	 	
	 	});
	
	});
	
	$$(document).on('page:init', '.page[data-name="videopage1"]', function (e) {
	
	  
	 var userid = localStorage.userid;
	 	$$("#down_practsheet").on("click",function(e){
			
			var ref = cordova.InAppBrowser.open('https://docs.google.com/viewer?url=139.59.36.238/lsf/My_Family_Guidance.pdf', '_blank','location=no','hidden=yes');
			// some time later...
			//app.preloader.show();
			ref.show();

    });
    
	 
	
	
});
	$$(document).on('page:init', '.page[data-name="videopage2"]', function (e) {
	
	  
	 var userid = localStorage.userid;
	 	$$("#down_practsheet_headandshow").on("click",function(e){
			
			var ref = cordova.InAppBrowser.open('https://docs.google.com/viewer?url=139.59.36.238/lsf/Head_shoulders.pdf', '_blank','location=no','hidden=yes');
			// some time later...
			//app.preloader.show();
			ref.show();

    });
    
	 
	
	
});
	$$(document).on('page:init', '.page[data-name="videopage3"]', function (e) {
	
	  
	 var userid = localStorage.userid;
	 	$$("#down_practsheet_colors").on("click",function(e){
			
			var ref = cordova.InAppBrowser.open('https://docs.google.com/viewer?url=139.59.36.238/lsf/Colours.pdf', '_blank','location=no','hidden=yes');
			// some time later...
			//app.preloader.show();
			ref.show();

    });
    
	 
	
	
});
	$$(document).on('page:init', '.page[data-name="videopage4"]', function (e) {
	
	  
	 var userid = localStorage.userid;
	 	$$("#down_practsheet_colors").on("click",function(e){
			
			var ref = cordova.InAppBrowser.open('https://docs.google.com/viewer?url=139.59.36.238/lsf/Colours.pdf', '_blank','location=no','hidden=yes');
			// some time later...
			//app.preloader.show();
			ref.show();

    });
    
	 
	
	
});
	$$(document).on('page:init', '.page[data-name="videopage5"]', function (e) {
	
	  
	 var userid = localStorage.userid;
	 	$$("#down_practsheet_stringofaction").on("click",function(e){
			
			var ref = cordova.InAppBrowser.open('https://docs.google.com/viewer?url=139.59.36.238/lsf/Strings_of_Actions.pdf', '_blank','location=no','hidden=yes');
			// some time later...
			//app.preloader.show();
			ref.show();

    });
    
	 
	
	
});

$$(document).on('page:init', '.page[data-name="videopage6"]', function (e) {
	
	  
	 var userid = localStorage.userid;
	 	$$("#down_practsheet_spellchekar").on("click",function(e){
			
			var ref = cordova.InAppBrowser.open('https://docs.google.com/viewer?url=139.59.36.238/lsf/letter_cards.pdf', '_blank','location=no','hidden=yes');
			// some time later...
			//app.preloader.show();
			ref.show();

    });
    
	 
	
	
});

$$(document).on('page:init', '.page[data-name="teacherask"]', function (e) {
		

$$('#sendmsg').on('click', function ()
{
	app.dialog.alert('click');
		//	var text = messagebar.getValue().replace('\n/g', '<br>').trim();
			//	app.dialog.alert('text-'.text);
  // return if empty message
  //if (!text.length) return;

  // Clear area
 // messagebar.clear();
  	 	var que1 = $$('#msgbx').val();
				var userid = localStorage.userid;
  // Return focus to area
 // messagebar.focus();

			app.request.postJSON('http://139.59.36.238/lsf/save_teacherask.php',{que1:que1,userid:userid},function (data) {
			
			//if (data="Success") {	
				 //app.dialog.alert("Question is submited");
				// $$('.message-content').append(data);
				   //receiveMessage(data);
			//}
							app.dialog.alert('data-'.data);
							  receiveMessage(data);
			});
	 	 
  // Add message to messages
  //messages.addMessage({
    //text: que1,
 // });

  //if (responseInProgress) return;
  // Receive dummy message

});	
	
	function receiveMessage(rec) {
		alert(rec);
  responseInProgress = true;
  setTimeout(function () {
    // Get random answer and random person
    //var answer = answers[Math.floor(Math.random() * answers.length)];
    var answer = rec;
    //var person = people[Math.floor(Math.random() * people.length)];
    var person = 'Admin';

    // Show typing indicator
    messages.showTyping({
      header: person+ ' is typing',
      avatar: person.avatar
    });

    setTimeout(function () {
      // Add received dummy message
      messages.addMessage({
        text: answer,
        type: 'received',
        name: person.name,
        avatar: person.avatar
      });
      // Hide typing indicator
      messages.hideTyping();
      responseInProgress = false;
    }, 4000);
  }, 1000);
}	
		
		//var userid=localStorage.userid;
	
	// $$('#sendmsg').on('click', function () {
	 	
	  	
	// 	var que1 = $$('#msgbx').val();
	 	//console.log("que1"+que1);
	 	
	//console.log("que2"+que2);
			//	var userid = localStorage.userid;
			//	console.log(userid);
		//app.request.postJSON('http://139.59.36.238/lsf/save_teacherask.php',{que1:que1,userid:userid},function (data) {
			
			//if (data="Success") {	
				 //app.dialog.alert("Question is submited");
			//	 $$('.message-content').append(data);
			//}
			
			//});
	 	
	 	
	 //	});
	
	});