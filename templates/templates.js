(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table cellspacing=\"1\" cellpadding=\"1\" border=\"0\" class=\"footerTable\">\n   <tbody>\n   <tr>\n      <td align=\"left\" style=\"width: 33%;align:right;\">&nbsp;<img alt=\"\" width=\"191\" height=\"74\" src=\"img/sbc_4r4l.png\"></td>\n      <td align=\"center\" style=\"width: 33%;\">\n         <h2 style=\"text-align: center;\"><span style=\"font-size:16pt;\">Your technology partners.</span></h2>\n      </td>\n      <td align=\"right\" style=\"width: 33%;\">\n         <div style=\"text-align: right;\">\n            723 Grant St. Herndon, VA 20170<br/>\n                  <span>\n                     <span id=\"gc-number-0\" class=\"gc-cs-link\" title=\"Call with Google Voice\">703.539.6150</span>\n                  </span><br/>\n            <a href=\"mailto:sales@sbctechpartners.com\"><span>sales@sbctechpartners.com</span></a><br/>\n            Content copyright ";
  if (helper = helpers.year) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.year); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ". <span style=\"font-size: 14px;\"><b>SBCTECHPARTNERS.COM</b></span><br/>\n            All rights reserved.\n         </div>\n      </td>\n   </tr>\n   </tbody>\n</table>";
  return buffer;
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "   <div style=\"display:block;\"><img alt=\"\" src=\"./img/sbc.png\"></div>\n   <nav id=\"navigation\" class=\"widget main_nav widget_content\" style=\"display:block;\">\n      <ul id=\"Nav1\" class=\"nav\">\n         <li class=\"";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " sf_first_nav_item\"><a href=\"./index.html\" target=\"_self\">Home</a></li>\n         <li class=\"";
  if (helper = helpers.about) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.about); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><a href=\"./about.html\" target=\"_self\">About</a></li>\n         <li class=\"";
  if (helper = helpers.partners) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.partners); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><a href=\"./partners.html\" target=\"_self\">Partners</a></li>\n         <li class=\"";
  if (helper = helpers.careers) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.careers); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><a href=\"./careers.html\" target=\"_self\">Careers</a></li>\n         <li class=\" sf_last_nav_item\" style=\"float:right;\"><a href=\"https://login.microsoftonline.com/\" target=\"_self\" onclick=\"\">Login</a></li>\n      </ul>\n   </nav>\n";
  return buffer;
  });
})();