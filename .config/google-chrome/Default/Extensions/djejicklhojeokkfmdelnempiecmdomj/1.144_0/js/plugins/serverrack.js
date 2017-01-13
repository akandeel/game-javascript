pluginFn['/js/plugins/v2/serverrack.js'] = function(lucid, window) {
	(function(){var x={global:this,provide:function(a){a=a.split(".");x.global[a[0]]=x.global[a[0]]||{};var b=x.global[a[0]];a.slice(1).reduce(function(a,b){a[b]||(a[b]={});return a[b]},b)},require:function(){},inherits:function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,g){var l=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,l)}},base:function(a,b,c){var e=arguments.callee.caller;if(x.STRICT_MODE_COMPATIBLE||
x.DEBUG&&!e)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(e.superClass_)return e.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var f=Array.prototype.slice.call(arguments,2),g=!1,l=a.constructor;l;l=l.superClass_&&l.superClass_.constructor)if(l.prototype[b]===e)g=!0;else if(g)return l.prototype[b].apply(a,f);if(a[b]===e)return a.constructor.prototype[b].apply(a,
f);throw Error("goog.base called from a method of one name to a method of a different name");}};x.provide("plugin.serverrack");var v;lucid.plugin.onDocumentLoaded(function(){function a(a,b){e&&!b.nospace&&a.spacer();e=!0;"spinner"==b.type?(a.addGrid({width:6,content:{text:b.name+":",classes:"crop ralign"}}),a.openGrid({width:3,suffix:3}),a.addInput({type:"spinner",min:1,max:100,step:1,value:b.value(b.prop,b.ids),defaultVal:" ",onChange:b.change(b),checkUpdate:function(){return{value:b.value(b.prop,
b.ids)}}}),a.close()):"buttonset"==b.type?(a.addGrid({width:6,content:{text:b.name+":",classes:"crop ralign"}}),a.openGrid({width:6}),a.addInput({type:"buttonset",buttons:[{label:b.labels(b.ids)[0],selected:b.value(!1,b),action:b.change(!1,b)},{label:b.labels(b.ids)[1],selected:b.value(!0,b),action:b.change(!0,b)}]}),a.close()):"button"==b.type&&(a.addGrid({width:6,content:{text:b.name+":",classes:"crop ralign"}}),a.openGrid({width:3,suffix:3}),a.addButton({label:b.labels(b.ids,b.prop),onClick:b.change(b)}),
a.close())}var d=lucid.template.builder(),c=d.add(),e=!1;lucid.plugin.addCustomPanel("Context Panel",null,[{content:d}],null,{isContextPanel:!0,checkShow:function(f){v=null;f=lucid.array.filter(f,function(a){return a.isBlock});if(!lucid.array.every(f,function(a){return/^Rack/.test(a.className)}))return!1;var g=!1,l=!1,k=!1;lucid.array.forEach(f,function(a){"RackServerRack"!=a.className||l?"RackServerRack"==a.className||g?k=!0:l=!0:g=!0});var h=function(a,b){return lucid.array.every(a,function(a){return lucid.plugin.getProperty(a,
b)})?"Unhide":"Hide"},m={Size:{allowsMixed:!1,ids:[],name:"Size",type:"spinner",prop:"BoundingBox",value:function(a,c){for(var f=lucid.plugin.getProperty(c[0],a).h,d=1;d<c.length;d++)f>lucid.plugin.getProperty(c[d],a).h&&(f=lucid.plugin.getProperty(c[d],a).h);return"RackServerRack"==lucid.plugin.getBlockClassName(c[0])?(f-2*b.rack.th*b.s)/(b.u.h*b.s):f/(b.u.h*b.s)},change:function(a){return function(c,f){f||(c>b.max&&(c=b.max),lucid.array.forEach(a.ids,function(f){var d=lucid.plugin.getProperty(f,
a.prop);d.h=c*b.u.h*b.s;"RackServerRack"==lucid.plugin.getBlockClassName(f)&&(d.h+=2*b.rack.th*b.s);lucid.plugin.setProperty(f,a.prop,d)}))}}},TextLoc:{allowsMixed:!1,ids:[],name:"Text Location",type:"buttonset",prop:"TextLoc",labels:function(a){return"RackServerRack"==lucid.plugin.getBlockClassName(a[0])?["Top","Bottom"]:["Left","Right"]},value:function(a,b){return function(){for(var c=b.prop,f=b.ids,d=lucid.plugin.getProperty(f[0],c),e=1;e<f.length;e++)if(d!=lucid.plugin.getProperty(f[e],c))return null;
return null!==d&&d===a}},change:function(a,b){return function(){lucid.array.forEach(b.ids,function(c){lucid.plugin.setProperty(c,b.prop,a)})}}},HideText:{allowsMixed:!0,ids:[],name:"Hide Label",type:"button",prop:"HideText",labels:h,change:function(a){return function(){var b="Unhide"==h(a.ids,a.prop);lucid.array.forEach(a.ids,function(c){lucid.plugin.setProperty(c,a.prop,!b)});return{label:h(a.ids,a.prop)}}}}};lucid.array.forEach(f,function(a){lucid.object.forEach(m,function(b){k&&!b.allowsMixed||
b.ids.push(a.id)})});e=!1;v=lucid.template.builder();lucid.object.forEach(m,function(b){0<b.ids.length&&(void 0===b.maxSelected||b.ids.length<=b.maxSelected)&&a(v,b)});if(!e)return v=null,!1;d.getElement(c).setContent(v);return function(){v&&v.refreshInputs()}},contextPanelObstacle:function(){var a=null;lucid.array.forEach(lucid.plugin.getSelection(),function(c){c=lucid.plugin.getProperty(c,"BoundingBox");c.x-=128+b.attach.w*b.s*1.5;c.w+=256+b.attach.w*b.s*3;null===a?a={x:c.x,y:c.y,w:c.w,h:c.h}:(c.x<
a.x&&(a.x=c.x),c.y<a.y&&(a.y=c.y),c.w+c.x>a.w+a.x&&(a.w=c.w+c.x-a.x),c.h+c.y>a.h+a.y&&(a.h=c.h+c.y-a.y))});return a}})});var b={s:1.5,max:100,u:{h:20},rack:{w:180,sw:34,th:16},attach:{w:17,d:6},hdd:{w:34},led:{d:4},port:{w:7},plug:{w:18,h:14},fan:{d:16}},w=function(a){return{Action:"move",x:a.x,y:a.y}},t=function(a){return{Action:"line",x:a.x,y:a.y}},z=function(a){a.s||(a.s=0);a.f||(a.f=2);return{Action:"curve",Control:lucid.math.ellipseArcControlPoints(a.x,a.y,a.w,a.h,a.s*Math.PI,a.f*Math.PI)}},
A=function(){return{Action:"close"}},F=function(a,b,c){void 0===a.w&&(a.w=0);void 0===a.h&&(a.h=0);return{FillColor:void 0!==c?c:b.FillColor,StrokeColor:b.LineColor,LineWidth:b.LineWidth,NoRounding:!0,Actions:[w({x:a.x,y:a.y}),t({x:a.x+a.w,y:a.y+a.h}),A()]}},n=function(a,b,c){void 0===a.dx1&&(a.dx1=0);void 0===a.dx2&&(a.dx2=1);void 0===a.dy1&&(a.dy1=0);void 0===a.dy2&&(a.dy2=1);void 0===a.ox1&&(a.ox1=0);void 0===a.ox2&&(a.ox2=0);void 0===a.oy1&&(a.oy1=0);void 0===a.oy2&&(a.oy2=0);return{FillColor:void 0!==
c?c:b.FillColor,StrokeColor:b.LineColor,LineWidth:b.LineWidth,NoRounding:!0,Actions:[w({x:a.x+a.w*a.dx1+a.ox1,y:a.y+a.h*a.dy1+a.oy1}),t({x:a.x+a.w*a.dx2+a.ox2,y:a.y+a.h*a.dy1+a.oy1}),t({x:a.x+a.w*a.dx2+a.ox2,y:a.y+a.h*a.dy2+a.oy2}),t({x:a.x+a.w*a.dx1+a.ox1,y:a.y+a.h*a.dy2+a.oy2}),A()]}},q=function(a,b){return n(a,b,b.FillColor)},r=function(a,b){return n(a,b,null)},u=function(a,b,c){return{FillColor:c||b.FillColor,StrokeColor:b.LineColor,LineWidth:b.LineWidth,NoRounding:!0,Actions:[w({x:a.x+a.d,y:a.y+
.5*a.d}),z({x:a.x,y:a.y,w:a.d,h:a.d}),A()]}},C=function(a,d){var c=b.u.h*b.s,e={x:a.x,y:a.y,h:a.h,w:a.w},f;if(0!==d.h)if(0!==d.y)for(f=Math.floor((d.y+c/2)/c)*c,e.y+=f,e.h-=f;e.h<c;)e.h+=c,e.y-=c;else for(e.h+=Math.floor((d.h+c/2)/c)*c;e.h<c;)e.h+=c;else e.y+=d.y;0===d.w&&(e.x+=d.x);return e},G=function(a,d){var c=b.u.h*b.s,e=b.rack.th*b.s,f=b.rack.sw*b.s,g=b.attach.w*b.s,l=lucid.plugin.getDescendants(lucid.plugin.getActivePageId(),function(a){return(a=lucid.plugin.getBlockClassName(a))&&"RackServerRack"==
a}),k;for(k in l){var h=lucid.plugin.getProperty(l[k],"BoundingBox");if(lucid.math.Box.within(a,h)){a.y>h.y+e-c/2&&(a.x=h.x+f-g,e=a.y-(h.y+e),a.y+=Math.floor((e+c/2)/c)*c-e);break}}return a},D=function(){return{FillColor:{x1:1,y1:0,x2:1,y2:1,s:1,t:"l",cs:[{c:"#e6e6e6ff",t:0},{c:"#999999ff",t:1}]},LineWidth:1,TextLoc:!1,HideText:!1}},H=function(a,d){var c=b.attach.w*b.s,e=E({x:a.x,y:a.y,h:a.h},d);return e=e.concat(E({x:a.x+a.w-c,y:a.y,h:a.h},d))},p=function(a,d,c,e){return{className:"Rack"+a,name:d,
searchKeywords:c,defaultSize:{w:b.rack.w*b.s+2*b.attach.w*b.s,h:b.u.h*b.s},minHeight:b.u.h*b.s,maxHeight:b.max*b.u.h*b.s,rLock:!0,noLines:!0,snapSpacing:1,defaultProperties:D,onInit:function(a){lucid.plugin.addBlockTextArea(a,{id:"Text",value:d,getBoundingBox:function(c){return lucid.plugin.getProperty(a,"HideText")?null:{x:lucid.plugin.getProperty(a,"TextLoc")?c.x+c.w+b.attach.w*b.s*1.5:c.x-128-b.attach.w*b.s*1.5,y:c.y,w:128,h:c.h}}})},getInfoText:function(a){a=lucid.plugin.getProperty(a,"BoundingBox");
return Math.round(a.h/(b.u.h*b.s))+" U"},getOffsetProperties:function(a,b,c){b={};var e=lucid.plugin.getProperty(a,"BoundingBox"),e=C(e,c),e=G(e);b[a]={BoundingBox:e};return b},getRenderData:function(a,c){var d=a.BoundingBox,k,h,m;"sample"==c?(k=b.s,h=d.h,m=d.w,d.h*=4,d.w*=4,b.s=d.h/b.u.h,d.w=d.h*b.rack.w/b.u.h+2*b.attach.w*b.s,d.y-=(d.h-h)/2,d.x-=(d.w-m)/2,a.LineWidth*=b.s):"preview"==c&&(k=b.s,h=d.h,m=d.w,b.s=d.h/b.u.h,d.w=d.h*b.rack.w/b.u.h+2*b.attach.w*b.s,d.y-=(d.h-h)/2,d.x-=(d.w-m)/2,a.LineWidth*=
b.s);h=b.attach.w*b.s;h={x:d.x+h,y:d.y,w:d.w-2*h,h:d.h};m=[q(h,a)];m=m.concat(e(h,a));"sample"!=c?m=m.concat(H(d,a)):d.x-=b.attach.w*b.s;k&&(b.s=k);return m}}};lucid.plugin.initBlockClass({className:"RackServerRack",name:"Server Rack",searchKeywords:["server"],defaultSize:{w:(2*b.rack.sw+b.rack.w)*b.s,h:(2*b.rack.th+30*b.u.h)*b.s},hollow:!0,minHeight:2*b.rack.th*b.s,maxHeight:2*b.rack.th*b.s+b.max*b.u.h*b.s,rLock:!0,defaultProperties:D,onInit:function(a){lucid.plugin.addBlockTextArea(a,{id:"Text",
value:"Server Rack",getBoundingBox:function(d){if(lucid.plugin.getProperty(a,"HideText"))return null;var c=lucid.plugin.getProperty(a,"TextLoc");return{x:d.x,y:c?d.y+d.h+b.rack.th*b.s*.5:d.y-20-b.rack.th*b.s*.5,w:d.w,h:20}}})},getInfoText:function(a){a=lucid.plugin.getProperty(a,"BoundingBox");return Math.round((a.h-2*b.rack.th*b.s)/(b.u.h*b.s))+" U"},getOffsetProperties:function(a,d,c){var e=lucid.plugin.getProperty(a,"BoundingBox"),f=b.u.h*b.s,g=b.rack.th*b.s,l=C(e,c);lucid.array.forEach(["x","y",
"w","h"],function(a){c[a]=l[a]-e[a]});var k=lucid.plugin.defaultOffsetProperties(a,d,c);0===c.h&&lucid.array.forEach(lucid.plugin.getDescendants(lucid.plugin.getActivePageId()),function(a){var b=lucid.plugin.getBlockClassName(a);/^Rack/.test(b)&&"RackServerRack"!==b&&(b=lucid.plugin.getProperty(a,"BoundingBox"),lucid.math.Box.within(b,e)&&(b=b.y-(e.y+g),0===Math.floor((b+f/2)/f)*f-b&&(k[a]=lucid.plugin.defaultOffsetProperties(a,d,c)[a])))});return k},getRenderData:function(a,d){var c=a.BoundingBox,
e=b.s;"sample"==d?e=c.h/(2*b.rack.th+30*b.u.h)*b.s:"preview"==d&&(e*=.5);return[q({x:c.x,y:c.y,w:c.w,h:c.h,dx2:0,ox2:10*e},a),q({x:c.x,y:c.y,w:c.w,h:c.h,dx1:1,ox1:-10*e},a),q({x:c.x,y:c.y,w:c.w,h:c.h,dx2:1,ox1:10*e,ox2:-10*e,dy2:0,oy2:16*e},a),q({x:c.x,y:c.y,w:c.w,h:c.h,dx2:1,ox1:10*e,ox2:-10*e,dy1:1,oy1:-16*e},a),q({x:c.x,y:c.y,w:c.w,h:c.h,dx2:0,ox1:10*e,ox2:34*e,oy1:16*e,oy2:-16*e},a),q({x:c.x,y:c.y,w:c.w,h:c.h,dx1:1,dx2:1,ox1:-34*e,ox2:-10*e,oy1:16*e,oy2:-16*e},a),r({x:c.x,y:c.y,w:c.w,h:c.h,ox1:22*
e,ox2:-22*e},{LineWidth:a.LineWidth,StrokeColor:"#00000000"})]}});lucid.plugin.initBlockClass(p("Blank","Blank Slot",["server","blank"],function(a,b){return[]}));lucid.plugin.initBlockClass(p("RaidArray","RAID Array",["raid","harddrive","memory","storage"],function(a,d){for(var c=b.hdd.w*b.s,e=.5*b.u.h*b.s,f=b.led.d*b.s,g=[],l=Math.floor(a.h/(b.u.h*b.s)),k=0;k<2*l;k++){for(var h=0;4>h;h++)g=g.concat(I({x:a.x+.5*a.w+(h-2)*c+(0===Math.floor(h/2)?-3*f:3*f),y:a.y+a.h-e*(k+1)},d));for(h=0;4>h;h++)g=g.concat(y({x:a.x+
.5*a.w+3*(h-2)/2*f+.25*f,y:a.y+a.h-(e*k+.5*e+.5*f)},d))}return g}));lucid.plugin.initBlockClass(p("Server","Server",["server"],function(a,d){for(var c=b.u.h*b.s,e=[r({x:a.x,w:a.w,y:a.y,h:a.h,dx1:.031,dx2:.484,dy1:1,oy1:-.4*c,oy2:-.15*c},d),r({x:a.x,w:a.w,y:a.y,h:a.h,dx1:.031,dx2:.484,dy1:1,oy1:-.85*c,oy2:-.6*c},d),r({x:a.x,w:a.w,y:a.y,h:a.h,dx1:.5,dx2:.969,dy1:1,oy1:-.85*c,oy2:-.15*c},d),n({x:a.x,w:a.w,y:a.y,h:a.h,dx1:.605,dx2:.871,dy1:1,oy1:-.7*c,oy2:-.45*c},d,"#00d34c")],f=Math.floor(a.h/c),g=1;g<
f;g++)e.push(r({x:a.x,y:a.y,w:a.w,h:a.h,dx1:.031,dx2:.969,dy1:1,oy1:-(c*(g+.4)),oy2:-(c*(g+.15))},d)),e.push(r({x:a.x,y:a.y,w:a.w,h:a.h,dx1:.031,dx2:.969,dy1:1,oy1:-(c*(g+.85)),oy2:-(c*(g+.6))},d));return e}));lucid.plugin.initBlockClass(p("EthernetSwitch","Ethernet Switch",["net","switch","network","server","ethernet"],function(a,d){for(var c=b.u.h*b.s,e=b.port.w*b.s,f=b.led.d*b.s,g=[],l=Math.floor(a.h/c),k=0;k<l;k++){for(var h={y:a.y+a.h-c*(.5+k)},m=0;12>m;m++)h.x=a.x+.5*a.w+m*e,g=g.concat(B(h,
d)),g=g.concat(B({x:h.x,y:h.y-e},d));h.x=a.x+.5*a.w-7*e;g=g.concat(y({x:h.x,y:h.y-e},d));g=g.concat(y({x:h.x,y:h.y-.5*f},d));g=g.concat(y({x:h.x,y:h.y+e-f},d))}return g=g.concat(B({x:a.x+.5*a.w-4*e,y:a.y+a.h-.5*c},d))}));lucid.plugin.initBlockClass(p("PatchPanel","Patch Panel","net network patch network server ethernet".split(" "),function(a,d){for(var c=b.u.h*b.s,e=b.port.w*b.s,f=[],g=Math.floor(a.h/c),l=0;l<g;l+=.5)for(var k=a.y+a.h-c*(l+.25)-.5*e,h=0;4>h;h++)for(var m=a.x+(.5+h)/4*a.w,n=0;5>n;n++)f=
f.concat(B({x:m+e*(n-2.5),y:k},d));return f}));lucid.plugin.initBlockClass(p("Router","Router",["router","server"],function(a,d){for(var c=b.rack.w*b.s,e=b.u.h*b.s,f=[],g=0;12>g;g++)f.push(r({x:a.x+a.w-c/16*(g+1),y:a.y,w:c/16,h:a.h},d));f.push(r({x:a.x+a.w-c/16*14,y:a.y,w:c/8,h:a.h},d));f.push(r({x:a.x+a.w-c/16*12,y:a.y+a.h-e,w:c/16,h:3*e/4},d));f.push(r({x:a.x+a.w-c/16*14,y:a.y+.1*a.h+.2*e,w:c/8,h:.5*a.h},d));return f}));lucid.plugin.initBlockClass(p("Monitor","Monitor",["input","monitor"],function(a,
b){var c=[];c.push(n({x:a.x,y:a.y,w:a.w,h:a.h,dx1:.1,dx2:.9,dy1:.1,dy2:.9},b,"#85dcff"));return c}));lucid.plugin.initBlockClass(p("Keyboard","Slideout Keyboard",["input","keyboard"],function(a,d){for(var c=b.u.h*b.s,e=[],f={x:a.x+.25*a.w,y:a.y+a.h-.5*c,w:.5*a.w,h:.3*c,n:0,max:20,drawKey:function(a){void 0===a&&(a=f.max-f.n);var b=q({x:f.x,y:f.y,w:f.w,h:f.h,dx1:f.n/f.max,dx2:(f.n+a)/f.max},d);f.n+=a;f.n==f.max&&(f.y-=f.h,f.n=0);return b}},e=e.concat([f.drawKey(5),f.drawKey(10),f.drawKey()]),c=1;f.y>
a.y;){c%2?e.push(f.drawKey(3)):e.push(f.drawKey(4));for(var c=c+1,g=0;6>g;g++)e.push(f.drawKey(2));e.push(f.drawKey())}return e}));lucid.plugin.initBlockClass(p("PowerStrip","Power Strip",["power","plug"],function(a,d){for(var c=b.u.h*b.s,e=b.plug.w*b.s,f=b.plug.h*b.s,g=[],l=a.h/c,k=0;k<l;k++)for(var h=0;7>h;h++)g=g.concat(J({x:a.x+.5*a.w+(h-3)*(e+4)-.5*e,y:a.y+a.h-(k+1)*c+.5*(c-f),w:e,h:f},d));return g}));lucid.plugin.initBlockClass(p("PowerSupply","Power Supply",["power"],function(a,d){for(var c=
b.u.h*b.s,e=b.fan.d*b.s,f=b.fan.d*b.s,g=[],l=Math.floor(a.h/c),k=0;k<l;k++)for(var h=0;8>h;h++)g=g.concat(K({x:a.x+.5*a.w+(h-4)*(e+4)+2,y:a.y+a.h-(k+1)*c+.5*(c-f)},d));return g}));lucid.plugin.initBlockClass(p("Bridge","Bridge",["bridge"],function(a,d){for(var c=b.u.h*b.s,e=b.led.d*b.s,f=[],g=0;6>g;g++)f.push(F({x:a.x,w:a.w,y:a.y+a.h-c*(1+g)/7},d));for(g=0;3>g;g++)f=f.concat(y({x:a.x+(.2+.05*g)*a.w,y:a.y+a.h-.5*c-.5*e},d));return f}));lucid.plugin.initBlockClass(p("TapeDrive","Tape Drive",["tape",
"memory"],function(a,d){var c=b.u.h*b.s,e=b.led.d*b.s,f=[];f.push(q({x:a.x+.35*a.w,y:a.y+.2*c,w:.3*a.w,h:.6*c},d));f.push(n({x:a.x+.7*a.w,y:a.y+a.h-.8*c,w:.2*a.w,h:.5*c},d,"#00d34c"));if(1<Math.floor(a.h/c))for(var g=0;3>g;g++)f=f.concat(y({x:a.x+.5*a.w+(g-1)*e*2-.5*e,y:a.y+a.h-.5*c-.5*e},d));return f}));var E=function(a,d){a.w||(a.w=b.attach.w*b.s);a.h||(a.h=b.u.h*b.s);a.d||(a.d=b.attach.d*b.s);return[q(a,d),u({x:a.x+.5*a.w-.5*a.d,y:a.y+.5*a.d,d:a.d},d),u({x:a.x+.5*a.w-.5*a.d,y:a.y+a.h-1.5*a.d,d:a.d},
d)]},I=function(a,d){a.w||(a.w=b.hdd.w*b.s);a.h||(a.h=.5*b.u.h*b.s);return[n(a,d,lucid.color.darken(d.FillColor,.3)),n({x:a.x,w:a.w,y:a.y,h:a.h,dx1:.187,dx2:.814,dy1:.281,dy2:.717},d,"#000000"),u({x:a.x+.187*a.w-.218*a.h,y:a.y+.281*a.h,d:.436*a.h},d,"#000000"),u({x:a.x+.814*a.w-.218*a.h,y:a.y+.281*a.h,d:.436*a.h},d,"#000000")]},y=function(a,d){a.d||(a.d=b.led.d*b.s);return[u({x:a.x,y:a.y,d:a.d},{FillColor:"#00ff00",LineColor:d.LineColor,LineWidth:d.LineWidth})]},B=function(a,d){a.w||(a.w=b.port.w*
b.s);a.h||(a.h=a.w);return[q(a,d),n({x:a.x,y:a.y,w:a.w,h:a.h,dx1:2/9,dx2:7/9,dy1:3/9,dy2:7/9},{FillColor:"#000000"}),n({x:a.x,y:a.y,w:a.w,h:a.h,dx1:3/9,dx2:6/9,dy1:3/9,dy2:2/9},{FillColor:"#000000"}),n({x:a.x,y:a.y,w:a.w,h:a.h,dx1:3/9,dx2:6/9,dy1:6/9,dy2:5/9},{FillColor:"#ffff00"})]},J=function(a,d){a.w||(a.w=b.plug.w*b.s);a.h||(a.h=b.plug.h*b.s);return[{FillColor:lucid.color.lighten(d.FillColor,.3),StrokeColor:d.LineColor,LineWidth:d.LineWidth,NoRounding:!0,Actions:[w({x:a.x+1*a.w/9,y:a.y}),t({x:a.x+
8*a.w/9,y:a.y}),z({x:a.x+7*a.w/9,y:a.y,w:2*a.w/9,h:a.h,s:1.5,f:2.5}),t({x:a.x+1*a.w/9,y:a.y+a.h}),z({x:a.x,y:a.y,w:2*a.w/9,h:a.h,s:.5,f:1.5}),A()]},n({x:a.x+5*a.w/18,y:a.y+1*a.h/7,w:1*a.w/9,h:5*a.h/14},{FillColor:"#000000"}),n({x:a.x+11*a.w/18,y:a.y+1*a.h/7,w:1*a.w/9,h:5*a.h/14},{FillColor:"#000000"}),{FillColor:"#000000",StrokeColor:d.LineColor,LineWidth:d.LineWidth,noRounding:!0,Actions:[w({x:a.x+7*a.w/18,y:a.y+6*a.h/7}),z({x:a.x+7*a.w/18,y:a.y+9*a.h/14,w:4*a.w/18,h:3*a.h/7,s:1,f:2})]}]},K=function(a,
d){a.d||(a.d=b.fan.d*b.s);var c={FillColor:null,LineColor:"#bbbbbb",LineWidth:1};return[u({x:a.x,y:a.y,d:a.d},{FillColor:"#000000",LineWidth:0}),u({x:a.x+a.d/8,y:a.y+a.d/8,d:3*a.d/4},c),u({x:a.x+a.d/3,y:a.y+a.d/3,d:a.d/3},c),{FillColor:c.LineColor,StrokeColor:c.LineColor,LineWidth:1,Actions:[w({x:a.x+a.d*(.5-Math.SQRT1_2/2),y:a.y+a.d*(.5-Math.SQRT1_2/2)}),t({x:a.x+a.d*(.5+Math.SQRT1_2/2),y:a.y+a.d*(.5+Math.SQRT1_2/2)}),w({x:a.x+a.d*(.5-Math.SQRT1_2/2),y:a.y+a.d*(.5+Math.SQRT1_2/2)}),t({x:a.x+a.d*
(.5+Math.SQRT1_2/2),y:a.y+a.d*(.5-Math.SQRT1_2/2)})]}]};lucid.plugin.createToolGroups({"Server Racks":"RackServerRack RackBlank RackRaidArray RackServer RackEthernetSwitch RackPatchPanel RackRouter RackMonitor RackKeyboard RackPowerStrip RackPowerSupply RackBridge RackTapeDrive".split(" ")})})();
//# sourceMappingURL=/js/plugins/v2/source-maps/serverrack.js.map
};