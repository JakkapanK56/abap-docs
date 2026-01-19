---
title: "ABENFOR_COND"
description: |
  ABENFOR_COND - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFOR_COND.htm"
abapFile: "ABENFOR_COND.html"
keywords: ["select", "loop", "do", "if", "case", "data", "internal-table", "ABENFOR", "COND"]
---

``... [USING KEY [`keyname`](ABENKEYNAME.html)]\      [FROM idx1]\ [TO idx2]\ [STEP n]\      [WHERE ( [`log_exp`](ABENLOGEXP.html) )|(cond_syntax)] ...``

As with [`LOOP AT itab`](ABAPLOOP_AT_ITAB_COND.html), the following is possible for each expression [`FOR ... IN itab`](ABENFOR_IN_ITAB.html) and [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html) of a constructor expression:

The syntax and semantics are exactly the same as in [`LOOP AT itab`](ABAPLOOP_AT_ITAB_COND.html), apart from the fact that a statically specified logical expression `log_exp` in the `WHERE` condition must always be placed in parentheses. This also applies to dynamically specified, parenthesized standard tables with a character-like line type, such as `... WHERE ( (dyn_tab) ) ...`. However, dynamically specified character-like data objects are specified without the extra pair of parentheses, for example, `... WHERE (dyn_spec) ...`.

In the expression [`FOR ... IN GROUP group`](ABENFOR_IN_GROUP.html), only static `WHERE` conditions can be specified for `cond`.

The example shows how the same result can be achieved with a `WHERE` condition in an iteration expression and the filter operator [`FILTER`](ABENCONSTRUCTOR_EXPRESSION_FILTER.html). The shorter filter expression is usually more suitable in this case.

-   `USING KEY` can be used to specify the table key with which the table is evaluated.
-   `FROM` and `TO` can be used as upper and lower limits to restrict the lines in the table index used.
-   `STEP` can be used to define the step size and loop order for processing the internal table.
-   `WHERE` can be used to specify static or dynamic conditions for column content.

-   The local auxiliary variables of the expression visible in this position can be used for `idx1`, `idx2`, and in the logical expression of the `WHERE` condition.
-   The [pseudo component](ABENPSEUDO_COMPONENT_GLOSRY.html)\\ `table_line` can be used in the logical expression of the `WHERE` condition.

DATA messages TYPE SORTED TABLE OF t100 WITH NON-UNIQUE KEY sprsl msgnr. \\nSELECT \* \\n FROM t100 \\n WHERE arbgb = 'SABAPDEMOS' \\n INTO TABLE @messages. \\n\\ \\nDATA value\_tab LIKE messages. \\nvalue\_tab = VALUE #( FOR wa IN messages WHERE ( sprsl = 'E' ) ( wa ) ). \\n\\ \\nASSERT value\_tab = FILTER #( messages WHERE sprsl = 'E' ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html