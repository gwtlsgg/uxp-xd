(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[7760],{40947:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var n=a(22122),i=a(19756),o=(a(15007),a(64983)),p=a(99536),s={},r={_frontmatter:s},d=p.Z;function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.mdx)(d,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"edit-context-rules"},"Edit context rules"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("strong",{parentName:"p"},"edit context"),' is the scope within which your plugin is allowed to make edits or set the selection. It is a "neighborhood"\nof scenegraph nodes around the user\'s current selection. To access the contents of many container nodes such as RepeatGrids or\nSymbolInstances, the user must first drill down into the container by double clicking or Cmd-clicking it (Ctrl-clicking on Windows).'),(0,o.mdx)("p",null,"Like nearly all commands in XD, your plugin is limited to making changes only within the scope of the current edit context."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Note: these rules have changed in ",(0,o.mdx)("strong",{parentName:"em"},"XD 17"),". If you intend to support XD 16 or earlier, follow the more restrictive edit context rules\ndescribed in ",(0,o.mdx)("a",{parentName:"em",href:"https://github.com/AdobeXD/plugin-docs/blob/XD16/reference/core/edit-context/"},"the previous version of these docs"),".")),(0,o.mdx)("p",null,"The current edit context's scope is derived from the current selection:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("strong",{parentName:"p"},'"edit context root"')," is the node which is the closest common ancestor of all the selected nodes. It's typically indicated\nby a ",(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"302px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.609271523178805%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/8f500faaa5e9d181a6b994862525d2ae/65556/edit-context-outline.webp 302w"],sizes:"(max-width: 302px) 100vw, 302px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/8f500faaa5e9d181a6b994862525d2ae/5f1d2/edit-context-outline.png 302w"],sizes:"(max-width: 302px) 100vw, 302px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/8f500faaa5e9d181a6b994862525d2ae/5f1d2/edit-context-outline.png",alt:"soft blue outline",title:"soft blue outline",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")," in the UI:"),(0,o.mdx)("p",{parentName:"li"},"As a special case, if the edit context root would be an Artboard, it is moved up to the root of the entire scenegraph instead.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},'Nodes within this subtree are "in scope" for editing (or selection) ',(0,o.mdx)("em",{parentName:"p"},"if"),' they are connected to the edit context root by a parent\nchain consisting entirely of plain Groups or Artboards. (A "plain Group" is a Group node with no ',(0,o.mdx)("a",{parentName:"p",href:"../scenegraph/#Group-mask"},"mask"),").")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"You can always safely assume that all selected nodes are in scope for editing."))),(0,o.mdx)("h3",{id:"examples"},"Examples"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},(0,o.mdx)("strong",{parentName:"em"},"Scenario 1:"))," The user has selected two items inside a Group."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"487px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/1812b3c970ddcc4d1a04d0cf5aabcc09/cb523/edit-context-example1-simple.webp 320w","/uxp-xd/static/1812b3c970ddcc4d1a04d0cf5aabcc09/63bf9/edit-context-example1-simple.webp 487w"],sizes:"(max-width: 487px) 100vw, 487px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/1812b3c970ddcc4d1a04d0cf5aabcc09/72799/edit-context-example1-simple.png 320w","/uxp-xd/static/1812b3c970ddcc4d1a04d0cf5aabcc09/7b439/edit-context-example1-simple.png 487w"],sizes:"(max-width: 487px) 100vw, 487px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/1812b3c970ddcc4d1a04d0cf5aabcc09/7b439/edit-context-example1-simple.png",alt:"edit context with items in Group selected",title:"edit context with items in Group selected",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"The Group is the edit context root, and all its children are within scope for editing. In addition, if any of those children are nested\nGroups, their children are also in scope for editing (recursively, if any of those are Groups too)."),(0,o.mdx)("p",null,"If any of the children are a different container type, however, the edit scope does not include that node's children:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"487px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/fe231ef9cf5fe304855511e13ed5ff7d/cb523/edit-context-example1-special.webp 320w","/uxp-xd/static/fe231ef9cf5fe304855511e13ed5ff7d/63bf9/edit-context-example1-special.webp 487w"],sizes:"(max-width: 487px) 100vw, 487px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/fe231ef9cf5fe304855511e13ed5ff7d/72799/edit-context-example1-special.png 320w","/uxp-xd/static/fe231ef9cf5fe304855511e13ed5ff7d/7b439/edit-context-example1-special.png 487w"],sizes:"(max-width: 487px) 100vw, 487px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/fe231ef9cf5fe304855511e13ed5ff7d/7b439/edit-context-example1-special.png",alt:"edit context containing special container types",title:"edit context containing special container types",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},(0,o.mdx)("strong",{parentName:"em"},"Scenario 2:"))," The user has selected two items, each inside different Groups."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"487px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/0bfae2a3cf9fb4f8a79c524414df63c6/cb523/edit-context-example2.webp 320w","/uxp-xd/static/0bfae2a3cf9fb4f8a79c524414df63c6/63bf9/edit-context-example2.webp 487w"],sizes:"(max-width: 487px) 100vw, 487px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/0bfae2a3cf9fb4f8a79c524414df63c6/72799/edit-context-example2.png 320w","/uxp-xd/static/0bfae2a3cf9fb4f8a79c524414df63c6/7b439/edit-context-example2.png 487w"],sizes:"(max-width: 487px) 100vw, 487px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/0bfae2a3cf9fb4f8a79c524414df63c6/7b439/edit-context-example2.png",alt:"edit context with items in different Groups selected",title:"edit context with items in different Groups selected",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"The edit context root is Group 1, the closest common ancestor of the selected items. In this case, all nodes in the subtree of Group 1 are\nin scope for editing, but if this subtree contained any non-Group containers, their children would be off limits (as in the second example\nin Scenario 1)."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},(0,o.mdx)("strong",{parentName:"em"},"Scenario 3:"))," The user has selected one item that is an immediate child of an Artboard."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"769px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/87e9282ef4106ec0155a66a8be9a9b7b/cb523/edit-context-example3.webp 320w","/uxp-xd/static/87e9282ef4106ec0155a66a8be9a9b7b/797b9/edit-context-example3.webp 640w","/uxp-xd/static/87e9282ef4106ec0155a66a8be9a9b7b/89234/edit-context-example3.webp 769w"],sizes:"(max-width: 769px) 100vw, 769px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/87e9282ef4106ec0155a66a8be9a9b7b/72799/edit-context-example3.png 320w","/uxp-xd/static/87e9282ef4106ec0155a66a8be9a9b7b/6af66/edit-context-example3.png 640w","/uxp-xd/static/87e9282ef4106ec0155a66a8be9a9b7b/227ba/edit-context-example3.png 769w"],sizes:"(max-width: 769px) 100vw, 769px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/87e9282ef4106ec0155a66a8be9a9b7b/227ba/edit-context-example3.png",alt:"edit context with item on Artboard selected",title:"edit context with item on Artboard selected",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Per the special case noted above, the edit context root is the root of the entire document (the scenegraph's RootNode). This is true\nany time the user hasn't drilled into a particular container. The editable scope encompasses -- at ",(0,o.mdx)("em",{parentName:"p"},"minumum")," -- all Artboards, all\nother immediate children of the root node (aka the pasteboard), and all immediate children of ",(0,o.mdx)("em",{parentName:"p"},"all")," artboards (not just the one\ncontaining the selection). If any of those nodes is a plain Group, its children are also in scope for editing (recursively, if any\nof those are Groups too)."),(0,o.mdx)("h3",{id:"what-changes-are-allowed-within-the-edit-context"},"What changes are allowed within the edit context?"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Simple changes")," can be made directly to the scenegraph nodes that are in scope:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Change a property"),(0,o.mdx)("li",{parentName:"ul"},"Delete a node"),(0,o.mdx)("li",{parentName:"ul"},"Add a new ",(0,o.mdx)("em",{parentName:"li"},"leaf node")," (basic shape node)")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Structural changes")," ",(0,o.mdx)("em",{parentName:"p"},"cannot")," be made directly, since their impact extends to nodes outside the edit context's scope. You can make\nstructural changes by scripting XD commands:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Ungroup (or break apart other container types) - use the ",(0,o.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/reference/commands/#module_commands-ungroup"},(0,o.mdx)("inlineCode",{parentName:"a"},"ungroup()")," command")),(0,o.mdx)("li",{parentName:"ul"},"Create new Groups (add a whole ",(0,o.mdx)("em",{parentName:"li"},"tree")," of new nodes) - use the ",(0,o.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/reference/commands/#module_commands-group"},(0,o.mdx)("inlineCode",{parentName:"a"},"group()")," command")),(0,o.mdx)("li",{parentName:"ul"},"Rearrange Z order - use commands such as ",(0,o.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/reference/commands/#module_commands-bringToFront"},(0,o.mdx)("inlineCode",{parentName:"a"},"bringToFront()")))),(0,o.mdx)("p",null,"If a plugin breaks any of these rules, its entire edit operation will be reverted to protect the user's document from corruption."),(0,o.mdx)("h3",{id:"exceptions-to-these-rules"},"Exceptions to these rules"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"You can set ",(0,o.mdx)("a",{parentName:"li",href:"../scenegraph/#SceneNode-pluginData"},(0,o.mdx)("inlineCode",{parentName:"a"},"pluginData"))," on the root node of the scenegraph regardless of the current edit\ncontext, making it useful for storing plugin settings that are document-specific."),(0,o.mdx)("li",{parentName:"ul"},"The RepeatGrid APIs ",(0,o.mdx)("a",{parentName:"li",href:"../scenegraph/#RepeatGrid-attachTextDataSeries"},(0,o.mdx)("inlineCode",{parentName:"a"},"attachTextDataSeries()"))," and ",(0,o.mdx)("a",{parentName:"li",href:"../scenegraph/#RepeatGrid-attachImageDataSeries"},(0,o.mdx)("inlineCode",{parentName:"a"},"attachImageDataSeries()"))," can be called when ",(0,o.mdx)("em",{parentName:"li"},"either")," the RepeatGrid node ",(0,o.mdx)("em",{parentName:"li"},"or")," the target node being\nattached to is in the current edit context.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-xd-concepts-edit-context-md-b1eb9c1e11f640466a62.js.map