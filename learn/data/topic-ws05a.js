// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS05A = {
 "id": "ws05a",
 "stage": 1,
 "unit": 1,
 "subtopic": "quadratic-equations",
 "source": "EPH All-Round L5 · Worksheet 5（5.1 一元二次方程）",
 "name": {
  "zh": "一元二次方程",
  "en": "Quadratic Equations in One Unknown"
 },
 "intro": {
  "zh": "這一課把二次方程的三種解法（因式分解、取平方根、二次公式）一次過補回來，再加上判別式與「根的和與積」。\nDSE Paper 1 幾乎每年都有一條二次方程題（3–5 分的應用題或證明題），Paper 2 年年考判別式與根的和積。這一課的特點是：方法固定、步驟不多，只要符號不出錯，就是必拿的分。\n這一課分兩節：第一節「三種解法與應用題」先把三種解法做熟；第二節「判別式與根的性質」才處理 $\\Delta$、根的和積與證明題。\n（複數已經分拆成獨立一課「複數」，見主目錄。）"
 },
 "cmdHints": [
  {
   "en": "two distinct real roots",
   "zh": "兩個相異實根（$\\Delta>0$）"
  },
  {
   "en": "two equal real roots",
   "zh": "兩個相等實根（重根，$\\Delta=0$）"
  },
  {
   "en": "no real roots",
   "zh": "沒有實根（$\\Delta<0$）"
  },
  {
   "en": "the roots are $\\alpha$ and $\\beta$",
   "zh": "兩根是 $\\alpha$ 與 $\\beta$（用根的和與積，不要硬解）"
  },
  {
   "en": "is a root of the equation",
   "zh": "是方程的根（把 $x$ 換成它，等式就成立）"
  },
  {
   "en": "Find the range of values of $k$",
   "zh": "求 $k$ 的取值範圍（答案是不等式，例如 $k<-\\frac{3}{5}$）"
  }
 ],
 "lessons": [
  {
   "id": "ws05a-1",
   "title": {
    "zh": "三種解法與應用題",
    "en": "Three Methods & Applications"
   },
   "cards": [
    {
     "id": "ws05a-c1",
     "topic": "ws05a",
     "title": {
      "zh": "什麼是二次方程？",
      "en": "What is a Quadratic Equation?"
     },
     "body": {
      "zh": "二次方程（quadratic equation in one unknown）只有一個未知數，而且未知數的最高次方是 $2$。把所有項移到同一邊，就可以寫成標準形式：\n{{math:0}}\n其中 $a$ 是二次項係數、$b$ 是一次項係數、$c$ 是常數項，而且 $a\\neq 0$（如果 $a=0$，式子就退回一次方程，解法完全不同）。\n「解方程」就是找出全部令等式成立的 $x$ 值，這些答案叫做方程的根（roots）。\n為什麼一條二次方程最多只有兩個根？因為把 $ax^{2}+bx+c$ 畫成圖像是一條拋物線（parabola），而方程的根就是這條拋物線與水平的 $x$ 軸相交的位置：\n{{math:1}}\n課程內要學三種解法：① 因式分解法、② 取平方根法、③ 二次公式。三種都要練熟 —— 題目給什麼形態，就用最快的那一種，可以省一半時間。"
     },
     "math": [
      "ax^{2}+bx+c=0\\quad(a\\neq 0)",
      "x^{2}-2x-3=0\\ \\Rightarrow\\ (x+1)(x-3)=0\\ \\Rightarrow\\ x=-1\\ \\text{或}\\ x=3"
     ],
     "vocab": [
      {
       "en": "quadratic equation in one unknown",
       "zh": "一元二次方程"
      },
      {
       "en": "root",
       "zh": "根（令方程成立的未知數值）"
      },
      {
       "en": "parabola",
       "zh": "拋物線"
      }
     ],
     "warn": {
      "zh": "$a\\neq 0$ 是硬性條件：$a=0$ 時式子只剩一次項，根的數目與解法都完全不同，所以不可以把二次方程當一次方程解。"
     }
    },
    {
     "id": "ws05a-c2",
     "topic": "ws05a",
     "title": {
      "zh": "解法一：因式分解法",
      "en": "Method 1 · Factor Method"
     },
     "body": {
      "zh": "因式分解法靠的是這條性質：\n{{math:0}}\n兩個括號相乘等於 $0$，就代表其中至少一個等於 $0$。所以做法固定三步：先把方程整理成「一邊是 $0$」，再把另一邊分解，然後令每個括號等於 $0$，各自解出一元一次方程。\n例：解 $x^{2}-5x+6=0$。\n第 1 步 · 因式分解：$x^{2}-5x+6=(x-2)(x-3)$。\n第 2 步 · 令每個括號等於 $0$：\n{{math:1}}\n第 3 步 · 分別解出 $x=2$ 或 $x=3$。\n最常犯的錯：未整理成「一邊是 $0$」就兩邊約走公因式。例如解 $x^{2}=3x$，千萬不要兩邊約 $x$（會失去 $x=0$ 這個根），要移項成\n{{math:2}}\n再抽公因式得 $x(x-3)=0$，所以 $x=0$ 或 $x=3$。\n什麼時候用因式分解？一眼看到可以分解（抽公因式、平方差、十字相乘）時，它最快。"
     },
     "math": [
      "A\\times B=0\\ \\Rightarrow\\ A=0\\ \\text{或}\\ B=0",
      "(x-2)(x-3)=0\\ \\Rightarrow\\ x-2=0\\ \\text{或}\\ x-3=0",
      "x^{2}-3x=0"
     ],
     "vocab": [
      {
       "en": "factor method",
       "zh": "因式分解法"
      },
      {
       "en": "bracket",
       "zh": "括號"
      },
      {
       "en": "lose a root",
       "zh": "失去一個根"
      }
     ],
     "warn": {
      "zh": "兩邊同時約走含有未知數的因式，就會失去 $x=0$ 這個根。DSE 幾乎年年用這個陷阱（例如 $7x^{2}=14x$、$x(x-2)=6x$ 都是同一招）。"
     }
    },
    {
     "id": "ws05a-c3",
     "topic": "ws05a",
     "title": {
      "zh": "解法二：取平方根法",
      "en": "Method 2 · Method of Taking Square Roots"
     },
     "body": {
      "zh": "當方程可以寫成「（某個東西）$^{2}$ = 一個非負數」時，直接開平方根最快：\n{{math:0}}\n為什麼一定要寫 $\\pm$？因為 $3^{2}=9$，而 $(-3)^{2}$ 同樣是 $9$，兩個數的平方都等於 $9$，所以開方之後正負兩種都要寫。\n例：解 $(x-2)^{2}=9$。\n{{math:1}}\n所以 $x=5$ 或 $x=-1$。\n如果平方前面有係數，先除掉：$4(x+3)^{2}=9$ 要先寫成\n{{math:2}}\n然後才開方。\n必記的準備動作：先把方程整理成「（一次式）$^{2}$ = 常數」。例如 $x^{2}+10x+25=0$ 要看出左邊是完全平方 $(x+5)^{2}$，於是：\n{{math:3}}\n注意這裡只有一個根（叫重根），因為開方後 $x+5=0$，正負兩個情況合併成同一個答案。"
     },
     "math": [
      "(x+m)^{2}=n,\\ n\\geq 0\\ \\Rightarrow\\ x+m=\\pm\\sqrt{n}",
      "x-2=\\pm 3\\ \\Rightarrow\\ x=2+3=5\\ \\text{或}\\ x=2-3=-1",
      "(x+3)^{2}=\\frac{9}{4}",
      "(x+5)^{2}=0\\ \\Rightarrow\\ x=-5"
     ],
     "vocab": [
      {
       "en": "method of taking square roots",
       "zh": "取平方根法"
      },
      {
       "en": "repeated root",
       "zh": "重根（兩個根相同）"
      },
      {
       "en": "perfect square",
       "zh": "完全平方"
      }
     ],
     "warn": {
      "zh": "開方之後一定要寫 $\\pm$。只寫正的那一個（例如只寫 $x=5$）就少了一個根，是這類題最常見的失分。"
     }
    },
    {
     "id": "ws05a-c4",
     "topic": "ws05a",
     "title": {
      "zh": "解法三：二次公式",
      "en": "Method 3 · Quadratic Formula"
     },
     "body": {
      "zh": "如果方程分解不出來，就用二次公式 —— 這是「一定行得通」的方法：\n{{math:0}}\n只要把方程整理成 $ax^{2}+bx+c=0$ 的標準形式，再把 $a$、$b$、$c$ 連同正負號一起代入就可以。\n例：解 $2x^{2}-x-8=0$（分解不出來）。這裡 $a=2$、$b=-1$、$c=-8$：\n{{math:1}}\n{{math:2}}\n代入時最容易出錯的是符號：公式開頭是 $-b$，所以 $b=-1$ 時要寫 $-(-1)=1$；而 $4ac$ 那一項是「減」，$c=-8$ 時就是減一個負數。\n計算機提示（Casio fx-50FH II）：內置的二次方程程式可以直接輸入 $a$、$b$、$c$ 求出兩個根。但答案要寫成根式（例如 $\\frac{1+\\sqrt{65}}{4}$），除非題目要求「準確至三位有效數字」，否則不要只寫小數。"
     },
     "math": [
      "x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}",
      "x=\\frac{-(-1)\\pm\\sqrt{(-1)^{2}-4(2)(-8)}}{2(2)}=\\frac{1\\pm\\sqrt{65}}{4}",
      "x\\approx 2.27\\ \\text{或}\\ x\\approx -1.77"
     ],
     "vocab": [
      {
       "en": "quadratic formula",
       "zh": "二次公式"
      },
      {
       "en": "coefficient",
       "zh": "係數"
      },
      {
       "en": "standard form",
       "zh": "標準形式"
      }
     ],
     "warn": {
      "zh": "代入時 $b$ 與 $c$ 要連負號一齊代入。另外分母是 $2a$，要整條分子一齊除 —— 只除第一項就會全題錯。"
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws05a-ex01",
     "type": "long",
     "topic": "ws05a",
     "unit": 1,
     "subtopic": "quadratic-equations",
     "difficulty": 1,
     "code": "WS5A-EX1",
     "source": "WS05 銜接示範（自編）· 三招各做一次",
     "stem": {
      "text": "Work out the following."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Solve $x^{2}-7x+12=0$ by the factor method.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Solve $(x-3)^{2}=16$ by taking square roots.",
       "marks": 2
      },
      {
       "label": "(c)",
       "text": "Determine the number of real roots of (i) $x^{2}-6x+1=0$, (ii) $x^{2}-6x+9=0$ and (iii) $x^{2}-6x+13=0$.",
       "marks": 3
      }
     ],
     "marks": 7,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 第 1 步 · 因式分解",
         "en": ""
        },
        "math": "x^{2}-7x+12=(x-3)(x-4)=0",
        "zh": "(a) 因式分解法：找兩個數相乘等於 $12$、相加等於 $-7$，即 $-3$ 與 $-4$（$(-3)\\times(-4)=12$、$-3-4=-7$），所以 $x^{2}-7x+12=(x-3)(x-4)$。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "(a) 第 2 步 · 令每個括號等於 0",
         "en": ""
        },
        "math": "x-3=0\\ \\text{或}\\ x-4=0\\ \\Rightarrow\\ x=3\\ \\text{或}\\ x=4",
        "zh": "兩個括號各自等於 $0$，得出 $x=3$ 或 $x=4$。驗算：$3^{2}-7(3)+12=9-21+12=0$ ✓。",
        "en": "",
        "highlight": [
         "x=3",
         "x=4"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "(b) 第 1 步 · 開平方根（寫 ±）",
         "en": ""
        },
        "math": "(x-3)^{2}=16\\ \\Rightarrow\\ x-3=\\pm 4",
        "zh": "(b) 取平方根法：右邊 $16=4^{2}$，開方後一定要寫 $\\pm$，即 $x-3=4$ 或 $x-3=-4$。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "(b) 第 2 步 · 移項求出兩個根",
         "en": ""
        },
        "math": "x=3+4=7\\ \\text{或}\\ x=3-4=-1",
        "zh": "兩邊加 $3$：$x=7$ 或 $x=-1$。開方一定要取正負兩個情況，否則會少一個根。",
        "en": "",
        "highlight": [
         "x=7",
         "x=-1"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "(c) 第 1 步 · 寫出判別式",
         "en": ""
        },
        "math": "\\Delta=(-6)^{2}-4(1)c=36-4c",
        "zh": "(c) 三個方程只有常數項不同，所以先寫出一般式：$a=1$、$b=-6$、$c$ 是常數項，$\\Delta=b^{2}-4ac=36-4c$。判別式只要看正負，就知道有幾個實根。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "(c) 第 2 步 · (i) 與 (ii) 的判斷",
         "en": ""
        },
        "math": "(i)\\ \\Delta=36-4(1)=32>0;\\qquad (ii)\\ \\Delta=36-4(9)=0",
        "zh": "(i) $c=1$：$\\Delta=32>0$ → 兩個相異實根。 (ii) $c=9$：$\\Delta=0$ → 兩個相等的實根（重根），因為 $x^{2}-6x+9=(x-3)^{2}$。",
        "en": "",
        "marking": "1A"
       },
       {
        "title": {
         "zh": "(c) 第 3 步 · (iii) 的判斷",
         "en": ""
        },
        "math": "(iii)\\ \\Delta=36-4(13)=-16<0\\ \\Rightarrow\\ \\text{沒有實根}",
        "zh": "(iii) $c=13$：$\\Delta=-16<0$ → 沒有實根。三個方程只差一個常數項，根的數目卻完全不同 —— 這就是判別式的作用。",
        "en": "",
        "highlight": [
         "沒有實根"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "選方法看「形態」：可以分解就用因式分解；寫成「（一次式）$^{2}$ = 常數」就用取平方根；分解不出來就先算 $\\Delta$。這一頁三種都做了一次，之後每題先問自己「它像哪一種」。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws05a-ex03",
     "type": "long",
     "topic": "ws05a",
     "unit": 1,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "WS5A-EX3",
     "source": "WS05 Example 1 · [HKDSE 2019 Paper 1 Q3]",
     "stem": {
      "text": "The length and the breadth of a rectangle are $12$ cm and $(13+r)$ cm respectively. If the length of a diagonal of the rectangle is $(7-2r)$ cm, find $r$."
     },
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 用畢氏定理列出方程",
         "en": ""
        },
        "math": "12^{2}+(13+r)^{2}=(7-2r)^{2}",
        "zh": "矩形的長、闊與對角線組成一個直角三角形（對角線是斜邊），所以用畢氏定理：$12^{2}+(13+r)^{2}=(7-2r)^{2}$。把這條方程寫出來就拿到 (1M)。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 2 步 · 展開並整理成 $ar^{2}+br+c=0$",
         "en": ""
        },
        "math": "144+169+26r+r^{2}=49-28r+4r^{2}\\ \\Rightarrow\\ 3r^{2}-54r-264=0",
        "zh": "左邊 $(13+r)^{2}=169+26r+r^{2}$（交叉項 $2\\times13\\times r=26r$ 不可以漏），所以左邊是 $313+26r+r^{2}$；右邊 $(7-2r)^{2}=49-28r+4r^{2}$。把所有項移到同一邊並化簡，得 $3r^{2}-54r-264=0$ —— 這一步的 (1M) 是給「寫成 $ar^{2}+br+c=0$ 的形態」。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 3 步 · 化簡後因式分解",
         "en": ""
        },
        "math": "r^{2}-18r-88=0\\ \\Rightarrow\\ (r+4)(r-22)=0",
        "zh": "三項都除以 $3$，令首項係數變成 $1$（方便分解）：$r^{2}-18r-88=0$。找兩個數：相乘 $-88$、相加 $-18$，即 $+4$ 與 $-22$，分解成 $(r+4)(r-22)$。",
        "en": ""
       },
       {
        "title": {
         "zh": "第 4 步 · 解方程並剔除不合題意的根",
         "en": ""
        },
        "math": "r=-4\\ \\text{或}\\ r=22;\\qquad (7-2r)>0\\ \\Rightarrow\\ r<3.5\\ \\Rightarrow\\ r=-4",
        "zh": "$r=22$ 會令對角線 $7-2r=7-44=-37$，長度不可能是負數，所以要剔除（rejected）；因此 $r=-4$。驗算：$r=-4$ 時闊 $=13-4=9$，對角線 $=7+8=15$，而 $12^{2}+9^{2}=225=15^{2}$ ✓。",
        "en": "",
        "highlight": [
         "r=-4"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "文字題的幾何部分（長方形的對角線）只是包裝，列完方程之後就是一條普通的二次方程。最後的「驗算並剔除不合題意的根」是 DSE 固定給分位，一定要寫。",
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
      "id": "eph-ws05a-w01",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 1,
      "code": "WS5A-W01",
      "source": "WS05 過渡題（自編）· Level 1 因式分解法：兩個根都是整數",
      "stem": {
       "text": "Solve $x^{2}-5x+6=0$."
      },
      "options": {
       "A": "$x=2$ or $x=3$",
       "B": "$x=-2$ or $x=-3$",
       "C": "$x=2$ or $x=-3$",
       "D": "$x=1$ or $x=6$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先確認一邊是 0",
          "en": "Step 1 · One side must be 0"
         },
         "math": "x^{2}-5x+6=0",
         "zh": "因式分解法的第一步，是確認方程已經寫成「一邊是 $0$」。這題右邊本來就是 $0$，所以可以直接跳到分解；如果右邊不是 $0$（例如 $x^{2}-5x=-6$），一定要先移項。",
         "en": "Make sure one side is 0 before factorizing."
        },
        {
         "title": {
          "zh": "第 2 步 · 用十字相乘分解左邊",
          "en": "Step 2 · Factorize the left side"
         },
         "math": "x^{2}-5x+6=(x-2)(x-3)",
         "zh": "要找兩個數：相乘等於 $6$、相加等於 $-5$。$2\\times3=6$、$-2+(-3)=-5$，所以取 $-2$ 與 $-3$，分解成 $(x-2)(x-3)$。",
         "en": "Two numbers: product 6, sum -5, i.e. -2 and -3."
        },
        {
         "title": {
          "zh": "第 3 步 · 每個括號各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "x-2=0\\ \\text{或}\\ x-3=0\\ \\Rightarrow\\ x=2\\ \\text{或}\\ x=3",
         "zh": "兩個括號相乘等於 $0$，代表至少一個括號等於 $0$，所以分開解兩條一元一次方程，得出 $x=2$ 或 $x=3$，答案選 A。",
         "en": "x = 2 or x = 3. Answer: A.",
         "highlight": [
          "x=2",
          "x=3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "兩個根都變成負數：$(x+2)(x+3)$ 展開是 $x^{2}+5x+6$，中間項是 $+5x$，跟題目的 $-5x$ 不同。",
         "en": "Both signs flipped; check the middle term."
        },
        {
         "opt": "D",
         "zh": "$1\\times6=6$ 但 $1+6=7$，相加不等於中間項 $-5$，所以這組數不可以用。",
         "en": "1 and 6 do not add up to -5."
        }
       ],
       "tip": {
        "zh": "分解完一定要心算展開檢查中間項：$(x-2)(x-3)=x^{2}-5x+6$ ✓。中間項對不上，就是分解錯了。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-w02",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 1,
      "code": "WS5A-W02",
      "source": "WS05 過渡題（自編）· Level 2 兩邊都有 x：不可以約走",
      "stem": {
       "text": "Solve $2x^{2}=6x$."
      },
      "options": {
       "A": "$x=3$",
       "B": "$x=0$",
       "C": "$x=0$ or $x=3$",
       "D": "$x=0$ or $x=-3$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項令右邊變成 0",
          "en": "Step 1 · Move everything to one side"
         },
         "math": "2x^{2}-6x=0",
         "zh": "方程右邊有 $x$，所以第一步是兩邊同時減 $6x$，令右邊變成 $0$。只有一邊是 $0$ 才可以抽公因式。",
         "en": "Subtract 6x from both sides."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式",
          "en": "Step 2 · Take out the common factor"
         },
         "math": "2x(x-3)=0",
         "zh": "$2x^{2}$ 與 $6x$ 的公因式是 $2x$：係數取 $2$、字母取最低次方 $x$。抽出來之後括號內是 $x-3$（$6x\\div2x=3$）。",
         "en": "2x is the common factor."
        },
        {
         "title": {
          "zh": "第 3 步 · 兩個括號各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "2x=0\\ \\text{或}\\ x-3=0\\ \\Rightarrow\\ x=0\\ \\text{或}\\ x=3",
         "zh": "$2x=0$ 給出 $x=0$；$x-3=0$ 給出 $x=3$。兩個都是答案，所以選 C。",
         "en": "x = 0 or x = 3. Answer: C.",
         "highlight": [
          "x=0",
          "x=3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=3$ 是兩邊直接約走 $x$（或同除 $2x$）的結果 —— 這樣做會把 $x=0$ 這個根丟掉。含未知數的因式不可以約。",
         "en": "Cancelling x removes the root x = 0."
        },
        {
         "opt": "B",
         "zh": "$x=0$ 只取了第一個括號，漏了 $x-3=0$ 給出的 $x=3$。",
         "en": "Only one bracket was solved."
        }
       ],
       "tip": {
        "zh": "看到方程兩邊都有 $x$，第一反應不是「約」，而是「移項 + 抽公因式」。約走了就會少一個根。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-w03",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 1,
      "code": "WS5A-W03",
      "source": "WS05 過渡題（自編）· Level 3 取平方根法：開方要寫正負",
      "stem": {
       "text": "Solve $(x-2)^{2}=9$."
      },
      "options": {
       "A": "$x=5$",
       "B": "$x=-1$",
       "C": "$x=5$ or $x=-1$",
       "D": "$x=-5$ or $x=1$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 開平方根，寫上正負號",
          "en": "Step 1 · Take square roots with ±"
         },
         "math": "(x-2)^{2}=9\\ \\Rightarrow\\ x-2=\\pm 3",
         "zh": "方程已經是「（一次式）$^{2}$ = 常數」的形態，可以直接開平方根。開方一定要寫 $\\pm$，因為 $3^{2}=9$，而 $(-3)^{2}$ 同樣是 $9$。",
         "en": "Taking square roots gives x − 2 = ±3."
        },
        {
         "title": {
          "zh": "第 2 步 · 移項求出兩個根",
          "en": "Step 2 · Solve both cases"
         },
         "math": "x=2+3=5\\ \\text{或}\\ x=2-3=-1",
         "zh": "兩邊加 $2$（把 $-2$ 移項），得出 $x=5$ 或 $x=-1$，答案選 C。",
         "en": "x = 5 or x = -1. Answer: C.",
         "highlight": [
          "x=5",
          "x=-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=5$ 只取了正的那一邊，漏了 $x-2=-3$ 的情況 —— 開方不寫 $\\pm$ 就會少一個根。",
         "en": "Only the positive case was used."
        },
        {
         "opt": "D",
         "zh": "$x=-5$ 或 $x=1$ 是把括號寫成 $x+2$ 再開方（移項方向錯），符號位置整個反了。",
         "en": "Sign error before taking the square root."
        }
       ],
       "tip": {
        "zh": "取平方根法只有兩步：開方（寫 ±）→ 移項。開方後先寫成 $x-2=3$ 與 $x-2=-3$ 兩行，再各自解，就不會漏根。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05a-q01",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q01",
      "source": "EPH WS05 Q3 · [HKCEE 2006 Paper 2 Q8]",
      "stem": {
       "text": "Solve $7x^{2}=14x$."
      },
      "options": {
       "A": "$x=2$",
       "B": "$x=7$",
       "C": "$x=0$ or $x=2$",
       "D": "$x=0$ or $x=7$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項令右邊變成 0",
          "en": "Step 1 · Move all terms to one side"
         },
         "math": "7x^{2}-14x=0",
         "zh": "方程兩邊都有 $x$，第一步是兩邊同時減 $14x$，令右邊變成 $0$，這樣才可以抽公因式。",
         "en": "Subtract 14x from both sides."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式",
          "en": "Step 2 · Take out the common factor"
         },
         "math": "7x(x-2)=0",
         "zh": "$7x^{2}$ 與 $14x$ 的公因式是 $7x$（係數取 $7$、字母取最低次方 $x$），抽出來得 $7x(x-2)$。",
         "en": "7x is the common factor."
        },
        {
         "title": {
          "zh": "第 3 步 · 各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "7x=0\\ \\text{或}\\ x-2=0\\ \\Rightarrow\\ x=0\\ \\text{或}\\ x=2",
         "zh": "$7x=0$ 給出 $x=0$；$x-2=0$ 給出 $x=2$。所以答案是 $x=0$ 或 $x=2$，選 C。",
         "en": "x = 0 or x = 2. Answer: C.",
         "highlight": [
          "x=0",
          "x=2"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=2$ 是兩邊直接約走 $x$（或除以 $7x$）的結果，會失去 $x=0$ 這個根。",
         "en": "Cancelling x loses the root x = 0."
        },
        {
         "opt": "D",
         "zh": "$x=7$ 是解 $7x=0$ 時把係數 $7$ 當成答案 —— $7x=0$ 應該給出 $x=0$。",
         "en": "7x = 0 gives x = 0, not 7."
        }
       ],
       "tip": {
        "zh": "「兩邊都有 $x$」的方程：先移項、再抽公因式，永遠不要把 $x$ 約走。這是 DSE Paper 2 最常見的送分陷阱。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q02",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q02",
      "source": "EPH WS05 Q4 · [HKCEE 2004 Paper 2 Q7]",
      "stem": {
       "text": "Solve $x(x-2)=6x$."
      },
      "options": {
       "A": "$x=4$",
       "B": "$x=8$",
       "C": "$x=0$ or $x=4$",
       "D": "$x=0$ or $x=8$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項令右邊變成 0",
          "en": "Step 1 · Move all terms to one side"
         },
         "math": "x(x-2)-6x=0",
         "zh": "兩邊同時減 $6x$，把所有項移到左邊。",
         "en": "Subtract 6x from both sides."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式 $x$",
          "en": "Step 2 · Take out the common factor x"
         },
         "math": "x[(x-2)-6]=x(x-8)=0",
         "zh": "$x(x-2)$ 與 $6x$ 都有公因式 $x$。抽出來後括號內要逐項相減：$(x-2)-6=x-8$，所以是 $x(x-8)=0$。",
         "en": "(x − 2) − 6 = x − 8."
        },
        {
         "title": {
          "zh": "第 3 步 · 各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "x=0\\ \\text{或}\\ x-8=0\\ \\Rightarrow\\ x=0\\ \\text{或}\\ x=8",
         "zh": "得出 $x=0$ 或 $x=8$，答案選 D。",
         "en": "x = 0 or x = 8. Answer: D.",
         "highlight": [
          "x=0",
          "x=8"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=4$ 是約走 $x$ 之後把 $x-2=6$ 算成 $x=6-2=4$（移項方向錯），同時也丟掉了 $x=0$ 這個根。",
         "en": "Cancelled x and then made a sign slip."
        },
        {
         "opt": "B",
         "zh": "$x=8$ 是約走 $x$ 之後解 $x-2=6$ 的結果 —— 只得到一個根，$x=0$ 被丟掉了。",
         "en": "Cancelling x loses the root x = 0."
        }
       ],
       "tip": {
        "zh": "抽公因式後，括號內是「每一項除以公因式」的結果，一項一項對清楚符號，才不會少算一個減號。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q03",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q03",
      "source": "EPH WS05 Q5 · [HKDSE 2013 Paper 2 Q6]",
      "stem": {
       "text": "Let $k$ be a constant. Solve the equation $(x+k)^{2}=9k^{2}$."
      },
      "options": {
       "A": "$x=2k$",
       "B": "$x=8k$",
       "C": "$x=-4k$ or $x=2k$",
       "D": "$x=-10k$ or $x=8k$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 開平方根",
          "en": "Step 1 · Take square roots"
         },
         "math": "(x+k)^{2}=9k^{2}\\ \\Rightarrow\\ x+k=\\pm 3k",
         "zh": "右邊 $9k^{2}=(3k)^{2}$，開方後得 $x+k=3k$ 或 $x+k=-3k$ —— 正負兩種都要寫（這是取平方根法）。",
         "en": "9k² = (3k)², so x + k = ±3k."
        },
        {
         "title": {
          "zh": "第 2 步 · 移項求兩個根",
          "en": "Step 2 · Solve both cases"
         },
         "math": "x=3k-k=2k\\ \\text{或}\\ x=-3k-k=-4k",
         "zh": "兩邊減 $k$：$x=3k-k=2k$；另一邊 $x=-3k-k=-4k$。所以答案選 C。",
         "en": "x = 2k or x = -4k. Answer: C.",
         "highlight": [
          "x=2k",
          "x=-4k"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=2k$ 只寫了正的那一邊，漏了 $x=-4k$。",
         "en": "Only the positive case."
        },
        {
         "opt": "D",
         "zh": "$x=-10k$ 或 $8k$ 是開方時漏了平方根，把 $9k^{2}$ 開成 $9k$：$x+k=\\pm 9k$ 就得出這兩個值。",
         "en": "The square root of 9k² is 3k, not 9k."
        }
       ],
       "tip": {
        "zh": "$9k^{2}$ 要先看成 $(3k)^{2}$ 才開方；開方後兩個情況都要解，最後把 $k$ 移項。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05a-q04",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q04",
      "source": "EPH WS05 Q6",
      "stem": {
       "text": "Let $a$ be a constant. Solve the equation $(x-5a)^{2}=4a^{2}$."
      },
      "options": {
       "A": "$x=9a$",
       "B": "$x=7a$",
       "C": "$x=a$ or $x=9a$",
       "D": "$x=3a$ or $x=7a$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 開平方根",
          "en": "Step 1 · Take square roots"
         },
         "math": "(x-5a)^{2}=4a^{2}\\ \\Rightarrow\\ x-5a=\\pm 2a",
         "zh": "$4a^{2}=(2a)^{2}$，開方後寫 $\\pm$：$x-5a=2a$ 或 $x-5a=-2a$。",
         "en": "4a² = (2a)², so x − 5a = ±2a."
        },
        {
         "title": {
          "zh": "第 2 步 · 移項求兩個根",
          "en": "Step 2 · Solve both cases"
         },
         "math": "x=5a+2a=7a\\ \\text{或}\\ x=5a-2a=3a",
         "zh": "兩邊加 $5a$：得出 $x=7a$ 或 $x=3a$，答案選 D。",
         "en": "x = 7a or x = 3a. Answer: D.",
         "highlight": [
          "x=7a",
          "x=3a"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=9a$ 是把 $4a^{2}$ 開方成 $4a$（只開數字、忘記開字母），得 $5a+4a=9a$。",
         "en": "Square root of 4a² is 2a, not 4a."
        },
        {
         "opt": "C",
         "zh": "$x=a$ 或 $x=9a$ 是把 $4a^{2}$ 開方成 $4a$（只開數字、忘記開字母），再把正負兩個情況都取：$5a+4a=9a$ 或 $5a-4a=a$。",
         "en": "The square root of 4a² is 2a, not 4a."
        }
       ],
       "tip": {
        "zh": "開方是開「整塊」：$4a^{2}$ 開方是 $2a$。係數與字母都要開方，開完之後兩個情況都要解。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q05",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q05",
      "source": "EPH WS05 Q7 · [HKDSE Sample Paper 2 Q6]",
      "stem": {
       "text": "Let $c$ be a constant. Solve the equation $(x+3c)(x-c+1)=(x+3c)$."
      },
      "options": {
       "A": "$x=c$",
       "B": "$x=c-1$",
       "C": "$x=-3c$ or $x=c$",
       "D": "$x=-3c$ or $x=c-1$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項，不要約走 $(x+3c)$",
          "en": "Step 1 · Move terms, do not cancel"
         },
         "math": "(x+3c)(x-c+1)-(x+3c)=0",
         "zh": "兩邊都有 $(x+3c)$，但無論如何都不可以約走它（會失去 $x=-3c$ 這個根）。做法是先把所有項移到左邊，令右邊是 $0$。",
         "en": "Never cancel the common bracket."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式 $(x+3c)$",
          "en": "Step 2 · Factor out the bracket"
         },
         "math": "(x+3c)[(x-c+1)-1]=(x+3c)(x-c)=0",
         "zh": "把 $(x+3c)$ 當成一個整體抽出來，括號內是 $(x-c+1)-1$，化簡成 $x-c$。",
         "en": "(x − c + 1) − 1 = x − c."
        },
        {
         "title": {
          "zh": "第 3 步 · 各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "x+3c=0\\ \\text{或}\\ x-c=0\\ \\Rightarrow\\ x=-3c\\ \\text{或}\\ x=c",
         "zh": "兩個括號分別解出 $x=-3c$ 與 $x=c$，答案選 C。",
         "en": "x = -3c or x = c. Answer: C.",
         "highlight": [
          "x=-3c",
          "x=c"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=c$ 是兩邊約走 $(x+3c)$ 的結果 —— 約走之後只剩下一個根，$x=-3c$ 就被丟掉了。",
         "en": "Cancelling removes the root x = -3c."
        },
        {
         "opt": "D",
         "zh": "$x=-3c$ 或 $x=c-1$ 是抽公因式時漏了減 $1$（把括號內寫成 $x-c+1$），所以第二個根錯成 $c-1$。",
         "en": "Forgot to subtract 1."
        }
       ],
       "tip": {
        "zh": "「左右有相同括號」的方程，口號是：不要約，要移項再抽。約走就會少一個根，DSE 的選項一定把那個缺失的根做成干擾項。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q06",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "WS5A-Q06",
      "source": "EPH WS05 Q8 · [HKDSE 2022 Paper 2 Q4]",
      "stem": {
       "text": "Let $t$ be a constant. Solve the equation $(x-2t)(x-3t)=(6t-x)(x-3t)$."
      },
      "options": {
       "A": "$x=3t$",
       "B": "$x=6t$",
       "C": "$x=2t$ or $x=6t$",
       "D": "$x=3t$ or $x=4t$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項，令右邊是 0",
          "en": "Step 1 · Move terms to one side"
         },
         "math": "(x-2t)(x-3t)-(6t-x)(x-3t)=0",
         "zh": "兩邊有相同的括號 $(x-3t)$，先移項令右邊是 $0$，不可以直接約走。",
         "en": "Bring all terms to the left."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式，注意變號",
          "en": "Step 2 · Factor out, mind the signs"
         },
         "math": "(x-3t)[(x-2t)-(6t-x)]=(x-3t)(2x-8t)=0",
         "zh": "抽出 $(x-3t)$ 之後，括號內是 $(x-2t)-(6t-x)$。逐項變號：$x-2t-6t+x=2x-8t$。",
         "en": "(x − 2t) − (6t − x) = 2x − 8t."
        },
        {
         "title": {
          "zh": "第 3 步 · 各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "x-3t=0\\ \\text{或}\\ 2x-8t=0\\ \\Rightarrow\\ x=3t\\ \\text{或}\\ x=4t",
         "zh": "得出 $x=3t$ 或 $x=4t$，答案選 D。",
         "en": "x = 3t or x = 4t. Answer: D.",
         "highlight": [
          "x=3t",
          "x=4t"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=3t$ 只寫了其中一個根（來自 $(x-3t)$），漏了另一邊解出的 $x=4t$。",
         "en": "Only one of the two roots was given."
        },
        {
         "opt": "B",
         "zh": "$x=6t$ 是誤把 $6t-x$ 當成一個因式並令它等於 $0$。真正的因式是 $(x-3t)$ 與 $(x-2t)$，$6t-x$ 不是因式（它是等號右邊的其中一個括號）。",
         "en": "The right-hand bracket is not a factor."
        }
       ],
       "tip": {
        "zh": "相減時括號內每一項都要變號：$-(6t-x)=-6t+x$。這一步錯了，之後的答案一定錯。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     }
    ]
   ]
  },
  {
   "id": "ws05a-2",
   "title": {
    "zh": "判別式與根的性質",
    "en": "Discriminant & Nature of Roots"
   },
   "cards": [
    {
     "id": "ws05a-c5",
     "topic": "ws05a",
     "title": {
      "zh": "判別式 Δ 與根的性質",
      "en": "Discriminant and the Nature of Roots"
     },
     "body": {
      "zh": "二次公式裡開方那一部分 $b^{2}-4ac$ 叫做判別式（discriminant），通常記作 $\\Delta$：\n{{math:0}}\n它的正負決定方程的根屬於哪一種：\n・$\\Delta>0$：開方後是正數，加與減得出兩個不同的根 → 兩個相異實根，拋物線與 $x$ 軸相交於兩點。\n・$\\Delta=0$：開方得 $0$，正負兩邊合併成同一個數 → 兩個相等的實根（重根），拋物線只碰到 $x$ 軸一點。\n・$\\Delta<0$：負數不能開平方根 → 沒有實根，拋物線完全不碰 $x$ 軸。\n三種情況寫成一行就是：\n{{math:1}}\n做題時最常考的是「已知根的種類，反過來求未知常數」，所以要記住：\n{{math:2}}\n「有實根」是把兩個相異與重根都包括在內，所以用 $\\geq$；「有兩個相異實根」才用 $>$。這一個等號的分別，是 DSE 選擇題最愛考的位置。"
     },
     "math": [
      "\\Delta=b^{2}-4ac",
      "\\Delta>0\\ \\text{兩個相異實根};\\quad \\Delta=0\\ \\text{重根};\\quad \\Delta<0\\ \\text{沒有實根}",
      "\\text{有實根}\\ \\Leftrightarrow\\ \\Delta\\geq 0"
     ],
     "vocab": [
      {
       "en": "discriminant",
       "zh": "判別式"
      },
      {
       "en": "real roots",
       "zh": "實根"
      },
      {
       "en": "distinct roots",
       "zh": "相異的根"
      }
     ],
     "warn": {
      "zh": "「有實根」＝ $\\Delta\\geq 0$（包含重根），「有兩個相異實根」才是 $\\Delta>0$。等號寫錯就會整題錯，所以要先圈出題目是說 real roots 還是 distinct real roots。"
     }
    },
    {
     "id": "ws05a-c6",
     "topic": "ws05a",
     "title": {
      "zh": "根的和與積（進階：α 是方程的根）",
      "en": "Sum & Product of Roots"
     },
     "body": {
      "zh": "設 $\\alpha$ 與 $\\beta$ 是 $ax^{2}+bx+c=0$（$a\\neq 0$）的兩個根，就有：\n{{math:0}}\n記法：和是「負 $b$ 除以 $a$」，積是「$c$ 除以 $a$」。這兩條在公式表上沒有，但可以由展開 $(x-\\alpha)(x-\\beta)=0$ 推出來，所以最好背下來。\n它們的用途是：題目往往不要你求 $\\alpha$ 與 $\\beta$ 本身，而是要 $\\alpha^{2}+\\beta^{2}$、$(\\alpha-3)(\\beta-3)$ 這類「由根組合出來的式子」。做法固定兩步：① 用上面的公式寫出 $\\alpha+\\beta$ 與 $\\alpha\\beta$；② 把目標式展開，湊成這兩個量的組合。\n最常用的展開：\n{{math:1}}\n{{math:2}}\n例：$x^{2}-5x+6=0$ 的兩個根是 $\\alpha$ 與 $\\beta$，求 $\\alpha^{2}+\\beta^{2}$。\n① 先寫出和與積：$\\alpha+\\beta=-(-5)=5$、$\\alpha\\beta=6$。\n② 代入公式：\n{{math:3}}\n（這一題可以驗算：它的兩個根就是 $2$ 與 $3$，$2^{2}+3^{2}=4+9=13$ ✓。但考試的根通常不是整數，所以一定要用公式。）\n還有一種常見問法：題目說「$\\alpha$ 是方程 $x^{2}-4x-2=0$ 的根」。這句話的意思是 —— 把 $x$ 換成 $\\alpha$，等式仍然成立：\n{{math:4}}\n把它移項，就得到一條很有用的關係：\n{{math:5}}\n為什麼有用？因為題目要的 $3+8\\alpha-2\\alpha^{2}$ 裡面有一個 $\\alpha^{2}$（二次），而方程正好告訴我們「$\\alpha^{2}$ 等於什麼」。把 $\\alpha^{2}$ 整塊換成 $(4\\alpha+2)$，二次項就變回一次項，最後 $\\alpha$ 會互相抵消，只剩下一個常數：\n{{math:6}}\n替換時一定要加括號，因為前面是 $-2$：$-2\\alpha^{2}$ 要寫成 $-2(4\\alpha+2)=-8\\alpha-4$，不是 $-2\\times4\\alpha+2$。這個「把 $\\alpha^{2}$ 換成一次式」的動作，叫做降次。"
     },
     "math": [
      "\\alpha+\\beta=-\\frac{b}{a},\\qquad \\alpha\\beta=\\frac{c}{a}",
      "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
      "(\\alpha+k)(\\beta+k)=\\alpha\\beta+k(\\alpha+\\beta)+k^{2}",
      "\\alpha^{2}+\\beta^{2}=(5)^{2}-2(6)=25-12=13",
      "\\alpha^{2}-4\\alpha-2=0",
      "\\alpha^{2}=4\\alpha+2",
      "3+8\\alpha-2\\alpha^{2}=3+8\\alpha-2(4\\alpha+2)=3+8\\alpha-8\\alpha-4=-1"
     ],
     "vocab": [
      {
       "en": "sum of roots",
       "zh": "根的和"
      },
      {
       "en": "product of roots",
       "zh": "根的積"
      },
      {
       "en": "in terms of",
       "zh": "以…表示"
      }
     ],
     "warn": {
      "zh": "「和」是 $-\\frac{b}{a}$，前面有個負號（$x^{2}-5x+6=0$ 的和是 $5$，不是 $-5$），忘記負號是最常見的錯。另外不要一開始就嘗試硬解 $\\alpha$、$\\beta$ —— 先展開目標式才是對的做法。"
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws05a-ex02",
     "type": "long",
     "topic": "ws05a",
     "unit": 1,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "WS5A-EX2",
     "source": "WS05 Paper 1 Q2 · [HKCEE 2007 Paper 1 Q5]",
     "stem": {
      "text": "Let $k$ be a constant. If the quadratic equation $15x^{2}+6x-k=0$ has no real roots, find the range of values of $k$."
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 寫出「沒有實根」的條件",
         "en": ""
        },
        "math": "\\Delta<0",
        "zh": "題目說方程「沒有實根」，所以判別式小於 $0$：$\\Delta<0$。先把這個條件寫出來就拿到 (1M)。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 2 步 · 代入判別式",
         "en": ""
        },
        "math": "6^{2}-4(15)(-k)<0",
        "zh": "$a=15$、$b=6$、$c=-k$，代入 $\\Delta=b^{2}-4ac$：$6^{2}-4(15)(-k)<0$。這裡的 $c$ 是 $-k$，負號要一齊代入。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 3 步 · 化簡",
         "en": ""
        },
        "math": "36+60k<0",
        "zh": "$4(15)(-k)=-60k$，前面還有一個減號，所以是「減一個負數」變成 $+60k$：$36+60k<0$。(1A) 是給這一步化簡正確。",
        "en": "",
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 4 步 · 解不等式",
         "en": ""
        },
        "math": "60k<-36\\ \\Rightarrow\\ k<-\\frac{3}{5}",
        "zh": "$60k<-36$，兩邊同除 $60$（正數，不等號方向不變），得 $k<-\\frac{3}{5}$（即 $k<-0.6$）。驗算：取 $k=-1$，$\\Delta=36-60=-24<0$ ✓。",
        "en": "",
        "highlight": [
         "k<-\\frac{3}{5}"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "判別式題的第一分就是寫對條件：「沒有實根」＝ $\\Delta<0$、「有兩個相異實根」＝ $\\Delta>0$、「重根」＝ $\\Delta=0$。之後才是計算，不要一開始就亂代公式。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws05a-ex04",
     "type": "long",
     "topic": "ws05a",
     "unit": 1,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "WS5A-EX4",
     "source": "EPH WS05 暖身題 5",
     "stem": {
      "text": "If $a$ is a root of the quadratic equation $3x^{2}-2x-4=0$, find the values of"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$6a^{2}-4a$.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "$-9a^{2}+6a$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 由「$a$ 是方程的根」寫出關係式",
         "en": ""
        },
        "math": "3a^{2}-2a-4=0\\ \\Rightarrow\\ 3a^{2}-2a=4",
        "zh": "「$a$ 是方程 $3x^{2}-2x-4=0$ 的根」，意思是把 $x$ 換成 $a$ 之後等式成立：$3a^{2}-2a-4=0$。把 $-4$ 移項，就得到一條非常有用的關係：$3a^{2}-2a=4$。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 2 步 · (a) 把 $3a^{2}-2a$ 當成一整塊",
         "en": ""
        },
        "math": "6a^{2}-4a=2(3a^{2}-2a)=2(4)=8",
        "zh": "(a) 題目要的 $6a^{2}-4a$ 是什麼？就是 $3a^{2}-2a$ 的兩倍（$2\\times3a^{2}=6a^{2}$、$2\\times2a=4a$）。所以先抽 2 出來，再整塊換成 $4$，答案 $8$。千萬不要嘗試先求 $a$ —— $a$ 是無理數，求出來也用不到。",
        "en": "",
        "highlight": [
         "8"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 3 步 · (b) 這次抽 $-3$",
         "en": ""
        },
        "math": "-9a^{2}+6a=-3(3a^{2}-2a)",
        "zh": "(b) 的係數是 $-9$ 與 $6$，注意它們是 $3$ 與 $-2$ 的 $-3$ 倍（$-3\\times3a^{2}=-9a^{2}$、$-3\\times(-2a)=+6a$），所以抽出 $-3$ 之後，括號內仍然是 $3a^{2}-2a$ —— 同一整塊，可以再換成 $4$。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 4 步 · 代入求值",
         "en": ""
        },
        "math": "=-3(4)=-12",
        "zh": "所以 (b) 的答案是 $-12$。兩小題的關鍵都是「認出整塊 $3a^{2}-2a$」—— 這是 DSE 常考的形態，認得出就 10 秒做完。",
        "en": "",
        "highlight": [
         "-12"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "看到「$\\alpha$（或 $a$、$b$）是方程的根」就想：① 代回方程得到一條等式；② 看看題目要的式子和這條等式相差幾倍 —— 通常只是抽出一個公因式，然後整塊替換。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws05a-ex05",
     "type": "long",
     "topic": "ws05a",
     "unit": 1,
     "subtopic": "quadratic-equations",
     "difficulty": 3,
     "code": "WS5A-EX5",
     "source": "WS05 Example 2 · [HKDSE 2023 Paper 1 Q16(a)]",
     "stem": {
      "text": "Let $a$ and $b$ be real constants. If the roots of the equation $x^{2}+ax+b=0$ are $p$ and $4p$, prove that $4a^{2}=25b$."
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 用根的和",
         "en": ""
        },
        "math": "p+4p=-a\\ \\Rightarrow\\ 5p=-a",
        "zh": "兩個根是 $p$ 與 $4p$。用根的和：$p+4p=-a$，化簡得 $5p=-a$。官方評分是「和或積寫對任一項就給 (1M)」。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 2 步 · 用根的積",
         "en": ""
        },
        "math": "p(4p)=b\\ \\Rightarrow\\ 4p^{2}=b",
        "zh": "用根的積：$p\\times4p=b$，即 $4p^{2}=b$。這一步沒有額外分數，但它是消去 $p$ 的必要材料。",
        "en": ""
       },
       {
        "title": {
         "zh": "第 3 步 · 消去 $p$，得出要證的關係",
         "en": ""
        },
        "math": "p=-\\frac{a}{5}\\ \\Rightarrow\\ 4\\left(-\\frac{a}{5}\\right)^{2}=b\\ \\Rightarrow\\ \\frac{4a^{2}}{25}=b\\ \\Rightarrow\\ 4a^{2}=25b",
        "zh": "目標式 $4a^{2}=25b$ 裡面沒有 $p$，所以關鍵一步是消去 $p$：由 $5p=-a$ 得 $p=-\\frac{a}{5}$，代入 $4p^{2}=b$ 得 $4\\left(\\frac{a^{2}}{25}\\right)=b$，即 $\\frac{4a^{2}}{25}=b$；兩邊乘 $25$ 就是 $4a^{2}=25b$。",
        "en": "",
        "highlight": [
         "4a^{2}=25b"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "證明題不用求出 $a$、$b$ 的數值，只要由已知條件推到題目要的關係式。第一步先看「目標式裡少了哪個字母」—— 那個字母就是要消去的對象。",
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
      "id": "eph-ws05a-w04",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 1,
      "code": "WS5A-W04",
      "source": "WS05 過渡題（自編）· Level 4 判別式：先算 b² − 4ac 再判斷",
      "stem": {
       "text": "How many real roots does the quadratic equation $x^{2}+4x+5=0$ have?"
      },
      "options": {
       "A": "Two distinct real roots",
       "B": "Two equal real roots",
       "C": "No real roots",
       "D": "Infinitely many real roots"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出 $a$、$b$、$c$ 並算判別式",
          "en": "Step 1 · Compute the discriminant"
         },
         "math": "\\Delta=4^{2}-4(1)(5)=16-20=-4",
         "zh": "標準形式 $x^{2}+4x+5=0$ 中 $a=1$、$b=4$、$c=5$。判別式 $\\Delta=b^{2}-4ac=16-20=-4$。",
         "en": "a = 1, b = 4, c = 5, so Δ = -4."
        },
        {
         "title": {
          "zh": "第 2 步 · 用 $\\Delta$ 的正負判斷根的性質",
          "en": "Step 2 · Read off the nature of roots"
         },
         "math": "\\Delta<0\\ \\Rightarrow\\ \\text{沒有實根}",
         "zh": "$\\Delta=-4<0$，負數不能開平方根，所以方程沒有實根，答案選 C。另一個檢查方法：$x^{2}+4x+5=(x+2)^{2}+1$，最小值是 $1$，永遠不可能等於 $0$。",
         "en": "Δ < 0: no real roots. Answer: C.",
         "highlight": [
          "沒有實根"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$\\Delta<0$ 是「沒有實根」，跟「兩個相異實根」剛好相反；$\\Delta>0$ 才是兩個相異實根。",
         "en": "Negative Δ means no real roots."
        },
        {
         "opt": "B",
         "zh": "「兩個相等的實根」要求 $\\Delta=0$；這題 $\\Delta=-4$，不是 $0$。",
         "en": "Equal roots need Δ = 0."
        }
       ],
       "tip": {
        "zh": "判別式題只需抄三個數：$a$、$b$、$c$。抄的時候連負號一齊抄，$b^{2}$ 那一項即使是負數平方後也是正數。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q07",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "WS5A-Q07",
      "source": "EPH WS05 Q9",
      "stem": {
       "text": "Let $h$ be a constant. Solve the equation $(x+6h)(x+4h)=(8h-x)(x+4h)$."
      },
      "options": {
       "A": "$x=8h$",
       "B": "$x=-4h$",
       "C": "$x=-4h$ or $x=h$",
       "D": "$x=-6h$ or $x=8h$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項，令右邊是 0",
          "en": "Step 1 · Move terms to one side"
         },
         "math": "(x+6h)(x+4h)-(8h-x)(x+4h)=0",
         "zh": "兩邊有相同的括號 $(x+4h)$，先把所有項移到左邊。",
         "en": "Bring all terms to the left."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式 $(x+4h)$",
          "en": "Step 2 · Factor out (x + 4h)"
         },
         "math": "(x+4h)[(x+6h)-(8h-x)]=(x+4h)(2x-2h)=0",
         "zh": "抽出 $(x+4h)$，括號內 $(x+6h)-(8h-x)=x+6h-8h+x=2x-2h$。",
         "en": "(x + 6h) − (8h − x) = 2x − 2h."
        },
        {
         "title": {
          "zh": "第 3 步 · 各自等於 0",
          "en": "Step 3 · Set each bracket to 0"
         },
         "math": "x+4h=0\\ \\text{或}\\ 2x-2h=0\\ \\Rightarrow\\ x=-4h\\ \\text{或}\\ x=h",
         "zh": "得出 $x=-4h$ 或 $x=h$，答案選 C。",
         "en": "x = -4h or x = h. Answer: C.",
         "highlight": [
          "x=-4h",
          "x=h"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$x=-4h$ 只寫了其中一個根（來自 $(x+4h)$），漏了另一邊解出的 $x=h$。",
         "en": "Only one of the two roots was given."
        },
        {
         "opt": "D",
         "zh": "$x=-6h$ 或 $x=8h$ 是把 $(x+6h)$ 與 $(8h-x)$ 各令等於 $0$ —— 這兩個括號分別在等號兩邊，不是同一邊的因式，這樣做等於沒有移項。",
         "en": "The two brackets sit on opposite sides of the equation."
        }
       ],
       "tip": {
        "zh": "與前一題同一招式：相同括號不可以約，要走「移項 → 抽公因式 → 各自等於 0」三步。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q08",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "WS5A-Q08",
      "source": "EPH WS05 Q10 · [HKDSE 2015 Paper 2 Q7]",
      "stem": {
       "text": "If $\\alpha$ is a root of the equation $x^{2}-4x-2=0$, then $3+8\\alpha-2\\alpha^{2}=$"
      },
      "options": {
       "A": "$-3$",
       "B": "$-1$",
       "C": "$7$",
       "D": "$9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 由「$\\alpha$ 是方程的根」寫出關係式",
          "en": "Step 1 · Use the fact that α is a root"
         },
         "math": "\\alpha^{2}-4\\alpha-2=0\\ \\Rightarrow\\ \\alpha^{2}=4\\alpha+2",
         "zh": "「$\\alpha$ 是方程 $x^{2}-4x-2=0$ 的根」意思是把 $x$ 換成 $\\alpha$ 之後等式成立：$\\alpha^{2}-4\\alpha-2=0$。移項得到 $\\alpha^{2}=4\\alpha+2$，用它可以把 $\\alpha^{2}$ 降到一次。",
         "en": "Substituting x = α gives α² = 4α + 2."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 $\\alpha^{2}$ 整塊替換（記得加括號）",
          "en": "Step 2 · Replace α² as a whole"
         },
         "math": "3+8\\alpha-2\\alpha^{2}=3+8\\alpha-2(4\\alpha+2)",
         "zh": "把 $\\alpha^{2}$ 換成 $(4\\alpha+2)$。前面是 $-2$，所以一定要加括號，否則只會乘到第一項。",
         "en": "−2(4α + 2), not −2 × 4α + 2."
        },
        {
         "title": {
          "zh": "第 3 步 · 展開化簡",
          "en": "Step 3 · Expand and simplify"
         },
         "math": "=3+8\\alpha-8\\alpha-4=-1",
         "zh": "展開 $=3+8\\alpha-8\\alpha-4$。$8\\alpha$ 與 $-8\\alpha$ 互相抵消，剩下 $3-4=-1$，答案選 B。",
         "en": "-1. Answer: B.",
         "highlight": [
          "-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$7$ 是移項時把 $\\alpha^{2}=4\\alpha+2$ 寫成 $\\alpha^{2}=4\\alpha-2$（負號錯），得出 $3+8\\alpha-8\\alpha+4=7$。",
         "en": "Sign slip when rearranging."
        },
        {
         "opt": "D",
         "zh": "$9$ 是把 $\\alpha=1$ 硬代入求出的值 —— $1$ 不是這個方程的根，所以不可以用。",
         "en": "Substituted a number that is not a root."
        }
       ],
       "tip": {
        "zh": "看到「$\\alpha$ 是方程的根」就想「降次」：把 $\\alpha^{2}$ 換成一次式，答案裡的 $\\alpha$ 通常會自動抵消。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05a-q09",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q09",
      "source": "EPH WS05 Q11 · [HKDSE Practice Paper 2 Q6]",
      "stem": {
       "text": "Let $m$ be a constant. If the quadratic equation $x^{2}-mx+6m=0$ has equal roots, then $m=$"
      },
      "options": {
       "A": "$6$",
       "B": "$24$",
       "C": "$0$ or $6$",
       "D": "$0$ or $24$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 相等實根 ⇒ $\\Delta=0$",
          "en": "Step 1 · Equal roots means Δ = 0"
         },
         "math": "\\Delta=(-m)^{2}-4(1)(6m)=m^{2}-24m",
         "zh": "「有兩個相等的實根」＝ 判別式等於 $0$。這裡 $a=1$、$b=-m$、$c=6m$，$4ac=24m$。注意 $b=-m$，平方之後是 $m^{2}$（正數）。",
         "en": "a = 1, b = -m, c = 6m."
        },
        {
         "title": {
          "zh": "第 2 步 · 解這個二次方程",
          "en": "Step 2 · Solve the resulting equation"
         },
         "math": "m^{2}-24m=0\\ \\Rightarrow\\ m(m-24)=0",
         "zh": "$m^{2}$ 與 $24m$ 有公因式 $m$，抽出來得 $m(m-24)=0$。很多同學在這裡只寫 $m=24$ —— 但 $m=0$ 也合法（那時方程是 $x^{2}=0$，同樣有兩個相等的實根）。",
         "en": "Factor out m."
        },
        {
         "title": {
          "zh": "第 3 步 · 兩個根都寫出來",
          "en": "Step 3 · Give both values"
         },
         "math": "m=0\\ \\text{或}\\ m=24",
         "zh": "所以 $m=0$ 或 $m=24$，答案選 D。",
         "en": "m = 0 or m = 24. Answer: D.",
         "highlight": [
          "m=0",
          "m=24"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$24$ 是漏了 $m=0$：抽完公因式後只取了括號那一邊。",
         "en": "Missed the factor m = 0."
        },
        {
         "opt": "A",
         "zh": "$6$ 只是 $6m$ 裡面的係數，代入判別式並不會令 $\\Delta=0$。",
         "en": "6 is just a coefficient."
        }
       ],
       "tip": {
        "zh": "當判別式是未知數的二次式時，最後要解一條二次方程 —— 抽公因式之後記得兩個因式都要等於 0。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q10",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q10",
      "source": "EPH WS05 Q12 · [HKDSE 2016 Paper 2 Q8]",
      "stem": {
       "text": "If $k$ is a constant such that the quadratic equation $3x^{2}-kx+k+9=0$ has equal roots, then $k=$"
      },
      "options": {
       "A": "$-3$",
       "B": "$12$",
       "C": "$-6$ or $18$",
       "D": "$-12$ or $9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 相等實根 ⇒ $\\Delta=0$",
          "en": "Step 1 · Equal roots means Δ = 0"
         },
         "math": "\\Delta=(-k)^{2}-4(3)(k+9)=k^{2}-12k-108",
         "zh": "$a=3$、$b=-k$、$c=k+9$。$4ac=4(3)(k+9)=12k+108$，所以 $\\Delta=k^{2}-12k-108$。",
         "en": "a = 3, b = -k, c = k + 9."
        },
        {
         "title": {
          "zh": "第 2 步 · 十字相乘分解",
          "en": "Step 2 · Factorize"
         },
         "math": "k^{2}-12k-108=0\\ \\Rightarrow\\ (k+6)(k-18)=0",
         "zh": "找兩個數：相乘 $-108$、相加 $-12$。取 $+6$ 與 $-18$（$6\\times(-18)=-108$、$6-18=-12$），分解成 $(k+6)(k-18)$。",
         "en": "6 × (-18) = -108 and 6 - 18 = -12."
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出兩個 $k$",
          "en": "Step 3 · Solve for k"
         },
         "math": "k=-6\\ \\text{或}\\ k=18",
         "zh": "所以 $k=-6$ 或 $k=18$，答案選 C。",
         "en": "k = -6 or k = 18. Answer: C.",
         "highlight": [
          "k=-6",
          "k=18"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-3$ 是判別式只算了 $4(3)(9)=108$（把 $c$ 當成 $9$、漏了 $k$），$\\Delta$ 已經算錯，之後再解方程當然得不到正確答案。",
         "en": "Wrong c in the discriminant."
        },
        {
         "opt": "D",
         "zh": "$-12$ 或 $9$ 是分解錯了：展開 $(k-12)(k+9)$ 得 $k^{2}-3k-108$，中間項是 $-3k$ 而不是 $-12k$。",
         "en": "Wrong factorisation; check the middle term."
        }
       ],
       "tip": {
        "zh": "分解完一定要心算展開核對中間項。$c$ 代入時要整塊 $(k+9)$ 代入，不可以只拿 $9$。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q11",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q11",
      "source": "EPH WS05 Q13 · [HKDSE Sample Paper 2 Q7]",
      "stem": {
       "text": "Find the range of values of $p$ such that the quadratic equation $x^{2}-2x=9+p$ has no real roots."
      },
      "options": {
       "A": "$p>-10$",
       "B": "$p<-10$",
       "C": "$p>-8$",
       "D": "$p<-8$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理成標準形式",
          "en": "Step 1 · Write it in standard form"
         },
         "math": "x^{2}-2x-(9+p)=0",
         "zh": "把 $9+p$ 移到左邊：$x^{2}-2x-9-p=0$。所以 $a=1$、$b=-2$、$c=-9-p$。",
         "en": "a = 1, b = -2, c = -9 - p."
        },
        {
         "title": {
          "zh": "第 2 步 · 沒有實根 ⇒ $\\Delta<0$",
          "en": "Step 2 · No real roots means Δ < 0"
         },
         "math": "\\Delta=(-2)^{2}-4(1)(-9-p)=4+36+4p=40+4p",
         "zh": "代入時要小心：$-4(1)(-9-p)=+36+4p$（兩個負號相乘變正）。",
         "en": "-4(1)(-9 - p) = +36 + 4p."
        },
        {
         "title": {
          "zh": "第 3 步 · 解不等式",
          "en": "Step 3 · Solve the inequality"
         },
         "math": "40+4p<0\\ \\Rightarrow\\ 4p<-40\\ \\Rightarrow\\ p<-10",
         "zh": "$40+4p<0$ → $4p<-40$ → 兩邊同除正數 $4$，不等號方向不變 → $p<-10$，答案選 B。",
         "en": "p < -10. Answer: B.",
         "highlight": [
          "p<-10"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$p>-8$ 是把判別式寫成 $b^{2}+4ac$（忘記那個減號）：$4+4(-9-p)=-32-4p<0$，方向剛好相反。",
         "en": "Used b² + 4ac instead of b² − 4ac."
        },
        {
         "opt": "D",
         "zh": "$p<-8$ 同時犯了兩個錯：判別式用了 $+4ac$，而且不等號方向也搞錯。",
         "en": "Two mistakes: sign of 4ac and the inequality direction."
        }
       ],
       "tip": {
        "zh": "判別式是 $b^{2}-4ac$（減號），而 $c=-9-p$ 整個要加括號代入。兩處都是負號，一處都不能省。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05a-q12",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "WS5A-Q12",
      "source": "EPH WS05 Q23 · [HKDSE 2015 Paper 2 Q34]",
      "stem": {
       "text": "Let $q$ be a constant. If the roots of the quadratic equation $x^{2}+qx+6=0$ are $\\alpha$ and $\\beta$, then $\\alpha^{2}+\\beta^{2}=$"
      },
      "options": {
       "A": "$q^{2}$",
       "B": "$q^{2}-12$",
       "C": "$q^{2}+12$",
       "D": "$q^{2}+24$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 用根的和與積",
          "en": "Step 1 · Sum and product of roots"
         },
         "math": "\\alpha+\\beta=-q,\\qquad \\alpha\\beta=6",
         "zh": "對 $x^{2}+qx+6=0$：和 $=-\\frac{b}{a}=-q$（記得有負號），積 $=\\frac{c}{a}=6$。",
         "en": "Sum = -q, product = 6."
        },
        {
         "title": {
          "zh": "第 2 步 · 把目標式展開",
          "en": "Step 2 · Rewrite α² + β²"
         },
         "math": "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
         "zh": "這個恆等式來自 $(\\alpha+\\beta)^{2}=\\alpha^{2}+2\\alpha\\beta+\\beta^{2}$，把中間項移到另一邊就得到。目標式一定要先湊成 $\\alpha+\\beta$ 與 $\\alpha\\beta$ 才能代入。",
         "en": "α² + β² = (α + β)² − 2αβ."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入求答案",
          "en": "Step 3 · Substitute"
         },
         "math": "=(-q)^{2}-2(6)=q^{2}-12",
         "zh": "$(-q)^{2}=q^{2}$（負數平方變正），$2(6)=12$，所以答案是 $q^{2}-12$，選 B。",
         "en": "q² - 12. Answer: B.",
         "highlight": [
          "q^{2}-12"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$q^{2}$ 是漏了 $-2\\alpha\\beta$ 那一項，只算 $(\\alpha+\\beta)^{2}$。",
         "en": "Forgot the -2αβ term."
        },
        {
         "opt": "C",
         "zh": "$q^{2}+12$ 是把 $-2\\alpha\\beta$ 的減號寫成加號（$-2(6)$ 應該等於 $-12$）。",
         "en": "Sign of 2αβ flipped."
        }
       ],
       "tip": {
        "zh": "$\\alpha^{2}+\\beta^{2}$ 一律先寫成 $(\\alpha+\\beta)^{2}-2\\alpha\\beta$；$-2\\alpha\\beta$ 的減號不可以漏。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws05a-q13",
      "type": "mc",
      "topic": "ws05a",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "WS5A-Q13",
      "source": "EPH WS05 Q20 · [HKDSE 2018 Paper 2 Q36]",
      "stem": {
       "text": "If $m\\neq n$ and $3m^{2}-7m=3n^{2}-7n=12$, then $(m-3)(n-3)=$"
      },
      "options": {
       "A": "$-2$",
       "B": "$6$",
       "C": "$12$",
       "D": "$20$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 看出 $m$、$n$ 是同一條方程的兩個根",
          "en": "Step 1 · m and n are the two roots"
         },
         "math": "3x^{2}-7x-12=0\\ \\Rightarrow\\ m+n=\\frac{7}{3},\\quad mn=-4",
         "zh": "$m$、$n$ 都滿足 $3x^{2}-7x=12$，而且 $m\\neq n$，所以它們是 $3x^{2}-7x-12=0$ 的兩個根。用根的和與積：和 $=-\\frac{-7}{3}=\\frac{7}{3}$，積 $=\\frac{-12}{3}=-4$。",
         "en": "Sum = 7/3, product = -4."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開目標式，湊出和與積",
          "en": "Step 2 · Expand the target expression"
         },
         "math": "(m-3)(n-3)=mn-3(m+n)+9",
         "zh": "展開成 $mn-3m-3n+9$，再寫成 $mn-3(m+n)+9$。這是這類題的固定做法 —— 不要嘗試硬解 $m$、$n$（它們是無理數）。",
         "en": "mn − 3(m + n) + 9."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入",
          "en": "Step 3 · Substitute"
         },
         "math": "=-4-3\\left(\\frac{7}{3}\\right)+9=-4-7+9=-2",
         "zh": "代入得 $-4-7+9=-2$，答案選 A。",
         "en": "-2. Answer: A.",
         "highlight": [
          "-2"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$6$ 是展開時把 $-3(m+n)$ 寫成 $+3(m+n)$，又把 $+9$ 寫成 $+3$（$-4+7+3=6$）。",
         "en": "Sign errors in the expansion."
        },
        {
         "opt": "C",
         "zh": "$12$ 同樣把 $-3(m+n)$ 寫成 $+3(m+n)$，得 $-4+7+9=12$。",
         "en": "Sign of 3(m + n) flipped."
        }
       ],
       "tip": {
        "zh": "題目說「$m\\neq n$ 而且兩個式子相等」，就是提示「它們是同一條方程的兩個根」。用和與積，不必求出根的數值。",
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
  "mc": 17,
  "long": 5,
  "cards": 6,
  "pages": 6
 }
};
