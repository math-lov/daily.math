// 自動生成，請勿手改（來源：data/；重新生成：python tools/make_site_data.py）
window.SOLUTIONS = {
 "version": 1,
 "solutions": {
  "2025-p2-q01": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Unify the base",
       "zh": "第 1 步 · 統一度數"
      },
      "math": "(27x)^{5} = (3^{3}x)^{5} = 3^{15}x^{5}",
      "en": "$27=3^{3}$, so the numerator becomes $3^{15}x^{5}$.",
      "zh": "$27=3^{3}$，所以分子化為 $3^{15}x^{5}$。",
      "highlight": [
       "27 = 3^{3}",
       "3^{15}x^{5}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Expand the denominator",
       "zh": "第 2 步 · 展開分母"
      },
      "math": "(3x^{-2})^{4} = 3^{4}x^{-8}",
      "en": "Raise every factor inside the bracket to the 4th power — including the $3$.",
      "zh": "括號內每個因式都要 4 次方——包括那個 $3$。",
      "highlight": [
       "3^{4}",
       "x^{-8}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Divide (subtract indices)",
       "zh": "第 3 步 · 相除（指數相減）"
      },
      "math": "\\frac{3^{15}x^{5}}{3^{4}x^{-8}} = 3^{15-4}x^{5-(-8)} = 3^{11}x^{13}",
      "en": "Subtracting a negative index means adding: $5-(-8)=13$.",
      "zh": "減負指數等於加：$5-(-8)=13$。",
      "highlight": [
       "3^{11}x^{13}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "3^{11}x^{13}",
      "en": "That matches option C.",
      "zh": "對應選項 C。",
      "highlight": [
       "3^{11}x^{13}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$3^{14}x^{13}$ — you forgot to raise the $3$ in the denominator to the 4th power (used $3^{1}$ instead of $3^{4}$), giving $15-1=14$.",
      "zh": "$3^{14}x^{13}$ —— 忘記把分母的 $3$ 一併 4 次方（把 $3^{4}$ 當成 $3^{1}$），於是 $15-1=14$。"
     },
     {
      "opt": "A",
      "en": "$3^{2}x^{3}$ — dividing the bases ($27\\div3=9=3^{2}$) instead of subtracting the indices.",
      "zh": "$3^{2}x^{3}$ —— 直接相除底數（$27\\div3=9=3^{2}$），而不是指數相減。"
     },
     {
      "opt": "B",
      "en": "$3^{4}x^{3}$ — the index of $x$ came out right by accident, but the base $3$ was left as $3^{4}$.",
      "zh": "$3^{4}x^{3}$ —— $x$ 的指數碰巧對了，但 $3$ 的指數誤當成 $4$。"
     }
    ],
    "tip": {
     "en": "$a^{m}\\div a^{n}=a^{m-n}$; a negative index below the line becomes positive when it moves up.",
     "zh": "$a^{m}\\div a^{n}=a^{m-n}$；分母的負指數搬到分子就變正。"
    }
   }
  },
  "2025-p2-q02": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Spot a difference of two squares",
       "zh": "第 1 步 · 認出平方差"
      },
      "math": "36-(3m+4n)^{2} = 6^{2}-(3m+4n)^{2}",
      "en": "$36=6^{2}$, so this is $a^{2}-b^{2}$ with $a=6$ and $b=3m+4n$.",
      "zh": "$36=6^{2}$，所以這是 $a^{2}-b^{2}$，其中 $a=6$、$b=3m+4n$。",
      "highlight": [
       "6^{2}-(3m+4n)^{2}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Apply the identity",
       "zh": "第 2 步 · 套用公式"
      },
      "math": "a^{2}-b^{2} = (a-b)(a+b)",
      "en": "The two brackets differ only in the sign in the middle.",
      "zh": "兩個括號只在「中間的符號」不同。",
      "highlight": [
       "(a-b)(a+b)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Remove the brackets carefully",
       "zh": "第 3 步 · 小心去括號"
      },
      "math": "(6-(3m+4n))(6+(3m+4n)) = (6-3m-4n)(6+3m+4n)",
      "en": "The minus sign applies to BOTH $3m$ and $4n$ inside the bracket.",
      "zh": "負號要作用於括號內**每一項**：$3m$ 和 $4n$ 都要變號。",
      "highlight": [
       "(6-3m-4n)(6+3m+4n)"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "(6-3m-4n)(6+3m+4n)",
      "en": "Option B.",
      "zh": "選項 B。",
      "highlight": [
       "(6-3m-4n)(6+3m+4n)"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$(6+3m+4n)(6-3m+4n)$ — only $3m$ changed sign; the $-4n$ should also have become $-4n$. Expanding this gives $(6+4n)^{2}-9m^{2}$, not the required expression.",
      "zh": "$(6+3m+4n)(6-3m+4n)$ —— 只有 $3m$ 變號，$4n$ 忘了變。展開後其實是 $(6+4n)^{2}-9m^{2}$，不是原式。"
     },
     {
      "opt": "C",
      "en": "$(6+3m-4n)(6-3m+4n)$ — the signs of the wrong pair were flipped (this factorises $(6-4n)^{2} \\cdot \\ldots$ incorrectly).",
      "zh": "$(6+3m-4n)(6-3m+4n)$ —— 變錯了一項的符號，展開後不符合原式。"
     },
     {
      "opt": "D",
      "en": "$(6+3m-4n)(6-3m-4n)$ — grouping $(6-4n)\\pm3m$ instead: this expands to $(6-4n)^{2}-9m^{2}$.",
      "zh": "$(6+3m-4n)(6-3m-4n)$ —— 錯誤地以 $(6-4n)\\pm3m$ 分組，展開是 $(6-4n)^{2}-9m^{2}$。"
     }
    ],
    "tip": {
     "en": "For $a^{2}-b^{2}$ when $b$ has several terms: the minus bracket must negate every term of $b$.",
     "zh": "平方差裡 $b$ 是多項式時：減號括號要讓 $b$ 的**每一項**都變號。"
    }
   }
  },
  "2025-p2-q03": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Expand the left-hand side",
       "zh": "第 1 步 · 展開左邊"
      },
      "math": "(x+8)(x+a)+b = x^{2}+(8+a)x+(8a+b)",
      "en": "Multiply out the two brackets, then add $b$ to the constant term.",
      "zh": "先把兩個括號相乘，再把 $b$ 加進常數項。",
      "highlight": [
       "x^{2}+(8+a)x+(8a+b)"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Compare the x-coefficients",
       "zh": "第 2 步 · 比較 x 的係數"
      },
      "math": "8+a = 5a \\;\\Rightarrow\\; a = 2",
      "en": "The right-hand side is $x^{2}+5ax+15a$, so the coefficients of $x$ must agree.",
      "zh": "右邊是 $x^{2}+5ax+15a$，所以 $x$ 的係數要相等。",
      "highlight": [
       "a = 2"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Compare the constant terms",
       "zh": "第 3 步 · 比較常數項"
      },
      "math": "8a+b = 15a \\;\\Rightarrow\\; b = 7a = 14",
      "en": "Substitute $a=2$: $b=7(2)=14$.",
      "zh": "代入 $a=2$：$b=7(2)=14$。",
      "highlight": [
       "b = 7a",
       "b = 14"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "b = 14",
      "en": "Option D.",
      "zh": "選項 D。",
      "highlight": [
       "14"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$2$ — that is the value of $a$. The question asks for $b$, so you must go one step further.",
      "zh": "$2$ —— 那是 $a$ 的值。題目問的是 $b$，要再走一步。"
     },
     {
      "opt": "B",
      "en": "$-2$ — $a$ with the sign flipped.",
      "zh": "$-2$ —— 把 $a$ 的符號弄反。"
     },
     {
      "opt": "A",
      "en": "$-14$ — a sign slip when moving $8a$ across: $b=15a-8a$ gives $+14$, not $-14$.",
      "zh": "$-14$ —— 移項時符號出錯：$b=15a-8a$ 得 $+14$，不是 $-14$。"
     }
    ],
    "tip": {
     "en": "In a polynomial identity, equate the coefficients of each power separately — then re-read which unknown is being asked.",
     "zh": "多項式恆等式要「同次項係數相等」逐項比較；最後再看清題目問哪個未知數。"
    }
   }
  },
  "2025-p2-q04": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Expand both sides",
       "zh": "第 1 步 · 展開兩邊"
      },
      "math": "3cd-12c+d-4 = 10cd-2d",
      "en": "$(3c+1)(d-4)=3cd-12c+d-4$ and $2d(5c-1)=10cd-2d$.",
      "zh": "$(3c+1)(d-4)=3cd-12c+d-4$；$2d(5c-1)=10cd-2d$。",
      "highlight": [
       "3cd-12c+d-4 = 10cd-2d"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Collect the c-terms",
       "zh": "第 2 步 · 把含 c 的項集中"
      },
      "math": "3d-4 = c(7d+12)",
      "en": "Move everything with $c$ to one side: $10cd-3cd+12c = 7cd+12c = c(7d+12)$.",
      "zh": "把所有含 $c$ 的項移到同一邊：$10cd-3cd+12c=7cd+12c=c(7d+12)$。",
      "highlight": [
       "c(7d+12)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Make c the subject",
       "zh": "第 3 步 · 以 c 為主項"
      },
      "math": "c = \\frac{3d-4}{7d+12}",
      "en": "Divide both sides by $(7d+12)$.",
      "zh": "兩邊同除以 $(7d+12)$。",
      "highlight": [
       "\\frac{3d-4}{7d+12}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "c = \\frac{3d-4}{7d+12}",
      "en": "Option A.",
      "zh": "選項 A。",
      "highlight": [
       "\\frac{3d-4}{7d+12}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$\\frac{7d-12}{3d+4}$ — the fraction was inverted (that would be solving for $d$, not $c$).",
      "zh": "$\\frac{7d-12}{3d+4}$ —— 分子分母倒置（那是在解 $d$ 而不是 $c$）。"
     },
     {
      "opt": "D",
      "en": "$\\frac{7d+12}{3d-4}$ — inverted as well as sign errors in the numerator and denominator.",
      "zh": "$\\frac{7d+12}{3d-4}$ —— 除了倒置，分子分母的符號也不對。"
     },
     {
      "opt": "B",
      "en": "$\\frac{3d+4}{7d-12}$ — sign errors when moving terms across the equals sign ($d-4$ and $-2d$).",
      "zh": "$\\frac{3d+4}{7d-12}$ —— 移項時符號出錯（$d-4$ 與 $-2d$）。"
     }
    ],
    "tip": {
     "en": "To change the subject: expand, gather every term containing the wanted letter, factorise it out, then divide.",
     "zh": "更換主項：展開 → 把含目標字母的項集中 → 抽公因數 → 相除。"
    }
   }
  },
  "2025-p2-q05": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Move everything to one side",
       "zh": "第 1 步 · 移項整理"
      },
      "math": "x^{2} + 4x - (k^{2} - 2k - 3) = 0",
      "en": "Bring the right-hand side over so the equation is in standard form.",
      "zh": "把右邊移過來，寫成標準形式。",
      "highlight": [
       "-(k^{2}-2k-3)"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Complete the square on both parts",
       "zh": "第 2 步 · 兩邊配方"
      },
      "math": "x^{2}+4x+4 = k^{2}-2k+1 \\;\\Rightarrow\\; (x+2)^{2} = (k-1)^{2}",
      "en": "Add $4$ to both sides: the left becomes $(x+2)^{2}$, and the right is a perfect square in $k$.",
      "zh": "兩邊加 $4$：左邊成 $(x+2)^{2}$，右邊正好是關於 $k$ 的完全平方。",
      "highlight": [
       "(x+2)^{2} = (k-1)^{2}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Take square roots (both signs!)",
       "zh": "第 3 步 · 開方（正負都要）"
      },
      "math": "x+2 = \\pm(k-1)",
      "en": "Do not drop the negative root — that is where most of the marks are lost.",
      "zh": "千萬不要漏掉負根——這是最常見的失分位。",
      "highlight": [
       "\\pm"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Solve the two cases",
       "zh": "第 4 步 · 分兩個情況解"
      },
      "math": "x = k-3 \\quad \\text{or} \\quad x = -k-1",
      "en": "Positive case: $x=k-1-2=k-3$. Negative case: $x=-(k-1)-2=-k-1$.",
      "zh": "取正：$x=k-1-2=k-3$；取負：$x=-(k-1)-2=-k-1$。",
      "highlight": [
       "x = k-3",
       "x = -k-1"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "x=k-3 \\;\\text{or}\\; x=-k-1",
      "en": "Option A.",
      "zh": "選項 A。",
      "highlight": [
       "x=k-3"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$x=-k+1$ — the sign of the constant was flipped when expanding $-(k-1)$.",
      "zh": "$x=-k+1$ —— 展開 $-(k-1)$ 時符號寫反。"
     },
     {
      "opt": "C",
      "en": "$x=k+3$ — a sign slip on the $-2$ after taking the positive root.",
      "zh": "$x=k+3$ —— 取正根後 $-2$ 的符號出錯。"
     },
     {
      "opt": "D",
      "en": "$x=k+3$ or $x=-k+1$ — both sign errors at once.",
      "zh": "$x=k+3$ 或 $x=-k+1$ —— 兩個符號錯誤同時出現。"
     }
    ],
    "tip": {
     "en": "$x^{2}+bx=(\\text{something})^{2}$ is solved fastest by completing the square — and always keep $\\pm$.",
     "zh": "見到 $x^{2}+bx=(\\text{某式})^{2}$，配方最快——而且一定要保留 $\\pm$。"
    }
   }
  },
  "2025-p2-q06": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · How much can x differ from 5.67?",
       "zh": "第 1 步 · x 可以偏離 5.67 多少？"
      },
      "math": "\\text{max error} = \\tfrac{1}{2}\\times 0.01 = 0.005",
      "en": "Round to 2 decimal places, so the place value is $0.01$ and the maximum error is half of it, $0.005$.",
      "zh": "「準確至 2 位小數」的位值是 $0.01$，最大誤差是它的一半：$0.005$。",
      "highlight": [
       "0.005"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Build the interval",
       "zh": "第 2 步 · 寫出區間"
      },
      "math": "5.67-0.005 \\le x < 5.67+0.005",
      "en": "$5.665$ still rounds up to $5.67$, so the lower end is included; $5.675$ would round to $5.68$, so the upper end is excluded.",
      "zh": "$5.665$ 仍會入到 $5.67$，所以下界取等號；$5.675$ 會進位到 $5.68$，所以上界不取。",
      "highlight": [
       "5.665 \\le x < 5.675"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "5.665 \\le x < 5.675",
      "en": "Option D.",
      "zh": "選項 D。",
      "highlight": [
       "5.665 \\le x < 5.675"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$5.66 \\le x < 5.68$ — used the whole place value $0.01$ instead of half of it.",
      "zh": "$5.66 \\le x < 5.68$ —— 用了整整一個位值 $0.01$，而不是它的一半。"
     },
     {
      "opt": "A",
      "en": "$5.66 < x \\le 5.68$ — same size error, and the two inequality signs are also the wrong way round.",
      "zh": "$5.66 < x \\le 5.68$ —— 誤差大小錯了，兩個不等號也放反。"
     },
     {
      "opt": "C",
      "en": "$5.665 < x \\le 5.675$ — correct half-unit, but the ends are the wrong way round: $5.665$ must be included and $5.675$ excluded.",
      "zh": "$5.665 < x \\le 5.675$ —— 半個單位對了，但兩端放反：應該包含 $5.665$、排除 $5.675$。"
     }
    ],
    "tip": {
     "en": "Range of values = the rounded value $\\pm$ half of one unit of the last significant place; lower bound inclusive, upper bound exclusive.",
     "zh": "取值範圍 = 近似值 $\\pm$ 最後一個位值的一半；下界取等號、上界不取。"
    }
   }
  },
  "2025-p2-q07": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Solve the left inequality",
       "zh": "第 1 步 · 解左邊的不等式"
      },
      "math": "4y+1 < 5y-3 \\;\\Rightarrow\\; 4 < y",
      "en": "Move $4y$ to the right and $-3$ to the left: $1+3 < 5y-4y$.",
      "zh": "把 $4y$ 移到右邊、$-3$ 移到左邊：$1+3 < 5y-4y$。",
      "highlight": [
       "y > 4"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Solve the right inequality",
       "zh": "第 2 步 · 解右邊的不等式"
      },
      "math": "5y-3 \\le 8y-9 \\;\\Rightarrow\\; 6 \\le 3y \\;\\Rightarrow\\; y \\ge 2",
      "en": "This part allows $y=4$, so it uses $\\le$.",
      "zh": "這一段容許 $y=4$，所以用 $\\le$。",
      "highlight": [
       "y \\ge 2"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Intersect the two conditions",
       "zh": "第 3 步 · 取交集"
      },
      "math": "y > 4 \\;\\text{and}\\; y \\ge 2 \\;\\Rightarrow\\; y > 4",
      "en": "The stricter condition wins: every $y>4$ satisfies both.",
      "zh": "取較嚴的一段：所有 $y>4$ 都同時滿足兩式。",
      "highlight": [
       "y > 4"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "y > 4",
      "en": "Option D.",
      "zh": "選項 D。",
      "highlight": [
       "y > 4"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$y \\ge 2$ — only the second inequality was solved; the two conditions must hold at the same time, so the intersection is $y>4$.",
      "zh": "$y \\ge 2$ —— 只解了第二段。兩段要**同時**成立，交集才是答案 $y>4$。"
     },
     {
      "opt": "A",
      "en": "$y > -4$ — sign slip when moving terms in the first inequality.",
      "zh": "$y > -4$ —— 第一段移項時符號出錯。"
     },
     {
      "opt": "B",
      "en": "$y \\ge -2$ — sign slip in the second inequality.",
      "zh": "$y \\ge -2$ —— 第二段移項時符號出錯。"
     }
    ],
    "tip": {
     "en": "Solve each part of a compound inequality separately, then take the intersection — and keep $\\le$ where the boundary is allowed.",
     "zh": "連不等式要分段解，最後取交集；邊界容許的用 $\\le$，不容許的用 $<$。"
    }
   }
  },
  "2025-p2-q08": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Understand the function notation and calculate f(4)",
       "zh": "第 1 步 · 認識函數代入，先計算 f(4)"
      },
      "math": "f(4) = (4)^2 + 7(4) + k = 16 + 28 + k = 44 + k",
      "en": "Substitute x = 4 into every x in the formula. First calculate 4 squared to get 16, then 7 times 4 to get 28. Adding 16 and 28 gives 44, so we get 44 + k.",
      "zh": "函數符號 $f(4)$ 的意思，就是把算式中所有的 $x$ 都換成數字 $4$。我們先算 $4^2 = 16$，再加上 $7 \\times 4 = 28$。把常數加起來：$16 + 28 = 44$，因此 $f(4) = 44 + k$。注意未知的 $k$ 要原封不動保留。"
     },
     {
      "title": {
       "en": "Step 2 · Calculate f(-4) with careful attention to negative signs",
       "zh": "第 2 步 · 小心負號，計算 f(-4)"
      },
      "math": "f(-4) = (-4)^2 + 7(-4) + k = 16 - 28 + k = -12 + k",
      "en": "Substitute x = -4 with brackets. A negative number squared is positive, so (-4)^2 = 16. However, 7 times -4 is -28. Subtracting 28 from 16 gives -12, so we obtain -12 + k.",
      "zh": "這是同學最容易出錯的地方。代入負數時，一定要加上括號：$x^2$ 會變成 $(-4)^2$。因為負負得正，$(-4)^2 = +16$；而後面一項是 $7 \\times (-4) = -28$。計算常數：$16 - 28 = -12$，因此 $f(-4) = -12 + k$。"
     },
     {
      "title": {
       "en": "Step 3 · Form the equation and collect like terms slowly",
       "zh": "第 3 步 · 按照題目條件列式並逐步合併同類項"
      },
      "math": "(44 + k) + (-12 + k) = 38 \\implies (44 - 12) + (k + k) = 38 \\implies 32 + 2k = 38",
      "en": "The problem states f(4) + f(-4) = 38. We place the two results side by side. Group the numbers together: 44 - 12 = 32. Group the variables together: k + k = 2k (not k). The equation becomes 32 + 2k = 38.",
      "zh": "題目的條件是 $f(4) + f(-4) = 38$。我們把剛才算出的兩個結果相加：$(44 + k) + (-12 + k) = 38$。先合併數字部分：$44 - 12 = 32$；再合併字母部分：$k + k = 2k$（很多同學會粗心寫成 $k$，千萬別漏掉）。整條方程化簡成 $32 + 2k = 38$。"
     },
     {
      "title": {
       "en": "Step 4 · Solve for k step-by-step",
       "zh": "第 4 步 · 移項並解出 k"
      },
      "math": "2k = 38 - 32 \\implies 2k = 6 \\implies k = 3",
      "en": "Move 32 across the equals sign to subtract it from 38, giving 2k = 6. Finally, divide both sides by 2 to get k = 3. This matches Option C.",
      "zh": "把左邊的 $+32$ 移到右邊變成減法：$2k = 38 - 32$，算出 $2k = 6$。最後兩邊同除以 $2$，得到 $k = 3$。對應答案選項 C。"
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "6 — Missed adding the two k variables together, mistakenly writing k + 32 = 38, which directly gives k = 6.",
      "zh": "6 —— 同學合併時忘了 $k + k = 2k$，誤寫成 $k + 32 = 38$，結果直接算出 $k = 6$。"
     },
     {
      "opt": "B",
      "en": "-3 — Sign error during transposition, mistakenly calculating 32 - 38 = -6, leading to 2k = -6 and k = -3.",
      "zh": "-3 —— 移項時正負號弄反，把右邊算成 $32 - 38 = -6$，導致解出 $2k = -6$ 及 $k = -3$。"
     },
     {
      "opt": "A",
      "en": "-6 — Made two mistakes at the same time: treated k + k as k, and made a sign slip during transposition.",
      "zh": "-6 —— 同時犯了兩個失誤：把兩個 $k$ 當作一個，而且移項時正負號又弄錯。"
     }
    ],
    "tip": {
     "en": "Always put brackets around negative numbers when substituting into functions! For f(4) and f(-4), the x^2 parts are identical (both 16), while the linear parts +7(4) and +7(-4) cancel each other out completely.",
     "zh": "函數代入負數時「一定要加括號」！其實觀察式子會發現：$x^2$ 在代入 $4$ 和 $-4$ 時數值完全一樣（都是 $16$），而一次項 $+7(4)$ 與 $+7(-4)$ 剛好一正一負完全抵消。"
    }
   }
  },
  "2025-p2-q09": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Use the factor theorem",
       "zh": "第 1 步 · 用因式定理"
      },
      "math": "p(-3) = n(-3)^{3} - 3n(-3) + 36 = 0",
      "en": "$x+3$ is a factor, so $p(-3)=0$.",
      "zh": "$x+3$ 是因式，所以 $p(-3)=0$。",
      "highlight": [
       "p(-3) = 0"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Find n",
       "zh": "第 2 步 · 求 n"
      },
      "math": "-27n + 9n + 36 = 0 \\;\\Rightarrow\\; -18n = -36 \\;\\Rightarrow\\; n = 2",
      "en": "Collect the $n$ terms.",
      "zh": "合併 $n$ 的項。",
      "highlight": [
       "n = 2"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Evaluate p(3)",
       "zh": "第 3 步 · 計算 $p(3)$"
      },
      "math": "p(3) = 2(27) - 3(2)(3) + 36 = 54 - 18 + 36 = 72",
      "en": "Substitute $n=2$ and $x=3$.",
      "zh": "代入 $n=2$、$x=3$。",
      "highlight": [
       "72"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "p(3) = 72",
      "en": "Option D.",
      "zh": "選項 D。",
      "highlight": [
       "72"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$2$ — that is the value of $n$, not of $p(3)$.",
      "zh": "$2$ —— 那是 $n$ 的值，不是 $p(3)$。"
     },
     {
      "opt": "B",
      "en": "$0$ — that is $p(-3)$, the factor condition. The question asks for $p(3)$.",
      "zh": "$0$ —— 那是因式條件 $p(-3)$，題目問的是 $p(3)$。"
     },
     {
      "opt": "A",
      "en": "$-2$ — $n$ with the sign flipped ($-18n=-36$ gives $n=+2$).",
      "zh": "$-2$ —— $n$ 的符號弄反（$-18n=-36$ 得 $n=+2$）。"
     }
    ],
    "tip": {
     "en": "The factor theorem gives an equation for the unknown coefficient; check what the question actually asks for afterwards.",
     "zh": "因式定理只是拿來求未知係數的方程；求完之後要看清題目問的究竟是什麼。"
    }
   }
  },
  "2025-p2-q12": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Write the variation statement",
       "zh": "第 1 步 · 寫出變分關係"
      },
      "math": "z = \\frac{kx^{3}}{y^{2}}",
      "en": "Directly as the cube of $x$ → $x^{3}$ on top; inversely as the square of $y$ → $y^{2}$ below.",
      "zh": "與 $x$ 的立方成正比 → $x^{3}$ 在分子；與 $y$ 的平方成反比 → $y^{2}$ 在分母。",
      "highlight": [
       "z = \\frac{kx^{3}}{y^{2}}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Find k from the given data",
       "zh": "第 2 步 · 用已知數據求 k"
      },
      "math": "3 = \\frac{k(3)^{3}}{6^{2}} = \\frac{27k}{36} \\;\\Rightarrow\\; k = 4",
      "en": "$3 \\times 36 \\div 27 = 4$.",
      "zh": "$3 \\times 36 \\div 27 = 4$。",
      "highlight": [
       "k = 4"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Substitute the new values",
       "zh": "第 3 步 · 代入新的數值"
      },
      "math": "z = \\frac{4(5)^{3}}{2^{2}} = \\frac{4 \\times 125}{4} = 125",
      "en": "Option C.",
      "zh": "選項 C。",
      "highlight": [
       "125"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$25$ — used the square of $x$ instead of the cube ($5^{2}$ appears in the working).",
      "zh": "$25$ —— 把 $x$ 的立方誤當平方（算式中出現 $5^{2}$）。"
     },
     {
      "opt": "A",
      "en": "$5$ — that is just the given $x$; the work of finding $k$ and substituting was skipped.",
      "zh": "$5$ —— 那只是題目給的 $x$，沒有真正求 $k$ 與代入。"
     },
     {
      "opt": "D",
      "en": "$243=3^{5}$ — the relation was treated as a power of 3 instead of the formula $z=\\frac{kx^{3}}{y^{2}}$.",
      "zh": "$243=3^{5}$ —— 把變分關係當成 $3$ 的次方硬算，而非用 $z=\\frac{kx^{3}}{y^{2}}$。"
     }
    ],
    "tip": {
     "en": "Variation questions: write the formula with $k$, find $k$ from the given pair, then substitute — never skip finding $k$.",
     "zh": "變分題三步：寫出含 $k$ 的公式 → 用已知一組數據求 $k$ → 代入新數據。不能跳過求 $k$。"
    }
   }
  },
  "2025-p2-q13": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Write what the recurrence gives",
       "zh": "第 1 步 · 寫出遞推關係"
      },
      "math": "a_{4} = 2a_{3}+a_{2}, \\quad a_{5} = 2a_{4}+a_{3}",
      "en": "With $a_{2}=3$, let the unknown $a_{3}=t$.",
      "zh": "已知 $a_{2}=3$，設未知的 $a_{3}=t$。",
      "highlight": [
       "a_{2}=3"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Solve for t using a_5",
       "zh": "第 2 步 · 用 $a_{5}$ 解 t"
      },
      "math": "a_{4} = 2t+3, \\quad a_{5} = 2(2t+3)+t = 5t+6 = 41 \\;\\Rightarrow\\; t = 7",
      "en": "So $a_{3}=7$ and $a_{4}=2(7)+3=17$.",
      "zh": "所以 $a_{3}=7$，而 $a_{4}=2(7)+3=17$。",
      "highlight": [
       "a_{3}=7",
       "a_{4}=17"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Compute a_6",
       "zh": "第 3 步 · 計算 $a_{6}$"
      },
      "math": "a_{6} = 2a_{5}+a_{4} = 2(41)+17 = 99",
      "en": "Option A.",
      "zh": "選項 A。",
      "highlight": [
       "a_{6} = 99"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$101$ — an arithmetic slip in $a_{4}$ (using $a_{4}=19$ gives $2(41)+19=101$).",
      "zh": "$101$ —— 算 $a_{4}$ 時出錯（若誤得 $a_{4}=19$，則 $2(41)+19=101$）。"
     },
     {
      "opt": "C",
      "en": "$239$ — the recurrence was used one step too far ($2(99)+41$).",
      "zh": "$239$ —— 遞推多用了一步（$2(99)+41$）。"
     },
     {
      "opt": "D",
      "en": "$243$ — the follow-through from the $101$ error ($2(101)+41=243$).",
      "zh": "$243$ —— 由 $101$ 那個錯誤一路延伸（$2(101)+41=243$）。"
     }
    ],
    "tip": {
     "en": "For recurrence sequences, fill in the missing terms first (from the known terms), then step forward to the term asked.",
     "zh": "遞推數列先「補齊中間項」（由已知項反推），再一步步推到題目要的那一項。"
    }
   }
  },
  "2025-p2-q29": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Read the bar chart",
       "zh": "第 1 步 · 讀出柱狀圖數據"
      },
      "math": "3\\to4,\\; 4\\to8,\\; 5\\to6,\\; 6\\to2,\\; 7\\to2",
      "en": "Books read (value) : number of teachers (frequency). Total $=4+8+6+2+2=22$ teachers.",
      "zh": "閱讀本數（值）：教師人數（頻數）。合共 $4+8+6+2+2=22$ 位教師。",
      "highlight": [
       "22"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Locate the quartiles by position",
       "zh": "第 2 步 · 用位置定位四分位數"
      },
      "math": "Q_{1}:\\frac{n+1}{4}=\\frac{23}{4}=5.75;\\quad Q_{3}:\\frac{3(n+1)}{4}=\\frac{69}{4}=17.25",
      "en": "Cumulative counts: the 3's occupy positions 1–4, the 4's 5–12, the 5's 13–18, the 6's 19–20 and the 7's 21–22.",
      "zh": "累積計數：$3$ 佔第 1–4 位、$4$ 佔第 5–12 位、$5$ 佔第 13–18 位、$6$ 佔 19–20 位、$7$ 佔 21–22 位。",
      "highlight": [
       "5.75",
       "17.25"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Evaluate Q₁ and Q₃",
       "zh": "第 3 步 · 求 $Q_{1}$ 與 $Q_{3}$"
      },
      "math": "Q_{1}=4 \\;\\text{(positions 5,6 both 4)};\\quad Q_{3}=5 \\;\\text{(positions 17,18 both 5)}",
      "en": "Both surrounding positions fall in the same block, so no interpolation is needed.",
      "zh": "前後兩個位置都落在同一組，所以無需插值。",
      "highlight": [
       "Q_{1}=4",
       "Q_{3}=5"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Inter-quartile range",
       "zh": "第 4 步 · 四分位距"
      },
      "math": "IQR = Q_{3} - Q_{1} = 5 - 4 = 1",
      "en": "Option A.",
      "zh": "選項 A。",
      "highlight": [
       "1"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$4$ — that is the RANGE ($7-3=4$), not the inter-quartile range.",
      "zh": "$4$ —— 那是全距（$7-3=4$），不是四分位距。"
     },
     {
      "opt": "C",
      "en": "$3$ — using $n/4=5.5$ and $3n/4=16.5$ as positions (which bracket 4 and 7) instead of the $(n+1)/4$ convention.",
      "zh": "$3$ —— 用了 $n/4=5.5$ 與 $3n/4=16.5$ 的位置（夾住 $4$ 和 $7$），而非 $(n+1)/4$ 慣例。"
     },
     {
      "opt": "B",
      "en": "$2$ — subtracting the number of categories instead of the quartile values.",
      "zh": "$2$ —— 用組別數相減而非四分位數值相減。"
     }
    ],
    "tip": {
     "en": "For a frequency table, build the cumulative counts first — quartiles are positions, never the $x$-values themselves.",
     "zh": "頻數表一定要先做累積計數——四分位數是「位置」，不是 $x$ 值本身。"
    }
   }
  },
  "2025-p2-q10": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Compounding half-yearly",
       "zh": "第 1 步 · 半年複利"
      },
      "math": "r=\\frac{3\\%}{2}=1.5\\%,\\quad n=5\\times2=10",
      "en": "Half-yearly compounding halves the rate per period and doubles the number of periods.",
      "zh": "半年複利：每期利率減半，期數加倍。",
      "highlight": [
       "1.5\\%",
       "n=10"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Apply the compound interest formula",
       "zh": "第 2 步 · 代入複利公式"
      },
      "math": "A=40000\\left(1+\\frac{0.03}{2}\\right)^{10}=40000(1.015)^{10}",
      "en": "Use $A=P(1+\\frac{r}{n})^{nt}$ with $P=40000$, $r=0.03$, $n=2$, $t=5$.",
      "zh": "用 $A=P(1+\\frac{r}{n})^{nt}$，其中 $P=40000$、$r=0.03$、$n=2$、$t=5$。",
      "highlight": [
       "40000(1.015)^{10}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Evaluate",
       "zh": "第 3 步 · 計算"
      },
      "math": "(1.015)^{10}=1.160541\\ldots",
      "en": "$1.015^{10}\\approx1.160541$.",
      "zh": "$1.015^{10}\\approx1.160541$。",
      "highlight": [
       "1.160541"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "40000\\times1.160541\\approx\\$46\\,422",
      "en": "Correct to the nearest dollar the amount is 46 422 — option C.",
      "zh": "取至最接近的元，本利和為 46 422 —— 答案 C。",
      "highlight": [
       "\\$46\\,422"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$46\\,371$ — you used **annual** compounding: $40000(1.03)^{5}=46371$. The question says half-yearly.",
      "zh": "$46\\,371$ —— 用了**每年**複利：$40000(1.03)^{5}=46371$。題目明說是半年複利。"
     },
     {
      "opt": "A",
      "en": "$46\\,000$ — simple interest: $40000(1+3\\%\\times5)=46000$.",
      "zh": "$46\\,000$ —— 用了單利：$40000(1+3\\%\\times5)=46000$。"
     },
     {
      "opt": "D",
      "en": "$46\\,465$ — not produced by the correct model; it comes from a slip in the index (an extra period) or from mis-keying $1.015^{10}$ into the calculator.",
      "zh": "$46\\,465$ —— 正確模型算不出這個數，通常是把 $1.015^{10}$ 在計算機上按錯（多按了一期）。"
     }
    ],
    "tip": {
     "en": "Compounded $n$ times a year ⇒ rate $\\div n$, periods $\\times n$. Annual compounding always gives the *smallest* amount — if you see a bigger answer with a bigger $n$, check your index.",
     "zh": "一年複利 $n$ 次 ⇒ 利率 $\\div n$、期數 $\\times n$。期數越多本利和越大；算出比每年複利更小的數就一定有錯。"
    }
   }
  },
  "2025-p2-q11": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Turn ratios into equations",
       "zh": "第 1 步 · 把連比寫成方程"
      },
      "math": "\\alpha+2\\beta=4k,\\quad \\beta+2\\gamma=9k,\\quad \\gamma+2\\alpha=5k",
      "en": "A ratio $4:9:5$ means the three expressions are $4k,9k,5k$ for some $k\\neq0$.",
      "zh": "連比 $4:9:5$ 表示三個式子分別是 $4k,9k,5k$（$k\\neq0$）。",
      "highlight": [
       "4k",
       "9k",
       "5k"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Express $\\alpha$ and $\\gamma$ in terms of $k$ and $\\beta$",
       "zh": "第 2 步 · 用 $k$ 與 $\\beta$ 表示 $\\alpha$、$\\gamma$"
      },
      "math": "\\alpha=4k-2\\beta,\\quad \\gamma=\\frac{9k-\\beta}{2}",
      "en": "Rearrange the first two equations only — the third is kept for the next step.",
      "zh": "先只用首兩個方程移項，第三個留待下一步。",
      "highlight": [
       "\\alpha=4k-2\\beta"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Substitute into the third equation",
       "zh": "第 3 步 · 代入第三式"
      },
      "math": "\\frac{9k-\\beta}{2}+2(4k-2\\beta)=5k \\;\\Rightarrow\\; 25k-9\\beta=10k",
      "en": "Multiply by 2 to clear the fraction.",
      "zh": "乘 2 消去分母。",
      "highlight": [
       "25k-9\\beta=10k"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Solve and take the ratio",
       "zh": "第 4 步 · 解出並取比"
      },
      "math": "\\beta=\\frac{5k}{3},\\quad \\alpha=4k-\\frac{10k}{3}=\\frac{2k}{3}",
      "en": "So $\\alpha:\\beta=\\frac{2k}{3}:\\frac{5k}{3}=2:5$.",
      "zh": "所以 $\\alpha:\\beta=\\frac{2k}{3}:\\frac{5k}{3}=2:5$。",
      "highlight": [
       "\\alpha:\\beta=2:5"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\alpha:\\beta=2:5",
      "en": "That is option A. (Check: $\\gamma=\\frac{11k}{3}$ and $\\gamma+2\\alpha=5k$ ✓.)",
      "zh": "即選項 A。（驗算：$\\gamma=\\frac{11k}{3}$，$\\gamma+2\\alpha=5k$ ✓。）",
      "highlight": [
       "2:5"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$5:2$ — this is $\\beta:\\alpha$, the ratio the other way round. Read the last line of the question again.",
      "zh": "$5:2$ —— 這是 $\\beta:\\alpha$，次序倒轉了。看清題目最後要求的是 $\\alpha:\\beta$。"
     },
     {
      "opt": "C",
      "en": "$128:149$ — appears when the three equations are added incorrectly (only part of a bracket is doubled).",
      "zh": "$128:149$ —— 通常是把方程相加時只乘了括號的一部分而出錯。"
     },
     {
      "opt": "D",
      "en": "$149:128$ — the reciprocal of C, i.e. the same slip with the ratio reversed.",
      "zh": "$149:128$ —— C 的倒數，即同一個錯誤再把比倒轉。"
     }
    ],
    "tip": {
     "en": "For a continued ratio $A:B:C=p:q:r$, write $A=pk,\\ B=qk,\\ C=rk$. Using one unknown $k$ turns three ratios into three easy linear equations.",
     "zh": "連比 $A:B:C=p:q:r$ 就寫 $A=pk,\\ B=qk,\\ C=rk$：引入一個 $k$，三條比就變成三條一次方程。"
    }
   }
  },
  "2025-p2-q14": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Read the two intercepts from the graph",
       "zh": "第 1 步 · 從圖讀出兩個截距"
      },
      "math": "x\\text{-intercept}=\\frac{7}{p},\\quad y\\text{-intercept}=\\frac{7}{q}",
      "en": "Put $y=0$ and $x=0$ in $px+qy=7$.",
      "zh": "在 $px+qy=7$ 中分別令 $y=0$、$x=0$。",
      "highlight": [
       "\\frac{7}{p}",
       "\\frac{7}{q}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · The $y$-intercept is above 1",
       "zh": "第 2 步 · $y$ 截距在 1 之上"
      },
      "math": "\\frac{7}{q}>1 \\;\\Rightarrow\\; q<7",
      "en": "So statement II ($q>7$) is **false**.",
      "zh": "所以命題 II（$q>7$）**錯誤**。",
      "highlight": [
       "q<7"
      ]
     },
     {
      "title": {
       "en": "Step 3 · The $x$-intercept is less than 1",
       "zh": "第 3 步 · $x$ 截距小於 1"
      },
      "math": "\\frac{7}{p}<1 \\;\\Rightarrow\\; p>7",
      "en": "So statement I ($p>7$) is **true**, and since $q<7<p$, statement III ($q>p$) is **false**.",
      "zh": "所以命題 I（$p>7$）**正確**；又 $q<7<p$，故命題 III（$q>p$）**錯誤**。",
      "highlight": [
       "p>7",
       "q<p"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{I only}",
      "en": "Only statement I is true — option A.",
      "zh": "只有命題 I 正確 —— 答案 A。",
      "highlight": [
       "\\text{I only}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$\\text{II and III only}$ — comes from reading the intercepts off the graph the wrong way round (thinking a larger $y$-intercept means a larger $q$).",
      "zh": "$\\text{II 與 III}$ —— 把截距與係數的關係看反了：$y$ 截距越大，$q$ 其實越小。"
     },
     {
      "opt": "C",
      "en": "$\\text{I and III only}$ — I is right, but $q>p$ contradicts $q<7<p$ unless $p$ and $q$ are negative, which the picture rules out.",
      "zh": "$\\text{I 與 III}$ —— I 對，但 $q<7<p$ 與 $q>p$ 矛盾；要 $q>p$ 就要兩者皆負，而圖中兩截距皆為正。"
     },
     {
      "opt": "B",
      "en": "$\\text{II only}$ — picking the trap: the $y$-intercept is *bigger than 1*, so $\\frac{7}{q}>1$, not $q>7$.",
      "zh": "$\\text{只有 II}$ —— 落入陷阱：$y$ 截距大於 1 表示 $\\frac{7}{q}>1$，不是 $q>7$。"
     }
    ],
    "tip": {
     "en": "Intercept form: $\\frac{x}{a}+\\frac{y}{b}=1$ with $a=\\frac{7}{p}$, $b=\\frac{7}{q}$. Big intercept ⇒ small coefficient.",
     "zh": "截距式 $\\frac{x}{a}+\\frac{y}{b}=1$，其中 $a=\\frac{7}{p}$、$b=\\frac{7}{q}$：截距越大，係數越小。"
    }
   }
  },
  "2025-p2-q15": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Arc length from the perimeter",
       "zh": "第 1 步 · 由周界求弧長"
      },
      "math": "\\text{arc}=12\\pi-2(3\\pi)=6\\pi\\text{ cm}",
      "en": "A sector's perimeter is two radii plus the arc, so arc $=12\\pi-6\\pi=6\\pi$ cm.",
      "zh": "扇形周界 = 兩條半徑 + 弧長，所以弧長 $=12\\pi-6\\pi=6\\pi$ cm。",
      "highlight": [
       "\\text{arc}=6\\pi\\text{ cm}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Arc as a fraction of the circumference",
       "zh": "第 2 步 · 弧長佔圓周的幾分之幾"
      },
      "math": "\\frac{\\theta}{360^{\\circ}}=\\frac{6\\pi}{2\\pi(3\\pi)}=\\frac{1}{\\pi}",
      "en": "Circumference $=2\\pi r=6\\pi^{2}$, so the arc is $\\frac{6\\pi}{6\\pi^{2}}=\\frac{1}{\\pi}$ of the whole circle: $\\frac{\\theta}{360^{\\circ}}=\\frac{1}{\\pi}$, i.e. $\\theta=\\frac{360^{\\circ}}{\\pi}\\approx114.6^{\\circ}>100^{\\circ}$ — statement III is **true**.",
      "zh": "圓周 $=2\\pi r=6\\pi^{2}$，弧長佔圓周的 $\\frac{6\\pi}{6\\pi^{2}}=\\frac{1}{\\pi}$，故 $\\frac{\\theta}{360^{\\circ}}=\\frac{1}{\\pi}$，即 $\\theta=\\frac{360^{\\circ}}{\\pi}\\approx114.6^{\\circ}>100^{\\circ}$ —— 命題 III **正確**。",
      "highlight": [
       "\\frac{\\theta}{360^{\\circ}}=\\frac{1}{\\pi}",
       "\\theta\\approx114.6^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Area of the sector",
       "zh": "第 3 步 · 扇形面積"
      },
      "math": "\\frac{\\theta}{360^{\\circ}}\\times\\pi r^{2}=\\frac{1}{\\pi}\\times\\pi\\times9\\pi^{2}=9\\pi^{2}\\text{ cm}^{2}",
      "en": "Area $=\\frac{\\theta}{360^{\\circ}}\\times\\pi r^{2}$; the $\\pi$ cancels exactly and leaves $9\\pi^{2}$ cm² — statement I is **true**.",
      "zh": "面積 $=\\frac{\\theta}{360^{\\circ}}\\times\\pi r^{2}$；$\\pi$ 剛好約掉，得 $9\\pi^{2}$ cm² —— 命題 I **正確**。",
      "highlight": [
       "9\\pi^{2}\\text{ cm}^{2}"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Chord $MN$ of the isosceles triangle",
       "zh": "第 4 步 · 等腰三角形的弦 $MN$"
      },
      "math": "MN=2r\\sin\\frac{\\theta}{2}=6\\pi\\sin 57.3^{\\circ}\\approx15.86",
      "en": "$OM=ON=r$, so the perpendicular from $O$ bisects $MN$: $MN=2r\\sin\\frac{\\theta}{2}$, and $\\frac{\\theta}{2}\\approx57.3^{\\circ}$.",
      "zh": "$OM=ON=r$，由 $O$ 作垂線會把 $MN$ 平分，故 $MN=2r\\sin\\frac{\\theta}{2}$，其中 $\\frac{\\theta}{2}\\approx57.3^{\\circ}$。",
      "highlight": [
       "MN=2r\\sin\\frac{\\theta}{2}",
       "MN\\approx15.86"
      ]
     },
     {
      "title": {
       "en": "Step 5 · Compare the perimeter with 35 cm",
       "zh": "第 5 步 · 與 35 cm 比較"
      },
      "math": "2r+MN=2(3\\pi)+15.86\\approx34.71<35",
      "en": "Perimeter of $\\Delta OMN$ $=2(3\\pi)+15.86\\approx34.71$ cm, which is less than 35 — statement II is **true**.",
      "zh": "$\\Delta OMN$ 的周界 $=2(3\\pi)+15.86\\approx34.71$ cm，小於 35 —— 命題 II **正確**。",
      "highlight": [
       "34.71<35"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{I, II and III}",
      "en": "All three statements are true — option D.",
      "zh": "三項皆正確 —— 答案 D。",
      "highlight": [
       "\\text{I, II and III}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$\\text{II and III only}$ — you dropped the fraction: the sector is only $\\frac{1}{\\pi}$ of the circle, so its area is $\\frac{1}{\\pi}\\times\\pi r^{2}=9\\pi^{2}$, not the whole circle's $9\\pi^{3}$.",
      "zh": "$\\text{II 與 III}$ —— 忘了乘比例：扇形只佔圓的 $\\frac{1}{\\pi}$，面積是 $\\frac{1}{\\pi}\\times\\pi r^{2}=9\\pi^{2}$，不是整圓的 $9\\pi^{3}$。"
     },
     {
      "opt": "B",
      "en": "$\\text{I and III only}$ — you used the arc $6\\pi$ as if it were the chord $MN$: then $6\\pi+6\\pi=37.7>35$ makes II look false. A chord is always shorter than its arc ($15.86$ cm).",
      "zh": "$\\text{I 與 III}$ —— 把弧長 $6\\pi$ 當成弦長 $MN$：那麼 $6\\pi+6\\pi=37.7>35$，就會誤判 II 不成立。弦一定比弧短（$15.86$ cm）。"
     },
     {
      "opt": "A",
      "en": "$\\text{I and II only}$ — you treated the $100^{\\circ}$ in statement III as if it were the sector's angle. The angle has to be found: $\\theta=\\frac{360^{\\circ}}{\\pi}\\approx114.6^{\\circ}$.",
      "zh": "$\\text{I 與 II}$ —— 把命題 III 的 $100^{\\circ}$ 誤當成圓心角。$\\theta$ 要自己算：$\\theta=\\frac{360^{\\circ}}{\\pi}\\approx114.6^{\\circ}$。"
     }
    ],
    "tip": {
     "en": "Sector, all in **degrees**: arc $=\\frac{\\theta}{360^{\\circ}}\\times2\\pi r$, area $=\\frac{\\theta}{360^{\\circ}}\\times\\pi r^{2}$, chord $=2r\\sin\\frac{\\theta}{2}$. Get $\\theta$ from $\\frac{\\text{arc}}{\\text{circumference}}$ — the fraction makes the $\\pi$ cancel by itself.",
     "zh": "扇形一律用**度**：弧長 $=\\frac{\\theta}{360^{\\circ}}\\times2\\pi r$、面積 $=\\frac{\\theta}{360^{\\circ}}\\times\\pi r^{2}$、弦長 $=2r\\sin\\frac{\\theta}{2}$。用「弧長 ÷ 圓周」求 $\\theta$，比例式裡的 $\\pi$ 會自己約掉。"
    }
   }
  },
  "2025-p2-q16": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Total surface area of the cylinder",
       "zh": "第 1 步 · 圓柱總表面積"
      },
      "math": "2\\pi r^{2}+2\\pi rh=492\\pi,\\quad h=35",
      "en": "Two circular ends plus the curved surface $2\\pi rh$.",
      "zh": "兩個圓底加曲面 $2\\pi rh$。",
      "highlight": [
       "2\\pi r^{2}+2\\pi rh=492\\pi"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Form a quadratic in $r$",
       "zh": "第 2 步 · 化成 $r$ 的二次方程"
      },
      "math": "r^{2}+35r-246=0",
      "en": "Divide every term by $2\\pi$.",
      "zh": "全式除以 $2\\pi$。",
      "highlight": [
       "r^{2}+35r-246=0"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Solve for $r$",
       "zh": "第 3 步 · 解出 $r$"
      },
      "math": "r=\\frac{-35+\\sqrt{35^{2}+4\\times246}}{2}=\\frac{-35+47}{2}=6",
      "en": "$\\sqrt{2209}=47$; reject the negative root.",
      "zh": "$\\sqrt{2209}=47$；負根不合，捨去。",
      "highlight": [
       "r=6"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Volume of the sphere",
       "zh": "第 4 步 · 球體體積"
      },
      "math": "V=\\frac{4}{3}\\pi r^{3}=\\frac{4}{3}\\pi(216)=288\\pi\\text{ cm}^{3}",
      "en": "The sphere has the same radius $6$ cm — option B.",
      "zh": "球體半徑同為 $6$ cm，故體積 $288\\pi\\text{ cm}^{3}$ —— 答案 B。",
      "highlight": [
       "288\\pi\\text{ cm}^{3}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$864\\pi$ — you used $4\\pi r^{3}$ and forgot the factor $\\frac13$ (that expression is $4\\pi r^{3}=864\\pi$).",
      "zh": "$864\\pi$ —— 用了 $4\\pi r^{3}$，忘了 $\\frac13$（$4\\pi r^{3}=864\\pi$）。"
     },
     {
      "opt": "A",
      "en": "$144\\pi$ — half of the correct value, e.g. from using $\\frac{4}{3}\\pi r^{3}$ with $r^{3}=108$ or from treating $r=3$.",
      "zh": "$144\\pi$ —— 只有正確值的一半，例如把 $r$ 當成 3 或 $r^{3}$ 算錯。"
     },
     {
      "opt": "C",
      "en": "$576\\pi$ — you solved the quadratic wrongly and took $r\\approx7.56$, or multiplied the volume by 2.",
      "zh": "$576\\pi$ —— 二次方程解錯取了較大的 $r$，或把體積乘了 2。"
     }
    ],
    "tip": {
     "en": "$\\sqrt{2209}=47$ and $\\sqrt{1225}=35$: paper setters often choose numbers so the quadratic factorises nicely. Always test the positive root against the given total surface area.",
     "zh": "$\\sqrt{2209}=47$、$\\sqrt{1225}=35$：命題常刻意讓二次方程有整數根。求出 $r$ 後代回表面積檢查一次。"
    }
   }
  },
  "2025-p2-q20": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Draw the two heights",
       "zh": "第 1 步 · 作兩條高"
      },
      "math": "PM\\perp SR,\\;QN\\perp SR,\\;PM=QN=h",
      "en": "Drop perpendiculars from $P$ and $Q$ to the line $SR$, with feet $M$ and $N$. Since $PQ\\parallel SR$, $PMQN$ is a rectangle, so $PQ=MN$ — the answer is just $MS+SR+RN$.",
      "zh": "由 $P$、$Q$ 作垂線到直線 $SR$，垂足為 $M$、$N$。因 $PQ\\parallel SR$，$PMQN$ 是矩形，故 $PQ=MN$ —— 答案就是 $MS+SR+RN$。",
      "highlight": [
       "PQ=MN"
      ]
     },
     {
      "title": {
       "en": "Step 2 · The $120^{\\circ}$ angle: get $h$ and $MS$",
       "zh": "第 2 步 · 由 $120^{\\circ}$ 求 $h$ 與 $MS$"
      },
      "math": "\\angle PSM=180^{\\circ}-120^{\\circ}=60^{\\circ},\\;\\;h=41\\sin60^{\\circ},\\;\\;MS=41\\cos60^{\\circ}=20.5",
      "en": "$\\angle PSR=120^{\\circ}>90^{\\circ}$, so $M$ falls on the extension of $SR$ beyond $S$ and $\\angle PSM=60^{\\circ}$. In the right triangle $PSM$: $h=PS\\sin60^{\\circ}=\\frac{41\\sqrt3}{2}$ and $MS=PS\\cos60^{\\circ}=20.5$ cm.",
      "zh": "$\\angle PSR=120^{\\circ}>90^{\\circ}$，故 $M$ 落在 $SR$ 向 $S$ 以外的延線上，$\\angle PSM=60^{\\circ}$。在直角三角形 $PSM$ 中：$h=PS\\sin60^{\\circ}=\\frac{41\\sqrt3}{2}$、$MS=PS\\cos60^{\\circ}=20.5$ cm。",
      "highlight": [
       "\\angle PSM=60^{\\circ}",
       "MS=20.5\\text{ cm}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · The $150^{\\circ}$ angle gives $RN$",
       "zh": "第 3 步 · 由 $150^{\\circ}$ 求 $RN$"
      },
      "math": "\\angle QRN=180^{\\circ}-150^{\\circ}=30^{\\circ},\\quad RN=\\frac{h}{\\tan30^{\\circ}}=\\frac{41\\sqrt3}{2}\\times\\sqrt3=61.5",
      "en": "Similarly $\\angle QRS=150^{\\circ}$ puts $N$ beyond $R$, and $\\angle QRN=30^{\\circ}$. So $RN=\\frac{h}{\\tan30^{\\circ}}=\\frac{41\\sqrt3}{2}\\cdot\\sqrt3=\\frac{123}{2}=61.5$ cm.",
      "zh": "同樣，$\\angle QRS=150^{\\circ}$ 使 $N$ 落在 $R$ 之外，$\\angle QRN=30^{\\circ}$。故 $RN=\\frac{h}{\\tan30^{\\circ}}=\\frac{41\\sqrt3}{2}\\cdot\\sqrt3=\\frac{123}{2}=61.5$ cm。",
      "highlight": [
       "\\angle QRN=30^{\\circ}",
       "RN=61.5\\text{ cm}"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Add the three parts",
       "zh": "第 4 步 · 三段相加"
      },
      "math": "PQ=MS+SR+RN=20.5+53+61.5=135\\text{ cm}",
      "en": "$PQ=MN=MS+SR+RN=20.5+53+61.5=135$ cm — option D.",
      "zh": "$PQ=MN=MS+SR+RN=20.5+53+61.5=135$ cm —— 答案 D。",
      "highlight": [
       "PQ=135\\text{ cm}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$106\\text{ cm}$ — you used $41\\cos60^{\\circ}$ on both sides but forgot that the left part must be **added** (the $120^{\\circ}$ angle pushes $M$ outside $SR$): $53+20.5+20.5=94$ or with one part doubled you land near $106$.",
      "zh": "$106\\text{ cm}$ —— 兩邊都用 $41\\cos60^{\\circ}$ 但忘記左邊那段要**加**（$120^{\\circ}$ 把 $M$ 推到 $SR$ 之外）：$53+20.5+20.5=94$，重複一段就會落在 $106$ 附近。"
     },
     {
      "opt": "B",
      "en": "$100\\text{ cm}$ — you read the $150^{\\circ}$ as $30^{\\circ}$ and used $RN=h\\sin30^{\\circ}$ instead of $\\frac{h}{\\tan30^{\\circ}}$; keep straight which side is opposite and which is adjacent.",
      "zh": "$100\\text{ cm}$ —— 把 $150^{\\circ}$ 當成 $30^{\\circ}$ 後用了 $RN=h\\sin30^{\\circ}$（應用 $\\frac{h}{\\tan30^{\\circ}}$）；要分清哪條邊是對邊、哪條是鄰邊。"
     },
     {
      "opt": "A",
      "en": "$82\\text{ cm}$ — just $2\\times PS=82$, as if the two legs were parallel to the bases.",
      "zh": "$82\\text{ cm}$ —— 只把 $PS$ 乘 $2$ 得 $82$，彷彿兩腰都與底平行。"
     }
    ],
    "tip": {
     "en": "Trapezium with two base angles: drop the two heights, then handle each right triangle on its own. An obtuse base angle ($120^{\\circ}$ or $150^{\\circ}$) means the foot falls **outside** the base — the angle you use inside the right triangle is $180^{\\circ}-\\theta$, and those outside pieces are added to the base to get the other parallel side.",
     "zh": "梯形給了兩個底角：作兩條高，逐個直角三角形處理。底角是鈍角（$120^{\\circ}$／$150^{\\circ}$）時，垂足會落在**底邊之外**；直角三角形內要用的角是 $180^{\\circ}-\\theta$，而那些「外面」的部分要加到另一條平行邊上。"
    },
    "alt": [
     {
      "name": {
       "en": "Coordinate method (beyond the syllabus)",
       "zh": "坐標法（超出必修）"
      },
      "en": "Put $S(0,0)$, $R(53,0)$ and $PQ\\parallel SR$. Then $P=41(\\cos120^{\\circ},\\sin120^{\\circ})=(-20.5,35.51)$; the leg $RQ$ rises to the same height, so its horizontal run is $\\frac{35.51}{\\tan30^{\\circ}}=61.5$ and $Q=(114.5,35.51)$. Hence $PQ=114.5-(-20.5)=135$ cm.",
      "zh": "取 $S(0,0)$、$R(53,0)$ 且 $PQ\\parallel SR$。得 $P=41(\\cos120^{\\circ},\\sin120^{\\circ})=(-20.5,35.51)$；$RQ$ 要升到同一高度，水平走 $\frac{35.51}{\tan30^{\\circ}}=61.5$，故 $Q=(114.5,35.51)$，$PQ=114.5-(-20.5)=135$ cm。"
     }
    ]
   }
  },
  "2025-p2-q21": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Area of $\\Delta ADE$ gives $DE$",
       "zh": "第 1 步 · 由 $\\Delta ADE$ 面積求 $DE$"
      },
      "math": "\\frac{1}{2}\\times AE\\times DE=150,\\quad AE=20 \\;\\Rightarrow\\; DE=15",
      "en": "$\\angle AED=90^{\\circ}$, so $AE$ and $DE$ are the two legs.",
      "zh": "$\\angle AED=90^{\\circ}$，$AE$ 與 $DE$ 是兩條直角邊。",
      "highlight": [
       "DE=15"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Hypotenuse $AD$",
       "zh": "第 2 步 · 斜邊 $AD$"
      },
      "math": "AD=\\sqrt{20^{2}+15^{2}}=25\\text{ cm}",
      "en": "$AD$ is also the width of the rectangle.",
      "zh": "$AD$ 同時是矩形的闊（底邊）。",
      "highlight": [
       "AD=25\\text{ cm}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Where is the foot of the altitude?",
       "zh": "第 3 步 · 高的垂足在哪裡"
      },
      "math": "AF=\\frac{AE^{2}}{AD}=\\frac{400}{25}=16",
      "en": "In a right triangle the projection of a leg on the hypotenuse is leg²$\\div$hypotenuse.",
      "zh": "直角三角形中，一條直角邊在斜邊上的投影 = 該邊² $\\div$ 斜邊。",
      "highlight": [
       "AF=16"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Distance from $E$ to $CD$",
       "zh": "第 4 步 · $E$ 到 $CD$ 的距離"
      },
      "math": "25-16=9\\text{ cm}",
      "en": "$CD$ is perpendicular to $AD$ at $D$, so the required distance is horizontal — option B.",
      "zh": "$CD$ 在 $D$ 與 $AD$ 垂直，所求距離是水平方向 —— 答案 B。",
      "highlight": [
       "9\\text{ cm}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$12$ — this is the **height** of $E$ above $AD$ ($\\frac{20\\times15}{25}=12$), not its distance from the side $CD$.",
      "zh": "$12$ —— 這是 $E$ 到 $AD$ 的**高**（$\\frac{20\\times15}{25}=12$），不是到 $CD$ 的距離。"
     },
     {
      "opt": "D",
      "en": "$15$ — you stopped at $DE$.",
      "zh": "$15$ —— 只算到 $DE$ 就停手了。"
     },
     {
      "opt": "A",
      "en": "$8$ — from rounding $\\frac{400}{25}$ incorrectly or using $AE\\times DE\\div AD$ with the wrong denominator.",
      "zh": "$8$ —— 投影長度算錯（把分母取錯）所致。"
     }
    ],
    "tip": {
     "en": "Right triangle $\\Delta AED$: legs $20,15$, hypotenuse $25$ ($3$-$4$-$5$ ×5). Height $= \\frac{leg_1\\times leg_2}{hypotenuse}$, projections $=\\frac{leg^2}{hypotenuse}$.",
     "zh": "直角三角形 $\\Delta AED$：直角邊 $20,15$、斜邊 $25$（$3$-$4$-$5$ 的 5 倍）。高 $=\\frac{兩直角邊積}{斜邊}$；投影 $=\\frac{邊^{2}}{斜邊}$。"
    }
   }
  },
  "2025-p2-q22": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Turn the given angles into arcs",
       "zh": "第 1 步 · 把已知角化成弧"
      },
      "math": "\\angle RTS=33^{\\circ}\\Rightarrow \\overset{\\frown}{RS}=66^{\\circ},\\quad \\angle URV=33^{\\circ}\\Rightarrow \\overset{\\frown}{UV}=66^{\\circ}",
      "en": "An inscribed angle is half the arc it stands on.",
      "zh": "圓周角是所對弧的一半。",
      "highlight": [
       "66^{\\circ}",
       "66^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Parallel chords give equal arcs",
       "zh": "第 2 步 · 平行弦截出等弧"
      },
      "math": "RT\\parallel VU \\;\\Rightarrow\\; \\overset{\\frown}{RV}=\\overset{\\frown}{TU}=x",
      "en": "Arcs between two parallel chords are equal.",
      "zh": "兩條平行弦之間的弧相等。",
      "highlight": [
       "\\overset{\\frown}{RV}=\\overset{\\frown}{TU}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · The bisector makes them equal",
       "zh": "第 3 步 · 角平分線再給一個等式"
      },
      "math": "\\angle SRT=\\frac{1}{2}\\overset{\\frown}{ST}=\\angle TRU=\\frac{1}{2}\\overset{\\frown}{TU} \\;\\Rightarrow\\; \\overset{\\frown}{ST}=x",
      "en": "$RT$ bisects $\\angle SRU$, so arcs $ST$ and $TU$ are equal.",
      "zh": "$RT$ 平分 $\\angle SRU$，故弧 $ST$ 與弧 $TU$ 相等。",
      "highlight": [
       "\\overset{\\frown}{ST}=x"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Solve for $x$",
       "zh": "第 4 步 · 解出 $x$"
      },
      "math": "66+66+3x=360 \\;\\Rightarrow\\; x=76^{\\circ}",
      "en": "The five arcs fill the whole circle.",
      "zh": "五段弧合起來是整個圓。",
      "highlight": [
       "\\overset{\\frown}{TU}=76^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\angle RUT=\\frac{1}{2}(66^{\\circ}+76^{\\circ})=71^{\\circ}",
      "en": "It stands on arc $RT=\\overset{\\frown}{RS}+\\overset{\\frown}{ST}$ — option D.",
      "zh": "它對着弧 $RT=\\overset{\\frown}{RS}+\\overset{\\frown}{ST}$ —— 答案 D。",
      "highlight": [
       "71^{\\circ}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$36^{\\circ}$ — using arc $TU=72^{\\circ}$ (one third of $360-132$) instead of $76^{\\circ}$: you forgot to subtract *both* the $66^{\\circ}$ arcs.",
      "zh": "$36^{\\circ}$ —— 把弧 $TU$ 當成 $72^{\\circ}$（只減了一個 $66^{\\circ}$），漏減另一個。"
     },
     {
      "opt": "B",
      "en": "$49^{\\circ}$ — stopping at half of arc $ST$ in the wrong place, e.g. $\\frac{1}{2}(33+66)$.",
      "zh": "$49^{\\circ}$ —— 把 $\\frac{1}{2}(33+66)=49.5$ 當成答案，混淆了圓周角與弧。"
     },
     {
      "opt": "C",
      "en": "$65^{\\circ}$ — treating $\\angle RUT$ as $\\frac{1}{2}\\times$ arc $RU$ with a wrong arc.",
      "zh": "$65^{\\circ}$ —— 對錯了弧（取了弧 $RU$ 而不是 $RT$）。"
     }
    ],
    "tip": {
     "en": "Circle geometry: turn every given angle into its arc first, then look for the two arc-equalities setters love — parallel chords, and an angle bisector.",
     "zh": "圓形幾何：先把每個已知角化成弧，然後找兩個最常考的等弧條件 —— 平行弦、以及角平分線。"
    }
   }
  },
  "2025-p2-q23": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · The two right angles make a trapezium",
       "zh": "第 1 步 · 兩個直角造就梯形"
      },
      "math": "\\angle BAC=\\angle ACD=90^{\\circ}\\;\\Rightarrow\\;AB\\parallel CD",
      "en": "$AB$ and $CD$ are both perpendicular to $AC$, so $AB\\parallel CD$: the figure is a trapezium whose parallel sides are $AB$ and $CD$, with $AC$ the perpendicular distance between them.",
      "zh": "$AB$ 與 $CD$ 都垂直於 $AC$，故 $AB\\parallel CD$：圖形是以 $AB$、$CD$ 為平行邊、$AC$ 為兩者距離的梯形。",
      "highlight": [
       "AB\\parallel CD"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Name the three lengths",
       "zh": "第 2 步 · 設三條長度"
      },
      "math": "AB=x,\\quad CD=y,\\quad AC=h",
      "en": "Both $\\Delta ABC$ (right angle at $A$) and $\\Delta ADC$ (right angle at $C$) contain $AC$, so $\\tan\\angle ABC=\\frac{AC}{AB}=\\frac{h}{x}$ and $\\tan\\angle ADC=\\frac{AC}{CD}=\\frac{h}{y}$.",
      "zh": "$\\Delta ABC$（直角在 $A$）與 $\\Delta ADC$（直角在 $C$）都含 $AC$，故 $\\tan\\angle ABC=\\frac{AC}{AB}=\\frac{h}{x}$、$\\tan\\angle ADC=\\frac{AC}{CD}=\\frac{h}{y}$。",
      "highlight": [
       "\\tan\\angle ADC=\\frac{h}{y}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Complementary angles: $h^{2}=xy$",
       "zh": "第 3 步 · 互餘角：$h^{2}=xy$"
      },
      "math": "\\frac{h}{x}\\cdot\\frac{h}{y}=1\\;\\Rightarrow\\;h^{2}=xy",
      "en": "$\\angle ABC+\\angle ADC=90^{\\circ}$, and tangents of complementary angles are reciprocals ($\\tan\\theta\\cdot\\tan(90^{\\circ}-\\theta)=1$). So $\\frac{h}{x}\\cdot\\frac{h}{y}=1$, i.e. $h^{2}=xy$ — $AC$ is the geometric mean of $AB$ and $CD$.",
      "zh": "$\\angle ABC+\\angle ADC=90^{\\circ}$，而互餘兩角的 $\\tan$ 值互為倒數（$\\tan\\theta\\cdot\\tan(90^{\\circ}-\\theta)=1$）。故 $\\frac{h}{x}\\cdot\\frac{h}{y}=1$，即 $h^{2}=xy$ —— $AC$ 是 $AB$ 與 $CD$ 的等比中項。",
      "highlight": [
       "h^{2}=xy"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Simplify $\\frac{BC}{AD}$ using $h^{2}=xy$",
       "zh": "第 4 步 · 用 $h^{2}=xy$ 化簡 $\\frac{BC}{AD}$"
      },
      "math": "\\frac{BC}{AD}=\\sqrt{\\frac{x^{2}+h^{2}}{y^{2}+h^{2}}}=\\sqrt{\\frac{x(x+y)}{y(x+y)}}=\\sqrt{\\frac{x}{y}}=\\frac{h}{y}",
      "en": "Pythagoras gives $BC=\\sqrt{x^{2}+h^{2}}$ and $AD=\\sqrt{y^{2}+h^{2}}$. Replacing $h^{2}$ by $xy$ makes the numerator $x(x+y)$ and the denominator $y(x+y)$, so the common factor $x+y$ cancels: $\\frac{BC}{AD}=\\sqrt{\\frac{x}{y}}$. And $h^{2}=xy$ means $\\frac{h}{y}=\\sqrt{\\frac{x}{y}}$. Therefore $\\frac{BC}{AD}=\\frac{h}{y}=\\tan\\angle ADC$ — option C.",
      "zh": "由勾股定理 $BC=\\sqrt{x^{2}+h^{2}}$、$AD=\\sqrt{y^{2}+h^{2}}$。把 $h^{2}$ 換成 $xy$ 後，分子成 $x(x+y)$、分母成 $y(x+y)$，公因式 $x+y$ 相消：$\\frac{BC}{AD}=\\sqrt{\\frac{x}{y}}$。而 $h^{2}=xy$ 給出 $\\frac{h}{y}=\\sqrt{\\frac{x}{y}}$。故 $\\frac{BC}{AD}=\\frac{h}{y}=\\tan\\angle ADC$ —— 答案 C。",
      "highlight": [
       "\\frac{BC}{AD}=\\sqrt{\\frac{x}{y}}=\\frac{h}{y}=\\tan\\angle ADC"
      ]
     },
     {
      "title": {
       "en": "Step 5 · Why the other three fail",
       "zh": "第 5 步 · 其餘三式為何不成立"
      },
      "math": "\\tan\\angle ACB=\\frac{x}{h},\\quad\\tan\\angle ADC=\\frac{h}{y},\\quad\\frac{BC}{CD}=\\frac{\\sqrt{x^{2}+h^{2}}}{y}",
      "en": "$\\tan\\angle ACB=\\frac{AB}{AC}=\\frac{x}{h}$, which is neither $\\frac{AB}{AD}=\\frac{x}{\\sqrt{y^{2}+h^{2}}}$ (A) nor $\\frac{AB}{CD}=\\frac{x}{y}$ (B); and $\\tan\\angle ADC=\\frac{h}{y}\\neq\\frac{BC}{CD}=\\frac{\\sqrt{x^{2}+h^{2}}}{y}$ (D). Only C holds for every such trapezium.",
      "zh": "$\\tan\\angle ACB=\\frac{AB}{AC}=\\frac{x}{h}$，既不等於 $\\frac{AB}{AD}=\\frac{x}{\\sqrt{y^{2}+h^{2}}}$（A），也不等於 $\\frac{AB}{CD}=\\frac{x}{y}$（B）；而 $\\tan\\angle ADC=\\frac{h}{y}$ 也不等於 $\\frac{BC}{CD}=\\frac{\\sqrt{x^{2}+h^{2}}}{y}$（D）。只有 C 對所有這類梯形都成立。",
      "highlight": [
       "\\text{only C}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$\\tan\\angle ACB=\\frac{AB}{AD}$ — wrong: $\\tan\\angle ACB=\\frac{AB}{AC}$, and $AD\\neq AC$ (they are equal only in the special case $y=0$).",
      "zh": "$\\tan\\angle ACB=\\frac{AB}{AD}$ —— 錯：$\\tan\\angle ACB=\\frac{AB}{AC}$，而 $AD\\neq AC$（只有 $y=0$ 的特殊情況才相等）。"
     },
     {
      "opt": "B",
      "en": "$\\tan\\angle ACB=\\frac{AB}{CD}$ — mixes the two right triangles: $\\tan\\angle ACB$ only involves $AB$ and $AC$.",
      "zh": "$\\tan\\angle ACB=\\frac{AB}{CD}$ —— 把兩個直角三角形混在一起：$\\tan\\angle ACB$ 只涉及 $AB$ 與 $AC$。"
     },
     {
      "opt": "D",
      "en": "$\\tan\\angle ADC=\\frac{BC}{CD}$ — $BC$ belongs to the other triangle; and $BC>AC=h$, so this ratio is bigger than $\\frac{h}{y}$.",
      "zh": "$\\tan\\angle ADC=\\frac{BC}{CD}$ —— $BC$ 屬於另一個三角形；而且 $BC>AC=h$，這個比值一定大於 $\\frac{h}{y}$。"
     }
    ],
    "tip": {
     "en": "When two right triangles share the perpendicular $AC$ between parallel sides, give the three lengths single letters ($x,y,h$). The complementary-angle condition $\\angle B+\\angle D=90^{\\circ}$ always collapses to $h^{2}=xy$ — then $\\frac{BC}{AD}$ simplifies because $x+y$ cancels.",
     "zh": "兩個直角三角形夾在平行邊之間、共用垂直邊 $AC$ 時，把三條長度設成單字母（$x,y,h$）。互餘條件 $\\angle B+\\angle D=90^{\\circ}$ 必定化為 $h^{2}=xy$；此時 $\\frac{BC}{AD}$ 會因為 $x+y$ 相消而化簡成 $\\tan\\angle ADC$。"
    },
    "alt": [
     {
      "name": {
       "en": "Coordinate method (beyond the syllabus)",
       "zh": "坐標法（超出必修）"
      },
      "en": "Take $A(0,0)$, $C(0,-h)$, $B(b,0)$, $D(-d,-h)$ (the two right angles fix this shape). Then $\\tan\\angle ABC=\\frac{h}{b}$, $\\tan\\angle ADC=\\frac{h}{d}$ and complementarity gives $h^{2}=bd$; computing $\\frac{BC}{AD}=\\sqrt{\\frac{b}{d}}=\\frac{h}{d}$ shows only C holds generally.",
      "zh": "取 $A(0,0)$、$C(0,-h)$、$B(b,0)$、$D(-d,-h)$（兩個直角定出此形狀）。則 $\\tan\\angle ABC=\\frac{h}{b}$、$\\tan\\angle ADC=\\frac{h}{d}$，互餘給出 $h^{2}=bd$；再算 $\\frac{BC}{AD}=\\sqrt{\\frac{b}{d}}=\\frac{h}{d}$，可見只有 C 普遍成立。"
     }
    ]
   }
  },
  "2025-p2-q25": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Read what is fixed",
       "zh": "第 1 步 · 看清哪些是固定的"
      },
      "math": "OA=\\sqrt{a^{2}+(2a)^{2}}=a\\sqrt{5}\\neq0",
      "en": "$a>0$, so the distance from the origin to $A$ is a fixed positive number.",
      "zh": "$a>0$，所以原點到 $A$ 的距離是一個固定的正數。",
      "highlight": [
       "OA=a\\sqrt{5}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · The condition is a fixed distance",
       "zh": "第 2 步 · 條件是「到定點等距」"
      },
      "math": "AP=OA=a\\sqrt{5}\\ \\text{(constant)}",
      "en": "$A$ is a fixed point and the distance from $P$ to $A$ never changes.",
      "zh": "$A$ 是定點，而 $P$ 到 $A$ 的距離恆定。",
      "highlight": [
       "AP=\\text{constant}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Name the locus",
       "zh": "第 3 步 · 說出軌跡名稱"
      },
      "math": "(x-a)^{2}+(y-2a)^{2}=5a^{2}",
      "en": "A set of points at a fixed distance from a fixed point is a circle centred at $A$.",
      "zh": "「到定點等距」的點集是以 $A$ 為圓心的圓。",
      "highlight": [
       "\\text{circle}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{circle}",
      "en": "Option B. (A 'point' would need $AP=0$; a 'straight line' needs a fixed distance from a *line*.)",
      "zh": "答案 B。（若 $AP=0$ 才是點；「到直線等距」才是直線。）",
      "highlight": [
       "\\text{B}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$\\text{point}$ — that is the locus of $AP=0$, i.e. only $P=A$.",
      "zh": "$\\text{point}$ —— 那是 $AP=0$ 的軌跡，即只有 $P=A$。"
     },
     {
      "opt": "D",
      "en": "$\\text{straight line}$ — that is $AP=$ distance from $P$ to a *line* (e.g. the perpendicular bisector is equidistant from two points).",
      "zh": "$\\text{straight line}$ —— 那是「到一條**直線**等距」的情況（例如垂直平分線是到兩點等距）。"
     },
     {
      "opt": "C",
      "en": "$\\text{rhombus}$ — a rhombus comes from $PA=PB=PC=PD$ *to four* fixed points.",
      "zh": "$\\text{rhombus}$ —— 菱形來自「與**四個**定點等距」。"
     }
    ],
    "tip": {
     "en": "Locus vocabulary: fixed distance from a fixed **point** → circle; from a fixed **line** → pair of parallel lines; equidistant from two points → perpendicular bisector; equidistant from two lines → angle bisector.",
     "zh": "軌跡詞彙：與定**點**等距 → 圓；與定**直線**等距 → 兩條平行線；與兩點等距 → 垂直平分線；與兩直線等距 → 角平分線。"
    }
   }
  },
  "2025-p2-q26": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Perpendicularity relates $m$ and $n$",
       "zh": "第 1 步 · 垂直關係"
      },
      "math": "3m+4n=0 \\;\\Rightarrow\\; m=-\\frac{4n}{3}",
      "en": "$L_1$ has direction $(3,4)$, $L_2$ has $(m,n)$; their dot product must vanish.",
      "zh": "$L_1$ 方向為 $(3,4)$，$L_2$ 方向為 $(m,n)$，內積須為 0。",
      "highlight": [
       "m=-\\frac{4n}{3}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · The two $x$-intercepts",
       "zh": "第 2 步 · 兩個 $x$ 截距"
      },
      "math": "A=\\left(\\frac{20}{3},0\\right),\\quad B=\\left(\\frac{20}{m},0\\right)=\\left(-\\frac{15}{n},0\\right)",
      "en": "Put $y=0$ in each equation.",
      "zh": "在兩式中令 $y=0$。",
      "highlight": [
       "A=\\left(\\frac{20}{3},0\\right)",
       "B=\\left(-\\frac{15}{n},0\\right)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Height of $\\Delta ABC$",
       "zh": "第 3 步 · $\\Delta ABC$ 的高"
      },
      "math": "y_C=3.2+\\frac{7.2}{n}",
      "en": "Solving the two line equations together gives $B C$'s $y$-coordinate; $C$ above the axis means $y_C>0$.",
      "zh": "聯立兩直線方程得 $C$ 的 $y$ 坐標；$C$ 在軸上方即 $y_C>0$。",
      "highlight": [
       "y_C=3.2+\\frac{7.2}{n}"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Use the area $=6$",
       "zh": "第 4 步 · 用面積 $=6$"
      },
      "math": "\\frac{1}{2}\\left|\\frac{20}{3}+\\frac{15}{n}\\right|\\left(3.2+\\frac{7.2}{n}\\right)=6 \\;\\Rightarrow\\; n=-9",
      "en": "Only $n=-9$ satisfies both the area and $y_C>0$ (then $B=(\\frac53,0)$, $y_C=2.4$, area $=\\frac12\\times5\\times2.4=6$ ✓).",
      "zh": "只有 $n=-9$ 同時符合面積與 $y_C>0$（此時 $B=(\\frac53,0)$、$y_C=2.4$，面積 $=\\frac12\\times5\\times2.4=6$ ✓）。",
      "highlight": [
       "n=-9"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "n=-9",
      "en": "Option B. (Check: $m=12$ gives $36-36=0$ ✓.)",
      "zh": "答案 B。（驗算：$m=12$，$3(12)+4(-9)=0$ ✓。）",
      "highlight": [
       "\\text{B}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$9$ — the sign is wrong: with $n=9$ the $x$-intercepts are on the same side of the origin ($\\frac{20}{3}$ and $\\frac53$), so the triangle is far too big (area $\\approx16.7$).",
      "zh": "$9$ —— 符號錯了：$n=9$ 時兩個 $x$ 截距同側（$\\frac{20}{3}$ 與 $\\frac53$），三角形面積變成 $\\approx16.7$。"
     },
     {
      "opt": "D",
      "en": "$12$ — you mixed up $m$ and $n$: $m=12$ (with $n=-9$) is the perpendicular partner, not the answer.",
      "zh": "$12$ —— 把 $m$ 與 $n$ 混淆：$m=12$（配 $n=-9$）才是垂直线，題目問的是 $n$。"
     },
     {
      "opt": "A",
      "en": "$-12$ — using $m=-12$ breaks perpendicularity ($3(-12)+4n\\neq0$) and gives area $\\approx7.0$.",
      "zh": "$-12$ —— $m=-12$ 破壞了垂直條件，面積也變成 $\\approx7.0$。"
     }
    ],
    "tip": {
     "en": "Two-family question (perpendicular + area): get one relation from perpendicularity, then *verify* each option by computing the triangle. Sign errors are the whole point of the question, so check $C$ is on the stated side.",
     "zh": "這類題有兩條線索（垂直 + 面積）：先用垂直得一個關係，再**逐個選項代入**驗證面積。正負號是本題的重點，務必檢查 $C$ 是否在題目所說的一側。"
    }
   }
  },
  "2025-p2-q27": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Distance from the centre to the chord",
       "zh": "第 1 步 · 圓心到弦的距離"
      },
      "math": "d=|{-5}|=5",
      "en": "The centre is $(7,-5)$ and the chord $PQ$ lies on the $x$-axis, so the perpendicular distance is $5$.",
      "zh": "圓心為 $(7,-5)$，弦 $PQ$ 在 $x$ 軸上，故垂直距離為 $5$。",
      "highlight": [
       "d=5"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Pythagoras on the half-chord",
       "zh": "第 2 步 · 半弦的勾股定理"
      },
      "math": "r^{2}=12^{2}+5^{2}=169 \\;\\Rightarrow\\; r=13",
      "en": "$PQ=24$ so the half-chord is $12$; $r^{2}=d^{2}+(\\text{half-chord})^{2}$.",
      "zh": "$PQ=24$，半弦為 $12$；$r^{2}=d^{2}+(\\text{半弦})^{2}$。",
      "highlight": [
       "r=13"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Write the equation",
       "zh": "第 3 步 · 寫出方程"
      },
      "math": "(x-7)^{2}+(y+5)^{2}=169",
      "en": "Centre $(7,-5)$, radius $13$ — note the sign flips in both brackets.",
      "zh": "圓心 $(7,-5)$、半徑 $13$ —— 兩個括號的符號都與坐標相反。",
      "highlight": [
       "(x-7)^{2}+(y+5)^{2}=169"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Expand",
       "zh": "第 4 步 · 展開"
      },
      "math": "x^{2}+y^{2}-14x+10y+(49+25-169)=0",
      "en": "Constant $=74-169=-95$, so $x^{2}+y^{2}-14x+10y-95=0$ — option A, exactly as printed.",
      "zh": "常數 $=74-169=-95$，故 $x^{2}+y^{2}-14x+10y-95=0$ —— 與印刷的選項 A 完全一致。",
      "highlight": [
       "x^{2}+y^{2}-14x+10y-95=0"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$-119$ — using the centre's $x$-coordinate as the distance to the $x$-axis: $r^{2}=12^{2}+7^{2}=193$, constant $=74-193=-119$.",
      "zh": "$-119$ —— 誤把圓心的 $x$ 坐標當成到 $x$ 軸的距離：$r^{2}=12^{2}+7^{2}=193$，常數 $=74-193=-119$。"
     },
     {
      "opt": "B",
      "en": "$+14x$ — the sign in front of $x$ must be **minus** the centre's $x$-coordinate ($-2\\times7=-14$).",
      "zh": "$+14x$ —— $x$ 前的符號應是圓心 $x$ 坐標的相反數（$-2\\times7=-14$）。"
     },
     {
      "opt": "D",
      "en": "$+14x-10y-119$ — both bracket signs flipped (centre taken as $(-7,5)$) **and** the wrong radius.",
      "zh": "$+14x-10y-119$ —— 兩個括號符號都反了（把圓心當成 $(-7,5)$），半徑也取錯。"
     }
    ],
    "tip": {
     "en": "Centre $(h,k)$ ⇒ $x^{2}+y^{2}-2hx-2ky+(h^{2}+k^{2}-r^{2})=0$: the sign in front of $x$/$y$ is the opposite of the centre's coordinate. For a chord at distance $d$: $r^{2}=d^{2}+(\\text{half-chord})^{2}$.",
     "zh": "圓心 $(h,k)$ ⇒ $x^{2}+y^{2}-2hx-2ky+(h^{2}+k^{2}-r^{2})=0$：$x$／$y$ 前的符號與圓心坐標相反。弦距 $d$ 時 $r^{2}=d^{2}+(\\text{半弦})^{2}$。"
    }
   }
  },
  "2025-p2-q28": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Probability of each number",
       "zh": "第 1 步 · 各數字的概率"
      },
      "math": "P(2)=\\frac{3}{6},\\;P(3)=\\frac{1}{6},\\;P(4)=\\frac{1}{6},\\;P(5)=\\frac{1}{6}",
      "en": "Six cards: three of them are $2$, plus $3$, $4$, $5$.",
      "zh": "共 6 張卡：3 張是 $2$，另有 $3$、$4$、$5$。",
      "highlight": [
       "P(2)=\\frac{3}{6}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Expected value formula",
       "zh": "第 2 步 · 期望值公式"
      },
      "math": "E=\\sum (\\text{tokens})\\times P(\\text{number})",
      "en": "Multiply each outcome's tokens by how likely that number is.",
      "zh": "把每個結果的代幣數乘以抽到該數的概率再相加。",
      "highlight": [
       "E=\\sum xP(x)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Substitute",
       "zh": "第 3 步 · 代入"
      },
      "math": "E=\\frac{3}{6}(10)+\\frac{1}{6}(15)+\\frac{1}{6}(25)+\\frac{1}{6}(50)",
      "en": "Note the $3$ in front of $10$ — three cards carry the value $2$.",
      "zh": "留意 $10$ 前面要乘 $3$ —— 有三張卡是 $2$。",
      "highlight": [
       "\\frac{3}{6}(10)"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "E=\\frac{30+15+25+50}{6}=\\frac{120}{6}=20",
      "en": "The expected number of tokens is $20$ — option C.",
      "zh": "期望代幣數為 $20$ —— 答案 C。",
      "highlight": [
       "20"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$3$ — this is the expected **number drawn** ($\\frac{2+2+2+3+4+5}{6}=3$). The question asks for tokens, not the number.",
      "zh": "$3$ —— 這是抽到數字的期望值（$\\frac{2+2+2+3+4+5}{6}=3$），題目問的是代幣數。"
     },
     {
      "opt": "B",
      "en": "$4$ — the average of the four table entries with equal weights: $\\frac{10+15+25+50}{4}=25$… no; $4$ is the **median** of $2,2,2,3,4,5$.",
      "zh": "$4$ —— 這是 $2,2,2,3,4,5$ 的**中位數**。"
     },
     {
      "opt": "D",
      "en": "$25$ — the tokens for drawing a $4$, or $\\frac{10+15+25+50}{4}=25$ (treating the four numbers as equally likely).",
      "zh": "$25$ —— 那是抽到 $4$ 時所得（或把四個數字當成等概率：$\\frac{10+15+25+50}{4}=25$）。"
     }
    ],
    "tip": {
     "en": "Repeated values in a box (three $2$s here) must carry their full weight: multiply the token value by the count, then divide by the total. Setters almost always hide a repeated value.",
     "zh": "箱中有重複數字（這裡三張 $2$）時，必須把重複次數算進去：代幣數 × 張數，再除以總數。這類題幾乎必設一個重複值。"
    }
   }
  },
  "2025-p2-q32": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Factorise each expression",
       "zh": "第 1 步 · 逐式分解"
      },
      "math": "p^{2}-4q^{2}=(p+2q)(p-2q)",
      "en": "Difference of two squares.",
      "zh": "平方差。",
      "highlight": [
       "(p+2q)(p-2q)"
      ]
     },
     {
      "title": {
       "en": "Step 2 · The cubic",
       "zh": "第 2 步 · 三次式"
      },
      "math": "p^{3}-8q^{3}=(p-2q)(p^{2}+2pq+4q^{2})",
      "en": "Difference of two cubes, $a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$ with $b=2q$.",
      "zh": "立方差 $a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$，其中 $b=2q$。",
      "highlight": [
       "(p-2q)(p^{2}+2pq+4q^{2})"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Third expression",
       "zh": "第 3 步 · 第三式"
      },
      "math": "(p+2q)(p^{2}-4q^{2})=(p+2q)^{2}(p-2q)",
      "en": "Substitute the factorisation from Step 1.",
      "zh": "代入第 1 步的分解。",
      "highlight": [
       "(p+2q)^{2}(p-2q)"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Take the highest power of each factor",
       "zh": "第 4 步 · 每個因式取最高次"
      },
      "math": "(p+2q)^{2}(p-2q)(p^{2}+2pq+4q^{2})=(p+2q)^{2}(p^{3}-8q^{3})",
      "en": "$(p-2q)$ appears once, $(p+2q)$ twice — option C.",
      "zh": "$(p-2q)$ 出現一次、$(p+2q)$ 出現兩次 —— 答案 C。",
      "highlight": [
       "(p+2q)^{2}(p^{3}-8q^{3})"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$(p+2q)(p^{2}-4q^{2})(p^{3}-8q^{3})$ — a **common multiple** but not the **least**: it carries $(p-2q)$ twice.",
      "zh": "$(p+2q)(p^{2}-4q^{2})(p^{3}-8q^{3})$ —— 是公倍式但**不是最小**：$(p-2q)$ 重複了兩次。"
     },
     {
      "opt": "B",
      "en": "$p^{2}-4q^{2}$ — that is the H.C.F.-flavoured distractor; it is not a multiple of $p^{3}-8q^{3}$.",
      "zh": "$p^{2}-4q^{2}$ —— 這其實是 H.C.F. 類的干擾項，不是 $p^{3}-8q^{3}$ 的倍式。"
     },
     {
      "opt": "A",
      "en": "$p-2q$ — only one factor of the first expression; far from the L.C.M.",
      "zh": "$p-2q$ —— 只是第一式的其中一個因式，遠不是最小公倍式。"
     }
    ],
    "tip": {
     "en": "L.C.M. = highest power of **every** factor that appears; H.C.F. = lowest power of the **common** factors. Factorise first, then just read the exponents off.",
     "zh": "最小公倍式 = 每個出現過的因式取其**最高次**；最大公因式 = **共同**因式取最低次。先分解，再讀指數。"
    }
   }
  },
  "2025-p2-q33": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Name the variables",
       "zh": "第 1 步 · 設變數"
      },
      "math": "v=\\log_{5}y,\\quad u=\\log_{25}x,\\quad v=au+b",
      "en": "'$\\log_{5}y$ is a linear function of $\\log_{25}x$' means $v=au+b$.",
      "zh": "「$\\log_{5}y$ 是 $\\log_{25}x$ 的線性函數」即 $v=au+b$。",
      "highlight": [
       "v=au+b"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Use the two intercepts",
       "zh": "第 2 步 · 用兩個截距"
      },
      "math": "b=12,\\quad 0=2a+12 \\;\\Rightarrow\\; a=-6",
      "en": "Vertical intercept at $u=0$ is $12$; horizontal intercept is $u=2$.",
      "zh": "縱軸截距（$u=0$）為 $12$；橫軸截距在 $u=2$。",
      "highlight": [
       "a=-6"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Change the base of the $x$-log",
       "zh": "第 3 步 · 換底"
      },
      "math": "\\log_{25}x=\\frac{\\log_{5}x}{\\log_{5}25}=\\frac{\\log_{5}x}{2}",
      "en": "$\\log_{5}25=2$.",
      "zh": "$\\log_{5}25=2$。",
      "highlight": [
       "\\log_{25}x=\\frac{1}{2}\\log_{5}x"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Read off $n$",
       "zh": "第 4 步 · 讀出 $n$"
      },
      "math": "\\log_{5}y=-3\\log_{5}x+12 \\;\\Rightarrow\\; y=5^{12}x^{-3}",
      "en": "So $n=-3$ — option C.",
      "zh": "故 $n=-3$ —— 答案 C。",
      "highlight": [
       "n=-3"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$-12$ — using $a=12$ or forgetting to divide by $2$ when converting the base of $x$.",
      "zh": "$-12$ —— 把 $a$ 當成 $12$，或換底時忘記除以 $2$。"
     },
     {
      "opt": "B",
      "en": "$-4$ — from an incorrect change of base (e.g. dividing by $\\log_5 25=2$ twice, or using base $5$ for $x$ but base $25$ for $y$).",
      "zh": "$-4$ —— 換底時弄錯（例如多除了一次 $2$）。"
     },
     {
      "opt": "D",
      "en": "$-1$ — reading the slope straight off the intercepts the wrong way ($2/12$ style).",
      "zh": "$-1$ —— 把截距直接當成斜率（類似 $12/2$ 的反向誤算）。"
     }
    ],
    "tip": {
     "en": "When a 'linear function' question mixes bases $5$ and $25$, convert everything to one base first: $\\log_{25}x=\\frac12\\log_{5}x$. The power of $x$ is the slope **after** that conversion.",
     "zh": "題目混用 $5$ 與 $25$ 底時，先全部化成同底：$\\log_{25}x=\\frac12\\log_{5}x$。$x$ 的指數就是換底**之後**的斜率。"
    }
   }
  }
 }
};
