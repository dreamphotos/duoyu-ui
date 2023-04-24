import{_ as e,c as o,E as n,B as r,z as a,a as s,O as E,G as A,o as c}from"./chunks/framework.347a35cb.js";const u=JSON.parse('{"title":"Search","description":"","frontmatter":{"title":"Search"},"headers":[],"relativePath":"components/search.md"}'),l={name:"components/search.md"},p=a("h1",{id:"search-搜索",tabindex:"-1"},[s("Search 搜索 "),a("a",{class:"header-anchor",href:"#search-搜索","aria-label":'Permalink to "Search 搜索"'},"​")],-1),D=a("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),i=a("p",null,"search/basic",-1),B=E(`<h2 id="search-属性" tabindex="-1">Search 属性 <a class="header-anchor" href="#search-属性" aria-label="Permalink to &quot;Search 属性&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>config</td><td>搜索配置</td><td>SearchConfig</td><td>-</td></tr><tr><td>submit</td><td>搜索提交事件</td><td>(val: string) =&gt; void</td><td>-</td></tr></tbody></table><h2 id="接口类型" tabindex="-1">接口类型 <a class="header-anchor" href="#接口类型" aria-label="Permalink to &quot;接口类型&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SearchConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">keywords</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hotSearchList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,4);function C(h,d,F,_,m,y){const t=A("Demo");return c(),o("div",null,[p,D,n(t,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cu-search%20%3Aconfig%3D%22config%22%20style%3D%22margin-left%3A%2020px%22%20%40submit%3D%22submit%22%3E%3C%2Fu-search%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20SearchConfig%20%7D%20from%20'undraw-ui'%0D%0A%0D%0Aconst%20config%20%3D%20ref%3CSearchConfig%3E(%7B%0D%0A%20%20keywords%3A%20%5B'%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86'%2C%20'%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9'%2C%20'%E5%90%9E%E5%99%AC%E6%98%9F%E7%A9%BA'%2C%20'%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0'%2C%20'%E4%B8%80%E5%BF%B5%E6%B0%B8%E6%81%92'%5D%2C%20%2F%2F%20%E6%90%9C%E7%B4%A2%E6%A1%86%E5%85%B3%E9%94%AE%E5%AD%97%E6%BB%9A%E5%8A%A8%0D%0A%20%20hotSearchList%3A%20%5B%0D%0A%20%20%20%20'%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86'%2C%0D%0A%20%20%20%20'%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9'%2C%0D%0A%20%20%20%20'%E5%90%9E%E5%99%AC%E6%98%9F%E7%A9%BA'%2C%0D%0A%20%20%20%20'%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0'%2C%0D%0A%20%20%20%20'%E4%B8%80%E5%BF%B5%E6%B0%B8%E6%81%92'%2C%0D%0A%20%20%20%20'%E5%AE%8C%E7%BE%8E%E4%B8%96%E7%95%8C'%2C%0D%0A%20%20%20%20'%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83'%2C%0D%0A%20%20%20%20'%E9%97%B4%E8%B0%8D%E8%BF%87%E5%AE%B6%E5%AE%B6'%2C%0D%0A%20%20%20%20'%E6%AD%A6%E5%8A%A8%E4%B9%BE%E5%9D%A4'%2C%0D%0A%20%20%20%20'%E7%A5%9E%E5%8D%B0%E7%8E%8B%E5%BA%A7'%0D%0A%20%20%5D%20%2F%2F%20top10%20%E7%83%AD%E9%97%A8%E6%90%9C%E7%B4%A2%20%E6%9C%80%E5%A4%9A%E6%98%BE%E7%A4%BA10%E6%9D%A1%E6%95%B0%E6%8D%AE%0D%0A%7D)%0D%0A%0D%0Aconst%20submit%20%3D%20(val%3A%20string)%20%3D%3E%20%7B%0D%0A%20%20console.log(val)%0D%0A%20%20window.open('%2Fall%3Fkeyword%3D'%20%2B%20val)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%3C%2Fstyle%3E%0D%0A",path:"search/basic",description:""},{default:r(()=>[i]),_:1}),B])}const g=e(l,[["render",C]]);export{u as __pageData,g as default};
