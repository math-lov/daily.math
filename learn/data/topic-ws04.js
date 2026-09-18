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
  "zh": "這一課學三種變換：平移（translation）、反射（reflection）、旋轉（rotation），以及怎麼用斜率（slope）證明兩條線垂直或平行。\n好消息是：**每種變換都只有一條公式**。平移是加減、反射是變號或兩倍距離、旋轉只要記兩條 $90^{\\circ}$ 公式（$270^{\\circ}$ 換成反向 $90^{\\circ}$ 就好）。DSE 這類題幾乎年年出在 Paper 1 第 6–8 題，是既易拿分又容易因方向搞錯而失分的一題 —— 慢慢做、做完驗算，是最划算的策略。"
 },
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
      "zh": "平移就是把一點「整點搬過去」，點的大小、形狀、方向都不變 —— 只有位置變。做法只是在對應的座標上加減。\n・向右 $k$ 單位 → $x$ 加 $k$；向左 $k$ 單位 → $x$ 減 $k$；\n・向上 $k$ 單位 → $y$ 加 $k$；向下 $k$ 單位 → $y$ 減 $k$。\n{{math:0}}\n例子：$A(-7,3)$ 向左 6 單位 → $A'=(-7-6,3)=(-13,3)$；$B(-2,-6)$ 向上 3 單位 → $B'=(-2,-6+3)=(-2,-3)$。\n{{math:1}}\n記憶法：**左右動 $x$、上下動 $y$**，另一個座標完全不動。很多同學會把兩個座標一起加，那是錯的。"
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
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c1a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"197.5\" x2=\"22.0\" y2=\"62.5\"/><line x1=\"35.5\" y1=\"197.5\" x2=\"35.5\" y2=\"62.5\"/><line x1=\"49.0\" y1=\"197.5\" x2=\"49.0\" y2=\"62.5\"/><line x1=\"62.5\" y1=\"197.5\" x2=\"62.5\" y2=\"62.5\"/><line x1=\"76.0\" y1=\"197.5\" x2=\"76.0\" y2=\"62.5\"/><line x1=\"89.5\" y1=\"197.5\" x2=\"89.5\" y2=\"62.5\"/><line x1=\"103.0\" y1=\"197.5\" x2=\"103.0\" y2=\"62.5\"/><line x1=\"116.5\" y1=\"197.5\" x2=\"116.5\" y2=\"62.5\"/><line x1=\"130.0\" y1=\"197.5\" x2=\"130.0\" y2=\"62.5\"/><line x1=\"143.5\" y1=\"197.5\" x2=\"143.5\" y2=\"62.5\"/><line x1=\"157.0\" y1=\"197.5\" x2=\"157.0\" y2=\"62.5\"/><line x1=\"170.5\" y1=\"197.5\" x2=\"170.5\" y2=\"62.5\"/><line x1=\"184.0\" y1=\"197.5\" x2=\"184.0\" y2=\"62.5\"/><line x1=\"197.5\" y1=\"197.5\" x2=\"197.5\" y2=\"62.5\"/><line x1=\"211.0\" y1=\"197.5\" x2=\"211.0\" y2=\"62.5\"/><line x1=\"224.5\" y1=\"197.5\" x2=\"224.5\" y2=\"62.5\"/><line x1=\"238.0\" y1=\"197.5\" x2=\"238.0\" y2=\"62.5\"/><line x1=\"22.0\" y1=\"197.5\" x2=\"238.0\" y2=\"197.5\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"170.5\" x2=\"238.0\" y2=\"170.5\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"116.5\" x2=\"238.0\" y2=\"116.5\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"89.5\" x2=\"238.0\" y2=\"89.5\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"62.5\" x2=\"238.0\" y2=\"62.5\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\" marker-end=\"url(#ar-c1a)\"/><text x=\"243.0\" y=\"137.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"224.5\" y1=\"197.5\" x2=\"224.5\" y2=\"62.5\" marker-end=\"url(#ar-c1a)\"/><text x=\"229.5\" y=\"60.5\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"212.5\" y=\"156.5\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"103.0\" x2=\"49.0\" y2=\"103.0\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-c1a)\"/><circle cx=\"130.0\" cy=\"103.0\" r=\"4.6\" fill=\"#111\"/><text x=\"136.0\" y=\"91.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(−7, 3)</text><circle cx=\"49.0\" cy=\"103.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"41.0\" y=\"91.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A′(−13, 3)</text><text x=\"89.5\" y=\"117.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">左 6</text></svg>",
       "caption": "A(−7, 3) 向左 6 單位 → A′(−13, 3)"
      },
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c1b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"220.0\" x2=\"22.0\" y2=\"40.0\"/><line x1=\"40.0\" y1=\"220.0\" x2=\"40.0\" y2=\"40.0\"/><line x1=\"58.0\" y1=\"220.0\" x2=\"58.0\" y2=\"40.0\"/><line x1=\"76.0\" y1=\"220.0\" x2=\"76.0\" y2=\"40.0\"/><line x1=\"94.0\" y1=\"220.0\" x2=\"94.0\" y2=\"40.0\"/><line x1=\"112.0\" y1=\"220.0\" x2=\"112.0\" y2=\"40.0\"/><line x1=\"130.0\" y1=\"220.0\" x2=\"130.0\" y2=\"40.0\"/><line x1=\"148.0\" y1=\"220.0\" x2=\"148.0\" y2=\"40.0\"/><line x1=\"166.0\" y1=\"220.0\" x2=\"166.0\" y2=\"40.0\"/><line x1=\"184.0\" y1=\"220.0\" x2=\"184.0\" y2=\"40.0\"/><line x1=\"202.0\" y1=\"220.0\" x2=\"202.0\" y2=\"40.0\"/><line x1=\"220.0\" y1=\"220.0\" x2=\"220.0\" y2=\"40.0\"/><line x1=\"238.0\" y1=\"220.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\" marker-end=\"url(#ar-c1b)\"/><text x=\"243.0\" y=\"52.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"166.0\" y1=\"220.0\" x2=\"166.0\" y2=\"40.0\" marker-end=\"url(#ar-c1b)\"/><text x=\"171.0\" y=\"38.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"154.0\" y=\"71.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"166.0\" x2=\"130.0\" y2=\"112.0\" stroke=\"#111\" stroke-width=\"1.7\" marker-end=\"url(#ar-c1b)\"/><circle cx=\"130.0\" cy=\"166.0\" r=\"4.6\" fill=\"#111\"/><text x=\"138.0\" y=\"184.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(−2, −6)</text><circle cx=\"130.0\" cy=\"112.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"138.0\" y=\"104.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B′(−2, −3)</text><text x=\"135.4\" y=\"140.8\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">上 3</text></svg>",
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
      "zh": "反射（reflection）像照鏡子：點到鏡軸的距離不變，只是在另一邊。\n對 **$x$ 軸**反射 → $y$ 變號、$x$ 不變；對 **$y$ 軸**反射 → $x$ 變號、$y$ 不變。\n{{math:0}}\n例子：$A(-4,2)$ 對 $y$ 軸反射 → $A'=(-(-4),2)=(4,2)$；$B(-5,-8)$ 對 $x$ 軸反射 → $B'=(-5,-(-8))=(-5,8)$。\n{{math:1}}\n記憶法：**對哪條軸反射，就動「另一個」座標** —— 對 $x$ 軸（橫的）反射改 $y$；對 $y$ 軸（直的）反射改 $x$。"
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
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"40.0\" y1=\"238.0\" x2=\"40.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"112.0\" y1=\"238.0\" x2=\"112.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"148.0\" y1=\"238.0\" x2=\"148.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"220.0\" y1=\"238.0\" x2=\"220.0\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-c2)\"/><text x=\"243.0\" y=\"124.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" marker-end=\"url(#ar-c2)\"/><text x=\"135.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"118.0\" y=\"143.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"36.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y 軸（鏡軸）</text><line x1=\"58.0\" y1=\"94.0\" x2=\"130.0\" y2=\"94.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><line x1=\"130.0\" y1=\"94.0\" x2=\"202.0\" y2=\"94.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"58.0\" cy=\"94.0\" r=\"4.6\" fill=\"#111\"/><text x=\"66.0\" y=\"84.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(−4, 2)</text><circle cx=\"202.0\" cy=\"94.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"210.0\" y=\"84.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P′(4, 2)</text><text x=\"90.4\" y=\"105.7\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text><text x=\"164.2\" y=\"105.7\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
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
      "zh": "鏡軸不是 $x$ 軸／$y$ 軸，而是一條**水平線 $y=c$** 或**垂直線 $x=c$** 時，做法分三步：先算距離 → 鏡射到另一邊（距離相同）→ 寫出新座標。\n公式（直接套用最快）：\n{{math:0}}\n例子：$B(3,2)$ 對水平線 $y=6$ 反射。距離 $=6-2=4$，所以新點在 $y=6$ 上方 4 格：$B'=(3,2+2\\times4)=(3,10)$。\n{{math:1}}\n垂直線的做法完全一樣，只是改成處理 $x$：對 $x=c$ 反射 → $x'=2c-x$、$y$ 不變。\n{{math:2}}\n小心：$c$ 可以是負數（例如 $y=-5$），代公式時連負號一起代入。"
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
      "zh": "最常見的錯：把「點到直線的距離」直接當成新座標。距離要用**兩倍**（$y+2k$），因為要跨過直線到另一邊。"
     },
     "figures": [
      {
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"112.0\" y1=\"238.0\" x2=\"112.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"148.0\" y1=\"238.0\" x2=\"148.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"202.0\" y2=\"238.0\"/><line x1=\"58.0\" y1=\"220.0\" x2=\"202.0\" y2=\"220.0\"/><line x1=\"58.0\" y1=\"202.0\" x2=\"202.0\" y2=\"202.0\"/><line x1=\"58.0\" y1=\"184.0\" x2=\"202.0\" y2=\"184.0\"/><line x1=\"58.0\" y1=\"166.0\" x2=\"202.0\" y2=\"166.0\"/><line x1=\"58.0\" y1=\"148.0\" x2=\"202.0\" y2=\"148.0\"/><line x1=\"58.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\"/><line x1=\"58.0\" y1=\"112.0\" x2=\"202.0\" y2=\"112.0\"/><line x1=\"58.0\" y1=\"94.0\" x2=\"202.0\" y2=\"94.0\"/><line x1=\"58.0\" y1=\"76.0\" x2=\"202.0\" y2=\"76.0\"/><line x1=\"58.0\" y1=\"58.0\" x2=\"202.0\" y2=\"58.0\"/><line x1=\"58.0\" y1=\"40.0\" x2=\"202.0\" y2=\"40.0\"/><line x1=\"58.0\" y1=\"22.0\" x2=\"202.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"58.0\" y1=\"238.0\" x2=\"202.0\" y2=\"238.0\" marker-end=\"url(#ar-c3)\"/><text x=\"207.0\" y=\"232.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\" marker-end=\"url(#ar-c3)\"/><text x=\"81.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"64.0\" y=\"251.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"58.0\" y1=\"130.0\" x2=\"202.0\" y2=\"130.0\" stroke=\"#111\" stroke-width=\"2.6\"/><text x=\"136.0\" y=\"123.0\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L：y = 6</text><line x1=\"130.0\" y1=\"202.0\" x2=\"130.0\" y2=\"58.0\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><circle cx=\"130.0\" cy=\"202.0\" r=\"4.6\" fill=\"#111\"/><text x=\"138.0\" y=\"192.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B(3, 2)</text><circle cx=\"130.0\" cy=\"58.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"138.0\" y=\"48.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">B′(3, 10)</text><text x=\"136.3\" y=\"166.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text><text x=\"136.3\" y=\"94.0\" font-size=\"10.5\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">4</text></svg>",
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
      "zh": "繞原點旋轉 $90^{\\circ}$ 只有兩條規則，背熟就全對：\n{{math:0}}\n口訣：**逆時針 90° → 「$y$ 變號後搬到前面」**；**順時針 90° → 「$x$ 變號後搬到後面」**。\n例子：\n{{math:1}}\n驗算法：旋轉後點與原點的距離不變 —— $(4,6)$ 與 $(-6,4)$ 到 $O$ 的距離都是 $\\sqrt{4^{2}+6^{2}}=\\sqrt{52}$ ✓。\n另一個驗算法：原點到兩點的連線互相垂直（斜率相乘 $=-1$）。\n{{math:2}}"
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
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"35.5\" y1=\"238.0\" x2=\"35.5\" y2=\"22.0\"/><line x1=\"49.0\" y1=\"238.0\" x2=\"49.0\" y2=\"22.0\"/><line x1=\"62.5\" y1=\"238.0\" x2=\"62.5\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"89.5\" y1=\"238.0\" x2=\"89.5\" y2=\"22.0\"/><line x1=\"103.0\" y1=\"238.0\" x2=\"103.0\" y2=\"22.0\"/><line x1=\"116.5\" y1=\"238.0\" x2=\"116.5\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"143.5\" y1=\"238.0\" x2=\"143.5\" y2=\"22.0\"/><line x1=\"157.0\" y1=\"238.0\" x2=\"157.0\" y2=\"22.0\"/><line x1=\"170.5\" y1=\"238.0\" x2=\"170.5\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"197.5\" y1=\"238.0\" x2=\"197.5\" y2=\"22.0\"/><line x1=\"211.0\" y1=\"238.0\" x2=\"211.0\" y2=\"22.0\"/><line x1=\"224.5\" y1=\"238.0\" x2=\"224.5\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"224.5\" x2=\"238.0\" y2=\"224.5\"/><line x1=\"22.0\" y1=\"211.0\" x2=\"238.0\" y2=\"211.0\"/><line x1=\"22.0\" y1=\"197.5\" x2=\"238.0\" y2=\"197.5\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"170.5\" x2=\"238.0\" y2=\"170.5\"/><line x1=\"22.0\" y1=\"157.0\" x2=\"238.0\" y2=\"157.0\"/><line x1=\"22.0\" y1=\"143.5\" x2=\"238.0\" y2=\"143.5\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"116.5\" x2=\"238.0\" y2=\"116.5\"/><line x1=\"22.0\" y1=\"103.0\" x2=\"238.0\" y2=\"103.0\"/><line x1=\"22.0\" y1=\"89.5\" x2=\"238.0\" y2=\"89.5\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"62.5\" x2=\"238.0\" y2=\"62.5\"/><line x1=\"22.0\" y1=\"49.0\" x2=\"238.0\" y2=\"49.0\"/><line x1=\"22.0\" y1=\"35.5\" x2=\"238.0\" y2=\"35.5\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-c4)\"/><text x=\"243.0\" y=\"124.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" marker-end=\"url(#ar-c4)\"/><text x=\"135.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"118.0\" y=\"143.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"130.0\" y1=\"130.0\" x2=\"184.0\" y2=\"49.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"49.0\" y2=\"76.0\" stroke=\"#666\" stroke-width=\"1.1\"/><path d=\"M 158.8 86.7 A 52.0 52.0 0 0 0 86.7 101.2\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.5\" marker-end=\"url(#ar-c4)\"/><text x=\"116.9\" y=\"68.3\" font-size=\"11\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">90°</text><circle cx=\"184.0\" cy=\"49.0\" r=\"4.6\" fill=\"#111\"/><text x=\"192.0\" y=\"39.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A(4, 6)</text><circle cx=\"49.0\" cy=\"76.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"43.0\" y=\"66.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">A′(−6, 4)</text></svg>",
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
      "zh": "$180^{\\circ}$ 最簡單：**兩個座標都變號**（轉半圈，方向不分順逆）。\n{{math:0}}\n$270^{\\circ}$ 不用另背公式 —— 轉 $270^{\\circ}$ 等於「反方向轉 $90^{\\circ}$」：\n・逆時針 $270^{\\circ}$ = 順時針 $90^{\\circ}$ → $(x,y)\\to(y,-x)$；\n・順時針 $270^{\\circ}$ = 逆時針 $90^{\\circ}$ → $(x,y)\\to(-y,x)$。\n{{math:1}}\n例子：$(-7,-2)$ 逆時針 $270^{\\circ}$ = 順時針 $90^{\\circ}$ → $(-2,7)$；$(-5,-3)$ 順時針 $270^{\\circ}$ = 逆時針 $90^{\\circ}$ → $(3,-5)$。\n{{math:2}}\n這樣只需記兩條 90° 公式 + 一條 180° 公式，全部旋轉題都解得完。"
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
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"40.0\" y1=\"238.0\" x2=\"40.0\" y2=\"22.0\"/><line x1=\"58.0\" y1=\"238.0\" x2=\"58.0\" y2=\"22.0\"/><line x1=\"76.0\" y1=\"238.0\" x2=\"76.0\" y2=\"22.0\"/><line x1=\"94.0\" y1=\"238.0\" x2=\"94.0\" y2=\"22.0\"/><line x1=\"112.0\" y1=\"238.0\" x2=\"112.0\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"148.0\" y1=\"238.0\" x2=\"148.0\" y2=\"22.0\"/><line x1=\"166.0\" y1=\"238.0\" x2=\"166.0\" y2=\"22.0\"/><line x1=\"184.0\" y1=\"238.0\" x2=\"184.0\" y2=\"22.0\"/><line x1=\"202.0\" y1=\"238.0\" x2=\"202.0\" y2=\"22.0\"/><line x1=\"220.0\" y1=\"238.0\" x2=\"220.0\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"220.0\" x2=\"238.0\" y2=\"220.0\"/><line x1=\"22.0\" y1=\"202.0\" x2=\"238.0\" y2=\"202.0\"/><line x1=\"22.0\" y1=\"184.0\" x2=\"238.0\" y2=\"184.0\"/><line x1=\"22.0\" y1=\"166.0\" x2=\"238.0\" y2=\"166.0\"/><line x1=\"22.0\" y1=\"148.0\" x2=\"238.0\" y2=\"148.0\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"112.0\" x2=\"238.0\" y2=\"112.0\"/><line x1=\"22.0\" y1=\"94.0\" x2=\"238.0\" y2=\"94.0\"/><line x1=\"22.0\" y1=\"76.0\" x2=\"238.0\" y2=\"76.0\"/><line x1=\"22.0\" y1=\"58.0\" x2=\"238.0\" y2=\"58.0\"/><line x1=\"22.0\" y1=\"40.0\" x2=\"238.0\" y2=\"40.0\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-c5)\"/><text x=\"243.0\" y=\"124.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\" marker-end=\"url(#ar-c5)\"/><text x=\"135.0\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"118.0\" y=\"143.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><circle cx=\"130.0\" cy=\"130.0\" r=\"64.9\" fill=\"none\" stroke=\"#666\" stroke-width=\"1.1\" stroke-dasharray=\"4 3\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"184.0\" y2=\"94.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"76.0\" y2=\"166.0\" stroke=\"#666\" stroke-width=\"1.1\"/><line x1=\"130.0\" y1=\"130.0\" x2=\"166.0\" y2=\"184.0\" stroke=\"#666\" stroke-width=\"1.1\"/><circle cx=\"184.0\" cy=\"94.0\" r=\"4.6\" fill=\"#111\"/><text x=\"192.0\" y=\"84.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">P(3, 2)</text><circle cx=\"76.0\" cy=\"166.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"66.0\" y=\"184.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">180°</text><circle cx=\"166.0\" cy=\"184.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"174.0\" y=\"202.0\" font-size=\"11.5\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">270°</text></svg>",
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
       "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-c6\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"238.0\" x2=\"22.0\" y2=\"22.0\"/><line x1=\"37.4\" y1=\"238.0\" x2=\"37.4\" y2=\"22.0\"/><line x1=\"52.9\" y1=\"238.0\" x2=\"52.9\" y2=\"22.0\"/><line x1=\"68.3\" y1=\"238.0\" x2=\"68.3\" y2=\"22.0\"/><line x1=\"83.7\" y1=\"238.0\" x2=\"83.7\" y2=\"22.0\"/><line x1=\"99.1\" y1=\"238.0\" x2=\"99.1\" y2=\"22.0\"/><line x1=\"114.6\" y1=\"238.0\" x2=\"114.6\" y2=\"22.0\"/><line x1=\"130.0\" y1=\"238.0\" x2=\"130.0\" y2=\"22.0\"/><line x1=\"145.4\" y1=\"238.0\" x2=\"145.4\" y2=\"22.0\"/><line x1=\"160.9\" y1=\"238.0\" x2=\"160.9\" y2=\"22.0\"/><line x1=\"176.3\" y1=\"238.0\" x2=\"176.3\" y2=\"22.0\"/><line x1=\"191.7\" y1=\"238.0\" x2=\"191.7\" y2=\"22.0\"/><line x1=\"207.1\" y1=\"238.0\" x2=\"207.1\" y2=\"22.0\"/><line x1=\"222.6\" y1=\"238.0\" x2=\"222.6\" y2=\"22.0\"/><line x1=\"238.0\" y1=\"238.0\" x2=\"238.0\" y2=\"22.0\"/><line x1=\"22.0\" y1=\"238.0\" x2=\"238.0\" y2=\"238.0\"/><line x1=\"22.0\" y1=\"222.6\" x2=\"238.0\" y2=\"222.6\"/><line x1=\"22.0\" y1=\"207.1\" x2=\"238.0\" y2=\"207.1\"/><line x1=\"22.0\" y1=\"191.7\" x2=\"238.0\" y2=\"191.7\"/><line x1=\"22.0\" y1=\"176.3\" x2=\"238.0\" y2=\"176.3\"/><line x1=\"22.0\" y1=\"160.9\" x2=\"238.0\" y2=\"160.9\"/><line x1=\"22.0\" y1=\"145.4\" x2=\"238.0\" y2=\"145.4\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"114.6\" x2=\"238.0\" y2=\"114.6\"/><line x1=\"22.0\" y1=\"99.1\" x2=\"238.0\" y2=\"99.1\"/><line x1=\"22.0\" y1=\"83.7\" x2=\"238.0\" y2=\"83.7\"/><line x1=\"22.0\" y1=\"68.3\" x2=\"238.0\" y2=\"68.3\"/><line x1=\"22.0\" y1=\"52.9\" x2=\"238.0\" y2=\"52.9\"/><line x1=\"22.0\" y1=\"37.4\" x2=\"238.0\" y2=\"37.4\"/><line x1=\"22.0\" y1=\"22.0\" x2=\"238.0\" y2=\"22.0\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"145.4\" x2=\"238.0\" y2=\"145.4\" marker-end=\"url(#ar-c6)\"/><text x=\"243.0\" y=\"139.4\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"114.6\" y1=\"238.0\" x2=\"114.6\" y2=\"22.0\" marker-end=\"url(#ar-c6)\"/><text x=\"119.6\" y=\"20.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"102.6\" y=\"158.4\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"68.3\" y1=\"238.0\" x2=\"176.3\" y2=\"22.0\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"22.0\" y1=\"99.1\" x2=\"238.0\" y2=\"207.1\" stroke=\"#111\" stroke-width=\"1.6\"/><line x1=\"114.6\" y1=\"145.4\" x2=\"130.0\" y2=\"145.4\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><line x1=\"130.0\" y1=\"145.4\" x2=\"130.0\" y2=\"114.6\" stroke=\"#666\" stroke-width=\"1.2\" stroke-dasharray=\"3 2.5\"/><text x=\"122.3\" y=\"158.5\" font-size=\"10.0\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">1</text><text x=\"135.4\" y=\"130.0\" font-size=\"10.0\" fill=\"#666\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">2</text><polygon points=\"114.6,145.4 121.1,132.3 134.2,138.9 127.7,152.0\" fill=\"none\" stroke=\"#111\" stroke-width=\"1.2\"/><text x=\"157.8\" y=\"31.3\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L₁：m₁ = 2</text><text x=\"25.1\" y=\"93.0\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">L₂：m₂ = −½</text></svg>",
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
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "兩個變換分開做、分開寫，每一個都拿得到 (1A)；千萬不要一次過心算兩個變換。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked"
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
        "en": "",
        "marking": "1M"
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
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 3 步 · 分別求兩條線的斜率",
         "en": ""
        },
        "math": "m_{RS}=\\frac{5-(-3)}{0-(-5)}=\\frac{8}{5},\\qquad m_{R'S'}=\\frac{5-(-5)}{-13-3}=\\frac{10}{-16}=-\\frac{5}{8}",
        "zh": "兩條斜率都要算出來，DSE 每一步都給分。",
        "en": "",
        "marking": "1M"
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
     "verify": "checked"
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
        "marking": "1M"
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
     "verify": "checked"
    }
   ],
   "pages": [
    [
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
      "verify": "checked"
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
      "verify": "checked"
     },
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
      "verify": "checked"
     }
    ],
    [
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
      "verify": "checked"
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
      "verify": "checked"
     },
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
      "verify": "checked"
     }
    ],
    [
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
      "verify": "checked"
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
      "verify": "checked"
     },
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
      "verify": "checked"
     }
    ],
    [
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
      "verify": "checked"
     },
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
        "zh": "「已知影像求原點」的題：把每一步變換做**反動作**，由後往前推回去。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
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
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 12,
  "long": 3,
  "cards": 6,
  "pages": 4
 }
};
