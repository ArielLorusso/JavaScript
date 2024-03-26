elements = document.getElementsByTagName("*");
for( elem in elements)
{
    document.write(elements[elem] + `${elem}` + "</br>")
    elements.innerHTML = "hola"+`${elem}`;
}/*
[object HTMLHtmlElement]0
[object HTMLHeadElement]1
[object HTMLTitleElement]2
[object HTMLStyleElement]3
[object HTMLBodyElement]4
[object HTMLHeadingElement]5
[object HTMLElement]6
[object HTMLParagraphElement]7
[object HTMLParagraphElement]8
[object HTMLScriptElement]9
function item() { [native code] }item
function namedItem() { [native code] }namedItem
22length
*/
elements = document.getElementsByTagName("p");
document.write(elements[1] ) //[object HTMLParagraphElement] 