alert("hej palle")  ;

var nodes = document.evaluate( '//*[@id="player_api"]' , document, null, XPathResult.ANY_TYPE, null)
var resultNode = nodes.iterateNext()

if( resultNode ) 
{
  alert(resultNode.innerHTML);
}
else
{
   alert("det virker ikke")
}


