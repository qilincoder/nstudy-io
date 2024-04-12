import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as i,a as n,b as s,d as e,e as t}from"./app-0RuRy7YQ.js";const c={},u=n("h2",{id:"安装环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装环境"},[n("span",null,"安装环境")])],-1),r=n("blockquote",null,[n("p",null,"ubuntu 20.04 LTS")],-1),k=n("h2",{id:"安装步骤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装步骤"},[n("span",null,"安装步骤")])],-1),d={href:"https://www.jenkins.io/doc/book/installing/linux/#debianubuntu",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Installation of Java</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fontconfig openjdk-17-jre
root@aip-slave-node:~<span class="token comment"># java --version</span>
    openjdk <span class="token number">17.0</span>.8.1 <span class="token number">2023</span>-08-24
    OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.8.1+1-Ubuntu-0ubuntu122.04<span class="token punctuation">)</span>
    OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.8.1+1-Ubuntu-0ubuntu122.04, mixed mode, sharing<span class="token punctuation">)</span>

<span class="token comment"># Long Term Support release jenkins</span>
<span class="token function">sudo</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> /usr/share/keyrings/jenkins-keyring.asc <span class="token punctuation">\\</span>
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
<span class="token builtin class-name">echo</span> deb <span class="token punctuation">[</span>signed-by<span class="token operator">=</span>/usr/share/keyrings/jenkins-keyring.asc<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
  https://pkg.jenkins.io/debian-stable binary/ <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token punctuation">\\</span>
  /etc/apt/sources.list.d/jenkins.list <span class="token operator">&gt;</span> /dev/null

<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jenkins

<span class="token comment"># systemctl cat jenkins</span>
<span class="token comment"># journalctl -u jenkins.service</span>
<span class="token comment"># vim /lib/systemd/system/jenkins.service</span>
<span class="token comment">###################</span>
<span class="token assign-left variable">Environment</span><span class="token operator">=</span><span class="token string">&quot;JENKINS_PORT=80&quot;</span>
<span class="token assign-left variable">AmbientCapabilities</span><span class="token operator">=</span>CAP_NET_BIND_SERVICE
<span class="token comment">###################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h2>`,2),b={href:"https://jenkins.example.com/",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),v=n("code",null,"jenkins.example.com",-1),h=t(`<h2 id="直接进入管理页面-忘记密码" tabindex="-1"><a class="header-anchor" href="#直接进入管理页面-忘记密码"><span>直接进入管理页面/忘记密码</span></a></h2><blockquote><p>进入 <code>\${JENKINS_HOME}/config.xml</code> 删除下面内容</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useSecurity</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>useSecurity</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authorizationStrategy</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hudson.security.FullControlOnceLoggedInAuthorizationStrategy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>denyAnonymousReadAccess</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>denyAnonymousReadAccess</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authorizationStrategy</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>securityRealm</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hudson.security.HudsonPrivateSecurityRealm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>disableSignup</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>disableSignup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enableCaptcha</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enableCaptcha</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>securityRealm</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(y,_){const a=p("ExternalLinkIcon");return l(),i("div",null,[u,r,k,n("blockquote",null,[n("p",null,[n("a",d,[s("官网参考"),e(a)])])]),m,n("blockquote",null,[n("p",null,[n("a",b,[s("https://jenkins.example.com/"),e(a)]),g,v,s(" 为服务器对应IP地址")])]),h])}const J=o(c,[["render",f],["__file","f3911a.html.vue"]]),S=JSON.parse(`{"path":"/p2024/Linux/tools/f3911a.html","title":"Jenkins安装","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/tools/f3911a.html","lang":"zh-CN","title":"Jenkins安装","description":"Jenkins安装","isOriginal":true,"date":"2024-03-28T00:00:00.000Z","category":["Jenkins"],"tag":["Jenkins"],"head":[["meta",{"name":"keywords","content":"Jenkins安装"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/tools/f3911a.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"Jenkins安装"}],["meta",{"property":"og:description","content":"Jenkins安装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T06:52:02.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Jenkins"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T06:52:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T06:52:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"安装环境","slug":"安装环境","link":"#安装环境","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"直接进入管理页面/忘记密码","slug":"直接进入管理页面-忘记密码","link":"#直接进入管理页面-忘记密码","children":[]}],"git":{"createdTime":1712904722000,"updatedTime":1712904722000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"06.Linux/03.tools/20240328_Jenkins安装.md","localizedDate":"2024年3月28日","excerpt":"<h2>安装环境</h2>\\n<blockquote>\\n<p>ubuntu 20.04 LTS</p>\\n</blockquote>\\n<h2>安装步骤</h2>\\n<blockquote>\\n<p><a href=\\"https://www.jenkins.io/doc/book/installing/linux/#debianubuntu\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网参考</a></p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># Installation of Java</span>\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt</span> update\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt</span> <span class=\\"token function\\">install</span> fontconfig openjdk-17-jre\\nroot@aip-slave-node:~<span class=\\"token comment\\"># java --version</span>\\n    openjdk <span class=\\"token number\\">17.0</span>.8.1 <span class=\\"token number\\">2023</span>-08-24\\n    OpenJDK Runtime Environment <span class=\\"token punctuation\\">(</span>build <span class=\\"token number\\">17.0</span>.8.1+1-Ubuntu-0ubuntu122.04<span class=\\"token punctuation\\">)</span>\\n    OpenJDK <span class=\\"token number\\">64</span>-Bit Server VM <span class=\\"token punctuation\\">(</span>build <span class=\\"token number\\">17.0</span>.8.1+1-Ubuntu-0ubuntu122.04, mixed mode, sharing<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># Long Term Support release jenkins</span>\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">wget</span> <span class=\\"token parameter variable\\">-O</span> /usr/share/keyrings/jenkins-keyring.asc <span class=\\"token punctuation\\">\\\\</span>\\n  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key\\n<span class=\\"token builtin class-name\\">echo</span> deb <span class=\\"token punctuation\\">[</span>signed-by<span class=\\"token operator\\">=</span>/usr/share/keyrings/jenkins-keyring.asc<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">\\\\</span>\\n  https://pkg.jenkins.io/debian-stable binary/ <span class=\\"token operator\\">|</span> <span class=\\"token function\\">sudo</span> <span class=\\"token function\\">tee</span> <span class=\\"token punctuation\\">\\\\</span>\\n  /etc/apt/sources.list.d/jenkins.list <span class=\\"token operator\\">&gt;</span> /dev/null\\n\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> update\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> jenkins\\n\\n<span class=\\"token comment\\"># systemctl cat jenkins</span>\\n<span class=\\"token comment\\"># journalctl -u jenkins.service</span>\\n<span class=\\"token comment\\"># vim /lib/systemd/system/jenkins.service</span>\\n<span class=\\"token comment\\">###################</span>\\n<span class=\\"token assign-left variable\\">Environment</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"JENKINS_PORT=80\\"</span>\\n<span class=\\"token assign-left variable\\">AmbientCapabilities</span><span class=\\"token operator\\">=</span>CAP_NET_BIND_SERVICE\\n<span class=\\"token comment\\">###################</span>\\n</code></pre></div>"}`);export{J as comp,S as data};