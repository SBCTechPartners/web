/*jshint sub:true*/

function resizeMe() {
   var body = document.getElementById("content");
   var height = window.innerHeight;
   body.style.height = (height - 397) + 'px';
}

window.onload = function() {
   var options  = '';

   switch(window.location.pathname) {
      case '/index.html':
         options = {index: "active"};
         break;
      case '/about.html':
         options = {about: "active"};
         break;
      case '/partners.html':
         options = {partners: "active"};
         break;
      case '/careers.html':
         options = {careers: "active"};
         break;
      case '/vehicles.html':
         options = {vehicles: "active"};
         break;
   }

   var headerHtml = Handlebars.templates['header'](options);
   document.getElementById('header').innerHTML += headerHtml;

   var footerHtml = Handlebars.templates['footer']({year: new Date().getFullYear()});
   document.getElementById('footer').innerHTML += footerHtml;
   resizeMe();
};