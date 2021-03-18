(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[14623],{67071:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return d}});var a=t(22122),l=t(19756),p=(t(15007),t(64983)),i=t(99536),o={},r={_frontmatter:o},s=i.Z;function d(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,p.mdx)(s,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"panel"},"Panel"),(0,p.mdx)("p",null,"A panel is used to display information and options that are persistent and can be shown without blocking user interactions with the active document."),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"452px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"193.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/3909210c9a9ca0fd9bd98b9b7e50c75b/cb523/panel.webp 320w","/uxp-xd/static/3909210c9a9ca0fd9bd98b9b7e50c75b/7acc5/panel.webp 452w"],sizes:"(max-width: 452px) 100vw, 452px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/3909210c9a9ca0fd9bd98b9b7e50c75b/72799/panel.png 320w","/uxp-xd/static/3909210c9a9ca0fd9bd98b9b7e50c75b/fcb94/panel.png 452w"],sizes:"(max-width: 452px) 100vw, 452px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/3909210c9a9ca0fd9bd98b9b7e50c75b/fcb94/panel.png",alt:"Example of a panel",title:"Example of a panel",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"Panels appear on the left-hand side of the app when user clicks on the Plugins icon at the bottom-left side. Panels do not prevent user interaction with the underlying document and can listen for the user's selection changes. Panels are dismissed in any one of the following manners:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},'The user clicks on the "back arrow" button at the top of XD\'s Plugins panel'),(0,p.mdx)("li",{parentName:"ul"},"The user clicks on one of the other options for the left hand side of the app, such as the Layers panel or Assets panel"),(0,p.mdx)("li",{parentName:"ul"},"The user runs a different plugin from the ",(0,p.mdx)("em",{parentName:"li"},"Plugins")," menu")),(0,p.mdx)("h2",{id:"usage"},"Usage"),(0,p.mdx)("p",null,"Building the user interface for panels is very similar to modals. Refer to ",(0,p.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/ui/dialogs/#usage"},"Modal dialog usage"),"."),(0,p.mdx)("h2",{id:"building-panels"},"Building Panels"),(0,p.mdx)("p",null,"You can build panels using any method that creates an HTML5 DOM structure. This means you can use ",(0,p.mdx)("inlineCode",{parentName:"p"},"document.createElement"),", ",(0,p.mdx)("inlineCode",{parentName:"p"},"innerHTML"),", jQuery, React, and other frameworks."),(0,p.mdx)("p",null,"Let's examine a simple panel and how we might create it:"),(0,p.mdx)("p",null,'{% tabs sample="Sample", html="HTML", js="JS" %}'),(0,p.mdx)("p",null,'{% content "sample" %}'),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"502px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/cc5ff6086dde74ae20300eb231bffc9b/cb523/panel-example.webp 320w","/uxp-xd/static/cc5ff6086dde74ae20300eb231bffc9b/ac76f/panel-example.webp 502w"],sizes:"(max-width: 502px) 100vw, 502px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/cc5ff6086dde74ae20300eb231bffc9b/72799/panel-example.png 320w","/uxp-xd/static/cc5ff6086dde74ae20300eb231bffc9b/eea79/panel-example.png 502w"],sizes:"(max-width: 502px) 100vw, 502px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/cc5ff6086dde74ae20300eb231bffc9b/eea79/panel-example.png",alt:"A Simple panel",title:"A Simple panel",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,'{% content "html" %}'),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-html"},'<style>\n  .break {\n    flex-wrap: wrap;\n  }\n  label.row > * {\n    margin: 3px 0;\n  }\n  label.row > span {\n    color: #8e8e8e;\n    width: 20px;\n    text-align: right;\n    font-size: 9px;\n  }\n  label.row input {\n    flex: 1 1 auto;\n  }\n  label.row input[type="number"] {\n    flex-basis: 32px;\n  }\n  div input[type="checkbox"] {\n    flex: 0 0 20px;\n  }\n  form footer > * {\n    position: relative;\n    left: 8px;\n  }\n</style>\n<form method="dialog" id="main">\n  <label class="row" id="fldButtonText">\n    <span>Aa</span>\n    <input\n      type="text"\n      id="txtButtonText"\n      value="Text"\n      placeholder="Text"\n      uxp-quiet="true"\n    />\n  </label>\n  <div class="row break">\n    <label class="row">\n      <span>↕︎</span>\n      <input\n        type="number"\n        uxp-quiet="true"\n        id="txtV"\n        value="10"\n        placeholder="Vertical padding"\n      />\n    </label>\n    <label class="row">\n      <span>↔︎</span>\n      <input\n        type="number"\n        uxp-quiet="true"\n        id="txtH"\n        value="10"\n        placeholder="Horizontal padding"\n      />\n    </label>\n    <div class="row">\n      <input type="checkbox" checked id="chkColor" />\n      <label class="row" id="fldColor">\n        <input\n          type="text"\n          uxp-quiet="true"\n          id="txtColor"\n          value="#0000FF"\n          placeholder="CSS Color"\n        />\n        <span>🎨</span>\n      </label>\n    </div>\n  </div>\n  <footer>\n    <button id="ok" type="submit" uxp-variant="cta">Apply</button>\n  </footer>\n</form>\n')),(0,p.mdx)("p",null,'{% content "js" %}'),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},'let panel;\n\nfunction create() {\n  const HTML = `<style>\n            .break {\n                flex-wrap: wrap;\n            }\n            label.row > * {\n                margin: 3px 0;\n            }\n            label.row > span {\n                color: #8E8E8E;\n                width: 20px;\n                text-align: right;\n                font-size: 9px;\n            }\n            label.row input {\n                flex: 1 1 auto;\n            }\n            label.row input[type=number] {\n                flex-basis: 32px;\n            }\n            div input[type=checkbox] {\n                flex: 0 0 20px;\n            }\n            form footer > * {\n                position: relative;\n                left: 8px;\n            }\n        </style>\n        <form method="dialog" id="main">\n        <label class="row" id="fldButtonText">\n            <span>Aa</span>\n            <input type="text" id="txtButtonText" value="Text" placeholder="Text" uxp-quiet="true"/>\n        </label>\n        <div class="row break">\n            <label class="row">\n            <span>↕︎</span>\n            <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Vertical padding" />\n            </label>\n            <label class="row">\n            <span>↔︎</span>\n            <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Horizontal padding" />\n            </label>\n            <div class="row">\n            <input type="checkbox" checked id="chkColor" />\n            <label class="row" id="fldColor">\n                <input type="text" uxp-quiet="true" id="txtColor" value="#0000FF" placeholder="CSS Color" />\n                <span>🎨</span>\n            </label>\n            </div>\n        </div>\n        <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>\n        </form>\n        `;\n\n  panel = document.createElement("div");\n  panel.innerHTML = HTML;\n\n  return panel;\n}\n\nfunction show(event) {\n  // create panel the first time it\'s shown\n  if (!panel) {\n    panel = create();\n    event.node.appendChild(panel);\n  }\n}\n\nfunction hide(event) {\n  // in this example, we don\'t need to do anything when XD hides our panel\n}\n\nfunction update(selection, root) {\n  console.log(selection.items);\n}\n\nmodule.exports = {\n  panels: {\n    example: {\n      show,\n      hide,\n      update,\n    },\n  },\n};\n')),(0,p.mdx)("p",null,"{% endtabs %}"),(0,p.mdx)("p",null,"Note: you can either reuse your panel's UI nodes, or destroy and recreate the panel each time it's closed. For examples of both approaches, see the ",(0,p.mdx)("a",{parentName:"p",href:"./show/"},"detailed documentation on the ",(0,p.mdx)("inlineCode",{parentName:"a"},"show()")," method"),"."),(0,p.mdx)("h2",{id:"handling-selection-change"},"Handling Selection Change"),(0,p.mdx)("p",null,"As you can see in the example above, every time the user's ",(0,p.mdx)("inlineCode",{parentName:"p"},"selection")," changes, your (optional) lifecycle method ",(0,p.mdx)("inlineCode",{parentName:"p"},"update")," will trigger. You will have access to both ",(0,p.mdx)("inlineCode",{parentName:"p"},"selection")," and ",(0,p.mdx)("inlineCode",{parentName:"p"},"root")," as parameters in the function. This means that your panel can display dynamic content based on what user has selected in the document."),(0,p.mdx)("p",null,'{% tabs sampleselection="Sample", htmlselection="HTML", jsselection="JS" %}'),(0,p.mdx)("p",null,'{% content "sampleselection" %}'),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/06951050670fe1493b231d4258d1d6a5/cb523/error.webp 320w","/uxp-xd/static/06951050670fe1493b231d4258d1d6a5/18a9f/error.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/06951050670fe1493b231d4258d1d6a5/72799/error.png 320w","/uxp-xd/static/06951050670fe1493b231d4258d1d6a5/e389b/error.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/06951050670fe1493b231d4258d1d6a5/e389b/error.png",alt:"Error message",title:"Error message",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,'{% content "htmlselection" %}'),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-html"},'<style>\n  .break {\n    flex-wrap: wrap;\n  }\n  label.row > * {\n    margin: 3px 0;\n  }\n  label.row > span {\n    color: #8e8e8e;\n    width: 20px;\n    text-align: right;\n    font-size: 9px;\n  }\n  label.row input {\n    flex: 1 1 auto;\n  }\n  label.row input[type="number"] {\n    flex-basis: 32px;\n  }\n  div input[type="checkbox"] {\n    flex: 0 0 20px;\n  }\n  form footer > * {\n    position: relative;\n    left: 8px;\n  }\n</style>\n<form method="dialog" id="main">\n  <label class="row" id="fldButtonText">\n    <span>Aa</span>\n    <input\n      type="text"\n      id="txtButtonText"\n      value="Text"\n      placeholder="Text"\n      uxp-quiet="true"\n    />\n  </label>\n  <div class="row break">\n    <label class="row">\n      <span>↕︎</span>\n      <input\n        type="number"\n        uxp-quiet="true"\n        id="txtV"\n        value="10"\n        placeholder="Vertical padding"\n      />\n    </label>\n    <label class="row">\n      <span>↔︎</span>\n      <input\n        type="number"\n        uxp-quiet="true"\n        id="txtH"\n        value="10"\n        placeholder="Horizontal padding"\n      />\n    </label>\n    <div class="row">\n      <input type="checkbox" checked id="chkColor" />\n      <label class="row" id="fldColor">\n        <input\n          type="text"\n          uxp-quiet="true"\n          id="txtColor"\n          value="#0000FF"\n          placeholder="CSS Color"\n        />\n        <span>🎨</span>\n      </label>\n    </div>\n  </div>\n  <footer>\n    <button id="ok" type="submit" uxp-variant="cta">Apply</button>\n  </footer>\n</form>\n')),(0,p.mdx)("p",null,'{% content "jsselection" %}'),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-js"},'let panel;\n\nfunction create() {\n  const HTML = `<style>\n            .break {\n                flex-wrap: wrap;\n            }\n            label.row > * {\n                margin: 3px 0;\n            }\n            label.row > span {\n                color: #8E8E8E;\n                width: 20px;\n                text-align: right;\n                font-size: 9px;\n            }\n            label.row input {\n                flex: 1 1 auto;\n            }\n            label.row input[type=number] {\n                flex-basis: 32px;\n            }\n            div input[type=checkbox] {\n                flex: 0 0 20px;\n            }\n            form footer > * {\n                position: relative;\n                left: 8px;\n            }\n\n        </style>\n        <form method="dialog" id="main">\n            <label class="row" id="fldButtonText">\n                <span>Aa</span>\n                <input type="text" id="txtButtonText" value="Text" placeholder="Text" uxp-quiet="true"/>\n            </label>\n            <div class="row break">\n                <label class="row">\n                    <span>↕︎</span>\n                    <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Vertical padding" />\n                </label>\n                <label class="row">\n                    <span>↔︎</span>\n                    <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Horizontal padding" />\n                </label>\n                <div class="row">\n                    <input type="checkbox" checked id="chkColor" />\n                    <label class="row" id="fldColor">\n                        <input type="text" uxp-quiet="true" id="txtColor" value="#0000FF" placeholder="CSS Color" />\n                        <span>🎨</span>\n                    </label>\n                </div>\n            </div>\n            <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>\n        </form>\n        `;\n\n  panel = document.createElement("div");\n  panel.innerHTML = HTML;\n\n  return panel;\n}\n\nfunction show(event) {\n  // create panel the first time it\'s shown\n  if (!panel) {\n    panel = create();\n    event.node.appendChild(panel);\n  }\n}\n\nfunction hide(event) {\n  // in this example, we don\'t need to do anything when XD hides our panel\n}\n\nfunction update(selection, root) {\n  const { Text } = require("scenegraph");\n  if (!(selection.items[0] instanceof Text)) {\n    panel.innerHTML = `<p>Please select a text object.</p>`;\n  }\n}\n\nmodule.exports = {\n  panels: {\n    example: {\n      show,\n      hide,\n      update,\n    },\n  },\n};\n')),(0,p.mdx)("p",null,"{% endtabs %}"),(0,p.mdx)("h2",{id:"further-reading"},"Further Reading"),(0,p.mdx)("p",null,"Refer to the panel lifecycle method documentation to learn more about these methods:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"./show/"},"Show")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"./hide/"},"Hide")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"./update/"},"Update"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-ui-panels-index-md-1fb2299c494993a8a46f.js.map