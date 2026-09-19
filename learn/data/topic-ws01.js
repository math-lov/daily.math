// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS01 = {
 "id": "ws01",
 "stage": 1,
 "unit": 4,
 "subtopic": "factorization",
 "source": "EPH All-Round L5 · Worksheet 1",
 "name": {
  "zh": "多項式的因式分解",
  "en": "Factorization of Polynomials"
 },
 "intro": {
  "zh": "這一課分兩節：第一節先打好三個基礎（提公因式、併項分組、恆等式／平方差），第二節再學十字相乘、拆項法與「3+1 分組」的綜合題型。做 DSE 卷時，因式分解幾乎年年出現（Paper 1 每年一題、Paper 2 也常考），而且它也是解方程與約分的基礎。"
 },
 "cmdHints": [
  {
   "en": "Factorize completely",
   "zh": "徹底分解（要分解到不能再分解為止）"
  },
  {
   "en": "common factor",
   "zh": "公因式（各項共同擁有的因式：先抽走它，再看剩下的部分）"
  },
  {
   "en": "difference of two squares",
   "zh": "平方差：$a^{2}-b^{2}=(a+b)(a-b)$"
  },
  {
   "en": "perfect square",
   "zh": "完全平方：$a^{2}\\pm 2ab+b^{2}=(a\\pm b)^{2}$"
  },
  {
   "en": "Hence",
   "zh": "由此（必須用上一小題的答案）"
  }
 ],
 "lessons": [
  {
   "id": "ws01-1",
   "title": {
    "zh": "基礎三招：提公因式、分組、平方差",
    "en": "Basics · Common factor, grouping, squares"
   },
   "cards": [
    {
     "id": "ws01-c1",
     "topic": "ws01",
     "title": {
      "zh": "因式分解是什麼？",
      "en": "What is Factorization?"
     },
     "body": {
      "zh": "因式分解（factorization）就是把一個多項式寫成「幾個因式相乘」的形式。例如 $6r^{2}+4rs$ 可以寫成 $2r(3r+2s)$，這裡 $2r$ 和 $3r+2s$ 就是因式（factors）。\n為什麼要學？因為很多題目（解方程、約分、證明恆等式）都要先把式子分解，才看得清結構。\n做因式分解的第一步，永遠是：先看有沒有公因式可以抽出來。"
     },
     "math": [
      "6r^{2}+4rs=2r(3r+2s)"
     ],
     "vocab": [
      {
       "en": "factorization",
       "zh": "因式分解"
      },
      {
       "en": "factor",
       "zh": "因式"
      },
      {
       "en": "expand",
       "zh": "展開（與因式分解相反）"
      }
     ],
     "warn": {
      "zh": "因式分解與展開是相反動作。做完可以「心算展開」檢查：$(x+2)(x+3)=x^{2}+5x+6$，回到原式就對了。"
     }
    },
    {
     "id": "ws01-c2",
     "topic": "ws01",
     "title": {
      "zh": "方法一：提取公因式",
      "en": "Method 1 · Taking out the Common Factor"
     },
     "body": {
      "zh": "每一項都有的因式，叫做公因式（common factor）。把它抽到括號外面，括號內就是「每一項除以公因式」之後剩下的部分。\n留意用詞：含字母的多項式叫「公因式」（common factor）；「公因數」通常只指純數字的最大公因數（H.C.F.）。做代數時一律說「抽公因式」。\n抽公因式的做法，係數與字母分開處理：\n・係數：取所有係數的最大公因數（H.C.F.）；\n・字母：取每個共同字母的「最低次方」。\n例：$6r^{2}+4rs$ —— 係數 $6$ 與 $4$ 的最大公因數是 $2$；字母同時有 $r$，最低次方是 $r^{1}$，所以公因式是 $2r$。抽出來就是：\n{{math:0}}\n如果共同部分是一個括號而不是單項，做法完全一樣 —— 把整個括號當成一個「字母」看待：\n{{math:1}}\n這裡 $(b+1)$ 就是公因式，抽走後第一項剩下 $a$、第二項剩下 $-2$。\n抽完後要檢查括號內仍可不可以再分解，可以就繼續分解到不能再分為止。"
     },
     "math": [
      "6r^{2}+4rs=2r(3r)+2r(2s)=2r(3r+2s)",
      "a(b+1)-2(b+1)=(b+1)(a-2)"
     ],
     "vocab": [
      {
       "en": "common factor",
       "zh": "公因式"
      },
      {
       "en": "take out / extract",
       "zh": "抽出"
      }
     ],
     "warn": {
      "zh": "整個括號也可以是公因式。例如 $a(b+1)-2(b+1)$ 中，$(b+1)$ 就是公因式，抽出來得 $(b+1)(a-2)$。很多同學只抽數字，就會卡住。"
     }
    },
    {
     "id": "ws01-c3",
     "topic": "ws01",
     "title": {
      "zh": "方法二：併項分組",
      "en": "Method 2 · By Grouping Terms"
     },
     "body": {
      "zh": "四項或以上的式子，先把它們分成兩組，每組各自抽公因式，令兩組出現「同一個括號」，再抽這個括號。\n例：$hk+1+h+k$。先調位（move the terms）：$hk+h+1+k$，然後分組：$h(k+1)+(k+1)$，此時 $(k+1)$ 是公因式，答案是 $(k+1)(h+1)$。\n分組的秘訣是：先觀察哪兩項有明顯共同的東西，把它們放在同一組；兩組之間通常相差一個負號，要小心變號。"
     },
     "math": [
      "hk+1+h+k=h(k+1)+(k+1)=(k+1)(h+1)"
     ],
     "vocab": [
      {
       "en": "grouping terms",
       "zh": "併項分組"
      },
      {
       "en": "rearrange",
       "zh": "調位、重新排列"
      }
     ],
     "warn": {
      "zh": "分組後如果拿不出共同的括號，多數是分組方式選錯了 —— 換一個分法再試，或者先在前面加負號提出來。"
     }
    },
    {
     "id": "ws01-c4",
     "topic": "ws01",
     "title": {
      "zh": "方法三：恆等式",
      "en": "Method 3 · Using Identities"
     },
     "body": {
      "zh": "三個必背的恆等式（identities，符號用 $\\equiv$ 表示「任何數都成立」）：\n① 平方差（difference of two squares）：\n{{math:0}}\n② 和的平方（perfect square）：\n{{math:1}}\n③ 差的平方：\n{{math:2}}\n怎麼記？②與③只差中間那個 $2ab$ 的符號，它跟著括號內的符號走 ——$(a+b)^{2}$ 中間是 $+2ab$、$(a-b)^{2}$ 中間是 $-2ab$。\n怎麼用？\n・看到「兩個平方相減」，就想平方差（找出「誰的平方」）：\n{{math:3}}\n・看到「首尾都是平方、中間是兩倍乘積」，就想完全平方：\n{{math:4}}\n驗算方法：把答案展開，應該回到原式。例如 $(2x+5)(2x-5)=4x^{2}-25$ ✓。"
     },
     "math": [
      "a^{2}-b^{2}\\equiv(a+b)(a-b)",
      "a^{2}+2ab+b^{2}\\equiv(a+b)^{2}",
      "a^{2}-2ab+b^{2}\\equiv(a-b)^{2}",
      "4x^{2}-25=(2x)^{2}-5^{2}=(2x+5)(2x-5)",
      "9m^{2}-12mn+4n^{2}=(3m)^{2}-2(3m)(2n)+(2n)^{2}=(3m-2n)^{2}"
     ],
     "vocab": [
      {
       "en": "identity",
       "zh": "恆等式"
      },
      {
       "en": "difference of two squares",
       "zh": "平方差"
      },
      {
       "en": "perfect square",
       "zh": "完全平方"
      }
     ],
     "warn": {
      "zh": "平方差是「減」，完全平方中間可以是「加」或「減」。$a^{2}+b^{2}$ 在實數範圍內不能分解 —— 它跟 $(a+b)^{2}$ 相差了中間那一項：$(a+b)^{2}=a^{2}+2ab+b^{2}$，所以 $a^{2}+b^{2}\\neq(a+b)^{2}$，千萬不要當成完全平方。"
     }
    }
   ],
   "long": [],
   "pages": [
    [
     {
      "id": "eph-ws01-w01",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1-W01",
      "source": "WS01 暖身題（自編）· 提取公因式",
      "stem": {
       "text": "$3x^{2}-6x=$"
      },
      "options": {
       "A": "$3x(x-2)$",
       "B": "$3(x^{2}-2x)$",
       "C": "$x(3x-6)$",
       "D": "$3x(x-6)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先找係數的公因數",
          "en": "Step 1 · H.C.F. of the coefficients"
         },
         "math": "\\text{H.C.F.}(3,6)=3",
         "zh": "係數 $3$ 與 $6$ 的最大公因數（H.C.F.）是 $3$。抽公因式的第一步，永遠是先看係數。",
         "en": "The H.C.F. of 3 and 6 is 3 — always start with the coefficients.",
         "highlight": [
          "3"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 再找共同字母的最低次方",
          "en": "Step 2 · Lowest power of the common letter"
         },
         "math": "3x^{2}-6x=3x\\cdot x-3x\\cdot 2",
         "zh": "兩項都有 $x$：第一項是 $x^{2}$、第二項是 $x^{1}$，取最低次方 $x^{1}$。所以公因式是 $3x$；把每一項都寫成「$3x$ 乘某個東西」就不會出錯。",
         "en": "Both terms contain $x$; take the lowest power. The common factor is $3x$.",
         "highlight": [
          "3x"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽出來寫成答案",
          "en": "Step 3 · Write the answer"
         },
         "math": "3x^{2}-6x=3x(x-2)",
         "zh": "$3x\\cdot x-3x\\cdot 2=3x(x-2)$。驗算：把 $3x$ 乘回括號 $3x(x-2)=3x^{2}-6x$，與原式相同 ✓。",
         "en": "$3x(x-2)$. Check by expanding: $3x(x-2)=3x^{2}-6x$ ✓.",
         "highlight": [
          "3x(x-2)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$3(x^{2}-2x)$：你已經抽了 $3$，但括號內 $x^{2}-2x$ 仍然可以再抽 $x$。因式分解要抽到括號內「再抽不動」為止。",
         "en": "Not fully factorized — $x^{2}-2x$ still has a common factor $x$."
        },
        {
         "opt": "C",
         "zh": "$x(3x-6)$：括號內 $3x-6$ 仍然可以再抽 $3$，屬於未完全分解，DSE 會失分。",
         "en": "Not fully factorized — $3x-6$ still has the factor 3."
        },
        {
         "opt": "D",
         "zh": "$3x(x-6)$：$-6x\\div 3x=-2$，不是 $-6$。抽完可以把答案展開驗算一次，立即知道對錯。",
         "en": "The constant inside the bracket is wrong: $-6x \\div 3x = -2$."
        }
       ],
       "tip": {
        "zh": "抽公因式的口訣：係數取 H.C.F.、字母取最低次方。抽完一定要回頭看括號內還能不能再抽 ——「完全分解」才是答案。",
        "en": "Coefficients take the H.C.F., letters take the lowest power, then check the bracket cannot be factored again."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-w02",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1-W02",
      "source": "WS01 暖身題（自編）· 平方差",
      "stem": {
       "text": "$x^{2}-16=$"
      },
      "options": {
       "A": "$(x-4)(x+4)$",
       "B": "$(x-4)^{2}$",
       "C": "$(x+4)^{2}$",
       "D": "$(x-8)(x+2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認出兩個平方",
          "en": "Step 1 · Spot the two squares"
         },
         "math": "x^{2}-16=x^{2}-4^{2}",
         "zh": "看到「相減」而且兩項都是完全平方，就要想平方差。這裡 $x^{2}=(x)^{2}$、$16=4^{2}$，所以先寫成 $x^{2}-4^{2}$，看清楚「誰的平方」。",
         "en": "A subtraction of two squares: $x^{2}=(x)^{2}$ and $16=4^{2}$.",
         "highlight": [
          "x^{2}-4^{2}"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 套用平方差公式",
          "en": "Step 2 · Apply $A^{2}-B^{2}=(A+B)(A-B)$"
         },
         "math": "A=x,\\ B=4\\ \\Rightarrow\\ (x+4)(x-4)",
         "zh": "對應 $A=x$、$B=4$，代入 $A^{2}-B^{2}\\equiv(A+B)(A-B)$，得 $(x+4)(x-4)$。",
         "en": "With $A=x$ and $B=4$, $A^{2}-B^{2}=(A+B)(A-B)=(x+4)(x-4)$.",
         "highlight": [
          "(x+4)(x-4)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 寫成答案並驗算",
          "en": "Step 3 · Write and check"
         },
         "math": "x^{2}-16=(x-4)(x+4)",
         "zh": "兩個括號的次序可以對調，寫成 $(x-4)(x+4)$ 也可以。驗算：$(x-4)(x+4)=x^{2}-16$ ✓。",
         "en": "The order of the two brackets does not matter. Check: $(x-4)(x+4)=x^{2}-16$ ✓.",
         "highlight": [
          "(x-4)(x+4)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(x-4)^{2}$ 漏了中間項：$(x-4)^{2}=x^{2}-8x+16$，多出 $-8x$、常數也變成 $+16$，不等於 $x^{2}-16$。",
         "en": "$(x-4)^{2}=x^{2}-8x+16 \\neq x^{2}-16$ — the middle term is missing."
        },
        {
         "opt": "C",
         "zh": "$(x+4)^{2}=x^{2}+8x+16$，同樣多出中間項 $+8x$。平方差沒有中間項，完全平方才有。",
         "en": "$(x+4)^{2}$ has a middle term $+8x$; a difference of squares has none."
        },
        {
         "opt": "D",
         "zh": "$(x-8)(x+2)=x^{2}-6x-16$，中間多出 $-6x$。平方差一定要「一加一減、數字相同」。",
         "en": "$(x-8)(x+2)=x^{2}-6x-16$ — the two numbers must be the same."
        }
       ],
       "tip": {
        "zh": "看到「兩個平方相減」就問自己兩件事：誰的平方？數字是多少？答案就是「一加一減」的那兩個括號。",
        "en": "For a difference of two squares, ask: square of what, by what number? The answer is $(A+B)(A-B)$."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q01",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q01",
      "source": "WS01 Paper 2 Q1 · [HKCEE 2006 Paper 2 Q4]",
      "stem": {
       "text": "$pr+ps-qs-qr=$"
      },
      "options": {
       "A": "$(r+s)(p-q)$",
       "B": "$(r+s)(q-p)$",
       "C": "$(r-s)(p-q)$",
       "D": "$(r-s)(q-p)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 分成兩組",
          "en": "Step 1 · Group the four terms"
         },
         "math": "pr+ps-qs-qr=p(r+s)-q(s+r)",
         "zh": "四項用 grouping（併項分組）。前兩項 $pr+ps$ 有公因式 $p$，抽出來得 $p(r+s)$；後兩項 $-qs-qr$ 有公因式 $-q$，抽出來得 $-q(s+r)$。注意 $-qs-qr$ 抽 $-q$ 之後括號內是 $s+r$，不是 $-s-r$。",
         "en": "Take $p$ out of the first pair and $-q$ out of the second: $p(r+s)-q(s+r)$.",
         "highlight": [
          "p(r+s)-q(s+r)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 抽共同括號",
          "en": "Step 2 · Take out the common bracket"
         },
         "math": "=(r+s)(p-q)",
         "zh": "$r+s$ 與 $s+r$ 是同一個數（加法交換律），所以 $(r+s)$ 是兩項的公因式，抽出來剩下 $(p-q)$。答案是 A。",
         "en": "Since $r+s=s+r$, the common bracket $(r+s)$ comes out, leaving $(p-q)$. Answer: A.",
         "highlight": [
          "(r+s)(p-q)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(r+s)(q-p)$ 是把第二組的公因式抽成 $+q$ 而沒有變號。抽 $-q$ 出來時括號內必須是 $(s+r)$；若寫成 $+q(s+r)$，展開會變成 $+qs+qr$，與原式不符。",
         "en": "Sign error: taking out $-q$ keeps $(s+r)$ inside; $+q(s+r)$ would give $+qs+qr$."
        },
        {
         "opt": "C",
         "zh": "$(r-s)(p-q)$ 的 $r-s$ 錯了。原式各項是 $pr,ps,-qs,-qr$，兩組共同的是 $r+s$，不是 $r-s$；用展開檢查 $(r-s)(p-q)=pr-ps-qs+qr$，第二項符號不符。",
         "en": "Wrong bracket: expanding $(r-s)(p-q)$ gives $pr-ps-qs+qr$, not the given expression."
        }
       ],
       "tip": {
        "zh": "分組後要「兩組括號內一樣」才對。如果抽出公因式後兩個括號差一個負號（例如 $s+r$ 與 $-(s+r)$ 的關係），記得把負號留在外面或提出來，這樣才能繼續抽公因式。",
        "en": "After grouping, both brackets must match (or differ only by a sign kept outside)."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q02",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q02",
      "source": "WS01 Paper 2 Q2 · [HKCEE 2010 Paper 2 Q4]",
      "stem": {
       "text": "$6xy-2yz+4xz-3y^{2}=$"
      },
      "options": {
       "A": "$(2x-y)(3y-2z)$",
       "B": "$(2x-y)(3y+2z)$",
       "C": "$(2x+y)(3y-2z)$",
       "D": "$(2x+y)(3y+2z)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 重新排列，方便分組",
          "en": "Step 1 · Rearrange then group"
         },
         "math": "6xy-2yz+4xz-3y^{2}=6xy-3y^{2}+4xz-2yz",
         "zh": "題目把四項混在一起，先把含 $y$ 的兩項放一起：$6xy-3y^{2}$，再把另外兩項 $4xz-2yz$ 放一起（也可以先調位，是合法的）。",
         "en": "Rearrange so that terms with a common factor sit together.",
         "highlight": [
          "6xy-3y^{2}+4xz-2yz"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各抽公因式",
          "en": "Step 2 · Factor each group"
         },
         "math": "=3y(2x-y)+2z(2x-y)",
         "zh": "第一組 $6xy-3y^{2}$ 抽 $3y$：$3y(2x-y)$；第二組 $4xz-2yz$ 抽 $2z$：$2z(2x-y)$。兩組括號內都變成 $(2x-y)$，代表分組正確。",
         "en": "First group: $3y(2x-y)$; second group: $2z(2x-y)$. Both brackets match.",
         "highlight": [
          "3y(2x-y)+2z(2x-y)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽出共同括號",
          "en": "Step 3 · Take out the bracket"
         },
         "math": "=(2x-y)(3y+2z)",
         "zh": "$(2x-y)$ 是兩項的公因式，抽出來得 $(2x-y)(3y+2z)$，答案是 B。",
         "en": "Factor out $(2x-y)$: the answer is $(2x-y)(3y+2z)$. Answer: B.",
         "highlight": [
          "(2x-y)(3y+2z)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(2x-y)(3y-2z)$ 把第二組寫成 $-2z$。$4xz-2yz$ 抽 $2z$ 後括號內是 $2x-y$（正的 $2z$），展開 $2z(2x-y)=4xz-2yz$ 才對。",
         "en": "Sign slip in the second group: $4xz-2yz=2z(2x-y)$, so the factor is $+2z$."
        },
        {
         "opt": "C",
         "zh": "$(2x+y)(3y-2z)$ 兩個括號都不對。用展開檢查：$(2x+y)(3y-2z)=6xy-4xz+3y^{2}-2yz$，與原式相差兩個符號。",
         "en": "Expanding $(2x+y)(3y-2z)$ does not return the original expression."
        }
       ],
       "tip": {
        "zh": "四項分組的黃金組合是「2+2」：每組各抽公因式後，括號內必須一樣。若第一組抽完是 $(2x-y)$、第二組抽完是 $(y-2x)$，就把第二組的負號提出來，養成習慣。",
        "en": "Group in pairs; both brackets must match (adjust signs if needed)."
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q03",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1-Q03",
      "source": "WS01 Paper 2 Q3 · [HKDSE 2013 Paper 2 Q3]",
      "stem": {
       "text": "$-bx+ax+ay-by-az+bz=$"
      },
      "options": {
       "A": "$(a+b)(x-y+z)$",
       "B": "$(a+b)(x+y-z)$",
       "C": "$(a-b)(x-y+z)$",
       "D": "$(a-b)(x+y-z)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 依字母整理成三組",
          "en": "Step 1 · Group by letters"
         },
         "math": "-bx+ax+ay-by-az+bz",
         "zh": "六項太亂，先按字母重新排列：含 $a$ 的放前面、含 $b$ 的放一起。原式＝$ax+ay-az-bx-by+bz$。",
         "en": "Rearrange: collect the $a$-terms and the $b$-terms.",
         "highlight": [
          "ax+ay-az-bx-by+bz"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式 $a$ 與 $b$",
          "en": "Step 2 · Factor $a$ and $b$"
         },
         "math": "=a(x+y-z)-b(x+y-z)",
         "zh": "前三項抽 $a$：$a(x+y-z)$；後三項抽 $-b$：$-b(x+y-z)$。注意後三項是 $-bx-by+bz$，抽 $-b$ 之後括號內是 $x+y-z$（每一項都變號：$-b\\cdot x=-bx$、$-b\\cdot y=-by$、$-b\\cdot(-z)=+bz$）。",
         "en": "Take out $a$ from the first three terms and $-b$ from the last three — both brackets become $x+y-z$.",
         "highlight": [
          "a(x+y-z)-b(x+y-z)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽出共同括號",
          "en": "Step 3 · Factor the common bracket"
         },
         "math": "=(x+y-z)(a-b)",
         "zh": "$(x+y-z)$ 是公因式，抽出來得 $(x+y-z)(a-b)$，答案是 D。",
         "en": "$(x+y-z)(a-b)$. Answer: D.",
         "highlight": [
          "(x+y-z)(a-b)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(a+b)(x+y-z)$ 把第二組的公因式寫成 $+b$。後三項 $-bx-by+bz$ 抽 $-b$ 才會得到 $(x+y-z)$；若抽 $+b$ 會得到 $b(-x-y+z)$，括號與第一組不同，無法再抽。",
         "en": "The second group must be $-b(x+y-z)$, not $+b(x+y-z)$."
        },
        {
         "opt": "C",
         "zh": "$(a-b)(x-y+z)$ 的括號符號錯了。展開 $(a-b)(x-y+z)=ax-ay+az-bx+by-bz$，與原式的 $-ay$、$+by$、$+bz$ 都對不上。",
         "en": "Expanding $(a-b)(x-y+z)$ gives wrong signs for the $y$ and $z$ terms."
        }
       ],
       "tip": {
        "zh": "六項以上的題目看不出分組時，先把同字母的項寫在一起（例如所有含 $a$ 的、所有含 $b$ 的），通常就看見共同的括號了。抽負公因式時，記住「括號內每一項都要變號」。",
        "en": "Rearrange by letter first; when you take out a negative factor, every term inside changes sign."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q04",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q04",
      "source": "WS01 Paper 2 Q4 · [HKDSE 2020 Paper 2 Q4]",
      "stem": {
       "text": "$(7u-4v)(5u-6v)-3u(10u-12v)=$"
      },
      "options": {
       "A": "$(5u+6v)(u+4v)$",
       "B": "$(5u+6v)(13u+4v)$",
       "C": "$(5u-6v)(u-4v)$",
       "D": "$(5u-6v)(13u-4v)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先處理第二個括號",
          "en": "Step 1 · Simplify the second product"
         },
         "math": "3u(10u-12v)=6u(5u-6v)",
         "zh": "第二項 $3u(10u-12v)$ 的括號內有公因式 2，先抽出來：$3u\\cdot 2(5u-6v)=6u(5u-6v)$。這樣做是為了讓兩個括號都出現 $(5u-6v)$。",
         "en": "Write $3u(10u-12v)$ as $6u(5u-6v)$ so that both terms share the bracket $(5u-6v)$.",
         "highlight": [
          "6u(5u-6v)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式 $(5u-6v)$",
          "en": "Step 2 · Take out the common bracket"
         },
         "math": "=(5u-6v)(7u-4v)-6u(5u-6v)",
         "zh": "原式變成 $(5u-6v)(7u-4v)-6u(5u-6v)$，兩個括號都有 $(5u-6v)$，抽出來。",
         "en": "Both terms now contain $(5u-6v)$ — factor it out.",
         "highlight": [
          "(5u-6v)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 化簡第二個括號",
          "en": "Step 3 · Simplify"
         },
         "math": "=(5u-6v)\\big[(7u-4v)-6u\\big]=(5u-6v)(u-4v)",
         "zh": "$(7u-4v)-6u=u-4v$，所以答案是 $(5u-6v)(u-4v)$，答案是 C。",
         "en": "$(7u-4v)-6u=u-4v$, giving $(5u-6v)(u-4v)$. Answer: C.",
         "highlight": [
          "(5u-6v)(u-4v)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$(5u-6v)(13u-4v)$ 是忘記減去 $6u$：把 $(7u-4v)$ 與 $6u$ 加了而不是減（$7u+6u=13u$）。抽公因式後那個 $6u$ 前面是負號，要相減。",
         "en": "Adding instead of subtracting $6u$ gives the wrong $13u$."
        },
        {
         "opt": "A",
         "zh": "$(5u+6v)(u+4v)$ 兩個括號的符號都錯了。$(5u-6v)$ 是整個式子的公因式，不會變成 $(5u+6v)$。",
         "en": "The common bracket is $(5u-6v)$; it cannot change to $(5u+6v)$."
        }
       ],
       "tip": {
        "zh": "看到「兩個括號差一個倍數」（例如 $10u-12v = 2(5u-6v)$），先調整成一樣，公因式就會自己浮出來。這是 MC 常見的包裝手法。",
        "en": "If two brackets differ by a constant multiple, adjust them to match — then the common factor appears."
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q05",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q05",
      "source": "WS01 Paper 2 Q5 · [HKDSE 2016 Paper 2 Q3]",
      "stem": {
       "text": "$49-(4r-3s)^{2}=$"
      },
      "options": {
       "A": "$(7-4r-3s)(7+4r-3s)$",
       "B": "$(7-4r-3s)(7+4r+3s)$",
       "C": "$(7-4r+3s)(7+4r-3s)$",
       "D": "$(7-4r+3s)(7+4r+3s)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認出平方差",
          "en": "Step 1 · Recognise $A^{2}-B^{2}$"
         },
         "math": "49-(4r-3s)^{2}=7^{2}-(4r-3s)^{2}",
         "zh": "$49=7^{2}$，所以整題是「兩個平方相減」$A^{2}-B^{2}$，其中 $A=7$、$B=4r-3s$。看到這個結構就直接用 $A^{2}-B^{2}\\equiv(A+B)(A-B)$，不必展開 $B^{2}$。",
         "en": "It is $7^{2}-(4r-3s)^{2}$: use $A^{2}-B^{2}=(A+B)(A-B)$ with $A=7$, $B=4r-3s$.",
         "highlight": [
          "49=7^{2}"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 代入公式",
          "en": "Step 2 · Apply the identity"
         },
         "math": "=\\big(7+(4r-3s)\\big)\\big(7-(4r-3s)\\big)",
         "zh": "$A+B$ 用「加」、$A-B$ 用「減」。第二個括號是 $7-(4r-3s)$，減號要分配到括號內每一項。",
         "en": "First bracket plus, second bracket minus.",
         "highlight": [
          "7-(4r-3s)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 去括號化簡",
          "en": "Step 3 · Remove the brackets"
         },
         "math": "=(7+4r-3s)(7-4r+3s)",
         "zh": "$7+(4r-3s)=7+4r-3s$；$7-(4r-3s)=7-4r+3s$。注意 $-(−3s)=+3s$。答案是 $(7-4r+3s)(7+4r-3s)$，即 C（乘法次序對調不影響結果）。",
         "en": "$7+4r-3s$ and $7-4r+3s$, i.e. $(7-4r+3s)(7+4r-3s)$. Answer: C.",
         "highlight": [
          "(7-4r+3s)(7+4r-3s)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(7-4r-3s)(7+4r+3s)$ 的第一個括號沒有正確變號：$-3s$ 應變成 $+3s$。展開驗算會得到 $49+24rs-9s^{2}-16r^{2}$，不符原式。",
         "en": "Sign error: $-(4r-3s)= -4r+3s$, not $-4r-3s$."
        },
        {
         "opt": "D",
         "zh": "$(7-4r+3s)(7+4r+3s)$ 的第二個括號錯了（$+3s$ 應為 $-3s$）。兩個括號「一加一減」配對要與 $B=4r-3s$ 一致。",
         "en": "The second bracket should carry $-3s$."
        }
       ],
       "tip": {
        "zh": "平方差題目「一加一減」：$(A+B)(A-B)$。去括號時先把 $B$ 用括號保護著，寫成 $7-(4r-3s)$，再逐項變號，就不會漏符號。",
        "en": "Protect $B$ with brackets first, then remove them term by term."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q06",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1-Q06",
      "source": "WS01 Paper 2 Q6 · [HKDSE 2012 Paper 2 Q2]",
      "stem": {
       "text": "$(3p+q)^{2}-(3p-q)^{2}=$"
      },
      "options": {
       "A": "$0$",
       "B": "$2q^{2}$",
       "C": "$6pq$",
       "D": "$12pq$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 看成平方差",
          "en": "Step 1 · Treat it as $A^{2}-B^{2}$"
         },
         "math": "(3p+q)^{2}-(3p-q)^{2},\\ A=3p+q,\\ B=3p-q",
         "zh": "兩個完全平方相減，最佳做法是 $A^{2}-B^{2}\\equiv(A+B)(A-B)$，不需要先把兩個括號展開。",
         "en": "Use the identity instead of expanding both squares.",
         "highlight": [
          "A=3p+q,\\ B=3p-q"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 算 $A+B$ 與 $A-B$",
          "en": "Step 2 · Compute $A+B$ and $A-B$"
         },
         "math": "A+B=6p,\\quad A-B=2q",
         "zh": "$A+B=(3p+q)+(3p-q)=6p$（$-q$ 與 $+q$ 相消）；$A-B=(3p+q)-(3p-q)=3p+q-3p+q=2q$（小心 $-(−q)=+q$）。",
         "en": "$A+B=6p$ and $A-B=2q$.",
         "highlight": [
          "A+B=6p, A-B=2q"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "=(6p)(2q)=12pq",
         "zh": "$6p\\times 2q=12pq$，答案是 D。（也可以直接展開：$(9p^{2}+6pq+q^{2})-(9p^{2}-6pq+q^{2})=12pq$。）",
         "en": "$6p\\cdot 2q=12pq$. Answer: D.",
         "highlight": [
          "12pq"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$6pq$ 是漏了負號的交叉項：展開時 $(3p+q)^{2}$ 給 $+6pq$、$(3p-q)^{2}$ 給 $-6pq$，相減後是 $6pq-(-6pq)=12pq$，不是 $6pq$。",
         "en": "The cross terms are $+6pq-(-6pq)=12pq$, not $6pq$."
        },
        {
         "opt": "A",
         "zh": "$0$ 是以為兩個平方一樣。它們一個是「和的平方」、一個是「差的平方」，展開後中間項符號相反，相減不會是 0。",
         "en": "$(3p+q)^{2}$ and $(3p-q)^{2}$ are different; their difference is not 0."
        }
       ],
       "tip": {
        "zh": "公式 $A^{2}-B^{2}=(A+B)(A-B)$ 在 MC 特別好用：兩個括號一加一減，未知數多數會相消，兩三步就出答案，比展開快很多。",
        "en": "Whenever you see a difference of two squares, factor first — it is much faster than expanding."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q07",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q07",
      "source": "WS01 Paper 2 Q7 · [HKDSE 2012 Paper 2 Q2]",
      "stem": {
       "text": "$(2a-5b)^{2}-(2a+5b)^{2}=$"
      },
      "options": {
       "A": "$-10b^{2}$",
       "B": "$-20ab$",
       "C": "$-40ab$",
       "D": "$-50b^{2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 平方差公式",
          "en": "Step 1 · Difference of two squares"
         },
         "math": "A=2a-5b,\\ B=2a+5b",
         "zh": "與上一題同型，$A^{2}-B^{2}$ 形式。直接算 $A+B$ 與 $A-B$。",
         "en": "Same pattern as the previous question.",
         "highlight": [
          "A^{2}-B^{2}"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · $A+B$ 與 $A-B$",
          "en": "Step 2 · Compute the two brackets"
         },
         "math": "A+B=4a,\\quad A-B=-10b",
         "zh": "$A+B=(2a-5b)+(2a+5b)=4a$；$A-B=(2a-5b)-(2a+5b)=2a-5b-2a-5b=-10b$。第二個括號要小心：減號使 $+5b$ 變成 $-5b$，所以是 $-10b$。",
         "en": "$A+B=4a$, $A-B=-10b$ (the minus sign flips $+5b$).",
         "highlight": [
          "A-B=-10b"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "=(4a)(-10b)=-40ab",
         "zh": "$4a\\times(-10b)=-40ab$，答案是 C。",
         "en": "$4a\\cdot(-10b)=-40ab$. Answer: C.",
         "highlight": [
          "-40ab"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-20ab$ 是把交叉項算錯：正確的 $A-B=-10b$（中間項相減後是 $2\\times 5b$），與 $4a$ 相乘得 $-40ab$。",
         "en": "$A-B$ is $-10b$, not $-5b$."
        },
        {
         "opt": "A",
         "zh": "$-10b^{2}$ 少了 $a$：$A+B=4a$ 是含 $a$ 的，相乘後一定會出現 $a$，不可能只剩下 $b^{2}$。",
         "en": "The product must contain $a$ because $A+B=4a$."
        }
       ],
       "tip": {
        "zh": "選項出現 $ab$、$b^{2}$、常數時，可以先看「應該有幾個 $a$、幾個 $b$」快速排除選項，再用公式精算。",
        "en": "Use the expected powers of $a$ and $b$ to eliminate options quickly."
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ]
   ]
  },
  {
   "id": "ws01-2",
   "title": {
    "zh": "進階：十字相乘、拆項法與綜合題型",
    "en": "Cross method, splitting, mixed types"
   },
   "cards": [
    {
     "id": "ws01-c5",
     "topic": "ws01",
     "title": {
      "zh": "方法四：十字相乘法",
      "en": "Method 4 · Cross Method"
     },
     "body": {
      "zh": "十字相乘法用來分解 $ax^{2}+bx+c$（二次三項式）：把首項與末項各拆成兩個因數，排成兩欄，交叉相乘後相加，要等於中間項。\n例如要因式分解 $6x^{2}-13x-5$，我們通常會在黑板上排成兩欄（左欄放首項的因數、右欄放常數項的因數，中間畫交叉線），並在右側寫出檢驗：\n{{math:0}}\n檢驗中間項（交叉相乘後相加）：\n{{math:1}}\n與題目的中間項 $-13x$ 相同 ✓\n配對時要「橫向」取同一行的兩個數：第一行取 $2x$ 與 $-5$ 得 $(2x-5)$，第二行取 $3x$ 與 $+1$ 得 $(3x+1)$，所以：\n{{math:2}}\n草稿上的次序：先把左右兩欄的因數寫好 → 畫出交叉箭頭並算和 → 確認符號與數值無誤 → 最後才橫向配對寫出答案。\n用計算機驗算（Casio fx-50FH II）：十字相乘要試很多組合，慢又容易灰心。其實可以反過來做 —— 把 $ax^{2}+bx+c$ 當成方程 $ax^{2}+bx+c=0$，用計算機內置的二次方程程式求出兩個根，再由根反推因式：\n{{math:3}}\n反推的規則：根 $x=\\frac{p}{q}$ 對應因式 $(qx-p)$，例如根 $x=\\frac{y}{3}$ 就對應 $(3x-y)$。\n{{math:4}}\n先知道答案，再回去把十字相乘的過程寫齊 —— 這是保底拿分的安全網（過程分仍然要寫，計算機只是幫你確認因式）。"
     },
     "math": [
      "\\begin{array}{ccc} 2x & \\searrow\\swarrow & -5 \\\\ 3x & \\nearrow\\nwarrow & +1 \\end{array}",
      "(2x)(+1)+(3x)(-5)=-13x",
      "6x^{2}-13x-5=(2x-5)(3x+1)",
      "15x^{2}+xy-2y^{2}=0\\ \\Rightarrow\\ x=\\frac{y}{3}\\ \\text{或}\\ x=-\\frac{2y}{5}",
      "\\text{根 }x=\\frac{p}{q}\\ \\Rightarrow\\ \\text{因式 }(qx-p);\\qquad (3x-y)(5x+2y)"
     ],
     "vocab": [
      {
       "en": "cross method",
       "zh": "十字相乘法"
      },
      {
       "en": "middle term",
       "zh": "中間項"
      },
      {
       "en": "coefficient",
       "zh": "係數"
      },
      {
       "en": "constant term",
       "zh": "常數項"
      },
      {
       "en": "root",
       "zh": "根（方程的解）"
      }
     ],
     "warn": {
      "zh": "符號規則：末項是負數 → 兩個因數一正一負；末項是正、中間項是負 → 兩個因數都負。如果交叉相乘的「和」數值對了但符號相反，把右欄兩個數同時變號再試一次即可。最後一定要檢查中間項 —— 錯符號是最常見的失分位。"
     }
    },
    {
     "id": "ws01-c7",
     "topic": "ws01",
     "title": {
      "zh": "方法五：拆項法（不用試組合）",
      "en": "Method 5 · Splitting the Middle Term"
     },
     "body": {
      "zh": "很多同學覺得十字相乘法「要試很多組合」。澳洲課本教另一個方法 —— 拆項法（split the middle term）：步驟固定，不用試，把中間項拆成兩項，再分組抽公因式。\n以 $6x^{2}-13x-5$ 為例：\n第 1 步 · 首項係數 × 常數項：\n{{math:0}}\n第 2 步 · 找兩個數，相乘等於 $-30$、相加等於中間項係數 $-13$：\n{{math:1}}\n（$(-15)\\times 2=-30$ 而且 $(-15)+2=-13$ ✓，所以用 $-15$ 與 $2$。）\n第 3 步 · 把中間項 $-13x$ 拆成 $-15x+2x$，然後分組抽公因式：\n{{math:2}}\n「兩個數的次序不重要」：把次序對調也一樣做到結果：\n{{math:3}}\n兩種方法都可以用：十字相乘熟練後較快；拆項法步驟固定，首項係數較大時特別順手。"
     },
     "math": [
      "6\\times(-5)=-30",
      "(-15)\\times 2=-30,\\quad (-15)+2=-13",
      "6x^{2}-15x+2x-5=3x(2x-5)+1(2x-5)=(2x-5)(3x+1)",
      "6x^{2}+2x-15x-5=2x(3x+1)-5(3x+1)=(3x+1)(2x-5)"
     ],
     "vocab": [
      {
       "en": "split the middle term",
       "zh": "拆項法"
      },
      {
       "en": "product",
       "zh": "積（相乘的結果）"
      },
      {
       "en": "sum",
       "zh": "和（相加的結果）"
      },
      {
       "en": "grouping",
       "zh": "分組"
      }
     ],
     "warn": {
      "zh": "第 2 步的兩個數要同時滿足兩個條件：積等於「首項係數 × 常數項」、和等於中間項係數。若最後分組後兩組括號不相同，就是這兩個數找錯了 —— 回到第 2 步重找，不要硬做下去。"
     }
    },
    {
     "id": "ws01-c8",
     "topic": "ws01",
     "title": {
      "zh": "方法六：三加一分組（DSE 最常考）",
      "en": "Method 6 · Group 3 + 1"
     },
     "body": {
      "zh": "這是 DSE Paper 2 因式分解題最常見的形態：一條式子看似雜亂，其實只要分成「先 3 項、後餘項」兩部分就通了。\n做法固定四步：\n1. 先用十字相乘法，把前面 3 項寫成兩個括號。\n2. 餘下的項抽公因式，要刻意抽出與其中一個括號相同的括號。\n3. 兩部分合起來，就會出現同一個公因式：\n{{math:0}}\n4. 抽走共同括號，收工：\n{{math:1}}\n另一種常見寫法，是把「完全平方」藏在括號裡面 —— 用 $16=4^{2}$ 與 $4a^{2}-20ab+25b^{2}=(2a-5b)^{2}$ 湊出平方差：\n{{math:2}}\n{{math:3}}\n口訣：「先分 3+1，再找共同括號」。抽出來的括號一定要是前 3 項的其中一個因式；如果接不上，就是正負號或抽錯數，換個抽法再試。"
     },
     "math": [
      "x^{2}-3xy-10y^{2}+3x-15y=(x-5y)(x+2y)+3(x-5y)",
      "=(x-5y)(x+2y+3)",
      "16-4a^{2}+20ab-25b^{2}=4^{2}-(2a-5b)^{2}",
      "=(4+2a-5b)(4-2a+5b)"
     ],
     "vocab": [
      {
       "en": "group the terms",
       "zh": "併項分組"
      },
      {
       "en": "common bracket",
       "zh": "共同括號"
      }
     ],
     "warn": {
      "zh": "第 2 步是關鍵：要刻意抽出與前 3 項相同的括號，通常需要提負號或抽負數。如果餘下兩項抽出來的括號跟前 3 項兩個括號都對不上，就是前 3 項分解錯了（回去檢查中間項），不要硬寫下去。"
     }
    },
    {
     "id": "ws01-c6",
     "topic": "ws01",
     "title": {
      "zh": "解題流程與常見錯誤",
      "en": "Checklist & Common Mistakes"
     },
     "body": {
      "zh": "考試時的固定流程：\n1. 先抽公因式（common factor）—— 這一步幾乎每題都用得上。\n2. 數一數有幾項：兩項想平方差，三項想十字相乘或完全平方，四項想分組。\n3. 分解完再檢查括號內能否繼續分解。\n4. 最後展開驗算一次，確認回到原式。\n常見失分：抽公因式抽不乾淨（例如 $2x^{2}-8=2(x^{2}-4)$ 其實可以再分解成 $2(x+2)(x-2)$）；分組時忘記變號；把 $a^{2}+b^{2}$ 誤當平方差。"
     },
     "math": [
      "2x^{2}-8=2(x^{2}-4)=2(x+2)(x-2)"
     ],
     "vocab": [
      {
       "en": "completely factorized",
       "zh": "完全分解"
      },
      {
       "en": "check by expansion",
       "zh": "展開驗算"
      }
     ],
     "warn": {
      "zh": "「完全分解」是評分要求：留著 $2(x^{2}-4)$ 通常會失分。"
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws01-ex01",
     "type": "long",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1-EX1",
     "source": "WS01 Example 1 · [HKDSE 2021 Paper 1 Q3]",
     "stem": {
      "text": "Factorize"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$15x^{2}+xy-2y^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$9x-3y-15x^{2}-xy+2y^{2}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 認清題目要什麼",
         "en": "Step 1 · Read the question"
        },
        "math": "",
        "zh": "題目要求 factorize（因式分解）。(a) 是二次三項式 $15x^{2}+xy-2y^{2}$，用十字相乘法（cross method）；(b) 是四項，而且明顯「(a) 的答案會再用一次」——DSE 長題目幾乎都是這種設計：先分解 (a)，(b) 就是用 (a) 的結果。",
        "en": "Part (a) is a quadratic trinomial — use the cross method. Part (b) reuses the result of (a); that is the standard HKDSE Paper 1 design."
       },
       {
        "title": {
         "zh": "第 2 步 · (a) 十字相乘",
         "en": "Step 2 · Factorize (a)"
        },
        "math": "15x^{2}+xy-2y^{2}=(3x-y)(5x+2y)",
        "zh": "首項 $15x^{2}$ 拆成 $3x\\cdot 5x$，末項 $-2y^{2}$ 拆成 $(-y)\\cdot(+2y)$。交叉相乘檢查中間項：$(3x)(+2y)+(-y)(5x)=6xy-5xy=xy$，與題目的 $+xy$ 相符，所以分解正確。這一步是 A 分，答案寫對就得分。",
        "en": "Split the first term into $3x\\cdot5x$ and the last term into $(-y)(+2y)$; the cross products give $+xy$, matching the middle term. (1A)",
        "marking": "(1A)",
        "highlight": [
         "(3x-y)(5x+2y)"
        ]
       },
       {
        "title": {
         "zh": "第 3 步 · (b) 先分組，再抽公因式",
         "en": "Step 3 · Group the terms in (b)"
        },
        "math": "9x-3y-15x^{2}-xy+2y^{2}=(9x-3y)-(15x^{2}+xy-2y^{2})",
        "zh": "四項的式子要用 grouping（併項分組）。看見後三項 $-15x^{2}-xy+2y^{2}$ 就是 (a) 的相反數，所以把負號提出來：變成 $-(15x^{2}+xy-2y^{2})$。很多同學在這裡直接寫 $-15x^{2}-xy+2y^{2}$ 而不加括號，之後就無法用 (a) 的結果。",
        "en": "Group as $(9x-3y)-(15x^{2}+xy-2y^{2})$; the bracket is exactly part (a). Remember to insert the brackets when taking out the minus sign.",
        "highlight": [
         "(9x-3y)-(15x^{2}+xy-2y^{2})"
        ]
       },
       {
        "title": {
         "zh": "第 4 步 · 用 (a) 的結果完成分解",
         "en": "Step 4 · Use the result of (a)"
        },
        "math": "=3(3x-y)-(3x-y)(5x+2y)=(3x-y)(3-5x-2y)",
        "zh": "先抽公因式：$9x-3y=3(3x-y)$；再用 (a) 的答案 $15x^{2}+xy-2y^{2}=(3x-y)(5x+2y)$。此時 $(3x-y)$ 是兩項的共同因式，抽出來得 $(3x-y)\\big[3-(5x+2y)\\big]=(3x-y)(3-5x-2y)$。",
        "en": "Factor $9x-3y$ as $3(3x-y)$ and use (a): $(3x-y)$ is now a common factor, so the answer is $(3x-y)(3-5x-2y)$. (1M + 1A)",
        "marking": "(1M: Use the result of (a).) (1A)",
        "highlight": [
         "(3x-y)(3-5x-2y)"
        ],
        "link": {
         "from": "(a)",
         "math": "15x^{2}+xy-2y^{2}=(3x-y)(5x+2y)"
        }
       }
      ],
      "traps": [],
      "tip": {
       "zh": "DSE Paper 1 的因式分解題幾乎都是「(a) 先分解一個二次三項式，(b) 再用 (a) 的結果」。(b) 見到四項，先想「哪兩項可以抽公因式、哪三項是 (a) 的式子」，通常就通了。若 (a) 的十字相乘一時試不出組合，不要硬試：用計算機內置的二次方程程式求出兩個根、反推因式（見「方法四」概念卡），確定答案後再回頭把過程寫齊。",
       "en": "In Paper 1, part (b) almost always reuses part (a). Look for the group that matches (a) — and add brackets before taking out a minus sign."
      }
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01-ex02",
     "type": "long",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1-EX2",
     "source": "WS01 Example 2 · [HKDSE 2022 Paper 1 Q4]",
     "stem": {
      "text": "Factorize"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$16c^{2}-8c+1$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$(5c+d)^{2}-16c^{2}+8c-1$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · (a) 認出完全平方",
         "en": "Step 1 · Recognise a perfect square"
        },
        "math": "16c^{2}-8c+1=(4c)^{2}-2(4c)(1)+1^{2}=(4c-1)^{2}",
        "zh": "首項 $16c^{2}=(4c)^{2}$、末項 $1=1^{2}$，中間項 $-8c=-2(4c)(1)$，完全符合 $a^{2}-2ab+b^{2}\\equiv(a-b)^{2}$（perfect square，完全平方）。所以答案是 $(4c-1)^{2}$，這步 1A。",
        "en": "The expression matches $a^{2}-2ab+b^{2}\\equiv(a-b)^{2}$, so (a) is $(4c-1)^{2}$. (1A)",
        "marking": "(1A)",
        "highlight": [
         "(4c-1)^{2}"
        ]
       },
       {
        "title": {
         "zh": "第 2 步 · (b) 把 (a) 的結果整塊用上",
         "en": "Step 2 · Spot (a) inside (b)"
        },
        "math": "(5c+d)^{2}-16c^{2}+8c-1=(5c+d)^{2}-(16c^{2}-8c+1)",
        "zh": "後三項 $-16c^{2}+8c-1$ 與 (a) 的 $16c^{2}-8c+1$ 只差一個負號，所以要提出負號並加括號：$-(16c^{2}-8c+1)$。提出時每一項都要變號 —— 這是本題最容易失分的地方。",
        "en": "Take out a minus sign with brackets: $-(16c^{2}-8c+1)$. Every term inside must change sign.",
        "highlight": [
         "-(16c^{2}-8c+1)"
        ],
        "link": {
         "from": "(a)",
         "label": "認出 (a) 的整塊，加括號",
         "math": "-\\big(16c^{2}-8c+1\\big)"
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 化成平方差",
         "en": "Step 3 · Form a difference of two squares"
        },
        "math": "=(5c+d)^{2}-(4c-1)^{2}",
        "zh": "把 (a) 的答案代回去，就得到「兩個平方相減」$A^{2}-B^{2}$ 的形式，其中 $A=5c+d$、$B=4c-1$。看到這個形式就要立刻想 $A^{2}-B^{2}\\equiv(A+B)(A-B)$。",
        "en": "Now it is $A^{2}-B^{2}$ with $A=5c+d$, $B=4c-1$ — apply the difference of two squares.",
        "marking": "(1M: Use the result of (a).)",
        "highlight": [
         "A^{2}-B^{2}"
        ],
        "link": {
         "from": "(a)",
         "math": "16c^{2}-8c+1=(4c-1)^{2}"
        }
       },
       {
        "title": {
         "zh": "第 4 步 · 用平方差分解並化簡",
         "en": "Step 4 · Apply $A^{2}-B^{2}=(A+B)(A-B)$"
        },
        "math": "=(5c+d+4c-1)(5c+d-4c+1)=(9c+d-1)(c+d+1)",
        "zh": "$A+B=(5c+d)+(4c-1)=9c+d-1$；$A-B=(5c+d)-(4c-1)=5c+d-4c+1$。注意減號後面整條 $4c-1$ 都要變號，寫成 $5c+d-4c+1$ 才會對。答案是 $(9c+d-1)(c+d+1)$，這步 1M + 1A。",
        "en": "$A+B=9c+d-1$ and $A-B=c+d+1$, giving $(9c+d-1)(c+d+1)$. (1M) (1A)",
        "marking": "(1M) (1A)",
        "highlight": [
         "(9c+d-1)(c+d+1)"
        ]
       }
      ],
      "traps": [],
      "tip": {
       "zh": "「(b) 內藏 (a)」是 Paper 1 的固定套路。做法：在 (b) 找出 (a) 那串式子，前面加負號並補括號，然後它就會變成 $A^{2}-B^{2}$ 或 $A^{2}+2AB+B^{2}$，一步就能收尾。",
       "en": "Look for part (a) hidden inside part (b). Wrap it in brackets (watch the signs) and it becomes a standard identity."
      }
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": [
    [
     {
      "id": "eph-ws01-q08",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q08",
      "source": "WS01 Paper 2 Q8 · [HKDSE 2017 Paper 2 Q1]",
      "stem": {
       "text": "$x^{2}-3xy-10y^{2}+3x-15y=$"
      },
      "options": {
       "A": "$(x-5y)(x+2y+3)$",
       "B": "$(x-5y)(x+2y-3)$",
       "C": "$(x+5y)(x-2y+3)$",
       "D": "$(x+5y)(x-2y-3)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 前面三項先做十字相乘",
          "en": "Step 1 · Factor the first three terms"
         },
         "math": "x^{2}-3xy-10y^{2}=(x-5y)(x+2y)",
         "zh": "把 $x^{2}-3xy-10y^{2}$ 當作二次三項式分解：末項 $-10y^{2}=(-5y)(+2y)$，交叉相乘 $2xy-5xy=-3xy$，符合。剩下 $+3x-15y$ 先放著。",
         "en": "Factor $x^{2}-3xy-10y^{2}$ into $(x-5y)(x+2y)$.",
         "highlight": [
          "(x-5y)(x+2y)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 後兩項抽出與前面相同的因式",
          "en": "Step 2 · Factor the remaining pair"
         },
         "math": "3x-15y=3(x-5y)",
         "zh": "$3x-15y$ 抽公因式 $3$ 得 $3(x-5y)$ —— 關鍵是括號內 $x-5y$ 與第 1 步的其中一個因式相同。",
         "en": "$3x-15y=3(x-5y)$ shares the factor $(x-5y)$.",
         "highlight": [
          "3(x-5y)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(x-5y)$"
         },
         "math": "=(x-5y)(x+2y)+3(x-5y)=(x-5y)(x+2y+3)",
         "zh": "$(x-5y)$ 是公因式，抽出來剩下 $(x+2y)+3$，答案是 A。",
         "en": "$(x-5y)(x+2y+3)$. Answer: A.",
         "highlight": [
          "(x-5y)(x+2y+3)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(x-5y)(x+2y-3)$ 的常數項符號錯。後兩項是 $+3x-15y=+3(x-5y)$，所以括號內是 $+3$ 不是 $-3$。",
         "en": "The constant should be $+3$ because $3x-15y=+3(x-5y)$."
        },
        {
         "opt": "C",
         "zh": "$(x+5y)(x-2y+3)$ 把第 1 步的因式符號寫反了。$x^{2}-3xy-10y^{2}$ 的分解是 $(x-5y)(x+2y)$；用 $(x+5y)(x-2y)$ 展開會得到 $x^{2}+3xy-10y^{2}$，中間項符號不符。",
         "en": "$(x+5y)(x-2y)$ expands to $+3xy$, not $-3xy$."
        }
       ],
       "tip": {
        "zh": "「三項＋兩項」的題型：先把三項分解，再看餘下兩項能否抽出「與其中一個因式相同」的括號。這是分組（grouping）的變奏。",
        "en": "Factor the trinomial first, then look for the same bracket in the remaining pair."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q09",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q09",
      "source": "WS01 Paper 2 Q9 · [HKDSE 2017 Paper 2 Q1]",
      "stem": {
       "text": "$5a^{2}-8ab+3b^{2}+b-a=$"
      },
      "options": {
       "A": "$(a-b)(5a-3b-1)$",
       "B": "$(a-b)(5a+3b-1)$",
       "C": "$(a+b)(5a-3b+1)$",
       "D": "$(a+b)(5a+3b-1)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 分解三項式",
          "en": "Step 1 · Factor the trinomial"
         },
         "math": "5a^{2}-8ab+3b^{2}=(a-b)(5a-3b)",
         "zh": "十字相乘：$5a^{2}=5a\\cdot a$，$3b^{2}=(-3b)(-b)$，交叉相乘 $-3ab-5ab=-8ab$，符合中間項。",
         "en": "$5a^{2}-8ab+3b^{2}=(a-b)(5a-3b)$.",
         "highlight": [
          "(a-b)(5a-3b)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 餘下兩項抽負號",
          "en": "Step 2 · Factor the remaining pair"
         },
         "math": "b-a=-(a-b)",
         "zh": "$b-a$ 看起來與 $(a-b)$ 不同，但只差一個負號：$b-a=-(a-b)$。把負號提出來，就能與第一步的因式接上。",
         "en": "$b-a=-(a-b)$ — taking out the minus sign matches the first factor.",
         "highlight": [
          "b-a=-(a-b)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(a-b)$"
         },
         "math": "=(a-b)(5a-3b)-(a-b)=(a-b)\\big[(5a-3b)-1\\big]=(a-b)(5a-3b-1)",
         "zh": "把 $-b+a=-(a-b)$ 看成 $-1\\cdot(a-b)$，與 $(a-b)(5a-3b)$ 一起抽出 $(a-b)$，剩下 $(5a-3b)-1$。答案是 A。",
         "en": "$(a-b)(5a-3b-1)$. Answer: A.",
         "highlight": [
          "(a-b)(5a-3b-1)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$(a+b)(5a-3b+1)$ 兩個括號都錯：$(a-b)$ 的符號不能變成 $(a+b)$，而且 $b-a=-(a-b)$ 使後面是 $-1$。",
         "en": "Both the factor and the constant sign are wrong."
        },
        {
         "opt": "B",
         "zh": "$(a-b)(5a+3b-1)$ 的第 1 步分解錯：$5a^{2}-8ab+3b^{2}$ 是 $(a-b)(5a-3b)$，用 $(5a+3b)$ 展開中間項會是 $+3ab-5ab=-2ab$，不符 $-8ab$。",
         "en": "The correct trinomial factor is $(5a-3b)$."
        }
       ],
       "tip": {
        "zh": "見到 $b-a$ 這種「反過來」的式子，馬上寫 $b-a=-(a-b)$。這個轉換在分組題幾乎必用，也是同學最常忘記的一步。",
        "en": "Whenever a bracket appears reversed, rewrite it with a minus sign outside."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q10",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1-Q10",
      "source": "WS01 Paper 2 Q10 · [HKDSE Sample Paper 2 Q3]",
      "stem": {
       "text": "$x^{2}-y^{2}+4y-4=$"
      },
      "options": {
       "A": "$(x-y-2)(x+y-2)$",
       "B": "$(x-y-2)(x+y+2)$",
       "C": "$(x-y+2)(x+y-2)$",
       "D": "$(x-y+2)(x-y-2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把後三項收成一個完全平方",
          "en": "Step 1 · Group the last three terms"
         },
         "math": "x^{2}-y^{2}+4y-4=x^{2}-(y^{2}-4y+4)",
         "zh": "後三項 $-y^{2}+4y-4$ 提出負號後是 $-(y^{2}-4y+4)$；而 $y^{2}-4y+4=(y-2)^{2}$（完全平方）。所以原式＝$x^{2}-(y-2)^{2}$。",
         "en": "$-y^{2}+4y-4=-(y^{2}-4y+4)=-(y-2)^{2}$.",
         "highlight": [
          "(y-2)^{2}"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 變成平方差",
          "en": "Step 2 · Now it is $A^{2}-B^{2}$"
         },
         "math": "=x^{2}-(y-2)^{2},\\ A=x,\\ B=y-2",
         "zh": "現在是「$x$ 的平方減去 $(y-2)$ 的平方」$A^{2}-B^{2}$ 形式，可以用公式。",
         "en": "Use $A^{2}-B^{2}=(A+B)(A-B)$ with $A=x$, $B=y-2$.",
         "highlight": [
          "A=x, B=y-2"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 代入公式並化簡",
          "en": "Step 3 · Apply and simplify"
         },
         "math": "=\\big(x+(y-2)\\big)\\big(x-(y-2)\\big)=(x+y-2)(x-y+2)",
         "zh": "$A+B=x+y-2$；$A-B=x-(y-2)=x-y+2$。答案是 C。",
         "en": "$(x+y-2)(x-y+2)$. Answer: C.",
         "highlight": [
          "(x+y-2)(x-y+2)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(x-y-2)(x+y-2)$ 的第二個括號沒變號：$x-(y-2)=x-y+2$，不是 $x-y-2$。",
         "en": "$x-(y-2)=x-y+2$, not $x-y-2$."
        },
        {
         "opt": "B",
         "zh": "$(x-y-2)(x+y+2)$ 兩個括號都寫錯了。用展開驗算：正確答案 $(x+y-2)(x-y+2)=x^{2}-y^{2}+4y-4$。",
         "en": "Expanding the correct answer returns $x^{2}-y^{2}+4y-4$."
        }
       ],
       "tip": {
        "zh": "四項而其中三項可以收成一個平方時，剩下的那一項往往也是平方（這裡是 $x^{2}$），整題就變成平方差。這個「三加一」的觀察法是進階版的分組。",
        "en": "If three terms form a perfect square, the whole expression may be a difference of two squares."
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q11",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1-Q11",
      "source": "WS01 Paper 2 Q11 · [HKDSE Sample Paper 2 Q3]",
      "stem": {
       "text": "$16-4a^{2}+20ab-25b^{2}=$"
      },
      "options": {
       "A": "$(4-2a+5b)(4-2a-5b)$",
       "B": "$(4-2a+5b)(4+2a-5b)$",
       "C": "$(4-2a-5b)(4+2a+5b)$",
       "D": "$(4-2a-5b)(4+2a-5b)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 看出三加一結構",
          "en": "Step 1 · Spot the 3+1 structure"
         },
         "math": "16-4a^{2}+20ab-25b^{2}=4^{2}-(4a^{2}-20ab+25b^{2})",
         "zh": "提出負號後，後三項 $4a^{2}-20ab+25b^{2}$ 是 $(2a)^{2}-2(2a)(5b)+(5b)^{2}=(2a-5b)^{2}$。前面 $16=4^{2}$。",
         "en": "$16-4a^{2}+20ab-25b^{2}=4^{2}-(2a-5b)^{2}$.",
         "highlight": [
          "4^{2}-(2a-5b)^{2}"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 平方差",
          "en": "Step 2 · Difference of two squares"
         },
         "math": "=\\big(4+(2a-5b)\\big)\\big(4-(2a-5b)\\big)",
         "zh": "$A=4$、$B=2a-5b$，代入 $A^{2}-B^{2}=(A+B)(A-B)$。",
         "en": "Apply the identity with $A=4$, $B=2a-5b$.",
         "highlight": [
          "A+B, A-B"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 化簡",
          "en": "Step 3 · Simplify"
         },
         "math": "=(4+2a-5b)(4-2a+5b)",
         "zh": "$4+(2a-5b)=4+2a-5b$；$4-(2a-5b)=4-2a+5b$。答案是 B（乘法次序可對調）。",
         "en": "$(4+2a-5b)(4-2a+5b)$. Answer: B.",
         "highlight": [
          "(4-2a+5b)(4+2a-5b)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(4-2a+5b)(4-2a-5b)$ 的第二個括號沒變號：$-(2a-5b)=-2a+5b$，所以應是 $4-2a+5b$。",
         "en": "Sign mistake when removing the bracket."
        },
        {
         "opt": "C",
         "zh": "$(4-2a-5b)(4+2a+5b)$ 是把 $(2a-5b)^{2}$ 誤當作 $(2a+5b)^{2}$。$4a^{2}-20ab+25b^{2}$ 中間是減號，所以是 $(2a-5b)^{2}$。",
         "en": "The perfect square here is $(2a-5b)^{2}$."
        }
       ],
       "tip": {
        "zh": "先數項數再決定方法：四項 → 想「分組」或「三加一變成平方差」。這題用三加一最快，比硬試十字相乘可靠。",
        "en": "Count the terms: four terms usually means grouping or a difference of two squares in disguise."
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q12",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q12",
      "source": "WS01 Paper 2 Q12 · [HKDSE Practice Paper 2 Q3]",
      "stem": {
       "text": "$x^{2}-y^{2}-x+y=$"
      },
      "options": {
       "A": "$(x-y)(x+y-1)$",
       "B": "$(x-y)(x-y-1)$",
       "C": "$(x+y)(x+y-1)$",
       "D": "$(x+y)(x-y+1)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 前兩項用平方差",
          "en": "Step 1 · Factor the first pair"
         },
         "math": "x^{2}-y^{2}=(x-y)(x+y)",
         "zh": "$x^{2}-y^{2}$ 是平方差，分解成 $(x-y)(x+y)$。",
         "en": "$x^{2}-y^{2}=(x-y)(x+y)$.",
         "highlight": [
          "(x-y)(x+y)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 後兩項抽出同一個括號",
          "en": "Step 2 · Factor the remaining pair"
         },
         "math": "-x+y=-(x-y)",
         "zh": "$-x+y$ 抽負號得 $-(x-y)$，恰好與第一步的因式 $(x-y)$ 相同。",
         "en": "$-x+y=-(x-y)$.",
         "highlight": [
          "-(x-y)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(x-y)$"
         },
         "math": "=(x-y)(x+y)-(x-y)=(x-y)(x+y-1)",
         "zh": "答案是 A。注意最後剩下的是 $x+y-1$，那個「$-1$」來自 $-(x-y)$ 的係數 $-1$。",
         "en": "$(x-y)(x+y-1)$. Answer: A.",
         "highlight": [
          "(x-y)(x+y-1)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(x-y)(x-y-1)$ 把 $(x+y)$ 誤當 $(x-y)$。$x^{2}-y^{2}$ 的因式是 $(x+y)$ 與 $(x-y)$，抽走 $(x-y)$ 後留在括號內的是 $x+y$。",
         "en": "After factoring out $(x-y)$, the remaining bracket is $x+y-1$."
        },
        {
         "opt": "D",
         "zh": "$(x+y)(x-y+1)$ 是抽錯了公因式：$-x+y=-(x-y)$ 與 $(x+y)$ 不同，不能抽 $(x+y)$。",
         "en": "The common factor is $(x-y)$, not $(x+y)$."
        }
       ],
       "tip": {
        "zh": "「兩項加兩項」的固定做法：先用平方差分解前兩項，再把後兩項抽出一個與之相同的括號（通常要提負號），最後抽共同因式。",
        "en": "Factor the square-difference pair first, then match the other pair to one of those factors."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q13",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q13",
      "source": "WS01 Paper 2 Q13 · [HKDSE 2014 Paper 2 Q2]",
      "stem": {
       "text": "$u^{2}-v^{2}-3u-3v=$"
      },
      "options": {
       "A": "$(u+v)(u-v-3)$",
       "B": "$(u+v)(u+v-3)$",
       "C": "$(u-v)(u-v+3)$",
       "D": "$(u-v)(u+v-3)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 前兩項平方差",
          "en": "Step 1 · Factor the square difference"
         },
         "math": "u^{2}-v^{2}=(u+v)(u-v)",
         "zh": "$u^{2}-v^{2}$ 分解成 $(u+v)(u-v)$。",
         "en": "$u^{2}-v^{2}=(u+v)(u-v)$.",
         "highlight": [
          "(u+v)(u-v)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 後兩項抽出相同括號",
          "en": "Step 2 · Factor the remaining pair"
         },
         "math": "-3u-3v=-3(u+v)",
         "zh": "$-3u-3v$ 抽 $-3$ 得 $-3(u+v)$，括號與第一步的 $(u+v)$ 相同。",
         "en": "$-3u-3v=-3(u+v)$.",
         "highlight": [
          "-3(u+v)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(u+v)$"
         },
         "math": "=(u+v)(u-v)-3(u+v)=(u+v)(u-v-3)",
         "zh": "抽走公因式 $(u+v)$ 後，第一項剩下 $(u-v)$、第二項剩下 $-3$，所以答案是 $(u+v)(u-v-3)$，即 A。做完可以展開驗算：$(u+v)(u-v-3)=u^{2}-uv-3u+uv-v^{2}-3v=u^{2}-v^{2}-3u-3v$，與原式相同。",
         "en": "$(u+v)(u-v-3)$. Answer: A.",
         "highlight": [
          "(u+v)(u-v-3)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(u+v)(u+v-3)$ 把 $(u-v)$ 誤寫成 $(u+v)$：抽走 $(u+v)$ 之後，餘下的是 $(u-v)$。",
         "en": "The remaining factor is $(u-v)$, not $(u+v)$."
        },
        {
         "opt": "D",
         "zh": "$(u-v)(u+v-3)$ 抽錯了公因式。$-3u-3v=-3(u+v)$，所以公因式是 $(u+v)$，不是 $(u-v)$。",
         "en": "The common factor is $(u+v)$."
        }
       ],
       "tip": {
        "zh": "抽公因式時要抽「整條括號」：$-3u-3v$ 抽的不只是 3，而是 $-3(u+v)$。判斷方法：把抽出來的東西乘回去，看能否還原。",
        "en": "Take out the whole bracket: $-3u-3v=-3(u+v)$."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q14",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q14",
      "source": "WS01 Paper 2 Q14 · [HKDSE 2014 Paper 2 Q2]",
      "stem": {
       "text": "$9m^{2}-4n^{2}-6m-4n=$"
      },
      "options": {
       "A": "$(3m-2n)(3m+2n-2)$",
       "B": "$(3m+2n)(3m-2n+2)$",
       "C": "$(3m-2n)(3m+2n+2)$",
       "D": "$(3m+2n)(3m-2n-2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 平方差",
          "en": "Step 1 · Difference of two squares"
         },
         "math": "9m^{2}-4n^{2}=(3m+2n)(3m-2n)",
         "zh": "$9m^{2}=(3m)^{2}$、$4n^{2}=(2n)^{2}$，所以 $9m^{2}-4n^{2}=(3m+2n)(3m-2n)$。",
         "en": "$9m^{2}-4n^{2}=(3m+2n)(3m-2n)$.",
         "highlight": [
          "(3m+2n)(3m-2n)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 後兩項抽公因式",
          "en": "Step 2 · Factor the remaining pair"
         },
         "math": "-6m-4n=-2(3m+2n)",
         "zh": "$-6m-4n$ 抽 $-2$ 得 $-2(3m+2n)$，括號與平方差其中一個因式相同（若抽 $+2$ 則得 $2(-3m-2n)$，接不上，所以必須抽負數）。",
         "en": "$-6m-4n=-2(3m+2n)$ (a negative factor is needed to match).",
         "highlight": [
          "-2(3m+2n)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(3m+2n)$"
         },
         "math": "=(3m+2n)(3m-2n)-2(3m+2n)=(3m+2n)(3m-2n-2)",
         "zh": "抽走 $(3m+2n)$ 後，第一項剩下 $(3m-2n)$、第二項剩下 $-2$，所以答案是 $(3m+2n)(3m-2n-2)$，即 D。展開驗算：$(3m+2n)(3m-2n-2)=9m^{2}-6mn-6m-4n^{2}-4n$，與原式一致。",
         "en": "$(3m+2n)(3m-2n-2)$. Answer: D.",
         "highlight": [
          "(3m+2n)(3m-2n-2)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(3m-2n)(3m+2n-2)$ 抽錯了括號：$-6m-4n=-2(3m+2n)$ 與 $(3m+2n)$ 配對，不是 $(3m-2n)$。",
         "en": "The matching bracket is $(3m+2n)$."
        },
        {
         "opt": "B",
         "zh": "$(3m+2n)(3m-2n+2)$ 的常數符號錯：$-2(3m+2n)$ 帶的是「減 2」，所以是 $-2$。",
         "en": "The constant term should be $-2$."
        }
       ],
       "tip": {
        "zh": "分組時如果抽正數接不上，就試抽負數 —— 抽 $-2$ 比抽 $+2$ 更容易與平方差的括號對上。",
        "en": "If a positive factor does not match, try taking out a negative factor."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q15",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q15",
      "source": "WS01 Paper 2 Q15 · [HKDSE 2022 Paper 2 Q1]",
      "stem": {
       "text": "$a^{2}+a-b^{2}-b=$"
      },
      "options": {
       "A": "$(a+b)(a-b+1)$",
       "B": "$(a+b)(a-b-1)$",
       "C": "$(a-b)(a+b+1)$",
       "D": "$(a-b)(a+b-1)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 重新排列",
          "en": "Step 1 · Rearrange"
         },
         "math": "a^{2}+a-b^{2}-b=a^{2}-b^{2}+a-b",
         "zh": "把 $a^{2}$ 與 $-b^{2}$ 放一起、$a$ 與 $-b$ 放一起，方便各組分解。",
         "en": "Rearrange as $a^{2}-b^{2}+a-b$.",
         "highlight": [
          "a^{2}-b^{2}+a-b"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自分解",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=(a-b)(a+b)+(a-b)",
         "zh": "$a^{2}-b^{2}=(a-b)(a+b)$；$a-b$ 本身就是 $1\\cdot(a-b)$，寫成 $(a-b)$ 即可（不要寫成 $1(a-b)$ 也可以，但心裡要知道係數是 1）。",
         "en": "$a^{2}-b^{2}=(a-b)(a+b)$ and $a-b=1\\cdot(a-b)$.",
         "highlight": [
          "(a-b)(a+b)+(a-b)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(a-b)$"
         },
         "math": "=(a-b)(a+b+1)",
         "zh": "$(a-b)$ 是公因式，抽出來後 $+(a-b)$ 剩下 $+1$。答案是 C。很多同學漏掉那個 1，就會寫成 $(a-b)(a+b)$。",
         "en": "$(a-b)(a+b+1)$. Answer: C.",
         "highlight": [
          "(a-b)(a+b+1)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$(a-b)(a+b-1)$ 把 $+1$ 寫成 $-1$：$+a-b$ 是「加上」$(a-b)$，所以括號內是 $+1$。",
         "en": "The constant is $+1$ because the last term is $+(a-b)$."
        },
        {
         "opt": "A",
         "zh": "$(a+b)(a-b+1)$ 抽錯了公因式：$a-b$ 與 $(a+b)$ 不是同一條括號，公因式是 $(a-b)$。",
         "en": "The common factor is $(a-b)$."
        }
       ],
       "tip": {
        "zh": "「單獨一項」也可以是公因式的一部分：$+(a-b)$ 抽 $(a-b)$ 後剩下 $+1$。這個 1 是 MC 常見陷阱，記得寫上去。",
        "en": "Remember the hidden 1 when a whole term equals the common factor."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q16",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q16",
      "source": "WS01 Paper 2 Q16 · [HKDSE 2022 Paper 2 Q1]",
      "stem": {
       "text": "$m^{2}+n-m-n^{2}=$"
      },
      "options": {
       "A": "$(m-n)(m+n+1)$",
       "B": "$(m-n)(m+n-1)$",
       "C": "$(m+n)(m-n+1)$",
       "D": "$(m+n)(m-n-1)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 重新排列",
          "en": "Step 1 · Rearrange"
         },
         "math": "m^{2}+n-m-n^{2}=m^{2}-n^{2}-m+n",
         "zh": "把平方項放一起、一次項放一起：$m^{2}-n^{2}-m+n$。",
         "en": "Group as $m^{2}-n^{2}-m+n$.",
         "highlight": [
          "m^{2}-n^{2}-m+n"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自分解",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=(m-n)(m+n)-(m-n)",
         "zh": "$m^{2}-n^{2}=(m-n)(m+n)$；$-m+n=-(m-n)$，抽負號後與前組的因式相同。",
         "en": "$m^{2}-n^{2}=(m-n)(m+n)$ and $-m+n=-(m-n)$.",
         "highlight": [
          "(m-n)(m+n)-(m-n)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(m-n)$"
         },
         "math": "=(m-n)\\big[(m+n)-1\\big]=(m-n)(m+n-1)",
         "zh": "抽 $(m-n)$ 後剩下 $(m+n)-1$。答案是 B。",
         "en": "$(m-n)(m+n-1)$. Answer: B.",
         "highlight": [
          "(m-n)(m+n-1)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(m-n)(m+n+1)$ 把 $-1$ 寫成 $+1$：$-m+n=-(m-n)$，所以是減 $(m-n)$，括號內為 $-1$。",
         "en": "Since $-m+n=-(m-n)$, the constant should be $-1$."
        },
        {
         "opt": "C",
         "zh": "$(m+n)(m-n+1)$ 抽錯公因式；另外符號亦錯。公因式是 $(m-n)$。",
         "en": "The common factor is $(m-n)$ and the constant is $-1$."
        }
       ],
       "tip": {
        "zh": "比較 $+a-b$ 與 $-a+b$：前者抽 $+(a-b)$ 剩 $+1$，後者抽 $-(a-b)$ 剩 $-1$。做這類題目時，先把「後面那兩項」寫成 $\\pm(\\text{括號})$ 再判斷符號。",
        "en": "Write the last two terms as $\\pm(\\text{bracket})$ before deciding the sign."
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q17",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q17",
      "source": "WS01 Paper 2 Q17 · [HKDSE 2018 Paper 2 Q3]",
      "stem": {
       "text": "$h^{2}-4h-k^{2}+4k=$"
      },
      "options": {
       "A": "$(h-k)(h+k-4)$",
       "B": "$(h-k)(h+k+4)$",
       "C": "$(h+k)(h-k-4)$",
       "D": "$(h+k)(h-k+4)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 重新排列",
          "en": "Step 1 · Rearrange"
         },
         "math": "h^{2}-4h-k^{2}+4k=h^{2}-k^{2}-4h+4k",
         "zh": "把平方項與一次項分別歸組：$h^{2}-k^{2}$ 與 $-4h+4k$。",
         "en": "Group as $h^{2}-k^{2}-4h+4k$.",
         "highlight": [
          "h^{2}-k^{2}-4h+4k"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自分解",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=(h-k)(h+k)-4(h-k)",
         "zh": "$h^{2}-k^{2}=(h-k)(h+k)$；$-4h+4k=-4(h-k)$（抽 $-4$ 而不是 $+4$，才能與 $(h-k)$ 對上）。",
         "en": "$-4h+4k=-4(h-k)$.",
         "highlight": [
          "-4(h-k)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(h-k)$"
         },
         "math": "=(h-k)(h+k-4)",
         "zh": "抽走 $(h-k)$ 後，第一項剩下 $(h+k)$、第二項剩下 $-4$，答案是 $(h-k)(h+k-4)$，即 A。展開驗算：$(h-k)(h+k-4)=h^{2}-k^{2}-4h+4k$，回到原式。",
         "en": "$(h-k)(h+k-4)$. Answer: A.",
         "highlight": [
          "(h-k)(h+k-4)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$(h+k)(h-k-4)$ 抽錯了公因式：$-4h+4k=-4(h-k)$，與 $(h-k)$ 配對，所以公因式是 $(h-k)$。",
         "en": "The common factor is $(h-k)$, not $(h+k)$."
        },
        {
         "opt": "B",
         "zh": "$(h-k)(h+k+4)$ 的常數符號錯：$-4h+4k$ 抽 $-4$，所以是「減 4」。",
         "en": "The constant should be $-4$."
        }
       ],
       "tip": {
        "zh": "分組時「後組抽負數」是常態：$-4h+4k=-4(h-k)$。抽完先看一看兩個括號是否一樣，不一樣就馬上改抽相反符號再試。",
        "en": "Try taking out a negative factor so that the brackets match."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q18",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q18",
      "source": "WS01 Paper 2 Q18 · [HKDSE 2018 Paper 2 Q3]",
      "stem": {
       "text": "$m^{2}-2m-9n^{2}-6n=$"
      },
      "options": {
       "A": "$(m-3n)(m-3n+2)$",
       "B": "$(m-3n)(m+3n+2)$",
       "C": "$(m+3n)(m-3n-2)$",
       "D": "$(m+3n)(m+3n-2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 重新排列並分解平方差",
          "en": "Step 1 · Rearrange and factor"
         },
         "math": "m^{2}-2m-9n^{2}-6n=m^{2}-9n^{2}-2m-6n=(m+3n)(m-3n)-(2m+6n)",
         "zh": "先把平方項放一起：$m^{2}-9n^{2}=(m+3n)(m-3n)$。剩下的 $-2m-6n$ 先寫成 $-(2m+6n)$，方便觀察。",
         "en": "$m^{2}-9n^{2}=(m+3n)(m-3n)$ and the rest is $-(2m+6n)$.",
         "highlight": [
          "(m+3n)(m-3n)"
         ]
        },
        {
         "title": {
          "zh": "第 2 步 · 抽出與平方差相同的括號",
          "en": "Step 2 · Match the bracket"
         },
         "math": "-(2m+6n)=-2(m+3n)",
         "zh": "$2m+6n=2(m+3n)$，所以 $-2m-6n=-2(m+3n)$，括號是 $(m+3n)$ —— 與平方差的其中一個因式相同。",
         "en": "$-2m-6n=-2(m+3n)$.",
         "highlight": [
          "-2(m+3n)"
         ]
        },
        {
         "title": {
          "zh": "第 3 步 · 抽共同因式",
          "en": "Step 3 · Factor out $(m+3n)$"
         },
         "math": "=(m+3n)(m-3n)-2(m+3n)=(m+3n)(m-3n-2)",
         "zh": "抽走 $(m+3n)$ 後，第一項剩下 $(m-3n)$、第二項剩下 $-2$，答案是 $(m+3n)(m-3n-2)$，即 C。展開驗算：$(m+3n)(m-3n-2)=m^{2}-9n^{2}-2m-6n$，與原式相同。",
         "en": "$(m+3n)(m-3n-2)$. Answer: C.",
         "highlight": [
          "(m+3n)(m-3n-2)"
         ]
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$(m+3n)(m+3n-2)$ 把 $(m-3n)$ 寫成 $(m+3n)$：抽走 $(m+3n)$ 後，平方差留下的是 $(m-3n)$。",
         "en": "The remaining factor is $(m-3n)$."
        },
        {
         "opt": "A",
         "zh": "$(m-3n)(m-3n+2)$ 的公因式錯（應為 $(m+3n)$）而且 $+2$ 符號亦錯（應為 $-2$）。",
         "en": "Wrong common factor and wrong sign."
        }
       ],
       "tip": {
        "zh": "算完可以抽其中一個括號乘回去驗算，例如 $(m+3n)(m-3n-2)=m^{2}-9n^{2}-2m-6n$，一步就能確認對錯。",
        "en": "Always multiply back one bracket to check."
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
  "mc": 20,
  "long": 2,
  "cards": 8,
  "pages": 7
 }
};
