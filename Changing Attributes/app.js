/*
For this, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/


var navList, firstItem, link;

navList = $('.nav-list');

//navList.first().attr("href","#1");

firstItem = navList.children().first().find('a').attr("href","#1");
//link = firstItem.find('a');
//link.attr('href','#1');