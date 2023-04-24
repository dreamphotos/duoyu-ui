import{_ as e,c as D,E as t,B as a,z as E,a as A,G as o,o as s}from"./chunks/framework.347a35cb.js";const f=JSON.parse('{"title":"Chat","description":"","frontmatter":{"title":"Chat"},"headers":[],"relativePath":"components/chat.md"}'),C={name:"components/chat.md"},c=E("h1",{id:"chat-聊天室",tabindex:"-1"},[A("Chat 聊天室 "),E("a",{class:"header-anchor",href:"#chat-聊天室","aria-label":'Permalink to "Chat 聊天室"'},"​")],-1),F=E("p",null,"数据为主的聊天界面。只需一个标签就可呈现通讯界面。",-1),n=E("h2",{id:"基础用法",tabindex:"-1"},[A("基础用法 "),E("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),r=E("p",null,"chat/basic",-1);function i(d,l,m,h,u,p){const B=o("Demo");return s(),D("div",null,[c,F,n,t(B,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cu-chat%20%3Auser-id%3D%22userId%22%20%3Aemoji%3D%22emoji%22%20%3Adata%3D%22data%22%20%40submit%3D%22submit%22%3E%3C%2Fu-chat%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20onMounted%2C%20reactive%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20ChatApi%2C%20ChatSubmitParam%20%7D%20from%20'undraw-ui'%0D%0A%2F%2F%20%E4%B8%8B%E8%BD%BD%E8%A1%A8%E6%83%85%E5%8C%85%E8%B5%84%E6%BA%90emoji.zip%20https%3A%2F%2Fgitee.com%2Fundraw%2Fundraw-ui%2Freleases%0D%0A%2F%2F%20static%E6%96%87%E4%BB%B6%E6%94%BE%E5%9C%A8public%E4%B8%8B%2C%E5%BC%95%E5%85%A5emoji.ts%E6%96%87%E4%BB%B6%E5%8F%AF%E4%BB%A5%E7%A7%BB%E5%8A%A8%E5%88%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BD%8D%E7%BD%AE%0D%0Aimport%20emoji%20from%20'.%2Femoji'%0D%0A%0D%0Aconst%20userId%20%3D%20ref(1)%0D%0A%0D%0Aconst%20data%20%3D%20reactive%3CChatApi%5B%5D%3E(%5B%0D%0A%20%20%7B%20id%3A%201%2C%20username%3A%20'user'%2C%20avatar%3A%20''%2C%20content%3A%20'adfsdfa'%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20id%3A%202%2C%0D%0A%20%20%20%20username%3A%20'admin'%2C%0D%0A%20%20%20%20avatar%3A%20''%2C%0D%0A%20%20%20%20content%3A%0D%0A%20%20%20%20%20%20'%E6%AF%8F%E6%AC%A1%E5%87%BA%E9%97%A8%E9%83%BD%E5%B8%A6%E6%9C%AC%E4%B9%A6%EF%BC%8C%E6%97%85%E9%80%94%E4%B8%AD%E6%B2%A1%E4%BA%8B%E5%B0%B1%E6%8B%BF%E5%87%BA%E6%9D%A5%E6%99%92%E6%99%92%EF%BC%8C%E5%9C%A8%E7%81%AB%E8%BD%A6%E4%B8%8A%E6%8B%BF%E5%87%BA%E6%9D%A5%E6%94%BE%E7%AA%97%E8%BE%B9%EF%BC%8C%E4%BD%8F%E9%85%92%E5%BA%97%E6%8B%BF%E5%87%BA%E6%9D%A5%E6%94%BE%E5%BA%8A%E5%A4%B4%E3%80%82%E6%97%85%E8%A1%8C%E7%BB%93%E6%9D%9F%EF%BC%8C%E5%9C%A8%E6%89%89%E9%A1%B5%E5%86%99%E4%B8%8A%EF%BC%9A%E6%AD%A4%E4%B9%A6%E6%9B%BE%E7%BB%8F%E5%88%B0%E6%9F%90%E5%9C%B0%E4%B8%80%E6%B8%B8%E3%80%82%E4%B9%B0%E4%BA%86%E4%B9%A6%E5%B0%B1%E8%A6%81%E8%B4%9F%E8%B4%A3%E4%BB%BB%EF%BC%8C%E4%B8%8D%E7%9C%8B%EF%BC%8C%E9%9A%BE%E9%81%93%E8%BF%98%E4%B8%8D%E5%B8%A6%E4%BA%BA%E5%AE%B6%E5%87%BA%E9%97%A8%E6%97%85%E8%A1%8C%E5%90%97%EF%BC%9F'%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20id%3A%202%2C%0D%0A%20%20%20%20username%3A%20'admin'%2C%0D%0A%20%20%20%20avatar%3A%20''%2C%0D%0A%20%20%20%20content%3A%0D%0A%20%20%20%20%20%20'%E6%AF%8F%E6%AC%A1%E5%87%BA%E9%97%A8%E9%83%BD%E5%B8%A6%E6%9C%AC%E4%B9%A6%EF%BC%8C%E6%97%85%E9%80%94%E4%B8%AD%E6%B2%A1%E4%BA%8B%E5%B0%B1%E6%8B%BF%E5%87%BA%E6%9D%A5%E6%99%92%E6%99%92%EF%BC%8C%E5%9C%A8%E7%81%AB%E8%BD%A6%E4%B8%8A%E6%8B%BF%E5%87%BA%E6%9D%A5%E6%94%BE%E7%AA%97%E8%BE%B9%EF%BC%8C%E4%BD%8F%E9%85%92%E5%BA%97%E6%8B%BF%E5%87%BA%E6%9D%A5%E6%94%BE%E5%BA%8A%E5%A4%B4%E3%80%82%E6%97%85%E8%A1%8C%E7%BB%93%E6%9D%9F%EF%BC%8C%E5%9C%A8%E6%89%89%E9%A1%B5%E5%86%99%E4%B8%8A%EF%BC%9A%E6%AD%A4%E4%B9%A6%E6%9B%BE%E7%BB%8F%E5%88%B0%E6%9F%90%E5%9C%B0%E4%B8%80%E6%B8%B8%E3%80%82%E4%B9%B0%E4%BA%86%E4%B9%A6%E5%B0%B1%E8%A6%81%E8%B4%9F%E8%B4%A3%E4%BB%BB%EF%BC%8C%E4%B8%8D%E7%9C%8B%EF%BC%8C%E9%9A%BE%E9%81%93%E8%BF%98%E4%B8%8D%E5%B8%A6%E4%BA%BA%E5%AE%B6%E5%87%BA%E9%97%A8%E6%97%85%E8%A1%8C%E5%90%97%EF%BC%9F'%0D%0A%20%20%7D%0D%0A%5D)%0D%0A%0D%0Aconst%20submit%20%3D%20(%7B%20clear%2C%20content%20%7D%3A%20ChatSubmitParam)%20%3D%3E%20%7B%0D%0A%20%20data.push(%7B%20id%3A%201%2C%20username%3A%20'user'%2C%20avatar%3A%20''%2C%20content%3A%20content%20%7D)%0D%0A%20%20clear()%0D%0A%7D%0D%0A%0D%0Aconst%20address%20%3D%20'ws%3A%2F%2Flocalhost%3A7000%2Fgroupchat'%0D%0A%0D%0Alet%20socket%3A%20WebSocket%0D%0A%0D%0Aconst%20connect%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20if%20(window.WebSocket)%20%7B%0D%0A%20%20%20%20socket%20%3D%20new%20WebSocket(address)%0D%0A%20%20%20%20%2F%2F%E7%9B%B8%E5%BD%93%E4%BA%8EchannelRead0%EF%BC%8Cev%E6%94%B6%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E5%9B%9E%E9%80%81%E7%9A%84%E6%B6%88%E6%81%AF%0D%0A%20%20%20%20socket.onmessage%20%3D%20ev%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20console.log(ev%2C%20ev.data)%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%2F%2F%20%E8%BF%9E%E6%8E%A5%E5%BC%80%E5%90%AF%0D%0A%20%20%20%20socket.onopen%20%3D%20ev%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20console.log('%E8%BF%9E%E6%8E%A5%E5%BC%80%E5%90%AF%E4%BA%86...')%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%2F%2F%20%E6%84%9F%E7%9F%A5%E5%88%B0%E8%BF%9E%E6%8E%A5%E5%85%B3%E9%97%AD%0D%0A%20%20%20%20socket.onclose%20%3D%20ev%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20console.log('%E8%BF%9E%E6%8E%A5%E5%85%B3%E9%97%AD%E4%BA%86...')%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%20else%20%7B%0D%0A%20%20%20%20alert('%E5%BD%93%E5%89%8D%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8D%E6%94%AF%E6%8C%81webSocket')%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Aconst%20send%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20if%20(socket.readyState%20%3D%3D%20WebSocket.OPEN)%20%7B%0D%0A%20%20%20%20%2F%2F%E9%80%9A%E8%BF%87socket%20%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%0D%0A%20%20%20%20socket.send('%E4%BD%A0%E5%A5%BD%E5%91%80!')%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0A%2F%2F%20onMounted(()%20%3D%3E%20%7B%0D%0A%2F%2F%20%20%20connect()%0D%0A%2F%2F%20%7D)%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%3C%2Fstyle%3E%0D%0A",path:"chat/basic",description:""},{default:a(()=>[r]),_:1})])}const b=e(C,[["render",i]]);export{f as __pageData,b as default};
