import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as i,a as n,b as a,d as e,e as l}from"./app-DKHkdyNf.js";const c={},r=n("h2",{id:"背景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#背景"},[n("span",null,"背景")])],-1),u=n("blockquote",null,[n("p",null,"有没有想法，发布包到PyPI，开源自己的优秀包，如果您愿意，那么本教程将带您实现。")],-1),d={href:"https://packaging.python.org/en/latest/tutorials/packaging-projects/",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"依赖条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#依赖条件"},[n("span",null,"依赖条件")])],-1),m=n("br",null,null,-1),v=n("br",null,null,-1),y={href:"https://packaging.python.org/en/latest/guides/distributing-packages-using-setuptools/#create-an-account",target:"_blank",rel:"noopener noreferrer"},h=l(`<h2 id="主要步骤" tabindex="-1"><a class="header-anchor" href="#主要步骤"><span>主要步骤</span></a></h2><ol><li>创建一个项目文件夹，并初始化项目，这里项目名称是 <code>HomePy</code></li></ol><blockquote><p>结构如下：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>HomePy
└── src
    ├── HomePy
    ├    ├── __init__.py
    ├    └── example.py
    ├── tests
    ├── LICENSE
    ├── pyproject.toml
    ├── README.md
    └── requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改 <code>pyproject.toml</code> 文件，内容如下：</li></ol><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">project</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;HomePy&quot;</span>
<span class="token key property">dynamic</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dependencies&quot;</span><span class="token punctuation">]</span>
<span class="token key property">authors</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token key property">name</span><span class="token punctuation">=</span><span class="token string">&quot;Jack Li&quot;</span><span class="token punctuation">,</span> <span class="token key property">email</span><span class="token punctuation">=</span><span class="token string">&quot;lizhq08@gmail.com&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token key property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;A Home python useful package&quot;</span>
<span class="token key property">readme</span> <span class="token punctuation">=</span> <span class="token string">&quot;README.md&quot;</span>
<span class="token key property">requires-python</span> <span class="token punctuation">=</span> <span class="token string">&quot;&gt;=3.8&quot;</span>
<span class="token key property">classifiers</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Programming Language :: Python :: 3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;License :: OSI Approved :: MIT License&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Operating System :: OS Independent&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token table class-name">tool.setuptools.dynamic</span><span class="token punctuation">]</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span><span class="token key property">attr</span> <span class="token punctuation">=</span> <span class="token string">&quot;src.__version__&quot;</span><span class="token punctuation">}</span>
<span class="token key property">dependencies</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span><span class="token key property">file</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;requirements.txt&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token table class-name">project.urls</span><span class="token punctuation">]</span>
<span class="token key property">&quot;Homepage&quot;</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://github.com/lizhq/HomePy&quot;</span>
<span class="token key property">&quot;Bug Tracker&quot;</span> <span class="token punctuation">=</span> <span class="token string">&quot;https://github.com/lizhq/HomePy/issues&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>安装依赖，编译package包</li></ol><blockquote><p>这里假设您的安装包已经编写了代码，并且已经编写了 <code>__init__.py</code> 文件<br> 这里假设您已经配置好PyPI账号，并且配置好环境变量。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip

python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> build

python3 <span class="token parameter variable">-m</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>发布包到PyPI</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-m</span> twine upload <span class="token parameter variable">--repository</span> pypi dist/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>验证包是否上传成功</li></ol>`,12),g={href:"https://pypi.org/project/HomePy/",target:"_blank",rel:"noopener noreferrer"};function b(P,q){const s=o("ExternalLinkIcon");return p(),i("div",null,[r,u,n("blockquote",null,[n("p",null,[a("Python Packaging User Guide "),n("a",d,[a("官方参考"),e(s)])])]),k,n("blockquote",null,[n("p",null,[a("已经安装好python开发环境,我这里是 python3.10+"),m,a(" 开发环境我用的是 visual studio code ,原则上跟IDE版本没关系"),v,a(" 您已经申请了PyPI账号，配置好环境变量。 "),n("a",y,[a("PyPI账号申请以及配置方法"),e(s)])])]),h,n("blockquote",null,[n("p",null,[a("验证安装分发包是否存在 "),n("a",g,[a("HomePy"),e(s)])])])])}const I=t(c,[["render",b],["__file","dc234c.html.vue"]]),x=JSON.parse(`{"path":"/p2024/Python/dc234c.html","title":"发布Package到PyPI","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Python/dc234c.html","lang":"zh-CN","title":"发布Package到PyPI","description":"发布Package到PyPI","isOriginal":true,"date":"2024-03-16T00:00:00.000Z","category":["Python","PyPI"],"tag":["Python","PyPI"],"head":[["meta",{"name":"keywords","content":"发布Package到PyPI,PyPI"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Python/dc234c.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"发布Package到PyPI"}],["meta",{"property":"og:description","content":"发布Package到PyPI"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T03:28:49.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"PyPI"}],["meta",{"property":"article:published_time","content":"2024-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T03:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"发布Package到PyPI\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T03:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"依赖条件","slug":"依赖条件","link":"#依赖条件","children":[]},{"level":2,"title":"主要步骤","slug":"主要步骤","link":"#主要步骤","children":[]}],"git":{"createdTime":1712546929000,"updatedTime":1712546929000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"05.Python/20240316_发布Package到PyPI.md","localizedDate":"2024年3月16日","excerpt":"<h2>背景</h2>\\n<blockquote>\\n<p>有没有想法，发布包到PyPI，开源自己的优秀包，如果您愿意，那么本教程将带您实现。</p>\\n</blockquote>\\n<blockquote>\\n<p>Python Packaging User Guide <a href=\\"https://packaging.python.org/en/latest/tutorials/packaging-projects/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方参考</a></p>\\n</blockquote>\\n<h2>依赖条件</h2>\\n<blockquote>\\n<p>已经安装好python开发环境,我这里是 python3.10+<br>\\n开发环境我用的是 visual studio code ,原则上跟IDE版本没关系<br>\\n您已经申请了PyPI账号，配置好环境变量。 <a href=\\"https://packaging.python.org/en/latest/guides/distributing-packages-using-setuptools/#create-an-account\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PyPI账号申请以及配置方法</a></p>\\n</blockquote>"}`);export{I as comp,x as data};