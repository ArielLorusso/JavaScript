// DOM = Document_Object_Model is a (API) Aplication_Programing_interface
//      interface for changing the content of page

console.log(document.title);
console.log(document.URL);

document.title = "TITLE change by javascript";
document.body.style.backgroundColor = "skyblue"
//document.location = "http://google.com"

const paragraph = document.getElementById("myParagraph");
if   (paragraph) {   paragraph.textContent = "javascript updated paragraph!";}

document.getElementById("myDiv").innerHTML +=  `<h1 id="added" > ADDED </h1>` ;
const added = document.getElementById("added");
if   (added) {   added.style.color = "red";}

/*  https://devdocs.io/dom/html_dom_api
//  https://devdocs.io/dom/html_dom_api/microtask_guide
//  https://devdocs.io/dom/html_drag_and_drop_api/recommended_drag_types
//
//  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
//
*/
//              ELEMENT--> (ATRIBUTE) = Value
// 
// Document
//    HTML ...... root element
//       HEAD    
//           META    
//           LINK  -->  (href) style.css
//           TITLE -->  (text)
//       BODY
//           DIV     
//               H1 --> (heading text)
//               A  --> (href)="link"
//