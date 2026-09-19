// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS04 = {
 "id": "ws04",
 "stage": 1,
 "unit": 10,
 "subtopic": "coordinate-transformation",
 "source": "EPH All-Round L5 · Worksheet 4",
 "name": {
  "zh": "坐標平面上點的變換",
  "en": "Transformation of Points on a Coordinate Plane"
 },
 "intro": {
  "zh": "這一課學三種變換：平移（translation）、反射（reflection）、旋轉（rotation），以及怎麼用斜率（slope）證明兩條線垂直或平行。\n好消息是：每種變換都只有一條公式。平移是加減、反射是變號或兩倍距離、旋轉只要記兩條 $90^{\\circ}$ 公式（$270^{\\circ}$ 換成反向 $90^{\\circ}$ 就好）。DSE 這類題幾乎年年出在 Paper 1 第 6–8 題，是既易拿分又容易因方向搞錯而失分的一題 —— 慢慢做、做完驗算，是最划算的策略。"
 },
 "cmdHints": [
  {
   "en": "the coordinates of ... are ...",
   "zh": "座標（答案要寫成 $(x,\\ y)$ 的完整形式，不要只寫一個數）"
  },
  {
   "en": "respectively",
   "zh": "分別（兩點的座標按先後次序對應，不要對錯）"
  },
  {
   "en": "translated leftwards / upwards by ... units",
   "zh": "平移：左／右只改 $x$，上／下只改 $y$"
  },
  {
   "en": "reflected with respect to ...",
   "zh": "對…反射（鏡像；對垂直線只改 $x$、對水平線只改 $y$）"
  },
  {
   "en": "rotated anticlockwise about the origin through $90^{\\circ}$",
   "zh": "繞原點逆時針旋轉 $90^{\\circ}$（順／逆時針要看清）"
  },
  {
   "en": "Prove that ... is perpendicular to ...",
   "zh": "證明兩線垂直（寫「斜率相乘 $=-1$」才有分）"
  }
 ],
 "lessons": [
  {
   "id": "ws04-1",
   "title": {
    "zh": "平移、反射、旋轉與練習",
    "en": "Translation, reflection, rotation + practice"
   },
   "cards": [
    {
     "id": "ws04-c1",
     "topic": "ws04",
     "title": {
      "zh": "平移（translation）：加減就可以了",
      "en": "Translation"
     },
     "body": {
      "zh": "平移就是把一點「整點搬過去」，點的大小、形狀、方向都不變 —— 只有位置變。做法只是在對應的座標上加減。\n・向右 $k$ 單位 → $x$ 加 $k$；向左 $k$ 單位 → $x$ 減 $k$；\n・向上 $k$ 單位 → $y$ 加 $k$；向下 $k$ 單位 → $y$ 減 $k$。\n{{math:0}}\n例子：$A(-7,3)$ 向左 6 單位 → $A'=(-7-6,3)=(-13,3)$；$B(-2,-6)$ 向上 3 單位 → $B'=(-2,-6+3)=(-2,-3)$。\n{{math:1}}\n記憶法：「左右動 $x$、上下動 $y$」，另一個座標完全不動。很多同學會把兩個座標一起加，那是錯的。"
     },
     "math": [
      "P(x,y)\\ \\xrightarrow{\\text{右 }k}\\ P_{1}(x+k,\\ y)\\qquad P(x,y)\\ \\xrightarrow{\\text{左 }k}\\ P_{2}(x-k,\\ y)",
      "P(x,y)\\ \\xrightarrow{\\text{上 }k}\\ P_{3}(x,\\ y+k)\\qquad P(x,y)\\ \\xrightarrow{\\text{下 }k}\\ P_{4}(x,\\ y-k)"
     ],
     "vocab": [
      {
       "en": "translation",
       "zh": "平移（滑動）"
      },
      {
       "en": "unit",
       "zh": "單位"
      },
      {
       "en": "image",
       "zh": "影像（變換後的點）"
      }
     ],
     "warn": {
      "zh": "「向左」是減不是加。看到 leftwards / downwards 就減，rightwards / upwards 就加 —— 方向字要圈起來。"
     },
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c1a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"197.5\" x2=\"22.0\" y2=\"62.5\"/><line x1=\"35.5\" y1=\"197.5\" x2=\"35.5\" y2=\"62.5\"/><line x1=\"49.0\" y1=\"197.5\" x2=\"49.0\" y2=\"62.5\"/><line x1=\"62.5\" y1=\"197.5\" x2=\"62.5\" y2=\"62.5\"/><line x1=\"76.0\" y1=\"197.5\" x2=\"76.0\" y2=\"62.5\"/><line x1=\"89.5\" y1=\"197.5\" x2=\"89.5\" y2=\"62.5\"/><line x1=\"103.0\" y1=\"197.5\" x2=\"103.0\" y2=\"62.5\"/><line x1=\"116.5\" y1=\"197.5\" x2=\"116.5\" y2=\"62.5\"/><line x1=\"130.0\" y1=\"197.5\" x2=\"130.0\" y2=\"62.5\"/><line x1=\"143.5\" y1=\"197.5\" x2=\"143.5\" y2=\"62.5\"/><line x1=\"157.0\" y1=\"197.5\" x2=\"157.0\" y2=\"62.5\"/><line x1=\"170.5\" y1=\"197.5\" x2=\"170.5\" y2=\"62.5\"/><line x1=\"184.0\" y1=\"197.5\" x2=\"184.0\" y2=\"62.5\"/><line x1=\"197.5\" y1=\"197.5\" x2=\"197.5\" y2=\"62.5\"/><line x1=\"211.0\" y1=\"197.5\" x2=\"211.0\" y2=\"62.5\"/><line x1=\"224.5\" y1=\"197.5\" x2=\"224.5\" y2=\"62.5\"/><line x1=\"238.0\" y1=\"197.5\" x2=\"238.0\" y2=\"62.5\"/><line x1=\"22.0\" y1=\"197.5\" x2=\"238.0\" y2=\"197.5\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"170.5\" x2=\"238.0\" y2=\"170.5\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"116.5\" x2=\"238.0\" y2=\"116.5\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"89.5\" x2=\"238.0\" y2=\"89.5\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"62.5\" x2=\"238.0\" y2=\"62.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\" marker-end=\"url(#ar-c1a)\"/><text x=\"243.0\" y=\"157.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"224.5\" y1=\"197.5\" x2=\"224.5\" y2=\"62.5\" marker-end=\"url(#ar-c1a)\"/><text x=\"229.5\" y=\"60.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"230.5\" y=\"157.5\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"103.0\" x2=\"49.0\" y2=\"103.0\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-c1a)\"/><circle cx=\"130.0\" cy=\"103.0\" r=\"4.6\" fill=\"#111\"/><text x=\"136.0\" y=\"91.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(−7, 3)</text><circle cx=\"49.0\" cy=\"103.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"41.0\" y=\"91.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A′(−13, 3)</text><text x=\"89.5\" y=\"117.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">左 6</text></svg>",
       "caption": "A(−7, 3) 向左 6 單位 → A′(−13, 3)"
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c1b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"220.0\" x2=\"22.0\" y2=\"40.0\"/><line x1=\"40.0\" y1=\"220.0\" x2=\"40.0\" y2=\"40.0\"/><line x1=\"58.0\" y1=\"220.0\" x2=\"58.0\" y2=\"40.0\"/><line x1=\"76.0\" y1=\"220.0\" x2=\"76.0\" y2=\"40.0\"/><line x1=\"94.0\" y1=\"220.0\" x2=\"94.0\" y2=\"40.0\"/><line x1=\"112.0\" y1=\"220.0\" x2=\"112.0\" y2=\"40.0\"/><line x1=\"130.0\" y1=\"220.0\" x2=\"130.0\" y2=\"40.0\"/><line x1=\"148.0\" y1=\"220.0\" x2=\"148.0\" y2=\"40.0\"/><line x1=\"166.0\" y1=\"220.0\" x2=\"166.0\" y2=\"40.0\"/><line x1=\"184.0\" y1=\"220.0\" x2=\"184.0\" y2=\"40.0\"/><line x1=\"202.0\" y1=\"220.0\" x2=\"202.0\" y2=\"40.0\"/><line x1=\"220.0\" y1=\"220.0\" x2=\"220.0\" y2=\"40.0\"/><line x1=\"238.0\" y1=\"220.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\" marker-end=\"url(#ar-c1b)\"/><text x=\"243.0\" y=\"72.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"166.0\" y1=\"220.0\" x2=\"166.0\" y2=\"40.0\" marker-end=\"url(#ar-c1b)\"/><text x=\"171.0\" y=\"38.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"172.0\" y=\"72.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"166.0\" x2=\"130.0\" y2=\"112.0\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-c1b)\"/><circle cx=\"130.0\" cy=\"166.0\" r=\"4.6\" fill=\"#111\"/><text x=\"138.0\" y=\"184.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(−2, −6)</text><circle cx=\"130.0\" cy=\"112.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"138.0\" y=\"104.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B′(−2, −3)</text><text x=\"135.4\" y=\"140.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">上 3</text></svg>",
       "caption": "B(−2, −6) 向上 3 單位 → B′(−2, −3)"
      }
     ]
    },
    {
     "id": "ws04-c2",
     "topic": "ws04",
     "title": {
      "zh": "反射（對 x 軸、y 軸）：只改一個符號",
      "en": "Reflection about the Axes"
     },
     "body": {
      "zh": "反射（reflection）像照鏡子：點到鏡軸的距離不變，只是在另一邊。\n對 「$x$ 軸」反射 → $y$ 變號、$x$ 不變；對 「$y$ 軸」反射 → $x$ 變號、$y$ 不變。\n{{math:0}}\n例子：$A(-4,2)$ 對 $y$ 軸反射 → $A'=(-(-4),2)=(4,2)$；$B(-5,-8)$ 對 $x$ 軸反射 → $B'=(-5,-(-8))=(-5,8)$。\n{{math:1}}\n記憶法：「對哪條軸反射，就動「另一個」座標」 —— 對 $x$ 軸（橫的）反射改 $y$；對 $y$ 軸（直的）反射改 $x$。"
     },
     "math": [
      "\\text{對 }x\\text{ 軸：}(x,y)\\to(x,-y)\\qquad \\text{對 }y\\text{ 軸：}(x,y)\\to(-x,y)",
      "A(-4,2)\\to A'(4,2)\\qquad B(-5,-8)\\to B'(-5,8)"
     ],
     "vocab": [
      {
       "en": "reflection",
       "zh": "反射"
      },
      {
       "en": "x-axis / y-axis",
       "zh": "x 軸 / y 軸"
      },
      {
       "en": "image",
       "zh": "影像"
      }
     ],
     "warn": {
      "zh": "「對 $y$ 軸反射」是改 $x$（不是改 $y$）—— 這是最多人記反的一條。用例子記：$(3,1)$ 對 $y$ 軸 → $(-3,1)$，跑到左邊去了。"
     },
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"40.0\" y1=\"238.0\" x2=\"40.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"112.0\" y1=\"238.0\" x2=\"112.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"148.0\" y1=\"238.0\" x2=\"148.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"220.0\" y1=\"238.0\" x2=\"220.0\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-c2)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" marker-end=\"url(#ar-c2)\"/><text x=\"135.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"36.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y 軸（鏡軸）</text><line x1=\"58.0\" y1=\"94.0\" x2=\"130.0\" y2=\"94.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><line x1=\"130.0\" y1=\"94.0\" x2=\"202.0\" y2=\"94.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"58.0\" cy=\"94.0\" r=\"4.6\" fill=\"#111\"/><text x=\"66.0\" y=\"84.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(−4, 2)</text><circle cx=\"202.0\" cy=\"94.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"143.4\" y=\"84.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P′(4, 2)</text><text x=\"90.4\" y=\"105.7\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text><text x=\"164.2\" y=\"105.7\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
       "caption": "對 y 軸反射：x 變號、y 不變"
      }
     ]
    },
    {
     "id": "ws04-c3",
     "topic": "ws04",
     "title": {
      "zh": "反射（對平行於軸的直線）：兩倍距離",
      "en": "Reflection about a Line Parallel to an Axis"
     },
     "body": {
      "zh": "鏡軸不是 $x$ 軸／$y$ 軸，而是一條「水平線 $y=c$」 或「垂直線 $x=c$」 時，做法分三步：先算距離 → 鏡射到另一邊（距離相同）→ 寫出新座標。\n公式（直接套用最快）：\n{{math:0}}\n例子：$B(3,2)$ 對水平線 $y=6$ 反射。距離 $=6-2=4$，所以新點在 $y=6$ 上方 4 格：$B'=(3,2+2\\times4)=(3,10)$。\n{{math:1}}\n垂直線的做法完全一樣，只是改成處理 $x$：對 $x=c$ 反射 → $x'=2c-x$、$y$ 不變。\n{{math:2}}\n小心：$c$ 可以是負數（例如 $y=-5$），代公式時連負號一起代入。"
     },
     "math": [
      "\\text{對 }y=c\\text{：}(x,y)\\to(x,\\ 2c-y)\\qquad \\text{對 }x=c\\text{：}(x,y)\\to(2c-x,\\ y)",
      "\\text{距離}=6-2=4\\ \\Rightarrow\\ B'=(3,\\ 2+2\\times4)=(3,\\ 10)",
      "(8,-9)\\xrightarrow{\\text{對 }y=-5}(8,\\ 2(-5)-(-9))=(8,\\ -1)"
     ],
     "vocab": [
      {
       "en": "horizontal line",
       "zh": "水平線（平行於 x 軸）"
      },
      {
       "en": "vertical line",
       "zh": "垂直線（平行於 y 軸）"
      },
      {
       "en": "distance",
       "zh": "距離"
      }
     ],
     "warn": {
      "zh": "最常見的錯：把「點到直線的距離」直接當成新座標。距離要用「兩倍」（$y+2k$），因為要跨過直線到另一邊。"
     },
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"112.0\" y1=\"238.0\" x2=\"112.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"148.0\" y1=\"238.0\" x2=\"148.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"202.0\" y2=\"238.0\"/><line x1=\"58.0\" y1=\"220.0\" x2=\"202.0\" y2=\"220.0\"/><line x1=\"58.0\" y1=\"202.0\" x2=\"202.0\" y2=\"202.0\"/><line x1=\"58.0\" y1=\"184.0\" x2=\"202.0\" y2=\"184.0\"/><line x1=\"58.0\" y1=\"166.0\" x2=\"202.0\" y2=\"166.0\"/><line x1=\"58.0\" y1=\"148.0\" x2=\"202.0\" y2=\"148.0\"/><line x1=\"58.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\"/><line x1=\"58.0\" y1=\"112.0\" x2=\"202.0\" y2=\"112.0\"/><line x1=\"58.0\" y1=\"94.0\" x2=\"202.0\" y2=\"94.0\"/><line x1=\"58.0\" y1=\"76.0\" x2=\"202.0\" y2=\"76.0\"/><line x1=\"58.0\" y1=\"58.0\" x2=\"202.0\" y2=\"58.0\"/><line x1=\"58.0\" y1=\"40.0\" x2=\"202.0\" y2=\"40.0\"/><line x1=\"58.0\" y1=\"22.0\" x2=\"202.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"58.0\" y1=\"238.0\" x2=\"202.0\" y2=\"238.0\" marker-end=\"url(#ar-c3)\"/><text x=\"207.0\" y=\"252.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\" marker-end=\"url(#ar-c3)\"/><text x=\"81.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"82.0\" y=\"252.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"58.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"123.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：y = 6</text><line x1=\"130.0\" y1=\"202.0\" x2=\"130.0\" y2=\"58.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"130.0\" cy=\"202.0\" r=\"4.6\" fill=\"#111\"/><text x=\"138.0\" y=\"192.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(3, 2)</text><circle cx=\"130.0\" cy=\"58.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"138.0\" y=\"48.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B′(3, 10)</text><text x=\"136.3\" y=\"166.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text><text x=\"136.3\" y=\"94.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
       "caption": "對水平線 y = 6 反射：距離要乘 2"
      }
     ]
    },
    {
     "id": "ws04-c4",
     "topic": "ws04",
     "title": {
      "zh": "旋轉 90°（繞原點）：兩步口訣",
      "en": "Rotation of 90° about the Origin"
     },
     "body": {
      "zh": "繞原點旋轉 $90^{\\circ}$ 只有兩條規則，背熟就全對：\n{{math:0}}\n口訣：「逆時針 90° → 「$y$ 變號後搬到前面」」；「順時針 90° → 「$x$ 變號後搬到後面」」。\n例子：\n{{math:1}}\n驗算法：旋轉後點與原點的距離不變 —— $(4,6)$ 與 $(-6,4)$ 到 $O$ 的距離都是 $\\sqrt{4^{2}+6^{2}}=\\sqrt{52}$ ✓。\n另一個驗算法：原點到兩點的連線互相垂直（斜率相乘 $=-1$）。\n{{math:2}}"
     },
     "math": [
      "\\text{逆時針 }90^{\\circ}:(x,y)\\to(-y,\\ x)\\qquad \\text{順時針 }90^{\\circ}:(x,y)\\to(y,\\ -x)",
      "A(4,6)\\xrightarrow{\\text{逆 }90^{\\circ}}A'(-6,4)\\qquad B(-3,-5)\\xrightarrow{\\text{順 }90^{\\circ}}B'(-5,3)",
      "\\text{斜率：}\\frac{6}{4}\\times\\frac{4}{-6}=-1\\ \\Rightarrow\\ OA\\perp OA'"
     ],
     "vocab": [
      {
       "en": "rotation",
       "zh": "旋轉"
      },
      {
       "en": "anticlockwise / clockwise",
       "zh": "逆時針 / 順時針"
      },
      {
       "en": "origin",
       "zh": "原點 $O(0,0)$"
      }
     ],
     "warn": {
      "zh": "逆時針與順時針的公式不同，不要混用。用 $A(1,0)$ 記：逆時針 $90^{\\circ}$ 轉去 $(0,1)$（向上），順時針轉去 $(0,-1)$（向下）。"
     },
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"35.5\" y1=\"238.0\" x2=\"35.5\" y2=\"22.0\"/><line x1=\"49.0\" y1=\"238.0\" x2=\"49.0\" y2=\"22.0\"/><line x1=\"62.5\" y1=\"238.0\" x2=\"62.5\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"89.5\" y1=\"238.0\" x2=\"89.5\" y2=\"22.0\"/><line x1=\"103.0\" y1=\"238.0\" x2=\"103.0\" y2=\"22.0\"/><line x1=\"116.5\" y1=\"238.0\" x2=\"116.5\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"143.5\" y1=\"238.0\" x2=\"143.5\" y2=\"22.0\"/><line x1=\"157.0\" y1=\"238.0\" x2=\"157.0\" y2=\"22.0\"/><line x1=\"170.5\" y1=\"238.0\" x2=\"170.5\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"197.5\" y1=\"238.0\" x2=\"197.5\" y2=\"22.0\"/><line x1=\"211.0\" y1=\"238.0\" x2=\"211.0\" y2=\"22.0\"/><line x1=\"224.5\" y1=\"238.0\" x2=\"224.5\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"224.5\" x2=\"238.0\" y2=\"224.5\"/><line x1=\"22.0\" y1=\"211.0\" x2=\"238.0\" y2=\"211.0\"/><line x1=\"22.0\" y1=\"197.5\" x2=\"238.0\" y2=\"197.5\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"170.5\" x2=\"238.0\" y2=\"170.5\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"116.5\" x2=\"238.0\" y2=\"116.5\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"89.5\" x2=\"238.0\" y2=\"89.5\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"62.5\" x2=\"238.0\" y2=\"62.5\"/><line x1=\"22.0\" y1=\"49.0\" x2=\"238.0\" y2=\"49.0\"/><line x1=\"22.0\" y1=\"35.5\" x2=\"238.0\" y2=\"35.5\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-c4)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" marker-end=\"url(#ar-c4)\"/><text x=\"135.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"130.0\" x2=\"184.0\" y2=\"49.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"49.0\" y2=\"76.0\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 158.8 86.7 A 52.0 52.0 0 0 0 86.7 101.2\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-c4)\"/><text x=\"116.9\" y=\"68.3\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"184.0\" cy=\"49.0\" r=\"4.6\" fill=\"#111\"/><text x=\"192.0\" y=\"39.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(4, 6)</text><circle cx=\"49.0\" cy=\"76.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"43.0\" y=\"66.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A′(−6, 4)</text></svg>",
       "caption": "逆時針 90°：(x, y) → (−y, x)"
      }
     ]
    },
    {
     "id": "ws04-c5",
     "topic": "ws04",
     "title": {
      "zh": "旋轉 180° 與 270°：化成 90° 來做",
      "en": "Rotation of 180° and 270°"
     },
     "body": {
      "zh": "$180^{\\circ}$ 最簡單：「兩個座標都變號」（轉半圈，方向不分順逆）。\n{{math:0}}\n$270^{\\circ}$ 不用另背公式 —— 轉 $270^{\\circ}$ 等於「反方向轉 $90^{\\circ}$」：\n・逆時針 $270^{\\circ}$ = 順時針 $90^{\\circ}$ → $(x,y)\\to(y,-x)$；\n・順時針 $270^{\\circ}$ = 逆時針 $90^{\\circ}$ → $(x,y)\\to(-y,x)$。\n{{math:1}}\n例子：$(-7,-2)$ 逆時針 $270^{\\circ}$ = 順時針 $90^{\\circ}$ → $(-2,7)$；$(-5,-3)$ 順時針 $270^{\\circ}$ = 逆時針 $90^{\\circ}$ → $(3,-5)$。\n{{math:2}}\n這樣只需記兩條 90° 公式 + 一條 180° 公式，全部旋轉題都解得完。"
     },
     "math": [
      "\\text{旋轉 }180^{\\circ}:(x,y)\\to(-x,-y)",
      "\\text{逆 }270^{\\circ}=\\text{順 }90^{\\circ}:(x,y)\\to(y,-x)\\qquad \\text{順 }270^{\\circ}=\\text{逆 }90^{\\circ}:(x,y)\\to(-y,x)",
      "(-7,-2)\\xrightarrow{\\text{逆 }270^{\\circ}}(-2,7)\\qquad (-5,-3)\\xrightarrow{\\text{順 }270^{\\circ}}(3,-5)"
     ],
     "vocab": [
      {
       "en": "180° rotation",
       "zh": "旋轉 180°（半圈）"
      },
      {
       "en": "270° rotation",
       "zh": "旋轉 270°（等於反向轉 90°）"
      }
     ],
     "warn": {
      "zh": "看到 $270^{\\circ}$ 先換成「反向 $90^{\\circ}$」，再用 90° 的公式。硬背 270° 的兩條公式反而容易記錯。"
     },
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"40.0\" y1=\"238.0\" x2=\"40.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"112.0\" y1=\"238.0\" x2=\"112.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"148.0\" y1=\"238.0\" x2=\"148.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"220.0\" y1=\"238.0\" x2=\"220.0\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-c5)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" marker-end=\"url(#ar-c5)\"/><text x=\"135.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><circle cx=\"130.0\" cy=\"130.0\" r=\"64.9\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"184.0\" y2=\"94.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"76.0\" y2=\"166.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"166.0\" y2=\"184.0\" stroke=\"#666\" stroke-width=\"1.1\"/><circle cx=\"184.0\" cy=\"94.0\" r=\"4.6\" fill=\"#111\"/><text x=\"192.0\" y=\"84.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(3, 2)</text><circle cx=\"76.0\" cy=\"166.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"66.0\" y=\"184.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">180°</text><circle cx=\"166.0\" cy=\"184.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"174.0\" y=\"202.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">270°</text></svg>",
       "caption": "180° 與 270°：三個位置都喺同一個圓周上"
      }
     ]
    },
    {
     "id": "ws04-c6",
     "topic": "ws04",
     "title": {
      "zh": "綜合：斜率、垂直與驗算",
      "en": "Slope, Perpendicular & Checking"
     },
     "body": {
      "zh": "變換題的第二部分幾乎都是「求斜率」或「證明垂直／平行」，只要兩條公式就夠：\n{{math:0}}\n・垂直（perpendicular）：$m_{1}\\times m_{2}=-1$（兩斜率互為負倒數）；\n・平行（parallel）：$m_{1}=m_{2}$；\n・長度（distance）：$AB=\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}$。\n作答格式（DSE 會給步驟分）：先寫出「Slope of $AB=\\ldots$」再寫「Slope of $A'B'=\\ldots$」，最後寫 「$\\because$ 兩斜率相乘 $=-1$，$\\therefore AB\\perp A'B'$」。\n{{math:1}}\n驗算三招：① 旋轉後到原點的距離不變；② 變換前後的線段長度相等（平移、反射、旋轉都不改長度）；③ 用方格紙在心裡畫一次，看方向對不對。"
     },
     "math": [
      "m=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\\qquad AB=\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}",
      "\\because\\ m_{1}\\times m_{2}=-1,\\ \\therefore\\ L_{1}\\perp L_{2}\\ (1M)"
     ],
     "vocab": [
      {
       "en": "slope",
       "zh": "斜率"
      },
      {
       "en": "perpendicular",
       "zh": "垂直（$\\perp$）"
      },
      {
       "en": "parallel",
       "zh": "平行（$\\parallel$）"
      }
     ],
     "warn": {
      "zh": "「證明垂直」一定要寫斜率相乘 $=-1$ 這一句才給分，只寫「看起來垂直」或只算其中一條斜率都不夠。"
     },
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c6\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"37.4\" y1=\"238.0\" x2=\"37.4\" y2=\"22.0\"/><line x1=\"52.9\" y1=\"238.0\" x2=\"52.9\" y2=\"22.0\"/><line x1=\"68.3\" y1=\"238.0\" x2=\"68.3\" y2=\"22.0\"/><line x1=\"83.7\" y1=\"238.0\" x2=\"83.7\" y2=\"22.0\"/><line x1=\"99.1\" y1=\"238.0\" x2=\"99.1\" y2=\"22.0\"/><line x1=\"114.6\" y1=\"238.0\" x2=\"114.6\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"145.4\" y1=\"238.0\" x2=\"145.4\" y2=\"22.0\"/><line x1=\"160.9\" y1=\"238.0\" x2=\"160.9\" y2=\"22.0\"/><line x1=\"176.3\" y1=\"238.0\" x2=\"176.3\" y2=\"22.0\"/><line x1=\"191.7\" y1=\"238.0\" x2=\"191.7\" y2=\"22.0\"/><line x1=\"207.1\" y1=\"238.0\" x2=\"207.1\" y2=\"22.0\"/><line x1=\"222.6\" y1=\"238.0\" x2=\"222.6\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"222.6\" x2=\"238.0\" y2=\"222.6\"/><line x1=\"22.0\" y1=\"207.1\" x2=\"238.0\" y2=\"207.1\"/><line x1=\"22.0\" y1=\"191.7\" x2=\"238.0\" y2=\"191.7\"/><line x1=\"22.0\" y1=\"176.3\" x2=\"238.0\" y2=\"176.3\"/><line x1=\"22.0\" y1=\"160.9\" x2=\"238.0\" y2=\"160.9\"/><line x1=\"22.0\" y1=\"145.4\" x2=\"238.0\" y2=\"145.4\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"114.6\" x2=\"238.0\" y2=\"114.6\"/><line x1=\"22.0\" y1=\"99.1\" x2=\"238.0\" y2=\"99.1\"/><line x1=\"22.0\" y1=\"83.7\" x2=\"238.0\" y2=\"83.7\"/><line x1=\"22.0\" y1=\"68.3\" x2=\"238.0\" y2=\"68.3\"/><line x1=\"22.0\" y1=\"52.9\" x2=\"238.0\" y2=\"52.9\"/><line x1=\"22.0\" y1=\"37.4\" x2=\"238.0\" y2=\"37.4\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"145.4\" x2=\"238.0\" y2=\"145.4\" marker-end=\"url(#ar-c6)\"/><text x=\"243.0\" y=\"159.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"114.6\" y1=\"238.0\" x2=\"114.6\" y2=\"22.0\" marker-end=\"url(#ar-c6)\"/><text x=\"119.6\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text></g><line x1=\"68.3\" y1=\"238.0\" x2=\"176.3\" y2=\"22.0\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"22.0\" y1=\"99.1\" x2=\"238.0\" y2=\"207.1\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"114.6\" y1=\"145.4\" x2=\"130.0\" y2=\"145.4\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><line x1=\"130.0\" y1=\"145.4\" x2=\"130.0\" y2=\"114.6\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><text x=\"122.3\" y=\"158.5\" font-size=\"10.0\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">1</text><text x=\"135.4\" y=\"130.0\" font-size=\"10.0\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">2</text><polygon points=\"114.6,145.4 121.1,132.3 134.2,138.9 127.7,152.0\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.2\"/><text x=\"157.8\" y=\"31.3\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L₁：m₁ = 2</text><text x=\"25.1\" y=\"93.0\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L₂：m₂ = −½</text></svg>",
       "caption": "m₁ × m₂ = −1 → 兩條線互相垂直"
      }
     ]
    }
   ],
   "long": [
    {
     "id": "eph-ws04-ex01",
     "type": "long",
     "topic": "ws04",
     "unit": 10,
     "subtopic": "coordinate-transformation",
     "difficulty": 2,
     "code": "WS4-EX1",
     "source": "WS04 Example 1 · [HKDSE 2022 Paper 1 Q7]",
     "stem": {
      "text": "The coordinates of the points $A$ and $B$ are $(9,-13)$ and $(-7,5)$ respectively. $A$ is rotated anticlockwise about $O$ through $90^{\\circ}$ to $A'$, where $O$ is the origin. $B'$ is the reflection image of $B$ with respect to the $y$-axis."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Write down the coordinates of $A'$ and $B'$.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Find the slope of $A'B'$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把 $A$ 繞原點逆時針轉 $90^{\\circ}$",
         "en": ""
        },
        "math": "(x,y)\\to(-y,x)\\ \\Rightarrow\\ A'(13,9)",
        "zh": "逆時針 $90^{\\circ}$ 的公式是 $(x,y)\\to(-y,x)$。$A(9,-13)$ 的 $-y=-(-13)=13$、$x=9$，所以 $A'=(13,9)$。",
        "en": "",
        "highlight": [
         "A'(13,9)"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 2 步 · 把 $B$ 對 $y$ 軸反射",
         "en": ""
        },
        "math": "(x,y)\\to(-x,y)\\ \\Rightarrow\\ B'(7,5)",
        "zh": "對 $y$ 軸反射是改 $x$ 的符號：$B(-7,5)$ → $B'=(7,5)$。",
        "en": "",
        "highlight": [
         "B'(7,5)"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 3 步 · 用斜率公式求 $A'B'$",
         "en": ""
        },
        "math": "m=\\frac{5-9}{7-13}=\\frac{-4}{-6}=\\frac{2}{3}",
        "zh": "斜率 $=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}$。代 $A'(13,9)$、$B'(7,5)$：$\\frac{5-9}{7-13}=\\frac{-4}{-6}=\\frac{2}{3}$。",
        "en": "",
        "highlight": [
         "\\frac{2}{3}"
        ],
        "marking": "(1M) (1A)"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "兩個變換分開做、分開寫，每一個都拿得到 (1A)；千萬不要一次過心算兩個變換。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked",
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex1a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"59.4\" y1=\"238.0\" x2=\"59.4\" y2=\"22.0\"/><line x1=\"67.7\" y1=\"238.0\" x2=\"67.7\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"84.3\" y1=\"238.0\" x2=\"84.3\" y2=\"22.0\"/><line x1=\"92.6\" y1=\"238.0\" x2=\"92.6\" y2=\"22.0\"/><line x1=\"100.9\" y1=\"238.0\" x2=\"100.9\" y2=\"22.0\"/><line x1=\"109.2\" y1=\"238.0\" x2=\"109.2\" y2=\"22.0\"/><line x1=\"117.5\" y1=\"238.0\" x2=\"117.5\" y2=\"22.0\"/><line x1=\"125.8\" y1=\"238.0\" x2=\"125.8\" y2=\"22.0\"/><line x1=\"134.2\" y1=\"238.0\" x2=\"134.2\" y2=\"22.0\"/><line x1=\"142.5\" y1=\"238.0\" x2=\"142.5\" y2=\"22.0\"/><line x1=\"150.8\" y1=\"238.0\" x2=\"150.8\" y2=\"22.0\"/><line x1=\"159.1\" y1=\"238.0\" x2=\"159.1\" y2=\"22.0\"/><line x1=\"167.4\" y1=\"238.0\" x2=\"167.4\" y2=\"22.0\"/><line x1=\"175.7\" y1=\"238.0\" x2=\"175.7\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"192.3\" y1=\"238.0\" x2=\"192.3\" y2=\"22.0\"/><line x1=\"200.6\" y1=\"238.0\" x2=\"200.6\" y2=\"22.0\"/><line x1=\"59.4\" y1=\"238.0\" x2=\"200.6\" y2=\"238.0\"/><line x1=\"59.4\" y1=\"229.7\" x2=\"200.6\" y2=\"229.7\"/><line x1=\"59.4\" y1=\"221.4\" x2=\"200.6\" y2=\"221.4\"/><line x1=\"59.4\" y1=\"213.1\" x2=\"200.6\" y2=\"213.1\"/><line x1=\"59.4\" y1=\"204.8\" x2=\"200.6\" y2=\"204.8\"/><line x1=\"59.4\" y1=\"196.5\" x2=\"200.6\" y2=\"196.5\"/><line x1=\"59.4\" y1=\"188.2\" x2=\"200.6\" y2=\"188.2\"/><line x1=\"59.4\" y1=\"179.8\" x2=\"200.6\" y2=\"179.8\"/><line x1=\"59.4\" y1=\"171.5\" x2=\"200.6\" y2=\"171.5\"/><line x1=\"59.4\" y1=\"163.2\" x2=\"200.6\" y2=\"163.2\"/><line x1=\"59.4\" y1=\"154.9\" x2=\"200.6\" y2=\"154.9\"/><line x1=\"59.4\" y1=\"146.6\" x2=\"200.6\" y2=\"146.6\"/><line x1=\"59.4\" y1=\"138.3\" x2=\"200.6\" y2=\"138.3\"/><line x1=\"59.4\" y1=\"130.0\" x2=\"200.6\" y2=\"130.0\"/><line x1=\"59.4\" y1=\"121.7\" x2=\"200.6\" y2=\"121.7\"/><line x1=\"59.4\" y1=\"113.4\" x2=\"200.6\" y2=\"113.4\"/><line x1=\"59.4\" y1=\"105.1\" x2=\"200.6\" y2=\"105.1\"/><line x1=\"59.4\" y1=\"96.8\" x2=\"200.6\" y2=\"96.8\"/><line x1=\"59.4\" y1=\"88.5\" x2=\"200.6\" y2=\"88.5\"/><line x1=\"59.4\" y1=\"80.2\" x2=\"200.6\" y2=\"80.2\"/><line x1=\"59.4\" y1=\"71.8\" x2=\"200.6\" y2=\"71.8\"/><line x1=\"59.4\" y1=\"63.5\" x2=\"200.6\" y2=\"63.5\"/><line x1=\"59.4\" y1=\"55.2\" x2=\"200.6\" y2=\"55.2\"/><line x1=\"59.4\" y1=\"46.9\" x2=\"200.6\" y2=\"46.9\"/><line x1=\"59.4\" y1=\"38.6\" x2=\"200.6\" y2=\"38.6\"/><line x1=\"59.4\" y1=\"30.3\" x2=\"200.6\" y2=\"30.3\"/><line x1=\"59.4\" y1=\"22.0\" x2=\"200.6\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"59.4\" y1=\"113.4\" x2=\"200.6\" y2=\"113.4\" marker-end=\"url(#ar-ex1a)\"/><text x=\"205.6\" y=\"127.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\" marker-end=\"url(#ar-ex1a)\"/><text x=\"81.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text></g><line x1=\"76.0\" y1=\"113.4\" x2=\"150.8\" y2=\"221.4\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"76.0\" y1=\"113.4\" x2=\"184.0\" y2=\"38.6\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 102.2 151.2 A 46.0 46.0 0 0 0 113.8 87.2\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-ex1a)\"/><text x=\"136.0\" y=\"128.3\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"150.8\" cy=\"221.4\" r=\"4.6\" fill=\"#111\"/><text x=\"158.8\" y=\"211.4\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(9, −13)</text><circle cx=\"184.0\" cy=\"38.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"176.0\" y=\"26.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A′(13, 9)</text><text x=\"68.0\" y=\"105.4\" font-size=\"10.0\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></svg>",
       "caption": "第 1 步：A(9, −13) 逆時針轉 90° → A′(13, 9)",
       "step": 1
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex1b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"211.0\" x2=\"22.0\" y2=\"49.0\"/><line x1=\"32.8\" y1=\"211.0\" x2=\"32.8\" y2=\"49.0\"/><line x1=\"43.6\" y1=\"211.0\" x2=\"43.6\" y2=\"49.0\"/><line x1=\"54.4\" y1=\"211.0\" x2=\"54.4\" y2=\"49.0\"/><line x1=\"65.2\" y1=\"211.0\" x2=\"65.2\" y2=\"49.0\"/><line x1=\"76.0\" y1=\"211.0\" x2=\"76.0\" y2=\"49.0\"/><line x1=\"86.8\" y1=\"211.0\" x2=\"86.8\" y2=\"49.0\"/><line x1=\"97.6\" y1=\"211.0\" x2=\"97.6\" y2=\"49.0\"/><line x1=\"108.4\" y1=\"211.0\" x2=\"108.4\" y2=\"49.0\"/><line x1=\"119.2\" y1=\"211.0\" x2=\"119.2\" y2=\"49.0\"/><line x1=\"130.0\" y1=\"211.0\" x2=\"130.0\" y2=\"49.0\"/><line x1=\"140.8\" y1=\"211.0\" x2=\"140.8\" y2=\"49.0\"/><line x1=\"151.6\" y1=\"211.0\" x2=\"151.6\" y2=\"49.0\"/><line x1=\"162.4\" y1=\"211.0\" x2=\"162.4\" y2=\"49.0\"/><line x1=\"173.2\" y1=\"211.0\" x2=\"173.2\" y2=\"49.0\"/><line x1=\"184.0\" y1=\"211.0\" x2=\"184.0\" y2=\"49.0\"/><line x1=\"194.8\" y1=\"211.0\" x2=\"194.8\" y2=\"49.0\"/><line x1=\"205.6\" y1=\"211.0\" x2=\"205.6\" y2=\"49.0\"/><line x1=\"216.4\" y1=\"211.0\" x2=\"216.4\" y2=\"49.0\"/><line x1=\"227.2\" y1=\"211.0\" x2=\"227.2\" y2=\"49.0\"/><line x1=\"238.0\" y1=\"211.0\" x2=\"238.0\" y2=\"49.0\"/><line x1=\"22.0\" y1=\"211.0\" x2=\"238.0\" y2=\"211.0\"/><line x1=\"22.0\" y1=\"200.2\" x2=\"238.0\" y2=\"200.2\"/><line x1=\"22.0\" y1=\"189.4\" x2=\"238.0\" y2=\"189.4\"/><line x1=\"22.0\" y1=\"178.6\" x2=\"238.0\" y2=\"178.6\"/><line x1=\"22.0\" y1=\"167.8\" x2=\"238.0\" y2=\"167.8\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"146.2\" x2=\"238.0\" y2=\"146.2\"/><line x1=\"22.0\" y1=\"135.4\" x2=\"238.0\" y2=\"135.4\"/><line x1=\"22.0\" y1=\"124.6\" x2=\"238.0\" y2=\"124.6\"/><line x1=\"22.0\" y1=\"113.8\" x2=\"238.0\" y2=\"113.8\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"92.2\" x2=\"238.0\" y2=\"92.2\"/><line x1=\"22.0\" y1=\"81.4\" x2=\"238.0\" y2=\"81.4\"/><line x1=\"22.0\" y1=\"70.6\" x2=\"238.0\" y2=\"70.6\"/><line x1=\"22.0\" y1=\"59.8\" x2=\"238.0\" y2=\"59.8\"/><line x1=\"22.0\" y1=\"49.0\" x2=\"238.0\" y2=\"49.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\" marker-end=\"url(#ar-ex1b)\"/><text x=\"243.0\" y=\"171.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"211.0\" x2=\"130.0\" y2=\"49.0\" marker-end=\"url(#ar-ex1b)\"/><text x=\"135.0\" y=\"47.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"171.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"211.0\" x2=\"130.0\" y2=\"49.0\" stroke=\"#111\" stroke-width=\"2.6\"/><line x1=\"54.4\" y1=\"103.0\" x2=\"205.6\" y2=\"103.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"54.4\" cy=\"103.0\" r=\"4.6\" fill=\"#111\"/><text x=\"62.4\" y=\"73.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(−7, 5)</text><circle cx=\"205.6\" cy=\"103.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"147.0\" y=\"127.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B′(7, 5)</text><text x=\"27.4\" y=\"54.4\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y 軸（鏡軸）</text><text x=\"92.2\" y=\"92.2\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">7</text><text x=\"165.6\" y=\"92.2\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">7</text></svg>",
       "caption": "第 2 步：B(−7, 5) 對 y 軸反射 → B′(7, 5)",
       "step": 2
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex1c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"214.0\" x2=\"22.0\" y2=\"46.0\"/><line x1=\"34.0\" y1=\"214.0\" x2=\"34.0\" y2=\"46.0\"/><line x1=\"46.0\" y1=\"214.0\" x2=\"46.0\" y2=\"46.0\"/><line x1=\"58.0\" y1=\"214.0\" x2=\"58.0\" y2=\"46.0\"/><line x1=\"70.0\" y1=\"214.0\" x2=\"70.0\" y2=\"46.0\"/><line x1=\"82.0\" y1=\"214.0\" x2=\"82.0\" y2=\"46.0\"/><line x1=\"94.0\" y1=\"214.0\" x2=\"94.0\" y2=\"46.0\"/><line x1=\"106.0\" y1=\"214.0\" x2=\"106.0\" y2=\"46.0\"/><line x1=\"118.0\" y1=\"214.0\" x2=\"118.0\" y2=\"46.0\"/><line x1=\"130.0\" y1=\"214.0\" x2=\"130.0\" y2=\"46.0\"/><line x1=\"142.0\" y1=\"214.0\" x2=\"142.0\" y2=\"46.0\"/><line x1=\"154.0\" y1=\"214.0\" x2=\"154.0\" y2=\"46.0\"/><line x1=\"166.0\" y1=\"214.0\" x2=\"166.0\" y2=\"46.0\"/><line x1=\"178.0\" y1=\"214.0\" x2=\"178.0\" y2=\"46.0\"/><line x1=\"190.0\" y1=\"214.0\" x2=\"190.0\" y2=\"46.0\"/><line x1=\"202.0\" y1=\"214.0\" x2=\"202.0\" y2=\"46.0\"/><line x1=\"214.0\" y1=\"214.0\" x2=\"214.0\" y2=\"46.0\"/><line x1=\"226.0\" y1=\"214.0\" x2=\"226.0\" y2=\"46.0\"/><line x1=\"238.0\" y1=\"214.0\" x2=\"238.0\" y2=\"46.0\"/><line x1=\"22.0\" y1=\"214.0\" x2=\"238.0\" y2=\"214.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"190.0\" x2=\"238.0\" y2=\"190.0\"/><line x1=\"22.0\" y1=\"178.0\" x2=\"238.0\" y2=\"178.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"154.0\" x2=\"238.0\" y2=\"154.0\"/><line x1=\"22.0\" y1=\"142.0\" x2=\"238.0\" y2=\"142.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"118.0\" x2=\"238.0\" y2=\"118.0\"/><line x1=\"22.0\" y1=\"106.0\" x2=\"238.0\" y2=\"106.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"82.0\" x2=\"238.0\" y2=\"82.0\"/><line x1=\"22.0\" y1=\"70.0\" x2=\"238.0\" y2=\"70.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"46.0\" x2=\"238.0\" y2=\"46.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"190.0\" x2=\"238.0\" y2=\"190.0\" marker-end=\"url(#ar-ex1c)\"/><text x=\"243.0\" y=\"204.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"46.0\" y1=\"214.0\" x2=\"46.0\" y2=\"46.0\" marker-end=\"url(#ar-ex1c)\"/><text x=\"51.0\" y=\"44.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"52.0\" y=\"204.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"58.0\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><line x1=\"202.0\" y1=\"130.0\" x2=\"202.0\" y2=\"82.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><circle cx=\"202.0\" cy=\"82.0\" r=\"4.6\" fill=\"#111\"/><text x=\"137.1\" y=\"70.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A′(13, 9)</text><circle cx=\"130.0\" cy=\"130.0\" r=\"4.6\" fill=\"#111\"/><text x=\"138.0\" y=\"118.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B′(7, 5)</text><text x=\"158.8\" y=\"134.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">6</text><text x=\"205.6\" y=\"103.6\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
       "caption": "第 3 步：A′(13, 9)、B′(7, 5) 的斜率 = 2/3",
       "step": 3
      }
     ]
    },
    {
     "id": "eph-ws04-ex02",
     "type": "long",
     "topic": "ws04",
     "unit": 10,
     "subtopic": "coordinate-transformation",
     "difficulty": 3,
     "code": "WS4-EX2",
     "source": "WS04 Example 2 · [HKDSE 2014 Paper 1 Q8]",
     "stem": {
      "text": "The coordinates of the points $R$ and $S$ are $(-5,-3)$ and $(0,5)$ respectively. $R$ is rotated clockwise about the origin $O$ through $270^{\\circ}$ to $R'$. $S$ is translated leftwards by $13$ units to $S'$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Write down the coordinates of $R'$ and $S'$.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Prove that $RS$ is perpendicular to $R'S'$.",
       "marks": 3
      }
     ],
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · $270^{\\circ}$ 化成「反向 $90^{\\circ}$」",
         "en": ""
        },
        "math": "\\text{順 }270^{\\circ}=\\text{逆 }90^{\\circ}:(x,y)\\to(-y,x)",
        "zh": "順時針 $270^{\\circ}$ 等於逆時針 $90^{\\circ}$，直接用 $(x,y)\\to(-y,x)$。",
        "en": ""
       },
       {
        "title": {
         "zh": "第 2 步 · 求 $R'$ 與 $S'$",
         "en": ""
        },
        "math": "R'(3,-5),\\qquad S'(-13,5)",
        "zh": "$R(-5,-3)$：$-y=3$、$x=-5$ → $R'=(3,-5)$。$S(0,5)$ 向左 13 → $x$ 減 13 → $S'=(-13,5)$。",
        "en": "",
        "highlight": [
         "R'(3,-5)",
         "S'(-13,5)"
        ],
        "marking": "(1A) (1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 分別求兩條線的斜率",
         "en": ""
        },
        "math": "m_{RS}=\\frac{5-(-3)}{0-(-5)}=\\frac{8}{5},\\qquad m_{R'S'}=\\frac{5-(-5)}{-13-3}=\\frac{10}{-16}=-\\frac{5}{8}",
        "zh": "兩條斜率都要算出來，DSE 每一步都給分。",
        "en": "",
        "marking": "(1M) (1A)"
       },
       {
        "title": {
         "zh": "第 4 步 · 相乘等於 $-1$ → 垂直",
         "en": ""
        },
        "math": "m_{RS}\\times m_{R'S'}=\\frac{8}{5}\\times\\left(-\\frac{5}{8}\\right)=-1\\ \\Rightarrow\\ RS\\perp R'S'",
        "zh": "「$\\because$ 兩斜率相乘 $=-1$，$\\therefore RS\\perp R'S'$」—— 這一句一定要寫，是拿 (1A) 的關鍵句。",
        "en": "",
        "highlight": [
         "-1"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "$\\frac{8}{5}$ 與 $-\\frac{5}{8}$ 互為負倒數（很對稱）—— 看到這種對稱就代表你算對了，這是自我檢查的好方法。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked",
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex2a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"217.8\" x2=\"22.0\" y2=\"42.2\"/><line x1=\"35.5\" y1=\"217.8\" x2=\"35.5\" y2=\"42.2\"/><line x1=\"49.0\" y1=\"217.8\" x2=\"49.0\" y2=\"42.2\"/><line x1=\"62.5\" y1=\"217.8\" x2=\"62.5\" y2=\"42.2\"/><line x1=\"76.0\" y1=\"217.8\" x2=\"76.0\" y2=\"42.2\"/><line x1=\"89.5\" y1=\"217.8\" x2=\"89.5\" y2=\"42.2\"/><line x1=\"103.0\" y1=\"217.8\" x2=\"103.0\" y2=\"42.2\"/><line x1=\"116.5\" y1=\"217.8\" x2=\"116.5\" y2=\"42.2\"/><line x1=\"130.0\" y1=\"217.8\" x2=\"130.0\" y2=\"42.2\"/><line x1=\"143.5\" y1=\"217.8\" x2=\"143.5\" y2=\"42.2\"/><line x1=\"157.0\" y1=\"217.8\" x2=\"157.0\" y2=\"42.2\"/><line x1=\"170.5\" y1=\"217.8\" x2=\"170.5\" y2=\"42.2\"/><line x1=\"184.0\" y1=\"217.8\" x2=\"184.0\" y2=\"42.2\"/><line x1=\"197.5\" y1=\"217.8\" x2=\"197.5\" y2=\"42.2\"/><line x1=\"211.0\" y1=\"217.8\" x2=\"211.0\" y2=\"42.2\"/><line x1=\"224.5\" y1=\"217.8\" x2=\"224.5\" y2=\"42.2\"/><line x1=\"238.0\" y1=\"217.8\" x2=\"238.0\" y2=\"42.2\"/><line x1=\"22.0\" y1=\"217.8\" x2=\"238.0\" y2=\"217.8\"/><line x1=\"22.0\" y1=\"204.2\" x2=\"238.0\" y2=\"204.2\"/><line x1=\"22.0\" y1=\"190.8\" x2=\"238.0\" y2=\"190.8\"/><line x1=\"22.0\" y1=\"177.2\" x2=\"238.0\" y2=\"177.2\"/><line x1=\"22.0\" y1=\"163.8\" x2=\"238.0\" y2=\"163.8\"/><line x1=\"22.0\" y1=\"150.2\" x2=\"238.0\" y2=\"150.2\"/><line x1=\"22.0\" y1=\"136.8\" x2=\"238.0\" y2=\"136.8\"/><line x1=\"22.0\" y1=\"123.2\" x2=\"238.0\" y2=\"123.2\"/><line x1=\"22.0\" y1=\"109.8\" x2=\"238.0\" y2=\"109.8\"/><line x1=\"22.0\" y1=\"96.2\" x2=\"238.0\" y2=\"96.2\"/><line x1=\"22.0\" y1=\"82.8\" x2=\"238.0\" y2=\"82.8\"/><line x1=\"22.0\" y1=\"69.2\" x2=\"238.0\" y2=\"69.2\"/><line x1=\"22.0\" y1=\"55.8\" x2=\"238.0\" y2=\"55.8\"/><line x1=\"22.0\" y1=\"42.2\" x2=\"238.0\" y2=\"42.2\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"96.2\" x2=\"238.0\" y2=\"96.2\" marker-end=\"url(#ar-ex2a)\"/><text x=\"243.0\" y=\"110.2\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"143.5\" y1=\"217.8\" x2=\"143.5\" y2=\"42.2\" marker-end=\"url(#ar-ex2a)\"/><text x=\"148.5\" y=\"40.2\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"149.5\" y=\"110.2\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"143.5\" y1=\"96.2\" x2=\"76.0\" y2=\"136.8\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"143.5\" y1=\"96.2\" x2=\"184.0\" y2=\"163.8\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 105.8 118.9 A 44.0 44.0 0 0 0 166.1 134.0\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-ex2a)\"/><text x=\"129.2\" y=\"157.5\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"76.0\" cy=\"136.8\" r=\"4.6\" fill=\"#111\"/><text x=\"68.0\" y=\"124.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R(−5, −3)</text><circle cx=\"184.0\" cy=\"163.8\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"176.0\" y=\"183.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R′(3, −5)</text></svg>",
       "caption": "第 1 步：順 270° ＝ 逆 90°：R(−5, −3) → R′(3, −5)",
       "step": 1
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex2b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"213.5\" x2=\"22.0\" y2=\"46.5\"/><line x1=\"31.8\" y1=\"213.5\" x2=\"31.8\" y2=\"46.5\"/><line x1=\"41.6\" y1=\"213.5\" x2=\"41.6\" y2=\"46.5\"/><line x1=\"51.5\" y1=\"213.5\" x2=\"51.5\" y2=\"46.5\"/><line x1=\"61.3\" y1=\"213.5\" x2=\"61.3\" y2=\"46.5\"/><line x1=\"71.1\" y1=\"213.5\" x2=\"71.1\" y2=\"46.5\"/><line x1=\"80.9\" y1=\"213.5\" x2=\"80.9\" y2=\"46.5\"/><line x1=\"90.7\" y1=\"213.5\" x2=\"90.7\" y2=\"46.5\"/><line x1=\"100.5\" y1=\"213.5\" x2=\"100.5\" y2=\"46.5\"/><line x1=\"110.4\" y1=\"213.5\" x2=\"110.4\" y2=\"46.5\"/><line x1=\"120.2\" y1=\"213.5\" x2=\"120.2\" y2=\"46.5\"/><line x1=\"130.0\" y1=\"213.5\" x2=\"130.0\" y2=\"46.5\"/><line x1=\"139.8\" y1=\"213.5\" x2=\"139.8\" y2=\"46.5\"/><line x1=\"149.6\" y1=\"213.5\" x2=\"149.6\" y2=\"46.5\"/><line x1=\"159.5\" y1=\"213.5\" x2=\"159.5\" y2=\"46.5\"/><line x1=\"169.3\" y1=\"213.5\" x2=\"169.3\" y2=\"46.5\"/><line x1=\"179.1\" y1=\"213.5\" x2=\"179.1\" y2=\"46.5\"/><line x1=\"188.9\" y1=\"213.5\" x2=\"188.9\" y2=\"46.5\"/><line x1=\"198.7\" y1=\"213.5\" x2=\"198.7\" y2=\"46.5\"/><line x1=\"208.5\" y1=\"213.5\" x2=\"208.5\" y2=\"46.5\"/><line x1=\"218.4\" y1=\"213.5\" x2=\"218.4\" y2=\"46.5\"/><line x1=\"228.2\" y1=\"213.5\" x2=\"228.2\" y2=\"46.5\"/><line x1=\"238.0\" y1=\"213.5\" x2=\"238.0\" y2=\"46.5\"/><line x1=\"22.0\" y1=\"213.5\" x2=\"238.0\" y2=\"213.5\"/><line x1=\"22.0\" y1=\"203.6\" x2=\"238.0\" y2=\"203.6\"/><line x1=\"22.0\" y1=\"193.8\" x2=\"238.0\" y2=\"193.8\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"174.2\" x2=\"238.0\" y2=\"174.2\"/><line x1=\"22.0\" y1=\"164.4\" x2=\"238.0\" y2=\"164.4\"/><line x1=\"22.0\" y1=\"154.5\" x2=\"238.0\" y2=\"154.5\"/><line x1=\"22.0\" y1=\"144.7\" x2=\"238.0\" y2=\"144.7\"/><line x1=\"22.0\" y1=\"134.9\" x2=\"238.0\" y2=\"134.9\"/><line x1=\"22.0\" y1=\"125.1\" x2=\"238.0\" y2=\"125.1\"/><line x1=\"22.0\" y1=\"115.3\" x2=\"238.0\" y2=\"115.3\"/><line x1=\"22.0\" y1=\"105.5\" x2=\"238.0\" y2=\"105.5\"/><line x1=\"22.0\" y1=\"95.6\" x2=\"238.0\" y2=\"95.6\"/><line x1=\"22.0\" y1=\"85.8\" x2=\"238.0\" y2=\"85.8\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"66.2\" x2=\"238.0\" y2=\"66.2\"/><line x1=\"22.0\" y1=\"56.4\" x2=\"238.0\" y2=\"56.4\"/><line x1=\"22.0\" y1=\"46.5\" x2=\"238.0\" y2=\"46.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"134.9\" x2=\"238.0\" y2=\"134.9\" marker-end=\"url(#ar-ex2b)\"/><text x=\"243.0\" y=\"148.9\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"179.1\" y1=\"213.5\" x2=\"179.1\" y2=\"46.5\" marker-end=\"url(#ar-ex2b)\"/><text x=\"184.1\" y=\"44.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"185.1\" y=\"148.9\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"179.1\" y1=\"134.9\" x2=\"130.0\" y2=\"164.4\" stroke=\"#666\" stroke-width=\"1.1\" stroke-dasharray=\"3 2.5\"/><line x1=\"179.1\" y1=\"134.9\" x2=\"208.5\" y2=\"184.0\" stroke=\"#666\" stroke-width=\"1.1\" stroke-dasharray=\"3 2.5\"/><line x1=\"179.1\" y1=\"85.8\" x2=\"51.5\" y2=\"85.8\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-ex2b)\"/><circle cx=\"130.0\" cy=\"164.4\" r=\"4.6\" fill=\"#111\"/><text x=\"122.0\" y=\"150.4\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R(−5, −3)</text><circle cx=\"208.5\" cy=\"184.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"143.6\" y=\"194.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R′(3, −5)</text><circle cx=\"179.1\" cy=\"85.8\" r=\"4.6\" fill=\"#111\"/><text x=\"187.1\" y=\"75.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S(0, 5)</text><circle cx=\"51.5\" cy=\"85.8\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"43.5\" y=\"75.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S′(−13, 5)</text><text x=\"95.6\" y=\"94.7\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">左 13</text></svg>",
       "caption": "第 2 步：R′(3, −5)；S 向左 13 → S′(−13, 5)",
       "step": 2
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex2c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"213.5\" x2=\"22.0\" y2=\"46.5\"/><line x1=\"31.8\" y1=\"213.5\" x2=\"31.8\" y2=\"46.5\"/><line x1=\"41.6\" y1=\"213.5\" x2=\"41.6\" y2=\"46.5\"/><line x1=\"51.5\" y1=\"213.5\" x2=\"51.5\" y2=\"46.5\"/><line x1=\"61.3\" y1=\"213.5\" x2=\"61.3\" y2=\"46.5\"/><line x1=\"71.1\" y1=\"213.5\" x2=\"71.1\" y2=\"46.5\"/><line x1=\"80.9\" y1=\"213.5\" x2=\"80.9\" y2=\"46.5\"/><line x1=\"90.7\" y1=\"213.5\" x2=\"90.7\" y2=\"46.5\"/><line x1=\"100.5\" y1=\"213.5\" x2=\"100.5\" y2=\"46.5\"/><line x1=\"110.4\" y1=\"213.5\" x2=\"110.4\" y2=\"46.5\"/><line x1=\"120.2\" y1=\"213.5\" x2=\"120.2\" y2=\"46.5\"/><line x1=\"130.0\" y1=\"213.5\" x2=\"130.0\" y2=\"46.5\"/><line x1=\"139.8\" y1=\"213.5\" x2=\"139.8\" y2=\"46.5\"/><line x1=\"149.6\" y1=\"213.5\" x2=\"149.6\" y2=\"46.5\"/><line x1=\"159.5\" y1=\"213.5\" x2=\"159.5\" y2=\"46.5\"/><line x1=\"169.3\" y1=\"213.5\" x2=\"169.3\" y2=\"46.5\"/><line x1=\"179.1\" y1=\"213.5\" x2=\"179.1\" y2=\"46.5\"/><line x1=\"188.9\" y1=\"213.5\" x2=\"188.9\" y2=\"46.5\"/><line x1=\"198.7\" y1=\"213.5\" x2=\"198.7\" y2=\"46.5\"/><line x1=\"208.5\" y1=\"213.5\" x2=\"208.5\" y2=\"46.5\"/><line x1=\"218.4\" y1=\"213.5\" x2=\"218.4\" y2=\"46.5\"/><line x1=\"228.2\" y1=\"213.5\" x2=\"228.2\" y2=\"46.5\"/><line x1=\"238.0\" y1=\"213.5\" x2=\"238.0\" y2=\"46.5\"/><line x1=\"22.0\" y1=\"213.5\" x2=\"238.0\" y2=\"213.5\"/><line x1=\"22.0\" y1=\"203.6\" x2=\"238.0\" y2=\"203.6\"/><line x1=\"22.0\" y1=\"193.8\" x2=\"238.0\" y2=\"193.8\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"174.2\" x2=\"238.0\" y2=\"174.2\"/><line x1=\"22.0\" y1=\"164.4\" x2=\"238.0\" y2=\"164.4\"/><line x1=\"22.0\" y1=\"154.5\" x2=\"238.0\" y2=\"154.5\"/><line x1=\"22.0\" y1=\"144.7\" x2=\"238.0\" y2=\"144.7\"/><line x1=\"22.0\" y1=\"134.9\" x2=\"238.0\" y2=\"134.9\"/><line x1=\"22.0\" y1=\"125.1\" x2=\"238.0\" y2=\"125.1\"/><line x1=\"22.0\" y1=\"115.3\" x2=\"238.0\" y2=\"115.3\"/><line x1=\"22.0\" y1=\"105.5\" x2=\"238.0\" y2=\"105.5\"/><line x1=\"22.0\" y1=\"95.6\" x2=\"238.0\" y2=\"95.6\"/><line x1=\"22.0\" y1=\"85.8\" x2=\"238.0\" y2=\"85.8\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"66.2\" x2=\"238.0\" y2=\"66.2\"/><line x1=\"22.0\" y1=\"56.4\" x2=\"238.0\" y2=\"56.4\"/><line x1=\"22.0\" y1=\"46.5\" x2=\"238.0\" y2=\"46.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"134.9\" x2=\"238.0\" y2=\"134.9\" marker-end=\"url(#ar-ex2c)\"/><text x=\"243.0\" y=\"148.9\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"179.1\" y1=\"213.5\" x2=\"179.1\" y2=\"46.5\" marker-end=\"url(#ar-ex2c)\"/><text x=\"184.1\" y=\"44.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"185.1\" y=\"148.9\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"164.4\" x2=\"179.1\" y2=\"85.8\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"208.5\" y1=\"184.0\" x2=\"51.5\" y2=\"85.8\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"130.0\" y1=\"164.4\" x2=\"179.1\" y2=\"164.4\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><line x1=\"179.1\" y1=\"164.4\" x2=\"179.1\" y2=\"85.8\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><circle cx=\"130.0\" cy=\"164.4\" r=\"4.6\" fill=\"#111\"/><text x=\"122.0\" y=\"154.4\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R(−5, −3)</text><circle cx=\"179.1\" cy=\"85.8\" r=\"4.6\" fill=\"#111\"/><text x=\"187.1\" y=\"75.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S(0, 5)</text><circle cx=\"208.5\" cy=\"184.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"143.6\" y=\"196.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R′(3, −5)</text><circle cx=\"51.5\" cy=\"85.8\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"43.5\" y=\"75.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S′(−13, 5)</text><text x=\"154.5\" y=\"173.2\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">5</text><text x=\"183.0\" y=\"125.1\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">8</text></svg>",
       "caption": "第 3 步：m(RS) = 8/5、m(R′S′) = −5/8",
       "step": 3
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex2d\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"213.5\" x2=\"22.0\" y2=\"46.5\"/><line x1=\"31.8\" y1=\"213.5\" x2=\"31.8\" y2=\"46.5\"/><line x1=\"41.6\" y1=\"213.5\" x2=\"41.6\" y2=\"46.5\"/><line x1=\"51.5\" y1=\"213.5\" x2=\"51.5\" y2=\"46.5\"/><line x1=\"61.3\" y1=\"213.5\" x2=\"61.3\" y2=\"46.5\"/><line x1=\"71.1\" y1=\"213.5\" x2=\"71.1\" y2=\"46.5\"/><line x1=\"80.9\" y1=\"213.5\" x2=\"80.9\" y2=\"46.5\"/><line x1=\"90.7\" y1=\"213.5\" x2=\"90.7\" y2=\"46.5\"/><line x1=\"100.5\" y1=\"213.5\" x2=\"100.5\" y2=\"46.5\"/><line x1=\"110.4\" y1=\"213.5\" x2=\"110.4\" y2=\"46.5\"/><line x1=\"120.2\" y1=\"213.5\" x2=\"120.2\" y2=\"46.5\"/><line x1=\"130.0\" y1=\"213.5\" x2=\"130.0\" y2=\"46.5\"/><line x1=\"139.8\" y1=\"213.5\" x2=\"139.8\" y2=\"46.5\"/><line x1=\"149.6\" y1=\"213.5\" x2=\"149.6\" y2=\"46.5\"/><line x1=\"159.5\" y1=\"213.5\" x2=\"159.5\" y2=\"46.5\"/><line x1=\"169.3\" y1=\"213.5\" x2=\"169.3\" y2=\"46.5\"/><line x1=\"179.1\" y1=\"213.5\" x2=\"179.1\" y2=\"46.5\"/><line x1=\"188.9\" y1=\"213.5\" x2=\"188.9\" y2=\"46.5\"/><line x1=\"198.7\" y1=\"213.5\" x2=\"198.7\" y2=\"46.5\"/><line x1=\"208.5\" y1=\"213.5\" x2=\"208.5\" y2=\"46.5\"/><line x1=\"218.4\" y1=\"213.5\" x2=\"218.4\" y2=\"46.5\"/><line x1=\"228.2\" y1=\"213.5\" x2=\"228.2\" y2=\"46.5\"/><line x1=\"238.0\" y1=\"213.5\" x2=\"238.0\" y2=\"46.5\"/><line x1=\"22.0\" y1=\"213.5\" x2=\"238.0\" y2=\"213.5\"/><line x1=\"22.0\" y1=\"203.6\" x2=\"238.0\" y2=\"203.6\"/><line x1=\"22.0\" y1=\"193.8\" x2=\"238.0\" y2=\"193.8\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"174.2\" x2=\"238.0\" y2=\"174.2\"/><line x1=\"22.0\" y1=\"164.4\" x2=\"238.0\" y2=\"164.4\"/><line x1=\"22.0\" y1=\"154.5\" x2=\"238.0\" y2=\"154.5\"/><line x1=\"22.0\" y1=\"144.7\" x2=\"238.0\" y2=\"144.7\"/><line x1=\"22.0\" y1=\"134.9\" x2=\"238.0\" y2=\"134.9\"/><line x1=\"22.0\" y1=\"125.1\" x2=\"238.0\" y2=\"125.1\"/><line x1=\"22.0\" y1=\"115.3\" x2=\"238.0\" y2=\"115.3\"/><line x1=\"22.0\" y1=\"105.5\" x2=\"238.0\" y2=\"105.5\"/><line x1=\"22.0\" y1=\"95.6\" x2=\"238.0\" y2=\"95.6\"/><line x1=\"22.0\" y1=\"85.8\" x2=\"238.0\" y2=\"85.8\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"66.2\" x2=\"238.0\" y2=\"66.2\"/><line x1=\"22.0\" y1=\"56.4\" x2=\"238.0\" y2=\"56.4\"/><line x1=\"22.0\" y1=\"46.5\" x2=\"238.0\" y2=\"46.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"134.9\" x2=\"238.0\" y2=\"134.9\" marker-end=\"url(#ar-ex2d)\"/><text x=\"243.0\" y=\"148.9\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"179.1\" y1=\"213.5\" x2=\"179.1\" y2=\"46.5\" marker-end=\"url(#ar-ex2d)\"/><text x=\"184.1\" y=\"44.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"185.1\" y=\"148.9\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"164.4\" x2=\"179.1\" y2=\"85.8\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"208.5\" y1=\"184.0\" x2=\"51.5\" y2=\"85.8\" stroke=\"#111\" stroke-width=\"1.6\"/><polygon points=\"143.2,143.2 146.9,137.4 141.0,133.7 137.4,139.5\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.2\"/><circle cx=\"130.0\" cy=\"164.4\" r=\"4.6\" fill=\"#111\"/><text x=\"122.0\" y=\"154.4\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R(−5, −3)</text><circle cx=\"179.1\" cy=\"85.8\" r=\"4.6\" fill=\"#111\"/><text x=\"187.1\" y=\"75.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S(0, 5)</text><circle cx=\"208.5\" cy=\"184.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"143.6\" y=\"196.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R′(3, −5)</text><circle cx=\"51.5\" cy=\"85.8\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"43.5\" y=\"75.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S′(−13, 5)</text></svg>",
       "caption": "第 4 步：8/5 × (−5/8) = −1 → RS ⟂ R′S′",
       "step": 4
      }
     ]
    },
    {
     "id": "eph-ws04-ex03",
     "type": "long",
     "topic": "ws04",
     "unit": 10,
     "subtopic": "coordinate-transformation",
     "difficulty": 3,
     "code": "WS4-EX3",
     "source": "WS04 Practice 2",
     "stem": {
      "text": "The coordinates of the points $P$ and $Q$ are $(4,2)$ and $(6,5)$ respectively. $P$ is translated leftwards by $3$ units to $P'$. $Q$ is rotated anticlockwise about the origin $O$ through $90^{\\circ}$ to $Q'$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Write down the coordinates of $P'$ and $Q'$.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Prove that $PQ$ is perpendicular to $P'Q'$.",
       "marks": 3
      }
     ],
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · $P$ 向左平移 3 單位",
         "en": ""
        },
        "math": "P'(4-3,\\ 2)=(1,2)",
        "zh": "「向左」是 $x$ 減 3，$y$ 不變。",
        "en": "",
        "highlight": [
         "P'(1,2)"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 2 步 · $Q$ 繞原點逆時針轉 $90^{\\circ}$",
         "en": ""
        },
        "math": "(x,y)\\to(-y,x)\\ \\Rightarrow\\ Q'(-5,6)",
        "zh": "$Q(6,5)$：$-y=-5$、$x=6$ → $Q'=(-5,6)$。",
        "en": "",
        "highlight": [
         "Q'(-5,6)"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 3 步 · 求兩條線的斜率",
         "en": ""
        },
        "math": "m_{PQ}=\\frac{5-2}{6-4}=\\frac{3}{2},\\qquad m_{P'Q'}=\\frac{6-2}{-5-1}=\\frac{4}{-6}=-\\frac{2}{3}",
        "zh": "代斜率公式，注意 $P'Q'$ 的分母是 $-5-1=-6$（負號不要漏）。",
        "en": "",
        "marking": "(1M) (1A)"
       },
       {
        "title": {
         "zh": "第 4 步 · 相乘等於 $-1$ → 垂直",
         "en": ""
        },
        "math": "\\frac{3}{2}\\times\\left(-\\frac{2}{3}\\right)=-1\\ \\Rightarrow\\ PQ\\perp P'Q'",
        "zh": "兩斜率相乘 $=-1$，所以兩線垂直。",
        "en": "",
        "highlight": [
         "-1"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "兩個點用不同的變換（一個平移、一個旋轉），所以 $PQ$ 與 $P'Q'$ 的長度不相等是正常的；題目只問垂直，用「斜率相乘 $=-1$」就足夠，不必理長度。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked",
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex3a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"214.0\" x2=\"22.0\" y2=\"46.0\"/><line x1=\"46.0\" y1=\"214.0\" x2=\"46.0\" y2=\"46.0\"/><line x1=\"70.0\" y1=\"214.0\" x2=\"70.0\" y2=\"46.0\"/><line x1=\"94.0\" y1=\"214.0\" x2=\"94.0\" y2=\"46.0\"/><line x1=\"118.0\" y1=\"214.0\" x2=\"118.0\" y2=\"46.0\"/><line x1=\"142.0\" y1=\"214.0\" x2=\"142.0\" y2=\"46.0\"/><line x1=\"166.0\" y1=\"214.0\" x2=\"166.0\" y2=\"46.0\"/><line x1=\"190.0\" y1=\"214.0\" x2=\"190.0\" y2=\"46.0\"/><line x1=\"214.0\" y1=\"214.0\" x2=\"214.0\" y2=\"46.0\"/><line x1=\"238.0\" y1=\"214.0\" x2=\"238.0\" y2=\"46.0\"/><line x1=\"22.0\" y1=\"214.0\" x2=\"238.0\" y2=\"214.0\"/><line x1=\"22.0\" y1=\"190.0\" x2=\"238.0\" y2=\"190.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"142.0\" x2=\"238.0\" y2=\"142.0\"/><line x1=\"22.0\" y1=\"118.0\" x2=\"238.0\" y2=\"118.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"70.0\" x2=\"238.0\" y2=\"70.0\"/><line x1=\"22.0\" y1=\"46.0\" x2=\"238.0\" y2=\"46.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\" marker-end=\"url(#ar-ex3a)\"/><text x=\"243.0\" y=\"180.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"70.0\" y1=\"214.0\" x2=\"70.0\" y2=\"46.0\" marker-end=\"url(#ar-ex3a)\"/><text x=\"75.0\" y=\"44.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"76.0\" y=\"180.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"166.0\" y1=\"118.0\" x2=\"94.0\" y2=\"118.0\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-ex3a)\"/><circle cx=\"166.0\" cy=\"118.0\" r=\"4.6\" fill=\"#111\"/><text x=\"174.0\" y=\"106.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(4, 2)</text><circle cx=\"94.0\" cy=\"118.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"86.0\" y=\"106.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P′(1, 2)</text><text x=\"127.6\" y=\"139.6\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">左 3</text></svg>",
       "caption": "第 1 步：P(4, 2) 向左 3 單位 → P′(1, 2)",
       "step": 1
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex3b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"184.0\" x2=\"22.0\" y2=\"76.0\"/><line x1=\"35.5\" y1=\"184.0\" x2=\"35.5\" y2=\"76.0\"/><line x1=\"49.0\" y1=\"184.0\" x2=\"49.0\" y2=\"76.0\"/><line x1=\"62.5\" y1=\"184.0\" x2=\"62.5\" y2=\"76.0\"/><line x1=\"76.0\" y1=\"184.0\" x2=\"76.0\" y2=\"76.0\"/><line x1=\"89.5\" y1=\"184.0\" x2=\"89.5\" y2=\"76.0\"/><line x1=\"103.0\" y1=\"184.0\" x2=\"103.0\" y2=\"76.0\"/><line x1=\"116.5\" y1=\"184.0\" x2=\"116.5\" y2=\"76.0\"/><line x1=\"130.0\" y1=\"184.0\" x2=\"130.0\" y2=\"76.0\"/><line x1=\"143.5\" y1=\"184.0\" x2=\"143.5\" y2=\"76.0\"/><line x1=\"157.0\" y1=\"184.0\" x2=\"157.0\" y2=\"76.0\"/><line x1=\"170.5\" y1=\"184.0\" x2=\"170.5\" y2=\"76.0\"/><line x1=\"184.0\" y1=\"184.0\" x2=\"184.0\" y2=\"76.0\"/><line x1=\"197.5\" y1=\"184.0\" x2=\"197.5\" y2=\"76.0\"/><line x1=\"211.0\" y1=\"184.0\" x2=\"211.0\" y2=\"76.0\"/><line x1=\"224.5\" y1=\"184.0\" x2=\"224.5\" y2=\"76.0\"/><line x1=\"238.0\" y1=\"184.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"170.5\" x2=\"238.0\" y2=\"170.5\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"116.5\" x2=\"238.0\" y2=\"116.5\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"89.5\" x2=\"238.0\" y2=\"89.5\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\" marker-end=\"url(#ar-ex3b)\"/><text x=\"243.0\" y=\"198.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"184.0\" x2=\"130.0\" y2=\"76.0\" marker-end=\"url(#ar-ex3b)\"/><text x=\"135.0\" y=\"74.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"198.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"184.0\" x2=\"211.0\" y2=\"116.5\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"184.0\" x2=\"62.5\" y2=\"103.0\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 163.8 155.8 A 44.0 44.0 0 0 0 101.8 150.2\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-ex3b)\"/><text x=\"135.3\" y=\"129.2\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"211.0\" cy=\"116.5\" r=\"4.6\" fill=\"#111\"/><text x=\"158.7\" y=\"104.5\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q(6, 5)</text><circle cx=\"62.5\" cy=\"103.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"54.5\" y=\"91.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q′(−5, 6)</text></svg>",
       "caption": "第 2 步：Q(6, 5) 逆時針轉 90° → Q′(−5, 6)",
       "step": 2
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex3c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"199.9\" x2=\"22.0\" y2=\"60.1\"/><line x1=\"34.7\" y1=\"199.9\" x2=\"34.7\" y2=\"60.1\"/><line x1=\"47.4\" y1=\"199.9\" x2=\"47.4\" y2=\"60.1\"/><line x1=\"60.1\" y1=\"199.9\" x2=\"60.1\" y2=\"60.1\"/><line x1=\"72.8\" y1=\"199.9\" x2=\"72.8\" y2=\"60.1\"/><line x1=\"85.5\" y1=\"199.9\" x2=\"85.5\" y2=\"60.1\"/><line x1=\"98.2\" y1=\"199.9\" x2=\"98.2\" y2=\"60.1\"/><line x1=\"110.9\" y1=\"199.9\" x2=\"110.9\" y2=\"60.1\"/><line x1=\"123.6\" y1=\"199.9\" x2=\"123.6\" y2=\"60.1\"/><line x1=\"136.4\" y1=\"199.9\" x2=\"136.4\" y2=\"60.1\"/><line x1=\"149.1\" y1=\"199.9\" x2=\"149.1\" y2=\"60.1\"/><line x1=\"161.8\" y1=\"199.9\" x2=\"161.8\" y2=\"60.1\"/><line x1=\"174.5\" y1=\"199.9\" x2=\"174.5\" y2=\"60.1\"/><line x1=\"187.2\" y1=\"199.9\" x2=\"187.2\" y2=\"60.1\"/><line x1=\"199.9\" y1=\"199.9\" x2=\"199.9\" y2=\"60.1\"/><line x1=\"212.6\" y1=\"199.9\" x2=\"212.6\" y2=\"60.1\"/><line x1=\"225.3\" y1=\"199.9\" x2=\"225.3\" y2=\"60.1\"/><line x1=\"238.0\" y1=\"199.9\" x2=\"238.0\" y2=\"60.1\"/><line x1=\"22.0\" y1=\"199.9\" x2=\"238.0\" y2=\"199.9\"/><line x1=\"22.0\" y1=\"187.2\" x2=\"238.0\" y2=\"187.2\"/><line x1=\"22.0\" y1=\"174.5\" x2=\"238.0\" y2=\"174.5\"/><line x1=\"22.0\" y1=\"161.8\" x2=\"238.0\" y2=\"161.8\"/><line x1=\"22.0\" y1=\"149.1\" x2=\"238.0\" y2=\"149.1\"/><line x1=\"22.0\" y1=\"136.4\" x2=\"238.0\" y2=\"136.4\"/><line x1=\"22.0\" y1=\"123.6\" x2=\"238.0\" y2=\"123.6\"/><line x1=\"22.0\" y1=\"110.9\" x2=\"238.0\" y2=\"110.9\"/><line x1=\"22.0\" y1=\"98.2\" x2=\"238.0\" y2=\"98.2\"/><line x1=\"22.0\" y1=\"85.5\" x2=\"238.0\" y2=\"85.5\"/><line x1=\"22.0\" y1=\"72.8\" x2=\"238.0\" y2=\"72.8\"/><line x1=\"22.0\" y1=\"60.1\" x2=\"238.0\" y2=\"60.1\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"174.5\" x2=\"238.0\" y2=\"174.5\" marker-end=\"url(#ar-ex3c)\"/><text x=\"243.0\" y=\"188.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"123.6\" y1=\"199.9\" x2=\"123.6\" y2=\"60.1\" marker-end=\"url(#ar-ex3c)\"/><text x=\"128.6\" y=\"58.1\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"129.6\" y=\"188.5\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"174.5\" y1=\"149.1\" x2=\"199.9\" y2=\"110.9\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"136.4\" y1=\"149.1\" x2=\"60.1\" y2=\"98.2\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"174.5\" y1=\"149.1\" x2=\"199.9\" y2=\"149.1\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><line x1=\"199.9\" y1=\"149.1\" x2=\"199.9\" y2=\"110.9\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><circle cx=\"174.5\" cy=\"149.1\" r=\"4.6\" fill=\"#111\"/><text x=\"182.5\" y=\"163.1\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(4, 2)</text><circle cx=\"199.9\" cy=\"110.9\" r=\"4.6\" fill=\"#111\"/><text x=\"147.6\" y=\"98.9\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q(6, 5)</text><circle cx=\"136.4\" cy=\"149.1\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"128.4\" y=\"137.1\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P′(1, 2)</text><circle cx=\"60.1\" cy=\"98.2\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"52.1\" y=\"86.2\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q′(−5, 6)</text><text x=\"187.2\" y=\"137.6\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">2</text><text x=\"204.3\" y=\"131.3\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">3</text></svg>",
       "caption": "第 3 步：m(PQ) = 3/2、m(P′Q′) = −2/3",
       "step": 3
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-ex3d\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"199.9\" x2=\"22.0\" y2=\"60.1\"/><line x1=\"34.7\" y1=\"199.9\" x2=\"34.7\" y2=\"60.1\"/><line x1=\"47.4\" y1=\"199.9\" x2=\"47.4\" y2=\"60.1\"/><line x1=\"60.1\" y1=\"199.9\" x2=\"60.1\" y2=\"60.1\"/><line x1=\"72.8\" y1=\"199.9\" x2=\"72.8\" y2=\"60.1\"/><line x1=\"85.5\" y1=\"199.9\" x2=\"85.5\" y2=\"60.1\"/><line x1=\"98.2\" y1=\"199.9\" x2=\"98.2\" y2=\"60.1\"/><line x1=\"110.9\" y1=\"199.9\" x2=\"110.9\" y2=\"60.1\"/><line x1=\"123.6\" y1=\"199.9\" x2=\"123.6\" y2=\"60.1\"/><line x1=\"136.4\" y1=\"199.9\" x2=\"136.4\" y2=\"60.1\"/><line x1=\"149.1\" y1=\"199.9\" x2=\"149.1\" y2=\"60.1\"/><line x1=\"161.8\" y1=\"199.9\" x2=\"161.8\" y2=\"60.1\"/><line x1=\"174.5\" y1=\"199.9\" x2=\"174.5\" y2=\"60.1\"/><line x1=\"187.2\" y1=\"199.9\" x2=\"187.2\" y2=\"60.1\"/><line x1=\"199.9\" y1=\"199.9\" x2=\"199.9\" y2=\"60.1\"/><line x1=\"212.6\" y1=\"199.9\" x2=\"212.6\" y2=\"60.1\"/><line x1=\"225.3\" y1=\"199.9\" x2=\"225.3\" y2=\"60.1\"/><line x1=\"238.0\" y1=\"199.9\" x2=\"238.0\" y2=\"60.1\"/><line x1=\"22.0\" y1=\"199.9\" x2=\"238.0\" y2=\"199.9\"/><line x1=\"22.0\" y1=\"187.2\" x2=\"238.0\" y2=\"187.2\"/><line x1=\"22.0\" y1=\"174.5\" x2=\"238.0\" y2=\"174.5\"/><line x1=\"22.0\" y1=\"161.8\" x2=\"238.0\" y2=\"161.8\"/><line x1=\"22.0\" y1=\"149.1\" x2=\"238.0\" y2=\"149.1\"/><line x1=\"22.0\" y1=\"136.4\" x2=\"238.0\" y2=\"136.4\"/><line x1=\"22.0\" y1=\"123.6\" x2=\"238.0\" y2=\"123.6\"/><line x1=\"22.0\" y1=\"110.9\" x2=\"238.0\" y2=\"110.9\"/><line x1=\"22.0\" y1=\"98.2\" x2=\"238.0\" y2=\"98.2\"/><line x1=\"22.0\" y1=\"85.5\" x2=\"238.0\" y2=\"85.5\"/><line x1=\"22.0\" y1=\"72.8\" x2=\"238.0\" y2=\"72.8\"/><line x1=\"22.0\" y1=\"60.1\" x2=\"238.0\" y2=\"60.1\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"174.5\" x2=\"238.0\" y2=\"174.5\" marker-end=\"url(#ar-ex3d)\"/><text x=\"243.0\" y=\"188.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"123.6\" y1=\"199.9\" x2=\"123.6\" y2=\"60.1\" marker-end=\"url(#ar-ex3d)\"/><text x=\"128.6\" y=\"58.1\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"129.6\" y=\"188.5\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"174.5\" y1=\"149.1\" x2=\"199.9\" y2=\"110.9\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"136.4\" y1=\"149.1\" x2=\"60.1\" y2=\"98.2\" stroke=\"#111\" stroke-width=\"1.6\"/><polygon points=\"162.7,166.7 167.7,159.3 160.3,154.3 155.3,161.7\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.2\"/><circle cx=\"174.5\" cy=\"149.1\" r=\"4.6\" fill=\"#111\"/><text x=\"182.5\" y=\"137.1\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(4, 2)</text><circle cx=\"199.9\" cy=\"110.9\" r=\"4.6\" fill=\"#111\"/><text x=\"147.6\" y=\"98.9\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q(6, 5)</text><circle cx=\"136.4\" cy=\"149.1\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"128.4\" y=\"171.1\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P′(1, 2)</text><circle cx=\"60.1\" cy=\"98.2\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"52.1\" y=\"86.2\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q′(−5, 6)</text></svg>",
       "caption": "第 4 步：3/2 × (−2/3) = −1 → PQ ⟂ P′Q′",
       "step": 4
      }
     ]
    }
   ],
   "pages": [
    [
     {
      "id": "eph-ws04-w01",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 1,
      "code": "WS4-W01",
      "source": "WS04 過渡題（自編）· Level 1 基本平移（單一方向）",
      "stem": {
       "text": "If the point $(3,-5)$ is translated leftwards by $4$ units to the point $P$, then the coordinates of $P$ are"
      },
      "options": {
       "A": "$(-1,-5)$",
       "B": "$(7,-5)$",
       "C": "$(3,-9)$",
       "D": "$(3,-1)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先讀方向字，決定動哪個坐標",
          "en": "Step 1 · Direction tells you which coordinate moves"
         },
         "math": "\\text{左右睇 }x\\text{，上下睇 }y",
         "zh": "平移題第一秒不是計數，而是讀方向：「leftwards（向左）」是水平移動，所以只會改變橫坐標 $x$，$y$ 坐標完全不動，仍然是 $-5$。",
         "en": "A horizontal translation changes only the x-coordinate; y stays at -5."
        },
        {
         "title": {
          "zh": "第 2 步 · 向左是減，計出新坐標",
          "en": "Step 2 · Leftwards means subtract"
         },
         "math": "x'=3-4=-1,\\quad y'=-5\\ \\Rightarrow\\ P(-1,-5)",
         "zh": "向左＝數值變小＝用「減」：$3-4=-1$，$y$ 維持 $-5$，所以 $P=(-1,-5)$，答案選 A。",
         "en": "3 - 4 = -1, so P = (-1, -5). Answer: A.",
         "highlight": [
          "(-1,-5)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(7,-5)$ 是把「向左」誤算成加法（$3+4=7$）。向右（rightwards）才是加，向左（leftwards）一定是減。",
         "en": "Added instead of subtracted."
        },
        {
         "opt": "C",
         "zh": "$(3,-9)$ 是把平移算到 $y$ 上（$-5-4=-9$）。左右移動絕對不可以動 $y$。",
         "en": "Moved in the y-direction instead of the x-direction."
        }
       ],
       "tip": {
        "zh": "平移口訣：右加左減動 $x$、上加下減動 $y$。題目說動哪邊，另一個坐標就原地不動。",
        "en": "Right/up adds; left/down subtracts. The other coordinate never changes."
       }
      },
      "answer": "A",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-bw1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"46.9\" y1=\"238.0\" x2=\"46.9\" y2=\"22.0\"/><line x1=\"63.5\" y1=\"238.0\" x2=\"63.5\" y2=\"22.0\"/><line x1=\"80.2\" y1=\"238.0\" x2=\"80.2\" y2=\"22.0\"/><line x1=\"96.8\" y1=\"238.0\" x2=\"96.8\" y2=\"22.0\"/><line x1=\"113.4\" y1=\"238.0\" x2=\"113.4\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"146.6\" y1=\"238.0\" x2=\"146.6\" y2=\"22.0\"/><line x1=\"163.2\" y1=\"238.0\" x2=\"163.2\" y2=\"22.0\"/><line x1=\"179.8\" y1=\"238.0\" x2=\"179.8\" y2=\"22.0\"/><line x1=\"196.5\" y1=\"238.0\" x2=\"196.5\" y2=\"22.0\"/><line x1=\"213.1\" y1=\"238.0\" x2=\"213.1\" y2=\"22.0\"/><line x1=\"46.9\" y1=\"238.0\" x2=\"213.1\" y2=\"238.0\"/><line x1=\"46.9\" y1=\"221.4\" x2=\"213.1\" y2=\"221.4\"/><line x1=\"46.9\" y1=\"204.8\" x2=\"213.1\" y2=\"204.8\"/><line x1=\"46.9\" y1=\"188.2\" x2=\"213.1\" y2=\"188.2\"/><line x1=\"46.9\" y1=\"171.5\" x2=\"213.1\" y2=\"171.5\"/><line x1=\"46.9\" y1=\"154.9\" x2=\"213.1\" y2=\"154.9\"/><line x1=\"46.9\" y1=\"138.3\" x2=\"213.1\" y2=\"138.3\"/><line x1=\"46.9\" y1=\"121.7\" x2=\"213.1\" y2=\"121.7\"/><line x1=\"46.9\" y1=\"105.1\" x2=\"213.1\" y2=\"105.1\"/><line x1=\"46.9\" y1=\"88.5\" x2=\"213.1\" y2=\"88.5\"/><line x1=\"46.9\" y1=\"71.8\" x2=\"213.1\" y2=\"71.8\"/><line x1=\"46.9\" y1=\"55.2\" x2=\"213.1\" y2=\"55.2\"/><line x1=\"46.9\" y1=\"38.6\" x2=\"213.1\" y2=\"38.6\"/><line x1=\"46.9\" y1=\"22.0\" x2=\"213.1\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"46.9\" y1=\"88.5\" x2=\"213.1\" y2=\"88.5\" marker-end=\"url(#ar-bw1)\"/><text x=\"218.1\" y=\"102.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"113.4\" y1=\"238.0\" x2=\"113.4\" y2=\"22.0\" marker-end=\"url(#ar-bw1)\"/><text x=\"118.4\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"119.4\" y=\"102.5\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"163.2\" y1=\"171.5\" x2=\"96.8\" y2=\"171.5\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-bw1)\"/><circle cx=\"163.2\" cy=\"171.5\" r=\"4.6\" fill=\"#111\"/><text x=\"171.2\" y=\"145.5\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(3, −5)</text><circle cx=\"96.8\" cy=\"171.5\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"104.8\" y=\"131.5\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(−1, −5)</text><text x=\"115.0\" y=\"148.3\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">左 4</text></svg>",
        "caption": "向左 4 單位：x 減 4，y 不變（3, −5）→ P(−1, −5)"
       }
      ]
     },
     {
      "id": "eph-ws04-w02",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 1,
      "code": "WS4-W02",
      "source": "WS04 過渡題（自編）· Level 2 對坐標軸反射（只改一個號）",
      "stem": {
       "text": "If the point $(-4,7)$ is reflected with respect to the $x$-axis to the point $Q$, then the coordinates of $Q$ are"
      },
      "options": {
       "A": "$(4,7)$",
       "B": "$(-4,-7)$",
       "C": "$(4,-7)$",
       "D": "$(7,-4)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 鏡射原則：對哪條軸，哪條就不動",
          "en": "Step 1 · The named axis stays unchanged"
         },
         "math": "\\text{對 }x\\text{ 軸反射：}(x,y)\\to(x,-y)",
         "zh": "反射就是照鏡。把鏡子放在水平的 $x$ 軸上，原本在上面的點會翻到下面，左右位置完全不變。所以「對 $x$ 軸反射：$x$ 不動，只改 $y$ 的正負號」。",
         "en": "Reflecting across the x-axis keeps x and changes the sign of y."
        },
        {
         "title": {
          "zh": "第 2 步 · 只把 y 變號",
          "en": "Step 2 · Change the sign of y"
         },
         "math": "(-4,7)\\to(-4,-7)",
         "zh": "$x$ 仍然是 $-4$；$y$ 由 $7$ 變成 $-7$，所以 $Q=(-4,-7)$，答案選 B。",
         "en": "x stays -4 and y becomes -7, so Q = (-4, -7). Answer: B.",
         "highlight": [
          "(-4,-7)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(4,7)$ 是改了 $x$ 的符號 —— 那是「對 $y$ 軸反射」的結果。這是最多同學記反的一個位。",
         "en": "That is the result of reflecting across the y-axis."
        },
        {
         "opt": "C",
         "zh": "$(4,-7)$ 是把兩個坐標都變號 —— 那是「繞原點旋轉 $180^{\\circ}$」的結果。",
         "en": "Both signs flipped — that is a 180-degree rotation."
        }
       ],
       "tip": {
        "zh": "口訣：題目提到哪條軸，那條軸的坐標就不改（對 $x$ 軸反射不改 $x$；對 $y$ 軸反射不改 $y$），只改另一個。",
        "en": "Keep the named axis fixed and flip only the other coordinate."
       }
      },
      "answer": "B",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-bw2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"70.0\" y1=\"238.0\" x2=\"70.0\" y2=\"22.0\"/><line x1=\"82.0\" y1=\"238.0\" x2=\"82.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"106.0\" y1=\"238.0\" x2=\"106.0\" y2=\"22.0\"/><line x1=\"118.0\" y1=\"238.0\" x2=\"118.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"142.0\" y1=\"238.0\" x2=\"142.0\" y2=\"22.0\"/><line x1=\"154.0\" y1=\"238.0\" x2=\"154.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"178.0\" y1=\"238.0\" x2=\"178.0\" y2=\"22.0\"/><line x1=\"190.0\" y1=\"238.0\" x2=\"190.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"202.0\" y2=\"238.0\"/><line x1=\"58.0\" y1=\"226.0\" x2=\"202.0\" y2=\"226.0\"/><line x1=\"58.0\" y1=\"214.0\" x2=\"202.0\" y2=\"214.0\"/><line x1=\"58.0\" y1=\"202.0\" x2=\"202.0\" y2=\"202.0\"/><line x1=\"58.0\" y1=\"190.0\" x2=\"202.0\" y2=\"190.0\"/><line x1=\"58.0\" y1=\"178.0\" x2=\"202.0\" y2=\"178.0\"/><line x1=\"58.0\" y1=\"166.0\" x2=\"202.0\" y2=\"166.0\"/><line x1=\"58.0\" y1=\"154.0\" x2=\"202.0\" y2=\"154.0\"/><line x1=\"58.0\" y1=\"142.0\" x2=\"202.0\" y2=\"142.0\"/><line x1=\"58.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\"/><line x1=\"58.0\" y1=\"118.0\" x2=\"202.0\" y2=\"118.0\"/><line x1=\"58.0\" y1=\"106.0\" x2=\"202.0\" y2=\"106.0\"/><line x1=\"58.0\" y1=\"94.0\" x2=\"202.0\" y2=\"94.0\"/><line x1=\"58.0\" y1=\"82.0\" x2=\"202.0\" y2=\"82.0\"/><line x1=\"58.0\" y1=\"70.0\" x2=\"202.0\" y2=\"70.0\"/><line x1=\"58.0\" y1=\"58.0\" x2=\"202.0\" y2=\"58.0\"/><line x1=\"58.0\" y1=\"46.0\" x2=\"202.0\" y2=\"46.0\"/><line x1=\"58.0\" y1=\"34.0\" x2=\"202.0\" y2=\"34.0\"/><line x1=\"58.0\" y1=\"22.0\" x2=\"202.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"58.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\" marker-end=\"url(#ar-bw2)\"/><text x=\"207.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\" marker-end=\"url(#ar-bw2)\"/><text x=\"171.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"172.0\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"58.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"173.2\" y=\"109.6\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">鏡軸</text><line x1=\"118.0\" y1=\"46.0\" x2=\"118.0\" y2=\"214.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"118.0\" cy=\"46.0\" r=\"4.6\" fill=\"#111\"/><text x=\"126.0\" y=\"34.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(−4, 7)</text><circle cx=\"118.0\" cy=\"214.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"126.0\" y=\"234.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(−4, −7)</text><text x=\"123.4\" y=\"89.2\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">7</text><text x=\"123.4\" y=\"170.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">7</text></svg>",
        "caption": "對 x 軸反射：x 不變、y 變號（−4, 7）→ (−4, −7)"
       }
      ]
     },
     {
      "id": "eph-ws04-w03",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 1,
      "code": "WS4-W03",
      "source": "WS04 過渡題（自編）· Level 3 繞原點逆時針旋轉 90°",
      "stem": {
       "text": "If the point $(2,5)$ is rotated anticlockwise about the origin through $90^{\\circ}$ to the point $R$, then the coordinates of $R$ are"
      },
      "options": {
       "A": "$(-5,2)$",
       "B": "$(5,-2)$",
       "C": "$(-2,-5)$",
       "D": "$(5,2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 90°／270° 的第一步：數字調位",
          "en": "Step 1 · Swap the two numbers"
         },
         "math": "(x,y)\\to(y,x)\\ \\text{再判斷正負號}",
         "zh": "轉 $90^{\\circ}$ 或 $270^{\\circ}$，第一步必定是把橫、縱坐標的「數值」對調：$(2,5)$ 先變成 $(5,2)$。這一步只是調位，正負號之後才處理。",
         "en": "For a 90 or 270 degree rotation, first swap the x and y numbers."
        },
        {
         "title": {
          "zh": "第 2 步 · 逆時針 90° 的正負號規則",
          "en": "Step 2 · Sign rule for anticlockwise 90°"
         },
         "math": "\\text{逆 }90^{\\circ}:(x,y)\\to(-y,x)",
         "zh": "公式是 $(x,y)\\to(-y,x)$：原本的 $y$ 是 $5$，搬到前面要加負號變成 $-5$；原本的 $x$ 是 $2$，保持原號放到後面。所以 $R=(-5,2)$，答案選 A。",
         "en": "Anticlockwise 90°: (x, y) → (-y, x), so R = (-5, 2). Answer: A.",
         "highlight": [
          "(-5,2)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(5,-2)$ 是「順時針 $90^{\\circ}$」的公式 $(y,-x)$。記法：逆時針是「前面的 $y$ 變號」，順時針是「後面的 $x$ 變號」。",
         "en": "That is the clockwise 90° rule (y, -x)."
        },
        {
         "opt": "C",
         "zh": "$(-2,-5)$ 完全沒有調位，只是加了負號 —— 這不是 $90^{\\circ}$ 旋轉。",
         "en": "No swap was done."
        }
       ],
       "tip": {
        "zh": "用象限自我檢查：$(2,5)$ 在第一象限（右上），逆時針轉四分之一圈必定落在第二象限（左上），而左上的坐標一定是「負 $x$、正 $y$」—— 一眼就鎖定 $(-5,2)$。",
        "en": "Quadrant check: from Quadrant I anticlockwise by 90° must land in Quadrant II (−, +)."
       }
      },
      "answer": "A",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-bw3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"29.7\" y1=\"238.0\" x2=\"29.7\" y2=\"22.0\"/><line x1=\"45.1\" y1=\"238.0\" x2=\"45.1\" y2=\"22.0\"/><line x1=\"60.6\" y1=\"238.0\" x2=\"60.6\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"91.4\" y1=\"238.0\" x2=\"91.4\" y2=\"22.0\"/><line x1=\"106.9\" y1=\"238.0\" x2=\"106.9\" y2=\"22.0\"/><line x1=\"122.3\" y1=\"238.0\" x2=\"122.3\" y2=\"22.0\"/><line x1=\"137.7\" y1=\"238.0\" x2=\"137.7\" y2=\"22.0\"/><line x1=\"153.1\" y1=\"238.0\" x2=\"153.1\" y2=\"22.0\"/><line x1=\"168.6\" y1=\"238.0\" x2=\"168.6\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"199.4\" y1=\"238.0\" x2=\"199.4\" y2=\"22.0\"/><line x1=\"214.9\" y1=\"238.0\" x2=\"214.9\" y2=\"22.0\"/><line x1=\"230.3\" y1=\"238.0\" x2=\"230.3\" y2=\"22.0\"/><line x1=\"29.7\" y1=\"238.0\" x2=\"230.3\" y2=\"238.0\"/><line x1=\"29.7\" y1=\"222.6\" x2=\"230.3\" y2=\"222.6\"/><line x1=\"29.7\" y1=\"207.1\" x2=\"230.3\" y2=\"207.1\"/><line x1=\"29.7\" y1=\"191.7\" x2=\"230.3\" y2=\"191.7\"/><line x1=\"29.7\" y1=\"176.3\" x2=\"230.3\" y2=\"176.3\"/><line x1=\"29.7\" y1=\"160.9\" x2=\"230.3\" y2=\"160.9\"/><line x1=\"29.7\" y1=\"145.4\" x2=\"230.3\" y2=\"145.4\"/><line x1=\"29.7\" y1=\"130.0\" x2=\"230.3\" y2=\"130.0\"/><line x1=\"29.7\" y1=\"114.6\" x2=\"230.3\" y2=\"114.6\"/><line x1=\"29.7\" y1=\"99.1\" x2=\"230.3\" y2=\"99.1\"/><line x1=\"29.7\" y1=\"83.7\" x2=\"230.3\" y2=\"83.7\"/><line x1=\"29.7\" y1=\"68.3\" x2=\"230.3\" y2=\"68.3\"/><line x1=\"29.7\" y1=\"52.9\" x2=\"230.3\" y2=\"52.9\"/><line x1=\"29.7\" y1=\"37.4\" x2=\"230.3\" y2=\"37.4\"/><line x1=\"29.7\" y1=\"22.0\" x2=\"230.3\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"29.7\" y1=\"145.4\" x2=\"230.3\" y2=\"145.4\" marker-end=\"url(#ar-bw3)\"/><text x=\"235.3\" y=\"159.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"153.1\" y1=\"238.0\" x2=\"153.1\" y2=\"22.0\" marker-end=\"url(#ar-bw3)\"/><text x=\"158.1\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text></g><line x1=\"153.1\" y1=\"145.4\" x2=\"184.0\" y2=\"68.3\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"153.1\" y1=\"145.4\" x2=\"76.0\" y2=\"114.6\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 169.5 104.6 A 44.0 44.0 0 0 0 112.3 129.1\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-bw3)\"/><text x=\"129.9\" y=\"95.2\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"184.0\" cy=\"68.3\" r=\"4.6\" fill=\"#111\"/><text x=\"192.0\" y=\"58.3\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(2, 5)</text><circle cx=\"76.0\" cy=\"114.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"68.0\" y=\"102.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R(−5, 2)</text><text x=\"145.1\" y=\"137.4\" font-size=\"10.0\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></svg>",
        "caption": "逆時針 90°：(x, y) → (−y, x)，(2, 5) → R(−5, 2)"
       }
      ]
     }
    ],
    [
     {
      "id": "eph-ws04-w04",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 1,
      "code": "WS4-W04",
      "source": "WS04 過渡題（自編）· Level 4 繞原點旋轉 180°（兩個號一齊改）",
      "stem": {
       "text": "If the point $(-6,1)$ is rotated about the origin through $180^{\\circ}$ to the point $S$, then the coordinates of $S$ are"
      },
      "options": {
       "A": "$(6,1)$",
       "B": "$(-6,-1)$",
       "C": "$(6,-1)$",
       "D": "$(1,-6)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認清 180° 的特徵：不調位",
          "en": "Step 1 · 180° does not swap"
         },
         "math": "\\text{轉 }180^{\\circ}:(x,y)\\to(-x,-y)",
         "zh": "轉 $180^{\\circ}$ 就是轉半個圈，落點在完全相反的方向：位置不用對調，純粹「兩個坐標一齊變號」。順時針或逆時針轉 $180^{\\circ}$，結果都一樣。",
         "en": "Rotating 180° inverts both signs without swapping; direction does not matter."
        },
        {
         "title": {
          "zh": "第 2 步 · 逐個坐標變號",
          "en": "Step 2 · Invert both signs"
         },
         "math": "x:-6\\to 6,\\qquad y:1\\to -1\\ \\Rightarrow\\ S(6,-1)",
         "zh": "$x$ 由 $-6$ 變成 $6$；$y$ 由 $1$ 變成 $-1$。所以 $S=(6,-1)$，答案選 C。驗算：$(6,-1)$ 與 $(-6,1)$ 到原點的距離一樣（都是 $\\sqrt{37}$），方向剛好相反 ✓。",
         "en": "(-6, 1) becomes (6, -1): the image is directly opposite. Answer: C.",
         "highlight": [
          "(6,-1)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(6,1)$ 只改了 $x$ 的符號，忘記 $y$ 也要變號。",
         "en": "Forgot to flip the sign of y."
        },
        {
         "opt": "D",
         "zh": "$(1,-6)$ 把數字調了位 —— 只有 $90^{\\circ}$ 與 $270^{\\circ}$ 才需要調位，$180^{\\circ}$ 一定不調位。",
         "en": "Swapped the coordinates; only 90°/270° need a swap."
        }
       ],
       "tip": {
        "zh": "$180^{\\circ}$ 旋轉是送分題：不用理會順時針還是逆時針，看到 $180^{\\circ}$ 就把兩個坐標的正負號一齊倒轉。",
        "en": "For 180°, just invert both signs — the direction is irrelevant."
       }
      },
      "answer": "C",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-bw4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"190.0\" x2=\"22.0\" y2=\"70.0\"/><line x1=\"34.0\" y1=\"190.0\" x2=\"34.0\" y2=\"70.0\"/><line x1=\"46.0\" y1=\"190.0\" x2=\"46.0\" y2=\"70.0\"/><line x1=\"58.0\" y1=\"190.0\" x2=\"58.0\" y2=\"70.0\"/><line x1=\"70.0\" y1=\"190.0\" x2=\"70.0\" y2=\"70.0\"/><line x1=\"82.0\" y1=\"190.0\" x2=\"82.0\" y2=\"70.0\"/><line x1=\"94.0\" y1=\"190.0\" x2=\"94.0\" y2=\"70.0\"/><line x1=\"106.0\" y1=\"190.0\" x2=\"106.0\" y2=\"70.0\"/><line x1=\"118.0\" y1=\"190.0\" x2=\"118.0\" y2=\"70.0\"/><line x1=\"130.0\" y1=\"190.0\" x2=\"130.0\" y2=\"70.0\"/><line x1=\"142.0\" y1=\"190.0\" x2=\"142.0\" y2=\"70.0\"/><line x1=\"154.0\" y1=\"190.0\" x2=\"154.0\" y2=\"70.0\"/><line x1=\"166.0\" y1=\"190.0\" x2=\"166.0\" y2=\"70.0\"/><line x1=\"178.0\" y1=\"190.0\" x2=\"178.0\" y2=\"70.0\"/><line x1=\"190.0\" y1=\"190.0\" x2=\"190.0\" y2=\"70.0\"/><line x1=\"202.0\" y1=\"190.0\" x2=\"202.0\" y2=\"70.0\"/><line x1=\"214.0\" y1=\"190.0\" x2=\"214.0\" y2=\"70.0\"/><line x1=\"226.0\" y1=\"190.0\" x2=\"226.0\" y2=\"70.0\"/><line x1=\"238.0\" y1=\"190.0\" x2=\"238.0\" y2=\"70.0\"/><line x1=\"22.0\" y1=\"190.0\" x2=\"238.0\" y2=\"190.0\"/><line x1=\"22.0\" y1=\"178.0\" x2=\"238.0\" y2=\"178.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"154.0\" x2=\"238.0\" y2=\"154.0\"/><line x1=\"22.0\" y1=\"142.0\" x2=\"238.0\" y2=\"142.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"118.0\" x2=\"238.0\" y2=\"118.0\"/><line x1=\"22.0\" y1=\"106.0\" x2=\"238.0\" y2=\"106.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"82.0\" x2=\"238.0\" y2=\"82.0\"/><line x1=\"22.0\" y1=\"70.0\" x2=\"238.0\" y2=\"70.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-bw4)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"190.0\" x2=\"130.0\" y2=\"70.0\" marker-end=\"url(#ar-bw4)\"/><text x=\"135.0\" y=\"68.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text></g><line x1=\"130.0\" y1=\"130.0\" x2=\"58.0\" y2=\"118.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"202.0\" y2=\"142.0\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 90.5 123.4 A 40.0 40.0 0 0 0 169.5 136.6\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-bw4)\"/><text x=\"121.0\" y=\"188.3\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">180°</text><circle cx=\"58.0\" cy=\"118.0\" r=\"4.6\" fill=\"#111\"/><text x=\"50.0\" y=\"106.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(−6, 1)</text><circle cx=\"202.0\" cy=\"142.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"143.4\" y=\"154.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S(6, −1)</text><text x=\"122.0\" y=\"122.0\" font-size=\"10.0\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></svg>",
        "caption": "180° 旋轉：(x, y) → (−x, −y)，(−6, 1) → S(6, −1)"
       }
      ]
     },
     {
      "id": "eph-ws04-q01",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 1,
      "code": "WS4-Q01",
      "source": "EPH WS04 Q1 · [HKDSE Sample Paper 2 Q26]",
      "stem": {
       "text": "If the point $(-7,-2)$ is rotated anticlockwise about the origin through $270^{\\circ}$, then the coordinates of its image are"
      },
      "options": {
       "A": "$(-2,7)$",
       "B": "$(7,-2)$",
       "C": "$(2,-7)$",
       "D": "$(-7,2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把 $270^{\\circ}$ 換成反向 $90^{\\circ}$",
          "en": ""
         },
         "math": "\\text{逆 }270^{\\circ}=\\text{順 }90^{\\circ}:(x,y)\\to(y,-x)",
         "zh": "逆時針 $270^{\\circ}$ 等於順時針 $90^{\\circ}$，公式是 $(x,y)\\to(y,-x)$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 代入 $(-7,-2)$",
          "en": ""
         },
         "math": "(-7,-2)\\to(-2,\\ -(-7))=(-2,7)",
         "zh": "$y=-2$ 搬到前面、$x=-7$ 變號成 $7$ 放後面 → $(-2,7)$。",
         "en": "",
         "highlight": [
          "(-2,7)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(7,-2)$ 是把兩個座標都變號又調位（用錯了逆時針 $90^{\\circ}$ 的公式）。",
         "en": "Used the anticlockwise formula."
        },
        {
         "opt": "C",
         "zh": "$(2,-7)$ 是用了 $180^{\\circ}$ 之後再調位，兩種規則混在一起。",
         "en": "Mixed up the rotation rules."
        }
       ],
       "tip": {
        "zh": "看到 $270^{\\circ}$ 就先換成反向 $90^{\\circ}$，再用你背熟的 90° 公式，最穩。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"36.4\" y1=\"238.0\" x2=\"36.4\" y2=\"22.0\"/><line x1=\"50.8\" y1=\"238.0\" x2=\"50.8\" y2=\"22.0\"/><line x1=\"65.2\" y1=\"238.0\" x2=\"65.2\" y2=\"22.0\"/><line x1=\"79.6\" y1=\"238.0\" x2=\"79.6\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"108.4\" y1=\"238.0\" x2=\"108.4\" y2=\"22.0\"/><line x1=\"122.8\" y1=\"238.0\" x2=\"122.8\" y2=\"22.0\"/><line x1=\"137.2\" y1=\"238.0\" x2=\"137.2\" y2=\"22.0\"/><line x1=\"151.6\" y1=\"238.0\" x2=\"151.6\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"180.4\" y1=\"238.0\" x2=\"180.4\" y2=\"22.0\"/><line x1=\"194.8\" y1=\"238.0\" x2=\"194.8\" y2=\"22.0\"/><line x1=\"209.2\" y1=\"238.0\" x2=\"209.2\" y2=\"22.0\"/><line x1=\"223.6\" y1=\"238.0\" x2=\"223.6\" y2=\"22.0\"/><line x1=\"36.4\" y1=\"238.0\" x2=\"223.6\" y2=\"238.0\"/><line x1=\"36.4\" y1=\"223.6\" x2=\"223.6\" y2=\"223.6\"/><line x1=\"36.4\" y1=\"209.2\" x2=\"223.6\" y2=\"209.2\"/><line x1=\"36.4\" y1=\"194.8\" x2=\"223.6\" y2=\"194.8\"/><line x1=\"36.4\" y1=\"180.4\" x2=\"223.6\" y2=\"180.4\"/><line x1=\"36.4\" y1=\"166.0\" x2=\"223.6\" y2=\"166.0\"/><line x1=\"36.4\" y1=\"151.6\" x2=\"223.6\" y2=\"151.6\"/><line x1=\"36.4\" y1=\"137.2\" x2=\"223.6\" y2=\"137.2\"/><line x1=\"36.4\" y1=\"122.8\" x2=\"223.6\" y2=\"122.8\"/><line x1=\"36.4\" y1=\"108.4\" x2=\"223.6\" y2=\"108.4\"/><line x1=\"36.4\" y1=\"94.0\" x2=\"223.6\" y2=\"94.0\"/><line x1=\"36.4\" y1=\"79.6\" x2=\"223.6\" y2=\"79.6\"/><line x1=\"36.4\" y1=\"65.2\" x2=\"223.6\" y2=\"65.2\"/><line x1=\"36.4\" y1=\"50.8\" x2=\"223.6\" y2=\"50.8\"/><line x1=\"36.4\" y1=\"36.4\" x2=\"223.6\" y2=\"36.4\"/><line x1=\"36.4\" y1=\"22.0\" x2=\"223.6\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"36.4\" y1=\"166.0\" x2=\"223.6\" y2=\"166.0\" marker-end=\"url(#ar-q1)\"/><text x=\"228.6\" y=\"180.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"180.4\" y1=\"238.0\" x2=\"180.4\" y2=\"22.0\" marker-end=\"url(#ar-q1)\"/><text x=\"185.4\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"186.4\" y=\"180.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"180.4\" y1=\"166.0\" x2=\"79.6\" y2=\"194.8\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"180.4\" y1=\"166.0\" x2=\"151.6\" y2=\"65.2\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 136.2 178.6 A 46.0 46.0 0 1 0 167.8 121.8\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-q1)\"/><text x=\"233.7\" y=\"199.6\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">270°</text><circle cx=\"79.6\" cy=\"194.8\" r=\"4.6\" fill=\"#111\"/><text x=\"87.6\" y=\"184.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(−7, −2)</text><circle cx=\"151.6\" cy=\"65.2\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"159.6\" y=\"55.2\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(−2, 7)</text></svg>",
        "caption": "逆時針 270° = 順時針 90°：(x, y) → (y, −x)"
       }
      ]
     },
     {
      "id": "eph-ws04-q02",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 2,
      "code": "WS4-Q02",
      "source": "EPH WS04 Q2 · [Modified from HKCEE 2009 Paper 2 Q30]",
      "stem": {
       "text": "The coordinates of the point $A$ are $(4,-4)$. $L$ is a vertical line passing through $(2,0)$. If $A$ is reflected with respect to the straight line $L$ to the point $B$, then the distance between $A$ and $B$ is"
      },
      "options": {
       "A": "$1$",
       "B": "$2$",
       "C": "$3$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出直線 $L$ 的方程",
          "en": ""
         },
         "math": "L:\\ x=2",
         "zh": "「垂直線且通過 $(2,0)$」表示 $L$ 是 $x=2$（線上每一點的 $x$ 都是 2）。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 求反射後的點 $B$",
          "en": ""
         },
         "math": "B=(2\\times2-4,\\ -4)=(0,-4)",
         "zh": "對 $x=2$ 反射：$x'=2(2)-4=0$，$y$ 不變 → $B=(0,-4)$。",
         "en": "",
         "highlight": [
          "(0,-4)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 求 $A$ 與 $B$ 的距離",
          "en": ""
         },
         "math": "|4-0|=4",
         "zh": "兩點的 $y$ 相同，距離就是 $x$ 的差：$4-0=4$。（也可用「點到直線距離 $\\times2$」：$|4-2|\\times2=4$。）",
         "en": "",
         "highlight": [
          "4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$2$ 是「點到直線的距離」，忘記乘 2 —— 反射要跨到另一邊，是兩倍。",
         "en": "Forgot to double the distance."
        },
        {
         "opt": "A",
         "zh": "$1$ 是把距離算成 $|4-2|-1$，沒有按公式做。",
         "en": "Miscalculated the distance."
        }
       ],
       "tip": {
        "zh": "「點到鏡軸的距離」和「點與影像的距離」是兩回事：後者是前者的 2 倍。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"40.0\" y1=\"238.0\" x2=\"40.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"112.0\" y1=\"238.0\" x2=\"112.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"148.0\" y1=\"238.0\" x2=\"148.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"220.0\" y1=\"238.0\" x2=\"220.0\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\" marker-end=\"url(#ar-q2)\"/><text x=\"243.0\" y=\"108.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\" marker-end=\"url(#ar-q2)\"/><text x=\"99.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"100.0\" y=\"108.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"36.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：x = 2</text><line x1=\"166.0\" y1=\"166.0\" x2=\"94.0\" y2=\"166.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"166.0\" cy=\"166.0\" r=\"4.6\" fill=\"#111\"/><text x=\"174.0\" y=\"136.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(4, −4)</text><circle cx=\"94.0\" cy=\"166.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"102.0\" y=\"186.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(0, −4)</text><text x=\"148.0\" y=\"148.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">2</text><text x=\"112.0\" y=\"148.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">2</text></svg>",
        "caption": "對 x = 2 反射：A 與 B 的距離 = 2 + 2 = 4"
       }
      ]
     }
    ],
    [
     {
      "id": "eph-ws04-q03",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 2,
      "code": "WS4-Q03",
      "source": "EPH WS04 Q3 · [Modified from HKDSE Practice Paper 2 Q25]",
      "stem": {
       "text": "If the point $(3,5)$ is reflected with respect to a straight line parallel to the $y$-axis and passing through $(-2,0)$, then the $x$-coordinate of its image is"
      },
      "options": {
       "A": "$-7$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$3$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出直線的方程",
          "en": ""
         },
         "math": "L:\\ x=-2",
         "zh": "平行於 $y$ 軸且通過 $(-2,0)$ → 垂直線 $x=-2$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 用公式求影像的 $x$ 座標",
          "en": ""
         },
         "math": "x'=2(-2)-3=-4-3=-7",
         "zh": "對 $x=c$ 反射：$x'=2c-x$。代 $c=-2$、$x=3$：$x'=-4-3=-7$。",
         "en": "",
         "highlight": [
          "-7"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 檢查（$y$ 不變）",
          "en": ""
         },
         "math": "(3,5)\\to(-7,5)",
         "zh": "垂直線反射只改 $x$，$y$ 維持 5。",
         "en": "",
         "highlight": [
          "(-7,5)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-1$ 是把距離算成 $3-(-2)=5$ 之後只加一次（$-2+1=-1$），忘記乘 2。",
         "en": "Added the distance once only."
        },
        {
         "opt": "D",
         "zh": "$3$ 是完全沒有做反射（$x$ 維持不變）。",
         "en": "Did not reflect at all."
        }
       ],
       "tip": {
        "zh": "公式 $x'=2c-x$ 直接代就對，$c$ 是負數時連負號一起代入。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"208.0\" x2=\"22.0\" y2=\"52.0\"/><line x1=\"34.0\" y1=\"208.0\" x2=\"34.0\" y2=\"52.0\"/><line x1=\"46.0\" y1=\"208.0\" x2=\"46.0\" y2=\"52.0\"/><line x1=\"58.0\" y1=\"208.0\" x2=\"58.0\" y2=\"52.0\"/><line x1=\"70.0\" y1=\"208.0\" x2=\"70.0\" y2=\"52.0\"/><line x1=\"82.0\" y1=\"208.0\" x2=\"82.0\" y2=\"52.0\"/><line x1=\"94.0\" y1=\"208.0\" x2=\"94.0\" y2=\"52.0\"/><line x1=\"106.0\" y1=\"208.0\" x2=\"106.0\" y2=\"52.0\"/><line x1=\"118.0\" y1=\"208.0\" x2=\"118.0\" y2=\"52.0\"/><line x1=\"130.0\" y1=\"208.0\" x2=\"130.0\" y2=\"52.0\"/><line x1=\"142.0\" y1=\"208.0\" x2=\"142.0\" y2=\"52.0\"/><line x1=\"154.0\" y1=\"208.0\" x2=\"154.0\" y2=\"52.0\"/><line x1=\"166.0\" y1=\"208.0\" x2=\"166.0\" y2=\"52.0\"/><line x1=\"178.0\" y1=\"208.0\" x2=\"178.0\" y2=\"52.0\"/><line x1=\"190.0\" y1=\"208.0\" x2=\"190.0\" y2=\"52.0\"/><line x1=\"202.0\" y1=\"208.0\" x2=\"202.0\" y2=\"52.0\"/><line x1=\"214.0\" y1=\"208.0\" x2=\"214.0\" y2=\"52.0\"/><line x1=\"226.0\" y1=\"208.0\" x2=\"226.0\" y2=\"52.0\"/><line x1=\"238.0\" y1=\"208.0\" x2=\"238.0\" y2=\"52.0\"/><line x1=\"22.0\" y1=\"208.0\" x2=\"238.0\" y2=\"208.0\"/><line x1=\"22.0\" y1=\"196.0\" x2=\"238.0\" y2=\"196.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"172.0\" x2=\"238.0\" y2=\"172.0\"/><line x1=\"22.0\" y1=\"160.0\" x2=\"238.0\" y2=\"160.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"136.0\" x2=\"238.0\" y2=\"136.0\"/><line x1=\"22.0\" y1=\"124.0\" x2=\"238.0\" y2=\"124.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"100.0\" x2=\"238.0\" y2=\"100.0\"/><line x1=\"22.0\" y1=\"88.0\" x2=\"238.0\" y2=\"88.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"64.0\" x2=\"238.0\" y2=\"64.0\"/><line x1=\"22.0\" y1=\"52.0\" x2=\"238.0\" y2=\"52.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"160.0\" x2=\"238.0\" y2=\"160.0\" marker-end=\"url(#ar-q3)\"/><text x=\"243.0\" y=\"174.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"154.0\" y1=\"208.0\" x2=\"154.0\" y2=\"52.0\" marker-end=\"url(#ar-q3)\"/><text x=\"159.0\" y=\"50.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"160.0\" y=\"174.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"208.0\" x2=\"130.0\" y2=\"52.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"66.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：x = -2</text><line x1=\"190.0\" y1=\"100.0\" x2=\"70.0\" y2=\"100.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"190.0\" cy=\"100.0\" r=\"4.6\" fill=\"#111\"/><text x=\"198.0\" y=\"70.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(3, 5)</text><circle cx=\"70.0\" cy=\"100.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"78.0\" y=\"120.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(−7, 5)</text><text x=\"160.0\" y=\"88.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">5</text><text x=\"100.0\" y=\"88.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">5</text></svg>",
        "caption": "對 x = −2 反射：影像的 x 座標 = −7"
       }
      ]
     },
     {
      "id": "eph-ws04-q04",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 2,
      "code": "WS4-Q04",
      "source": "EPH WS04 Q4 · [Modified from HKDSE Practice Paper 2 Q25]",
      "stem": {
       "text": "If the point $(8,-9)$ is reflected with respect to a straight line parallel to the $x$-axis and passing through $(0,-5)$, then the coordinates of its image are"
      },
      "options": {
       "A": "$(-18,-9)$",
       "B": "$(8,-4)$",
       "C": "$(8,-1)$",
       "D": "$(13,-9)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出直線的方程",
          "en": ""
         },
         "math": "L:\\ y=-5",
         "zh": "平行於 $x$ 軸且通過 $(0,-5)$ → 水平線 $y=-5$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 用公式求影像",
          "en": ""
         },
         "math": "(8,-9)\\to(8,\\ 2(-5)-(-9))=(8,-1)",
         "zh": "對 $y=c$ 反射：$y'=2c-y$。代 $c=-5$、$y=-9$：$y'=-10+9=-1$；$x$ 不變。",
         "en": "",
         "highlight": [
          "(8,-1)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 驗算距離",
          "en": ""
         },
         "math": "|-9-(-5)|=4,\\quad |-1-(-5)|=4",
         "zh": "原點與影像到直線的距離都是 4 ✓（鏡射兩邊距離相同）。",
         "en": ""
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(-18,-9)$ 是把 $x$ 也改了 —— 水平線反射只改 $y$。",
         "en": "Changed the wrong coordinate."
        },
        {
         "opt": "B",
         "zh": "$(8,-4)$ 是只加了一次距離（$-9+5=-4$），忘記乘 2。",
         "en": "Added the distance once only."
        }
       ],
       "tip": {
        "zh": "水平線改 $y$、垂直線改 $x$；改完用「到直線距離相等」驗算，一次就知對錯。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"28.4\" y1=\"238.0\" x2=\"28.4\" y2=\"22.0\"/><line x1=\"41.1\" y1=\"238.0\" x2=\"41.1\" y2=\"22.0\"/><line x1=\"53.8\" y1=\"238.0\" x2=\"53.8\" y2=\"22.0\"/><line x1=\"66.5\" y1=\"238.0\" x2=\"66.5\" y2=\"22.0\"/><line x1=\"79.2\" y1=\"238.0\" x2=\"79.2\" y2=\"22.0\"/><line x1=\"91.9\" y1=\"238.0\" x2=\"91.9\" y2=\"22.0\"/><line x1=\"104.6\" y1=\"238.0\" x2=\"104.6\" y2=\"22.0\"/><line x1=\"117.3\" y1=\"238.0\" x2=\"117.3\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"142.7\" y1=\"238.0\" x2=\"142.7\" y2=\"22.0\"/><line x1=\"155.4\" y1=\"238.0\" x2=\"155.4\" y2=\"22.0\"/><line x1=\"168.1\" y1=\"238.0\" x2=\"168.1\" y2=\"22.0\"/><line x1=\"180.8\" y1=\"238.0\" x2=\"180.8\" y2=\"22.0\"/><line x1=\"193.5\" y1=\"238.0\" x2=\"193.5\" y2=\"22.0\"/><line x1=\"206.2\" y1=\"238.0\" x2=\"206.2\" y2=\"22.0\"/><line x1=\"218.9\" y1=\"238.0\" x2=\"218.9\" y2=\"22.0\"/><line x1=\"231.6\" y1=\"238.0\" x2=\"231.6\" y2=\"22.0\"/><line x1=\"28.4\" y1=\"238.0\" x2=\"231.6\" y2=\"238.0\"/><line x1=\"28.4\" y1=\"225.3\" x2=\"231.6\" y2=\"225.3\"/><line x1=\"28.4\" y1=\"212.6\" x2=\"231.6\" y2=\"212.6\"/><line x1=\"28.4\" y1=\"199.9\" x2=\"231.6\" y2=\"199.9\"/><line x1=\"28.4\" y1=\"187.2\" x2=\"231.6\" y2=\"187.2\"/><line x1=\"28.4\" y1=\"174.5\" x2=\"231.6\" y2=\"174.5\"/><line x1=\"28.4\" y1=\"161.8\" x2=\"231.6\" y2=\"161.8\"/><line x1=\"28.4\" y1=\"149.1\" x2=\"231.6\" y2=\"149.1\"/><line x1=\"28.4\" y1=\"136.4\" x2=\"231.6\" y2=\"136.4\"/><line x1=\"28.4\" y1=\"123.6\" x2=\"231.6\" y2=\"123.6\"/><line x1=\"28.4\" y1=\"110.9\" x2=\"231.6\" y2=\"110.9\"/><line x1=\"28.4\" y1=\"98.2\" x2=\"231.6\" y2=\"98.2\"/><line x1=\"28.4\" y1=\"85.5\" x2=\"231.6\" y2=\"85.5\"/><line x1=\"28.4\" y1=\"72.8\" x2=\"231.6\" y2=\"72.8\"/><line x1=\"28.4\" y1=\"60.1\" x2=\"231.6\" y2=\"60.1\"/><line x1=\"28.4\" y1=\"47.4\" x2=\"231.6\" y2=\"47.4\"/><line x1=\"28.4\" y1=\"34.7\" x2=\"231.6\" y2=\"34.7\"/><line x1=\"28.4\" y1=\"22.0\" x2=\"231.6\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"28.4\" y1=\"72.8\" x2=\"231.6\" y2=\"72.8\" marker-end=\"url(#ar-q4)\"/><text x=\"236.6\" y=\"86.8\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"79.2\" y1=\"238.0\" x2=\"79.2\" y2=\"22.0\" marker-end=\"url(#ar-q4)\"/><text x=\"84.2\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"85.2\" y=\"86.8\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"28.4\" y1=\"136.4\" x2=\"231.6\" y2=\"136.4\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"165.6\" y=\"129.4\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：y = -5</text><line x1=\"180.8\" y1=\"187.2\" x2=\"180.8\" y2=\"85.5\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"180.8\" cy=\"187.2\" r=\"4.6\" fill=\"#111\"/><text x=\"188.8\" y=\"207.2\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(8, −9)</text><circle cx=\"180.8\" cy=\"85.5\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"188.8\" y=\"75.5\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(8, −1)</text><text x=\"171.3\" y=\"161.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text><text x=\"171.3\" y=\"110.9\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
        "caption": "對 y = −5 反射：影像的 y 座標 = −1"
       }
      ]
     },
     {
      "id": "eph-ws04-q05",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 2,
      "code": "WS4-Q05",
      "source": "EPH WS04 Q5 · [HKDSE 2019 Paper 2 Q25]",
      "stem": {
       "text": "The coordinates of the point $P$ are $(-2,-5)$. $P$ is rotated clockwise about the origin through $270^{\\circ}$ to the point $Q$. $Q$ is then translated leftwards by $4$ units to the point $R$. Find the $x$-coordinate of $R$."
      },
      "options": {
       "A": "$-2$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$2$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 旋轉：順時針 $270^{\\circ}$ = 逆時針 $90^{\\circ}$",
          "en": ""
         },
         "math": "(-2,-5)\\to(5,-2)",
         "zh": "用 $(x,y)\\to(-y,x)$：$-y=5$、$x=-2$ → $Q=(5,-2)$。",
         "en": "",
         "highlight": [
          "(5,-2)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 向左平移 4 單位",
          "en": ""
         },
         "math": "R=(5-4,\\ -2)=(1,-2)",
         "zh": "「向左」是 $x$ 減 4：$5-4=1$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出 $x$ 座標",
          "en": ""
         },
         "math": "x=1",
         "zh": "題目問的是 $x$-coordinate，答案是 1（不要答成整點座標）。",
         "en": "",
         "highlight": [
          "1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$2$ 是把「向左」當成加 4（$5+4=9$ 再取錯），或把旋轉方向用反。",
         "en": "Wrong direction or wrong rotation."
        },
        {
         "opt": "A",
         "zh": "$-2$ 是原點的 $x$ 座標，沒有做變換。",
         "en": "Did not transform."
        }
       ],
       "tip": {
        "zh": "兩步變換的題目：一步一步寫，每步都寫清楚座標，最後才讀題目問的是 $x$ 還是 $y$。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q5a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"221.4\" x2=\"22.0\" y2=\"38.6\"/><line x1=\"38.6\" y1=\"221.4\" x2=\"38.6\" y2=\"38.6\"/><line x1=\"55.2\" y1=\"221.4\" x2=\"55.2\" y2=\"38.6\"/><line x1=\"71.8\" y1=\"221.4\" x2=\"71.8\" y2=\"38.6\"/><line x1=\"88.5\" y1=\"221.4\" x2=\"88.5\" y2=\"38.6\"/><line x1=\"105.1\" y1=\"221.4\" x2=\"105.1\" y2=\"38.6\"/><line x1=\"121.7\" y1=\"221.4\" x2=\"121.7\" y2=\"38.6\"/><line x1=\"138.3\" y1=\"221.4\" x2=\"138.3\" y2=\"38.6\"/><line x1=\"154.9\" y1=\"221.4\" x2=\"154.9\" y2=\"38.6\"/><line x1=\"171.5\" y1=\"221.4\" x2=\"171.5\" y2=\"38.6\"/><line x1=\"188.2\" y1=\"221.4\" x2=\"188.2\" y2=\"38.6\"/><line x1=\"204.8\" y1=\"221.4\" x2=\"204.8\" y2=\"38.6\"/><line x1=\"221.4\" y1=\"221.4\" x2=\"221.4\" y2=\"38.6\"/><line x1=\"238.0\" y1=\"221.4\" x2=\"238.0\" y2=\"38.6\"/><line x1=\"22.0\" y1=\"221.4\" x2=\"238.0\" y2=\"221.4\"/><line x1=\"22.0\" y1=\"204.8\" x2=\"238.0\" y2=\"204.8\"/><line x1=\"22.0\" y1=\"188.2\" x2=\"238.0\" y2=\"188.2\"/><line x1=\"22.0\" y1=\"171.5\" x2=\"238.0\" y2=\"171.5\"/><line x1=\"22.0\" y1=\"154.9\" x2=\"238.0\" y2=\"154.9\"/><line x1=\"22.0\" y1=\"138.3\" x2=\"238.0\" y2=\"138.3\"/><line x1=\"22.0\" y1=\"121.7\" x2=\"238.0\" y2=\"121.7\"/><line x1=\"22.0\" y1=\"105.1\" x2=\"238.0\" y2=\"105.1\"/><line x1=\"22.0\" y1=\"88.5\" x2=\"238.0\" y2=\"88.5\"/><line x1=\"22.0\" y1=\"71.8\" x2=\"238.0\" y2=\"71.8\"/><line x1=\"22.0\" y1=\"55.2\" x2=\"238.0\" y2=\"55.2\"/><line x1=\"22.0\" y1=\"38.6\" x2=\"238.0\" y2=\"38.6\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"88.5\" x2=\"238.0\" y2=\"88.5\" marker-end=\"url(#ar-q5a)\"/><text x=\"243.0\" y=\"102.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"105.1\" y1=\"221.4\" x2=\"105.1\" y2=\"38.6\" marker-end=\"url(#ar-q5a)\"/><text x=\"110.1\" y=\"36.6\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"111.1\" y=\"102.5\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"105.1\" y1=\"88.5\" x2=\"71.8\" y2=\"171.5\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"105.1\" y1=\"88.5\" x2=\"188.2\" y2=\"121.7\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 88.0 131.2 A 46.0 46.0 0 0 0 147.8 105.5\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-q5a)\"/><text x=\"129.1\" y=\"148.5\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"71.8\" cy=\"171.5\" r=\"4.6\" fill=\"#111\"/><text x=\"79.8\" y=\"161.5\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(−2, −5)</text><circle cx=\"188.2\" cy=\"121.7\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"129.6\" y=\"111.7\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q(5, −2)</text></svg>",
        "caption": "第一步：順時針 270° = 逆時針 90° → Q(5, −2)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q5b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"208.5\" x2=\"22.0\" y2=\"51.5\"/><line x1=\"41.6\" y1=\"208.5\" x2=\"41.6\" y2=\"51.5\"/><line x1=\"61.3\" y1=\"208.5\" x2=\"61.3\" y2=\"51.5\"/><line x1=\"80.9\" y1=\"208.5\" x2=\"80.9\" y2=\"51.5\"/><line x1=\"100.5\" y1=\"208.5\" x2=\"100.5\" y2=\"51.5\"/><line x1=\"120.2\" y1=\"208.5\" x2=\"120.2\" y2=\"51.5\"/><line x1=\"139.8\" y1=\"208.5\" x2=\"139.8\" y2=\"51.5\"/><line x1=\"159.5\" y1=\"208.5\" x2=\"159.5\" y2=\"51.5\"/><line x1=\"179.1\" y1=\"208.5\" x2=\"179.1\" y2=\"51.5\"/><line x1=\"198.7\" y1=\"208.5\" x2=\"198.7\" y2=\"51.5\"/><line x1=\"218.4\" y1=\"208.5\" x2=\"218.4\" y2=\"51.5\"/><line x1=\"238.0\" y1=\"208.5\" x2=\"238.0\" y2=\"51.5\"/><line x1=\"22.0\" y1=\"208.5\" x2=\"238.0\" y2=\"208.5\"/><line x1=\"22.0\" y1=\"188.9\" x2=\"238.0\" y2=\"188.9\"/><line x1=\"22.0\" y1=\"169.3\" x2=\"238.0\" y2=\"169.3\"/><line x1=\"22.0\" y1=\"149.6\" x2=\"238.0\" y2=\"149.6\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"110.4\" x2=\"238.0\" y2=\"110.4\"/><line x1=\"22.0\" y1=\"90.7\" x2=\"238.0\" y2=\"90.7\"/><line x1=\"22.0\" y1=\"71.1\" x2=\"238.0\" y2=\"71.1\"/><line x1=\"22.0\" y1=\"51.5\" x2=\"238.0\" y2=\"51.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"110.4\" x2=\"238.0\" y2=\"110.4\" marker-end=\"url(#ar-q5b)\"/><text x=\"243.0\" y=\"124.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"80.9\" y1=\"208.5\" x2=\"80.9\" y2=\"51.5\" marker-end=\"url(#ar-q5b)\"/><text x=\"85.9\" y=\"49.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"86.9\" y=\"124.4\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"179.1\" y1=\"149.6\" x2=\"100.5\" y2=\"149.6\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-q5b)\"/><circle cx=\"179.1\" cy=\"149.6\" r=\"4.6\" fill=\"#111\"/><text x=\"187.1\" y=\"135.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q(5, −2)</text><circle cx=\"100.5\" cy=\"149.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"108.5\" y=\"121.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R(1, −2)</text><text x=\"139.8\" y=\"166.3\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">左 4</text></svg>",
        "caption": "第二步：向左 4 單位 → R 的 x 座標 = 1"
       }
      ]
     }
    ],
    [
     {
      "id": "eph-ws04-q06",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 2,
      "code": "WS4-Q06",
      "source": "EPH WS04 Q6 · [Modified from HKDSE 2019 Paper 2 Q25]",
      "stem": {
       "text": "The coordinates of the point $D$ are $(8,-8)$. $D$ is translated rightwards by $1$ unit to the point $E$. $E$ is then rotated anticlockwise about the origin through $180^{\\circ}$ to the point $F$. Find the coordinates of $F$."
      },
      "options": {
       "A": "$(-9,8)$",
       "B": "$(9,-8)$",
       "C": "$(-7,8)$",
       "D": "$(7,-8)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 向右平移 1 單位",
          "en": ""
         },
         "math": "E=(8+1,\\ -8)=(9,-8)",
         "zh": "「向右」是 $x$ 加 1。",
         "en": "",
         "highlight": [
          "(9,-8)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 旋轉 $180^{\\circ}$：兩個座標都變號",
          "en": ""
         },
         "math": "F=(-9,8)",
         "zh": "$180^{\\circ}$ 不分順逆，$(x,y)\\to(-x,-y)$ → $F=(-9,8)$。",
         "en": "",
         "highlight": [
          "(-9,8)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(9,-8)$ 是忘記做旋轉（只做了平移）。",
         "en": "Did only the translation."
        },
        {
         "opt": "C",
         "zh": "$(-7,8)$ 是平移時做成向左（$8-1=7$），方向搞反。",
         "en": "Translated the wrong way."
        }
       ],
       "tip": {
        "zh": "$180^{\\circ}$ 最簡單：兩個座標一起變號，不用管順時針或逆時針。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q6a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"230.8\" x2=\"22.0\" y2=\"29.2\"/><line x1=\"36.4\" y1=\"230.8\" x2=\"36.4\" y2=\"29.2\"/><line x1=\"50.8\" y1=\"230.8\" x2=\"50.8\" y2=\"29.2\"/><line x1=\"65.2\" y1=\"230.8\" x2=\"65.2\" y2=\"29.2\"/><line x1=\"79.6\" y1=\"230.8\" x2=\"79.6\" y2=\"29.2\"/><line x1=\"94.0\" y1=\"230.8\" x2=\"94.0\" y2=\"29.2\"/><line x1=\"108.4\" y1=\"230.8\" x2=\"108.4\" y2=\"29.2\"/><line x1=\"122.8\" y1=\"230.8\" x2=\"122.8\" y2=\"29.2\"/><line x1=\"137.2\" y1=\"230.8\" x2=\"137.2\" y2=\"29.2\"/><line x1=\"151.6\" y1=\"230.8\" x2=\"151.6\" y2=\"29.2\"/><line x1=\"166.0\" y1=\"230.8\" x2=\"166.0\" y2=\"29.2\"/><line x1=\"180.4\" y1=\"230.8\" x2=\"180.4\" y2=\"29.2\"/><line x1=\"194.8\" y1=\"230.8\" x2=\"194.8\" y2=\"29.2\"/><line x1=\"209.2\" y1=\"230.8\" x2=\"209.2\" y2=\"29.2\"/><line x1=\"223.6\" y1=\"230.8\" x2=\"223.6\" y2=\"29.2\"/><line x1=\"238.0\" y1=\"230.8\" x2=\"238.0\" y2=\"29.2\"/><line x1=\"22.0\" y1=\"230.8\" x2=\"238.0\" y2=\"230.8\"/><line x1=\"22.0\" y1=\"216.4\" x2=\"238.0\" y2=\"216.4\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"187.6\" x2=\"238.0\" y2=\"187.6\"/><line x1=\"22.0\" y1=\"173.2\" x2=\"238.0\" y2=\"173.2\"/><line x1=\"22.0\" y1=\"158.8\" x2=\"238.0\" y2=\"158.8\"/><line x1=\"22.0\" y1=\"144.4\" x2=\"238.0\" y2=\"144.4\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"115.6\" x2=\"238.0\" y2=\"115.6\"/><line x1=\"22.0\" y1=\"101.2\" x2=\"238.0\" y2=\"101.2\"/><line x1=\"22.0\" y1=\"86.8\" x2=\"238.0\" y2=\"86.8\"/><line x1=\"22.0\" y1=\"72.4\" x2=\"238.0\" y2=\"72.4\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"43.6\" x2=\"238.0\" y2=\"43.6\"/><line x1=\"22.0\" y1=\"29.2\" x2=\"238.0\" y2=\"29.2\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"72.4\" x2=\"238.0\" y2=\"72.4\" marker-end=\"url(#ar-q6a)\"/><text x=\"243.0\" y=\"86.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"65.2\" y1=\"230.8\" x2=\"65.2\" y2=\"29.2\" marker-end=\"url(#ar-q6a)\"/><text x=\"70.2\" y=\"27.2\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"71.2\" y=\"86.4\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"180.4\" y1=\"187.6\" x2=\"194.8\" y2=\"187.6\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-q6a)\"/><circle cx=\"180.4\" cy=\"187.6\" r=\"4.6\" fill=\"#111\"/><text x=\"188.4\" y=\"173.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">D(8, −8)</text><circle cx=\"194.8\" cy=\"187.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"136.2\" y=\"159.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">E(9, −8)</text><text x=\"187.6\" y=\"199.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">右 1</text></svg>",
        "caption": "第一步：向右 1 單位 → E(9, −8)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q6b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"229.0\" x2=\"22.0\" y2=\"31.0\"/><line x1=\"31.0\" y1=\"229.0\" x2=\"31.0\" y2=\"31.0\"/><line x1=\"40.0\" y1=\"229.0\" x2=\"40.0\" y2=\"31.0\"/><line x1=\"49.0\" y1=\"229.0\" x2=\"49.0\" y2=\"31.0\"/><line x1=\"58.0\" y1=\"229.0\" x2=\"58.0\" y2=\"31.0\"/><line x1=\"67.0\" y1=\"229.0\" x2=\"67.0\" y2=\"31.0\"/><line x1=\"76.0\" y1=\"229.0\" x2=\"76.0\" y2=\"31.0\"/><line x1=\"85.0\" y1=\"229.0\" x2=\"85.0\" y2=\"31.0\"/><line x1=\"94.0\" y1=\"229.0\" x2=\"94.0\" y2=\"31.0\"/><line x1=\"103.0\" y1=\"229.0\" x2=\"103.0\" y2=\"31.0\"/><line x1=\"112.0\" y1=\"229.0\" x2=\"112.0\" y2=\"31.0\"/><line x1=\"121.0\" y1=\"229.0\" x2=\"121.0\" y2=\"31.0\"/><line x1=\"130.0\" y1=\"229.0\" x2=\"130.0\" y2=\"31.0\"/><line x1=\"139.0\" y1=\"229.0\" x2=\"139.0\" y2=\"31.0\"/><line x1=\"148.0\" y1=\"229.0\" x2=\"148.0\" y2=\"31.0\"/><line x1=\"157.0\" y1=\"229.0\" x2=\"157.0\" y2=\"31.0\"/><line x1=\"166.0\" y1=\"229.0\" x2=\"166.0\" y2=\"31.0\"/><line x1=\"175.0\" y1=\"229.0\" x2=\"175.0\" y2=\"31.0\"/><line x1=\"184.0\" y1=\"229.0\" x2=\"184.0\" y2=\"31.0\"/><line x1=\"193.0\" y1=\"229.0\" x2=\"193.0\" y2=\"31.0\"/><line x1=\"202.0\" y1=\"229.0\" x2=\"202.0\" y2=\"31.0\"/><line x1=\"211.0\" y1=\"229.0\" x2=\"211.0\" y2=\"31.0\"/><line x1=\"220.0\" y1=\"229.0\" x2=\"220.0\" y2=\"31.0\"/><line x1=\"229.0\" y1=\"229.0\" x2=\"229.0\" y2=\"31.0\"/><line x1=\"238.0\" y1=\"229.0\" x2=\"238.0\" y2=\"31.0\"/><line x1=\"22.0\" y1=\"229.0\" x2=\"238.0\" y2=\"229.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"211.0\" x2=\"238.0\" y2=\"211.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"193.0\" x2=\"238.0\" y2=\"193.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"175.0\" x2=\"238.0\" y2=\"175.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"139.0\" x2=\"238.0\" y2=\"139.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"121.0\" x2=\"238.0\" y2=\"121.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"85.0\" x2=\"238.0\" y2=\"85.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"67.0\" x2=\"238.0\" y2=\"67.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"49.0\" x2=\"238.0\" y2=\"49.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"31.0\" x2=\"238.0\" y2=\"31.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-q6b)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"229.0\" x2=\"130.0\" y2=\"31.0\" marker-end=\"url(#ar-q6b)\"/><text x=\"135.0\" y=\"29.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"130.0\" x2=\"211.0\" y2=\"202.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"49.0\" y2=\"58.0\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 164.4 160.6 A 46.0 46.0 0 0 0 95.6 99.4\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-q6b)\"/><text x=\"170.5\" y=\"88.4\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">180°</text><circle cx=\"211.0\" cy=\"202.0\" r=\"4.6\" fill=\"#111\"/><text x=\"152.4\" y=\"192.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">E(9, −8)</text><circle cx=\"49.0\" cy=\"58.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"57.0\" y=\"48.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">F(−9, 8)</text></svg>",
        "caption": "第二步：逆時針 180°（兩個座標都變號）→ F(−9, 8)"
       }
      ]
     },
     {
      "id": "eph-ws04-q07",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 2,
      "code": "WS4-Q07",
      "source": "EPH WS04 Q7 · 選項 A/B/C 自擬 · [HKDSE 2021 Paper 2 Q23]",
      "stem": {
       "text": "The coordinates of the point $A$ are $(-2,-1)$. $A$ is reflected with respect to the $x$-axis to the point $B$. $B$ is then rotated anticlockwise about the origin through $90^{\\circ}$ to the point $C$. Find the $x$-coordinate of $C$."
      },
      "options": {
       "A": "$-2$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$2$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 對 $x$ 軸反射",
          "en": ""
         },
         "math": "A(-2,-1)\\to B(-2,1)",
         "zh": "對 $x$ 軸反射改 $y$：$-1$ 變 $1$，$x$ 不變。",
         "en": "",
         "highlight": [
          "B(-2,1)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 逆時針轉 $90^{\\circ}$",
          "en": ""
         },
         "math": "B(-2,1)\\to C(-1,-2)",
         "zh": "用 $(x,y)\\to(-y,x)$：$-y=-1$、$x=-2$ → $C=(-1,-2)$。",
         "en": "",
         "highlight": [
          "C(-1,-2)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出 $x$ 座標",
          "en": ""
         },
         "math": "x=-1",
         "zh": "$C=(-1,-2)$，題目問 $x$-coordinate → $-1$。",
         "en": "",
         "highlight": [
          "-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-2$ 是 $B$ 的 $x$ 座標（只做了反射就作答）。",
         "en": "Stopped after the reflection."
        },
        {
         "opt": "D",
         "zh": "$2$ 是旋轉時用了順時針公式（方向用反）。",
         "en": "Wrong rotation direction."
        }
       ],
       "tip": {
        "zh": "「先反射再旋轉」的題：順序不能調換，一步一步寫才不會亂。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q7a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"43.6\" y1=\"238.0\" x2=\"43.6\" y2=\"22.0\"/><line x1=\"65.2\" y1=\"238.0\" x2=\"65.2\" y2=\"22.0\"/><line x1=\"86.8\" y1=\"238.0\" x2=\"86.8\" y2=\"22.0\"/><line x1=\"108.4\" y1=\"238.0\" x2=\"108.4\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"151.6\" y1=\"238.0\" x2=\"151.6\" y2=\"22.0\"/><line x1=\"173.2\" y1=\"238.0\" x2=\"173.2\" y2=\"22.0\"/><line x1=\"194.8\" y1=\"238.0\" x2=\"194.8\" y2=\"22.0\"/><line x1=\"216.4\" y1=\"238.0\" x2=\"216.4\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"216.4\" x2=\"238.0\" y2=\"216.4\"/><line x1=\"22.0\" y1=\"194.8\" x2=\"238.0\" y2=\"194.8\"/><line x1=\"22.0\" y1=\"173.2\" x2=\"238.0\" y2=\"173.2\"/><line x1=\"22.0\" y1=\"151.6\" x2=\"238.0\" y2=\"151.6\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"108.4\" x2=\"238.0\" y2=\"108.4\"/><line x1=\"22.0\" y1=\"86.8\" x2=\"238.0\" y2=\"86.8\"/><line x1=\"22.0\" y1=\"65.2\" x2=\"238.0\" y2=\"65.2\"/><line x1=\"22.0\" y1=\"43.6\" x2=\"238.0\" y2=\"43.6\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-q7a)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"151.6\" y1=\"238.0\" x2=\"151.6\" y2=\"22.0\" marker-end=\"url(#ar-q7a)\"/><text x=\"156.6\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"157.6\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"172.0\" y=\"123.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：y = 0</text><line x1=\"108.4\" y1=\"151.6\" x2=\"108.4\" y2=\"108.4\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"108.4\" cy=\"151.6\" r=\"4.6\" fill=\"#111\"/><text x=\"116.4\" y=\"171.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(−2, −1)</text><circle cx=\"108.4\" cy=\"108.4\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"116.4\" y=\"98.4\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(−2, 1)</text><text x=\"92.2\" y=\"140.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">1</text><text x=\"92.2\" y=\"119.2\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">1</text></svg>",
        "caption": "第一步：對 x 軸反射 → B(−2, 1)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q7b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"34.0\" y1=\"238.0\" x2=\"34.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"82.0\" y1=\"238.0\" x2=\"82.0\" y2=\"22.0\"/><line x1=\"106.0\" y1=\"238.0\" x2=\"106.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"154.0\" y1=\"238.0\" x2=\"154.0\" y2=\"22.0\"/><line x1=\"178.0\" y1=\"238.0\" x2=\"178.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"226.0\" y1=\"238.0\" x2=\"226.0\" y2=\"22.0\"/><line x1=\"34.0\" y1=\"238.0\" x2=\"226.0\" y2=\"238.0\"/><line x1=\"34.0\" y1=\"214.0\" x2=\"226.0\" y2=\"214.0\"/><line x1=\"34.0\" y1=\"190.0\" x2=\"226.0\" y2=\"190.0\"/><line x1=\"34.0\" y1=\"166.0\" x2=\"226.0\" y2=\"166.0\"/><line x1=\"34.0\" y1=\"142.0\" x2=\"226.0\" y2=\"142.0\"/><line x1=\"34.0\" y1=\"118.0\" x2=\"226.0\" y2=\"118.0\"/><line x1=\"34.0\" y1=\"94.0\" x2=\"226.0\" y2=\"94.0\"/><line x1=\"34.0\" y1=\"70.0\" x2=\"226.0\" y2=\"70.0\"/><line x1=\"34.0\" y1=\"46.0\" x2=\"226.0\" y2=\"46.0\"/><line x1=\"34.0\" y1=\"22.0\" x2=\"226.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"34.0\" y1=\"118.0\" x2=\"226.0\" y2=\"118.0\" marker-end=\"url(#ar-q7b)\"/><text x=\"231.0\" y=\"132.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"154.0\" y1=\"238.0\" x2=\"154.0\" y2=\"22.0\" marker-end=\"url(#ar-q7b)\"/><text x=\"159.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"160.0\" y=\"132.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"154.0\" y1=\"118.0\" x2=\"106.0\" y2=\"94.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"154.0\" y1=\"118.0\" x2=\"130.0\" y2=\"166.0\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 112.9 97.4 A 46.0 46.0 0 0 0 133.4 159.1\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-q7b)\"/><text x=\"96.1\" y=\"141.3\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"106.0\" cy=\"94.0\" r=\"4.6\" fill=\"#111\"/><text x=\"114.0\" y=\"84.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(−2, 1)</text><circle cx=\"130.0\" cy=\"166.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"138.0\" y=\"156.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">C(−1, −2)</text></svg>",
        "caption": "第二步：逆時針 90° → C 的 x 座標 = −1"
       }
      ]
     },
     {
      "id": "eph-ws04-q08",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 2,
      "code": "WS4-Q08",
      "source": "EPH WS04 Q8 · 選項 B/C 自擬 · [HKDSE 2021 Paper 2 Q23]",
      "stem": {
       "text": "The coordinates of the point $R$ are $(1,4)$. $R$ is rotated clockwise about the origin through $270^{\\circ}$ to the point $S$. $S$ is then reflected with respect to the $y$-axis to the point $T$. Find the $y$-coordinate of $T$."
      },
      "options": {
       "A": "$-4$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 旋轉：順時針 $270^{\\circ}$ = 逆時針 $90^{\\circ}$",
          "en": ""
         },
         "math": "R(1,4)\\to S(-4,1)",
         "zh": "用 $(x,y)\\to(-y,x)$：$-y=-4$、$x=1$ → $S=(-4,1)$。",
         "en": "",
         "highlight": [
          "S(-4,1)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 對 $y$ 軸反射",
          "en": ""
         },
         "math": "S(-4,1)\\to T(4,1)",
         "zh": "對 $y$ 軸反射改 $x$：$-4$ 變 $4$，$y$ 不變。",
         "en": "",
         "highlight": [
          "T(4,1)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出 $y$ 座標",
          "en": ""
         },
         "math": "y=1",
         "zh": "$T=(4,1)$，題目問 $y$-coordinate → $1$。",
         "en": "",
         "highlight": [
          "1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-4$ 是 $S$ 的 $x$ 座標，不是 $T$ 的 $y$ 座標（題目問什麼要先圈起來）。",
         "en": "Answered with the wrong coordinate."
        },
        {
         "opt": "D",
         "zh": "$4$ 是把 $T$ 的 $x$ 座標當成答案。",
         "en": "Gave the x-coordinate."
        }
       ],
       "tip": {
        "zh": "最後一步最容易失分：題目問 $x$ 還是 $y$、問座標還是距離，作答前先圈關鍵字。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q8a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"228.2\" x2=\"22.0\" y2=\"31.8\"/><line x1=\"41.6\" y1=\"228.2\" x2=\"41.6\" y2=\"31.8\"/><line x1=\"61.3\" y1=\"228.2\" x2=\"61.3\" y2=\"31.8\"/><line x1=\"80.9\" y1=\"228.2\" x2=\"80.9\" y2=\"31.8\"/><line x1=\"100.5\" y1=\"228.2\" x2=\"100.5\" y2=\"31.8\"/><line x1=\"120.2\" y1=\"228.2\" x2=\"120.2\" y2=\"31.8\"/><line x1=\"139.8\" y1=\"228.2\" x2=\"139.8\" y2=\"31.8\"/><line x1=\"159.5\" y1=\"228.2\" x2=\"159.5\" y2=\"31.8\"/><line x1=\"179.1\" y1=\"228.2\" x2=\"179.1\" y2=\"31.8\"/><line x1=\"198.7\" y1=\"228.2\" x2=\"198.7\" y2=\"31.8\"/><line x1=\"218.4\" y1=\"228.2\" x2=\"218.4\" y2=\"31.8\"/><line x1=\"238.0\" y1=\"228.2\" x2=\"238.0\" y2=\"31.8\"/><line x1=\"22.0\" y1=\"228.2\" x2=\"238.0\" y2=\"228.2\"/><line x1=\"22.0\" y1=\"208.5\" x2=\"238.0\" y2=\"208.5\"/><line x1=\"22.0\" y1=\"188.9\" x2=\"238.0\" y2=\"188.9\"/><line x1=\"22.0\" y1=\"169.3\" x2=\"238.0\" y2=\"169.3\"/><line x1=\"22.0\" y1=\"149.6\" x2=\"238.0\" y2=\"149.6\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"110.4\" x2=\"238.0\" y2=\"110.4\"/><line x1=\"22.0\" y1=\"90.7\" x2=\"238.0\" y2=\"90.7\"/><line x1=\"22.0\" y1=\"71.1\" x2=\"238.0\" y2=\"71.1\"/><line x1=\"22.0\" y1=\"51.5\" x2=\"238.0\" y2=\"51.5\"/><line x1=\"22.0\" y1=\"31.8\" x2=\"238.0\" y2=\"31.8\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"169.3\" x2=\"238.0\" y2=\"169.3\" marker-end=\"url(#ar-q8a)\"/><text x=\"243.0\" y=\"183.3\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"159.5\" y1=\"228.2\" x2=\"159.5\" y2=\"31.8\" marker-end=\"url(#ar-q8a)\"/><text x=\"164.5\" y=\"29.8\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"165.5\" y=\"183.3\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"159.5\" y1=\"169.3\" x2=\"179.1\" y2=\"90.7\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"159.5\" y1=\"169.3\" x2=\"80.9\" y2=\"149.6\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 170.6 124.6 A 46.0 46.0 0 0 0 114.8 158.1\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-q8a)\"/><text x=\"128.1\" y=\"121.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"179.1\" cy=\"90.7\" r=\"4.6\" fill=\"#111\"/><text x=\"187.1\" y=\"80.7\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">R(1, 4)</text><circle cx=\"80.9\" cy=\"149.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"88.9\" y=\"139.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S(−4, 1)</text></svg>",
        "caption": "第一步：順時針 270° = 逆時針 90° → S(−4, 1)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q8b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"190.8\" x2=\"22.0\" y2=\"69.2\"/><line x1=\"35.5\" y1=\"190.8\" x2=\"35.5\" y2=\"69.2\"/><line x1=\"49.0\" y1=\"190.8\" x2=\"49.0\" y2=\"69.2\"/><line x1=\"62.5\" y1=\"190.8\" x2=\"62.5\" y2=\"69.2\"/><line x1=\"76.0\" y1=\"190.8\" x2=\"76.0\" y2=\"69.2\"/><line x1=\"89.5\" y1=\"190.8\" x2=\"89.5\" y2=\"69.2\"/><line x1=\"103.0\" y1=\"190.8\" x2=\"103.0\" y2=\"69.2\"/><line x1=\"116.5\" y1=\"190.8\" x2=\"116.5\" y2=\"69.2\"/><line x1=\"130.0\" y1=\"190.8\" x2=\"130.0\" y2=\"69.2\"/><line x1=\"143.5\" y1=\"190.8\" x2=\"143.5\" y2=\"69.2\"/><line x1=\"157.0\" y1=\"190.8\" x2=\"157.0\" y2=\"69.2\"/><line x1=\"170.5\" y1=\"190.8\" x2=\"170.5\" y2=\"69.2\"/><line x1=\"184.0\" y1=\"190.8\" x2=\"184.0\" y2=\"69.2\"/><line x1=\"197.5\" y1=\"190.8\" x2=\"197.5\" y2=\"69.2\"/><line x1=\"211.0\" y1=\"190.8\" x2=\"211.0\" y2=\"69.2\"/><line x1=\"224.5\" y1=\"190.8\" x2=\"224.5\" y2=\"69.2\"/><line x1=\"238.0\" y1=\"190.8\" x2=\"238.0\" y2=\"69.2\"/><line x1=\"22.0\" y1=\"190.8\" x2=\"238.0\" y2=\"190.8\"/><line x1=\"22.0\" y1=\"177.2\" x2=\"238.0\" y2=\"177.2\"/><line x1=\"22.0\" y1=\"163.8\" x2=\"238.0\" y2=\"163.8\"/><line x1=\"22.0\" y1=\"150.2\" x2=\"238.0\" y2=\"150.2\"/><line x1=\"22.0\" y1=\"136.8\" x2=\"238.0\" y2=\"136.8\"/><line x1=\"22.0\" y1=\"123.2\" x2=\"238.0\" y2=\"123.2\"/><line x1=\"22.0\" y1=\"109.8\" x2=\"238.0\" y2=\"109.8\"/><line x1=\"22.0\" y1=\"96.2\" x2=\"238.0\" y2=\"96.2\"/><line x1=\"22.0\" y1=\"82.8\" x2=\"238.0\" y2=\"82.8\"/><line x1=\"22.0\" y1=\"69.2\" x2=\"238.0\" y2=\"69.2\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"136.8\" x2=\"238.0\" y2=\"136.8\" marker-end=\"url(#ar-q8b)\"/><text x=\"243.0\" y=\"150.8\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"190.8\" x2=\"130.0\" y2=\"69.2\" marker-end=\"url(#ar-q8b)\"/><text x=\"135.0\" y=\"67.2\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"150.8\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"190.8\" x2=\"130.0\" y2=\"69.2\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"83.2\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：x = 0</text><line x1=\"76.0\" y1=\"123.2\" x2=\"184.0\" y2=\"123.2\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"76.0\" cy=\"123.2\" r=\"4.6\" fill=\"#111\"/><text x=\"84.0\" y=\"93.2\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">S(−4, 1)</text><circle cx=\"184.0\" cy=\"123.2\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"192.0\" y=\"143.2\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">T(4, 1)</text><text x=\"103.0\" y=\"109.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text><text x=\"157.0\" y=\"109.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
        "caption": "第二步：對 y 軸反射 → T 的 y 座標 = 1"
       }
      ]
     }
    ],
    [
     {
      "id": "eph-ws04-q09",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 3,
      "code": "WS4-Q09",
      "source": "EPH WS04 Q9 · [Modified from HKCEE 2011 Paper 2 Q29]",
      "stem": {
       "text": "The coordinates of the point $A$ are $(-6,-1)$. $L$ is a straight line parallel to the $y$-axis and passing through $(-4,0)$. If $A$ is translated upwards by $3$ units to the point $B$, then the coordinates of the reflection image of $B$ with respect to the straight line $L$ are"
      },
      "options": {
       "A": "$(2,2)$",
       "B": "$(2,-2)$",
       "C": "$(-2,2)$",
       "D": "$(-2,-2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 向上平移 3 單位",
          "en": ""
         },
         "math": "B=(-6,-1+3)=(-6,2)",
         "zh": "「向上」是 $y$ 加 3。",
         "en": "",
         "highlight": [
          "B(-6,2)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 寫出直線 $L$ 的方程",
          "en": ""
         },
         "math": "L:\\ x=-4",
         "zh": "平行於 $y$ 軸且通過 $(-4,0)$ → 垂直線 $x=-4$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 對 $L$ 反射（只改 $x$）",
          "en": ""
         },
         "math": "x'=2(-4)-(-6)=-8+6=-2\\ \\Rightarrow\\ (-2,2)",
         "zh": "對 $x=c$ 反射：$x'=2c-x=-8+6=-2$；$y$ 維持 2 → $(-2,2)$。",
         "en": "",
         "highlight": [
          "(-2,2)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(2,2)$ 是平移時做成向右（或反射公式代錯正負號）。",
         "en": "Sign slip in the reflection formula."
        },
        {
         "opt": "D",
         "zh": "$(-2,-2)$ 是把 $y$ 也改了 —— 垂直線反射只改 $x$。",
         "en": "Changed the y-coordinate too."
        }
       ],
       "tip": {
        "zh": "先平移再反射：順序照題目寫，平移後的點才是反射的對象。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q9a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"211.0\" x2=\"22.0\" y2=\"49.0\"/><line x1=\"40.0\" y1=\"211.0\" x2=\"40.0\" y2=\"49.0\"/><line x1=\"58.0\" y1=\"211.0\" x2=\"58.0\" y2=\"49.0\"/><line x1=\"76.0\" y1=\"211.0\" x2=\"76.0\" y2=\"49.0\"/><line x1=\"94.0\" y1=\"211.0\" x2=\"94.0\" y2=\"49.0\"/><line x1=\"112.0\" y1=\"211.0\" x2=\"112.0\" y2=\"49.0\"/><line x1=\"130.0\" y1=\"211.0\" x2=\"130.0\" y2=\"49.0\"/><line x1=\"148.0\" y1=\"211.0\" x2=\"148.0\" y2=\"49.0\"/><line x1=\"166.0\" y1=\"211.0\" x2=\"166.0\" y2=\"49.0\"/><line x1=\"184.0\" y1=\"211.0\" x2=\"184.0\" y2=\"49.0\"/><line x1=\"202.0\" y1=\"211.0\" x2=\"202.0\" y2=\"49.0\"/><line x1=\"220.0\" y1=\"211.0\" x2=\"220.0\" y2=\"49.0\"/><line x1=\"238.0\" y1=\"211.0\" x2=\"238.0\" y2=\"49.0\"/><line x1=\"22.0\" y1=\"211.0\" x2=\"238.0\" y2=\"211.0\"/><line x1=\"22.0\" y1=\"193.0\" x2=\"238.0\" y2=\"193.0\"/><line x1=\"22.0\" y1=\"175.0\" x2=\"238.0\" y2=\"175.0\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"139.0\" x2=\"238.0\" y2=\"139.0\"/><line x1=\"22.0\" y1=\"121.0\" x2=\"238.0\" y2=\"121.0\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"85.0\" x2=\"238.0\" y2=\"85.0\"/><line x1=\"22.0\" y1=\"67.0\" x2=\"238.0\" y2=\"67.0\"/><line x1=\"22.0\" y1=\"49.0\" x2=\"238.0\" y2=\"49.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"139.0\" x2=\"238.0\" y2=\"139.0\" marker-end=\"url(#ar-q9a)\"/><text x=\"243.0\" y=\"153.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"184.0\" y1=\"211.0\" x2=\"184.0\" y2=\"49.0\" marker-end=\"url(#ar-q9a)\"/><text x=\"189.0\" y=\"47.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"190.0\" y=\"153.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"76.0\" y1=\"157.0\" x2=\"76.0\" y2=\"103.0\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-q9a)\"/><circle cx=\"76.0\" cy=\"157.0\" r=\"4.6\" fill=\"#111\"/><text x=\"84.0\" y=\"147.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(−6, −1)</text><circle cx=\"76.0\" cy=\"103.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"84.0\" y=\"93.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(−6, 2)</text><text x=\"82.3\" y=\"130.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">上 3</text></svg>",
        "caption": "第一步：向上 3 單位 → B(−6, 2)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q9b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"207.1\" x2=\"22.0\" y2=\"52.9\"/><line x1=\"37.4\" y1=\"207.1\" x2=\"37.4\" y2=\"52.9\"/><line x1=\"52.9\" y1=\"207.1\" x2=\"52.9\" y2=\"52.9\"/><line x1=\"68.3\" y1=\"207.1\" x2=\"68.3\" y2=\"52.9\"/><line x1=\"83.7\" y1=\"207.1\" x2=\"83.7\" y2=\"52.9\"/><line x1=\"99.1\" y1=\"207.1\" x2=\"99.1\" y2=\"52.9\"/><line x1=\"114.6\" y1=\"207.1\" x2=\"114.6\" y2=\"52.9\"/><line x1=\"130.0\" y1=\"207.1\" x2=\"130.0\" y2=\"52.9\"/><line x1=\"145.4\" y1=\"207.1\" x2=\"145.4\" y2=\"52.9\"/><line x1=\"160.9\" y1=\"207.1\" x2=\"160.9\" y2=\"52.9\"/><line x1=\"176.3\" y1=\"207.1\" x2=\"176.3\" y2=\"52.9\"/><line x1=\"191.7\" y1=\"207.1\" x2=\"191.7\" y2=\"52.9\"/><line x1=\"207.1\" y1=\"207.1\" x2=\"207.1\" y2=\"52.9\"/><line x1=\"222.6\" y1=\"207.1\" x2=\"222.6\" y2=\"52.9\"/><line x1=\"238.0\" y1=\"207.1\" x2=\"238.0\" y2=\"52.9\"/><line x1=\"22.0\" y1=\"207.1\" x2=\"238.0\" y2=\"207.1\"/><line x1=\"22.0\" y1=\"191.7\" x2=\"238.0\" y2=\"191.7\"/><line x1=\"22.0\" y1=\"176.3\" x2=\"238.0\" y2=\"176.3\"/><line x1=\"22.0\" y1=\"160.9\" x2=\"238.0\" y2=\"160.9\"/><line x1=\"22.0\" y1=\"145.4\" x2=\"238.0\" y2=\"145.4\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"114.6\" x2=\"238.0\" y2=\"114.6\"/><line x1=\"22.0\" y1=\"99.1\" x2=\"238.0\" y2=\"99.1\"/><line x1=\"22.0\" y1=\"83.7\" x2=\"238.0\" y2=\"83.7\"/><line x1=\"22.0\" y1=\"68.3\" x2=\"238.0\" y2=\"68.3\"/><line x1=\"22.0\" y1=\"52.9\" x2=\"238.0\" y2=\"52.9\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"145.4\" x2=\"238.0\" y2=\"145.4\" marker-end=\"url(#ar-q9b)\"/><text x=\"243.0\" y=\"159.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"176.3\" y1=\"207.1\" x2=\"176.3\" y2=\"52.9\" marker-end=\"url(#ar-q9b)\"/><text x=\"181.3\" y=\"50.9\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"182.3\" y=\"159.4\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"114.6\" y1=\"207.1\" x2=\"114.6\" y2=\"52.9\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"120.6\" y=\"66.9\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：x = -4</text><line x1=\"83.7\" y1=\"114.6\" x2=\"145.4\" y2=\"114.6\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"83.7\" cy=\"114.6\" r=\"4.6\" fill=\"#111\"/><text x=\"91.7\" y=\"84.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(−6, 2)</text><circle cx=\"145.4\" cy=\"114.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"153.4\" y=\"134.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">(−2, 2)</text><text x=\"99.1\" y=\"99.1\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">2</text><text x=\"130.0\" y=\"99.1\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">2</text></svg>",
        "caption": "第二步：對 x = −4 反射 → 影像 = (−2, 2)"
       }
      ]
     },
     {
      "id": "eph-ws04-q10",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 3,
      "code": "WS4-Q10",
      "source": "EPH WS04 Q10 · [Modified from HKCEE 2011 Paper 2 Q29]",
      "stem": {
       "text": "The coordinates of the point $D$ are $(3,-4)$. $L$ is a straight line parallel to the $x$-axis and passing through $(0,-1)$. If $D$ is reflected with respect to the straight line $L$ to the point $E$, and then $E$ is translated leftwards by $2$ units to the point $F$, then the coordinates of $F$ are"
      },
      "options": {
       "A": "$(1,2)$",
       "B": "$(1,-2)$",
       "C": "$(-1,2)$",
       "D": "$(-1,-2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出直線 $L$ 的方程",
          "en": ""
         },
         "math": "L:\\ y=-1",
         "zh": "平行於 $x$ 軸且通過 $(0,-1)$ → 水平線 $y=-1$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 對 $L$ 反射（只改 $y$）",
          "en": ""
         },
         "math": "E=(3,\\ 2(-1)-(-4))=(3,2)",
         "zh": "對 $y=c$ 反射：$y'=2c-y=-2+4=2$；$x$ 維持 3 → $E=(3,2)$。",
         "en": "",
         "highlight": [
          "E(3,2)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 向左平移 2 單位",
          "en": ""
         },
         "math": "F=(3-2,\\ 2)=(1,2)",
         "zh": "「向左」是 $x$ 減 2：$3-2=1$。",
         "en": "",
         "highlight": [
          "(1,2)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(1,-2)$ 是反射時沒有把 $y$ 變號（把 $2c-y$ 算成 $-2-4$）。",
         "en": "Wrong sign in the reflection."
        },
        {
         "opt": "C",
         "zh": "$(-1,2)$ 是平移做成向右再多減（方向搞錯）。",
         "en": "Translated the wrong way."
        }
       ],
       "tip": {
        "zh": "水平線反射：距離 $\\times2$ 加上去。$D$ 在 $y=-1$ 下方 3 格，影像就在上方 3 格 → $y=2$。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q10a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"45.1\" y1=\"238.0\" x2=\"45.1\" y2=\"22.0\"/><line x1=\"60.6\" y1=\"238.0\" x2=\"60.6\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"91.4\" y1=\"238.0\" x2=\"91.4\" y2=\"22.0\"/><line x1=\"106.9\" y1=\"238.0\" x2=\"106.9\" y2=\"22.0\"/><line x1=\"122.3\" y1=\"238.0\" x2=\"122.3\" y2=\"22.0\"/><line x1=\"137.7\" y1=\"238.0\" x2=\"137.7\" y2=\"22.0\"/><line x1=\"153.1\" y1=\"238.0\" x2=\"153.1\" y2=\"22.0\"/><line x1=\"168.6\" y1=\"238.0\" x2=\"168.6\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"199.4\" y1=\"238.0\" x2=\"199.4\" y2=\"22.0\"/><line x1=\"214.9\" y1=\"238.0\" x2=\"214.9\" y2=\"22.0\"/><line x1=\"45.1\" y1=\"238.0\" x2=\"214.9\" y2=\"238.0\"/><line x1=\"45.1\" y1=\"222.6\" x2=\"214.9\" y2=\"222.6\"/><line x1=\"45.1\" y1=\"207.1\" x2=\"214.9\" y2=\"207.1\"/><line x1=\"45.1\" y1=\"191.7\" x2=\"214.9\" y2=\"191.7\"/><line x1=\"45.1\" y1=\"176.3\" x2=\"214.9\" y2=\"176.3\"/><line x1=\"45.1\" y1=\"160.9\" x2=\"214.9\" y2=\"160.9\"/><line x1=\"45.1\" y1=\"145.4\" x2=\"214.9\" y2=\"145.4\"/><line x1=\"45.1\" y1=\"130.0\" x2=\"214.9\" y2=\"130.0\"/><line x1=\"45.1\" y1=\"114.6\" x2=\"214.9\" y2=\"114.6\"/><line x1=\"45.1\" y1=\"99.1\" x2=\"214.9\" y2=\"99.1\"/><line x1=\"45.1\" y1=\"83.7\" x2=\"214.9\" y2=\"83.7\"/><line x1=\"45.1\" y1=\"68.3\" x2=\"214.9\" y2=\"68.3\"/><line x1=\"45.1\" y1=\"52.9\" x2=\"214.9\" y2=\"52.9\"/><line x1=\"45.1\" y1=\"37.4\" x2=\"214.9\" y2=\"37.4\"/><line x1=\"45.1\" y1=\"22.0\" x2=\"214.9\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"45.1\" y1=\"114.6\" x2=\"214.9\" y2=\"114.6\" marker-end=\"url(#ar-q10a)\"/><text x=\"219.9\" y=\"128.6\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"106.9\" y1=\"238.0\" x2=\"106.9\" y2=\"22.0\" marker-end=\"url(#ar-q10a)\"/><text x=\"111.9\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"112.9\" y=\"128.6\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"45.1\" y1=\"130.0\" x2=\"214.9\" y2=\"130.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"148.9\" y=\"123.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：y = -1</text><line x1=\"153.1\" y1=\"176.3\" x2=\"153.1\" y2=\"83.7\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"153.1\" cy=\"176.3\" r=\"4.6\" fill=\"#111\"/><text x=\"161.1\" y=\"196.3\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">D(3, −4)</text><circle cx=\"153.1\" cy=\"83.7\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"161.1\" y=\"73.7\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">E(3, 2)</text><text x=\"141.6\" y=\"153.1\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">3</text><text x=\"141.6\" y=\"106.9\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">3</text></svg>",
        "caption": "第一步：對 y = −1 反射 → E(3, 2)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q10b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"226.0\" x2=\"22.0\" y2=\"34.0\"/><line x1=\"46.0\" y1=\"226.0\" x2=\"46.0\" y2=\"34.0\"/><line x1=\"70.0\" y1=\"226.0\" x2=\"70.0\" y2=\"34.0\"/><line x1=\"94.0\" y1=\"226.0\" x2=\"94.0\" y2=\"34.0\"/><line x1=\"118.0\" y1=\"226.0\" x2=\"118.0\" y2=\"34.0\"/><line x1=\"142.0\" y1=\"226.0\" x2=\"142.0\" y2=\"34.0\"/><line x1=\"166.0\" y1=\"226.0\" x2=\"166.0\" y2=\"34.0\"/><line x1=\"190.0\" y1=\"226.0\" x2=\"190.0\" y2=\"34.0\"/><line x1=\"214.0\" y1=\"226.0\" x2=\"214.0\" y2=\"34.0\"/><line x1=\"238.0\" y1=\"226.0\" x2=\"238.0\" y2=\"34.0\"/><line x1=\"22.0\" y1=\"226.0\" x2=\"238.0\" y2=\"226.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"178.0\" x2=\"238.0\" y2=\"178.0\"/><line x1=\"22.0\" y1=\"154.0\" x2=\"238.0\" y2=\"154.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"106.0\" x2=\"238.0\" y2=\"106.0\"/><line x1=\"22.0\" y1=\"82.0\" x2=\"238.0\" y2=\"82.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"34.0\" x2=\"238.0\" y2=\"34.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"154.0\" x2=\"238.0\" y2=\"154.0\" marker-end=\"url(#ar-q10b)\"/><text x=\"243.0\" y=\"168.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"94.0\" y1=\"226.0\" x2=\"94.0\" y2=\"34.0\" marker-end=\"url(#ar-q10b)\"/><text x=\"99.0\" y=\"32.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"100.0\" y=\"168.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"166.0\" y1=\"106.0\" x2=\"118.0\" y2=\"106.0\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-q10b)\"/><circle cx=\"166.0\" cy=\"106.0\" r=\"4.6\" fill=\"#111\"/><text x=\"174.0\" y=\"92.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">E(3, 2)</text><circle cx=\"118.0\" cy=\"106.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"126.0\" y=\"78.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">F(1, 2)</text><text x=\"142.0\" y=\"126.4\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">左 2</text></svg>",
        "caption": "第二步：向左 2 單位 → F(1, 2)"
       }
      ]
     }
    ],
    [
     {
      "id": "eph-ws04-q11",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 3,
      "code": "WS4-Q11",
      "source": "EPH WS04 Q11 · [Modified from HKDSE 2020 Paper 2 Q24]",
      "stem": {
       "text": "The point $P$ is translated leftwards by $10$ units to the point $Q$. If the coordinates of the reflection image of $Q$ with respect to the $y$-axis are $(-4,-6)$, then the coordinates of $P$ are"
      },
      "options": {
       "A": "$(-14,6)$",
       "B": "$(-6,-6)$",
       "C": "$(6,6)$",
       "D": "$(14,-6)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 由影像倒推 $Q$",
          "en": ""
         },
         "math": "Q=(-(-4),\\ -6)=(4,-6)",
         "zh": "題目給的是 $Q$ 對 $y$ 軸反射後的影像 $(-4,-6)$。反射的「反動作」就是再反射一次：改 $x$ 的符號 → $Q=(4,-6)$。",
         "en": "",
         "highlight": [
          "Q=(4,-6)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 由 $Q$ 倒推 $P$",
          "en": ""
         },
         "math": "P=(4+10,\\ -6)=(14,-6)",
         "zh": "$P$ 向左 10 才變成 $Q$，所以 $P$ 是 $Q$ 向右 10：$x=4+10=14$。",
         "en": "",
         "highlight": [
          "P=(14,-6)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 驗算",
          "en": ""
         },
         "math": "(14,-6)\\xrightarrow{\\text{左 }10}(4,-6)\\xrightarrow{\\text{對 }y\\text{ 軸}}(-4,-6)\\ \\checkmark",
         "zh": "順做一次回到題目給的 $(-4,-6)$ ✓。",
         "en": ""
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(-6,-6)$ 是倒推時方向搞錯（把 $P$ 也向左移）。",
         "en": "Wrong direction when reversing."
        },
        {
         "opt": "C",
         "zh": "$(6,6)$ 是把 $y$ 也變號了 —— 對 $y$ 軸反射不改 $y$。",
         "en": "Changed the y-coordinate."
        }
       ],
       "tip": {
        "zh": "「已知影像求原點」的題：把每一步變換做「反動作」，由後往前推回去。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q11a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"224.5\" x2=\"22.0\" y2=\"35.5\"/><line x1=\"35.5\" y1=\"224.5\" x2=\"35.5\" y2=\"35.5\"/><line x1=\"49.0\" y1=\"224.5\" x2=\"49.0\" y2=\"35.5\"/><line x1=\"62.5\" y1=\"224.5\" x2=\"62.5\" y2=\"35.5\"/><line x1=\"76.0\" y1=\"224.5\" x2=\"76.0\" y2=\"35.5\"/><line x1=\"89.5\" y1=\"224.5\" x2=\"89.5\" y2=\"35.5\"/><line x1=\"103.0\" y1=\"224.5\" x2=\"103.0\" y2=\"35.5\"/><line x1=\"116.5\" y1=\"224.5\" x2=\"116.5\" y2=\"35.5\"/><line x1=\"130.0\" y1=\"224.5\" x2=\"130.0\" y2=\"35.5\"/><line x1=\"143.5\" y1=\"224.5\" x2=\"143.5\" y2=\"35.5\"/><line x1=\"157.0\" y1=\"224.5\" x2=\"157.0\" y2=\"35.5\"/><line x1=\"170.5\" y1=\"224.5\" x2=\"170.5\" y2=\"35.5\"/><line x1=\"184.0\" y1=\"224.5\" x2=\"184.0\" y2=\"35.5\"/><line x1=\"197.5\" y1=\"224.5\" x2=\"197.5\" y2=\"35.5\"/><line x1=\"211.0\" y1=\"224.5\" x2=\"211.0\" y2=\"35.5\"/><line x1=\"224.5\" y1=\"224.5\" x2=\"224.5\" y2=\"35.5\"/><line x1=\"238.0\" y1=\"224.5\" x2=\"238.0\" y2=\"35.5\"/><line x1=\"22.0\" y1=\"224.5\" x2=\"238.0\" y2=\"224.5\"/><line x1=\"22.0\" y1=\"211.0\" x2=\"238.0\" y2=\"211.0\"/><line x1=\"22.0\" y1=\"197.5\" x2=\"238.0\" y2=\"197.5\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"170.5\" x2=\"238.0\" y2=\"170.5\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"116.5\" x2=\"238.0\" y2=\"116.5\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"89.5\" x2=\"238.0\" y2=\"89.5\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"62.5\" x2=\"238.0\" y2=\"62.5\"/><line x1=\"22.0\" y1=\"49.0\" x2=\"238.0\" y2=\"49.0\"/><line x1=\"22.0\" y1=\"35.5\" x2=\"238.0\" y2=\"35.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"89.5\" x2=\"238.0\" y2=\"89.5\" marker-end=\"url(#ar-q11a)\"/><text x=\"243.0\" y=\"103.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"224.5\" x2=\"130.0\" y2=\"35.5\" marker-end=\"url(#ar-q11a)\"/><text x=\"135.0\" y=\"33.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"136.0\" y=\"103.5\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"224.5\" x2=\"130.0\" y2=\"35.5\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"49.5\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：x = 0</text><line x1=\"76.0\" y1=\"170.5\" x2=\"184.0\" y2=\"170.5\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"76.0\" cy=\"170.5\" r=\"4.6\" fill=\"#111\"/><text x=\"84.0\" y=\"140.5\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">影像(−4, −6)</text><circle cx=\"184.0\" cy=\"170.5\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"125.4\" y=\"190.5\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q(4, −6)</text><text x=\"103.0\" y=\"157.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text><text x=\"157.0\" y=\"157.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
        "caption": "倒推第一步：影像反射返轉頭 → Q(4, −6)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q11b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"194.8\" x2=\"22.0\" y2=\"65.2\"/><line x1=\"32.8\" y1=\"194.8\" x2=\"32.8\" y2=\"65.2\"/><line x1=\"43.6\" y1=\"194.8\" x2=\"43.6\" y2=\"65.2\"/><line x1=\"54.4\" y1=\"194.8\" x2=\"54.4\" y2=\"65.2\"/><line x1=\"65.2\" y1=\"194.8\" x2=\"65.2\" y2=\"65.2\"/><line x1=\"76.0\" y1=\"194.8\" x2=\"76.0\" y2=\"65.2\"/><line x1=\"86.8\" y1=\"194.8\" x2=\"86.8\" y2=\"65.2\"/><line x1=\"97.6\" y1=\"194.8\" x2=\"97.6\" y2=\"65.2\"/><line x1=\"108.4\" y1=\"194.8\" x2=\"108.4\" y2=\"65.2\"/><line x1=\"119.2\" y1=\"194.8\" x2=\"119.2\" y2=\"65.2\"/><line x1=\"130.0\" y1=\"194.8\" x2=\"130.0\" y2=\"65.2\"/><line x1=\"140.8\" y1=\"194.8\" x2=\"140.8\" y2=\"65.2\"/><line x1=\"151.6\" y1=\"194.8\" x2=\"151.6\" y2=\"65.2\"/><line x1=\"162.4\" y1=\"194.8\" x2=\"162.4\" y2=\"65.2\"/><line x1=\"173.2\" y1=\"194.8\" x2=\"173.2\" y2=\"65.2\"/><line x1=\"184.0\" y1=\"194.8\" x2=\"184.0\" y2=\"65.2\"/><line x1=\"194.8\" y1=\"194.8\" x2=\"194.8\" y2=\"65.2\"/><line x1=\"205.6\" y1=\"194.8\" x2=\"205.6\" y2=\"65.2\"/><line x1=\"216.4\" y1=\"194.8\" x2=\"216.4\" y2=\"65.2\"/><line x1=\"227.2\" y1=\"194.8\" x2=\"227.2\" y2=\"65.2\"/><line x1=\"238.0\" y1=\"194.8\" x2=\"238.0\" y2=\"65.2\"/><line x1=\"22.0\" y1=\"194.8\" x2=\"238.0\" y2=\"194.8\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"173.2\" x2=\"238.0\" y2=\"173.2\"/><line x1=\"22.0\" y1=\"162.4\" x2=\"238.0\" y2=\"162.4\"/><line x1=\"22.0\" y1=\"151.6\" x2=\"238.0\" y2=\"151.6\"/><line x1=\"22.0\" y1=\"140.8\" x2=\"238.0\" y2=\"140.8\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"119.2\" x2=\"238.0\" y2=\"119.2\"/><line x1=\"22.0\" y1=\"108.4\" x2=\"238.0\" y2=\"108.4\"/><line x1=\"22.0\" y1=\"97.6\" x2=\"238.0\" y2=\"97.6\"/><line x1=\"22.0\" y1=\"86.8\" x2=\"238.0\" y2=\"86.8\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"65.2\" x2=\"238.0\" y2=\"65.2\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"97.6\" x2=\"238.0\" y2=\"97.6\" marker-end=\"url(#ar-q11b)\"/><text x=\"243.0\" y=\"111.6\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"54.4\" y1=\"194.8\" x2=\"54.4\" y2=\"65.2\" marker-end=\"url(#ar-q11b)\"/><text x=\"59.4\" y=\"63.2\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"60.4\" y=\"111.6\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"97.6\" y1=\"162.4\" x2=\"205.6\" y2=\"162.4\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-q11b)\"/><circle cx=\"97.6\" cy=\"162.4\" r=\"4.6\" fill=\"#111\"/><text x=\"105.6\" y=\"148.4\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">Q(4, −6)</text><circle cx=\"205.6\" cy=\"162.4\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"140.7\" y=\"134.4\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(14, −6)</text><text x=\"151.6\" y=\"171.6\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">右 10</text></svg>",
        "caption": "倒推第二步：Q 向右 10 單位 → P(14, −6)"
       }
      ]
     },
     {
      "id": "eph-ws04-q12",
      "type": "mc",
      "topic": "ws04",
      "unit": 10,
      "subtopic": "coordinate-transformation",
      "difficulty": 3,
      "code": "WS4-Q12",
      "source": "EPH WS04 Q12 · [Modified from HKDSE 2020 Paper 2 Q24]",
      "stem": {
       "text": "The point $A$ is rotated anticlockwise about the origin through $90^{\\circ}$ to the point $B$. If $B$ is translated upwards by $6$ units to $(5,-8)$, then the coordinates of $A$ are"
      },
      "options": {
       "A": "$(-14,-5)$",
       "B": "$(-2,-5)$",
       "C": "$(2,5)$",
       "D": "$(14,5)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 由平移的結果倒推 $B$",
          "en": ""
         },
         "math": "B=(5,\\ -8-6)=(5,-14)",
         "zh": "$B$ 向上 6 才變成 $(5,-8)$，所以 $B$ 的 $y=-8-6=-14$。",
         "en": "",
         "highlight": [
          "B=(5,-14)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 由 $B$ 倒推 $A$（旋轉的反動作）",
          "en": ""
         },
         "math": "\\text{逆 }90^{\\circ}\\text{ 的反動作}=\\text{順 }90^{\\circ}:(x,y)\\to(y,-x)",
         "zh": "逆時針 $90^{\\circ}$ 的反向就是順時針 $90^{\\circ}$，公式 $(x,y)\\to(y,-x)$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 代入 $B(5,-14)$",
          "en": ""
         },
         "math": "A=(-14,\\ -5)",
         "zh": "$y=-14$ 搬到前面、$x=5$ 變號放後面 → $A=(-14,-5)$。",
         "en": "",
         "highlight": [
          "A=(-14,-5)"
         ]
        },
        {
         "title": {
          "zh": "第 4 步 · 驗算",
          "en": ""
         },
         "math": "A(-14,-5)\\xrightarrow{\\text{逆 }90^{\\circ}}(5,-14)\\xrightarrow{\\text{上 }6}(5,-8)\\ \\checkmark",
         "zh": "順做一次回到題目給的 $(5,-8)$ ✓。",
         "en": ""
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(-2,-5)$ 是旋轉公式用反（用了逆時針公式去倒推）。",
         "en": "Used the forward rotation instead of its inverse."
        },
        {
         "opt": "D",
         "zh": "$(14,5)$ 是兩個座標都變號（當成 $180^{\\circ}$）。",
         "en": "Treated it as a 180° rotation."
        }
       ],
       "tip": {
        "zh": "倒推題一定要「順做一次」驗算：由你求出的 $A$ 出發，照題目做一次，看是否回到題目給的點。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q12a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"70.6\" y1=\"238.0\" x2=\"70.6\" y2=\"22.0\"/><line x1=\"81.4\" y1=\"238.0\" x2=\"81.4\" y2=\"22.0\"/><line x1=\"92.2\" y1=\"238.0\" x2=\"92.2\" y2=\"22.0\"/><line x1=\"103.0\" y1=\"238.0\" x2=\"103.0\" y2=\"22.0\"/><line x1=\"113.8\" y1=\"238.0\" x2=\"113.8\" y2=\"22.0\"/><line x1=\"124.6\" y1=\"238.0\" x2=\"124.6\" y2=\"22.0\"/><line x1=\"135.4\" y1=\"238.0\" x2=\"135.4\" y2=\"22.0\"/><line x1=\"146.2\" y1=\"238.0\" x2=\"146.2\" y2=\"22.0\"/><line x1=\"157.0\" y1=\"238.0\" x2=\"157.0\" y2=\"22.0\"/><line x1=\"167.8\" y1=\"238.0\" x2=\"167.8\" y2=\"22.0\"/><line x1=\"178.6\" y1=\"238.0\" x2=\"178.6\" y2=\"22.0\"/><line x1=\"189.4\" y1=\"238.0\" x2=\"189.4\" y2=\"22.0\"/><line x1=\"70.6\" y1=\"238.0\" x2=\"189.4\" y2=\"238.0\"/><line x1=\"70.6\" y1=\"227.2\" x2=\"189.4\" y2=\"227.2\"/><line x1=\"70.6\" y1=\"216.4\" x2=\"189.4\" y2=\"216.4\"/><line x1=\"70.6\" y1=\"205.6\" x2=\"189.4\" y2=\"205.6\"/><line x1=\"70.6\" y1=\"194.8\" x2=\"189.4\" y2=\"194.8\"/><line x1=\"70.6\" y1=\"184.0\" x2=\"189.4\" y2=\"184.0\"/><line x1=\"70.6\" y1=\"173.2\" x2=\"189.4\" y2=\"173.2\"/><line x1=\"70.6\" y1=\"162.4\" x2=\"189.4\" y2=\"162.4\"/><line x1=\"70.6\" y1=\"151.6\" x2=\"189.4\" y2=\"151.6\"/><line x1=\"70.6\" y1=\"140.8\" x2=\"189.4\" y2=\"140.8\"/><line x1=\"70.6\" y1=\"130.0\" x2=\"189.4\" y2=\"130.0\"/><line x1=\"70.6\" y1=\"119.2\" x2=\"189.4\" y2=\"119.2\"/><line x1=\"70.6\" y1=\"108.4\" x2=\"189.4\" y2=\"108.4\"/><line x1=\"70.6\" y1=\"97.6\" x2=\"189.4\" y2=\"97.6\"/><line x1=\"70.6\" y1=\"86.8\" x2=\"189.4\" y2=\"86.8\"/><line x1=\"70.6\" y1=\"76.0\" x2=\"189.4\" y2=\"76.0\"/><line x1=\"70.6\" y1=\"65.2\" x2=\"189.4\" y2=\"65.2\"/><line x1=\"70.6\" y1=\"54.4\" x2=\"189.4\" y2=\"54.4\"/><line x1=\"70.6\" y1=\"43.6\" x2=\"189.4\" y2=\"43.6\"/><line x1=\"70.6\" y1=\"32.8\" x2=\"189.4\" y2=\"32.8\"/><line x1=\"70.6\" y1=\"22.0\" x2=\"189.4\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"70.6\" y1=\"54.4\" x2=\"189.4\" y2=\"54.4\" marker-end=\"url(#ar-q12a)\"/><text x=\"194.4\" y=\"68.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"103.0\" y1=\"238.0\" x2=\"103.0\" y2=\"22.0\" marker-end=\"url(#ar-q12a)\"/><text x=\"108.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"109.0\" y=\"68.4\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"157.0\" y1=\"140.8\" x2=\"157.0\" y2=\"205.6\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-q12a)\"/><circle cx=\"157.0\" cy=\"140.8\" r=\"4.6\" fill=\"#111\"/><text x=\"165.0\" y=\"130.8\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">已知(5, −8)</text><circle cx=\"157.0\" cy=\"205.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"165.0\" y=\"195.6\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(5, −14)</text><text x=\"160.8\" y=\"173.2\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">下 6</text></svg>",
        "caption": "倒推第一步：由 (5, −8) 向下 6 → B(5, −14)"
       },
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-q12b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"214.5\" x2=\"22.0\" y2=\"45.5\"/><line x1=\"31.4\" y1=\"214.5\" x2=\"31.4\" y2=\"45.5\"/><line x1=\"40.8\" y1=\"214.5\" x2=\"40.8\" y2=\"45.5\"/><line x1=\"50.2\" y1=\"214.5\" x2=\"50.2\" y2=\"45.5\"/><line x1=\"59.6\" y1=\"214.5\" x2=\"59.6\" y2=\"45.5\"/><line x1=\"69.0\" y1=\"214.5\" x2=\"69.0\" y2=\"45.5\"/><line x1=\"78.3\" y1=\"214.5\" x2=\"78.3\" y2=\"45.5\"/><line x1=\"87.7\" y1=\"214.5\" x2=\"87.7\" y2=\"45.5\"/><line x1=\"97.1\" y1=\"214.5\" x2=\"97.1\" y2=\"45.5\"/><line x1=\"106.5\" y1=\"214.5\" x2=\"106.5\" y2=\"45.5\"/><line x1=\"115.9\" y1=\"214.5\" x2=\"115.9\" y2=\"45.5\"/><line x1=\"125.3\" y1=\"214.5\" x2=\"125.3\" y2=\"45.5\"/><line x1=\"134.7\" y1=\"214.5\" x2=\"134.7\" y2=\"45.5\"/><line x1=\"144.1\" y1=\"214.5\" x2=\"144.1\" y2=\"45.5\"/><line x1=\"153.5\" y1=\"214.5\" x2=\"153.5\" y2=\"45.5\"/><line x1=\"162.9\" y1=\"214.5\" x2=\"162.9\" y2=\"45.5\"/><line x1=\"172.3\" y1=\"214.5\" x2=\"172.3\" y2=\"45.5\"/><line x1=\"181.7\" y1=\"214.5\" x2=\"181.7\" y2=\"45.5\"/><line x1=\"191.0\" y1=\"214.5\" x2=\"191.0\" y2=\"45.5\"/><line x1=\"200.4\" y1=\"214.5\" x2=\"200.4\" y2=\"45.5\"/><line x1=\"209.8\" y1=\"214.5\" x2=\"209.8\" y2=\"45.5\"/><line x1=\"219.2\" y1=\"214.5\" x2=\"219.2\" y2=\"45.5\"/><line x1=\"228.6\" y1=\"214.5\" x2=\"228.6\" y2=\"45.5\"/><line x1=\"238.0\" y1=\"214.5\" x2=\"238.0\" y2=\"45.5\"/><line x1=\"22.0\" y1=\"214.5\" x2=\"238.0\" y2=\"214.5\"/><line x1=\"22.0\" y1=\"205.1\" x2=\"238.0\" y2=\"205.1\"/><line x1=\"22.0\" y1=\"195.7\" x2=\"238.0\" y2=\"195.7\"/><line x1=\"22.0\" y1=\"186.3\" x2=\"238.0\" y2=\"186.3\"/><line x1=\"22.0\" y1=\"177.0\" x2=\"238.0\" y2=\"177.0\"/><line x1=\"22.0\" y1=\"167.6\" x2=\"238.0\" y2=\"167.6\"/><line x1=\"22.0\" y1=\"158.2\" x2=\"238.0\" y2=\"158.2\"/><line x1=\"22.0\" y1=\"148.8\" x2=\"238.0\" y2=\"148.8\"/><line x1=\"22.0\" y1=\"139.4\" x2=\"238.0\" y2=\"139.4\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"120.6\" x2=\"238.0\" y2=\"120.6\"/><line x1=\"22.0\" y1=\"111.2\" x2=\"238.0\" y2=\"111.2\"/><line x1=\"22.0\" y1=\"101.8\" x2=\"238.0\" y2=\"101.8\"/><line x1=\"22.0\" y1=\"92.4\" x2=\"238.0\" y2=\"92.4\"/><line x1=\"22.0\" y1=\"83.0\" x2=\"238.0\" y2=\"83.0\"/><line x1=\"22.0\" y1=\"73.7\" x2=\"238.0\" y2=\"73.7\"/><line x1=\"22.0\" y1=\"64.3\" x2=\"238.0\" y2=\"64.3\"/><line x1=\"22.0\" y1=\"54.9\" x2=\"238.0\" y2=\"54.9\"/><line x1=\"22.0\" y1=\"45.5\" x2=\"238.0\" y2=\"45.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"64.3\" x2=\"238.0\" y2=\"64.3\" marker-end=\"url(#ar-q12b)\"/><text x=\"243.0\" y=\"78.3\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"172.3\" y1=\"214.5\" x2=\"172.3\" y2=\"45.5\" marker-end=\"url(#ar-q12b)\"/><text x=\"177.3\" y=\"43.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"178.3\" y=\"78.3\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"172.3\" y1=\"64.3\" x2=\"219.2\" y2=\"195.7\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"172.3\" y1=\"64.3\" x2=\"40.8\" y2=\"111.2\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 187.7 107.6 A 46.0 46.0 0 0 1 128.9 79.7\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-q12b)\"/><text x=\"146.1\" y=\"123.4\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"219.2\" cy=\"195.7\" r=\"4.6\" fill=\"#111\"/><text x=\"154.3\" y=\"185.7\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(5, −14)</text><circle cx=\"40.8\" cy=\"111.2\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"48.8\" y=\"101.2\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(−14, −5)</text></svg>",
        "caption": "倒推第二步：順時針 90°（逆 90° 的反向）→ A(−14, −5)"
       }
      ]
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 16,
  "long": 3,
  "cards": 6,
  "pages": 6
 }
};
