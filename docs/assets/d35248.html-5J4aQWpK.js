import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o,c as i,a as e,b as t,d as a,e as s}from"./app-0RuRy7YQ.js";const c="/images/2024/20240223_old.jpg",d="/images/2024/20240223_new.jpg",p={},h=e("h1",{id:"本文介绍-某项目服务器性能对比流程操作步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本文介绍-某项目服务器性能对比流程操作步骤"},[e("span",null,"本文介绍，某项目服务器性能对比流程操作步骤")])],-1),u=e("h2",{id:"服务器说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务器说明"},[e("span",null,"服务器说明")])],-1),m={href:"http://172.18.106.xxx",target:"_blank",rel:"noopener noreferrer"},g={href:"http://172.18.106.xxx",target:"_blank",rel:"noopener noreferrer"},x=s('<h2 id="服务器系统对比-cat-etc-redhat-release" tabindex="-1"><a class="header-anchor" href="#服务器系统对比-cat-etc-redhat-release"><span>服务器系统对比 （#cat /etc/redhat-release）</span></a></h2><ul><li>原：Red Hat Enterprise Linux Server release 6.5 (Santiago)</li><li>新：Red Hat Enterprise Linux Server release 7.0 (Maipo)</li></ul><div style="background-color:yellow;text-indent:2em;font-weight:bold;"> 结论：新服务器linux版本不一致，且版本较新 </div><h2 id="服务器内存对比-free-g" tabindex="-1"><a class="header-anchor" href="#服务器内存对比-free-g"><span>服务器内存对比 （#free -g）</span></a></h2><blockquote><p>total used<br> 原：Mem: 31 29<br> 新：Mem: 125 2</p></blockquote><div style="background-color:yellow;text-indent:2em;font-weight:bold;"> 结论：新服务器内存约为原服务器 4 倍 </div><h2 id="服务器cpu对比-lscpu" tabindex="-1"><a class="header-anchor" href="#服务器cpu对比-lscpu"><span>服务器CPU对比 （#lscpu）</span></a></h2><blockquote><p>CPU(s) Thread(s) per core Core(s) per socket Socket(s) CPU MHz<br> 原：16 1 8 2 2197.454 <br> 新： 24 2 6 2 2543.531</p></blockquote><div style="background-color:yellow;text-indent:2em;font-weight:bold;"> 结论：原服务器模拟2路8核单线程为16核CPU，新服务器为2路6核超线程为24核CPU，性能约为原服务器 1.5 倍 </div><h2 id="服务器磁盘大小-硬件-df-h-fdisk-l-lsscsi" tabindex="-1"><a class="header-anchor" href="#服务器磁盘大小-硬件-df-h-fdisk-l-lsscsi"><span>服务器磁盘大小/硬件 （#df -h | fdisk -l | lsscsi）</span></a></h2><blockquote><p>磁盘个数 磁盘大小 磁盘类型 磁盘驱动类型<br> 原：3 约2T vd（虚拟磁盘） 云平台虚拟类型<br> 新：2 约2T sd（SCSI 磁盘） DELL PERC H730 Mini<br> 注：原磁盘：三块磁盘 一块系统（50G，ext4），一块旧数据库数据（1T ext4），一块新数据库数据（1T ext3 ）<br> 新磁盘：二块磁盘 一块（2T，xfs） 一块（20G 未挂载）</p></blockquote><div style="background-color:yellow;text-indent:2em;font-weight:bold;"> 结论：新磁盘为物理实体DELL实体硬盘（非SSD）、原磁盘为云平台虚拟磁盘 </div><h2 id="服务器磁盘读写测试-dd-scp-iostat-xdm-1" tabindex="-1"><a class="header-anchor" href="#服务器磁盘读写测试-dd-scp-iostat-xdm-1"><span>服务器磁盘读写测试 （#dd scp | iostat -xdm 1）</span></a></h2><blockquote><p>单盘写测试 （单盘产生 10G文件）<br> 原：10737418240 bytes (11 GB) copied, 80.7162 s, 133 MB/s 【系统盘】<br> 新：10737418240字节(11 GB)已复制，5.89507 秒，1.8 GB/秒<br> 结论：新盘写能力比原来性能提升在 8-10倍（注：新服务器内存，cup优于原服务器。排除测试时原来服务器正在使用【测试使用原系统系统盘】）<br> 单盘读写测试 （单盘copy 10G文件）</p></blockquote><p>原：<img src="'+c+'" alt="原" loading="lazy"></p><p>新：<img src="'+d+'" alt="新" loading="lazy"></p><div style="background-color:yellow;text-indent:2em;font-weight:bold;"> 结论：新磁盘本机读写性能为旧磁盘2-4倍（注意新服务器内存，cpu优于原服务器） </div><h2 id="服务器网络传输对比-内网传输-两台服务器均无法访问互联网-scp" tabindex="-1"><a class="header-anchor" href="#服务器网络传输对比-内网传输-两台服务器均无法访问互联网-scp"><span>服务器网络传输对比（内网传输，两台服务器均无法访问互联网） （#：scp）</span></a></h2><blockquote><p>从 web服务器（web1）传输文件到原服务器、新服务器（传输50%）<br> 文件名 已经传输百分比 每秒传输 约剩余时间<br> 原：test 50% 5131MB 63.1MB/s 01:20 ETA<br> 新：test 57% 5846MB 86.3MB/s 00:50 ETA</p></blockquote><div style="background-color:yellow;text-indent:2em;font-weight:bold;"> 结论：新服务器与原服务器网络传输基本一致（略高是因为服务器读写性能等） </div><p><br><br></p><div style="background-color:yellow;text-indent:2em;font-weight:bold;color:red;"> 结论:新服务器各项性能优于旧服务器（2-4倍），网络传输跟原服务器基本保持一致。 注：用新服务器需要特别关注“异地”文件备份，防止出现(硬件）故障，这边看到磁盘属性本身可能已经做了文件备份策略（可以咨询磁盘供应商），同时我们这边也启用数据库备份策略（定时备份）。 </div>',22);function b(f,k){const r=n("ExternalLinkIcon");return o(),i("div",null,[h,u,e("ul",null,[e("li",null,[t("原数据库服务器IP："),e("a",m,[t("172.18.106.xxx"),a(r)])]),e("li",null,[t("新数据库服务器IP："),e("a",g,[t("172.18.106.xxx"),a(r)])])]),x])}const v=l(p,[["render",b],["__file","d35248.html.vue"]]),w=JSON.parse(`{"path":"/p2024/Linux/others/d35248.html","title":"某项目服务器性能对比流程操作步骤","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/others/d35248.html","lang":"zh-CN","title":"某项目服务器性能对比流程操作步骤","description":"某项目服务器性能对比流程操作步骤","isOriginal":true,"date":"2024-02-23T00:00:00.000Z","category":["Linux"],"tag":["Linux","性能对比"],"head":[["meta",{"name":"keywords","content":"Linux,性能对比,操作步骤"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/others/d35248.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"某项目服务器性能对比流程操作步骤"}],["meta",{"property":"og:description","content":"某项目服务器性能对比流程操作步骤"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hub.nstudy.org/images/2024/20240223_old.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T06:52:02.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"性能对比"}],["meta",{"property":"article:published_time","content":"2024-02-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T06:52:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"某项目服务器性能对比流程操作步骤\\",\\"image\\":[\\"https://hub.nstudy.org/images/2024/20240223_old.jpg\\",\\"https://hub.nstudy.org/images/2024/20240223_new.jpg\\"],\\"datePublished\\":\\"2024-02-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T06:52:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"服务器说明","slug":"服务器说明","link":"#服务器说明","children":[]},{"level":2,"title":"服务器系统对比\\t（#cat /etc/redhat-release）","slug":"服务器系统对比-cat-etc-redhat-release","link":"#服务器系统对比-cat-etc-redhat-release","children":[]},{"level":2,"title":"服务器内存对比\\t（#free -g）","slug":"服务器内存对比-free-g","link":"#服务器内存对比-free-g","children":[]},{"level":2,"title":"服务器CPU对比\\t（#lscpu）","slug":"服务器cpu对比-lscpu","link":"#服务器cpu对比-lscpu","children":[]},{"level":2,"title":"服务器磁盘大小/硬件\\t（#df -h   |  fdisk -l  | lsscsi）","slug":"服务器磁盘大小-硬件-df-h-fdisk-l-lsscsi","link":"#服务器磁盘大小-硬件-df-h-fdisk-l-lsscsi","children":[]},{"level":2,"title":"服务器磁盘读写测试\\t（#dd scp | iostat -xdm 1）","slug":"服务器磁盘读写测试-dd-scp-iostat-xdm-1","link":"#服务器磁盘读写测试-dd-scp-iostat-xdm-1","children":[]},{"level":2,"title":"服务器网络传输对比（内网传输，两台服务器均无法访问互联网）\\t（#：scp）","slug":"服务器网络传输对比-内网传输-两台服务器均无法访问互联网-scp","link":"#服务器网络传输对比-内网传输-两台服务器均无法访问互联网-scp","children":[]}],"git":{"createdTime":1712904722000,"updatedTime":1712904722000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2.95,"words":885},"filePathRelative":"06.Linux/99.others/20240223_某项目服务器性能对比流程操作步骤.md","localizedDate":"2024年2月23日","excerpt":"\\n<h2>服务器说明</h2>\\n<ul>\\n<li>原数据库服务器IP：<a href=\\"http://172.18.106.xxx\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">172.18.106.xxx</a></li>\\n<li>新数据库服务器IP：<a href=\\"http://172.18.106.xxx\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">172.18.106.xxx</a></li>\\n</ul>\\n<h2>服务器系统对比\\t（#cat /etc/redhat-release）</h2>\\n<ul>\\n<li>原：Red Hat Enterprise Linux Server release 6.5 (Santiago)</li>\\n<li>新：Red Hat Enterprise Linux Server release 7.0 (Maipo)</li>\\n</ul>"}`);export{v as comp,w as data};