// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS05B = {
 "id": "ws05b",
 "stage": 1,
 "unit": 1,
 "subtopic": "complex-numbers",
 "source": "EPH All-Round L5 · Worksheet 5（5.2 複數）",
 "name": {
  "zh": "複數",
  "en": "Complex Numbers"
 },
 "intro": {
  "zh": "這一課只做一件事：認得複數，並且把 $i$ 的次方與四則運算練熟。\n內容少而機械，固定三步：① 記住 $i^{2}=-1$；② $i$ 的次方用「÷ 4 看餘數」化簡；③ 加減乘除之後整理成 $a+bi$。\nDSE Paper 2 每年固定一至兩題複數題，題型幾乎不變，是投資報酬率最高的一課。學完之後回頭看二次方程，「沒有實根」也不再是問題 —— 那只是複數的世界剛剛開始。"
 },
 "cmdHints": [
  {
   "en": "the real part",
   "zh": "實部（$i$ 前面的係數，不含 $i$）"
  },
  {
   "en": "the imaginary part",
   "zh": "虛部（同樣不含 $i$；負號要一齊寫）"
  },
  {
   "en": "in the form $a+bi$",
   "zh": "寫成 $a+bi$ 的形式（實部在前、虛部在後）"
  },
  {
   "en": "where $k$ is a real number",
   "zh": "其中 $k$ 是實數（不是複數，所以可以比較大小）"
  },
  {
   "en": "If $z$ is real / purely imaginary",
   "zh": "「$z$ 是實數」＝ 虛部 $=0$；「$z$ 是純虛數」＝ 實部 $=0$（兩者剛好相反）"
  },
  {
   "en": "Hence / show that",
   "zh": "由此／證明（要用上一小題的結果）"
  }
 ],
 "lessons": [
  {
   "id": "ws05b-1",
   "title": {
    "zh": "i 的次方、實部虛部與四則運算",
    "en": "Powers of i, real & imaginary parts, arithmetic"
   },
   "cards": [
    {
     "id": "ws05b-c1",
     "topic": "ws05b",
     "title": {
      "zh": "複數是什麼？i² = −1",
      "en": "What is a Complex Number?"
     },
     "body": {
      "zh": "有些二次方程「沒有實根」，因為負數不能開平方根。數學家於是定義了一個新數 $i$，規定：\n{{math:0}}\n有了它，$x^{2}=-1$ 就有解 $x=\\pm i$，而任何二次方程都一定有根。\n一個複數（complex number）寫成 $a+bi$ 的形式，其中 $a$、$b$ 都是實數：\n・$a$ 叫實部（real part），$b$ 叫虛部（imaginary part）；\n・虛部是 $b$，即 $i$ 前面那個數（不用連 $i$ 一齊寫）：\n{{math:1}}\n・當 $b=0$ 時，$a+bi$ 就是實數 $a$ —— 所以實數也是複數的一部分。\nDSE Paper 2 每年都有一至兩題「求實部／虛部」，只要認得 $a+bi$ 的結構就拿到分。"
     },
     "math": [
      "i^{2}=-1",
      "4-ki:\\quad \\text{實部}=4;\\quad \\text{虛部}=-k"
     ],
     "vocab": [
      {
       "en": "complex number",
       "zh": "複數"
      },
      {
       "en": "real part",
       "zh": "實部"
      },
      {
       "en": "imaginary part",
       "zh": "虛部"
      }
     ],
     "warn": {
      "zh": "虛部是 $i$ 前面的那個數（不連 $i$）。$4-ki$ 的虛部是 $-k$，不是 $-ki$、也不是 $k$ —— 負號一定要一齊讀出來。"
     }
    },
    {
     "id": "ws05b-c2",
     "topic": "ws05b",
     "title": {
      "zh": "i 的次方：除以 4 看餘數",
      "en": "Powers of i"
     },
     "body": {
      "zh": "因為 $i^{2}=-1$，所以 $i$ 的次方每 4 次就循環一次：\n{{math:0}}\n{{math:1}}\n所以計算 $i^{n}$（$n$ 是正整數）只要看 $n$ 除以 4 的餘數：\n・餘 $1$ → $i^{n}=i$；　・餘 $2$ → $i^{n}=-1$；\n・餘 $3$ → $i^{n}=-i$；　・餘 $0$（即整除）→ $i^{n}=1$。\n例：$i^{19}$ —— $19\\div 4=4$ 餘 $3$，所以 $i^{19}=i^{3}=-i$。\n另一個等價做法是把次方拆成「$4$ 的倍數 + 餘數」，再用 $(i^{4})^{k}=1$：\n{{math:2}}\n兩種做法都要快：DSE 的複數題一開始通常就是一串 $i$ 的高次方，這一步做錯，整題就跟著錯。"
     },
     "math": [
      "i^{1}=i,\\quad i^{2}=-1,\\quad i^{3}=-i,\\quad i^{4}=1",
      "i^{5}=i,\\quad i^{6}=-1,\\quad i^{7}=-i,\\quad i^{8}=1",
      "i^{19}=i^{4\\times 4+3}=(i^{4})^{4}\\cdot i^{3}=1\\cdot(-i)=-i"
     ],
     "vocab": [
      {
       "en": "power of i",
       "zh": "i 的次方"
      },
      {
       "en": "remainder",
       "zh": "餘數"
      },
      {
       "en": "cycle",
       "zh": "循環"
      }
     ],
     "warn": {
      "zh": "餘數是 $0$（即 $n$ 被 4 整除）時 $i^{n}=1$，不是 $0$。另外 $i^{3}=-i$ 的負號經常被漏掉，寫答案前逐個核對一次。"
     }
    },
    {
     "id": "ws05b-c3",
     "topic": "ws05b",
     "title": {
      "zh": "複數的加、減、乘、除",
      "en": "Arithmetic of Complex Numbers"
     },
     "body": {
      "zh": "複數的四則運算跟多項式一樣，只需把 $i$ 當成一個普通字母，最後用 $i^{2}=-1$ 化簡。\n① 加減：實部與實部加減，虛部與虛部加減。\n{{math:0}}\n② 乘法：像展開 $(a+bx)(c+dx)$ 一樣逐項相乘，再把 $i^{2}$ 換成 $-1$：\n{{math:1}}\n③ 除法：要把分母的 $i$ 消掉，方法是分子與分母同時乘「分母的共軛」—— 即把 $a+bi$ 改成 $a-bi$（詳細做法、公式與常見錯誤見下一張卡）：\n{{math:2}}\n為什麼有效？因為 $(a+bi)(a-bi)=a^{2}-b^{2}i^{2}=a^{2}+b^{2}$，分母就變成一個實數。\n做題時最好養成一個習慣：任何複數運算做完，都把它整理成「實部 + 虛部 $i$」兩堆：\n{{math:3}}\n這樣題目問實部、虛部，還是「兩者相等」，都可以一眼讀出來。"
     },
     "math": [
      "(a+bi)+(m+ni)=(a+m)+(b+n)i",
      "(1-2i)(3+4i)=3+4i-6i-8i^{2}=3-2i+8=11-2i",
      "\\frac{1}{i}=\\frac{1\\cdot(-i)}{i\\cdot(-i)}=\\frac{-i}{1}=-i",
      "(k-4i)(4-i)=(4k-4)+(-k-16)i"
     ],
     "vocab": [
      {
       "en": "addition and subtraction",
       "zh": "加法與減法"
      },
      {
       "en": "multiplication",
       "zh": "乘法"
      },
      {
       "en": "division",
       "zh": "除法"
      }
     ],
     "warn": {
      "zh": "展開乘法時 $i^{2}$ 要一齊換成 $-1$，不要漏；$(1-2i)(3+4i)$ 的中間兩項是 $4i-6i=-2i$，符號方向最容易亂，建議逐項寫齊再合併。"
     }
    },
    {
     "id": "ws05b-c4",
     "topic": "ws05b",
     "title": {
      "zh": "複數除法：用共軛把分母變成實數",
      "en": "Dividing Complex Numbers (Using the Conjugate)"
     },
     "body": {
      "zh": "複數除法是全課最難的一步，但其實只有一個動作：把分母的 $i$ 趕走。\n\n① 共軛（conjugate）：只把虛部的符號掉轉，實部不動：\n{{math:0}}\n② 為甚麼乘共軛就有效？因為一個複數與它的共軛相乘是平方差，$i^{2}$ 換成 $-1$ 之後，$i$ 會全部消失：\n{{math:1}}\n分母變成一個實數 $c^{2}+d^{2}$（一定是正數），除法就變成「實數除實數」。\n③ 所以所有複數除法都用同一條公式：\n{{math:2}}\n分母寫 $c^{2}+d^{2}$ 就夠，不需要逐項展開 $(c+di)(c-di)$ —— 這條小公式就是捷徑。\n\n例：$\\dfrac{2-i}{1+i}$（分母 $1+i$ 的共軛是 $1-i$）\n{{math:3}}\n分母 $(1+i)(1-i)=1^{2}+1^{2}=2$；分子 $(2-i)(1-i)=1-3i$；最後實部與虛部都要一齊除以 $2$。\n{{math:4}}\n驗算：把答案乘回分母，應該得回分子。這個檢查只要幾秒，但可以避免「做錯了也不知道」。"
     },
     "math": [
      "\\overline{a+bi}=a-bi,\\qquad \\overline{3+2i}=3-2i",
      "(a+bi)(a-bi)=a^{2}-(bi)^{2}=a^{2}-b^{2}i^{2}=a^{2}+b^{2}",
      "\\frac{a+bi}{c+di}=\\frac{(a+bi)(c-di)}{(c+di)(c-di)}=\\frac{(a+bi)(c-di)}{c^{2}+d^{2}}",
      "\\frac{2-i}{1+i}=\\frac{(2-i)(1-i)}{(1+i)(1-i)}=\\frac{1-3i}{2}=\\frac{1}{2}-\\frac{3}{2}i",
      "\\left(\\frac{1}{2}-\\frac{3}{2}i\\right)(1+i)=\\frac{(1-3i)(1+i)}{2}=\\frac{4-2i}{2}=2-i"
     ],
     "vocab": [
      {
       "en": "conjugate",
       "zh": "共軛"
      },
      {
       "en": "denominator",
       "zh": "分母"
      },
      {
       "en": "verify",
       "zh": "驗算"
      }
     ],
     "warn": {
      "zh": "共軛只改虛部的符號：$3+2i$ 的共軛是 $3-2i$（實部的 $3$ 不變）。三個最常見的錯：① 只乘分子，忘記分母也要乘共軛；② 展開分子時漏了 $i^{2}=-1$ 那一步；③ 算完分子就停手，忘記整個分子還要用 $c^{2}+d^{2}$ 逐項除。"
     }
    },
    {
     "id": "ws05b-c5",
     "topic": "ws05b",
     "title": {
      "zh": "複數題的流程與常見錯誤",
      "en": "Checklist & Common Mistakes"
     },
     "body": {
      "zh": "處理複數題的固定四步：\n1. 化簡高次方：先把每個 $i^{n}$ 化成 $i$、$-1$、$-i$ 或 $1$（指數除以 4 看餘數：餘 1 為 $i$、餘 2 為 $-1$、餘 3 為 $-i$、整除為 $1$）。\n2. 消去分母虛數：若有分數，分子分母同乘分母的共軛，分母直接化為實數 $c^{2}+d^{2}$（做法與例子見上一張卡「複數除法」）。\n3. 分堆整理：把式子整理成「實部 + (虛部)$i$」的標準形態。\n4. 按題目指令作答：\n　・求實部(real part)／虛部(imaginary part) → 直接讀出該數字（虛部不含 $i$）；\n　・$z$ 是實數(real number) → 令虛部 $=0$；\n　・$z$ 是純虛數(purely imaginary) → 令實部 $=0$；\n　・實部與虛部相等 → 令實部等於虛部，先求出未知常數。\n\nDSE 致命陷阱：像 DSE 2022 Paper 2 Q35 這類題目，考評局絕不會提示你最後一步，選項中更必定放上常數 $k$ 的值作為陷阱。很多同學辛苦解出 $k$ 就當作答完，忘記把 $k$ 代回求出真正的實部，作答前請務必再看一次題目最後問的是哪一個數值。"
     },
     "math": [],
     "vocab": [
      {
       "en": "real number",
       "zh": "實數（虛部為 0）"
      },
      {
       "en": "purely imaginary",
       "zh": "純虛數（實部為 0）"
      },
      {
       "en": "distractor",
       "zh": "干擾選項（誘餌答案）"
      }
     ],
     "warn": {
      "zh": "求出未知數 $k$ 通常只是中途步驟。看清題目問的是 $k$ 本身、實部、虛部還是整個複數，否則極易選中考評局安排的誘餌選項。"
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws05b-ex01",
     "type": "long",
     "topic": "ws05b",
     "unit": 1,
     "subtopic": "complex-numbers",
     "difficulty": 1,
     "code": "WS5B-EX1",
     "source": "WS05 銜接示範（自編）· 複數入門三步",
     "stem": {
      "text": "Work out the following."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find the value of $i^{23}$.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Write down the real part and the imaginary part of the complex number $5-3i$.",
       "marks": 2
      },
      {
       "label": "(c)",
       "text": "Simplify $2i(3-4i)$ and express the answer in the form $a+bi$.",
       "marks": 2
      }
     ],
     "marks": 6,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 第 1 步 · 指數除以 4 看餘數"
        },
        "math": "23\\div 4=5\\ \\text{餘}\\ 3\\ \\Rightarrow\\ i^{23}=i^{3}=-i",
        "zh": "(a) $i$ 的次方每 $4$ 次循環一次，所以先做除法：$23\\div4=5$ 餘 $3$。餘 $3$ 對應 $i^{3}=-i$，所以 $i^{23}=-i$。",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "(a) 第 2 步 · 用「4 的倍數 + 餘數」核對"
        },
        "math": "i^{23}=(i^{4})^{5}\\cdot i^{3}=1\\cdot(-i)=-i",
        "zh": "把 $23$ 拆成 $4\\times5+3$：$(i^{4})^{5}=1$，剩下 $i^{3}=-i$，結果一致。DSE 的複數題第一步通常就是「把所有 $i$ 的高次方化成 $i$、$-1$、$-i$ 或 $1$」。",
        "marking": "(1A)",
        "highlight": [
         "-i"
        ]
       },
       {
        "title": {
         "zh": "(b) 第 1 步 · 寫成 $a+bi$ 再讀"
        },
        "math": "5-3i=5+(-3)i\\ \\Rightarrow\\ \\text{實部}=5,\\quad \\text{虛部}=-3",
        "zh": "(b) 把 $5-3i$ 寫成標準形態 $a+bi$：$a=5$、$b=-3$。所以實部是 $5$，虛部是 $-3$（負號要一齊寫）。",
        "marking": "(1A)",
        "highlight": [
         "5"
        ]
       },
       {
        "title": {
         "zh": "(b) 第 2 步 · 虛部不含 $i$"
        },
        "math": "\\text{虛部}=-3\\ \\ (\\text{不是 }-3i)",
        "zh": "最常見的錯是答「虛部 $=-3i$」。虛部是 $i$ 前面的那個數，不含 $i$。",
        "marking": "(1A)",
        "highlight": [
         "-3"
        ]
       },
       {
        "title": {
         "zh": "(c) 第 1 步 · 逐項相乘"
        },
        "math": "2i(3-4i)=6i-8i^{2}",
        "zh": "(c) 用分配律逐項相乘：$2i\\times3=6i$、$2i\\times(-4i)=-8i^{2}$。",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "(c) 第 2 步 · 用 $i^{2}=-1$ 化簡"
        },
        "math": "=6i-8(-1)=6i+8=8+6i",
        "zh": "$-8i^{2}=-8(-1)=+8$，所以答案是 $8+6i$（實部寫在前面，這是 $a+bi$ 的標準寫法）。",
        "marking": "(1A)",
        "highlight": [
         "8+6i"
        ]
       }
      ],
      "traps": [],
      "tip": {
       "zh": "複數題的固定三步：① 用「÷ 4 餘數」把所有 $i$ 的高次方化簡；② 把結果整理成 $a+bi$；③ 才看題目要什麼（實部、虛部、還是整個複數）。"
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws05b-ex02",
     "type": "long",
     "topic": "ws05b",
     "unit": 1,
     "subtopic": "complex-numbers",
     "difficulty": 2,
     "code": "WS5B-EX2",
     "source": "WS05 Example 4 · [HKDSE 2022 Paper 2 Q35]",
     "stem": {
      "text": "Let $z=19-ki^{9}+2ki^{14}-6i^{20}-11i^{23}$, where $k$ is a real number."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Express $z$ in the form $a+bi$ in terms of $k$, where $a$ and $b$ are real numbers.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Hence, if the real part and the imaginary part of $z$ are equal, find the real part of $z$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 逐個化簡 $i$ 的次方"
        },
        "math": "i^{9}=i,\\quad i^{14}=-1,\\quad i^{20}=1,\\quad i^{23}=-i",
        "zh": "餘數分別是 $1$、$2$、$0$、$3$，所以對應 $i$、$-1$、$1$、$-i$。這一步錯了，後面全部都會錯。",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整理成 $a+bi$"
        },
        "math": "z=19-k(i)+2k(-1)-6(1)-11(-i)=(13-2k)+(11-k)i",
        "zh": "逐項代入：$-ki^{9}=-ki$、$2ki^{14}=-2k$、$-6i^{20}=-6$、$-11i^{23}=+11i$。實部 $=19-2k-6=13-2k$；虛部 $=-k+11=11-k$。",
        "marking": "(1A)",
        "highlight": [
         "(13-2k)+(11-k)i"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 令實部等於虛部"
        },
        "math": "13-2k=11-k\\ \\Rightarrow\\ k=2",
        "zh": "「實部與虛部相等」就是 $13-2k=11-k$。把 $-k$ 移到左邊、$13$ 移到右邊：$13-11=2k-k$，所以 $k=2$。",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回去求實部"
        },
        "math": "\\text{real part}=13-2(2)=9",
        "zh": "題目要的是實部，所以把 $k=2$ 代入：$13-2(2)=9$。原題的正確答案是 $9$（選項 D），而選項 C 的 $2$ 正是中途求出的 $k$ —— 官方題解特別寫上 “Do not forget to find the real part of $z$”，就是提醒大家不要在這裡停下。",
        "marking": "(1A)",
        "highlight": [
         "9"
        ]
       }
      ],
      "traps": [],
      "tip": {
       "zh": "看清楚題目要求：是要解未知數? 還是求其他數值，如實部 (real part)、虛部 (imaginary part)還是整個複數 (complex number)?"
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws05b-ex03",
     "type": "long",
     "topic": "ws05b",
     "unit": 1,
     "subtopic": "complex-numbers",
     "difficulty": 3,
     "code": "WS5B-EX3",
     "source": "WS05 Practice 4",
     "stem": {
      "text": "Let $z=-6k-17i^{6}+9i^{8}-7i^{13}-5ki^{19}$, where $k$ is a real number."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Express $z$ in the form $a+bi$ in terms of $k$, where $a$ and $b$ are real numbers.",
       "marks": 2
      },
      {
       "label": "(b)",
       "text": "Hence, if the real part and the imaginary part of $z$ are equal, find the real part of $z$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 化簡四個 $i$ 的次方"
        },
        "math": "i^{6}=-1,\\quad i^{8}=1,\\quad i^{13}=i,\\quad i^{19}=-i",
        "zh": "餘數：$6\\to2$、$8\\to0$、$13\\to1$、$19\\to3$，所以四個次方分別是 $-1$、$1$、$i$、$-i$。這一步是複數題的固定起手式。",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整理成 $a+bi$"
        },
        "math": "z=-6k-17(-1)+9(1)-7(i)-5k(-i)=26-6k+(-7+5k)i",
        "zh": "逐項代入：$-17i^{6}=+17$、$9i^{8}=9$、$-7i^{13}=-7i$、$-5ki^{19}=+5ki$。實部 $=-6k+17+9=26-6k$；虛部 $=-7+5k$。",
        "marking": "(1A)",
        "highlight": [
         "(26-6k)+(5k-7)i"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · 令實部等於虛部求 $k$"
        },
        "math": "26-6k=-7+5k\\ \\Rightarrow\\ 33=11k\\ \\Rightarrow\\ k=3",
        "zh": "把 $-6k$ 移到右邊、$-7$ 移到左邊：$26+7=5k+6k$，即 $33=11k$，所以 $k=3$。",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回去取實部"
        },
        "math": "\\text{real part}=26-6(3)=8",
        "zh": "把 $k=3$ 代入實部：$26-18=8$，所以實部是 $8$。記住：求出 $k$ 只是中途站，題目問的是 real part。",
        "marking": "(1A)",
        "highlight": [
         "8"
        ]
       }
      ],
      "traps": [],
      "tip": {
       "zh": "與示範同一套路：化 $i$ 的次方 → 整理成 $a+bi$ → 用條件求 $k$ → 代回去取題目要的量。四步缺一不可。"
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws05b-ex04",
     "type": "long",
     "topic": "ws05b",
     "unit": 1,
     "subtopic": "complex-numbers",
     "difficulty": 2,
     "code": "WS5B-EX4",
     "source": "WS05 銜接示範（自編）· 複數除法（分母有理化）",
     "stem": {
      "text": "Consider the complex number $\\dfrac{4+2i}{1-i}$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Express it in the form $a+bi$, where $a$ and $b$ are real numbers.",
       "marks": 3
      },
      {
       "label": "(b)",
       "text": "Using the result of (a), show that $\\dfrac{4+2i}{1-i}\\times(1-3i)$ is a real number.",
       "marks": 3
      }
     ],
     "marks": 6,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 第 1 步 · 分子分母同乘分母的共軛",
         "en": ""
        },
        "math": "\\frac{4+2i}{1-i}=\\frac{4+2i}{1-i}\\times\\frac{1+i}{1+i}",
        "zh": "(a) 分母有一個 $i$，要先把 $i$ 消掉。方法是分子、分母同時乘「分母的共軛」—— 把 $1-i$ 改成 $1+i$。為什麼用 $1+i$？因為 $(1-i)(1+i)$ 是平方差，$i$ 會消失。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "(a) 第 2 步 · 分別處理分子與分母",
         "en": ""
        },
        "math": "=\\frac{(4+2i)(1+i)}{1^{2}-i^{2}}=\\frac{4+4i+2i+2i^{2}}{1-(-1)}=\\frac{2+6i}{2}",
        "zh": "分母：$(1-i)(1+i)=1^{2}-i^{2}=1-(-1)=2$，變成一個實數（$i$ 成功消掉）。分子：$(4+2i)(1+i)=4+4i+2i+2i^{2}=4+6i-2=2+6i$。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "(a) 第 3 步 · 化成 $a+bi$",
         "en": ""
        },
        "math": "=\\frac{2}{2}+\\frac{6}{2}i=1+3i",
        "zh": "分母是 $2$，實部與虛部都要一齊除 $2$：$1+3i$。所以 $a=1$、$b=3$。驗算：$(1+3i)(1-i)=1-i+3i-3i^{2}=1+2i+3=4+2i$ ✓。",
        "en": "",
        "highlight": [
         "1+3i"
        ],
        "marking": "1A"
       },
       {
        "title": {
         "zh": "(b) 第 1 步 · 用 (a) 的結果相乘",
         "en": ""
        },
        "math": "(1+3i)(1-3i)",
        "zh": "(b) 由 (a) 知道 $\\dfrac{4+2i}{1-i}=1+3i$，所以題目要的乘積就是 $(1+3i)(1-3i)$。這是「Hence」題：一定要用 (a) 的答案，不要再重算一次。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "(b) 第 2 步 · 用平方差展開",
         "en": ""
        },
        "math": "=1^{2}-(3i)^{2}=1-9i^{2}=1-(-9)=10",
        "zh": "兩個括號是共軛，用平方差最快：$1^{2}-(3i)^{2}$。留意 $(3i)^{2}=9i^{2}=-9$，所以是減一個負數：$1-(-9)=10$。",
        "en": "",
        "marking": "1M"
       },
       {
        "title": {
         "zh": "(b) 第 3 步 · 寫結論",
         "en": ""
        },
        "math": "=10,\\ \\text{沒有 }i\\ \\Rightarrow\\ \\text{是實數}",
        "zh": "結果 $10$ 完全沒有 $i$（虛部是 $0$），所以是實數，證畢。要做這一類「證明是實數」的題，最後一句一定要寫出「虛部 $=0$」或「答案沒有 $i$」。",
        "en": "",
        "highlight": [
         "10"
        ],
        "marking": "1A"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "複數除法只有一招：分子分母同乘分母的共軛（$1-i\\to1+i$、$2+3i\\to2-3i$）。共軛相乘是平方差，$i$ 必然消失，分母一定變成實數。",
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
      "id": "eph-ws05b-w01",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-W01",
      "source": "WS05 過渡題（自編）· Level 1 記住 i² = −1",
      "stem": {
       "text": "$i^{2}=$"
      },
      "options": {
       "A": "$-1$",
       "B": "$1$",
       "C": "$-i$",
       "D": "$i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 想起 $i$ 的定義",
          "en": "Step 1 · Recall the definition of i"
         },
         "math": "i^{2}=-1",
         "zh": "複數這一課只有一條定義要背：$i^{2}=-1$。$i$ 就是「平方之後等於 $-1$」的那個數（也寫成 $i=\\sqrt{-1}$）。",
         "en": "By definition, i² = -1."
        },
        {
         "title": {
          "zh": "第 2 步 · 直接讀出答案",
          "en": "Step 2 · Read off the answer"
         },
         "math": "i^{2}=-1\\ \\Rightarrow\\ \\text{答案 A}",
         "zh": "$i^{2}$ 是一個實數 $-1$，不是 $i$ 也不是 $-i$，所以答案選 A。",
         "en": "-1. Answer: A.",
         "highlight": [
          "-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$1$ 是 $i^{4}$ 的值（$i^{4}=(i^{2})^{2}=(-1)^{2}=1$），不是 $i^{2}$。",
         "en": "That is the value of i⁴."
        },
        {
         "opt": "C",
         "zh": "$-i$ 是 $i^{3}=i^{2}\\cdot i=-i$ 的值。$i^{2}$ 已經沒有 $i$ 了。",
         "en": "That is the value of i³."
        }
       ],
       "tip": {
        "zh": "四個值一定要背到滾瓜爛熟：$i^{1}=i$、$i^{2}=-1$、$i^{3}=-i$、$i^{4}=1$。之後所有 $i$ 的次方都由它們推出。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-w02",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-W02",
      "source": "WS05 過渡題（自編）· Level 2 用「÷ 4 餘數」求 i 的次方",
      "stem": {
       "text": "$i^{7}=$"
      },
      "options": {
       "A": "$i$",
       "B": "$-1$",
       "C": "$-i$",
       "D": "$1$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 指數除以 4，看餘數",
          "en": "Step 1 · Divide the index by 4"
         },
         "math": "7\\div 4=1\\ \\text{餘}\\ 3",
         "zh": "$i$ 的次方每 $4$ 次循環一次，所以第一步是把指數除以 $4$，看餘數是多少：$7\\div4=1$ 餘 $3$。",
         "en": "7 divided by 4 leaves remainder 3."
        },
        {
         "title": {
          "zh": "第 2 步 · 用餘數對照表",
          "en": "Step 2 · Use the remainder"
         },
         "math": "i^{7}=i^{3}=-i",
         "zh": "餘 $3$ 對應 $i^{3}=-i$，所以 $i^{7}=-i$，答案選 C。（核對：$i^{7}=i^{4}\\cdot i^{3}=1\\times(-i)=-i$ ✓）",
         "en": "-i. Answer: C.",
         "highlight": [
          "-i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$i$ 是餘 $1$ 的結果（例如 $i^{5}=i$）；餘 $3$ 應該是 $-i$。",
         "en": "Remainder 3 is -i, not i."
        },
        {
         "opt": "D",
         "zh": "$1$ 是餘 $0$（被 $4$ 整除）的結果，例如 $i^{8}=1$。",
         "en": "Remainder 0 gives 1."
        }
       ],
       "tip": {
        "zh": "餘數對照表：餘 $1\\to i$、餘 $2\\to-1$、餘 $3\\to-i$、餘 $0\\to 1$。寫在題目旁邊再作答，錯的機會大減。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-w03",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-W03",
      "source": "WS05 過渡題（自編）· Level 3 認得實部與虛部",
      "stem": {
       "text": "For the complex number $4-3i$, the imaginary part is"
      },
      "options": {
       "A": "$3$",
       "B": "$-3$",
       "C": "$-3i$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先寫成 $a+bi$ 的形態",
          "en": "Step 1 · Write it as a + bi"
         },
         "math": "4-3i=4+(-3)i",
         "zh": "把 $4-3i$ 寫成標準形態 $a+bi$：$a=4$、$b=-3$。看清楚「$+(-3)i$」這個寫法，負號是跟著 $3$ 的。",
         "en": "a = 4 and b = -3."
        },
        {
         "title": {
          "zh": "第 2 步 · 讀出虛部（不含 $i$）",
          "en": "Step 2 · The imaginary part has no i"
         },
         "math": "\\text{實部}=4,\\qquad \\text{虛部}=-3",
         "zh": "實部是 $4$；虛部是 $i$ 前面那個數，即 $-3$（負號要一齊寫）。答案選 B。",
         "en": "-3. Answer: B.",
         "highlight": [
          "-3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$-3i$ 把 $i$ 也寫進答案了 —— 虛部只是 $i$ 前面的係數，不含 $i$。",
         "en": "The imaginary part does not include i."
        },
        {
         "opt": "A",
         "zh": "$3$ 漏了負號：$4-3i$ 是寫成 $4+(-3)i$，所以虛部是 $-3$。",
         "en": "The minus sign belongs to the imaginary part."
        }
       ],
       "tip": {
        "zh": "每次遇到「求實部／虛部」都先把它改寫成 $a+bi$（連正負號），再讀 $a$ 與 $b$，就不會出錯。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05b-w04",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "WS5B-W04",
      "source": "WS05 過渡題（自編）· Level 4 複數加法：實部還實部、虛部還虛部",
      "stem": {
       "text": "$(2+3i)+(5-i)=$"
      },
      "options": {
       "A": "$7+2i$",
       "B": "$7+4i$",
       "C": "$3+2i$",
       "D": "$7-2i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 分兩堆相加",
          "en": "Step 1 · Add real parts and imaginary parts"
         },
         "math": "=(2+5)+(3+(-1))i",
         "zh": "複數加法就是「分堆」：實部與實部相加（$2+5=7$），虛部與虛部相加（$3+(-1)=2$）。兩堆互不影響。",
         "en": "Real with real, imaginary with imaginary."
        },
        {
         "title": {
          "zh": "第 2 步 · 寫成 $a+bi$",
          "en": "Step 2 · Write the answer as a + bi"
         },
         "math": "=7+2i",
         "zh": "所以答案是 $7+2i$，選 A。（逐項寫也可以：$2+3i+5-i=2+5+3i-i=7+2i$。）",
         "en": "7 + 2i. Answer: A.",
         "highlight": [
          "7+2i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$3+2i$ 是實部算成 $2-5=-3$（把加法當減法）。",
         "en": "Subtracted the real parts."
        },
        {
         "opt": "D",
         "zh": "$7-2i$ 是虛部算錯：$-i$ 的係數是 $-1$，$3+(-1)=2$，不是 $-2$。",
         "en": "Wrong sign for the imaginary part."
        }
       ],
       "tip": {
        "zh": "加減法永遠是「實部一堆、虛部一堆」。先把兩堆分別寫好，再合成 $a+bi$，比心算安全。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q01",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-Q01",
      "source": "EPH WS05 暖身題 11 · 選項自擬",
      "stem": {
       "text": "Simplify $5i^{5}+6i^{6}$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$6+5i$",
       "B": "$-6+5i$",
       "C": "$-6-5i$",
       "D": "$5-6i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先把 $i$ 的次方化成四個值之一",
          "en": "Step 1 · Reduce each power of i"
         },
         "math": "i^{5}=i,\\qquad i^{6}=-1",
         "zh": "$5\\div4$ 餘 $1$，所以 $i^{5}=i$；$6\\div4$ 餘 $2$，所以 $i^{6}=i^{2}=-1$。餘數對照表：$1\\to i$、$2\\to-1$、$3\\to-i$、$0\\to1$。",
         "en": "Looking at the remainder when the index is divided by 4."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入並整理成 $a+bi$",
          "en": "Step 2 · Write the answer as a + bi"
         },
         "math": "5i^{5}+6i^{6}=5i+6(-1)=-6+5i",
         "zh": "實部是 $-6$，虛部是 $5$，所以答案是 $-6+5i$，選 B。",
         "en": "-6 + 5i. Answer: B.",
         "highlight": [
          "-6+5i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$6+5i$ 是把 $i^{6}$ 當成 $+1$（餘數 $2$ 應該是 $-1$）。",
         "en": "i⁶ should be -1."
        },
        {
         "opt": "C",
         "zh": "$-6-5i$ 是把 $i^{5}$ 當成 $-i$（餘數 $1$ 應該是 $i$）。",
         "en": "i⁵ should be i."
        }
       ],
       "tip": {
        "zh": "先逐個查出 $i^{n}$ 的值（最好寫在題目旁邊），才做加減。一邊查一邊算最容易掉符號。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q02",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-Q02",
      "source": "EPH WS05 暖身題 12 · 選項自擬",
      "stem": {
       "text": "Simplify $i^{8}-2i^{13}+3i^{19}$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$1+5i$",
       "B": "$1-2i$",
       "C": "$1-5i$",
       "D": "$-1-5i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 化 $i$ 的次方",
          "en": "Step 1 · Reduce each power of i"
         },
         "math": "i^{8}=1,\\quad i^{13}=i,\\quad i^{19}=-i",
         "zh": "$8\\div4$ 餘 $0$ → $i^{8}=1$；$13\\div4$ 餘 $1$ → $i^{13}=i$；$19\\div4$ 餘 $3$ → $i^{19}=i^{3}=-i$。",
         "en": "Remainders 0, 1 and 3."
        },
        {
         "title": {
          "zh": "第 2 步 · 逐項代入並合併",
          "en": "Step 2 · Substitute and collect"
         },
         "math": "=1-2(i)+3(-i)=1-2i-3i=1-5i",
         "zh": "實部只有 $1$；虛部是 $-2i-3i=-5i$。所以答案是 $1-5i$，選 C。",
         "en": "1 - 5i. Answer: C.",
         "highlight": [
          "1-5i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$1+5i$ 是把 $i^{13}$ 當成 $-i$（餘數 $1$ 應該是 $i$），虛部就變成 $+2i+3i=5i$。",
         "en": "i¹³ should be +i, not -i."
        },
        {
         "opt": "D",
         "zh": "$-1-5i$ 是把 $i^{8}$ 當成 $-1$（餘數 $0$ 應該是 $1$）。",
         "en": "i⁸ should be 1."
        }
       ],
       "tip": {
        "zh": "餘數 $0$ 最容易記錯：被 $4$ 整除時 $i^{n}=1$，不是 $0$ 也不是 $-1$。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05b-q03",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-Q03",
      "source": "EPH WS05 暖身題 13 · 選項自擬",
      "stem": {
       "text": "Simplify $9i^{9}+6i^{10}-3i^{15}-i^{24}$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$-7+12i$",
       "B": "$7+12i$",
       "C": "$-7-12i$",
       "D": "$7-12i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 四個次方一齊化簡",
          "en": "Step 1 · Reduce the four powers"
         },
         "math": "i^{9}=i,\\quad i^{10}=-1,\\quad i^{15}=-i,\\quad i^{24}=1",
         "zh": "餘數分別是 $1$、$2$、$3$、$0$，對應 $i$、$-1$、$-i$、$1$。",
         "en": "Remainders 1, 2, 3, 0."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入，小心係數的負號",
          "en": "Step 2 · Substitute carefully"
         },
         "math": "=9i+6(-1)-3(-i)-1",
         "zh": "$-3i^{15}=-3(-i)=+3i$（兩個負號相乘變正），$-i^{24}=-1$。這兩處是最容易掉符號的地方。",
         "en": "-3(-i) = +3i."
        },
        {
         "title": {
          "zh": "第 3 步 · 分開實部與虛部相加",
          "en": "Step 3 · Collect real and imaginary parts"
         },
         "math": "=-6-1+9i+3i=-7+12i",
         "zh": "實部 $-6-1=-7$；虛部 $9+3=12$。所以答案是 $-7+12i$，選 A。",
         "en": "-7 + 12i. Answer: A.",
         "highlight": [
          "-7+12i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$7+12i$ 是實部算成 $6+1=7$（把 $-1$ 與 $-i^{24}$ 的符號都讀成正）。",
         "en": "Signs of the real part flipped."
        },
        {
         "opt": "D",
         "zh": "$7-12i$ 是實部與虛部的正負號全部掉轉（$-3i^{15}$ 當成 $-3i$、$-i^{24}$ 當成 $+1$）。",
         "en": "All signs flipped."
        }
       ],
       "tip": {
        "zh": "逐項寫成一行（例如 $=9i-6+3i-1$）之後才合併，比心算安全得多。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q04",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-Q04",
      "source": "EPH WS05 暖身題 14 · 選項自擬",
      "stem": {
       "text": "Simplify $(4+5i)-(6-7i)$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$2+12i$",
       "B": "$-2-2i$",
       "C": "$2-12i$",
       "D": "$-2+12i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆括號，每一項都要變號",
          "en": "Step 1 · Remove the bracket"
         },
         "math": "=4+5i-6+7i",
         "zh": "減一個括號等於把括號內每一項都變號：$-(6-7i)=-6+7i$。$-7i$ 變成 $+7i$ 是最多人漏掉的一步。",
         "en": "-(6 - 7i) = -6 + 7i."
        },
        {
         "title": {
          "zh": "第 2 步 · 分開實部與虛部",
          "en": "Step 2 · Collect like parts"
         },
         "math": "=(4-6)+(5+7)i=-2+12i",
         "zh": "實部 $4-6=-2$；虛部 $5+7=12$。所以答案是 $-2+12i$，選 D。",
         "en": "-2 + 12i. Answer: D.",
         "highlight": [
          "-2+12i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-2-2i$ 是減括號時只變了 $6$ 的符號，忘記 $-7i$ 也要變成 $+7i$（$5-7=-2$）。",
         "en": "Only the real part was negated."
        },
        {
         "opt": "A",
         "zh": "$2+12i$ 是把 $4-6$ 算成 $+2$（實部符號錯），虛部反而是對的。",
         "en": "Real part sign error."
        }
       ],
       "tip": {
        "zh": "括號前面是減號，就逐項變號再合併。心算最容易只改第一個數，所以建議寫出來。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q05",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "WS5B-Q05",
      "source": "EPH WS05 暖身題 15 · 選項自擬",
      "stem": {
       "text": "Simplify $(1-2i)(3+4i)$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$11+2i$",
       "B": "$11-2i$",
       "C": "$3-8i$",
       "D": "$-5-2i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 逐項展開",
          "en": "Step 1 · Expand term by term"
         },
         "math": "=3+4i-6i-8i^{2}",
         "zh": "像展開 $(a+b)(c+d)$ 一樣：$1\\times3=3$、$1\\times4i=4i$、$-2i\\times3=-6i$、$-2i\\times4i=-8i^{2}$。",
         "en": "Four products."
        },
        {
         "title": {
          "zh": "第 2 步 · 用 $i^{2}=-1$ 化簡",
          "en": "Step 2 · Use i² = -1"
         },
         "math": "=3-2i+8=11-2i",
         "zh": "$-8i^{2}=-8(-1)=+8$，併回實部：$3+8=11$；虛部 $4i-6i=-2i$。所以答案是 $11-2i$，選 B。",
         "en": "11 - 2i. Answer: B.",
         "highlight": [
          "11-2i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$11+2i$ 是虛部算成 $4i+6i$（把 $-6i$ 的符號讀成正）。",
         "en": "Imaginary part sign error."
        },
        {
         "opt": "D",
         "zh": "$-5-2i$ 是沒有用 $i^{2}=-1$：$-8i^{2}$ 被當成 $-8$ 留在實部（$3-8=-5$）。",
         "en": "Forgot i² = -1."
        }
       ],
       "tip": {
        "zh": "複數乘法的最後一步一定是「把 $i^{2}$ 換成 $-1$」。少了這一步，實部的數值一定錯。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05b-q06",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "WS5B-Q06",
      "source": "EPH WS05 Q26 · [HKDSE 2012 Paper 2 Q35]",
      "stem": {
       "text": "$i^{7}(\\alpha i-6)=$"
      },
      "options": {
       "A": "$\\alpha+6i$",
       "B": "$\\alpha-6i$",
       "C": "$-\\alpha+6i$",
       "D": "$-\\alpha-6i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先化簡 $i^{7}$",
          "en": "Step 1 · Reduce i⁷"
         },
         "math": "i^{7}=-i",
         "zh": "$7\\div4$ 餘 $3$，所以 $i^{7}=i^{3}=-i$。",
         "en": "Remainder 3 gives -i."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開",
          "en": "Step 2 · Expand"
         },
         "math": "=(-i)(\\alpha i-6)=-\\alpha i^{2}+6i",
         "zh": "逐項相乘：$(-i)\\times\\alpha i=-\\alpha i^{2}$；$(-i)\\times(-6)=+6i$。",
         "en": "Multiply term by term."
        },
        {
         "title": {
          "zh": "第 3 步 · 用 $i^{2}=-1$ 化簡",
          "en": "Step 3 · Simplify"
         },
         "math": "=-\\alpha(-1)+6i=\\alpha+6i",
         "zh": "$-\\alpha i^{2}=-\\alpha(-1)=\\alpha$，所以答案是 $\\alpha+6i$，選 A。",
         "en": "α + 6i. Answer: A.",
         "highlight": [
          "\\alpha+6i"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$\\alpha-6i$ 是 $(-i)\\times(-6)$ 算成 $-6i$（兩個負號相乘應該是正）。",
         "en": "Two negatives make a positive."
        },
        {
         "opt": "D",
         "zh": "$-\\alpha-6i$ 同時犯了兩個符號錯：把 $-\\alpha i^{2}$ 當成 $-\\alpha$（忘記 $i^{2}=-1$ 會把符號反轉），又把 $(-i)\\times(-6)$ 算成 $-6i$。",
         "en": "Two sign errors at once."
        }
       ],
       "tip": {
        "zh": "先算出 $i^{7}=-i$ 才開始展開；展開時逐項寫，讓 $i^{2}$ 那一項有機會被換成 $-1$。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q07",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "WS5B-Q07",
      "source": "EPH WS05 Q27 · [HKDSE Practice Paper 2 Q34]",
      "stem": {
       "text": "If $k$ is a real number, then the real part of $(k-4i)(4-i)$ is"
      },
      "options": {
       "A": "$4k$",
       "B": "$k-4$",
       "C": "$4k+4$",
       "D": "$4k-4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 逐項展開",
          "en": "Step 1 · Expand"
         },
         "math": "(k-4i)(4-i)=4k-ki-16i+4i^{2}",
         "zh": "$k\\times4=4k$、$k\\times(-i)=-ki$、$-4i\\times4=-16i$、$-4i\\times(-i)=+4i^{2}$。",
         "en": "Four products."
        },
        {
         "title": {
          "zh": "第 2 步 · 整理成 $a+bi$",
          "en": "Step 2 · Write as a + bi"
         },
         "math": "=4k-4+(-k-16)i",
         "zh": "$4i^{2}=4(-1)=-4$，併入實部：實部 $=4k-4$，虛部 $=-k-16$。",
         "en": "Real part 4k − 4."
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出實部",
          "en": "Step 3 · Read off the real part"
         },
         "math": "\\text{real part}=4k-4",
         "zh": "題目只問實部，所以答案是 $4k-4$，選 D。",
         "en": "4k - 4. Answer: D.",
         "highlight": [
          "4k-4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$4k+4$ 是把 $4i^{2}$ 當成 $+4$（忘記 $i^{2}=-1$，符號應該變負）。",
         "en": "4i² = -4, not +4."
        },
        {
         "opt": "A",
         "zh": "$4k$ 是只讀了 $k\\times4$ 這一項，沒有把 $4i^{2}$ 得來的常數項併入。",
         "en": "Only one term was collected."
        }
       ],
       "tip": {
        "zh": "「求 real part／imaginary part」的題，先把整個乘積整理成 $a+bi$，再讀你要的那一個，不要只算一半。",
        "en": ""
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q08",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "WS5B-Q08",
      "source": "EPH WS05 Q31 · [HKDSE 2013 Paper 2 Q36]",
      "stem": {
       "text": "The real part of $3i^{18}+2i^{19}-3i^{20}-5i^{21}$ is"
      },
      "options": {
       "A": "$-7$",
       "B": "$-6$",
       "C": "$0$",
       "D": "$6$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 化四個次方",
          "en": "Step 1 · Reduce the four powers"
         },
         "math": "i^{18}=-1,\\quad i^{19}=-i,\\quad i^{20}=1,\\quad i^{21}=i",
         "zh": "$18,19,20,21$ 除以 $4$ 的餘數是 $2,3,0,1$，所以對應 $-1$、$-i$、$1$、$i$。",
         "en": "Remainders 2, 3, 0, 1."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入並整理成 $a+bi$",
          "en": "Step 2 · Substitute and collect"
         },
         "math": "=3(-1)+2(-i)-3(1)-5(i)=-3-2i-3-5i=-6-7i",
         "zh": "實部 $-3-3=-6$；虛部 $-2-5=-7$。所以 $z=-6-7i$。",
         "en": "z = -6 - 7i."
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出實部",
          "en": "Step 3 · Read off the real part"
         },
         "math": "\\text{real part}=-6",
         "zh": "題目問實部，所以答案是 $-6$，選 B。",
         "en": "-6. Answer: B.",
         "highlight": [
          "-6"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-7$ 是虛部的數值，看錯了題目問實部還是虛部。",
         "en": "That is the imaginary part."
        },
        {
         "opt": "D",
         "zh": "$6$ 是實部正負號掉轉（$3i^{18}=-3$ 與 $-3i^{20}=-3$ 都是負數）。",
         "en": "Real part sign flipped."
        }
       ],
       "tip": {
        "zh": "先寫下四個 $i^{n}$ 的值，逐項代入之後把實部、虛部分成兩堆；題目問哪一堆就讀哪一堆。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05b-q09",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 3,
      "code": "WS5B-Q09",
      "source": "EPH WS05 Q34 · [HKDSE 2015 Paper 2 Q35]",
      "stem": {
       "text": "Let $z=(k-4)i^{11}+(k-9)i^{14}$, where $k$ is a real number. If $z$ is a real number, then $k=$"
      },
      "options": {
       "A": "$-9$",
       "B": "$-4$",
       "C": "$4$",
       "D": "$9$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 化 $i$ 的次方",
          "en": "Step 1 · Reduce the powers of i"
         },
         "math": "i^{11}=-i,\\qquad i^{14}=-1",
         "zh": "$11\\div4$ 餘 $3$ → $i^{11}=-i$；$14\\div4$ 餘 $2$ → $i^{14}=-1$。",
         "en": "Remainders 3 and 2."
        },
        {
         "title": {
          "zh": "第 2 步 · 整理成 $a+bi$",
          "en": "Step 2 · Write z as a + bi"
         },
         "math": "z=(k-4)(-i)+(k-9)(-1)=9-k+(4-k)i",
         "zh": "展開：實部 $=-(k-9)=9-k$；虛部 $=-(k-4)=4-k$。要寫成 $a+bi$ 才能判斷 $z$ 是不是實數。",
         "en": "Real part 9 − k, imaginary part 4 − k."
        },
        {
         "title": {
          "zh": "第 3 步 · 「$z$ 是實數」＝ 虛部為 0",
          "en": "Step 3 · z real means imaginary part 0"
         },
         "math": "4-k=0\\ \\Rightarrow\\ k=4",
         "zh": "實數的虛部等於 $0$，所以 $4-k=0$，得 $k=4$，答案選 C。",
         "en": "k = 4. Answer: C.",
         "highlight": [
          "k=4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-4$ 是把 $-(k-4)$ 展開成 $-k-4$（括號內每一項都要變號），再令 $k+4=0$ 得出的值。",
         "en": "Expansion sign error."
        },
        {
         "opt": "A",
         "zh": "$-9$ 是誤用「實部 $=0$」（那是純虛數的條件），而且展開 $-(k-9)$ 時寫成 $-k-9$，令 $-k-9=0$ 得 $k=-9$。",
         "en": "Used the condition for a purely imaginary number."
        }
       ],
       "tip": {
        "zh": "「$z$ 是實數」→ 虛部 $=0$；「$z$ 是純虛數」→ 實部 $=0$。兩個條件不要調換。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q10",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 3,
      "code": "WS5B-Q10",
      "source": "EPH WS05 Q36 · [HKDSE 2022 Paper 2 Q35]",
      "stem": {
       "text": "Let $z=9i+3ki^{7}+2i^{20}+2ki^{28}+3i^{30}$, where $k$ is a real number. If the real part and the imaginary part of $z$ are equal, then the real part of $z$ is"
      },
      "options": {
       "A": "$-1$",
       "B": "$2$",
       "C": "$3$",
       "D": "$5$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 化四個次方",
          "en": "Step 1 · Reduce the powers"
         },
         "math": "i^{7}=-i,\\quad i^{20}=1,\\quad i^{28}=1,\\quad i^{30}=-1",
         "zh": "餘數：$7\\to3$、$20\\to0$、$28\\to0$、$30\\to2$，對應 $-i$、$1$、$1$、$-1$。",
         "en": "Remainders 3, 0, 0, 2."
        },
        {
         "title": {
          "zh": "第 2 步 · 整理成 $a+bi$",
          "en": "Step 2 · Write z as a + bi"
         },
         "math": "z=9i+3k(-i)+2(1)+2k(1)+3(-1)=(2k-1)+(9-3k)i",
         "zh": "逐項代入：$3ki^{7}=-3ki$、$2i^{20}=2$、$2ki^{28}=2k$、$3i^{30}=-3$。實部 $=2+2k-3=2k-1$；虛部 $=9-3k$。",
         "en": "Real part 2k − 1, imaginary part 9 − 3k."
        },
        {
         "title": {
          "zh": "第 3 步 · 令實部等於虛部求 $k$",
          "en": "Step 3 · Equate real and imaginary parts"
         },
         "math": "2k-1=9-3k\\ \\Rightarrow\\ 5k=10\\ \\Rightarrow\\ k=2",
         "zh": "把 $-3k$ 移到左邊、$-1$ 移到右邊：$2k+3k=9+1$，所以 $5k=10$，$k=2$。",
         "en": "k = 2."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回去取實部",
          "en": "Step 4 · Find the real part"
         },
         "math": "\\text{real part}=2(2)-1=3",
         "zh": "題目問的是實部，記得把 $k=2$ 代回去：$2(2)-1=3$，答案選 C。求出 $k$ 就停手是最常見的失分。",
         "en": "3. Answer: C.",
         "highlight": [
          "3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$2$ 是 $k$ 的數值 —— 「real part = imaginary part」只是求出 $k$ 的中途步驟，還要代回去才拿到實部。",
         "en": "That is k, not the real part."
        },
        {
         "opt": "A",
         "zh": "$-1$ 是只算了常數部分 $2-3$（漏掉 $2k$ 那一項就代入）。",
         "en": "The 2k term was dropped."
        }
       ],
       "tip": {
        "zh": "這種題有兩層答案：先求 $k$，再求題目指定的量。選項裡幾乎一定會放「$k$ 的值」來引你上釣。",
        "en": ""
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q13",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "WS5B-Q13",
      "source": "WS05 補充題（自編）· 純虛數條件（實部 = 0）",
      "stem": {
       "text": "Let $z=(3k-6)+(2k+5)i$, where $k$ is a real number. If $z$ is a purely imaginary number, then $k=$"
      },
      "options": {
       "A": "$2$",
       "B": "$-2$",
       "C": "$-\\frac{5}{2}$",
       "D": "$\\frac{5}{2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認清「純虛數」的條件",
          "en": "Step 1 · The purely imaginary condition"
         },
         "math": "z=a+bi\\ \\text{是純虛數}\\ \\Leftrightarrow\\ a=0\\ \\text{而且}\\ b\\neq 0",
         "zh": "純虛數（purely imaginary）＝ 整個複數只剩下 $i$ 的部分，也就是「實部 $=0$」。要留意：如果虛部同時也是 $0$，它就是實數 $0$，不算純虛數 —— 所以完整的條件是「實部 $=0$ 而且虛部 $\\neq 0$」。"
        },
        {
         "title": {
          "zh": "第 2 步 · 令實部等於 0",
          "en": "Step 2 · Set the real part to 0"
         },
         "math": "3k-6=0\\ \\Rightarrow\\ 3k=6\\ \\Rightarrow\\ k=2",
         "zh": "先看清哪一坨是實部：$z=(3k-6)+(2k+5)i$，實部就是 $3k-6$。純虛數要求實部 $=0$，所以 $3k-6=0$，移項得 $3k=6$，即 $k=2$。"
        },
        {
         "title": {
          "zh": "第 3 步 · 檢查虛部不是 0",
          "en": "Step 3 · Check the imaginary part is not 0"
         },
         "math": "2(2)+5=9\\neq 0",
         "zh": "把 $k=2$ 代入虛部：$2(2)+5=9\\neq 0$，符合「虛部不可以是 $0$」的要求，所以 $k=2$ 成立，答案選 A。出卷人特別喜歡用這一步來區分「實數」與「純虛數」，所以計完記得檢查另一部分。"
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$-\\frac{5}{2}$ 是令虛部為 $0$（$2k+5=0$）得出來的 —— 那是「$z$ 是實數」的條件，不是純虛數。兩個條件剛剛好相反，這是這一題最大的陷阱。",
         "en": "-5/2 comes from setting the imaginary part to 0 (the condition for a real number)."
        },
        {
         "opt": "B",
         "zh": "$-2$ 是解 $3k-6=0$ 時移項出錯（把 $3k=6$ 寫成 $3k=-6$）。",
         "en": "Sign error when solving 3k − 6 = 0."
        },
        {
         "opt": "D",
         "zh": "$\\frac{5}{2}$ 也是解 $2k+5=0$ 時符號寫錯（得 $k=\\frac{5}{2}$）—— 而且那條方程根本不是純虛數的條件。",
         "en": "5/2 comes from the wrong equation with a sign slip."
        }
       ],
       "tip": {
        "zh": "純虛數題：先令實部 $=0$ 求出 $k$，再檢查虛部是否 $\\neq 0$（若虛部也是 $0$，那就不是純虛數）。選項裡幾乎一定放「令虛部 $=0$」得出來的那個數引你上釣。",
        "en": ""
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws05b-q11",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "WS5B-Q11",
      "source": "WS05 補充題（自編）· 複數除法（乘分母的共軛）",
      "stem": {
       "text": "Simplify $\\dfrac{3+2i}{1-i}$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$1+5i$",
       "B": "$\\frac{1}{2}+\\frac{5}{2}i$",
       "C": "$\\frac{5}{2}-\\frac{1}{2}i$",
       "D": "$\\frac{5}{2}+\\frac{5}{2}i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認出分母的共軛",
          "en": "Step 1 · Multiply by the conjugate"
         },
         "math": "\\frac{3+2i}{1-i}=\\frac{3+2i}{1-i}\\times\\frac{1+i}{1+i}",
         "zh": "分母是 $1-i$，它的共軛是 $1+i$（只把虛部的符號掉轉）。分子、分母同時乘 $1+i$：等於乘 $1$，值不變，但分母的 $i$ 會消失。分子一定要一齊乘，只乘分母就改變了整個數。",
         "en": "Multiply top and bottom by 1 + i."
        },
        {
         "title": {
          "zh": "第 2 步 · 分母直接用 $c^{2}+d^{2}$",
          "en": "Step 2 · The denominator becomes real"
         },
         "math": "(1-i)(1+i)=1^{2}+1^{2}=2",
         "zh": "分母 $(1-i)(1+i)$ 是平方差，$i^{2}=-1$ 之後 $i$ 全部消失。不用逐項展開，直接用 $c^{2}+d^{2}=1^{2}+1^{2}=2$ 這條捷徑更快，而且不會掉符號。",
         "en": "Denominator = 1² + 1² = 2."
        },
        {
         "title": {
          "zh": "第 3 步 · 展開分子",
          "en": "Step 3 · Expand the numerator"
         },
         "math": "(3+2i)(1+i)=3+3i+2i+2i^{2}=3+5i-2=1+5i",
         "zh": "逐項相乘：$3\\times1=3$、$3\\times i=3i$、$2i\\times1=2i$、$2i\\times i=2i^{2}$。最後一項 $2i^{2}=2(-1)=-2$，所以實部是 $3-2=1$，虛部是 $3i+2i=5i$。",
         "en": "Numerator = 1 + 5i."
        },
        {
         "title": {
          "zh": "第 4 步 · 整個分子都要除",
          "en": "Step 4 · Divide both parts"
         },
         "math": "\\frac{1+5i}{2}=\\frac{1}{2}+\\frac{5}{2}i",
         "zh": "分母是 $2$，實部與虛部都要一齊除 $2$：$\\frac{1}{2}+\\frac{5}{2}i$，即 $a=\\frac{1}{2}$、$b=\\frac{5}{2}$，答案選 B。只除實部、或者完全忘記除，是這一題最常見的失分。",
         "en": "Answer: 1/2 + 5/2 i  → B.",
         "highlight": [
          "\\frac{1}{2}+\\frac{5}{2}i"
         ]
        },
        {
         "title": {
          "zh": "第 5 步 · 驗算",
          "en": "Step 5 · Check by multiplying back"
         },
         "math": "\\left(\\frac{1}{2}+\\frac{5}{2}i\\right)(1-i)=\\frac{(1+5i)(1-i)}{2}=\\frac{6+4i}{2}=3+2i",
         "zh": "把答案乘回分母 $(1-i)$：$(1+5i)(1-i)=1-i+5i-5i^{2}=6+4i$，除以 $2$ 就得回分子 $3+2i$，所以答案正確。這個驗算只要幾秒，考試時值得做。",
         "en": "Multiplying back gives the numerator."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$1+5i$ 是展開分子之後忘記除以分母 $2$ —— 分子與分母都要一齊除。",
         "en": "Forgot to divide by 2."
        },
        {
         "opt": "C",
         "zh": "$\\frac{5}{2}-\\frac{1}{2}i$ 是乘錯共軛：乘了 $1-i$（自己）而不是 $1+i$，分母的 $i$ 就消不掉。",
         "en": "Multiplied by the wrong conjugate."
        },
        {
         "opt": "D",
         "zh": "$\\frac{5}{2}+\\frac{5}{2}i$ 是把 $2i^{2}$ 當成 $+2$（忘記 $i^{2}=-1$）：實部就由 $1$ 變成 $3+2=5$。",
         "en": "Treated 2i² as +2."
        }
       ],
       "tip": {
        "zh": "複數除法只有一招：分子、分母同乘分母的共軛，分母之後直接用 $c^{2}+d^{2}$ 寫出。最後一步別忘記整個分子要逐項除。",
        "en": ""
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws05b-q12",
      "type": "mc",
      "topic": "ws05b",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 3,
      "code": "WS5B-Q12",
      "source": "WS05 補充題（自編）· 兩項共軛分母相加",
      "stem": {
       "text": "Simplify $\\dfrac{1}{2+i}+\\dfrac{1}{2-i}$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$\\frac{4}{5}$",
       "B": "$\\frac{2}{5}$",
       "C": "$\\frac{4}{5}+\\frac{2}{5}i$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 第一項：乘共軛",
          "en": "Step 1 · First term"
         },
         "math": "\\frac{1}{2+i}=\\frac{1\\cdot(2-i)}{(2+i)(2-i)}=\\frac{2-i}{2^{2}+1^{2}}=\\frac{2-i}{5}",
         "zh": "先處理第一項。分母是 $2+i$，共軛是 $2-i$，分子分母同乘它。分母用 $c^{2}+d^{2}=2^{2}+1^{2}=5$ 直接寫出，所以 $\\frac{1}{2+i}=\\frac{2-i}{5}$。",
         "en": "1/(2+i) = (2−i)/5."
        },
        {
         "title": {
          "zh": "第 2 步 · 第二項：一樣做",
          "en": "Step 2 · Second term"
         },
         "math": "\\frac{1}{2-i}=\\frac{1\\cdot(2+i)}{(2-i)(2+i)}=\\frac{2+i}{5}",
         "zh": "第二項分母是 $2-i$，共軛是 $2+i$。分母一樣是 $2^{2}+1^{2}=5$ —— 一對共軛的分母，$c^{2}+d^{2}$ 是同一個數，不會一個 $5$ 一個 $-5$。",
         "en": "1/(2−i) = (2+i)/5."
        },
        {
         "title": {
          "zh": "第 3 步 · 相加：留意 $i$ 會抵消",
          "en": "Step 3 · Add them up"
         },
         "math": "\\frac{2-i}{5}+\\frac{2+i}{5}=\\frac{(2+2)+(-1+1)i}{5}=\\frac{4}{5}",
         "zh": "分母相同，直接把分子相加：實部 $2+2=4$；虛部 $-1+1=0$ —— $i$ 完全抵消，答案是 $\\frac{4}{5}$，選 A。這是共軛分母相加最漂亮的地方：虛部一定抵消。",
         "en": "The imaginary parts cancel; the answer is 4/5.",
         "highlight": [
          "\\frac{4}{5}"
         ]
        },
        {
         "title": {
          "zh": "第 4 步 · 寫成 $a+bi$ 的完整形式",
          "en": "Step 4 · Write it as a + bi"
         },
         "math": "\\frac{4}{5}=\\frac{4}{5}+0i",
         "zh": "$\\frac{4}{5}+0i$ 就是實數 $\\frac{4}{5}$（虛部 $=0$）。題目要「in the form $a+bi$」，$b=0$ 也是答案的一部分；相反，如果題目問「是實數嗎」，答「虛部 $=0$」就有分。",
         "en": "b = 0, so it is a real number."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$\\frac{2}{5}$ 是把兩個分母相加成 $10$（$5+5$）再約簡 —— 同分母相加時分母不變，只有分子相加。",
         "en": "Added the denominators."
        },
        {
         "opt": "C",
         "zh": "$\\frac{4}{5}+\\frac{2}{5}i$ 是沒有把兩項的 $i$ 合併：$-1$ 與 $+1$ 其實抵消了，虛部應該是 $0$。",
         "en": "The imaginary parts cancel, so b = 0."
        },
        {
         "opt": "D",
         "zh": "$4$ 是只把兩個分子相加（$2+2$）就當答案是 $4$，完全忘記每一項都已經有分母 $5$。",
         "en": "The denominator 5 was dropped."
        }
       ],
       "tip": {
        "zh": "見到 $\\frac{1}{a+bi}$ 就是「乘共軛」的訊號，分母會變成 $a^{2}+b^{2}$。兩項共軛分母相加時，虛部一定抵消 —— 答案是實數也不要覺得奇怪。",
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
  "long": 4,
  "cards": 5,
  "pages": 6
 }
};
