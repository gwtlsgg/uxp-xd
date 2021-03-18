(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[27553],{2489:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return m}});var a=n(22122),o=n(19756),r=(n(15007),n(64983)),i=n(99536),s={},l={_frontmatter:s},u=i.Z;function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.mdx)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"30-network-io"},"3.0 Network I/O"),(0,r.mdx)("p",null,"Interacting with the network is a useful feature — you can communicate with remote or local servers to transmit data, images, and more. However, this can be an area with a lot of edge cases, error conditions, and more, so it is wise to be diligent with your logic."),(0,r.mdx)("h2",{id:"31-always-use-ssltls-when-communicating-with-remote-endpoints"},"3.1 Always use SSL/TLS when communicating with remote endpoints"),(0,r.mdx)("p",null,"You should never transmit data ",(0,r.mdx)("em",{parentName:"p"},"in the clear.")," This means that your plugin should only ever target ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"wss://")," endpoints."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"(3.1.1) Your plugin must ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("em",{parentName:"strong"},"always"))," use ",(0,r.mdx)("inlineCode",{parentName:"li"},"https")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"wss")," when communicating with remote endpoints.")),(0,r.mdx)("h2",{id:"32-correctly-handle-onlineoffline-and-failure-states"},"3.2 Correctly handle online/offline and failure states"),(0,r.mdx)("p",null,"If your plugin requires network access in order to function, you should be sure that your plugin works correctly if there is no route to your remote endpoint, or if the network is flaky or down for some reason."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"(3.2.1) Network requests must ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("em",{parentName:"strong"},"always"))," have reasonable timeouts in case of network issues."),(0,r.mdx)("li",{parentName:"ul"},"(3.2.2) Your plugin should ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("em",{parentName:"strong"},"never"))," assume that your host is available just because the network appears to be online. The user may be on a network without outside access."),(0,r.mdx)("li",{parentName:"ul"},"(3.2.3) If your plugin requires access to a remote host in order to function, the plugin should ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("em",{parentName:"strong"},"always"))," notify the user upon invocation when there is no route present to the host rather than failing silently."),(0,r.mdx)("li",{parentName:"ul"},"(3.2.4) If a network request fails, your plugin should ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("em",{parentName:"strong"},"always"))," attempt to recover gracefully (perhaps including retrying the attempt). If no recovery is possible, ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("em",{parentName:"strong"},"always"))," inform the user instead of failing silently.")),(0,r.mdx)("h2",{id:"33-handle-long-network-requests"},"3.3 Handle long network requests"),(0,r.mdx)("p",null,"If you expect that your plugin may make a network request that takes a considerable amount of time, don’t leave your user in doubt! Keep them up-to-date with your plugin’s progress, and provide a way to cancel the operation."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"(3.3.1) If a network request may take a considerable amount of time, display a progress UI."),(0,r.mdx)("li",{parentName:"ul"},"(3.3.2) Allow network requests to be cancellable.")),(0,r.mdx)("h2",{id:"39-privacy-implications"},"3.9 Privacy Implications"),(0,r.mdx)("p",null,"Sending the user’s data or analytics information to a remote endpoint has a whole host of privacy implications in today’s world, especially with the recent introduction of GDPR in Europe."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"(3.9.1) If your plugin sends data of any sort to a remote endpoint, your plugin should have a privacy statement. Where this is displayed is up to you (website, plugin’s “about” screen, etc.)"),(0,r.mdx)("li",{parentName:"ul"},"(3.9.2) Plugin analytics should be configurable and ",(0,r.mdx)("em",{parentName:"li"},"opt-in"),".")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-devbestpractices-3-network-io-md-dd35023cd0bc2965523f.js.map