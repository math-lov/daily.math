// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS03 = {
 "id": "ws03",
 "stage": 1,
 "unit": 0,
 "subtopic": "formulas-and-identities",
 "source": "EPH All-Round L5 · Worksheet 3",
 "name": {
  "zh": "公式的主項變換與恆等式",
  "en": "Change of Subject & Identities"
 },
 "intro": {
  "zh": "這一課兩個重點：① 換主項（change of subject）—— 把公式裡你要的字母變成主項；② 恆等式（identity，用 ≡ 表示「任何 x 都成立」）—— 用它求未知的常數。\n這兩種題目在 DSE Paper 1 與 Paper 2 都年年出現，而且計算本身不難：換主項只要三步，恆等式求常數只要「比較係數」或「代入一個令括號變 0 的 x 值」。只要不漏負號、不漏交叉項，這是必拿的分。"
 },
 "lessons": [
  {
   "id": "ws03-1",
   "title": {
    "zh": "換主項、求常數與練習",
    "en": "Change the subject, find constants + practice"
   },
   "cards": [
    {
     "id": "ws03-c1",
     "topic": "ws03",
     "title": {
      "zh": "什麼是主項（subject）？",
      "en": "What is the Subject of a Formula?"
     },
     "body": {
      "zh": "公式（formula）是一條用字母表示的規則，例如圓面積公式。\n「主項」（subject）就是公式裡**單獨留在等號一邊**的那個字母 —— 它等於「其他字母湊成的式子」。\n{{math:0}}\n上面第一式的主項是 $A$（面積），用來「已知半徑求面積」；第二式的主項是 $r$（半徑），用來「已知面積求半徑」。\n{{math:1}}\n同一條公式可以有不同的主項 —— **換主項（change of subject）不會改變公式的意思，只是把它改寫成你要用的樣子**。\nDSE 的考法很固定：給你一條公式，叫你把某個字母變成主項。這種題年年出在 Paper 1 第 1–2 題，是必拿的分。"
     },
     "math": [
      "A=\\pi r^{2}\\quad(\\text{subject: }A)",
      "r=\\sqrt{\\frac{A}{\\pi}}\\quad(\\text{subject: }r)"
     ],
     "vocab": [
      {
       "en": "formula",
       "zh": "公式"
      },
      {
       "en": "subject",
       "zh": "主項（被單獨留在等號一邊的字母）"
      },
      {
       "en": "change of subject",
       "zh": "換主項"
      }
     ],
     "warn": {
      "zh": "換主項不是「解方程」—— 你不是在求某個字母的數值，而是把它寫成「其他字母的式子」。所以答案裡一定還有其他字母，這是正常的。"
     }
    },
    {
     "id": "ws03-c2",
     "topic": "ws03",
     "title": {
      "zh": "換主項三步（必學流程）",
      "en": "Three Steps to Change the Subject"
     },
     "body": {
      "zh": "以「把 $n$ 變成主項」為例，公式是 $3(2m+n)=m+9$。\n第 1 步 · 拆括號、清分母：先把式子展開，有分數就先交叉相乘。\n{{math:0}}\n第 2 步 · 移項：把**含有目標字母的項**留在左邊，其他全部移到右邊（移過等號要變號）。\n{{math:1}}\n第 3 步 · 把係數化成 1：目標字母前面是 $3$，就整式除以 $3$（連同右邊全部項一起除）。\n{{math:2}}\n如果目標字母出現在兩邊（例如 $7h-hk=14+k^{2}$），先集中在左邊再**抽公因式**：$h(7-k)=14+k^{2}$，然後除過去。\n驗算：把原來的字母代一組數字進去，兩條式子算出來要一樣。"
     },
     "math": [
      "3(2m+n)=m+9\\ \\Rightarrow\\ 6m+3n=m+9",
      "3n=m+9-6m=9-5m",
      "n=\\frac{9-5m}{3}=3-\\frac{5}{3}m"
     ],
     "vocab": [
      {
       "en": "expand",
       "zh": "展開（拆括號）"
      },
      {
       "en": "transpose",
       "zh": "移項（移過等號要變號）"
      },
      {
       "en": "coefficient",
       "zh": "係數"
      }
     ],
     "warn": {
      "zh": "最常見的錯：第三步只除「第一項」。$\\frac{9-5m}{3}$ 是**整條**除以 3，不是只有 $\\frac{9}{3}-5m$。漏除就會全題失分。"
     }
    },
    {
     "id": "ws03-c3",
     "topic": "ws03",
     "title": {
      "zh": "恆等式（≡）與方程（=）的分別",
      "en": "Identity vs Equation"
     },
     "body": {
      "zh": "這兩個符號的分別，是這一課最重要的概念。\n恆等式（identity）用 $\\equiv$，意思是**無論 $x$ 是多少都成立**：\n{{math:0}}\n所以你可以代入任何一個 $x$ 值（$0$、$1$、$-7$……）來找出裡面的未知常數 —— 這是解這類題的捷徑。\n方程（equation）用 $=$，只在**某些特定的 $x$** 才成立：\n{{math:1}}\n考試的題目會寫 “If $a$ and $b$ are constants such that … ≡ …”，看到 **constants** 與 **≡** 就知道是恆等式題：左右兩邊整理後，同類項的係數必須完全一樣。"
     },
     "math": [
      "(x+1)^{2}\\equiv x^{2}+2x+1\\quad(\\text{任何 }x\\text{ 都成立})",
      "2x+1=5\\quad(\\text{只有 }x=2)"
     ],
     "vocab": [
      {
       "en": "identity",
       "zh": "恆等式（任何值都成立）"
      },
      {
       "en": "constant",
       "zh": "常數（固定但未知的數）"
      },
      {
       "en": "like terms",
       "zh": "同類項（同一個次數的項）"
      }
     ],
     "warn": {
      "zh": "不要把 $\\equiv$ 當成 $=$ 去「解 $x$」—— 恆等式裡的 $x$ 沒有特定值，要求的是 $a$、$b$、$k$ 這些常數。"
     }
    },
    {
     "id": "ws03-c4",
     "topic": "ws03",
     "title": {
      "zh": "求常數方法一：比較同類項",
      "en": "Method 1: Compare Like Terms"
     },
     "body": {
      "zh": "做法：把左右兩邊各自展開、整理成「降冪」的形式，然後逐項比較係數。\n例題：\n{{math:0}}\n第 1 步 · 展開左邊：$(x+h)(x+9)=x^{2}+(h+9)x+9h$；展開右邊：$(x+6)^{2}+k=x^{2}+12x+(36+k)$。\n{{math:1}}\n第 2 步 · 比較 $x$ 的係數：\n{{math:2}}\n第 3 步 · 比較常數項，把 $h=3$ 代入 $9h=36+k$ 得 $k=-9$。\n這是「一定行得通」的方法，任何恆等式題都能用；缺點是展開時容易計錯符號。"
     },
     "math": [
      "(x+h)(x+9)\\equiv(x+6)^{2}+k",
      "x^{2}+(h+9)x+9h\\equiv x^{2}+12x+(36+k)",
      "h+9=12\\ \\Rightarrow\\ h=3"
     ],
     "vocab": [
      {
       "en": "compare coefficients",
       "zh": "比較係數"
      },
      {
       "en": "constant term",
       "zh": "常數項"
      },
      {
       "en": "expand",
       "zh": "展開"
      }
     ],
     "warn": {
      "zh": "比較時要「對齊」：$x^{2}$ 對 $x^{2}$、$x$ 對 $x$、常數對常數。如果一邊少了某一項，它的係數是 $0$，不是「不用理」。"
     }
    },
    {
     "id": "ws03-c5",
     "topic": "ws03",
     "title": {
      "zh": "求常數方法二：代入特殊值（捷徑）",
      "en": "Method 2: Substitute a Clever Value"
     },
     "body": {
      "zh": "因為恆等式**任何 $x$ 都成立**，所以可以挑一個「讓整項消失」的 $x$ 代入。\n同一條例題：\n{{math:0}}\n第 1 步 · 令左邊的括號變成 0：取 $x=-9$，左邊 $(x+h)(x+9)$ 整項變成 0，直接求出 $k$：\n{{math:1}}\n第 2 步 · 再令右邊的括號變成 0：取 $x=-6$，右邊 $(x+6)^{2}$ 變成 0，代入已求出的 $k=-9$ 就能求 $h$：\n{{math:2}}\n訣竅：**看哪一個 $x$ 值會令括號等於 0**。$(x+9)$ → 取 $x=-9$；$(x+6)^{2}$ → 取 $x=-6$；沒有括號時取 $x=0$（只會剩下常數項，最快）。\nPaper 2 的選擇題用這招通常 30 秒內可以做完。"
     },
     "math": [
      "(x+h)(x+9)\\equiv(x+6)^{2}+k",
      "x=-9:\\quad 0=(-9+6)^{2}+k\\ \\Rightarrow\\ k=-9",
      "x=-6:\\quad (-6+h)(3)=0+(-9)\\ \\Rightarrow\\ h=3"
     ],
     "vocab": [
      {
       "en": "substitute",
       "zh": "代入"
      },
      {
       "en": "eliminate",
       "zh": "消去（令某項變成 0）"
      }
     ],
     "warn": {
      "zh": "代入法只能「一次求一個」未知常數，而且代完之後要用另一個 $x$ 值（或比較係數）驗算一次 —— 萬一代錯，$h$ 和 $k$ 會一起錯。"
     }
    },
    {
     "id": "ws03-c6",
     "topic": "ws03",
     "title": {
      "zh": "驗算與三大常見錯誤",
      "en": "Checking & Three Common Mistakes"
     },
     "body": {
      "zh": "做完一定要驗算，20 秒就可以救回一題：\n① 代 $x=0$ 進左右兩邊，兩邊的值要相同；\n② 再代一個 $x=1$（或 $-1$），兩邊還是要相同 —— 兩個值都對，幾乎肯定正確；\n③ 換主項的題：把求得的主項式代回原式，或取一組數字對算。\n{{math:0}}\n三個最常見的失分位：\n1. 換主項時漏除係數：$\\frac{9-5m}{3}$ 要整條除 3，不是只除第一項；\n2. 移項忘記變號：$6m+3n=m+9$ 移項後是 $3n=9-5m$，不是 $3n=9+5m$；\n3. 恆等式展開時漏了交叉項：$(x+6)^{2}=x^{2}+12x+36$，不是 $x^{2}+36$（這是每年的必考陷阱）。\n考試時間分配：恆等式題用代入法 30 秒、比較係數 1 分鐘、驗算 20 秒。"
     },
     "math": [
      "\\text{驗算：代 }x=0,\\ 1\\text{ 進左右兩邊，兩邊要相等}"
     ],
     "vocab": [
      {
       "en": "check",
       "zh": "驗算"
      },
      {
       "en": "cross term",
       "zh": "交叉項（如 $2ab$）"
      }
     ],
     "warn": {
      "zh": "完全平方公式：$(a+b)^{2}=a^{2}+2ab+b^{2}$、$(a-b)^{2}=a^{2}-2ab+b^{2}$。中間那個 $2ab$ 是最多人漏掉的一項。"
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws03-ex01",
     "type": "long",
     "topic": "ws03",
     "unit": 0,
     "subtopic": "change-of-subject",
     "difficulty": 2,
     "code": "WS3-EX1",
     "source": "WS03 Example 1 · [HKDSE 2014 Paper 1 Q5]",
     "stem": {
      "text": "Consider the formula $3(2m+n)=m+9$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Make $n$ the subject of the above formula.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "If the value of $m$ is increased by $3$, write down the change in the value of $n$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 拆括號",
         "en": ""
        },
        "math": "6m+3n=m+9",
        "zh": "先把左邊的括號展開：$3(2m+n)=6m+3n$。有括號就先拆，這是換主項的固定第一步。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 2 步 · 移項，把含 $n$ 的留在左邊",
         "en": ""
        },
        "math": "3n=m+9-6m=9-5m",
        "zh": "要把 $n$ 變成主項，就把「不含 $n$」的 $6m$ 移到右邊變號。注意 $m+9-6m$ 要合併成 $9-5m$，不是 $9+5m$。",
        "en": ""
       },
       {
        "title": {
         "zh": "第 3 步 · 係數化成 1",
         "en": ""
        },
        "math": "n=\\frac{9-5m}{3}=3-\\frac{5}{3}m",
        "zh": "左邊是 $3n$，所以**整條式子**除以 3：$\\frac{9-5m}{3}$。兩個寫法都可以，題目問「變化」時用 $3-\\frac{5}{3}m$ 更方便。",
        "en": "",
        "highlight": [
         "n=\\frac{9-5m}{3}"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 4 步 · (b) 用係數直接算變化",
         "en": ""
        },
        "math": "\\Delta n=-\\frac{5}{3}\\times 3=-5",
        "zh": "$n=3-\\frac{5}{3}m$ 裡，$m$ 的係數是 $-\\frac{5}{3}$，表示「$m$ 每增加 1，$n$ 就減少 $\\frac{5}{3}$」。$m$ 增加 3 → $n$ 減少 5。不用重新代入算一次。",
        "en": "",
        "highlight": [
         "-5"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "換主項題若再問「某字母增加/減少時另一字母的變化」，直接用主項式裡的係數乘變化量，又快又不易錯。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws03-ex02",
     "type": "long",
     "topic": "ws03",
     "unit": 0,
     "subtopic": "change-of-subject",
     "difficulty": 2,
     "code": "WS3-EX2",
     "source": "WS03 Practice 2 · [同 Example 1 題型]",
     "stem": {
      "text": "Consider the formula $4(x-3y)=8x-7$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Make $y$ the subject of the above formula.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "If the value of $x$ is decreased by $12$, write down the change in the value of $y$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 拆括號",
         "en": ""
        },
        "math": "4x-12y=8x-7",
        "zh": "$4(x-3y)=4x-12y$。展開後右邊維持 $8x-7$。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 2 步 · 移項（含 $y$ 的留左）",
         "en": ""
        },
        "math": "-12y=8x-7-4x=4x-7",
        "zh": "把 $4x$ 移到右邊變 $-4x$，合併得 $4x-7$。",
        "en": ""
       },
       {
        "title": {
         "zh": "第 3 步 · 係數化成 1（注意負號）",
         "en": ""
        },
        "math": "y=\\frac{7-4x}{12}=\\frac{7}{12}-\\frac{1}{3}x",
        "zh": "左邊是 $-12y$，所以整條除以 $-12$：$y=\\frac{4x-7}{-12}=\\frac{7-4x}{12}$。除以負數時每一項都要變號，這一步最易錯。",
        "en": "",
        "highlight": [
         "y=\\frac{7-4x}{12}"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 4 步 · (b) $x$ 減少 12 時 $y$ 的變化",
         "en": ""
        },
        "math": "\\Delta y=-\\frac{1}{3}\\times(-12)=+4",
        "zh": "$y=\\frac{7}{12}-\\frac{1}{3}x$，$x$ 的係數是 $-\\frac{1}{3}$。$x$ 減少 12 → $y$ **增加** 4（負負得正）。",
        "en": "",
        "highlight": [
         "+4"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "主項前面是負係數時，先把它變成正的再除（兩邊同乘 $-1$），可以少錯一次。",
       "en": ""
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws03-ex03",
     "type": "long",
     "topic": "ws03",
     "unit": 0,
     "subtopic": "identities",
     "difficulty": 2,
     "code": "WS3-EX3",
     "source": "WS03 Practice 3 · [恆等式求常數]",
     "stem": {
      "text": "Consider the identity $(x+h)(x+9)\\equiv(x+6)^{2}+k$, where $h$ and $k$ are constants."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find $h$.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Find $k$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 展開右邊",
         "en": ""
        },
        "math": "(x+6)^{2}+k=x^{2}+12x+36+k",
        "zh": "完全平方：$(x+6)^{2}=x^{2}+2(6)x+36=x^{2}+12x+36$。中間的 $12x$ 千萬不要漏。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "第 2 步 · 展開左邊",
         "en": ""
        },
        "math": "(x+h)(x+9)=x^{2}+(h+9)x+9h",
        "zh": "$x\\cdot x=x^{2}$、$x$ 項是 $9x+hx=(h+9)x$、常數項是 $9h$。",
        "en": ""
       },
       {
        "title": {
         "zh": "第 3 步 · 比較 $x$ 的係數求 $h$",
         "en": ""
        },
        "math": "h+9=12\\ \\Rightarrow\\ h=3",
        "zh": "恆等式左右同類項係數相同：$x$ 的係數 $h+9=12$，所以 $h=3$。",
        "en": "",
        "highlight": [
         "h=3"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "第 4 步 · 比較常數項求 $k$",
         "en": ""
        },
        "math": "9h=36+k\\ \\Rightarrow\\ 27=36+k\\ \\Rightarrow\\ k=-9",
        "zh": "常數項也要相等：$9h=36+k$。代入 $h=3$ 得 $27=36+k$，所以 $k=-9$。",
        "en": "",
        "highlight": [
         "k=-9"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "驗算：代 $x=0$，左邊 $9h=27$、右邊 $36+k=27$ ✓。兩個常數都對上了。",
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
      "id": "eph-ws03-w01",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "change-of-subject",
      "difficulty": 1,
      "code": "WS3-W01",
      "source": "WS03 過渡題（自編）· Level 1 兩步換主項",
      "stem": {
       "text": "If $3a+2b=7$, then $a=$"
      },
      "options": {
       "A": "$\\frac{7-2b}{3}$",
       "B": "$\\frac{7+2b}{3}$",
       "C": "$7-2b$",
       "D": "$\\frac{2b-7}{3}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把不是主角的項移走",
          "en": "Step 1 · Transpose the other term"
         },
         "math": "3a=7-2b",
         "zh": "換主項就像收拾房間：要留的字母留在左邊，其他全部搬去右邊。題目要 $a$ 做主項，就把 $+2b$ 搬過等號 —— 口訣是「跨過等號要變號」，所以變成 $-2b$，得 $3a=7-2b$。",
         "en": "Keep 3a on the left; moving +2b across the equals sign changes it to -2b."
        },
        {
         "title": {
          "zh": "第 2 步 · 把係數變成 1（整條除以 3）",
          "en": "Step 2 · Divide by the coefficient"
         },
         "math": "a=\\frac{7-2b}{3}",
         "zh": "左邊是 $3a$ 不是 $a$，所以兩邊都要除以 3。關鍵：右邊是「整條」寫在分子上面、分母寫 3，不是只除某一項。答案是 A。",
         "en": "Divide the whole right-hand side by 3: a = (7 - 2b) / 3. Answer: A.",
         "highlight": [
          "\\frac{7-2b}{3}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$7-2b$ 只是 $3a$ 的值，忘記最後除以 3。見到答案沒有分母，就要反問自己「係數消了沒有」。",
         "en": "Forgot to divide by 3."
        },
        {
         "opt": "B",
         "zh": "移項時忘記變號：把 $+2b$ 搬去右邊應該寫 $-2b$。",
         "en": "Sign error when moving +2b."
        }
       ],
       "tip": {
        "zh": "換主項的標準兩步節奏：① 加減移項（把目標項孤立出來）；② 乘除消係數（讓字母單獨站立）。",
        "en": "Two standard steps: transpose, then divide by the coefficient."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-w02",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "change-of-subject",
      "difficulty": 2,
      "code": "WS3-W02",
      "source": "WS03 過渡題（自編）· Level 2 目標字母在兩側（抽公因式）",
      "stem": {
       "text": "If $kx+3=2x+h$, then $x=$"
      },
      "options": {
       "A": "$\\frac{h-3}{k+2}$",
       "B": "$\\frac{h-3}{k-2}$",
       "C": "$\\frac{3-h}{k-2}$",
       "D": "$\\frac{h+3}{k-2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把含 x 的項集合在同一邊",
          "en": "Step 1 · Collect the x-terms on one side"
         },
         "math": "kx-2x=h-3",
         "zh": "題目要 $x$，但左邊有 $kx$、右邊有 $2x$。第一步永遠是「大集合」：含 $x$ 的項全部搬去左邊（右邊的 $+2x$ 搬過來變 $-2x$），不含 $x$ 的常數全部搬去右邊（左邊的 $+3$ 搬過去變 $-3$）。",
         "en": "Move 2x to the left (becomes -2x) and 3 to the right (becomes -3)."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式：兩個 x 合成一個",
          "en": "Step 2 · Factor out x"
         },
         "math": "x(k-2)=h-3",
         "zh": "很多同學卡在這裡：左邊有 $kx$ 和 $-2x$ 兩個 $x$，怎樣變成一個？就是用上一課學過的「提取公因式」：把 $x$ 抽到括號外面，括號內剩下 $(k-2)$。",
         "en": "Factor out x: x(k - 2) = h - 3."
        },
        {
         "title": {
          "zh": "第 3 步 · 把整個括號除過去",
          "en": "Step 3 · Divide by the bracket"
         },
         "math": "x=\\frac{h-3}{k-2}",
         "zh": "把整個括號 $(k-2)$ 當成「一個數字」除到分母：$x=\\frac{h-3}{k-2}$，所以答案選 B。不要拆散括號，也不要只除其中一項。",
         "en": "Divide by (k - 2): x = (h - 3)/(k - 2). Answer: B.",
         "highlight": [
          "\\frac{h-3}{k-2}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "分母寫成 $k+2$：把右邊的 $2x$ 搬過來時忘記變號（應為 $-2x$，所以括號內是 $k-2$）。",
         "en": "Sign error when moving 2x to the left."
        },
        {
         "opt": "D",
         "zh": "分子寫成 $h+3$：把左邊的 $+3$ 搬到右邊時忘記變號（應為 $-3$）。",
         "en": "Sign error when moving 3 to the right."
        }
       ],
       "tip": {
        "zh": "只要目標字母在等號「兩邊」都出現，就照這三步走：搬到同一邊 → 抽公因式 → 括號除過去。",
        "en": "Target on both sides: collect terms, factor out, divide by the bracket."
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-w03",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 1,
      "code": "WS3-W03",
      "source": "WS03 過渡題（自編）· Level 3 恆等式直接比較係數",
      "stem": {
       "text": "If $2x^{2}+kx-5\\equiv mx^{2}-4x-5$, then $k=$"
      },
      "options": {
       "A": "$-4$",
       "B": "$2$",
       "C": "$4$",
       "D": "$5$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先弄清 ≡ 是什麼意思",
          "en": "Step 1 · What does the identity symbol mean?"
         },
         "math": "2x^{2}+kx-5\\equiv mx^{2}-4x-5",
         "zh": "符號 $\\equiv$ 讀作「恆等於（identical to）」：左右兩邊寫法雖然不同，但其實是同一個式子，對任何 $x$ 都成立。既然一模一樣，同一次方的係數就必須完全相等 —— 所以看到 $\\equiv$ 不要當成方程去解 $x$。",
         "en": "The identity is true for all x, so like powers must have equal coefficients."
        },
        {
         "title": {
          "zh": "第 2 步 · 同類項「排隊對齊」",
          "en": "Step 2 · Align like terms"
         },
         "math": "x^{2}:2=m,\\qquad x:k=-4,\\qquad \\text{常數}:-5=-5",
         "zh": "像排隊一樣逐項對齊：$x^{2}$ 項得 $m=2$；$x$ 項左邊是 $+k$、右邊是 $-4$，所以 $k=-4$；常數項 $-5=-5$ 剛好吻合。題目問 $k$，直接讀出 $-4$，答案選 A。",
         "en": "Comparing the x-coefficients gives k = -4. Answer: A.",
         "highlight": [
          "k=-4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$2$ 是 $m$ 的值（$x^{2}$ 項的係數），題目問的是 $k$。",
         "en": "2 is the value of m, not k."
        },
        {
         "opt": "C",
         "zh": "漏了負號：右邊 $x$ 前面是 $-4$，所以 $k$ 是 $-4$ 而不是 $4$。",
         "en": "Lost the negative sign in front of 4."
        }
       ],
       "tip": {
        "zh": "看到 $\\equiv$ 千萬不要去解 $x$：用筆把同類項圈出來，直接比較前面的數字與正負號。",
        "en": "Never solve for x in an identity; match the coefficients instead."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws03-w04",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-W04",
      "source": "WS03 過渡題（自編）· Level 4 恆等式代入特殊值",
      "stem": {
       "text": "If $A(x-3)+4\\equiv 2x-2$, then $A=$"
      },
      "options": {
       "A": "$-2$",
       "B": "$1$",
       "C": "$2$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 方法一：展開後比較係數",
          "en": "Step 1 · Method 1: expand and compare"
         },
         "math": "Ax-3A+4\\equiv 2x-2\\ \\Rightarrow\\ A=2",
         "zh": "把左邊展開：$A(x-3)+4=Ax-3A+4$。對齊 $x$ 的係數：左邊 $x$ 前面是 $A$、右邊是 $2$，所以 $A=2$。再用常數項驗算：左邊常數 $-3(2)+4=-2$，與右邊的 $-2$ 相同 ✓。答案是 C。",
         "en": "Expand to Ax - 3A + 4; comparing x-coefficients gives A = 2. Answer: C.",
         "highlight": [
          "A=2"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 方法二：代入特殊值（不用展開）",
          "en": "Step 2 · Method 2: substitute a clever value"
         },
         "math": "x=0:\\ -3A+4=-2\\ \\Rightarrow\\ -3A=-6\\ \\Rightarrow\\ A=2",
         "zh": "恆等式對「任何」$x$ 都成立，所以可以挑最方便的數字代入，完全不用展開。這題挑 $x=0$：左邊 $=A(0-3)+4=-3A+4$，右邊 $=2(0)-2=-2$，解得 $-3A=-6$，即 $A=2$，與方法一相同。挑哪個 $x$ 的原則是「令你想消掉的東西變成 0」：想求常數項時就代 $x=3$，讓 $A(x-3)$ 消失。",
         "en": "Substituting x = 0 gives -3A + 4 = -2, so A = 2 — no expansion needed.",
         "highlight": [
          "A=2"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-2$ 是右邊的常數項，不是 $A$ 的值。",
         "en": "-2 is the right-hand side constant."
        },
        {
         "opt": "D",
         "zh": "$4$ 是左邊單獨的常數項，同樣不是 $A$ 的值。",
         "en": "4 is the separate constant term."
        }
       ],
       "tip": {
        "zh": "卷二看到恆等式，若不想展開括號，就代入 $x=0$；想消掉某一個括號，就代「令該括號為 0」的值 —— 通常 15 秒內算完。",
        "en": "In Paper 2, substitute x = 0 (or a value that zeroes a bracket) instead of expanding."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q01",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "change-of-subject",
      "difficulty": 1,
      "code": "WS3-Q01",
      "source": "EPH WS03 Q1 · 選項自擬（原為圖片）",
      "stem": {
       "text": "If $2n-3m=1$, then $m=$"
      },
      "options": {
       "A": "$-n$",
       "B": "$\\frac{2n-1}{3}$",
       "C": "$\\frac{1-2n}{3}$",
       "D": "$\\frac{2n+1}{3}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把含 $m$ 的移到一邊",
          "en": ""
         },
         "math": "-3m=1-2n",
         "zh": "題目問 $m$，就把含 $m$ 的項留在左邊：$2n-3m=1$ → $-3m=1-2n$。移過等號的項要變號。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 整條除以 $-3$",
          "en": ""
         },
         "math": "m=\\frac{1-2n}{-3}=\\frac{2n-1}{3}",
         "zh": "左邊是 $-3m$，整條除以 $-3$。分子分母同乘 $-1$ 把負號移走，答案是 $\\frac{2n-1}{3}$。",
         "en": "",
         "highlight": [
          "\\frac{2n-1}{3}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$\\frac{1-2n}{3}$ 是忘記把分母的負號也處理掉 —— $\\frac{1-2n}{-3}$ 要分子分母同乘 $-1$ 才等於 $\\frac{2n-1}{3}$。",
         "en": "Sign not cleared in the denominator."
        },
        {
         "opt": "A",
         "zh": "$-n$ 是把 $2n$ 當成 $3n$ 亂約的結果，完全沒有移項。",
         "en": "Guessed by cancelling wrongly."
        }
       ],
       "tip": {
        "zh": "主項題的三步：拆括號 → 移項 → 係數化 1。做完把答案代回原式驗算一次。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q02",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "change-of-subject",
      "difficulty": 1,
      "code": "WS3-Q02",
      "source": "EPH WS03 Q2 · 選項自擬（原為圖片）",
      "stem": {
       "text": "If $4x-3=4(9-y)$, then $y=$"
      },
      "options": {
       "A": "$\\frac{39-4x}{4}$",
       "B": "$39-4x$",
       "C": "$\\frac{4x-39}{4}$",
       "D": "$4x-39$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆右邊的括號",
          "en": ""
         },
         "math": "4x-3=36-4y",
         "zh": "$4(9-y)=36-4y$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 把含 $y$ 的移到左邊",
          "en": ""
         },
         "math": "4y=36-4x+3=39-4x",
         "zh": "$-4y$ 移去左邊變 $+4y$；$4x$ 移去右邊變 $-4x$；$-3$ 移過去變 $+3$。合併：$36+3=39$，所以 $4y=39-4x$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 整條除以 4",
          "en": ""
         },
         "math": "y=\\frac{39-4x}{4}",
         "zh": "左邊是 $4y$，整條除以 4：$\\frac{39-4x}{4}$。注意不是 $\\frac{39}{4}-4x$ —— 兩項都要除。",
         "en": "",
         "highlight": [
          "\\frac{39-4x}{4}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$39-4x$ 是 $4y$ 的值，忘記除以 4。這是這類題最常見的錯。",
         "en": "Forgot to divide by 4."
        },
        {
         "opt": "C",
         "zh": "$\\frac{4x-39}{4}$ 移項時沒有變號（把 $4y=39-4x$ 寫成 $4y=4x-39$）。",
         "en": "Sign error when transposing."
        }
       ],
       "tip": {
        "zh": "看到「$4y=$」就要記得最後一步是除以 4；選項裡同時放 $4y$ 與 $y$ 是常見的陷阱設計。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws03-q03",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "change-of-subject",
      "difficulty": 2,
      "code": "WS3-Q03",
      "source": "EPH WS03 Q8 · 選項自擬（原為圖片）",
      "stem": {
       "text": "If $a(b-a)=-2(a+b)$, then $b=$"
      },
      "options": {
       "A": "$\\frac{a^{2}-2a}{a+2}$",
       "B": "$\\frac{a^{2}+2a}{a+2}$",
       "C": "$\\frac{a^{2}-2a}{a-2}$",
       "D": "$a-2$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開左邊",
          "en": ""
         },
         "math": "ab-a^{2}=-2a-2b",
         "zh": "$a(b-a)=ab-a^{2}$；右邊 $-2(a+b)=-2a-2b$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 把含 $b$ 的集中到同一邊",
          "en": ""
         },
         "math": "ab+2b=a^{2}-2a",
         "zh": "$-2b$ 移左變 $+2b$；$-a^{2}$ 移右變 $+a^{2}$。左邊兩項都含 $b$，可以抽公因式。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 抽 $b$ 出來再除過去",
          "en": ""
         },
         "math": "b(a+2)=a^{2}-2a\\ \\Rightarrow\\ b=\\frac{a^{2}-2a}{a+2}",
         "zh": "$ab+2b=b(a+2)$，然後整條除以 $(a+2)$。答案也可以寫成 $\\frac{a(a-2)}{a+2}$。",
         "en": "",
         "highlight": [
          "\\frac{a^{2}-2a}{a+2}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$\\frac{a^{2}-2a}{a-2}$ 是抽因式時括號寫錯（把 $ab+2b$ 當成 $b(a-2)$）。",
         "en": "Wrong common factor."
        },
        {
         "opt": "D",
         "zh": "$a-2$ 是直接把 $(a+2)$ 約掉，忘記分母還有東西。",
         "en": "Cancelled wrongly."
        }
       ],
       "tip": {
        "zh": "當目標字母出現在兩項、而且**不在同一邊**時，先集中、再抽公因式，最後才除過去。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q04",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "change-of-subject",
      "difficulty": 2,
      "code": "WS3-Q04",
      "source": "EPH WS03 Q9 · 選項自擬（原為圖片）",
      "stem": {
       "text": "If $m(m-a)=a(2-m)$, then $a=$"
      },
      "options": {
       "A": "$m$",
       "B": "$\\frac{m^{2}}{2}$",
       "C": "$\\frac{m}{2}$",
       "D": "$2m^{2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開兩邊",
          "en": ""
         },
         "math": "m^{2}-ma=2a-ma",
         "zh": "左邊 $m(m-a)=m^{2}-ma$；右邊 $a(2-m)=2a-ma$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 兩邊同時加 $ma$",
          "en": ""
         },
         "math": "m^{2}=2a",
         "zh": "兩邊都有 $-ma$，加 $ma$ 之後就抵消了 —— 這一步是這題的關鍵。",
         "en": "",
         "highlight": [
          "m^{2}=2a"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 $a$",
          "en": ""
         },
         "math": "a=\\frac{m^{2}}{2}",
         "zh": "$m^{2}=2a$，所以 $a=\\frac{m^{2}}{2}$。",
         "en": "",
         "highlight": [
          "\\frac{m^{2}}{2}"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$m$ 是直接把 $m^{2}$ 當成 $2m$ 約掉，次數處理錯誤（$m^{2}$ 不能被 2 約成 $m$）。",
         "en": "Wrong power handling."
        },
        {
         "opt": "C",
         "zh": "$\\frac{m}{2}$ 是把 $m^{2}$ 誤看成 $m$。",
         "en": "Lost a power of m."
        }
       ],
       "tip": {
        "zh": "兩邊有相同的項（$-ma$）時，直接加回去抵消，比移項更快更不易錯。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q05",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q18",
      "source": "EPH WS03 Q18 · [HKDSE Sample Paper 2 Q4]",
      "stem": {
       "text": "Let $p$ and $q$ be constants. If $x^{2}+p(x+5)-q\\equiv(x+3)(x-9)$, then $q=$"
      },
      "options": {
       "A": "$-6$",
       "B": "$-5$",
       "C": "$-3$",
       "D": "$27$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(x+3)(x-9)=x^{2}-6x-27",
         "zh": "$(x+3)(x-9)=x^{2}-9x+3x-27=x^{2}-6x-27$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開左邊並比較 $x$ 係數",
          "en": ""
         },
         "math": "x^{2}+px+5p-q\\ \\Rightarrow\\ p=-6",
         "zh": "左邊 $=x^{2}+px+(5p-q)$。與右邊的 $x$ 係數比較：$p=-6$。",
         "en": "",
         "highlight": [
          "p=-6"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $q$",
          "en": ""
         },
         "math": "5p-q=-27\\ \\Rightarrow\\ -30-q=-27\\ \\Rightarrow\\ q=-3",
         "zh": "常數項也要相等：$5p-q=-27$。代入 $p=-6$：$-30-q=-27$，所以 $q=-3$。",
         "en": "",
         "highlight": [
          "q=-3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-6$ 是 $p$ 的值。題目問的是 $q$，這種題的選項常常同時放兩個常數。",
         "en": "-6 is the value of p, not q."
        },
        {
         "opt": "D",
         "zh": "$27$ 是把常數項 $-27$ 的正負號搞反（忘記 $5p$ 那一份）。",
         "en": "Sign error in the constant term."
        }
       ],
       "tip": {
        "zh": "比較係數時先在草稿上把左右兩邊「對齊」寫好，再一項一項比，就不會拿錯常數。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws03-q06",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q19",
      "source": "EPH WS03 Q19 · [HKDSE Sample Paper 2 Q4]",
      "stem": {
       "text": "Let $a$ and $b$ be constants. If $2x^{2}+a(x+2)+b\\equiv(2x-1)(x-1)$, then $b=$"
      },
      "options": {
       "A": "$-3$",
       "B": "$-2$",
       "C": "$1$",
       "D": "$7$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(2x-1)(x-1)=2x^{2}-3x+1",
         "zh": "$2x^{2}-2x-x+1=2x^{2}-3x+1$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開左邊並比較 $x$ 係數",
          "en": ""
         },
         "math": "2x^{2}+ax+(2a+b)\\ \\Rightarrow\\ a=-3",
         "zh": "左邊 $=2x^{2}+ax+(2a+b)$。$x$ 的係數：$a=-3$。",
         "en": "",
         "highlight": [
          "a=-3"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $b$",
          "en": ""
         },
         "math": "2a+b=1\\ \\Rightarrow\\ -6+b=1\\ \\Rightarrow\\ b=7",
         "zh": "常數項：$2a+b=1$。代入 $a=-3$ 得 $-6+b=1$，所以 $b=7$。",
         "en": "",
         "highlight": [
          "b=7"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-3$ 是 $a$ 的值（題目問 $b$）。",
         "en": "-3 is a, not b."
        },
        {
         "opt": "C",
         "zh": "$1$ 是直接把右邊的常數項當成 $b$，忘記左邊還有 $2a$。",
         "en": "Forgot the 2a term."
        }
       ],
       "tip": {
        "zh": "左邊是 $a(x+2)+b$ —— 展開是 $ax+2a+b$，常數項裡同時有 $2a$ 和 $b$，不能直接抄。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q07",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 3,
      "code": "WS3-Q20",
      "source": "EPH WS03 Q20 · [HKDSE Practice Paper 2 Q4]",
      "stem": {
       "text": "Let $m$ and $n$ be constants. If $m(x+4)^{2}+n(x-1)^{2}\\equiv x^{2}+28x+46$, then $m=$"
      },
      "options": {
       "A": "$-4$",
       "B": "$-2$",
       "C": "$2$",
       "D": "$3$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開左邊",
          "en": ""
         },
         "math": "m(x^{2}+8x+16)+n(x^{2}-2x+1)=(m+n)x^{2}+(8m-2n)x+(16m+n)",
         "zh": "$(x+4)^{2}=x^{2}+8x+16$、$(x-1)^{2}=x^{2}-2x+1$，再乘上 $m$、$n$ 後合併同類項。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 比較 $x^{2}$ 與 $x$ 的係數",
          "en": ""
         },
         "math": "m+n=1,\\qquad 8m-2n=28",
         "zh": "右邊是 $x^{2}+28x+46$，所以 $x^{2}$ 係數 $=1$、$x$ 係數 $=28$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 解聯立方程求 $m$",
          "en": ""
         },
         "math": "n=1-m\\ \\Rightarrow\\ 8m-2(1-m)=28\\ \\Rightarrow\\ 10m=30\\ \\Rightarrow\\ m=3",
         "zh": "由 $n=1-m$ 代入第二式：$8m-2+2m=28$，得 $10m=30$，$m=3$。（驗算常數項：$16(3)+n=46$ → $n=-2$，與 $m+n=1$ 吻合 ✓）",
         "en": "",
         "highlight": [
          "m=3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-2$ 是 $n$ 的值，題目問的是 $m$。",
         "en": "-2 is n."
        },
        {
         "opt": "A",
         "zh": "$-4$ 是展開 $(x-1)^{2}$ 時把 $-2x$ 寫成 $+2x$ 所造成的結果。",
         "en": "Sign slip when expanding (x-1)^2."
        }
       ],
       "tip": {
        "zh": "兩個平方都要展開時，先把 $(a\\pm b)^{2}=a^{2}\\pm2ab+b^{2}$ 寫清楚再乘係數。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q08",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 3,
      "code": "WS3-Q21",
      "source": "EPH WS03 Q21 · [HKDSE Practice Paper 2 Q4]",
      "stem": {
       "text": "Let $a$ and $b$ be constants. If $a(x+3)^{2}+b(x-4)^{2}\\equiv x^{2}-78x+51$, then $a=$"
      },
      "options": {
       "A": "$-5$",
       "B": "$-3$",
       "C": "$4$",
       "D": "$6$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開左邊",
          "en": ""
         },
         "math": "a(x^{2}+6x+9)+b(x^{2}-8x+16)=(a+b)x^{2}+(6a-8b)x+(9a+16b)",
         "zh": "$(x+3)^{2}=x^{2}+6x+9$、$(x-4)^{2}=x^{2}-8x+16$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 比較係數列方程",
          "en": ""
         },
         "math": "a+b=1,\\qquad 6a-8b=-78",
         "zh": "右邊 $x^{2}-78x+51$：$x^{2}$ 係數 $=1$、$x$ 係數 $=-78$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 $a$",
          "en": ""
         },
         "math": "b=1-a\\ \\Rightarrow\\ 6a-8(1-a)=-78\\ \\Rightarrow\\ 14a=-70\\ \\Rightarrow\\ a=-5",
         "zh": "代入後：$6a-8+8a=-78$ → $14a=-70$ → $a=-5$。（驗算常數項：$9(-5)+16(6)=-45+96=51$ ✓）",
         "en": "",
         "highlight": [
          "a=-5"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$6$ 是 $b$ 的值，題目問 $a$。",
         "en": "6 is b."
        },
        {
         "opt": "C",
         "zh": "$4$ 是展開時把 $(x-4)^{2}$ 的 $-8x$ 寫成 $+8x$ 的結果。",
         "en": "Sign slip when expanding (x-4)^2."
        }
       ],
       "tip": {
        "zh": "求出一個常數後，用第三個係數（常數項）驗算，可以即時發現計錯。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws03-q09",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q22",
      "source": "EPH WS03 Q22 · [HKDSE 2020 Paper 2 Q7]",
      "stem": {
       "text": "If $h$ and $k$ are constants such that $(x+h)(x+8)\\equiv(x+7)^{2}+k$, then $k=$"
      },
      "options": {
       "A": "$-18$",
       "B": "$-8$",
       "C": "$-1$",
       "D": "$6$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(x+7)^{2}+k=x^{2}+14x+49+k",
         "zh": "$(x+7)^{2}=x^{2}+14x+49$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開左邊、比較 $x$ 係數求 $h$",
          "en": ""
         },
         "math": "x^{2}+(h+8)x+8h\\ \\Rightarrow\\ h+8=14\\ \\Rightarrow\\ h=6",
         "zh": "左邊 $=x^{2}+(h+8)x+8h$。$x$ 係數：$h+8=14$ → $h=6$。",
         "en": "",
         "highlight": [
          "h=6"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $k$",
          "en": ""
         },
         "math": "8h=49+k\\ \\Rightarrow\\ 48=49+k\\ \\Rightarrow\\ k=-1",
         "zh": "常數項：$8h=49+k$。代入 $h=6$：$48=49+k$，所以 $k=-1$。",
         "en": "",
         "highlight": [
          "k=-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$6$ 是 $h$ 的值，題目問 $k$。",
         "en": "6 is h."
        },
        {
         "opt": "B",
         "zh": "$-8$ 是把常數項當成 $h$ 之外又多減了一次 8，沒有按係數比較。",
         "en": "Did not compare constant terms properly."
        }
       ],
       "tip": {
        "zh": "捷徑：取 $x=-8$，左邊 $(x+h)(x+8)$ 變成 0，直接得 $0=(-8+7)^{2}+k=1+k$ → $k=-1$，一步完成。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q10",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q23",
      "source": "EPH WS03 Q23 · [HKDSE 2020 Paper 2 Q7]",
      "stem": {
       "text": "If $p$ and $q$ are constants such that $(x+p)(x-12)\\equiv(x-8)^{2}+q$, then $q=$"
      },
      "options": {
       "A": "$-16$",
       "B": "$-4$",
       "C": "$8$",
       "D": "$12$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(x-8)^{2}+q=x^{2}-16x+64+q",
         "zh": "$(x-8)^{2}=x^{2}-16x+64$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開左邊、比較 $x$ 係數求 $p$",
          "en": ""
         },
         "math": "x^{2}+(p-12)x-12p\\ \\Rightarrow\\ p-12=-16\\ \\Rightarrow\\ p=-4",
         "zh": "左邊 $=x^{2}+(p-12)x-12p$。$x$ 係數：$p-12=-16$ → $p=-4$。",
         "en": "",
         "highlight": [
          "p=-4"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $q$",
          "en": ""
         },
         "math": "-12p=64+q\\ \\Rightarrow\\ 48=64+q\\ \\Rightarrow\\ q=-16",
         "zh": "常數項：$-12p=64+q$。代入 $p=-4$：$48=64+q$，所以 $q=-16$。",
         "en": "",
         "highlight": [
          "q=-16"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-4$ 是 $p$ 的值，題目問 $q$。",
         "en": "-4 is p."
        },
        {
         "opt": "D",
         "zh": "$12$ 是直接抄題目的數字，沒有做任何係數比較。",
         "en": "Copied a number from the question."
        }
       ],
       "tip": {
        "zh": "捷徑：取 $x=12$，左邊 $(x+p)(x-12)$ 變成 0，得 $0=(12-8)^{2}+q=16+q$ → $q=-16$，一步完成。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q11",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q24",
      "source": "EPH WS03 Q24 · [HKDSE 2012 Paper 2 Q3]",
      "stem": {
       "text": "If $a$ and $b$ are constants such that $x^{2}+a\\equiv(x+b)(x-3)+5$, then $a=$"
      },
      "options": {
       "A": "$5$",
       "B": "$3$",
       "C": "$-4$",
       "D": "$-9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(x+b)(x-3)+5=x^{2}+(b-3)x-3b+5",
         "zh": "$(x+b)(x-3)=x^{2}-3x+bx-3b=x^{2}+(b-3)x-3b$，再加 5。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 比較 $x$ 係數求 $b$",
          "en": ""
         },
         "math": "b-3=0\\ \\Rightarrow\\ b=3",
         "zh": "左邊 $x^{2}+a$ **沒有 $x$ 項**，表示 $x$ 的係數是 $0$：$b-3=0$ → $b=3$。這是這題的關鍵。",
         "en": "",
         "highlight": [
          "b=3"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $a$",
          "en": ""
         },
         "math": "a=-3b+5=-9+5=-4",
         "zh": "常數項：$a=-3b+5$。代入 $b=3$：$a=-9+5=-4$。",
         "en": "",
         "highlight": [
          "a=-4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$3$ 是 $b$ 的值，題目問 $a$。",
         "en": "3 is b."
        },
        {
         "opt": "A",
         "zh": "$5$ 是直接抄右邊的 $+5$，忘記還有 $-3b$ 那一份。",
         "en": "Forgot the -3b term."
        }
       ],
       "tip": {
        "zh": "一邊「少了某一項」時，它的係數是 0 —— 這是恆等式題最常考的陷阱。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws03-q12",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q25",
      "source": "EPH WS03 Q25 · 選項 B/C 自擬 · [HKDSE 2012 Paper 2 Q3]",
      "stem": {
       "text": "If $m$ and $n$ are constants such that $x^{2}+m\\equiv(x-4)(x+n)+8$, then $m=$"
      },
      "options": {
       "A": "$-8$",
       "B": "$-4$",
       "C": "$4$",
       "D": "$8$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(x-4)(x+n)+8=x^{2}+(n-4)x-4n+8",
         "zh": "$(x-4)(x+n)=x^{2}+nx-4x-4n=x^{2}+(n-4)x-4n$，再加 8。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 比較 $x$ 係數求 $n$",
          "en": ""
         },
         "math": "n-4=0\\ \\Rightarrow\\ n=4",
         "zh": "左邊 $x^{2}+m$ 沒有 $x$ 項 → $x$ 係數 $=0$ → $n-4=0$ → $n=4$。",
         "en": "",
         "highlight": [
          "n=4"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $m$",
          "en": ""
         },
         "math": "m=-4n+8=-16+8=-8",
         "zh": "常數項：$m=-4n+8$。代入 $n=4$：$m=-16+8=-8$。",
         "en": "",
         "highlight": [
          "m=-8"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$4$ 是 $n$ 的值，題目問 $m$。",
         "en": "4 is n."
        },
        {
         "opt": "D",
         "zh": "$8$ 是直接抄右邊的 $+8$，忘記減去 $4n$。",
         "en": "Forgot the -4n term."
        }
       ],
       "tip": {
        "zh": "「沒有 $x$ 項」= $x$ 的係數是 0，先求另一個常數，再代回常數項。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q13",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q26",
      "source": "EPH WS03 Q26 · [HKDSE 2019 Paper 2 Q4]",
      "stem": {
       "text": "If $a$ and $\\beta$ are constants such that $(x-5)(x+a)-9\\equiv(x-8)^{2}+\\beta$, then $\\beta=$"
      },
      "options": {
       "A": "$-34$",
       "B": "$-18$",
       "C": "$-11$",
       "D": "$-9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(x-8)^{2}+\\beta=x^{2}-16x+64+\\beta",
         "zh": "$(x-8)^{2}=x^{2}-16x+64$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開左邊、比較 $x$ 係數求 $a$",
          "en": ""
         },
         "math": "x^{2}+(a-5)x-5a-9\\ \\Rightarrow\\ a-5=-16\\ \\Rightarrow\\ a=-11",
         "zh": "左邊 $=x^{2}+(a-5)x-5a-9$。$x$ 係數：$a-5=-16$ → $a=-11$。",
         "en": "",
         "highlight": [
          "a=-11"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $\\beta$",
          "en": ""
         },
         "math": "-5a-9=64+\\beta\\ \\Rightarrow\\ 46=64+\\beta\\ \\Rightarrow\\ \\beta=-18",
         "zh": "常數項：$-5(-11)-9=55-9=46=64+\\beta$，所以 $\\beta=-18$。",
         "en": "",
         "highlight": [
          "\\beta=-18"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$-11$ 是 $a$ 的值，題目問 $\\beta$。",
         "en": "-11 is a."
        },
        {
         "opt": "D",
         "zh": "$-9$ 是直接抄左邊的 $-9$，忘記處理 $-5a$。",
         "en": "Forgot the -5a term."
        }
       ],
       "tip": {
        "zh": "捷徑：取 $x=8$，右邊 $(x-8)^{2}$ 變成 0 → $(8-5)(8+a)-9=\\beta$；再取 $x=5$ 求 $a$，兩步完成。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q14",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 2,
      "code": "WS3-Q27",
      "source": "EPH WS03 Q27 · [HKDSE 2019 Paper 2 Q4]",
      "stem": {
       "text": "If $a$ and $\\beta$ are constants such that $(x+a)(x-8)-13\\equiv(x-11)^{2}+\\beta$, then $\\beta=$"
      },
      "options": {
       "A": "$-22$",
       "B": "$-14$",
       "C": "$-13$",
       "D": "$-11$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開右邊",
          "en": ""
         },
         "math": "(x-11)^{2}+\\beta=x^{2}-22x+121+\\beta",
         "zh": "$(x-11)^{2}=x^{2}-22x+121$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開左邊、比較 $x$ 係數求 $a$",
          "en": ""
         },
         "math": "x^{2}+(a-8)x-8a-13\\ \\Rightarrow\\ a-8=-22\\ \\Rightarrow\\ a=-14",
         "zh": "左邊 $=x^{2}+(a-8)x-8a-13$。$x$ 係數：$a-8=-22$ → $a=-14$。",
         "en": "",
         "highlight": [
          "a=-14"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 比較常數項求 $\\beta$",
          "en": ""
         },
         "math": "-8a-13=121+\\beta\\ \\Rightarrow\\ 99=121+\\beta\\ \\Rightarrow\\ \\beta=-22",
         "zh": "常數項：$-8(-14)-13=112-13=99=121+\\beta$，所以 $\\beta=-22$。",
         "en": "",
         "highlight": [
          "\\beta=-22"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-14$ 是 $a$ 的值，題目問 $\\beta$。",
         "en": "-14 is a."
        },
        {
         "opt": "C",
         "zh": "$-13$ 是直接抄左邊的 $-13$，忘記處理 $-8a$。",
         "en": "Forgot the -8a term."
        }
       ],
       "tip": {
        "zh": "兩個常數輪流求：先用 $x$ 的係數求 $a$，再用常數項求 $\\beta$，最後代一個 $x$ 驗算。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws03-q15",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 3,
      "code": "WS3-Q28",
      "source": "EPH WS03 Q28 · 選項 A/B 自擬 · [HKDSE 2014 Paper 2 Q3]",
      "stem": {
       "text": "If $p$ and $q$ are constants such that $px(x+3)+2x^{2}\\equiv qx(x+2)-x$, then $p=$"
      },
      "options": {
       "A": "$-3$",
       "B": "$1$",
       "C": "$3$",
       "D": "$5$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開左邊",
          "en": ""
         },
         "math": "px^{2}+3px+2x^{2}=(p+2)x^{2}+3px",
         "zh": "$px(x+3)=px^{2}+3px$，加上 $2x^{2}$ 後合併 $x^{2}$ 項。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開右邊",
          "en": ""
         },
         "math": "qx^{2}+2qx-x=qx^{2}+(2q-1)x",
         "zh": "$qx(x+2)=qx^{2}+2qx$，再減 $x$ → $x$ 項是 $(2q-1)x$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 比較係數、解出 $p$",
          "en": ""
         },
         "math": "p+2=q,\\quad 3p=2q-1\\ \\Rightarrow\\ 3p=2(p+2)-1\\ \\Rightarrow\\ p=3",
         "zh": "代入 $q=p+2$：$3p=2p+4-1=2p+3$，所以 $p=3$（$q=5$）。",
         "en": "",
         "highlight": [
          "p=3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$5$ 是 $q$ 的值，題目問 $p$。",
         "en": "5 is q."
        },
        {
         "opt": "A",
         "zh": "$-3$ 是移項時沒有變號的結果（把 $3p=2p+3$ 寫成 $3p=2p-3$）。",
         "en": "Sign error when transposing."
        }
       ],
       "tip": {
        "zh": "兩邊都沒有常數項時，比較 $x^{2}$ 與 $x$ 的係數就夠解出兩個未知數。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q16",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 3,
      "code": "WS3-Q38",
      "source": "EPH WS03 Q38 · [HKDSE 2021 Paper 2 Q6]",
      "stem": {
       "text": "If $a$, $b$ and $c$ are non-zero constants such that $a(x+9)+b(2x+9)\\equiv c(x+8)$, then $a:b=$"
      },
      "options": {
       "A": "$1:2$",
       "B": "$1:7$",
       "C": "$2:1$",
       "D": "$7:1$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開左邊",
          "en": ""
         },
         "math": "a(x+9)+b(2x+9)=(a+2b)x+(9a+9b)",
         "zh": "$x$ 項是 $ax+2bx=(a+2b)x$；常數項是 $9a+9b$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開右邊、比較係數",
          "en": ""
         },
         "math": "c(x+8)=cx+8c\\ \\Rightarrow\\ c=a+2b,\\quad 8c=9a+9b",
         "zh": "右邊 $x$ 項是 $cx$、常數項是 $8c$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 消去 $c$ 求 $a:b$",
          "en": ""
         },
         "math": "8(a+2b)=9a+9b\\ \\Rightarrow\\ 7b=a\\ \\Rightarrow\\ a:b=7:1",
         "zh": "把 $c=a+2b$ 代入 $8c=9a+9b$：$8a+16b=9a+9b$ → $7b=a$ → $a:b=7:1$。",
         "en": "",
         "highlight": [
          "7:1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$2:1$ 是直接抄 $x$ 項裡 $a$ 與 $b$ 的係數比，忘記還要用常數項的條件。",
         "en": "Took the coefficients of x only."
        },
        {
         "opt": "B",
         "zh": "$1:7$ 是把比的前後調轉（$7b=a$ 表示 $a$ 是 $b$ 的 7 倍）。",
         "en": "Ratio reversed."
        }
       ],
       "tip": {
        "zh": "比例題：把兩個係數條件寫成兩條方程，消去第三個常數（$c$）就得到 $a:b$。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws03-q17",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 3,
      "code": "WS3-Q40",
      "source": "EPH WS03 Q40 · [HKDSE 2013 Paper 2 Q8]",
      "stem": {
       "text": "If $a$, $b$ and $c$ are non-zero constants such that $x(x+4a)+a\\equiv x^{2}+3(bx+c)$, then $a:b:c=$"
      },
      "options": {
       "A": "$3:4:1$",
       "B": "$3:4:9$",
       "C": "$4:3:12$",
       "D": "$12:9:4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開左邊",
          "en": ""
         },
         "math": "x(x+4a)+a=x^{2}+4ax+a",
         "zh": "$x(x+4a)=x^{2}+4ax$，再加 $a$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開右邊、比較係數",
          "en": ""
         },
         "math": "x^{2}+3(bx+c)=x^{2}+3bx+3c\\ \\Rightarrow\\ 4a=3b,\\quad a=3c",
         "zh": "$x$ 係數：$4a=3b$；常數項：$a=3c$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 化為連比",
          "en": ""
         },
         "math": "b=\\frac{4a}{3},\\quad c=\\frac{a}{3}\\ \\Rightarrow\\ a:b:c=3:4:1",
         "zh": "三個都用 $a$ 表示：$a:\\frac{4a}{3}:\\frac{a}{3}$，同乘 3 → $3:4:1$。",
         "en": "",
         "highlight": [
          "3:4:1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$4:3:12$ 是只用了 $4a=3b$（得 $a:b=3:4$ 卻寫成 $4:3$），常數項沒處理好。",
         "en": "Mixed up the ratio order."
        },
        {
         "opt": "D",
         "zh": "$12:9:4$ 是把 $c$ 的比例算錯（$a=3c$ → $c=\\frac{a}{3}$，不是 $3a$）。",
         "en": "Wrong constant ratio."
        }
       ],
       "tip": {
        "zh": "連比題的標準做法：全部用同一個字母表示，再化成整數比。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws03-q18",
      "type": "mc",
      "topic": "ws03",
      "unit": 0,
      "subtopic": "identities",
      "difficulty": 3,
      "code": "WS3-Q41",
      "source": "EPH WS03 Q41 · [HKDSE 2013 Paper 2 Q8]",
      "stem": {
       "text": "If $a$, $b$ and $c$ are non-zero constants such that $4a-x(x-2a)\\equiv 3(bx+c)-x^{2}$, then $a:b:c=$"
      },
      "options": {
       "A": "$3:2:4$",
       "B": "$4:6:3$",
       "C": "$6:9:8$",
       "D": "$12:8:9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開左邊（注意負號）",
          "en": ""
         },
         "math": "4a-x(x-2a)=4a-x^{2}+2ax=-x^{2}+2ax+4a",
         "zh": "$-x(x-2a)=-x^{2}+2ax$，兩項都要變號。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 2 步 · 展開右邊、比較係數",
          "en": ""
         },
         "math": "3(bx+c)-x^{2}=-x^{2}+3bx+3c\\ \\Rightarrow\\ 2a=3b,\\quad 4a=3c",
         "zh": "$x$ 係數：$2a=3b$；常數項：$4a=3c$。",
         "en": ""
        },
        {
         "title": {
          "zh": "第 3 步 · 化為連比",
          "en": ""
         },
         "math": "b=\\frac{2a}{3},\\quad c=\\frac{4a}{3}\\ \\Rightarrow\\ a:b:c=3:2:4",
         "zh": "$a:\\frac{2a}{3}:\\frac{4a}{3}$，同乘 3 → $3:2:4$。",
         "en": "",
         "highlight": [
          "3:2:4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$4:6:3$ 是把 $2a=3b$ 與 $4a=3c$ 的比例調轉了。",
         "en": "Ratios reversed."
        },
        {
         "opt": "C",
         "zh": "$6:9:8$ 是展開 $-x(x-2a)$ 時漏了變號，得到 $-2ax$ 所致。",
         "en": "Sign slip when expanding."
        }
       ],
       "tip": {
        "zh": "式子前面有負號時，展開後**每一項**都要變號 —— 這是這題唯一的陷阱。",
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
  "mc": 22,
  "long": 3,
  "cards": 6,
  "pages": 8
 }
};
