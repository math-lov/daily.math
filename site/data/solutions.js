// 自動生成，請勿手改（來源：data/；重新生成：python tools/make_site_data.py）
window.SOLUTIONS = {
 "version": 1,
 "_note": "解答資料（人工／AI 編輯，不會被自動管線覆蓋）。id 必須存在於 bank.json。answer 只寫 A-D。steps 由網站按序播放動畫；traps 指向易錯選項；tip 是一句話技巧。文字欄位可用 $...$ 寫行內數學（網站會用 KaTeX 渲染）。",
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
       "en": "Step 1 · Substitute $x=4$",
       "zh": "第 1 步 · 代入 $x=4$"
      },
      "math": "f(4) = 4^{2} + 7(4) + k = 44 + k",
      "en": "$16+28=44$.",
      "zh": "$16+28=44$。",
      "highlight": [
       "44 + k"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Substitute $x=-4$",
       "zh": "第 2 步 · 代入 $x=-4$"
      },
      "math": "f(-4) = (-4)^{2} + 7(-4) + k = -12 + k",
      "en": "$(-4)^{2}=+16$, and $7(-4)=-28$.",
      "zh": "$(-4)^{2}=+16$，而 $7(-4)=-28$。",
      "highlight": [
       "-12 + k"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Add and solve",
       "zh": "第 3 步 · 相加求解"
      },
      "math": "(44+k) + (-12+k) = 38 \\;\\Rightarrow\\; 2k + 32 = 38",
      "en": "The two $k$ terms combine to $2k$.",
      "zh": "兩個 $k$ 合併成 $2k$。",
      "highlight": [
       "2k + 32 = 38"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Finish",
       "zh": "第 4 步 · 得解"
      },
      "math": "2k = 6 \\;\\Rightarrow\\; k = 3",
      "en": "Option C.",
      "zh": "選項 C。",
      "highlight": [
       "k = 3"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$6$ — you forgot the two $k$'s add up to $2k$ and solved $k+32=38$.",
      "zh": "$6$ —— 忘記兩個 $k$ 相加是 $2k$，直接當成 $k+32=38$。"
     },
     {
      "opt": "B",
      "en": "$-3$ — $32$ was subtracted from the wrong side ($32-38=-6$).",
      "zh": "$-3$ —— $32$ 減錯方向（$32-38=-6$）。"
     },
     {
      "opt": "A",
      "en": "$-6$ — a sign error on the constant term on top of the $2k$ slip.",
      "zh": "$-6$ —— 常數項符號與 $2k$ 兩處同時出錯。"
     }
    ],
    "tip": {
     "en": "For $f(a)+f(-a)$ with an even power and a linear term, the linear parts partly cancel — substitute carefully first, simplify second.",
     "zh": "遇到 $f(a)+f(-a)$（含偶次方與一次項），一次項通常會部分抵消——先老實代入，再化簡。"
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
      "en": "Correct to the nearest dollar the amount is $46 422 — option C.",
      "zh": "取至最接近的元，本利和為 $46 422 —— 答案 C。",
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
       "en": "Step 1 · Perimeter of a sector",
       "zh": "第 1 步 · 扇形的周界"
      },
      "math": "2r+r\\theta=12\\pi,\\quad r=3\\pi",
      "en": "The perimeter is two radii plus the arc $r\\theta$ ($\\theta$ in radians).",
      "zh": "扇形周界 = 兩條半徑 + 弧長 $r\\theta$（$\\theta$ 以弧度計）。",
      "highlight": [
       "2r+r\\theta"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Find the angle",
       "zh": "第 2 步 · 求圓心角"
      },
      "math": "6\\pi+3\\pi\\theta=12\\pi \\;\\Rightarrow\\; \\theta=2\\text{ rad}=114.6^{\\circ}",
      "en": "So statement III ($\\theta>100^{\\circ}$) is **true**.",
      "zh": "故命題 III（$\\theta>100^{\\circ}$）**正確**。",
      "highlight": [
       "\\theta=2\\text{ rad}",
       "114.6^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Area of the sector",
       "zh": "第 3 步 · 扇形面積"
      },
      "math": "\\frac{1}{2}r^{2}\\theta=\\frac{1}{2}(9\\pi^{2})(2)=9\\pi^{2}\\text{ cm}^{2}",
      "en": "Statement I is exactly what the formula gives — **true**.",
      "zh": "命題 I 正是公式的結果 —— **正確**。",
      "highlight": [
       "9\\pi^{2}\\text{ cm}^{2}"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Perimeter of $\\Delta OMN$",
       "zh": "第 4 步 · $\\Delta OMN$ 的周界"
      },
      "math": "MN=2r\\sin\\frac{\\theta}{2}=6\\pi\\sin1^{\\circ}\\approx15.86",
      "en": "Careful: $\\sin 1$ means $\\sin(1\\ \\text{radian})\\approx0.8415$, so $MN\\approx15.86$ cm.",
      "zh": "注意：$\\sin1$ 是 $\\sin(1\\ \\text{弧度})\\approx0.8415$，故 $MN\\approx15.86$ cm。",
      "highlight": [
       "MN\\approx15.86"
      ]
     },
     {
      "title": {
       "en": "Step 5 · Compare with 35 cm",
       "zh": "第 5 步 · 與 35 cm 比較"
      },
      "math": "18.85+15.86=34.71<35",
      "en": "Two radii $6\\pi\\approx18.85$ plus the chord $15.86$ gives $34.71$ cm, so statement II is **true**.",
      "zh": "兩條半徑 $6\\pi\\approx18.85$ 加弦 $15.86$ 得 $34.71$ cm，故命題 II **正確**。",
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
      "en": "All three are true — option D.",
      "zh": "三項皆正確 —— 答案 D。",
      "highlight": [
       "\\text{I, II and III}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$\\text{I and III only}$ — you dropped II by using degrees inside $\\sin$: $6\\pi\\sin1^{\\circ}$ is a tiny number, but the sector angle is in **radians**.",
      "zh": "$\\text{I 與 III}$ —— 漏了 II，因為把 $\\sin$ 內的 1 當成度數；扇形公式的角是**弧度**。"
     },
     {
      "opt": "A",
      "en": "$\\text{I and II only}$ — you treated $\\theta$ as $100^{\\circ}$ or forgot to convert: $2$ rad $=114.6^{\\circ}>100^{\\circ}$.",
      "zh": "$\\text{I 與 II}$ —— 把 $\\theta$ 誤當 $100^{\\circ}$ 或忘記換算：$2$ 弧度 $=114.6^{\\circ}>100^{\\circ}$。"
     },
     {
      "opt": "C",
      "en": "$\\text{II and III only}$ — you lost I, usually by using $\\pi r^{2}\\theta$ (that is $2\\times$ the true area).",
      "zh": "$\\text{II 與 III}$ —— 漏了 I，通常是用了 $\\pi r^{2}\\theta$（那是真面積的 2 倍）。"
     }
    ],
    "tip": {
     "en": "Sector: arc $=r\\theta$, area $=\\frac12r^{2}\\theta$, chord $=2r\\sin\\frac{\\theta}{2}$ — with $\\theta$ **in radians**. $\\pi$ rad $=180^{\\circ}$.",
     "zh": "扇形：弧長 $=r\\theta$、面積 $=\\frac12r^{2}\\theta$、弦 $=2r\\sin\\frac{\\theta}{2}$，$\\theta$ 一律用**弧度**。$\\pi$ 弧度 $=180^{\\circ}$。"
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
     "en": "$\\sqrt{2209}=47$ and $\\sqrt{1225}=35$: DSE often chooses numbers so the quadratic factorises nicely. Always test the positive root against the given total surface area.",
     "zh": "$\\sqrt{2209}=47$、$\\sqrt{1225}=35$：DSE 常刻意讓二次方程有整數根。求出 $r$ 後代回表面積檢查一次。"
    }
   }
  },
  "2025-p2-q17": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Choose a convenient parallelogram",
       "zh": "第 1 步 · 取一個方便的平行四邊形"
      },
      "math": "A(0,0),\\;B(4,0),\\;D(0,5),\\;C(4,5)",
      "en": "Areas and their ratios do not change under stretching, so pick the simplest shape: side lengths in the ratio given.",
      "zh": "伸縮不改變面積之比，所以取最簡單的形狀（邊長按題目比例）。",
      "highlight": [
       "A(0,0)",
       "C(4,5)"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Place E, F and G",
       "zh": "第 2 步 · 定出 E、F、G"
      },
      "math": "E(1,0),\\;F(0,2),\\;G\\left(\\frac{8}{3},5\\right)",
      "en": "$BE=3AE\\Rightarrow AE:EB=1:3$; $2DF=3AF\\Rightarrow AF:FD=2:3$; $DG=2CG\\Rightarrow DG:GC=2:1$.",
      "zh": "$BE=3AE\\Rightarrow AE:EB=1:3$；$2DF=3AF\\Rightarrow AF:FD=2:3$；$DG=2CG\\Rightarrow DG:GC=2:1$。",
      "highlight": [
       "E(1,0)",
       "F(0,2)",
       "G(\\frac{8}{3},5)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Find $H$",
       "zh": "第 3 步 · 求 $H$"
      },
      "math": "EG:\\;y=3(x-1);\\quad BC\\text{ produced}:x=4 \\;\\Rightarrow\\; H(4,9)",
      "en": "$EG$ joins $(1,0)$ and $(\\frac83,5)$, so its slope is $3$.",
      "zh": "$EG$ 過 $(1,0)$ 與 $(\\frac83,5)$，斜率為 $3$。",
      "highlight": [
       "H(4,9)"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Area of $\\Delta CGH$ in these coordinates",
       "zh": "第 4 步 · 這個坐標下 $\\Delta CGH$ 的面積"
      },
      "math": "[\\Delta CGH]=\\frac{1}{2}\\times\\frac{4}{3}\\times4=\\frac{8}{3}",
      "en": "Base $CG=\\frac43$ (horizontal) and height $=9-5=4$.",
      "zh": "底 $CG=\\frac43$（水平），高 $=9-5=4$。",
      "highlight": [
       "\\frac{8}{3}"
      ]
     },
     {
      "title": {
       "en": "Step 5 · Area of $DFEG$ and the scale factor",
       "zh": "第 5 步 · $DFEG$ 面積與放大倍數"
      },
      "math": "[DFEG]=\\frac{49}{6},\\quad \\frac{[DFEG]}{[\\Delta CGH]}=\\frac{49/6}{8/3}=\\frac{49}{16}",
      "en": "Shoelace formula on $D(0,5),F(0,2),E(1,0),G(\\frac83,5)$.",
      "zh": "用鞋帶公式算 $D(0,5),F(0,2),E(1,0),G(\\frac83,5)$ 的多邊形面積。",
      "highlight": [
       "\\frac{49}{16}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "[DFEG]=16\\times\\frac{49}{16}=49\\text{ cm}^{2}",
      "en": "Scale the picture so that $[\\Delta CGH]=16$ — option B.",
      "zh": "把圖放大到 $[\\Delta CGH]=16$，得 $49\\text{ cm}^{2}$ —— 答案 B。",
      "highlight": [
       "49\\text{ cm}^{2}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$105$ — using $[\\Delta CGH]=16$ with a wrong ratio, e.g. comparing with $[\\Delta EFG]$ instead of the quadrilateral $DFEG$.",
      "zh": "$105$ —— 比例用錯，例如拿了 $[\\Delta EFG]$ 而不是四邊形 $DFEG$。"
     },
     {
      "opt": "A",
      "en": "$46$ — a near-miss from rounding the coordinates (using $G=(2.6,5)$ instead of $\\frac83$).",
      "zh": "$46$ —— 把坐標取近似值（$G$ 用了 $2.6$ 而非 $\\frac83$）造成的近似誤差。"
     },
     {
      "opt": "D",
      "en": "$115$ — you treated $DG:GC$ as $1:2$ (reading the ratio the wrong way), which moves $G$ and inflates the quadrilateral.",
      "zh": "$115$ —— 把 $DG:GC$ 看成 $1:2$（比例次序反了），$G$ 位置一錯面積就偏大。"
     }
    ],
    "tip": {
     "en": "For ratio-of-areas questions, pick the simplest coordinates (a rectangle) — you never need the real side lengths, only the *ratios*. Let the given area fix the scale at the end.",
     "zh": "面積比題目：直接取最簡單的坐標（矩形），因為只需比值，不需真實邊長；最後用題目給的面積定出放大倍數。"
    }
   }
  },
  "2025-p2-q18": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Spot the right angle",
       "zh": "第 1 步 · 認出直角"
      },
      "math": "25^{2}+60^{2}=625+3600=4225=65^{2}",
      "en": "So $\\angle XZW=90^{\\circ}$ (converse of Pythagoras) and $WX$ is the hypotenuse.",
      "zh": "故 $\\angle XZW=90^{\\circ}$（勾股定理逆定理），$WX$ 是斜邊。",
      "highlight": [
       "\\angle XZW=90^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Use the given ratio",
       "zh": "第 2 步 · 用題給的比例"
      },
      "math": "\\frac{WY}{XY}=\\frac{XY}{YZ} \\;\\Rightarrow\\; XY^{2}=WY\\cdot YZ",
      "en": "$XY$ is the geometric mean of $WY$ and $YZ$.",
      "zh": "$XY$ 是 $WY$ 與 $YZ$ 的等比中項。",
      "highlight": [
       "XY^{2}=WY\\cdot YZ"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Let $YZ=z$ and solve",
       "zh": "第 3 步 · 設 $YZ=z$ 求解"
      },
      "math": "XY^{2}=3600+z^{2}=(25+z)z \\;\\Rightarrow\\; 3600=25z",
      "en": "$XY^{2}=XZ^{2}+YZ^{2}$ from the right triangle, and $WY=25+z$.",
      "zh": "由直角三角形 $XY^{2}=XZ^{2}+YZ^{2}$，而 $WY=25+z$。",
      "highlight": [
       "z=144"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Find $XY$",
       "zh": "第 4 步 · 求 $XY$"
      },
      "math": "XY=\\sqrt{3600+144^{2}}=\\sqrt{24336}=156\\text{ cm}",
      "en": "Check: $WY=169$, and $169\\times144=156^{2}$ ✓ — option C.",
      "zh": "驗算：$WY=169$，$169\\times144=156^{2}$ ✓ —— 答案 C。",
      "highlight": [
       "156\\text{ cm}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$144$ — that is $YZ$, not $XY$. The question asks for $XY$.",
      "zh": "$144$ —— 這是 $YZ$ 而非 $XY$。題目要的是 $XY$。"
     },
     {
      "opt": "D",
      "en": "$169$ — that is $WY=25+144$. A correct intermediate value, but not the answer.",
      "zh": "$169$ —— 這是 $WY=25+144$，算對了但答錯了題。"
     },
     {
      "opt": "A",
      "en": "$131$ — from writing $XY^2=65^2+144^2$ (treating $65$ as a leg) or from $60+65+6$ style errors.",
      "zh": "$131$ —— 把 $65$ 當成直角邊，用了 $XY^{2}=65^{2}+144^{2}$ 之類的錯誤。"
     }
    ],
    "tip": {
     "en": "When a question gives three sides of a triangle, test Pythagoras first — a right angle usually unlocks the rest. DSE often hides $3$-$4$-$5$ families: here $25$-$60$-$65=\\times5$ of $5$-$12$-$13$.",
     "zh": "題目給了三角形三邊，先驗勾股定理 —— 直角一出現後面就通了。留意 $3$-$4$-$5$ 的倍數：本例 $25$-$60$-$65$ 正是 $5$-$12$-$13$ 的 5 倍。"
    }
   }
  },
  "2025-p2-q19": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Put the square on coordinates",
       "zh": "第 1 步 · 把正方形放上坐標"
      },
      "math": "B(0,0),\\;A(1,0),\\;C(0,1),\\;D(1,1)",
      "en": "Side $1$. Then $AC$ is $x+y=1$ and $CD=1$.",
      "zh": "取邊長 $1$。則 $AC$ 為 $x+y=1$，$CD=1$。",
      "highlight": [
       "AC:\\;x+y=1"
      ]
     },
     {
      "title": {
       "en": "Step 2 · $F$ on $AC$ produced, $CF=CD$",
       "zh": "第 2 步 · $F$ 在 $AC$ 延線上且 $CF=CD$"
      },
      "math": "F\\left(-\\frac{1}{\\sqrt{2}},\\;1+\\frac{1}{\\sqrt{2}}\\right)",
      "en": "Because $CDEF$ is a rhombus, $CF=CD=1$.",
      "zh": "因 $CDEF$ 是菱形，$CF=CD=1$。",
      "highlight": [
       "CF=1"
      ]
     },
     {
      "title": {
       "en": "Step 3 · $DF$ produced meets the parallel through $B$",
       "zh": "第 3 步 · $DF$ 延線與過 $B$ 的平行線相交"
      },
      "math": "G\\left(-(1+\\sqrt{2}),\\;1+\\sqrt{2}\\right),\\quad \\overrightarrow{DG}=2\\overrightarrow{DF}",
      "en": "$BG\\parallel AF$ (direction $(-1,1)$) fixes $G$: solving gives $DF=FG$ — statement I is **true**.",
      "zh": "$BG\\parallel AF$（方向 $(-1,1)$）定出 $G$：解得 $DF=FG$ —— 命題 I **正確**。",
      "highlight": [
       "DF=FG"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Compare the two triangles",
       "zh": "第 4 步 · 比較兩個三角形"
      },
      "math": "DE=EF=1,\\;DF=\\sqrt{2+\\sqrt{2}};\\quad BF=FG=\\sqrt{2+\\sqrt{2}},\\;BG=2+\\sqrt{2}",
      "en": "Both triangles have sides in the ratio $1:1:\\sqrt{2+\\sqrt{2}}$, so $\\Delta BFG\\sim\\Delta DEF$ — statement II is **true**.",
      "zh": "兩個三角形的邊比同為 $1:1:\\sqrt{2+\\sqrt{2}}$，故 $\\Delta BFG\\sim\\Delta DEF$ —— 命題 II **正確**。",
      "highlight": [
       "\\Delta BFG\\sim\\Delta DEF"
      ]
     },
     {
      "title": {
       "en": "Step 5 · The two angles",
       "zh": "第 5 步 · 兩角之和"
      },
      "math": "\\angle ABG=135^{\\circ},\\;\\angle BFD=45^{\\circ},\\;135^{\\circ}+45^{\\circ}=180^{\\circ}",
      "en": "Statement III is **true**.",
      "zh": "命題 III **正確**。",
      "highlight": [
       "180^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{I, II and III}",
      "en": "All three statements hold — option D.",
      "zh": "三項皆成立 —— 答案 D。",
      "highlight": [
       "\\text{I, II and III}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$\\text{I and II only}$ — you rejected III by guessing; $\\angle ABG=135^{\\circ}$ (since $\\angle ABF=45^{\\circ}$ and $BG\\parallel AF$) and $\\angle BFD=45^{\\circ}$.",
      "zh": "$\\text{I 與 II}$ —— 無理由地否定了 III：由 $BG\\parallel AF$ 得 $\\angle ABG=135^{\\circ}$，而 $\\angle BFD=45^{\\circ}$，兩者確實互補。"
     },
     {
      "opt": "C",
      "en": "$\\text{II and III only}$ — you doubted I by assuming $DF\\neq FG$; but $BG\\parallel AF$ forces exactly $DG=2DF$.",
      "zh": "$\\text{II 與 III}$ —— 誤以為 $DF\\neq FG$；實際上 $BG\\parallel AF$ 迫使 $DG=2DF$，即 $DF=FG$。"
     },
     {
      "opt": "B",
      "en": "$\\text{I and III only}$ — you need the side ratio to see the similarity: $\\Delta DEF$ has sides $1,1,\\sqrt{2+\\sqrt2}$ and $\\Delta BFG$ is that triangle enlarged by $\\sqrt{2+\\sqrt2}$.",
      "zh": "$\\text{I 與 III}$ —— 漏了 II：$\\Delta DEF$ 三邊為 $1,1,\\sqrt{2+\\sqrt2}$，$\\Delta BFG$ 正是它放大 $\\sqrt{2+\\sqrt2}$ 倍。"
     }
    ],
    "tip": {
     "en": "For 'which statements are true' geometry, coordinates are often faster than angle-chasing: a square of side $1$ and one line equation gives you exact lengths and angles.",
     "zh": "「以下哪些正確」的幾何題，用坐標往往比追角快：邊長取 $1$、寫出一條直線方程，長度與角度都變成精確值。"
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
       "en": "Step 1 · Set up coordinates",
       "zh": "第 1 步 · 建立坐標"
      },
      "math": "S(0,0),\\;R(53,0),\\;PQ\\parallel SR",
      "en": "Put $SR$ on the $x$-axis; $P$ and $Q$ lie on a line parallel to it.",
      "zh": "把 $SR$ 放在 $x$ 軸上，$P$、$Q$ 在一條與它平行的直線上。",
      "highlight": [
       "S(0,0)",
       "R(53,0)"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Find $P$ from $\\angle PSR=120^{\\circ}$",
       "zh": "第 2 步 · 由 $\\angle PSR=120^{\\circ}$ 定出 $P$"
      },
      "math": "P=41(\\cos120^{\\circ},\\sin120^{\\circ})=(-20.5,\\;35.51)",
      "en": "$SP=41$ at $120^{\\circ}$ to $SR$.",
      "zh": "$SP=41$，與 $SR$ 成 $120^{\\circ}$。",
      "highlight": [
       "P=(-20.5,\\;35.51)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Find $Q$ from $\\angle QRS=150^{\\circ}$",
       "zh": "第 3 步 · 由 $\\angle QRS=150^{\\circ}$ 定出 $Q$"
      },
      "math": "RQ\\text{ at }30^{\\circ}\\text{ to }RS \\;\\Rightarrow\\; Q_x=53+\\frac{35.51}{\\sin30^{\\circ}}\\cos30^{\\circ}=114.5",
      "en": "$RQ$ makes $30^{\\circ}$ with the positive $x$-axis; climb $35.51$ to reach the level of $P$.",
      "zh": "$RQ$ 與 $x$ 軸正向成 $30^{\\circ}$；升到 $P$ 的高度 $35.51$ 便到達 $Q$。",
      "highlight": [
       "Q_x=114.5"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Length of the parallel side",
       "zh": "第 4 步 · 平行邊長"
      },
      "math": "PQ=114.5-(-20.5)=135\\text{ cm}",
      "en": "Both points share the same $y$, so $PQ$ is just the difference of the $x$-coordinates — option D.",
      "zh": "兩點 $y$ 相同，故 $PQ$ 就是 $x$ 坐標之差 —— 答案 D。",
      "highlight": [
       "135\\text{ cm}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$82$ — you added/subtracted the two side lengths ($53+41-12$) instead of using the angles.",
      "zh": "$82$ —— 把兩邊長直接加減（$53+41$ 之類），沒有用角度投影。"
     },
     {
      "opt": "B",
      "en": "$100$ — using horizontal projections of both legs ($41\\cos60^{\\circ}+53+41\\cos30^{\\circ}\\cdot$…) and losing a term.",
      "zh": "$100$ —— 只取兩腰的水平投影再加 $53$，漏了一項。"
     },
     {
      "opt": "C",
      "en": "$106$ — treating $\\angle PSR=120^{\\circ}$ as $60^{\\circ}$ (using the supplement), which shrinks the top side.",
      "zh": "$106$ —— 把 $\\angle PSR=120^{\\circ}$ 當成 $60^{\\circ}$（用了補角），上底因此縮短。"
     }
    ],
    "tip": {
     "en": "For a trapezium with two base angles given, put the base on the $x$-axis and project each leg: horizontal run $=L\\cos\\theta$, vertical rise $=L\\sin\\theta$. The two rises must be equal.",
     "zh": "梯形給了兩個底角：把底邊放 $x$ 軸，逐腰投影 —— 水平走 $L\\cos\\theta$、垂直升 $L\\sin\\theta$；兩腰的「升」必須相等，這就定出另一點。"
    }
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
     "en": "Circle geometry: turn every given angle into its arc first, then look for the two arc-equalities DSE loves — parallel chords, and an angle bisector.",
     "zh": "圓形幾何：先把每個已知角化成弧，然後找兩個 DSE 最愛用的等弧條件 —— 平行弦、以及角平分線。"
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
       "en": "Step 1 · Two right angles force a trapezium",
       "zh": "第 1 步 · 兩個直角逼出梯形"
      },
      "math": "\\angle ACD=\\angle BAC=90^{\\circ} \\;\\Rightarrow\\; AB\\parallel CD",
      "en": "Both $AB$ and $CD$ are perpendicular to $AC$.",
      "zh": "$AB$ 與 $CD$ 都垂直於 $AC$。",
      "highlight": [
       "AB\\parallel CD"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Put it on coordinates",
       "zh": "第 2 步 · 放上坐標"
      },
      "math": "A(0,0),\\;C(0,-h),\\;B(b,0),\\;D(-d,-h)",
      "en": "The two right angles at $A$ and $C$ fix this shape.",
      "zh": "$A$、$C$ 兩個直角定出這個形狀。",
      "highlight": [
       "B(b,0)",
       "D(-d,-h)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Use $\\angle ABC+\\angle ADC=90^{\\circ}$",
       "zh": "第 3 步 · 用 $\\angle ABC+\\angle ADC=90^{\\circ}$"
      },
      "math": "\\tan\\angle ABC=\\frac{h}{b},\\;\\tan\\angle ADC=\\frac{h}{d},\\;\\frac{h}{b}\\cdot\\frac{h}{d}=1 \\;\\Rightarrow\\; h^{2}=bd",
      "en": "When two angles add to $90^{\\circ}$ their tangents multiply to $1$.",
      "zh": "兩角互餘時，正切值相乘等於 $1$。",
      "highlight": [
       "h^{2}=bd"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Test the options",
       "zh": "第 4 步 · 逐項檢驗"
      },
      "math": "\\frac{BC}{AD}=\\frac{\\sqrt{b^{2}+h^{2}}}{\\sqrt{d^{2}+h^{2}}}=\\sqrt{\\frac{b(b+d)}{d(b+d)}}=\\sqrt{\\frac{b}{d}}=\\frac{h}{d}=\\tan\\angle ADC",
      "en": "Only $\\tan\\angle ADC=\\frac{BC}{AD}$ survives; the other three fail for a general trapezium.",
      "zh": "只有 $\\tan\\angle ADC=\\frac{BC}{AD}$ 普遍成立，其餘三式對一般梯形都不成立。",
      "highlight": [
       "\\tan\\angle ADC=\\frac{BC}{AD}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\tan\\angle ADC=\\frac{BC}{AD}",
      "en": "That is option C.",
      "zh": "即選項 C。",
      "highlight": [
       "\\text{C}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$\\tan\\angle ACB=\\frac{AB}{AD}$ — wrong: $\\tan\\angle ACB=\\frac{AB}{AC}$, and $AD\\neq AC$.",
      "zh": "$\\tan\\angle ACB=\\frac{AB}{AD}$ —— 錯：$\\tan\\angle ACB=\\frac{AB}{AC}$，而 $AD\\neq AC$。"
     },
     {
      "opt": "B",
      "en": "$\\tan\\angle ACB=\\frac{AB}{CD}$ — mixes the two triangles; $\\tan\\angle ACB$ only involves $\\Delta ABC$.",
      "zh": "$\\tan\\angle ACB=\\frac{AB}{CD}$ —— 把兩個三角形混在一起；$\\tan\\angle ACB$ 只涉及 $\\Delta ABC$。"
     },
     {
      "opt": "D",
      "en": "$\\tan\\angle ADC=\\frac{BC}{CD}$ — numerator and denominator come from different triangles.",
      "zh": "$\\tan\\angle ADC=\\frac{BC}{CD}$ —— 分子分母來自不同三角形。"
     }
    ],
    "tip": {
     "en": "When two triangles share the vertical side $AC$, every tangent in the question is a ratio of sides *within one* triangle, or (as here) a ratio that the condition $h^{2}=bd$ collapses onto another tangent.",
     "zh": "兩個三角形共用垂直邊 $AC$ 時，每個正切都是**同一個**三角形內的邊比；像本例則是用 $h^{2}=bd$ 把一條邊比化簡成另一個正切。"
    }
   }
  },
  "2025-p2-q24": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Length $XY$ by the cosine rule",
       "zh": "第 1 步 · 用餘弦定理求 $XY$"
      },
      "math": "XY^{2}=1^{2}+2^{2}-2(1)(2)\\cos60^{\\circ}=3",
      "en": "$\\angle XOY=80^{\\circ}-20^{\\circ}=60^{\\circ}$.",
      "zh": "$\\angle XOY=80^{\\circ}-20^{\\circ}=60^{\\circ}$。",
      "highlight": [
       "XY=\\sqrt{3}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Spot the right angle",
       "zh": "第 2 步 · 認出直角"
      },
      "math": "1^{2}+XY^{2}=1+3=4=OY^{2} \\;\\Rightarrow\\; OX\\perp XY",
      "en": "Since $OX=1$, $XY=\\sqrt3$ and $OY=2$, Pythagoras' converse gives $\\angle OXY=90^{\\circ}$.",
      "zh": "由 $OX=1$、$XY=\\sqrt3$、$OY=2$，勾股逆定理得 $\\angle OXY=90^{\\circ}$。",
      "highlight": [
       "\\angle OXY=90^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Which side is the equilateral triangle on?",
       "zh": "第 3 步 · 等邊三角形在哪一側"
      },
      "math": "\\angle OXZ=90^{\\circ}+60^{\\circ}=150^{\\circ}",
      "en": "The other equilateral vertex is at $140^{\\circ}$, outside the given range, so $Z$ is the one on the other side of $XY$: $XO$ and $XZ$ open $90^{\\circ}+60^{\\circ}$ apart.",
      "zh": "另一個等邊頂點在 $140^{\\circ}$，超出題目範圍；故 $Z$ 在 $XY$ 的另一側，$XO$ 與 $XZ$ 張開 $90^{\\circ}+60^{\\circ}=150^{\\circ}$。",
      "highlight": [
       "\\angle OXZ=150^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Cosine rule in $\\Delta OXZ$",
       "zh": "第 4 步 · 在 $\\Delta OXZ$ 用餘弦定理"
      },
      "math": "r^{2}=1^{2}+3-2(1)(\\sqrt{3})\\cos150^{\\circ}=4+3=7",
      "en": "$OX=1$, $XZ=\\sqrt3$ and $\\cos150^{\\circ}=-\\frac{\\sqrt3}{2}$, so $r=\\sqrt7$.",
      "zh": "$OX=1$、$XZ=\\sqrt3$，而 $\\cos150^{\\circ}=-\\frac{\\sqrt3}{2}$，故 $r=\\sqrt{7}$。",
      "highlight": [
       "r=\\sqrt{7}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "r=\\sqrt{7}",
      "en": "Option C.",
      "zh": "答案 C。",
      "highlight": [
       "\\sqrt{7}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$\\sqrt3$ — that is the side $XY$, not $r=OZ$.",
      "zh": "$\\sqrt3$ —— 那是邊長 $XY$，不是 $r=OZ$。"
     },
     {
      "opt": "B",
      "en": "$\\sqrt5$ — from adding $1+4$ (the two radii) instead of the actual side lengths.",
      "zh": "$\\sqrt5$ —— 把兩個極徑平方相加（$1+4$）當成 $OZ^{2}$。"
     },
     {
      "opt": "D",
      "en": "$\\sqrt{10}$ — from $OX^{2}+XY^{2}+XZ^{2}$ style double counting, i.e. using the outer equilateral vertex.",
      "zh": "$\\sqrt{10}$ —— 反覆加邊長平方（用了外側那個不合題意的頂點）。"
     }
    ],
    "tip": {
     "en": "Polar-coordinate triangles: convert to Cartesian for the length/rotation step. If two radii and the included angle are given, test the converse of Pythagoras — DSE often builds a right angle in.",
     "zh": "極坐標三角形：算長度與旋轉時先化成直角坐標。給了兩個極徑與夾角，先試勾股逆定理 —— DSE 常暗藏一個直角。"
    }
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
     "en": "Repeated values in a box (three $2$s here) must carry their full weight: multiply the token value by the count, then divide by the total. DSE always hides a repeated card.",
     "zh": "箱中有重複數字（這裡三張 $2$）時，必須把重複次數算進去：代幣數 × 張數，再除以總數。DSE 幾乎必設一個重複值。"
    }
   }
  },
  "2025-p2-q30": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · The mean gives $\\alpha+\\beta$",
       "zh": "第 1 步 · 平均數給出 $\\alpha+\\beta$"
      },
      "math": "\\frac{\\alpha+\\beta+(-4)+(-3)+1+1+1+4}{8}=0 \\;\\Rightarrow\\; \\alpha+\\beta=0",
      "en": "The eight known numbers other than $\\alpha,\\beta$ add up to $0$.",
      "zh": "除 $\\alpha,\\beta$ 外，其餘八個數相加為 $0$。",
      "highlight": [
       "\\alpha+\\beta=0"
      ]
     },
     {
      "title": {
       "en": "Step 2 · The range pins them down",
       "zh": "第 2 步 · 全距定出數值"
      },
      "math": "\\text{range}=10,\\;\\alpha+\\beta=0 \\;\\Rightarrow\\; \\{\\alpha,\\beta\\}=\\{5,-5\\}",
      "en": "The known part already spans $-4$ to $4$; with $\\alpha=-\\beta$ the pair must be $\\pm5$ (if it were $\\pm6$ the range would be $12$).",
      "zh": "已知部分已跨 $-4$ 至 $4$；又 $\\alpha=-\\beta$，故兩數必為 $\\pm5$（若是 $\\pm6$ 全距會變成 $12$）。",
      "highlight": [
       "\\{5,-5\\}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Mode and median",
       "zh": "第 3 步 · 眾數與中位數"
      },
      "math": "-5,\\,-4,\\,-3,\\,1,\\,1,\\,1,\\,4,\\,5",
      "en": "Sorting: the middle two are both $1$, so $t=1$; and $1$ appears three times, so $s=1$.",
      "zh": "排序後：中間兩個都是 $1$，故 $t=1$；而 $1$ 出現三次，故 $s=1$。",
      "highlight": [
       "s=1",
       "t=1"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{I and III only}",
      "en": "I ($s=1$) ✓, II ($t=-1$) ✗, III ($\\alpha+\\beta=0$) ✓ — option B.",
      "zh": "I（$s=1$）✓、II（$t=-1$）✗、III（$\\alpha+\\beta=0$）✓ —— 答案 B。",
      "highlight": [
       "\\text{B}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$\\text{I, II and III}$ — statement II is the trap: with $8$ numbers the median is the **average of the 4th and 5th**, not the 4th. Here both are $1$, so $t=1$.",
      "zh": "$\\text{I, II, III}$ —— II 是陷阱：8 個數的中位數是**第 4、5 個的平均**，不是第 4 個。這裡兩者都是 $1$，故 $t=1$。"
     },
     {
      "opt": "A",
      "en": "$\\text{I and II only}$ — you accepted $t=-1$ by treating $-3$ and $1$ as the middle pair, and forgot III.",
      "zh": "$\\text{I, II}$ —— 把 $-3$、$1$ 當成中間一對而接受 $t=-1$，同時漏了 III。"
     },
     {
      "opt": "C",
      "en": "$\\text{II and III only}$ — you got III right but still mis-read the median.",
      "zh": "$\\text{II, III}$ —— III 對，但中位數仍讀錯。"
     }
    ],
    "tip": {
     "en": "For $n$ numbers with $n$ **even**, median $=\\frac{1}{2}(\\text{4th}+\\text{5th})$ when $n=8$. And 'range $=10$' plus 'mean $=0$' usually forces the two unknowns to be $\\pm5$.",
     "zh": "$n=8$（**偶數**）時，中位數 $=\\frac{1}{2}(\\text{第4個}+\\text{第5個})$。「全距 $=10$」加上「平均數 $=0$」通常逼出未知數為 $\\pm5$。"
    }
   }
  },
  "2025-p2-q31": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Count the digits",
       "zh": "第 1 步 · 數位數"
      },
      "math": "3\\text{E}\\underbrace{00\\ldots0}_{12}\\Rightarrow 62\\times16^{12}",
      "en": "$3\\text{E}_{16}=62$ and twelve zeros means twelve factors of $16=2^{4}$.",
      "zh": "$3\\text{E}_{16}=62$，後面十二個 0 代表 $16^{12}=2^{48}$。",
      "highlight": [
       "62\\times2^{48}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Write $62$ in binary",
       "zh": "第 2 步 · 把 $62$ 寫成 2 的冪"
      },
      "math": "62=32+16+8+4+2=2^{5}+2^{4}+2^{3}+2^{2}+2^{1}",
      "en": "Five consecutive powers of $2$ from $2^{5}$ down to $2^{1}$.",
      "zh": "由 $2^{5}$ 到 $2^{1}$ 連續五個 2 的冪。",
      "highlight": [
       "2^{5}+2^{4}+2^{3}+2^{2}+2^{1}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Add the exponents",
       "zh": "第 3 步 · 指數相加"
      },
      "math": "62\\times2^{48}=2^{53}+2^{52}+2^{51}+2^{50}+2^{49}",
      "en": "Multiplying by $2^{48}$ shifts every exponent up by $48$.",
      "zh": "乘 $2^{48}$ 即每個指數加 $48$。",
      "highlight": [
       "2^{53}+\\cdots+2^{49}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "2^{53}+2^{52}+2^{51}+2^{50}+2^{49}",
      "en": "Option D.",
      "zh": "答案 D。",
      "highlight": [
       "\\text{D}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$2^{52}+\\cdots+2^{48}$ — treating $3\\text{E}$ as $31$ (ignoring $\\text{E}=14$): $31\\times2^{48}$.",
      "zh": "$2^{52}+\\cdots+2^{48}$ —— 把 $3\\text{E}$ 當成 $31$（忘記 $\\text{E}=14$），即 $31\\times2^{48}$。"
     },
     {
      "opt": "B",
      "en": "$2^{17}+\\cdots+2^{13}$ — using $2^{12}$ instead of $16^{12}$ (forgetting that each hex digit is $4$ bits).",
      "zh": "$2^{17}+\\cdots+2^{13}$ —— 用了 $2^{12}$ 而非 $16^{12}$（忘記每個十六進位位 = 4 個二進位位）。"
     },
     {
      "opt": "A",
      "en": "$2^{16}+\\cdots+2^{12}$ — two mistakes at once: $31$ instead of $62$, and $2^{12}$ instead of $2^{48}$.",
      "zh": "$2^{16}+\\cdots+2^{12}$ —— 同時錯兩處：$31$ 而非 $62$，以及 $2^{12}$ 而非 $2^{48}$。"
     }
    ],
    "tip": {
     "en": "Hexadecimal: $3\\text{E}=3\\times16+14=62$, and each trailing hex $0$ adds $2^{4}$ to the exponent.",
     "zh": "十六進位：$3\\text{E}=3\\times16+14=62$；每個末尾的十六進位 $0$ 等於指數加 $4$。"
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
  },
  "2025-p2-q34": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · When do the two graphs meet?",
       "zh": "第 1 步 · 兩圖何時相交"
      },
      "math": "y=a^{x}\\ \\text{and}\\ y=\\log_{a}x\\ \\text{meet} \\iff 0<a<1",
      "en": "For $a>1$ the curves never meet; for $0<a<1$ they do.",
      "zh": "$a>1$ 時兩曲線不相交；$0<a<1$ 時相交。",
      "highlight": [
       "0<a<1"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Statement I",
       "zh": "第 2 步 · 命題 I"
      },
      "math": "a<1",
      "en": "Since $P$ exists, $a<1$ — **true**.",
      "zh": "既然 $P$ 存在，必有 $a<1$ —— **正確**。",
      "highlight": [
       "a<1"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Statement II",
       "zh": "第 3 步 · 命題 II"
      },
      "math": "\\log_{a}x=0 \\;\\Rightarrow\\; x=1 \\;\\Rightarrow\\; Q(1,0),\\; OQ=1>a",
      "en": "The $x$-intercept of $y=\\log_a x$ is always $1$, and $0<a<1$ — **true**.",
      "zh": "$y=\\log_a x$ 的 $x$ 截距恆為 $1$，而 $0<a<1$ —— **正確**。",
      "highlight": [
       "OQ=1>a"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Statement III",
       "zh": "第 4 步 · 命題 III"
      },
      "math": "P\\ \\text{lies on}\\ y=x \\;\\Rightarrow\\; \\angle POQ=45^{\\circ}",
      "en": "$y=a^{x}$ and $y=\\log_{a}x$ are inverse functions, so their intersections lie on $y=x$ — **true**.",
      "zh": "$y=a^{x}$ 與 $y=\\log_{a}x$ 互為反函數，交點必在 $y=x$ 上 —— **正確**。",
      "highlight": [
       "\\angle POQ=45^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{I, II and III}",
      "en": "All three — option D.",
      "zh": "三項皆正確 —— 答案 D。",
      "highlight": [
       "\\text{D}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$\\text{I and II only}$ — you doubted III; but a point on the line $y=x$ seen from the origin is always at $45^{\\circ}$ to both axes.",
      "zh": "$\\text{I 與 II}$ —— 對 III 存疑；但只要 $P$ 在 $y=x$ 上，由原點看過去就與 $x$ 軸成 $45^{\\circ}$。"
     },
     {
      "opt": "B",
      "en": "$\\text{I and III only}$ — you missed $OQ>a$: $OQ=1$ and $a<1$, so it always holds.",
      "zh": "$\\text{I 與 III}$ —— 漏了 $OQ>a$：$OQ=1$、$a<1$，恆成立。"
     },
     {
      "opt": "C",
      "en": "$\\text{II and III only}$ — dropping I, usually by thinking the curves can also meet for $a>1$.",
      "zh": "$\\text{II 與 III}$ —— 漏了 I，通常誤以為 $a>1$ 時兩曲線也相交。"
     }
    ],
    "tip": {
     "en": "Two facts kill this question: (1) $a^{x}$ and $\\log_{a}x$ are inverses, so their intersections lie on $y=x$; (2) they intersect only for $0<a<1$. The $x$-intercept of $\\log_{a}x$ is always $(1,0)$.",
     "zh": "兩個事實可解此題：(1) $a^{x}$ 與 $\\log_{a}x$ 互為反函數 ⇒ 交點在 $y=x$ 上；(2) 只有 $0<a<1$ 才相交。而 $\\log_{a}x$ 的 $x$ 截距恆為 $(1,0)$。"
    }
   }
  },
  "2025-p2-q35": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · The cycle of $i$",
       "zh": "第 1 步 · $i$ 的週期"
      },
      "math": "i,\\,-1,\\,-i,\\,1,\\;i,\\,-1,\\,-i,\\,1,\\ldots",
      "en": "Powers of $i$ repeat every four terms, and each block of four sums to $0$.",
      "zh": "$i$ 的冪每四項重複一次，而每四個一組的和為 $0$。",
      "highlight": [
       "i+(-1)+(-i)+1=0"
      ]
     },
     {
      "title": {
       "en": "Step 2 · How many terms?",
       "zh": "第 2 步 · 共有多少項"
      },
      "math": "999-9+1=991=4\\times247+3",
      "en": "From $i^{9}$ to $i^{999}$ inclusive.",
      "zh": "由 $i^{9}$ 到 $i^{999}$（含頭尾）。",
      "highlight": [
       "991=4\\times247+3"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Drop the whole cycles",
       "zh": "第 3 步 · 去掉完整週期"
      },
      "math": "247\\times0=0",
      "en": "Only the last three terms matter.",
      "zh": "只剩最後三項。",
      "highlight": [
       "247\\times0=0"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Add the remainder",
       "zh": "第 4 步 · 加餘下三項"
      },
      "math": "i^{997}+i^{998}+i^{999}=i+(-1)+(-i)=-1",
      "en": "$997\\equiv1$, $998\\equiv2$, $999\\equiv3 \\pmod 4$ — option A.",
      "zh": "$997\\equiv1$、$998\\equiv2$、$999\\equiv3 \\pmod 4$ —— 答案 A。",
      "highlight": [
       "-1"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$0$ — assuming the terms split into whole cycles; $991$ is not a multiple of $4$.",
      "zh": "$0$ —— 誤以為剛好分成整數個週期；$991$ 不是 $4$ 的倍數。"
     },
     {
      "opt": "C",
      "en": "$1$ — starting the counting at $i^{8}$ (a shift of one) so the remainder becomes $1+(-1)+(-i)+i$…",
      "zh": "$1$ —— 由 $i^{8}$ 起算（整體移位一次），餘項變成另一組。"
     },
     {
      "opt": "D",
      "en": "$i$ — adding only the first of the three leftover terms.",
      "zh": "$i$ —— 只加了餘下三項的第一項。"
     }
    ],
    "tip": {
     "en": "Cyclic sums: number of terms $=b-a+1$, then take the remainder mod $4$ and add only those terms. Watch the *first* term's index ($i^{9}=i$), not the last.",
     "zh": "週期和：先算項數 $=b-a+1$，取 $\\bmod 4$ 的餘數，只加餘下幾項。注意由**首項**的指數（$i^{9}=i$）開始數，不是由末項。"
    }
   }
  },
  "2025-p2-q36": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Rewrite the two lines",
       "zh": "第 1 步 · 改寫兩條直線"
      },
      "math": "y\\ge\\frac{19-4x}{5},\\quad y\\ge\\frac{7x+11}{6},\\quad x\\le11",
      "en": "Both inequalities force $y$ to be *above* a line; the third cuts off large $x$.",
      "zh": "兩個不等式都要求 $y$ 在某直線**之上**，第三個限制 $x$ 不可太大。",
      "highlight": [
       "y\\ge\\frac{7x+11}{6}",
       "x\\le11"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Where the two lines cross",
       "zh": "第 2 步 · 兩線交點"
      },
      "math": "\\frac{19-4x}{5}=\\frac{7x+11}{6} \\;\\Rightarrow\\; x=1,\\;y=3",
      "en": "For $x<1$ the first line is higher; for $x>1$ the second is.",
      "zh": "$x<1$ 時第一條較高；$x>1$ 時第二條較高。",
      "highlight": [
       "(1,3)"
      ]
     },
     {
      "title": {
       "en": "Step 3 · On the relevant boundary the objective simplifies",
       "zh": "第 3 步 · 在相關邊界上目標式化簡"
      },
      "math": "8x-6y+11=(7x-6y+11)+x=x",
      "en": "Because the region's boundary for $x>1$ is exactly $7x-6y+11=0$.",
      "zh": "因為 $x>1$ 時區域的邊界正是 $7x-6y+11=0$。",
      "highlight": [
       "8x-6y+11=x"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\max(8x-6y+11)=x_{\\max}=11",
      "en": "$x\\le11$ gives the greatest value $11$ (at the intersection of $7x-6y+11=0$ with $x=11$) — option B.",
      "zh": "由 $x\\le11$ 得最大值 $11$（在 $7x-6y+11=0$ 與 $x=11$ 的交點取得）—— 答案 B。",
      "highlight": [
       "11"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$129$ — evaluating the objective at a point that does **not** satisfy all three inequalities (e.g. $x=11$ with $y$ too small).",
      "zh": "$129$ —— 把目標式代到**不滿足全部三個不等式**的點（例如 $x=11$ 但 $y$ 太小）。"
     },
     {
      "opt": "C",
      "en": "$15$ — from treating the corner as $(11,-5)$ (the first line's $x=11$ point), which violates $7x-6y+11\\le0$.",
      "zh": "$15$ —— 把角點取成 $(11,-5)$（第一條線的 $x=11$ 點），但該點違反 $7x-6y+11\\le0$。"
     },
     {
      "opt": "A",
      "en": "$1$ — the value at the corner $(1,3)$; that is the **smallest** value on that edge, not the greatest.",
      "zh": "$1$ —— 角點 $(1,3)$ 的值；那是該邊上的**最小**值，不是最大。"
     }
    ],
    "tip": {
     "en": "Linear programming: draw the boundary, then test the **corners**. If the objective comes out as a simple multiple of $x$ or $y$, the optimum is at the extreme value of that variable.",
     "zh": "線性規劃：先畫邊界，再測**角點**。若目標式化簡後只是 $x$ 或 $y$ 的倍數，最佳值就在該變數的極端值。"
    }
   }
  },
  "2025-p2-q37": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Write the arithmetic condition",
       "zh": "第 1 步 · 寫出等差條件"
      },
      "math": "p=q-d,\\quad r=q+d",
      "en": "A common difference $d$ makes the algebra mechanical.",
      "zh": "設公差為 $d$，代數就變成機械操作。",
      "highlight": [
       "p=q-d,\\;r=q+d"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Statement I",
       "zh": "第 2 步 · 命題 I"
      },
      "math": "3^{q}\\div3^{p}=3^{d}=3^{r}\\div3^{q}",
      "en": "Equal ratios $\\Rightarrow$ geometric — **true** (I).",
      "zh": "公比相等 $\\Rightarrow$ 等比 —— **正確**（I）。",
      "highlight": [
       "3^{d}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Statement II",
       "zh": "第 3 步 · 命題 II"
      },
      "math": "\\left(\\frac{5}{q}\\right)^{2}=\\frac{5}{p}\\cdot\\frac{5}{r} \\iff q^{2}=pr \\iff d=0",
      "en": "Only true when the sequence is constant (e.g. $p,q,r=1,2,3$ fails) — **false**.",
      "zh": "只有當數列為常數（$d=0$）才成立（例：$p,q,r=1,2,3$ 就不成立）—— **錯誤**。",
      "highlight": [
       "q^{2}=pr\\ \\text{only if}\\ d=0"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Statement III",
       "zh": "第 4 步 · 命題 III"
      },
      "math": "p-q=-d,\\;q-r=-d,\\;r-p=2d",
      "en": "For an AP we need $(-d)-(-d)=(2d)-(-d)$, i.e. $0=3d$ — **false** unless $d=0$.",
      "zh": "要成等差須 $(-d)-(-d)=(2d)-(-d)$，即 $0=3d$ —— 除非 $d=0$，否則**錯誤**。",
      "highlight": [
       "0=3d"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{I only}",
      "en": "Only I must be true — option A.",
      "zh": "只有 I 必然成立 —— 答案 A。",
      "highlight": [
       "\\text{A}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$\\text{I and III only}$ — III looks like it should work (the terms are all multiples of $d$), but $r-p=2d$ breaks the pattern; try $p,q,r=1,2,3$.",
      "zh": "$\\text{I 與 III}$ —— III 看似合理（各項都是 $d$ 的倍數），但 $r-p=2d$ 破壞等差；用 $p,q,r=1,2,3$ 一試即知。"
     },
     {
      "opt": "B",
      "en": "$\\text{II only}$ — II is the classic false statement: reciprocal-type sequences ($\\frac{5}{p}$ etc.) are geometric only for special values.",
      "zh": "$\\text{II 只有}$ —— II 是典型錯誤命題：倒數型數列（$\\frac{5}{p}$ 等）只在特殊值下才等比。"
     },
     {
      "opt": "D",
      "en": "$\\text{II and III only}$ — both of the false ones.",
      "zh": "$\\text{II 與 III}$ —— 兩個錯誤命題的組合。"
     }
    ],
    "tip": {
     "en": "Substitute $p=q-d$, $r=q+d$ and test numerically with $(1,2,3)$: an exponential of an AP **is** a GP, but reciprocals and differences usually are not.",
     "zh": "代 $p=q-d$、$r=q+d$，再用 $(1,2,3)$ 實測：等差的指數序列**是**等比，但倒數與差一般不成立。"
    }
   }
  },
  "2025-p2-q38": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Tangent–chord angle",
       "zh": "第 1 步 · 切線與弦的夾角"
      },
      "math": "\\angle CDT=41^{\\circ} \\;\\Rightarrow\\; \\angle DAC=41^{\\circ}",
      "en": "The angle between the tangent $TD$ and the chord $DC$ equals the angle in the alternate segment.",
      "zh": "切線 $TD$ 與弦 $DC$ 的夾角等於另一弓形內的圓周角。",
      "highlight": [
       "\\angle DAC=41^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · $AC$ is a diameter",
       "zh": "第 2 步 · $AC$ 是直徑"
      },
      "math": "\\angle ADC=90^{\\circ} \\;\\Rightarrow\\; \\angle ACD=180^{\\circ}-90^{\\circ}-41^{\\circ}=49^{\\circ}",
      "en": "Angle in a semicircle is a right angle.",
      "zh": "半圓上的圓周角是直角。",
      "highlight": [
       "\\angle ACD=49^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Angles at $E$",
       "zh": "第 3 步 · $E$ 處的角"
      },
      "math": "\\angle CED=180^{\\circ}-\\angle BEC=180^{\\circ}-96^{\\circ}=84^{\\circ}",
      "en": "$B$, $E$, $D$ are collinear, so the two angles at $E$ are supplementary.",
      "zh": "$B$、$E$、$D$ 共線，故 $E$ 處兩角互補。",
      "highlight": [
       "\\angle CED=84^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\angle CDE=180^{\\circ}-49^{\\circ}-84^{\\circ}=47^{\\circ}",
      "en": "Angles in $\\Delta CDE$ sum to $180^{\\circ}$ — option A.",
      "zh": "$\\Delta CDE$ 內角和 $180^{\\circ}$ —— 答案 A。",
      "highlight": [
       "47^{\\circ}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$52^{\\circ}$ — using $\\angle CED=96^{\\circ}$ directly (forgetting that $\\angle BEC$ and $\\angle CED$ are supplementary).",
      "zh": "$52^{\\circ}$ —— 直接把 $\\angle CED$ 當成 $96^{\\circ}$（忘記與 $\\angle BEC$ 互補）。"
     },
     {
      "opt": "B",
      "en": "$48^{\\circ}$ — from $\\angle ACD=42^{\\circ}$, i.e. mis-applying the tangent–chord angle to the wrong chord ($\\angle ADT$ instead of $\\angle CDT$).",
      "zh": "$48^{\\circ}$ —— 把切弦角對錯了弦（取了 $\\angle ADT$ 而非 $\\angle CDT$）。"
     },
     {
      "opt": "D",
      "en": "$55^{\\circ}$ — dropping the right angle at $D$ (not using $AC$ as a diameter).",
      "zh": "$55^{\\circ}$ —— 忘了 $AC$ 是直徑（即漏了 $\\angle ADC=90^{\\circ}$）。"
     }
    ],
    "tip": {
     "en": "Circle toolkit: tangent–chord = alternate segment; diameter ⇒ right angle at the circumference; two chords meeting inside ⇒ vertical/supplementary angles. Chain them from the tangent inwards.",
     "zh": "圓的三大工具：切弦角 = 另一弓形的圓周角；直徑 ⇒ 圓周角為直角；兩弦相交 ⇒ 對頂角／互補。由切線往內逐層推。"
    }
   }
  },
  "2025-p2-q39": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Factorise",
       "zh": "第 1 步 · 因式分解"
      },
      "math": "\\tan^{3}\\theta-2\\tan\\theta=\\tan\\theta\\,(\\tan^{2}\\theta-2)=0",
      "en": "Do not divide by $\\tan\\theta$ — you would lose the $\\tan\\theta=0$ solutions.",
      "zh": "不要直接除以 $\\tan\\theta$，否則會丟掉 $\\tan\\theta=0$ 的解。",
      "highlight": [
       "\\tan\\theta(\\tan^{2}\\theta-2)=0"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Two families",
       "zh": "第 2 步 · 兩類解"
      },
      "math": "\\tan\\theta=0 \\quad\\text{or}\\quad \\tan\\theta=\\pm\\sqrt{2}",
      "en": "$\\tan\\theta=0$ gives $\\theta=180^{\\circ}$; $\\tan\\theta=\\pm\\sqrt2$ gives $\\theta\\approx54.7^{\\circ}+180n$ or $125.3^{\\circ}+180n$.",
      "zh": "$\\tan\\theta=0$ 給 $\\theta=180^{\\circ}$；$\\tan\\theta=\\pm\\sqrt2$ 給 $\\theta\\approx54.7^{\\circ}+180n$ 或 $125.3^{\\circ}+180n$。",
      "highlight": [
       "\\tan\\theta=0",
       "\\tan\\theta=\\pm\\sqrt{2}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Keep only $90^{\\circ}<\\theta<270^{\\circ}$",
       "zh": "第 3 步 · 只取 $90^{\\circ}<\\theta<270^{\\circ}$"
      },
      "math": "125.3^{\\circ},\\;180^{\\circ},\\;234.7^{\\circ}",
      "en": "$54.7^{\\circ}$ is too small and $54.7^{\\circ}+180^{\\circ}=234.7^{\\circ}$ ✓; $125.3^{\\circ}$ ✓; $305.3^{\\circ}$ is too big.",
      "zh": "$54.7^{\\circ}$ 太小，$234.7^{\\circ}$ ✓；$125.3^{\\circ}$ ✓；$305.3^{\\circ}$ 太大。",
      "highlight": [
       "125.3^{\\circ}",
       "180^{\\circ}",
       "234.7^{\\circ}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "3\\ \\text{roots}",
      "en": "Three roots — option B.",
      "zh": "共三個根 —— 答案 B。",
      "highlight": [
       "3"
      ]
     }
    ],
    "traps": [
     {
      "opt": "A",
      "en": "$2$ — counting only the $\\tan\\theta=\\pm\\sqrt2$ family and throwing away $\\theta=180^{\\circ}$ (the classic division-by-$\\tan\\theta$ error).",
      "zh": "$2$ —— 只算了 $\\tan\\theta=\\pm\\sqrt2$ 的一族，丟了 $\\theta=180^{\\circ}$（典型的「直接除以 $\\tan\\theta$」錯誤）。"
     },
     {
      "opt": "C",
      "en": "$4$ — forgetting that $\\tan\\theta$ has period $180^{\\circ}$, so each of $\\pm\\sqrt2$ gives exactly one solution in the $180^{\\circ}$-wide interval.",
      "zh": "$4$ —— 忘了 $\\tan\\theta$ 的週期是 $180^{\\circ}$，誤以為 $\\pm\\sqrt2$ 各給兩個解。"
     },
     {
      "opt": "D",
      "en": "$5$ — counting outside the given range (e.g. including $54.7^{\\circ}$ or $305.3^{\\circ}$).",
      "zh": "$5$ —— 把範圍外的解也數進去（例如 $54.7^{\\circ}$ 或 $305.3^{\\circ}$）。"
     }
    ],
    "tip": {
     "en": "Number-of-roots questions: factorise (never divide), then test each branch against the interval. In any $180^{\\circ}$ window, $\\tan\\theta=k$ has exactly **one** solution.",
     "zh": "問「根的數目」：先分解（切勿直接除），再逐族對區間測試。任何一個 $180^{\\circ}$ 寬的區間內，$\\tan\\theta=k$ 恰有**一**個解。"
    }
   }
  },
  "2025-p2-q40": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · The projection of $P$",
       "zh": "第 1 步 · $P$ 的投影"
      },
      "math": "G=\\text{centroid of }\\Delta QRS,\\quad PG\\perp\\Delta QRS",
      "en": "In a regular tetrahedron the foot of the perpendicular from $P$ is the centre of the opposite face.",
      "zh": "正四面體中，由 $P$ 向對面作的垂足就是該面的中心。",
      "highlight": [
       "PG\\perp\\Delta QRS"
      ]
     },
     {
      "title": {
       "en": "Step 2 · The angle we need",
       "zh": "第 2 步 · 所求的角"
      },
      "math": "\\text{angle}=(PQ,\\Delta QRS)=\\angle PQG",
      "en": "The angle between a line and a plane is measured between the line and its projection $QG$.",
      "zh": "直線與平面的夾角，就是直線與其投影 $QG$ 的夾角。",
      "highlight": [
       "\\angle PQG"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Compute $QG$ (edge $=1$)",
       "zh": "第 3 步 · 算 $QG$（邊長 $=1$）"
      },
      "math": "QG=\\frac{2}{3}\\times\\frac{\\sqrt{3}}{2}=\\frac{\\sqrt{3}}{3}",
      "en": "Centroid divides each median in $2:1$; the median of an equilateral triangle is $\\frac{\\sqrt3}{2}$.",
      "zh": "重心把中線分成 $2:1$；等邊三角形中線為 $\\frac{\\sqrt3}{2}$。",
      "highlight": [
       "QG=\\frac{\\sqrt{3}}{3}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\cos\\angle PQG=\\frac{QG}{PQ}=\\frac{\\sqrt{3}}{3} \\;\\Rightarrow\\; \\angle PQG\\approx54.7^{\\circ}",
      "en": "Correct to the nearest degree: $55^{\\circ}$ — option B.",
      "zh": "取至最接近的度數：$55^{\\circ}$ —— 答案 B。",
      "highlight": [
       "55^{\\circ}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$60^{\\circ}$ — that is the angle **inside a face** (e.g. $\\angle PQR$), not the angle between $PQ$ and the plane.",
      "zh": "$60^{\\circ}$ —— 那是**面內**的角（例如 $\\angle PQR$），不是線與平面的夾角。"
     },
     {
      "opt": "D",
      "en": "$71^{\\circ}$ — the dihedral angle between two faces (its cosine is $\\frac13$, giving $70.5^{\\circ}$), a different angle entirely.",
      "zh": "$71^{\\circ}$ —— 那是兩個面之間的二面角（餘弦為 $\\frac13$，即 $70.5^{\\circ}$），並非本題所求。"
     },
     {
      "opt": "A",
      "en": "$35^{\\circ}$ — using $\\frac{PG}{PQ}$ instead of $\\cos$: $\\frac{\\sqrt{6}}{3}$ would be $\\sin$ of the angle.",
      "zh": "$35^{\\circ}$ —— 用了 $\\frac{PG}{PQ}$；那是角的正弦而非餘弦。"
     }
    ],
    "tip": {
     "en": "Regular tetrahedron numbers to memorise: face angle $60^{\\circ}$, line-to-face angle $\\cos^{-1}\\frac{\\sqrt3}{3}\\approx54.7^{\\circ}$, face-to-face (dihedral) $\\cos^{-1}\\frac13\\approx70.5^{\\circ}$.",
     "zh": "正四面體要記的三個數：面內角 $60^{\\circ}$、線面角 $\\cos^{-1}\\frac{\\sqrt3}{3}\\approx54.7^{\\circ}$、二面角 $\\cos^{-1}\\frac13\\approx70.5^{\\circ}$。"
    }
   }
  },
  "2025-p2-q41": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Set up the triangle",
       "zh": "第 1 步 · 設三角形"
      },
      "math": "O(0,0),\\;U(20,0),\\;V(0,h)",
      "en": "The $x$-coordinate of the in-centre is the in-radius $r=6$ only if the right angle is at the origin — which it is here.",
      "zh": "當直角在原點時，內心的 $x$ 坐標正是內切圓半徑 $r=6$（本例正是如此）。",
      "highlight": [
       "O(0,0)",
       "U(20,0)",
       "V(0,h)"
      ]
     },
     {
      "title": {
       "en": "Step 2 · In-radius of a right triangle",
       "zh": "第 2 步 · 直角三角形的內切圓半徑"
      },
      "math": "r=\\frac{a+b-c}{2}=\\frac{20+h-\\sqrt{400+h^{2}}}{2}=6",
      "en": "$a,b$ are the legs, $c$ the hypotenuse.",
      "zh": "$a,b$ 為兩直角邊，$c$ 為斜邊。",
      "highlight": [
       "\\frac{a+b-c}{2}=6"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Solve for $h$",
       "zh": "第 3 步 · 解出 $h$"
      },
      "math": "\\sqrt{400+h^{2}}=8+h \\;\\Rightarrow\\; 400=64+16h \\;\\Rightarrow\\; h=21",
      "en": "Square both sides; the $h^{2}$ terms cancel.",
      "zh": "兩邊平方，$h^{2}$ 相消。",
      "highlight": [
       "h=21"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "[\\Delta OUV]=\\frac{1}{2}\\times20\\times21=210",
      "en": "Check: $r=\\frac{20+21-29}{2}=6$ ✓ — option C.",
      "zh": "驗算：$r=\\frac{20+21-29}{2}=6$ ✓ —— 答案 C。",
      "highlight": [
       "210"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$250$ — using area $=r\\times s$ with the wrong semi-perimeter, or $h=25$.",
      "zh": "$250$ —— 用 $r\\times s$ 時半周界取錯，或取了 $h=25$。"
     },
     {
      "opt": "B",
      "en": "$87$ — from guessing $h\\approx8.7$ instead of solving the equation.",
      "zh": "$87$ —— 沒有解方程，只是估了 $h$ 的值。"
     },
     {
      "opt": "A",
      "en": "$70$ — treating the in-centre's $x$-coordinate as the height or halving the wrong quantity.",
      "zh": "$70$ —— 把內心的 $x$ 坐標當成高，或把錯的量減半。"
     }
    ],
    "tip": {
     "en": "Right triangle with legs $a,b$: $r=\\frac{a+b-c}{2}$ and area $=rs$ where $s=\\frac{a+b+c}{2}$. With the right angle at the origin the in-centre is simply $(r,r)$.",
     "zh": "兩直角邊 $a,b$ 的直角三角形：$r=\\frac{a+b-c}{2}$，面積 $=rs$（$s=\\frac{a+b+c}{2}$）。直角在原點時內心就是 $(r,r)$。"
    }
   }
  },
  "2025-p2-q42": {
   "answer": "B",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Count everyone",
       "zh": "第 1 步 · 全部人數"
      },
      "math": "2+4+12=18,\\quad \\binom{18}{7}=31824",
      "en": "Choose $7$ out of $18$ with no restriction.",
      "zh": "不加限制地從 $18$ 人中選 $7$ 人。",
      "highlight": [
       "\\binom{18}{7}=31824"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Subtract the forbidden case",
       "zh": "第 2 步 · 減去不合條件者"
      },
      "math": "\\binom{16}{7}=11440",
      "en": "'At least $1$ manager' ⇒ exclude the groups with **no** manager (chosen from the other $16$).",
      "zh": "「至少 $1$ 位經理」⇒ 排除**沒有**經理的情況（只從其餘 $16$ 人中選）。",
      "highlight": [
       "\\binom{16}{7}=11440"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "31824-11440=20384",
      "en": "Option B.",
      "zh": "答案 B。",
      "highlight": [
       "20384"
      ]
     }
    ],
    "traps": [
     {
      "opt": "D",
      "en": "$31824$ — the unrestricted total; you forgot to remove the groups with no manager.",
      "zh": "$31824$ —— 那是未加限制的總數，忘了剔走沒有經理的情況。"
     },
     {
      "opt": "A",
      "en": "$16016$ — subtracting $\\binom{16}{8}$ or $\\binom{17}{7}$-style wrong counts.",
      "zh": "$16016$ —— 減錯了數（例如減了 $\\binom{16}{8}$）。"
     },
     {
      "opt": "C",
      "en": "$22880$ — adding instead of subtracting ($31824-2\\times11440$); remember 'at least one' means *exclude none*.",
      "zh": "$22880$ —— 用加而非減；「至少一個」的意思是「排除一個都沒有」。"
     }
    ],
    "tip": {
     "en": "'At least one of $X$' is nearly always total − (none of $X$): $\\binom{18}{7}-\\binom{16}{7}$. Complementary counting beats case-splitting.",
     "zh": "「$X$ 至少一個」幾乎都寫成「總數 − $X$ 一個都沒有」：$\\binom{18}{7}-\\binom{16}{7}$。用互補計數比分類討論快。"
    }
   }
  },
  "2025-p2-q43": {
   "answer": "C",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Total ways",
       "zh": "第 1 步 · 總取法"
      },
      "math": "\\binom{13}{6}=1716",
      "en": "$9$ apple $+4$ grape $=13$ cans, choose $6$.",
      "zh": "$9$ 罐蘋果 $+4$ 罐葡萄 $=13$ 罐，取 $6$ 罐。",
      "highlight": [
       "\\binom{13}{6}=1716"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Count the complementary event (easier)",
       "zh": "第 2 步 · 算對立事件（較快）"
      },
      "math": "P(4\\text{ grape})=\\frac{\\binom{4}{4}\\binom{9}{2}}{1716}=\\frac{36}{1716}",
      "en": "'At most $3$ grape' is the complement of 'exactly $4$ grape' (there are only $4$ grape cans).",
      "zh": "「最多 $3$ 罐葡萄」的對立事件是「剛好 $4$ 罐葡萄」（葡萄只有 $4$ 罐）。",
      "highlight": [
       "\\frac{36}{1716}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Subtract",
       "zh": "第 3 步 · 相減"
      },
      "math": "1-\\frac{36}{1716}=\\frac{1680}{1716}",
      "en": "Or add the four cases $k=0,1,2,3$: $84+504+756+336=1680$ — the same number.",
      "zh": "也可把 $k=0,1,2,3$ 四種情況相加：$84+504+756+336=1680$，結果相同。",
      "highlight": [
       "\\frac{1680}{1716}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\frac{1680}{1716}=\\frac{140}{143}",
      "en": "Divide top and bottom by $12$ — option C.",
      "zh": "分子分母同除 $12$ —— 答案 C。",
      "highlight": [
       "\\frac{140}{143}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$\\frac{133}{143}$ — an arithmetic slip inside the complement ($\\binom{9}{2}=36$, not $\\binom{9}{2}+$…); $143-133=10$, i.e. $120/1716$ instead of $36/1716$.",
      "zh": "$\\frac{133}{143}$ —— 對立事件的組合數算錯（$\\binom{9}{2}=36$，不是別的數）。"
     },
     {
      "opt": "D",
      "en": "$\\frac{714}{715}$ — that is $\\frac{1716-6}{1716}$-style (using $\\binom{4}{4}$ with a wrong second factor, or $1-\\frac{6}{1716}$).",
      "zh": "$\\frac{714}{715}$ —— 相當於只減了 $6/1716$（第二個組合數取錯）。"
     },
     {
      "opt": "A",
      "en": "$\\frac{9}{13}$ — the ratio of apples to total cans, not a probability of this experiment.",
      "zh": "$\\frac{9}{13}$ —— 那是蘋果佔比，不是本實驗的概率。"
     }
    ],
    "tip": {
     "en": "When the favourable event has many cases, use the complement. With $4$ grape cans, 'at most $3$' = $1-$'all $4$ grape' — one combination instead of four.",
     "zh": "有利情況很多時用對立事件。葡萄只有 $4$ 罐，「最多 $3$ 罐」= $1-$「$4$ 罐全葡萄」—— 只需算一個組合，而非四個。"
    }
   }
  },
  "2025-p2-q44": {
   "answer": "A",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · What a standard score means",
       "zh": "第 1 步 · 標準分的意義"
      },
      "math": "z=\\frac{x-\\bar{x}}{\\sigma},\\quad \\sigma=2",
      "en": "One standard-score unit is worth $2$ marks in this test.",
      "zh": "在本測驗中，標準分相差 $1$ 即相差 $2$ 分。",
      "highlight": [
       "\\sigma=2"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Turn marks into standard-score units",
       "zh": "第 2 步 · 把分差換成標準分差"
      },
      "math": "\\text{gap}=\\frac{6}{2}=3",
      "en": "The two raw scores differ by $6$ marks, i.e. $3$ standard-deviation units.",
      "zh": "兩人原始分相差 $6$ 分，即 $3$ 個標準差單位。",
      "highlight": [
       "\\text{gap}=3"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Solve",
       "zh": "第 3 步 · 求解"
      },
      "math": "|z-(-2)|=3 \\;\\Rightarrow\\; z=1 \\quad\\text{or}\\quad z=-5",
      "en": "The girl's standard score is $3$ units away from the boy's $-2$; we are not told who scored higher, so two answers.",
      "zh": "女生的標準分與男生的 $-2$ 相差 $3$ 個單位；因未說明誰較高分，故有兩個可能。",
      "highlight": [
       "z=1",
       "z=-5"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "z=-5 \\quad\\text{or}\\quad z=1",
      "en": "That is option A.",
      "zh": "即選項 A。",
      "highlight": [
       "\\text{A}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "B",
      "en": "$-5$ or $3$ — the two values are $8$ and $2$ units from $-2$; they should be equally far from the boy's score.",
      "zh": "$-5$ 或 $3$ —— 兩值與 $-2$ 分別相差 $8$ 與 $2$ 個單位，應該等距。"
     },
     {
      "opt": "C",
      "en": "$-3$ or $1$ — a gap of $2$ instead of $3$: dividing $6$ by $3$, or using $\\sigma=3$.",
      "zh": "$-3$ 或 $1$ —— 間距取成 $2$ 而不是 $3$（把 $6$ 除了 $3$，或誤用 $\\sigma=3$）。"
     },
     {
      "opt": "D",
      "en": "$-3$ or $3$ — treating the two standard scores as symmetric about $0$, ignoring the boy's own standard score.",
      "zh": "$-3$ 或 $3$ —— 以為兩人的標準分關於 $0$ 對稱，忽略了男生自己的標準分。"
     }
    ],
    "tip": {
     "en": "Standard score: raw-score difference $=\\sigma\\times$ (standard-score difference). Divide the marks by $\\sigma$ **first**, then set $|z-z_{\\text{boy}}|=$ that gap.",
     "zh": "標準分：原始分差 $=\\sigma\\times$（標準分差）。先把分數除以 $\\sigma$，再寫 $|z-z_{\\text{男生}}|=$ 該間距。"
    }
   }
  },
  "2025-p2-q45": {
   "answer": "D",
   "verify": "checked",
   "solution": {
    "steps": [
     {
      "title": {
       "en": "Step 1 · Effect of $\\times2$ and $+3$",
       "zh": "第 1 步 · 乘 $2$ 與加 $3$ 的影響"
      },
      "math": "m_{2}=2m_{1},\\;r_{2}=2r_{1},\\;v_{2}=4v_{1}",
      "en": "Doubling multiplies mean and range by $2$, and variance by $2^{2}$.",
      "zh": "乘 $2$ 令平均數與全距乘 $2$，方差乘 $2^{2}$。",
      "highlight": [
       "m_{2}=2m_{1}",
       "v_{2}=4v_{1}"
      ]
     },
     {
      "title": {
       "en": "Step 2 · Effect of $+3$",
       "zh": "第 2 步 · 加 $3$ 的影響"
      },
      "math": "m_{3}=m_{1}+3,\\;r_{3}=r_{1},\\;v_{3}=v_{1}",
      "en": "Shifting every value does not change range or variance.",
      "zh": "整體平移不改變全距與方差。",
      "highlight": [
       "r_{3}=r_{1}",
       "v_{3}=v_{1}"
      ]
     },
     {
      "title": {
       "en": "Step 3 · Statement I",
       "zh": "第 3 步 · 命題 I"
      },
      "math": "m_{1}+m_{3}=2m_{1}+3>2m_{1}=m_{2}",
      "en": "True, since $3>0$.",
      "zh": "因 $3>0$，恆成立。",
      "highlight": [
       "2m_{1}+3>2m_{1}"
      ]
     },
     {
      "title": {
       "en": "Step 4 · Statements II and III",
       "zh": "第 4 步 · 命題 II 與 III"
      },
      "math": "r_{1}+r_{3}=2r_{1}=r_{2};\\quad v_{1}+v_{3}=2v_{1}<4v_{1}=v_{2}",
      "en": "II is true for every data set; III needs $v_{1}>0$, which holds because $a,b,c,d$ are distinct.",
      "zh": "II 對任何數據都成立；III 需要 $v_{1}>0$，而 $a,b,c,d$ 互異故成立。",
      "highlight": [
       "r_{1}+r_{3}=r_{2}",
       "v_{1}+v_{3}<v_{2}"
      ]
     },
     {
      "title": {
       "en": "Answer",
       "zh": "答案"
      },
      "math": "\\text{I, II and III}",
      "en": "All three — option D.",
      "zh": "三項皆正確 —— 答案 D。",
      "highlight": [
       "\\text{D}"
      ]
     }
    ],
    "traps": [
     {
      "opt": "C",
      "en": "$\\text{II and III only}$ — you rejected I; but $m_{2}=2m_{1}$ while $m_{1}+m_{3}=2m_{1}+3$, so I always holds.",
      "zh": "$\\text{II 與 III}$ —— 誤否 I；實際上 $m_{2}=2m_{1}$ 而 $m_{1}+m_{3}=2m_{1}+3$，故 I 恆成立。"
     },
     {
      "opt": "B",
      "en": "$\\text{I and III only}$ — you thought adding $3$ changes the range; $r_{3}=r_{1}$ (shift-invariant).",
      "zh": "$\\text{I 與 III}$ —— 誤以為加 $3$ 會改變全距；其實 $r_{3}=r_{1}$（平移不變）。"
     },
     {
      "opt": "A",
      "en": "$\\text{I and II only}$ — you doubted III by assuming $v_{1}$ could be $0$; but 'distinct' guarantees $v_{1}>0$.",
      "zh": "$\\text{I 與 II}$ —— 懷疑 III 是因為以為 $v_{1}$ 可能為 $0$；但「互異」保證 $v_{1}>0$。"
     }
    ],
    "tip": {
     "en": "Transformation rules: $\\times k$ scales mean and range by $k$ and variance by $k^{2}$; $+c$ changes only the mean. So range never grows by shifting, and variance never grows by shifting.",
     "zh": "變換規則：$\\times k$ 令平均數、全距乘 $k$、方差乘 $k^{2}$；$+c$ 只改變平均數。故平移不會令全距或方差變大。"
    }
   }
  }
 }
};
