(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[96850],{96840:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return r}});var a=t(22122),l=t(19756),o=(t(15007),t(64983)),i=t(99536),s={},m={_frontmatter:s},d=i.Z;function r(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,o.mdx)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"dialog-dismissal"},"Dialog Dismissal"),(0,o.mdx)("p",null,"Dialogs can be dismissed in the following ways:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Manually, by the user pressing the ESC key"),(0,o.mdx)("li",{parentName:"ul"},"Programmatically, by calling ",(0,o.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/reference/uxp/class/HTMLDialogElement/#htmldialogelement-close"},(0,o.mdx)("inlineCode",{parentName:"a"},"HTMLDialogElement#close"))," with an optional return value.")),(0,o.mdx)("p",null,"You can listen for the ",(0,o.mdx)("em",{parentName:"p"},"default")," gesture (typically ","[ENTER]",") by registering for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"submit")," event on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"form"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'function onsubmit(e) {\n  dialog.close("ok");\n  e.preventDefault();\n}\nform.onsubmit = onsubmit;\n')),(0,o.mdx)("p",null,"You should also register a ",(0,o.mdx)("inlineCode",{parentName:"p"},"click"),' handler for your "OK" and "Cancel" buttons:'),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const cancelButton = document.querySelector("#cancel");\ncancelButton.addEventListener("click", () => dialog.close("reasonCanceled"));\n\nconst okButton = document.querySelector("#ok");\nokButton.addEventListener("click", (e) => {\n  onsubmit();\n  e.preventDefault();\n});\n')),(0,o.mdx)("p",null,"You can listen for the dialog's dismissal using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"close")," event on the dialog:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'dialog.addEventListener("close", () => {\n  // dialog is closed at this point\n});\n')),(0,o.mdx)("h2",{id:"preventing-dialog-dismissal"},"Preventing Dialog Dismissal"),(0,o.mdx)("p",null,"You can, in some cases, prevent a dialog dismissal. If the form calls ",(0,o.mdx)("inlineCode",{parentName:"p"},"preventDefault")," on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"submit")," event, the dialog will fail to dismiss."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("strong",{parentName:"p"},"Tip")),(0,o.mdx)("p",{parentName:"blockquote"},"It is not possible to cancel a dismissal triggered by the ",(0,o.mdx)("strong",{parentName:"p"},"ESC")," gesture.")))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-ui-dialogs-dismissal-md-ffc5494d3d15817527f1.js.map