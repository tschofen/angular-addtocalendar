webpackJsonp([0],{1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={startDate:"@",endDate:"@",title:"@",description:"@",location:"@",btnText:"@",hoverText:"@",format:"@",className:"@",useCaret:"@",useBootstrap:"@"}},119:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(123),a(122);var o=a(2),i=n(o),d=a(126),c=n(d),u=a(1),s=n(u),f=function(){function e(t,a){r(this,e),this.FileSaver=a,this.dates={},this.init.call(this),this.watchAttrs.call(this,t)}return l(e,[{key:"watchAttrs",value:function(e){var t=this;Object.keys(e).forEach(function(a){e.$observe(a,t.init.bind(t))})}},{key:"setTimesFromFormat",value:function(){var e=this;["startDate","endDate"].forEach(function(t){e.dates[t]=i.default.toUniversalTime(e[t],e.timezone)})}},{key:"getSanitizedData",value:function(){var e=this,t={};return Object.keys(s.default).forEach(function(a){t[a]=encodeURIComponent(e[a]||"")}),t}},{key:"buildUrl",value:function(){var e=angular.extend(this.getSanitizedData.call(this),this.dates),t=angular.extend({},this,this.dates);this.calendarUrl={microsoft:c.default.getMicrosoftCalendarUrl(e),google:c.default.getGoogleCalendarUrl(e),yahoo:c.default.getYahooCalendarUrl(e),icalendar:c.default.getIcsCalendar(t),dlIcal:this.dlIcal.bind(this)}}},{key:"dlIcal",value:function(){var e=i.default.getIcsFileName(this.title),t=this.calendarUrl.icalendar,a=i.default.getIcsBlob(t);this.FileSaver.saveAs(a,e)}},{key:"toggleMenu",value:function(e){this.isOpen=e}},{key:"init",value:function(){this.setTimesFromFormat.call(this),this.buildUrl.call(this)}}]),e}();t.default=f,f.$inject=["$attrs","FileSaver"]},120:function(e,t){},121:function(e,t){e.exports='<div\n  class="{{ addtocalendar.useBootstrap ? \'\' : \'atc-\' }}btn-group {{ addtocalendar.className }}"\n  ng-class="{\n    active: addtocalendar.isOpen\n  }"\n  title="{{ addtocalendar.hoverText || addtocalendar.title }}"\n  click-outside="addtocalendar.toggleMenu(false)">\n  \n  <span\n    type="button"\n    ng-class="{\n      \'btn btn-default dropdown-toggle\': addtocalendar.useBootstrap\n    }"\n    ng-click="addtocalendar.toggleMenu(true)"\n    data-toggle="dropdown">\n    {{ addtocalendar.btnText || \'Add to calendar\' }}\n    <span class="caret" ng-hide="addtocalendar.hideCaret"></span>\n  </span>\n\n  <ul\n    ng-show="addtocalendar.isOpen"\n    ng-class="{\n      \'dropdown-menu\': addtocalendar.useBootstrap,\n      \'atc-dropdown\': !addtocalendar.useBootstrap\n    }">\n    <li>\n      <a\n        ng-click="addtocalendar.calendarUrl.dlIcal()"\n        ng-if="addtocalendar.calendarUrl.dlIcal">\n        iCalendar\n      </a>\n    </li>\n    <li>\n      <a\n        href="{{addtocalendar.calendarUrl.google}}"\n        target="_blank">\n        Google Calendar\n      </a>\n    </li>\n    <li>\n      <a\n        ng-click="addtocalendar.calendarUrl.dlIcal()"\n        ng-if="addtocalendar.calendarUrl.dlIcal">\n        Outlook\n      </a>\n    </li>\n    <li>\n      <a\n        href="{{addtocalendar.calendarUrl.yahoo}}"\n        target="_blank">\n        Yahoo! Calendar\n      </a>\n    </li>\n    <li>\n      <a\n        href="{{addtocalendar.calendarUrl.microsoft}}"\n        target="_blank">\n        Microsoft Calendar\n      </a>\n    </li>\n  </ul>\n</div>'},125:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(118),l=n(r),o=a(119),i=n(o),d=a(1),c=n(d),u=a(121),s=n(u);a(120);var f={template:s.default,controller:i.default,controllerAs:"addtocalendar",bindings:c.default};l.default.module("angular-atc",["ngFileSaver","angular-click-outside"]).controller("AddtocalendarCtrl",i.default).component("addtocalendar",f),t.default="angular-atc"},126:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(2),i=n(o),d=a(0),c=(n(d),function(){function e(){r(this,e)}return l(e,null,[{key:"getYahooCalendarUrl",value:function(e){var t="http://calendar.yahoo.com/?v=60&view=d&type=20",a=i.default.getHoursDuration(e.startDate,e.endDate);return t+="&TITLE="+e.title,t+="&ST="+e.startDate+"&DUR="+a,t+="&DESC="+e.description,t+="&in_loc="+e.location}},{key:"getMicrosoftCalendarUrl",value:function(e){var t="http://calendar.live.com/calendar/calendar.aspx?rru=addevent";return t+="&summary="+e.title,t+="&dtstart="+e.startDate+"&dtend="+e.endDate,t+="&description="+e.description,t+="&location="+e.location}},{key:"getGoogleCalendarUrl",value:function(e){var t="https://www.google.com/calendar/render?action=TEMPLATE";return t+="&text="+e.title,t+="&dates="+e.startDate+"/"+e.endDate,t+="&details="+e.description,t+="&location="+e.location}},{key:"getIcsCalendar",value:function(e){return["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT","CLASS:PUBLIC","DESCRIPTION:"+i.default.formatIcsText(e.description,62),"DTSTART:"+e.startDate,"DTEND:"+e.endDate,"LOCATION:"+i.default.formatIcsText(e.location,64),"SUMMARY:"+i.default.formatIcsText(e.title,66),"TRANSP:TRANSPARENT","END:VEVENT","END:VCALENDAR","UID:"+i.default.getUid(),"DTSTAMP:"+i.default.getTimeCreated(),"PRODID:angular-addtocalendar"].join("\n")}}]),e}());t.default=c},2:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(l),i=function(){function e(){n(this,e)}return r(e,null,[{key:"getMilitaryHours",value:function(e){return e%1==.5?Math.floor(e)+"30":Math.round(e)+"00"}},{key:"getHoursDuration",value:function(e,t,a){var n=new o.default(e),r=new o.default(t);a&&(n.utcOffset(a),r.utcOffset(a));var l=o.default.duration(r.diff(n)).asHours();return this.getMilitaryHours(l)}},{key:"formatIcsText",value:function(e,t){return e?(e=e.replace(/\n/g,"\\n"),e=e.substring(0,t)):""}},{key:"toUniversalTime",value:function(e,t){var a=(0,o.default)(e);return t&&a.utcOffset(t),a.format("YYYYMMDDTHHmmss")}},{key:"getIcsBlob",value:function(e){return new Blob([e],{type:"application/octet-stream"})}},{key:"getIcsFileName",value:function(e){return e?e.replace(/[^\w ]+/g,"")+".ics":"event.ics"}},{key:"getUid",value:function(){return Math.random().toString(36).substr(2)}},{key:"getTimeCreated",value:function(){return(new o.default).format("YYYYMMDDTHHmmss")}}]),e}();t.default=i}},[125]);