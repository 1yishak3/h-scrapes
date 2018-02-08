var page = require('webpage').create(),
    system = require('system'),
    fs = require('fs'),
    address

if(system.args.length === 1){
    //figure out default address (I think typically bacchanal's eventbrite site)
    console.log('I took a default address: x.com')
}

address = system.args[1];
page.onConsoleMessage=function(say){
    console.log('LOGS: ' + say)
}

page.open(address, function(state){
    if(state!=='success'){
        console.log("Your link ain't workin'.")
    }else{
        //Yes, this is perfectly legal, in case you were wondering
        page.includeJS('http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function(){
            page.evaluate(function(){
                //find button here
                $('...').click(function(){
                    //find element that requires
                    //more clicks here
                    //it will probably  be a pop up for us
                    $.waitForElement('...', function(){
                        //specify the button
                        $('...').click(function(){
                            //at this point we are going to fill out
                            // the form
                            //'...' here would be ID for the form
                            //element on the site
                            $.waitForElement('...', function(){
                                //here we do the form filling out





                                //Finally click the submit button
                                //after finding the button of course
                                //which is just figuring out its ID
                                $('...').click(function(){

                                    //we should be done here
                                })
                            })
                        })
                    })
                })

            })
        })
    }

    phantom.exit()
})
//@Bruk, just figure out how to import a JSON file to this document as
//an object so we can iterate through a list of student. We will have another
// randomized scraper for students
