//When the servlet is first visited the 'outer shell'
//is loaded.  You can load additional resources here.
try{
    print("\n\n\t@Loading shell for core example@\n");

    load('dispatcher.js');
    load('index.jsx');
    load('request.jsx');
    load('status.jsx');
    
    print("Loaded shell.");
}catch(e){
    print(  "\t/********************************************************\n"+
            "\t * ERROR LOADING SHELL!!"+
            "\t *    details :"+
            "\t *    " + e.toString() + 
            "\t ********************************************************/" );
}

