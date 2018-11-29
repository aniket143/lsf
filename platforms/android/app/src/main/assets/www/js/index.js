/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var fileTransfer;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.log('start initi');
        console.log(Media);
                window.open = cordova.InAppBrowser.open;
         console.log(navigator.device.capture);
			document.addEventListener("offline", onOffline, false);
			var db='';
			    // db = window.sqlitePlugin.openDatabase({name: "lsf.db"});
			    db = window.sqlitePlugin.openDatabase({
    name: 'lsf.db',
    location: 'default',
  });
			       // var db = window.openDatabase("lsf.db", "2.0", "Test DB", 1000000);    


    db.transaction(function(tx) {

        //create table
        tx.executeSql("CREATE TABLE IF NOT EXISTS attendance (id integer primary key, empid integer,longitude text,latitude text,date text, photo text,uploded integer)", [], function(tx, res){

            //insert data
       //     tx.executeSql("INSERT INTO demo (id, data, data_num) VALUES (?,?,?)", [1, "test", 100], function(tx,res){

                //retrieve data
         //       tx.executeSql("SELECT * FROM demo WHERE id = ?", [1], function(tx, res){
           //         for(var iii = 0; iii < res.rows.length; iii++)
             //       {
               //         alert(res.rows.item(iii).id);
                 //       alert(res.rows.item(iii).data);
                   //     alert(res.rows.item(iii).data_num);
                    //}
               // })

           // });

        });

    }, function(err){

        //errors for all transactions are reported here
        alert("Error: " + err.message);

    });





    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();