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
  }
 }
};
