import{_ as s,c as o,E as r,B as d,z as t,a as e,O as n,G as c,o as i}from"./chunks/framework.347a35cb.js";const B=JSON.parse('{"title":"Toast","description":"","frontmatter":{"title":"Toast"},"headers":[],"relativePath":"components/toast.md"}'),l={name:"components/toast.md"},_=t("h1",{id:"toast-吐司",tabindex:"-1"},[e("Toast 吐司 "),t("a",{class:"header-anchor",href:"#toast-吐司","aria-label":'Permalink to "Toast 吐司"'},"​")],-1),h=t("p",null,"用吐司来代替无聊的警报",-1),p=t("p",null,"功能: 显示提示文字,自定义自动消失的时间,单位为毫秒。",-1),m=t("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),D=t("p",null,"toast/basic",-1),u=n('<h2 id="toast属性" tabindex="-1">Toast属性 <a class="header-anchor" href="#toast属性" aria-label="Permalink to &quot;Toast属性&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td>string</td><td>-</td></tr><tr><td>type</td><td>消息类型</td><td>&#39;normal&#39; / &#39;success&#39; / &#39;warning&#39; / &#39;info&#39; /&#39;error&#39;</td><td>normal</td></tr><tr><td>duration</td><td>显示时间</td><td>number</td><td>2000</td></tr></tbody></table>',2);function A(b,T,f,C,E,g){const a=c("Demo");return i(),o("div",null,[_,h,p,m,r(a,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cel-button%20%40click%3D%22open%22%3Eshow%20message%3C%2Fel-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20UToast%20%7D%20from%20'undraw-ui'%0D%0A%0D%0Aconst%20open%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20UToast(%7B%20message%3A%20'this%20is%20a%20message.'%2C%20type%3A%20'info'%20%7D)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%3C%2Fstyle%3E%0D%0A",path:"toast/basic",description:""},{default:d(()=>[D]),_:1}),u])}const k=s(l,[["render",A]]);export{B as __pageData,k as default};
