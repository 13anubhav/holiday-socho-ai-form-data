
function run(){
    var search = document.getElementById('input_field').value;   //formResult
    // var search = document.getElementById('formResult').text; 
      var search1=search.toLowerCase();
   
   
       const keywords = ['travel', 'trip', 'plan', 'holiday', 'budget'];
   
       const split_string = search1.split(" ");
   
       const check_array = ['travel', 'trip', 'plan', 'holiday', 'budget'];
   
       const checker = value =>  split_string.some(element => value.includes(element));
   
       //console.log(arr.filter(checker));
   
       var final_array = check_array.filter(checker);
   
       if(final_array.length > 0)
       {
           const options = {
           method: 'POST',
           headers: {
               'content-type': 'application/json',
               'X-RapidAPI-Key': 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe',
               'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
           },
           body: '{"text":"'+search+'"}'
           };
   
           function print_data(){
             response => response.text();
             response => boxvalue = document.getElementById('input_field1').value = response ;
           }
           
           fetch('https://chatgpt-ai-chat-bot.p.rapidapi.com/ask', options,print_data)
   
           .then(response => response.text())
           .then(response =>  boxvalue = document.getElementById('input_field1').value = response )
          
           
           
           .catch(err => boxvalue = document.getElementById('input_field1').value = console.error(err));
   
           
   
   
       }
       else
       {
           //document.getElementById('input_field1').value = 'Invalid Input' ;
           document.getElementById('input_field1').value = "Sorry, I cannot Generate output for this prompt as it is not related to the task of creating a daily itinerary. Please provide a valid Input. " ;
       }
     
   //    const keywords = ['travel', 'trip', 'plan', 'holiday'];
   
   //    function checkForKeyword(string) {
   //        for (let i = 0; i < keywords.length; i++) {
   //            if (string.toLowerCase().includes(keywords[i])) {
   //                return true;
   //            }
   //        }
   //        return false;
   //    }
   
   //    function print_data(){
   //     response => response.text();
   //     response => boxvalue = document.getElementById('input_field1').value = response ;
   //   }
   
   //    if (checkForKeyword(search1)) {
   //     console.log(`"${search1}" contains one of the keywords: ${keywords.join(', ')}`);
   //     print_data();
   //   //  response => response.text();
   //   //   response => boxvalue = document.getElementById('input_field1').value = response ;
    
   //    // .then(response =>  boxvalue = document.getElementById('input_field1').value = response )
   //   //  console.log(res);   
   // } else {
   //     // console.log(`"${string1}" does not contain any of the keywords: ${keywords.join(', ')}`);
   //     console.log("Please Ask Travel related Questions... :) ")
   //     response =>  boxvalue = document.getElementById('input_field1').value = "Please Ask Travel related Questions... :)" ;
   //    // response => "Please Ask Travel related Questions... :) ";
   // }
   
     //alert(search);
   
     
   }
   
   
   
   
   
   
   
   
   
   
   
   
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //  -------------> This Function is to Copy The Text Results Generated by The AI. <------------
   
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   function myFunction() {
     // Get the text field
     var copyText = document.getElementById("input_field1");
   
     // Select the text field
     copyText.select();
     copyText.setSelectionRange(0, 99999); // For mobile devices
   
     // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.value);
     
     // Alert the copied text
    // alert("Copied the text: " + copyText.value);
    var cpy_txt = copyText.value;
   }
   
   
   
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //  -------------> This Function is to Conver Text to PDF, Generated by The AI. <------------
   
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
   
   function pdf_wala1 () {
   
     
     var text = document.getElementById("input_field1").value;
    
     // create a new PDF document
   //  var doc = new jsPDF();  // -------------> Original
   
   
   //----------> 
   
   
   
   
   // ---------------->YAHA PE WORD WRAP HO RAHA HAI <------------------
   // It's the Time For Disco -2
   // It's The Time For Disco....
   
   var lMargin=15; //left margin in mm
   var rMargin=15; //right margin in mm
   var pdfInMM=210;  // width of A4 in mm
   
   var doc = new jsPDF("p","mm","a4");
   
         ///-----------------YAHA PE PDF FONT SET KAR SAKTE HAI-----------------------
   
   
   
     //var lines = doc.splitTextToSize(text, doc.internal.pageSize.getWidth() - 20);
   
   
    ///-----------------YAHA PE PDF FONT SET KAR SAKTE HAI-----------------------
    //doc.setFont("courier", "bolditalic");
    // doc.text("This is centred text.", 105, 80, null, null, "center");
   // doc.text( " ", 20, 140, null, 10);  // "10 degrees rotated"
    //doc.setFont("times", "normal");
   // doc.setFont("courier", "bolditalic");
   // doc.setFont("helvetica", "italic");
    doc.setFont("Symbol", "normal");
    
     // add the text to the document
     // doc.text( 10, 10, lines);
    // doc.setFont("helvetica", "bold");
   
   
    //---------------------> YAHA PAR RGB COLOR SET HOTA HAI --> QRIPYA SAMPARK KARE <--------------------------
   
    doc.setTextColor(0, 0, 0); // sets font color to red (RGB value)
     
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         
         var lines =doc.splitTextToSize(text, (pdfInMM-lMargin-rMargin));
       doc.text(lMargin,20,lines);
       
   //doc.save('Generated.pdf');
   
     
   
    
   
     //------------------------------YAHA PE PDF GENERATION KE TYPES HAI-------------------------------------------
   
     // doc.text(20, 20, 'This is the default font.');
   
     // doc.setFont("courier", "normal");
     // doc.text("This is courier normal.", 20, 30);
   
     // doc.setFont("times", "italic");
     // doc.text("This is times italic.", 20, 40);
   
     // doc.setFont("helvetica", "bold");
     // doc.text("This is helvetica bold.", 20, 50);
   
    //  doc.setFont("courier", "bolditalic");
     // doc.text("This is courier bolditalic.", 20, 60);
   
     // doc.setFont("times", "normal");
     // doc.text("This is centred text.", 105, 80, null, null, "center");
     // doc.text("And a little bit more underneath it.", 105, 90, null, null, "center");
     // doc.text("This is right aligned text", 200, 100, null, null, "right");
     // doc.text("And some more", 200, 110, null, null, "right");
     // doc.text("Back to left", 20, 120);
   
     // doc.text("10 degrees rotated", 20, 140, null, 10);
     // doc.text("-10 degrees rotated", 20, 160, null, -10);
   
   
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
     // save the document as a PDF file
   
   
     //---------------------------- HAMARE YAHA IMAGE ADD KIYA ZATA HAI ---> QRIPYA SAMPARK KARE :)  -------> BEGINS
   
    // var imgData = 'deva.png'
   
     var imgUrl = 'https://i.ibb.co/KG8Vvf5/image16.jpg';
    // <a href="https://ibb.co/sPXsYNg"><img src="https://i.ibb.co/KG8Vvf5/image16.jpg" alt="image16" border="0"></a>
   
     var imgData;
   
     
   
     ////---------------------------- HAMARE YAHA IMAGE ADD KIYA ZATA HAI ---> QRIPYA SAMPARK KARE :) --------> ENDS
   
    doc.save("Holiday-socho-ai.pdf");
   
   
     // ------------------------------->HUM RUN BUTTON KA END HAI<----------------DON'T TOUCH ME :() 
   }
   
   
   
   ////---------------------------- HAMARE YAHA ANIMATION ADD KIYA ZATA HAI ---> QRIPYA SAMPARK KARE :) --------> BEGINS <-----
    function load_animation(){
   
     const playButton = document.getElementById('submit_button');
   //const playButton = document.getElementById('play-button');  --> For Button Wala
   const gifContainer = document.getElementById('gif-container');
   
   
   
   playButton.addEventListener('click', () => {
   const gifImage = document.createElement('img');
   gifImage.src = 'GIF_White.gif';
   //gifImage.src = 'GIF_Transparent';
   //
   gifContainer.appendChild(gifImage);
   gifContainer.style.display = 'block';
   setTimeout(() => {
     gifContainer.removeChild(gifImage);
     gifContainer.style.display = 'none';
   }, 6000);
   });
      
     }
   
     function submitForm() {
       // Get the form data
       const form = document.getElementById("myForm");
       const formData = new FormData(form);
   
       // Convert form data to an object
       const dataObject = {};
       formData.forEach(function(value, key){
           dataObject[key] = value;
       });
   
       // Store form data in a variable
       const allFormData = JSON.stringify(dataObject);
   
       // Display the form data on the web page
       //document.getElementById("formResult").innerHTML = "Form Data: " + allFormData + dataObject.name;
      // document.getElementById("input_field").innerHTML = "Form Data: " + allFormData ;
       document.getElementById("formResult").innerHTML = "Plan a Trip to "+ dataObject.place + " for " + dataObject.days + " days with budget limit of " + dataObject.budget + " with " + dataObject.food +" food items and  " + dataObject.theme + " theme" ;
 
       var form_data= "Plan a Trip to "+ dataObject.place + " for " + dataObject.days + " with budget limit of " + dataObject.budget + " with " + dataObject.food +" and  " + dataObject.theme +" theme" ;
 
 
       var search = form_data;
 
        // var search = document.getElementById('formResult').value;   //formResult
         // var search = document.getElementById('formResult').text; 
           var search1=search.toLowerCase();
        
        
            const keywords = ['travel', 'trip', 'plan', 'holiday', 'budget'];
        
            const split_string = search1.split(" ");
        
            const check_array = ['travel', 'trip', 'plan', 'holiday', 'budget'];
        
            const checker = value =>  split_string.some(element => value.includes(element));
        
            //console.log(arr.filter(checker));
        
            var final_array = check_array.filter(checker);
        
            if(final_array.length > 0)
            {
                const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe',   //10316f5566msh306d150348f8848p150516jsn9ad070432ccf 
                    //c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe
                    'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
                },
                body: '{"text":"'+search+'"}'
                }; 
        
                function print_data(){
                  response => response.text();
                  response => boxvalue = document.getElementById('input_field1').value = response ;
                }
                
                fetch('https://chatgpt-ai-chat-bot.p.rapidapi.com/ask', options,print_data)
        
                .then(response => response.text())
                .then(response =>  boxvalue = document.getElementById('input_field1').value = response )
               
                
                
                .catch(err => boxvalue = document.getElementById('input_field1').value = console.error(err));
        
                
        
        
            }
            else
            {
                //document.getElementById('input_field1').value = 'Invalid Input' ;
                document.getElementById('input_field1').value = "Sorry, I cannot Generate output for this prompt as it is not related to the task of creating a daily itinerary. Please provide a valid Input. " ;
            }
          
       
        
       
       //input_field
     }
      var form_data;
     ////---------------------------- HAMARE YAHA ANIMATION ADD KIYA ZATA HAI ---> QRIPYA SAMPARK KARE :) --------> THE ENDS <----
    
   
     function run2(){
      var search =   document.getElementById("formResult").innerHTML = "Plan a Trip to "+ dataObject.place + " for " + dataObject.days + " days with budget limit of " + dataObject.budget + " with " + dataObject.food +" food items and  " + dataObject.theme + " theme" ;
      search = form_data;
 
      //var search = 
 
        // var search = document.getElementById('formResult').value;   //formResult
         // var search = document.getElementById('formResult').text; 
           var search1=search.toLowerCase();
        
        
            const keywords = ['travel', 'trip', 'plan', 'holiday', 'budget'];
        
            const split_string = search1.split(" ");
        
            const check_array = ['travel', 'trip', 'plan', 'holiday', 'budget'];
        
            const checker = value =>  split_string.some(element => value.includes(element));
        
            //console.log(arr.filter(checker));
        
            var final_array = check_array.filter(checker);
        
            if(final_array.length > 0)
            {
                const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe',
                    'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
                },
                body: '{"text":"'+search+'"}'
                };
        
                function print_data(){
                  response => response.text();
                  response => boxvalue = document.getElementById('input_field1').value = response ;
                }
                
                fetch('https://chatgpt-ai-chat-bot.p.rapidapi.com/ask', options,print_data)
        
                .then(response => response.text())
                .then(response =>  boxvalue = document.getElementById('input_field1').value = response )
                      
                
                .catch(err => boxvalue = document.getElementById('input_field1').value = console.error(err));
            
            }
            else
            {
                //document.getElementById('input_field1').value = 'Invalid Input' ;
                document.getElementById('input_field1').value = "Sorry, I cannot Generate output for this prompt as it is not related to the task of creating a daily itinerary. Please provide a valid Input. " ;
            }
          
        }
