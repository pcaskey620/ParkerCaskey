USERSCRIPT.displayPopupWindow = function(aParams){
   var strURL,w,h,scroll;
   for( args in aParams )
   {
      var argName  = args;
      var argValue = aParams[argName];
          if(argName=="url"){
                strURL = aParams[argName];
          } if(argName=="width"){
                w = aParams[argName];
          } if(argName=="height"){
                h = aParams[argName];
          } if(argName=="scroll"){
                scroll = aParams[argName];
          } else {
                argName = "@{" + argName + "}";
                strURL = strURL.replace(argName,argValue);
          }
   }
    var LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
    var TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
    var settings =    'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable=0,toolbar=0,menubar=0,location=0,status=0';
    popupWindow = window.open(strURL,'',settings);
    popupWindow.show();
    };

USERSCRIPT.displayPopupWindow.publish =
{
   parameters :
   [
      new USERSCRIPT.parameter( 'url', 'Enter URL', 'www.oracle.com' ),
          new USERSCRIPT.parameter( 'width', 'Width of popup window', '500' ),
          new USERSCRIPT.parameter( 'height', 'Height of popup window', '500' ),
          new USERSCRIPT.parameter( 'scroll', 'Include scroll bars?', 'no' ),
          new USERSCRIPT.parameter( 'p1', 'Enter value for Param 1', '' ),
          new USERSCRIPT.parameter( 'p2', 'Enter value for Param 2', '' )
   ]
};