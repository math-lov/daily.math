// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS02 = {
 "id": "ws02",
 "stage": 1,
 "unit": 0,
 "subtopic": "simultaneous-equations",
 "source": "EPH All-Round L5 · Worksheet 2",
 "name": {
  "zh": "二元一次方程（聯立方程）",
  "en": "Linear Equations in Two Unknowns"
 },
 "intro": {
  "zh": "這一課學兩個解方程組的方法：代入法與加減消去法，再用它們處理文字應用題。DSE Paper 1 幾乎年年有一題文字題（4–5 分），Paper 2 也常考；最容易失分的地方不是解方程，而是「設未知數」與「最後答問題問的那個量」。",
  "en": ""
 },
 "lessons": [
  {
   "id": "ws02-1",
   "title": {
    "zh": "兩個方法與應用題",
    "en": "Two methods + word problems"
   },
   "cards": [
    {
     "id": "ws02-c1",
     "topic": "ws02",
     "title": {
      "zh": "什麼是二元一次方程組？",
      "en": "What are Simultaneous Linear Equations?"
     },
     "body": {
      "zh": "二元一次方程（linear equation in two unknowns）有兩個未知數，而且每個未知數的次數都是 1。例如：\n{{math:0}}\n一條方程自己定不出唯一答案 —— 例如以下幾組 $(x,y)$ 都令它成立：\n{{math:1}}\n所以題目一定會給「兩條」方程，組成二元一次方程組（simultaneous equations）：\n{{math:2}}\n兩條方程要「同時」成立，符合的 $(x,y)$ 就只有一組。\n解方程組有兩個標準方法：代入法（substitution）與加減消去法（elimination）。兩種都要練熟，因為有些題目用其中一種會快很多 —— 例如一條方程已經寫成 $y=3x$ 時，代入法最快；兩條方程的係數剛好相同或相反時，加減消去法最快。\n驗算方法：把找到的 $(x,y)$ 代回「兩條」方程，兩條都要成立才算對。"
     },
     "math": [
      "2x+3y=12",
      "x=3,\\ y=2;\\qquad x=6,\\ y=0;\\qquad x=0,\\ y=4",
      "\\begin{cases} 2x+3y=12 \\\\ x-y=1 \\end{cases}"
     ],
     "vocab": [
      {
       "en": "simultaneous equations",
       "zh": "聯立方程（方程組）"
      },
      {
       "en": "unknown",
       "zh": "未知數"
      },
      {
       "en": "solution",
       "zh": "解"
      }
     ],
     "warn": {
      "zh": "只代回其中一條方程不算驗算完整 —— 一定要兩條都代入。若只滿足一條，多數是計算中途出錯（特別是移項時的符號）。"
     }
    },
    {
     "id": "ws02-c2",
     "topic": "ws02",
     "title": {
      "zh": "方法一：代入法",
      "en": "Method 1 · Substitution"
     },
     "body": {
      "zh": "代入法（substitution）的做法：先從其中一條方程，把一個未知數寫成「另一個未知數的式子」，再把它整條代入另一條方程 —— 這樣只剩一個未知數，就變成我們已經會解的一元一次方程。\n個案 1 · 已經有一個未知數是主項（subject，即已經寫成 $y=\\ldots$ 或 $x=\\ldots$）：\n{{math:0}}\n因為 (1) 說「$y$ 等於 $3x$」，所以把 (2) 中的 $y$ 換成 $3x$：\n{{math:1}}\n求出 $x$ 之後，記得代回 (1)（或 (2)）求 $y$。只寫 $x$ 不算完成。\n個案 2 · 沒有一條方程已經寫成主項，要先整理：\n$2x+3y=12$ …… (1)，$x-y=1$ …… (2)\n第 1 步：由 (2) 移項（把 $-y$ 移到右邊變 $+y$），寫出：\n{{math:2}}\n第 2 步：把 (3) 代入 (1)，即把 (1) 中的 $x$ 換成 $y+1$：\n{{math:3}}\n第 3 步：代回 (3) 求 $x$，所以答案是 $x=3$、$y=2$。\n兩個個案的關鍵都是：代入的是「整條式」，所以一定要加括號。為什麼？因為 (1) 的 $x$ 前面有係數 $2$ —— $2\\times(y+1)=2y+2$，但 $2\\times y+1=2y+1$，兩者完全不同；漏了括號就會全題失分。\n驗算：$(x,y)=(3,2)$ 代回 (1)：$2(3)+3(2)=12$ ✓；代回 (2)：$3-2=1$ ✓。"
     },
     "math": [
      "y=3x\\ \\cdots(1),\\qquad x+y=12\\ \\cdots(2)",
      "x+3x=12\\ \\Rightarrow\\ 4x=12\\ \\Rightarrow\\ x=3,\\qquad y=3(3)=9",
      "x=y+1\\ \\cdots(3)",
      "2(y+1)+3y=12\\ \\Rightarrow\\ 2y+2+3y=12\\ \\Rightarrow\\ 5y=10\\ \\Rightarrow\\ y=2,\\qquad x=2+1=3"
     ],
     "vocab": [
      {
       "en": "substitution",
       "zh": "代入法"
      },
      {
       "en": "subject",
       "zh": "主項（寫成 y = … 的形式）"
      },
      {
       "en": "bracket",
       "zh": "括號"
      }
     ],
     "warn": {
      "zh": "代入時不加括號是最常見的錯：$2x+3y$ 中的 $y$ 換成 $y+1$，要寫 $2x+3(y+1)$ 而不是 $2x+3y+1$。"
     }
    },
    {
     "id": "ws02-c3",
     "topic": "ws02",
     "title": {
      "zh": "方法二：加減消去法",
      "en": "Method 2 · Elimination"
     },
     "body": {
      "zh": "加減消去法（elimination）的想法：把兩條方程相加或相減，讓其中一個未知數「消失」（係數變成 0），就變成一元一次方程。記住這條規則：\n・兩個係數是一對相反數（如 $+1$ 與 $-1$、$+10$ 與 $-10$）→ 相加，該未知數消失；\n・兩個係數相同（如 $+2$ 與 $+2$）→ 相減，該未知數消失；\n・兩個係數都不同 → 先各乘一個數，把它們「乘成」相同或相反。\n① 係數是一對相反數 → 相加：\n$3x-y=-6$ …… (1)，$2x+y=1$ …… (2)（$y$ 的係數是 $-1$ 與 $+1$）。\n{{math:0}}\n相加時 $-y+y=0$，$y$ 消失，剩 $5x=-5$，得 $x=-1$；再代回 (2)：$2(-1)+y=1$，$y=3$。\n② 係數相同 → 相減：\n若第二條是 $2x-y=1$ …… (2)（現在兩條的 $y$ 係數都是 $-1$）：\n{{math:1}}\n相減時 $-y-(-y)=0$，$y$ 消失；代回 (2) 得 $y=-15$。\n③ 係數都不同 → 先乘：\n例如 $5a+6b=27$ …… (1) 與 $17a-12b=27$ …… (2)。$b$ 的係數是 $6$ 與 $-12$，把 (1) 乘 2：\n{{math:2}}\n現在第一條的 $+12b$ 與第二條的 $-12b$ 是相反數，相加即可消去 $b$。"
     },
     "math": [
      "(1)+(2):\\ (3x-y)+(2x+y)=-6+1\\ \\Rightarrow\\ 5x=-5\\ \\Rightarrow\\ x=-1,\\ y=3",
      "(1)-(2):\\ (3x-y)-(2x-y)=-6-1\\ \\Rightarrow\\ x=-7,\\ y=-15",
      "(1)\\times 2:\\ 10a+12b=54,\\qquad (2):\\ 17a-12b=27"
     ],
     "vocab": [
      {
       "en": "elimination",
       "zh": "消去法"
      },
      {
       "en": "opposite numbers",
       "zh": "相反數"
      },
      {
       "en": "coefficient",
       "zh": "係數"
      }
     ],
     "warn": {
      "zh": "相減時要把**整條**方程變號：$(3x-y)-(2x-y)$ 中的 $-y-(-y)=0$ 才對。忘記變號會令 $y$ 消不去，越算越亂。"
     }
    },
    {
     "id": "ws02-c4",
     "topic": "ws02",
     "title": {
      "zh": "應用題四步與百分數寫法",
      "en": "Word Problems · Four Steps & Percentages"
     },
     "body": {
      "zh": "文字題（word problem）固定四步：\n第 1 步 · 設未知數（identify the unknowns）：用兩個字母代表題目涉及的兩個量，並寫清楚「哪個字母代表什麼」。題目最後要問的那個量設成 $x$ 最方便 —— 求出來就可以直接答。\n第 2 步 · 列方程（set up equations）：題目每一句對應一條方程，共兩條。關鍵字要圈出來：「是…的 2 倍」、「多 80%」、「給」、「下車」、「進場」。\n第 3 步 · 解方程（solve）：用代入法或加減消去法。\n第 4 步 · 答（write the answer）：先回頭讀問題問什麼，加上單位；如果問「總數」、「相差」，要多做一步加減。\n百分數的固定寫法（年年都考）：\n{{math:0}}\n即「比 $x$ 多 80%」是乘 $1.8$、「比 $x$ 少 25%」是乘 $0.75$。例如「男生比女生多 80%」，設女生是 $x$、男生是 $y$，就要寫成：\n{{math:1}}\n「A 給 B 一些」這類句子要記住：兩邊同時改變 —— A 減少、B 增加，只改一邊是最常見的錯。"
     },
     "math": [
      "1+80\\%=1.8,\\qquad 1-25\\%=0.75",
      "y=1.8x\\quad(\\text{male}=1.8\\times\\text{female})"
     ],
     "vocab": [
      {
       "en": "word problem",
       "zh": "文字應用題"
      },
      {
       "en": "percentage",
       "zh": "百分數"
      },
      {
       "en": "more / less than",
       "zh": "比…多／少"
      }
     ],
     "warn": {
      "zh": "「多 80%」是乘以 $1.8$，不是加 $80\\%$ 或乘以 $0.8$。另外「A 給 B 一些」這類句子兩邊同時改變：A 要減、B 要加，忘記其中一邊是最常見的錯。"
     }
    },
    {
     "id": "ws02-c5",
     "topic": "ws02",
     "title": {
      "zh": "驗算與常見失分位",
      "en": "Checking & Common Mistakes"
     },
     "body": {
      "zh": "做完每一題都用 20 秒驗算，可以救回不少分：\n① 把 $(x,y)$ 代回「兩條」方程，兩條都要成立；\n② 把答案代回「題目的文字」（例如「男生是女生的 1.8 倍」）看是否合理；\n③ 用另一個方法再算一次（代入法 ↔ 加減消去法），兩個方法得到同一答案就幾乎肯定對。\n四個最常見的失分位：\n1. 代入時沒加括號：把 $2(y+1)$ 寫成 $2y+1$；\n2. 相減時只變了第一項的符號（整條方程每一項都要變號）；\n3. 題目問 $y$，卻把 $x$ 當答案（連等題的選項經常同時放 $x$ 與 $y$ 的值）；\n4. 求出單價、單一量之後，忘記題目問的是「總數」或「相差」。\n考試時間分配建議：文字題列方程用 1 分鐘、解方程 1 分鐘、驗算 20 秒，剩下的時間用來重讀題目問什麼。"
     },
     "math": [],
     "vocab": [
      {
       "en": "check by substitution",
       "zh": "代回驗算"
      },
      {
       "en": "total",
       "zh": "總數"
      },
      {
       "en": "difference",
       "zh": "相差"
      }
     ],
     "warn": {
      "zh": "考試時驗算只需 20 秒：把 $(x,y)$ 代回兩條方程。省這一步，往往就是 4 分變 1 分的原因。"
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws02-ex01",
     "type": "long",
     "topic": "ws02",
     "unit": 0,
     "subtopic": "simultaneous-equations",
     "difficulty": 2,
     "code": "WS2-EX1",
     "source": "WS02 Example 1 · [HKDSE 2021 Paper 1 Q5]",
     "stem": {
      "text": "The number of chocolate bars owned by Henry is 2 times that owned by Winka. If Henry gives 6 of his chocolate bars to Winka, then the number of chocolate bars owned by Winka is 5 times that owned by Henry. Find the total number of chocolate bars owned by Henry and Winka."
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數",
         "en": ""
        },
        "math": "x:\\ \\text{Henry},\\quad y:\\ \\text{Winka}",
        "zh": "設 $x$ 與 $y$ 分別是 Henry 與 Winka 原有的巧克力數。文字題第一步一定是設未知數，而且要寫清楚每個字母代表誰 —— 之後每一句話都會用到它們。",
        "en": "Let x and y be the original numbers of chocolate bars owned by Henry and Winka."
       },
       {
        "title": {
         "zh": "第 2 步 · 把兩句話寫成兩條方程",
         "en": ""
        },
        "math": "x=2y\\ \\cdots(1),\\qquad 5(x-6)=y+6\\ \\cdots(2)",
        "zh": "「Henry 是 Winka 的 2 倍」→ $x=2y$；「Henry 給 6 個給 Winka 後，Winka 是 Henry 的 5 倍」→ 兩人同時改變：Henry 變 $x-6$、Winka 變 $y+6$，所以 $y+6=5(x-6)$。第二句是最容易錯的地方，兩邊都要改。",
        "en": "x = 2y; after giving away 6 bars, y + 6 = 5(x - 6).",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 用代入法解方程",
         "en": ""
        },
        "math": "5(2y-6)=y+6\\ \\Rightarrow\\ 10y-30=y+6\\ \\Rightarrow\\ 9y=36\\ \\Rightarrow\\ y=4",
        "zh": "由 (1) 得 $x=2y$，整條代入 (2)：$5(2y-6)=y+6$（代入要加括號）。展開：$10y-30=y+6$；把 $y$ 移在一起：$9y=36$，得 $y=4$。再代回 (1)：$x=2(4)=8$。",
        "en": "Substitute x = 2y into (2): 9y = 36, so y = 4 and x = 8.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回答題目問的量",
         "en": ""
        },
        "math": "x+y=2(4)+4=12",
        "zh": "題目問的是「總數」，不是 Henry 或 Winka 各自的數目 —— 所以要算 $x+y=8+4=12$。這一步 1A，也是最常被漏掉的一步。",
        "en": "The question asks for the total: x + y = 12.",
        "marking": "(1A)"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "文字題寫完方程後，先回頭讀「問題問什麼」。求總數就一定要多做一步加減，只求出 $x$ 或 $y$ 通常只得一半分。",
       "en": "Always re-read what the question asks for — total or difference needs one more step."
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws02-ex02",
     "type": "long",
     "topic": "ws02",
     "unit": 0,
     "subtopic": "simultaneous-equations",
     "difficulty": 3,
     "code": "WS2-EX2",
     "source": "WS02 Example 2 · [HKDSE 2023 Paper 1 Q5]",
     "stem": {
      "text": "On a bus, the number of male passengers is 80% more than the number of female passengers. If 56 male passengers get off the bus, then the number of female passengers is 80% more than the number of male passengers. Find the number of female passengers on the bus."
     },
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數",
         "en": ""
        },
        "math": "x:\\ \\text{female},\\quad y:\\ \\text{original male}",
        "zh": "設 $x$ = 車上女乘客數目、$y$ = 原有男乘客數目。題目最後問女乘客，所以把 $x$ 設成答案那個量，最後直接回答 $x$ 就可以。",
        "en": "Let x be the number of female passengers and y the original number of male passengers."
       },
       {
        "title": {
         "zh": "第 2 步 · 把百分數寫成乘法",
         "en": ""
        },
        "math": "y=(1+80\\%)x=1.8x\\ \\cdots(1)",
        "zh": "「男乘客比女乘客多 80%」→ 男 $=(1+80\\%)\\times$ 女，即 $y=1.8x$。「多 80%」是乘 $1.8$，不是乘 $0.8$，也不是加 $80$。",
        "en": "Male is 80% more than female: y = 1.8x.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 第二句要留意「誰改變了」",
         "en": ""
        },
        "math": "x=(1+80\\%)(y-56)=1.8(y-56)\\ \\cdots(2)",
        "zh": "56 名男乘客下車後，男乘客變成 $y-56$；此時女乘客比男乘客多 80%，所以 $x=1.8(y-56)$。只改一邊或把 56 加到女乘客身上都會全題失分。",
        "en": "After 56 men get off: x = 1.8(y - 56).",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代入消去 y，解出 x",
         "en": ""
        },
        "math": "x=1.8(1.8x-56)=3.24x-100.8\\ \\Rightarrow\\ 2.24x=100.8\\ \\Rightarrow\\ x=45",
        "zh": "把 (1) 代入 (2) 消去 $y$，得到只含 $x$ 的一元一次方程：$x=3.24x-100.8$，移項得 $2.24x=100.8$，$x=45$。所以車上有 45 名女乘客。",
        "en": "Substitute (1) into (2): 2.24x = 100.8, so x = 45.",
        "marking": "(1M: for getting a linear equation in one unknown) (1A)"
       }
      ],
      "traps": [],
      "tip": {
       "zh": "百分數文字題固定次序：先寫「誰比誰多幾 %」的乘法式（$1+80\\%=1.8$），再處理「有人下車／進場」的加減，最後才代入。次序亂了很容易把 56 放錯位置。",
       "en": "Write the percentage relation first, then apply the change (getting off / entering)."
      }
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": [
    [
     {
      "id": "eph-ws02-w01",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 1,
      "code": "WS2-W01",
      "source": "WS02 過渡題（自編）· Level 1 符號相反：兩式相加",
      "stem": {
       "text": "If $x+y=7$ and $x-y=3$, then $x=$"
      },
      "options": {
       "A": "$2$",
       "B": "$4$",
       "C": "$5$",
       "D": "$10$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先看係數：是相反數",
          "en": "Step 1 · Spot the opposite coefficients"
         },
         "math": "x+y=7\\ \\cdots(1),\\qquad x-y=3\\ \\cdots(2)",
         "zh": "解方程組最重要的一秒：不要急著算，先看未知數前面的係數。這裡第一條是 $+y$、第二條是 $-y$，它們是一對「相反數」。原則：符號相反就「兩式相加」，這個未知數就會自動抵消。",
         "en": "Notice that +y and -y are opposites. Adding the two equations eliminates y instantly."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩式相加求出 x",
          "en": "Step 2 · Add to find x"
         },
         "math": "(1)+(2):\\ (x+x)+(y-y)=7+3\\ \\Rightarrow\\ 2x=10\\ \\Rightarrow\\ x=5",
         "zh": "左邊相加：$x+x=2x$，而 $y$ 與 $-y$ 抵消為 0；右邊相加：$7+3=10$。得 $2x=10$，兩邊除以 2 得 $x=5$，所以答案選 C。注意這裡完全不需要乘任何數字。",
         "en": "Adding both sides gives 2x = 10, so x = 5. Answer: C.",
         "highlight": [
          "x=5"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$2$ 是 $y$ 的值（代回 $5+y=7$ 得 $y=2$）。題目問的是 $x$ —— 每次作答前都要圈出題目最後要的那個字母。",
         "en": "2 is the value of y. Always check which unknown is asked for."
        },
        {
         "opt": "D",
         "zh": "$10$ 是相加後右邊的結果（$2x=10$），忘記最後要除以係數 $2$。見到 $2x=10$，一定要再做一步 $x=5$。",
         "en": "10 is 2x; you still have to divide by 2."
        }
       ],
       "tip": {
        "zh": "建立第一步的直覺：看到符號相反（$+y$ 與 $-y$）就「相加」；看到符號完全相同（$+x$ 與 $+x$）就「相減」。這兩種情況都不需要乘任何數字。",
        "en": "Opposite signs cancel by adding; identical signs cancel by subtracting."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-w02",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 1,
      "code": "WS2-W02",
      "source": "WS02 過渡題（自編）· Level 2 代入法：整塊代入",
      "stem": {
       "text": "If $y=2x$ and $3x+y=15$, then $y=$"
      },
      "options": {
       "A": "$3$",
       "B": "$5$",
       "C": "$6$",
       "D": "$10$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 題目已給主項，用代入法",
          "en": "Step 1 · A subject is already given"
         },
         "math": "y=2x\\ \\cdots(1),\\qquad 3x+y=15\\ \\cdots(2)",
         "zh": "如果題目已經寫成「$y=\\ldots$」或「$x=\\ldots$」，這就是代入法最強的信號：第 (1) 條告訴你「$y$ 的替身就是 $2x$」，於是把第 (2) 條裡面的 $y$ 整塊換成 $2x$。",
         "en": "Since y is already the subject, substitute 2x into the second equation."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入後只剩一個未知數",
          "en": "Step 2 · Substitute and solve for x"
         },
         "math": "3x+(2x)=15\\ \\Rightarrow\\ 5x=15\\ \\Rightarrow\\ x=3",
         "zh": "把 $y$ 換掉後整條式只剩 $x$：$3x+2x=15$，合併同類項得 $5x=15$，除以 5 得 $x=3$。代入時習慣加一個括號（$3x+(2x)$），日後遇到負號或係數就不會出錯。",
         "en": "Substituting gives 5x = 15, so x = 3."
        },
        {
         "title": {
          "zh": "第 3 步 · 代回求 y（題目問的是 y）",
          "en": "Step 3 · Find y"
         },
         "math": "y=2(3)=6",
         "zh": "題目問的是 $y$，不是 $x$！代回第 (1) 條：$y=2\\times3=6$，所以答案選 C。求出 $x$ 之後沒有代回，是這類題目最常見的失分位。",
         "en": "The question asks for y: y = 2(3) = 6. Answer: C.",
         "highlight": [
          "y=6"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$3$ 是中途算出的 $x$ 值。考評局很喜歡把「中途求出的另一個未知數」放在選項裡，所以一定要圈住題目最後要問的字母。",
         "en": "3 is the value of x — a classic distractor."
        },
        {
         "opt": "B",
         "zh": "$5$ 是把 $3x+y=15$ 誤當成 $5x=15$ 之後再當成答案的結果（$5$ 其實是 $x$ 的係數，不是 $x$）。",
         "en": "5 is the coefficient, not the value of x."
        }
       ],
       "tip": {
        "zh": "代入時在替身外面加括號，例如 $3x+(2x)=15$。如果替身前面有負號或係數，括號能保證正負號絕對不出錯。",
        "en": "Always wrap the substituted expression in brackets to avoid sign errors."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-w03",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-W03",
      "source": "WS02 過渡題（自編）· Level 3 只乘一條方程消去",
      "stem": {
       "text": "If $2x+y=11$ and $x+2y=7$, then $x=$"
      },
      "options": {
       "A": "$1$",
       "B": "$3$",
       "C": "$5$",
       "D": "$6$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 鎖定目標，只動一條方程",
          "en": "Step 1 · Match one pair of coefficients"
         },
         "math": "2x+y=11\\ \\cdots(1),\\qquad x+2y=7\\ \\cdots(2)",
         "zh": "題目問 $x$，所以我們想讓 $y$ 消失。第 (1) 條的 $y$ 係數是 $1$、第 (2) 條是 $2$ —— 只要把第 (1) 條整條乘 $2$，$y$ 的係數就變成 $2$，與第 (2) 條相同。這種情況只需乘一條方程，比兩條都要乘的題目簡單得多。",
         "en": "To eliminate y, multiply equation (1) by 2 so that both y-coefficients become 2."
        },
        {
         "title": {
          "zh": "第 2 步 · 整條乘 2（連右邊常數）",
          "en": "Step 2 · Multiply every term by 2"
         },
         "math": "(1)\\times2:\\ 4x+2y=22\\ \\cdots(3)",
         "zh": "整條方程每一項都要乘 2：$2x\\times2=4x$、$y\\times2=2y$，右邊常數 $11\\times2=22$。最常犯的錯是漏乘等號右邊。",
         "en": "Multiply every term by 2: 4x + 2y = 22."
        },
        {
         "title": {
          "zh": "第 3 步 · 兩式相減消去 y",
          "en": "Step 3 · Subtract to eliminate y"
         },
         "math": "(3)-(2):\\ (4x+2y)-(x+2y)=22-7\\ \\Rightarrow\\ 3x=15\\ \\Rightarrow\\ x=5",
         "zh": "兩條方程的 $y$ 係數都是 $+2y$（符號相同，所以用「相減」）：左邊 $4x-x=3x$、$2y-2y$ 抵消；右邊 $22-7=15$。得 $3x=15$，解得 $x=5$，答案選 C。",
         "en": "Subtracting (2) from (3) eliminates y: 3x = 15, so x = 5. Answer: C.",
         "highlight": [
          "x=5"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$1$ 是 $y$ 的值（代回 $2(5)+y=11$ 得 $y=1$）。題目問的是 $x$。",
         "en": "1 is the value of y, not x."
        },
        {
         "opt": "D",
         "zh": "$6$ 通常來自第 2 步漏乘右邊常數（把 (3) 誤寫成 $4x+2y=11$），之後的計算就全部接不上。乘完整條式之後，記得檢查三個位：$x$ 項、$y$ 項、以及等號右邊。",
         "en": "Usually caused by forgetting to multiply the right-hand side by 2."
        }
       ],
       "tip": {
        "zh": "消去法的升級技巧：哪一邊的係數小，就乘那一邊（這裡把 $y$ 由 1 變 2，只乘一次）。乘完一定要檢查三項都乘過：左項、中項、右邊常數。",
        "en": "Multiply the side with the smaller coefficient, and check all three terms were multiplied."
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-w04",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-W04",
      "source": "WS02 過渡題（自編）· Level 4 文字題設未知數",
      "stem": {
       "text": "The price of 2 cups of milk tea and 1 egg tart is \\$56. The price of 1 cup of milk tea is the same as the price of 3 egg tarts. Find the price of a cup of milk tea."
      },
      "options": {
       "A": "\\$8",
       "B": "\\$14",
       "C": "\\$24",
       "D": "\\$28"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數，譯第一句",
          "en": "Step 1 · Set up and translate the first sentence"
         },
         "math": "x:\\ \\text{milk tea},\\quad y:\\ \\text{egg tart}\\ \\Rightarrow\\ 2x+y=56\\ \\cdots(1)",
         "zh": "設一杯奶茶 $x$ 元、一個蛋撻 $y$ 元。「2 杯奶茶和 1 個蛋撻共 \\$56」順著字面寫就是 $2x+y=56$。設未知數時寫清楚「$x$ 代表什麼、以什麼為單位」，最後才知道要答什麼。",
         "en": "Let x be the price of a milk tea and y that of an egg tart. The first sentence gives 2x + y = 56."
        },
        {
         "title": {
          "zh": "第 2 步 · 譯第二句（倍數關係）",
          "en": "Step 2 · Translate the comparison"
         },
         "math": "x=3y\\ \\cdots(2)",
         "zh": "「1 杯奶茶的價錢等於 3 個蛋撻」→ $x=3y$。英文的「is the same as」就是等號。先想誰比較貴：奶茶較貴，所以 $x$ 較大，寫成 $x=3y$（不是 $3x=y$）—— 這是最多人第一步就寫反的地方。",
         "en": "'Is the same as' means '='. Milk tea is dearer, so x = 3y."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入求解，並答題目問的量",
          "en": "Step 3 · Substitute and answer the question"
         },
         "math": "2(3y)+y=56\\ \\Rightarrow\\ 7y=56\\ \\Rightarrow\\ y=8,\\qquad x=3(8)=24",
         "zh": "把 (2) 代入 (1)：$2(3y)+y=56\\Rightarrow7y=56\\Rightarrow y=8$，再代回 (2) 得奶茶 $x=24$ 元。題目問「奶茶的價錢」，所以答 \\$24，即 C。驗算：$2(24)+8=56$ ✓、$24=3\\times8$ ✓。",
         "en": "Substituting gives 7y = 56, so y = 8 and x = 24. Answer: \\$24 (C).",
         "highlight": [
          "x=24"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "\\$8 是蛋撻（$y$）的價錢 —— 你已經算對了，只是答了另一個未知數。文字題最後一句問什麼，就答什麼。",
         "en": "\\$8 is the price of an egg tart (y); the question asks for the milk tea."
        },
        {
         "opt": "B",
         "zh": "\\$14 通常來自把 \\$56 直接除以 4（誤當成「4 份東西」）。正確做法是先列兩條方程 $2x+y=56$、$x=3y$，再代入。",
         "en": "Usually 56 ÷ 4 — the two equations must be set up first."
        },
        {
         "opt": "D",
         "zh": "\\$28 是 $56\\div2$ —— 只除以奶茶的杯數，忘記那 1 個蛋撻也要計入 $y$。總數是「2 杯奶茶 + 1 個蛋撻」三件東西，不能只除 2。",
         "en": "56 ÷ 2 ignores the egg tart in the total."
        }
       ],
       "tip": {
        "zh": "英文文字題看到「is the same as」、「is equal to」就畫一個等號。誰等於幾倍的誰，先判斷誰較貴，把較貴那個字母單獨放一邊，就不會寫反。",
        "en": "'Is the same as' maps straight to '='. Put the dearer item alone on one side."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q01",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-Q01",
      "source": "WS02 Paper 2 Q1 · [HKDSE 2015 Paper 2 Q3]",
      "stem": {
       "text": "If $a-4b=2$ and $5a+2b=-12$, then $a=$"
      },
      "options": {
       "A": "-2",
       "B": "-1",
       "C": "1",
       "D": "2"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先把 $b$ 的係數乘成相反數",
          "en": ""
         },
         "math": "5a+2b=-12\\ \\cdots(2)\\ \\ \\xrightarrow{\\times 2}\\ \\ 10a+4b=-24\\ \\cdots(3)",
         "zh": "兩條方程中 $b$ 的係數是 $-4$ 與 $2$。把 (2) 乘 2，$b$ 的係數變成 $4$，與 (1) 的 $-4$ 剛好是一對相反數 —— 相加就能消去 $b$。",
         "en": "Multiply (2) by 2 so that the b-terms cancel when added."
        },
        {
         "title": {
          "zh": "第 2 步 · (1) + (3) 消去 $b$",
          "en": ""
         },
         "math": "(a-4b)+(10a+4b)=2+(-24)\\ \\Rightarrow\\ 11a=-22\\ \\Rightarrow\\ a=-2",
         "zh": "相加時 $-4b+4b=0$，$b$ 消失，剩下 $11a=-22$，所以 $a=-2$。",
         "en": "Add the two equations: 11a = -22, so a = -2."
        },
        {
         "title": {
          "zh": "第 3 步 · 驗算（可省但很快）",
          "en": ""
         },
         "math": "a=-2\\ \\Rightarrow\\ b=-1:\\quad -2-4(-1)=2\\ \\checkmark",
         "zh": "把 $a=-2$ 代回 (1)：$-2-4b=2$ 得 $b=-1$；再把 $(a,b)=(-2,-1)$ 代回 (2)：$5(-2)+2(-1)=-12$ ✓ 兩條都成立。",
         "en": "Check both equations with (a, b) = (-2, -1).",
         "highlight": [
          "a=-2"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-1$ 是 $b$ 的答案（$-2$ 才是 $a$）。這類題目的選項常同時列出 $a$ 與 $b$ 的值，作答前先圈出題目問的是哪個字母。",
         "en": "-1 is the value of b, not a."
        },
        {
         "opt": "D",
         "zh": "$2$ 是符號錯：$11a=-22$ 兩邊同除 11 得 $-2$，不是 $2$。",
         "en": "Sign error: 11a = -22 gives a = -2."
        }
       ],
       "tip": {
        "zh": "兩條方程的係數是「倍數關係」時（如 2 與 4）用加減消去法最快；先看哪個未知數的係數容易湊成相同或相反。",
        "en": "Look for a pair of coefficients that can be made equal (or opposite) by one multiplication."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q02",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-Q02",
      "source": "WS02 Paper 2 Q2 · [HKDSE 2015 Paper 2 Q3]",
      "stem": {
       "text": "If $3p-q=13$ and $9p+2q=4$, then $q=$"
      },
      "options": {
       "A": "-7",
       "B": "-2",
       "C": "2",
       "D": "7"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把 $p$ 的係數乘成一樣",
          "en": ""
         },
         "math": "(1)\\times 3:\\ \\ 9p-3q=39\\ \\cdots(3)",
         "zh": "要消去 $p$ 還是 $q$？把 (1) 乘 3，$p$ 的係數就由 $3$ 變成 $9$，與 (2) 相同，相減即可消去 $p$（題目問 $q$，所以消去 $p$ 最直接）。",
         "en": "Multiply (1) by 3 so that the p-terms match; subtract to eliminate p."
        },
        {
         "title": {
          "zh": "第 2 步 · (2) − (3)",
          "en": ""
         },
         "math": "(9p+2q)-(9p-3q)=4-39\\ \\Rightarrow\\ 5q=-35\\ \\Rightarrow\\ q=-7",
         "zh": "$9p-9p=0$，剩下 $2q+3q=5q$（注意 $-(-3q)=+3q$，相減時整條變號）；右邊 $4-39=-35$，所以 $q=-7$。",
         "en": "Subtract: 5q = -35, so q = -7."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$2$ 是 $p$ 的值：把 $q=-7$ 代回 (1) 得 $3p+7=13$，$p=2$。題目問 $q$。",
         "en": "2 is the value of p."
        },
        {
         "opt": "B",
         "zh": "$-2$ 是把 $p=2$ 的符號抄錯（也可能把 $-35$ 除以 $5$ 算成負數錯值）。",
         "en": "Sign slip when dividing."
        }
       ],
       "tip": {
        "zh": "相減時建議把 (3) 寫在 (2) 的正下方、同類項對齊再減，整條方程每一項都要變號，這樣就不會漏。",
        "en": "Line the two equations up and change the sign of every term when subtracting."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-q03",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 3,
      "code": "WS2-Q03",
      "source": "WS02 Paper 2 Q3 · [HKDSE 2012 Paper 2 Q5]",
      "stem": {
       "text": "If $p+2q+11=3p-q=13$, then $p=$"
      },
      "options": {
       "A": "-7",
       "B": "-1",
       "C": "4",
       "D": "6"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把「連等」拆成兩條方程",
          "en": ""
         },
         "math": "p+2q+11=13\\ \\cdots(1),\\qquad 3p-q=13\\ \\cdots(2)",
         "zh": "連等 $A=B=C$ 表示 $A=C$ 且 $B=C$，本身就是兩條方程 —— 直接拿 $13$ 配兩邊。",
         "en": "Split the continued equality into two equations."
        },
        {
         "title": {
          "zh": "第 2 步 · 由 (2) 寫出 $q$，再代入 (1)",
          "en": ""
         },
         "math": "q=3p-13\\ \\cdots(3)",
         "zh": "題目問 $p$，所以把 $q$ 寫成含 $p$ 的式子（代入法）。",
         "en": "Make q the subject of (2)."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入並解出 $p$",
          "en": ""
         },
         "math": "p+2(3p-13)+11=13\\ \\Rightarrow\\ 7p-15=13\\ \\Rightarrow\\ 7p=28\\ \\Rightarrow\\ p=4",
         "zh": "代入時要加括號：$2(3p-13)=6p-26$。整理後 $7p=28$，$p=4$。",
         "en": "Substitute: 7p = 28, so p = 4.",
         "highlight": [
          "p=4"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-1$ 是 $q$ 的值（$q=3(4)-13=-1$）。連等題的選項經常同時放 $p$ 與 $q$，作答前先圈出問的是哪個字母。",
         "en": "-1 is the value of q."
        },
        {
         "opt": "D",
         "zh": "$6$ 來自代入時漏了括號：$p+2(3p-13)+11$ 若寫成 $p+6p-13+11$ 就會算錯。",
         "en": "Missing brackets when substituting."
        }
       ],
       "tip": {
        "zh": "看到 $A=B=C$ 這種連等，先找出「只用一個未知數就能寫出」的那一對，可以省掉一次消去步驟。",
        "en": "From a continued equality, pick the pair that is easiest to rearrange."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q04",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-Q04",
      "source": "WS02 Paper 2 Q4 · [HKDSE 2012 Paper 2 Q5]",
      "stem": {
       "text": "If $4r-s-10=r+4s=9$, then $r=$"
      },
      "options": {
       "A": "-11",
       "B": "-6",
       "C": "1",
       "D": "5"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆成兩條方程，寫出 $s$",
          "en": ""
         },
         "math": "4r-s-10=9\\ \\cdots(1)\\ \\Rightarrow\\ s=4r-19\\ \\cdots(3)",
         "zh": "由 (1) 移項：$4r-s=19$，所以 $s=4r-19$。另一條是 $r+4s=9$ …… (2)。",
         "en": "Rearrange (1) to get s = 4r - 19."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入 (2)",
          "en": ""
         },
         "math": "r+4(4r-19)=9\\ \\Rightarrow\\ 17r-76=9\\ \\Rightarrow\\ 17r=85\\ \\Rightarrow\\ r=5",
         "zh": "把 (3) 整條代入 (2)：$4(4r-19)=16r-76$，與前面的 $r$ 合共 $17r$；移項得 $17r=85$，$r=5$。",
         "en": "Substitute: 17r = 85, so r = 5.",
         "highlight": [
          "r=5"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$1$ 是 $s$ 的值（$s=4(5)-19=1$）。題目問 $r$。",
         "en": "1 is the value of s."
        },
        {
         "opt": "A",
         "zh": "$-11$ 是移項符號錯：$4r-s-10=9$ 移項後應為 $s=4r-19$，若寫成 $s=4r+19$ 就會得到別的答案。",
         "en": "Sign error when rearranging."
        }
       ],
       "tip": {
        "zh": "移項時把「含未知數的項」與「常數項」分開寫，先整理再代入，比硬記公式可靠。",
        "en": "Collect like terms before substituting."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q05",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 3,
      "code": "WS2-Q05",
      "source": "WS02 Paper 2 Q5 · [HKDSE 2016 Paper 2 Q5]",
      "stem": {
       "text": "If $4p-q=9p+4q=5$, then $q=$"
      },
      "options": {
       "A": "-5",
       "B": "-1",
       "C": "1",
       "D": "5"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆成兩條方程",
          "en": ""
         },
         "math": "4p-q=5\\ \\cdots(1),\\qquad 9p+4q=5\\ \\cdots(2)",
         "zh": "連等 $4p-q=9p+4q=5$ 表示兩邊都等於 $5$。",
         "en": "Split the continued equality."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 $p$ 的係數乘成一樣",
          "en": ""
         },
         "math": "(1)\\times 9:\\ 36p-9q=45\\ \\cdots(3)\\qquad (2)\\times 4:\\ 36p+16q=20\\ \\cdots(4)",
         "zh": "兩條方程的係數不是簡單倍數，所以用「交叉相乘」：分別乘對方的係數，令 $p$ 的係數都變成 $36$。",
         "en": "Multiply to make the p-coefficients equal (36)."
        },
        {
         "title": {
          "zh": "第 3 步 · (4) − (3)",
          "en": ""
         },
         "math": "(36p+16q)-(36p-9q)=20-45\\ \\Rightarrow\\ 25q=-25\\ \\Rightarrow\\ q=-1",
         "zh": "$p$ 消去，$16q+9q=25q$；右邊 $20-45=-25$，所以 $q=-1$。",
         "en": "Subtract: 25q = -25, so q = -1.",
         "highlight": [
          "q=-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$5$ 是方程右邊的常數，不是答案；$q=-1$ 要真的解出來。",
         "en": "5 is the constant on the right-hand side."
        },
        {
         "opt": "C",
         "zh": "$1$ 是符號錯：$25q=-25$ 得 $q=-1$，不是 $1$。",
         "en": "Sign error."
        }
       ],
       "tip": {
        "zh": "係數互不成倍數時，用「交叉相乘」：把兩條方程分別乘上對方的係數，這樣一定能把其中一個未知數消去。",
        "en": "Cross-multiply to force one pair of coefficients to match."
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-q06",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 3,
      "code": "WS2-Q06",
      "source": "WS02 Paper 2 Q6 · [HKDSE 2016 Paper 2 Q5]",
      "stem": {
       "text": "If $x+5y=3x+2y=13$, then $x=$"
      },
      "options": {
       "A": "-3",
       "B": "-2",
       "C": "2",
       "D": "3"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆成兩條方程",
          "en": ""
         },
         "math": "x+5y=13\\ \\cdots(1),\\qquad 3x+2y=13\\ \\cdots(2)",
         "zh": "連等兩邊都等於 $13$。",
         "en": "Split the continued equality."
        },
        {
         "title": {
          "zh": "第 2 步 · 讓 $y$ 的係數相同",
          "en": ""
         },
         "math": "(1)\\times 2:\\ 2x+10y=26\\ \\cdots(3)\\qquad (2)\\times 5:\\ 15x+10y=65\\ \\cdots(4)",
         "zh": "消去 $y$ 比消去 $x$ 快：把 (1) 乘 2、(2) 乘 5，兩條的 $y$ 係數都變成 $10$。",
         "en": "Multiply to make the y-coefficients equal (10)."
        },
        {
         "title": {
          "zh": "第 3 步 · (4) − (3)",
          "en": ""
         },
         "math": "13x=39\\ \\Rightarrow\\ x=3",
         "zh": "$y$ 消去，剩下 $15x-2x=13x$ 與 $65-26=39$，所以 $x=3$。",
         "en": "Subtract: 13x = 39, so x = 3.",
         "highlight": [
          "x=3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$2$ 是 $y$ 的值（把 $x=3$ 代回 (1)：$3+5y=13$，$y=2$）。題目問 $x$。",
         "en": "2 is the value of y."
        },
        {
         "opt": "A",
         "zh": "$-3$ 是符號錯：兩條方程相減後右邊是 $65-26=39$（正數）。",
         "en": "Sign error in the subtraction."
        }
       ],
       "tip": {
        "zh": "選消去哪個未知數時，計一計「要乘幾多」：這裡 $y$ 只需乘 2 與 5，比處理 $x$ 的 1 與 3 更整齊。",
        "en": "Choose the unknown whose coefficients are easier to match."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q07",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-Q07",
      "source": "WS02 Paper 2 Q7 · [HKDSE 2019 Paper 2 Q3]",
      "stem": {
       "text": "If $9m+10n=8=3m-2n$, then $m=$"
      },
      "options": {
       "A": "-4",
       "B": "-1",
       "C": "2",
       "D": "4"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆成兩條方程",
          "en": ""
         },
         "math": "9m+10n=8\\ \\cdots(1),\\qquad 3m-2n=8\\ \\cdots(2)",
         "zh": "兩邊都等於 $8$。",
         "en": "Split the continued equality."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 (2) 乘 5，令 $n$ 的係數成相反數",
          "en": ""
         },
         "math": "(2)\\times 5:\\ 15m-10n=40\\ \\cdots(3)",
         "zh": "$n$ 的係數是 $10$ 與 $-2$；把 (2) 乘 5 得 $-10$，與 (1) 的 $+10$ 是相反數，相加即可消去 $n$。",
         "en": "Multiply (2) by 5 so the n-terms are opposite."
        },
        {
         "title": {
          "zh": "第 3 步 · (1) + (3)",
          "en": ""
         },
         "math": "(9m+10n)+(15m-10n)=8+40\\ \\Rightarrow\\ 24m=48\\ \\Rightarrow\\ m=2",
         "zh": "$n$ 消去，$24m=48$，所以 $m=2$。",
         "en": "Add: 24m = 48, so m = 2.",
         "highlight": [
          "m=2"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-4$ 是把 $24m=48$ 寫成 $-24m=48$（移項時多加了負號）。",
         "en": "Sign error when solving 24m = 48."
        },
        {
         "opt": "B",
         "zh": "$-1$ 可能是把 $n$ 的值與符號搞混了。驗算：$n=1$ 時 (1) 給 $18+10=28\\neq8$。",
         "en": "Check by substituting back."
        }
       ],
       "tip": {
        "zh": "係數是「相反數」時相加、是「相同」時相減 —— 這條規則記牢，看到 $+10n$ 與 $-2n$ 就知道要把後者乘 5。",
        "en": "Opposite coefficients: add. Same coefficients: subtract."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q08",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-Q08",
      "source": "WS02 Paper 2 Q8 · [HKDSE 2019 Paper 2 Q3]",
      "stem": {
       "text": "If $5a+6b=27=17a-12b$, then $a=$"
      },
      "options": {
       "A": "-3",
       "B": "2",
       "C": "3",
       "D": "7"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆成兩條方程",
          "en": ""
         },
         "math": "5a+6b=27\\ \\cdots(1),\\qquad 17a-12b=27\\ \\cdots(2)",
         "zh": "兩邊都等於 $27$。",
         "en": "Split the continued equality."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 (1) 乘 2，令 $b$ 的係數成相反數",
          "en": ""
         },
         "math": "(1)\\times 2:\\ 10a+12b=54\\ \\cdots(3)",
         "zh": "$b$ 的係數是 $6$ 與 $-12$，把 (1) 乘 2 得 $+12$，與 (2) 的 $-12$ 相加即可消去 $b$。",
         "en": "Multiply (1) by 2 to make the b-terms opposite."
        },
        {
         "title": {
          "zh": "第 3 步 · (2) + (3)",
          "en": ""
         },
         "math": "(17a-12b)+(10a+12b)=27+54\\ \\Rightarrow\\ 27a=81\\ \\Rightarrow\\ a=3",
         "zh": "$b$ 消去，$27a=81$，所以 $a=3$。",
         "en": "Add: 27a = 81, so a = 3.",
         "highlight": [
          "a=3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$2$ 是 $b$ 的值（$5(3)+6b=27$ 得 $b=2$）。題目問 $a$。",
         "en": "2 is the value of b."
        },
        {
         "opt": "A",
         "zh": "$-3$ 是符號錯：$27a=81$ 兩邊都是正數。",
         "en": "Sign error."
        }
       ],
       "tip": {
        "zh": "看到 $6$ 與 $-12$ 這種「一半」關係，把小的那個乘 2 就成相反數，比交叉相乘省一步。",
        "en": "If one coefficient is half of the other, multiply the smaller one."
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-q09",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 3,
      "code": "WS2-Q09",
      "source": "WS02 Paper 2 Q9 · [HKCEE 2008 Paper 2 Q8]",
      "stem": {
       "text": "If $a-4=b-10=a-5b+11$, then $a=$"
      },
      "options": {
       "A": "-3",
       "B": "-1",
       "C": "1",
       "D": "3"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 由最簡單的一對寫出 $b$",
          "en": ""
         },
         "math": "a-4=b-10\\ \\cdots(1)\\ \\Rightarrow\\ b=a+6\\ \\cdots(3)",
         "zh": "連等有三段，先挑「只有 $a$ 與 $b$ 各一次」的那一對：由 (1) 移項得 $b=a+6$。",
         "en": "From the first pair, b = a + 6."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 (3) 代入另一段",
          "en": ""
         },
         "math": "a-4=a-5(a+6)+11",
         "zh": "另一段是 $a-4=a-5b+11$，把 $b$ 換成 $a+6$（整條代入，要加括號）。",
         "en": "Substitute b = a + 6 into the other equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 $a$",
          "en": ""
         },
         "math": "a-4=-4a-19\\ \\Rightarrow\\ 5a=-15\\ \\Rightarrow\\ a=-3",
         "zh": "右邊：$a-5a-30+11=-4a-19$。移項後 $5a=-15$，所以 $a=-3$。",
         "en": "5a = -15, so a = -3.",
         "highlight": [
          "a=-3"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$3$ 是 $b$ 的值（$b=a+6=3$）。題目問 $a$。",
         "en": "3 is the value of b."
        },
        {
         "opt": "C",
         "zh": "$1$ 是移項符號錯：$a-5(a+6)$ 展開後是 $-4a-30$，不是 $+4a-30$。",
         "en": "Expansion sign error."
        }
       ],
       "tip": {
        "zh": "遇到三段連等，先找「最容易化成 $b=\\ldots$」的那一對，再代入第三段；這樣比硬碰兩條完整方程快。",
        "en": "Pick the easiest pair first, then substitute into the remaining part."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q10",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 3,
      "code": "WS2-Q10",
      "source": "WS02 Paper 2 Q10 · [HKCEE 2008 Paper 2 Q8]",
      "stem": {
       "text": "If $13-2p=q+9=3q-2p-5$, then $p=$"
      },
      "options": {
       "A": "-8",
       "B": "-6",
       "C": "-1",
       "D": "6"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 由第一對寫出 $q$",
          "en": ""
         },
         "math": "13-2p=q+9\\ \\cdots(1)\\ \\Rightarrow\\ q=4-2p\\ \\cdots(3)",
         "zh": "由 (1) 移項：$q=13-2p-9=4-2p$。",
         "en": "From the first pair, q = 4 - 2p."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入第三段",
          "en": ""
         },
         "math": "13-2p=3(4-2p)-2p-5",
         "zh": "把 $q$ 換成 $4-2p$（整條代入）。右邊展開始：$12-6p-2p-5$。",
         "en": "Substitute into the third expression."
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 $p$",
          "en": ""
         },
         "math": "13-2p=7-8p\\ \\Rightarrow\\ 6p=-6\\ \\Rightarrow\\ p=-1",
         "zh": "$13-2p=7-8p$；移項得 $6p=-6$，所以 $p=-1$。",
         "en": "6p = -6, so p = -1.",
         "highlight": [
          "p=-1"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-6$ 是把 $6p=-6$ 的係數當成答案（未完成除以 6 的一步）。",
         "en": "-6 is the coefficient, not the value of p."
        },
        {
         "opt": "D",
         "zh": "$6$ 是 $q$ 的值（$q=4-2(-1)=6$）。題目問 $p$。",
         "en": "6 is the value of q."
        }
       ],
       "tip": {
        "zh": "這類題目通常「一段只含一個未知數、另一段含兩個」，先處理單未知數那段，往往可以少做一次消去。",
        "en": "Handle the single-unknown part first."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q11",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-Q11",
      "source": "WS02 Paper 2 Q11 · [HKDSE 2014 Paper 2 Q8]",
      "stem": {
       "text": "The price of 3 avocados and 2 pears is \\$70. If the price of 4 avocados and the price of 9 pears are the same, then the price of a pear is"
      },
      "options": {
       "A": "\\$8",
       "B": "\\$12",
       "C": "\\$18",
       "D": "\\$27"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並列方程",
          "en": ""
         },
         "math": "3x+2y=70\\ \\cdots(1),\\qquad 4x=9y\\ \\cdots(2)",
         "zh": "設 $x$ 為一個 avocado 的價錢、$y$ 為一個 pear 的價錢。「3 個 avocado 加 2 個 pear 共 70 元」→ (1)；「4 個 avocado 的價錢等於 9 個 pear 的價錢」→ (2)。",
         "en": "Let x be the price of an avocado and y the price of a pear."
        },
        {
         "title": {
          "zh": "第 2 步 · 由 (2) 寫出 $x$，代入 (1)",
          "en": ""
         },
         "math": "x=\\frac{9}{4}y=2.25y\\ \\cdots(3)\\ \\Rightarrow\\ 3(2.25y)+2y=70",
         "zh": "題目問 pear 的價錢，所以把 $x$ 用 $y$ 表示再代入，直接求出 $y$。",
         "en": "Make x the subject and substitute."
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 $y$",
          "en": ""
         },
         "math": "8.75y=70\\ \\Rightarrow\\ y=8",
         "zh": "$6.75y+2y=8.75y=70$，所以 $y=8$。一個 pear 是 8 元。",
         "en": "8.75y = 70, so y = 8.",
         "highlight": [
          "y=8"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$18$ 是 avocado 的價錢（$x=2.25(8)=18$）。題目問 pear。",
         "en": "18 is the price of an avocado."
        },
        {
         "opt": "B",
         "zh": "$12$ 是中間步驟算錯（例如把 $4x=9y$ 誤寫成 $9x=4y$，會得到另一個答案）。",
         "en": "Equation (2) reversed."
        }
       ],
       "tip": {
        "zh": "題目問邊個，就盡量用那個未知數做主體去代入 —— 可以省掉最後一步代回。",
        "en": "Keep the required unknown as the one you solve for."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-q12",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 2,
      "code": "WS2-Q12",
      "source": "WS02 Paper 2 Q12 · [HKDSE 2014 Paper 2 Q8]",
      "stem": {
       "text": "The prices of 5 hamburgers and 8 sandwiches are the same. Ivan buys 2 hamburgers and 4 sandwiches for \\$108. Find the price of a hamburger."
      },
      "options": {
       "A": "\\$12.5",
       "B": "\\$15",
       "C": "\\$20",
       "D": "\\$24"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並列方程",
          "en": ""
         },
         "math": "5x=8y\\ \\cdots(1),\\qquad 2x+4y=108\\ \\cdots(2)",
         "zh": "設 $x$ 為漢堡包價錢、$y$ 為三文治價錢。「5 個漢堡包與 8 份三文治價錢相同」→ (1)；「2 個漢堡包加 4 份三文治共 108 元」→ (2)。",
         "en": "Let x be the price of a hamburger and y the price of a sandwich."
        },
        {
         "title": {
          "zh": "第 2 步 · 由 (1) 寫出 $y$，代入 (2)",
          "en": ""
         },
         "math": "y=\\frac{5}{8}x=0.625x\\ \\cdots(3)\\ \\Rightarrow\\ 2x+4(0.625x)=108",
         "zh": "題目問漢堡包，所以把 $y$ 用 $x$ 表示：$y=\\frac{5}{8}x$。",
         "en": "Make y the subject and substitute."
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 $x$",
          "en": ""
         },
         "math": "4.5x=108\\ \\Rightarrow\\ x=24",
         "zh": "$2x+2.5x=4.5x=108$，所以 $x=24$。一個漢堡包是 24 元。",
         "en": "4.5x = 108, so x = 24.",
         "highlight": [
          "x=24"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$15$ 是三文治的價錢（$y=0.625(24)=15$）。題目問漢堡包。",
         "en": "15 is the price of a sandwich."
        },
        {
         "opt": "A",
         "zh": "$12.5$ 是把 $5x=8y$ 寫成 $y=\\frac{8}{5}x$ 之後算出來的（方程方向搞錯）。",
         "en": "Ratio reversed."
        }
       ],
       "tip": {
        "zh": "「A 個 X 與 B 個 Y 價錢相同」永遠寫成 $Ax=By$，然後按題目問的量決定把哪個未知數變主體。",
        "en": "Equal total prices: write A x = B y."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q13",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 3,
      "code": "WS2-Q13",
      "source": "WS02 Paper 2 Q13 · [HKCEE 2011 Paper 2 Q6]",
      "stem": {
       "text": "The price of 3 oranges and 7 apples is \\$53 while the price of 4 oranges and 2 apples is \\$34. Find the price of 2 oranges and 3 apples."
      },
      "options": {
       "A": "\\$27",
       "B": "\\$28",
       "C": "\\$29",
       "D": "\\$30"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並列方程",
          "en": ""
         },
         "math": "3x+7y=53\\ \\cdots(1),\\qquad 4x+2y=34\\ \\cdots(2)",
         "zh": "設 $x$ 為橙的價錢、$y$ 為蘋果的價錢。",
         "en": "Let x be the price of an orange and y that of an apple."
        },
        {
         "title": {
          "zh": "第 2 步 · 消去 $x$（交叉相乘）",
          "en": ""
         },
         "math": "(1)\\times 4:\\ 12x+28y=212\\ \\cdots(3)\\qquad (2)\\times 3:\\ 12x+6y=102\\ \\cdots(4)",
         "zh": "把 $x$ 的係數都變成 $12$（$3$ 與 $4$ 的最小公倍數），再相減。",
         "en": "Cross-multiply to eliminate x."
        },
        {
         "title": {
          "zh": "第 3 步 · (3) − (4) 求 $y$，再代回求 $x$",
          "en": ""
         },
         "math": "22y=110\\ \\Rightarrow\\ y=5\\ \\Rightarrow\\ 3x+7(5)=53\\ \\Rightarrow\\ x=6",
         "zh": "相減得 $22y=110$，$y=5$；代回 (1)：$3x+35=53$，$x=6$。",
         "en": "y = 5, x = 6."
        },
        {
         "title": {
          "zh": "第 4 步 · 回答題目要的組合",
          "en": ""
         },
         "math": "2(6)+3(5)=27",
         "zh": "題目問「2 個橙加 3 個蘋果」的價錢，所以要再算 $2x+3y=12+15=27$。只求出 $x$ 或 $y$ 不算完成。",
         "en": "The question asks for 2x + 3y = 27.",
         "highlight": [
          "27"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$28$ 是只算了 2 個橙加 3 個蘋果時把其中一項加多／加少（例如 $2(6)+3(6)$）。",
         "en": "Arithmetic slip in the final combination."
        },
        {
         "opt": "C",
         "zh": "$29$ 是漏了最後一步的其中一項（只加一次 6 與 5 之外的組合）。",
         "en": "Wrong final combination."
        }
       ],
       "tip": {
        "zh": "題目問「某幾個的總價」時，先求單價、再組合 —— 最後那個 $2x+3y$ 是一分都不能省的步驟。",
        "en": "Find unit prices first, then build the required combination."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-q14",
      "type": "mc",
      "topic": "ws02",
      "unit": 0,
      "subtopic": "simultaneous-equations",
      "difficulty": 3,
      "code": "WS2-Q14",
      "source": "WS02 Paper 2 Q14 · [HKCEE 2011 Paper 2 Q6]",
      "stem": {
       "text": "In an exhibition, the total fare of 2 adults and 3 children is \\$105 while the total fare of 5 adults and 4 children is \\$210. Find the total fare of 2 adults and 1 child."
      },
      "options": {
       "A": "\\$60",
       "B": "\\$70",
       "C": "\\$75",
       "D": "\\$90"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並列方程",
          "en": ""
         },
         "math": "2x+3y=105\\ \\cdots(1),\\qquad 5x+4y=210\\ \\cdots(2)",
         "zh": "設 $x$ 為成人票價、$y$ 為兒童票價。",
         "en": "Let x be the adult fare and y the child fare."
        },
        {
         "title": {
          "zh": "第 2 步 · 消去 $x$",
          "en": ""
         },
         "math": "(1)\\times 5:\\ 10x+15y=525\\ \\cdots(3)\\qquad (2)\\times 2:\\ 10x+8y=420\\ \\cdots(4)",
         "zh": "把 $x$ 的係數都變成 $10$（$2$ 與 $5$ 的最小公倍數）。",
         "en": "Cross-multiply to eliminate x."
        },
        {
         "title": {
          "zh": "第 3 步 · (3) − (4) 求 $y$，代回求 $x$",
          "en": ""
         },
         "math": "7y=105\\ \\Rightarrow\\ y=15\\ \\Rightarrow\\ 2x+3(15)=105\\ \\Rightarrow\\ x=30",
         "zh": "相減得 $7y=105$，$y=15$；代回 (1)：$2x+45=105$，$x=30$。",
         "en": "y = 15, x = 30."
        },
        {
         "title": {
          "zh": "第 4 步 · 回答題目要的組合",
          "en": ""
         },
         "math": "2(30)+15=75",
         "zh": "題目問「2 個成人加 1 個兒童」的總票價：$2x+y=60+15=75$。",
         "en": "The question asks for 2x + y = 75.",
         "highlight": [
          "75"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$60$ 只是兩個成人的票價（$2x$），漏了兒童那一部分。",
         "en": "60 is only the fare for 2 adults."
        },
        {
         "opt": "D",
         "zh": "$90$ 是 3 個成人的票價（$3x$），不是題目要的組合。",
         "en": "90 is 3 adult fares."
        }
       ],
       "tip": {
        "zh": "先圈出題目最後要的組合（這裡是 $2x+y$），解方程時就朝這個目標走，避免答錯量。",
        "en": "Circle the combination the question asks for before solving."
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 18,
  "long": 2,
  "cards": 5,
  "pages": 6
 }
};
