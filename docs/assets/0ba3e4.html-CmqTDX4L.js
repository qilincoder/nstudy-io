import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-r-0ZWJuU.js";const e="/images/2024/20240229_openwrt.png",i="/images/2024/20240229_boot_sequence.png",r={},o=t(`<h2 id="操作环境说明-本操作基于proxmox-ve-8-1-0实操" tabindex="-1"><a class="header-anchor" href="#操作环境说明-本操作基于proxmox-ve-8-1-0实操"><span>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root@:~#  pveversion -v</span>
proxmox-ve: <span class="token number">8.1</span>.0 <span class="token punctuation">(</span>running kernel: <span class="token number">6.5</span>.11-7-pve<span class="token punctuation">)</span>
pve-manager: <span class="token number">8.1</span>.3 <span class="token punctuation">(</span>running version: <span class="token number">8.1</span>.3/b46aac3b42da5d15<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>openwrt是个很好的软路由，既开源，插件又多，再此就不做介绍<br> 这里假设您已经知道openwrt且需要知道怎么在PVE上安装使用才需要看本教程</p></blockquote><h2 id="在虚拟机里面安装openwrt的步骤" tabindex="-1"><a class="header-anchor" href="#在虚拟机里面安装openwrt的步骤"><span>在虚拟机里面安装openwrt的步骤</span></a></h2><ul><li><h3 id="下载镜像-您也可以下载其他img镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像-您也可以下载其他img镜像"><span>下载镜像（您也可以下载其他img镜像）</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://downloads.openwrt.org/releases/23.05.2/targets/x86/64/openwrt-23.05.2-x86-64-generic-ext4-combined-efi.img.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><h3 id="创建一个不需要磁盘的linux虚拟机-id-102" tabindex="-1"><a class="header-anchor" href="#创建一个不需要磁盘的linux虚拟机-id-102"><span>创建一个不需要磁盘的linux虚拟机 id = 102</span></a></h3></li></ul><blockquote><p>配置如下图，注意配置完是没有红色的磁盘的<br> 如果有可以把所有磁盘先分离再删除,已经测试过 OVMF (UEFI) 和 SeaBIOS 都可以<br> 这里使用SeaBIOS 的BIOS类型, OVMF (UEFI) 可以先创建,然后删除UEFI磁盘不影响<br><img src="`+e+`" alt="创建的虚拟机配置" loading="lazy"></p></blockquote><ul><li><h3 id="解压下载的软件包" tabindex="-1"><a class="header-anchor" href="#解压下载的软件包"><span>解压下载的软件包</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gunzip openwrt-23.05.2-x86-64-generic-ext4-combined-efi.img.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><h3 id="用qm命令导入磁盘到-102号虚拟机" tabindex="-1"><a class="header-anchor" href="#用qm命令导入磁盘到-102号虚拟机"><span>用qm命令导入磁盘到 102号虚拟机</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>qm importdisk <span class="token number">102</span> openwrt-23.05.2-x86-64-generic-ext4-combined-efi.img local-lvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><h3 id="调整磁盘参数-调整磁盘容量" tabindex="-1"><a class="header-anchor" href="#调整磁盘参数-调整磁盘容量"><span>调整磁盘参数,调整磁盘容量</span></a></h3></li></ul><blockquote><p>红色部分为磁盘调整后参数，您可以根据您的需求调整<br><img src="`+e+'" alt="创建的虚拟机配置" loading="lazy"></p></blockquote><ul><li><h3 id="调整引导顺序" tabindex="-1"><a class="header-anchor" href="#调整引导顺序"><span>调整引导顺序</span></a></h3></li></ul><blockquote><p>BIOS引导顺序,注意把导入的磁盘作为第一引导选项<br><img src="'+i+`" alt="引导顺序" loading="lazy"></p></blockquote><ul><li><h3 id="openwrt-配置-使可以正常联网" tabindex="-1"><a class="header-anchor" href="#openwrt-配置-使可以正常联网"><span>openwrt 配置, 使可以正常联网</span></a></h3></li></ul><blockquote><p>假如openwrt不能自动配置,无法进入后台（实际上我就是这样子）<br> 那么需要在PVE的web端页面,进入控制台,然后配置网络后就可以进入后台<br> 后台的账号和密码看固件,一般都是admin 密码要么为空,要么为passwd</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/config/network

option gateway <span class="token string">&#39;192.xxx.xxx.2&#39;</span>
option peerdns <span class="token string">&#39;0&#39;</span>
list dns <span class="token string">&#39;233.5.5.5&#39;</span>
list dns <span class="token string">&#39;114.114.114.114&#39;</span>
option ipaddr <span class="token string">&#39;192.xxx.xxx.1&#39;</span>
option netmask <span class="token string">&#39;255.255.255.0&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>&#39;192.xxx.xxx.2&#39; 为上层iptables的配置的网关,或者为上层路由器网关<br> dns配置随意配置合法的DNS地址<br> &#39;192.xxx.xxx.1&#39;为 网段的网关地址 ,地址和 上层iptables的配置的网关为一个网段地址</p></blockquote><ul><li><h3 id="重启网络" tabindex="-1"><a class="header-anchor" href="#重启网络"><span>重启网络</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">service</span> network restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),l=[o];function p(c,d){return a(),s("div",null,l)}const h=n(r,[["render",p],["__file","0ba3e4.html.vue"]]),b=JSON.parse(`{"path":"/p2024/Linux/PVE/0ba3e4.html","title":"PVE安装openwrt","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/PVE/0ba3e4.html","lang":"zh-CN","title":"PVE安装openwrt","description":"PVE安装openwrt","isOriginal":true,"date":"2024-02-29T00:00:00.000Z","category":["PVE","PVE安装openwrt"],"tag":["PVE","PVE安装openwrt"],"head":[["meta",{"name":"keywords","content":"PVE,PVE安装openwrt"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/PVE/0ba3e4.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"PVE安装openwrt"}],["meta",{"property":"og:description","content":"PVE安装openwrt"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hub.nstudy.org/images/2024/20240229_openwrt.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T10:30:28.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"PVE"}],["meta",{"property":"article:tag","content":"PVE安装openwrt"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T10:30:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PVE安装openwrt\\",\\"image\\":[\\"https://hub.nstudy.org/images/2024/20240229_openwrt.png\\",\\"https://hub.nstudy.org/images/2024/20240229_openwrt.png\\",\\"https://hub.nstudy.org/images/2024/20240229_boot_sequence.png\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T10:30:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明，本操作基于proxmox-ve: 8.1.0实操","slug":"操作环境说明-本操作基于proxmox-ve-8-1-0实操","link":"#操作环境说明-本操作基于proxmox-ve-8-1-0实操","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"在虚拟机里面安装openwrt的步骤","slug":"在虚拟机里面安装openwrt的步骤","link":"#在虚拟机里面安装openwrt的步骤","children":[]}],"git":{"createdTime":1712917828000,"updatedTime":1712917828000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.92,"words":576},"filePathRelative":"06.Linux/88.PVE/20240229_PVE安装openwrt.md","localizedDate":"2024年2月29日","excerpt":"<h2>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># root@:~#  pveversion -v</span>\\nproxmox-ve: <span class=\\"token number\\">8.1</span>.0 <span class=\\"token punctuation\\">(</span>running kernel: <span class=\\"token number\\">6.5</span>.11-7-pve<span class=\\"token punctuation\\">)</span>\\npve-manager: <span class=\\"token number\\">8.1</span>.3 <span class=\\"token punctuation\\">(</span>running version: <span class=\\"token number\\">8.1</span>.3/b46aac3b42da5d15<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{h as comp,b as data};