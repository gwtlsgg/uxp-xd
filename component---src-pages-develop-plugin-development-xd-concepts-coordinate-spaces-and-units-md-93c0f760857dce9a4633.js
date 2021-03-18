(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[34613],{87003:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return c}});var n=t(22122),i=t(19756),s=(t(15007),t(64983)),p=t(99536),o={},d={_frontmatter:o},r=p.Z;function c(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,s.mdx)(r,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"coordinate-spaces--units"},"Coordinate spaces & units"),(0,s.mdx)("p",null,'Sizes and distances in XD are specified in DPI-independent pixels, equivalent to pixels on a 1x display. This is similar to the "CSS\npixels" used in web design.'),(0,s.mdx)("p",null,"Each layer of the scenegraph tree can apply a ",(0,s.mdx)("em",{parentName:"p"},"transform")," (rotation and/or translation), creating a hierarchy of nested ",(0,s.mdx)("em",{parentName:"p"},"coordinate\nspaces"),". Due to rotation, the X and Y axes of different coordinate spaces might point in different directions. Take the example of\na rotated rectangle that is inside an artboard:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1150px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/60671b246263f660dd2c94a6b437e4b9/cb523/coordSpaces.webp 320w","/uxp-xd/static/60671b246263f660dd2c94a6b437e4b9/797b9/coordSpaces.webp 640w","/uxp-xd/static/60671b246263f660dd2c94a6b437e4b9/e0a21/coordSpaces.webp 1150w"],sizes:"(max-width: 1150px) 100vw, 1150px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/60671b246263f660dd2c94a6b437e4b9/72799/coordSpaces.png 320w","/uxp-xd/static/60671b246263f660dd2c94a6b437e4b9/6af66/coordSpaces.png 640w","/uxp-xd/static/60671b246263f660dd2c94a6b437e4b9/33d1d/coordSpaces.png 1150w"],sizes:"(max-width: 1150px) 100vw, 1150px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/60671b246263f660dd2c94a6b437e4b9/33d1d/coordSpaces.png",alt:"diagram of coordinate spaces",title:"diagram of coordinate spaces",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"The top-left corner of a node is not always located at (0,0) in its own local coordinate space. Use ",(0,s.mdx)("a",{parentName:"p",href:"../scenegraph/#SceneNode-localBounds"},(0,s.mdx)("inlineCode",{parentName:"a"},"localBounds")),"\nto get the true top-left of a node. For example, the baseline of a ",(0,s.mdx)("a",{parentName:"p",href:"../scenegraph/#Text"},"Point Text node")," is at Y=0 in its local coordinates, so its\nupper-left corner is at a negative Y value. Similarly, centered or right-aligned text will start at a negative X value in local coordinates."),(0,s.mdx)("p",null,"Here are some examples of nodes where the local origin is not the node's visual top-left corner:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"866px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/933fb576e480470c8eaa2d164fac99c6/cb523/localOrigin.webp 320w","/uxp-xd/static/933fb576e480470c8eaa2d164fac99c6/797b9/localOrigin.webp 640w","/uxp-xd/static/933fb576e480470c8eaa2d164fac99c6/f1046/localOrigin.webp 866w"],sizes:"(max-width: 866px) 100vw, 866px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/933fb576e480470c8eaa2d164fac99c6/72799/localOrigin.png 320w","/uxp-xd/static/933fb576e480470c8eaa2d164fac99c6/6af66/localOrigin.png 640w","/uxp-xd/static/933fb576e480470c8eaa2d164fac99c6/c1328/localOrigin.png 866w"],sizes:"(max-width: 866px) 100vw, 866px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/933fb576e480470c8eaa2d164fac99c6/c1328/localOrigin.png",alt:"examples of localBounds origin",title:"examples of localBounds origin",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Typically, when discussing the bounds of a node we are referring to the bounds of its ",(0,s.mdx)("em",{parentName:"p"},"path outline")," ","–",' the hairline "spine" that its fill\nfits within and that the thickness of its stroke is anchored to. Nodes may have visible pixels that extend ',(0,s.mdx)("em",{parentName:"p"},"outside"),' the path outline bounds.\nFor example, a center or outside stroke protrudes beyond the path outline, as does the dropshadow and parts of the "Object Blur" effect:'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"974px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.687500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/0627ff51fadea05da1d15d8845367ebe/cb523/pathBounds.webp 320w","/uxp-xd/static/0627ff51fadea05da1d15d8845367ebe/797b9/pathBounds.webp 640w","/uxp-xd/static/0627ff51fadea05da1d15d8845367ebe/c8839/pathBounds.webp 974w"],sizes:"(max-width: 974px) 100vw, 974px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/0627ff51fadea05da1d15d8845367ebe/72799/pathBounds.png 320w","/uxp-xd/static/0627ff51fadea05da1d15d8845367ebe/6af66/pathBounds.png 640w","/uxp-xd/static/0627ff51fadea05da1d15d8845367ebe/09e48/pathBounds.png 974w"],sizes:"(max-width: 974px) 100vw, 974px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/0627ff51fadea05da1d15d8845367ebe/09e48/pathBounds.png",alt:"examples of path bounds vs. draw bounds",title:"examples of path bounds vs. draw bounds",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"If you need a bounding box that encompasses ",(0,s.mdx)("em",{parentName:"p"},"all")," visible pixels of an object, use ",(0,s.mdx)("a",{parentName:"p",href:"../scenegraph/#SceneNode-globalDrawBounds"},(0,s.mdx)("inlineCode",{parentName:"a"},"globalDrawBounds")),".\nThe draw bounds are the bounds used when exporting a bitmap image, for example. However, in most other cases (including align/snapping), XD uses the\npath outline bounds."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-xd-concepts-coordinate-spaces-and-units-md-93c0f760857dce9a4633.js.map