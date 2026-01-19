---
title: "ABENFOR_ITAB"
description: |
  ABENFOR_ITAB - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFOR_ITAB.htm"
abapFile: "ABENFOR_ITAB.html"
keywords: ["loop", "if", "data", "types", "internal-table", "field-symbol", "ABENFOR", "ITAB"]
---

1\. `... FOR wa|<fs> IN itab [INDEX INTO idx]\ [[cond](ABENFOR_COND.html)]\ [[let_exp](ABAPLET.html)] ...`

2\. `... FOR GROUPS [group|<group>] OF wa|<fs> IN itab [INDEX INTO idx]\ [[cond](ABENFOR_COND.html)]\ GROUP BY [group_key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html)\ [ASCENDING|DESCENDING [AS TEXT]]\ [WITHOUT MEMBERS]\ [[let_exp](ABAPLET.html)] ...`

3\. `... FOR \{ wa|<fs> IN GROUP group [INDEX INTO idx]\ [[WHERE ( log_exp )](ABENFOR_COND.html)]\ \}\ |\ \{ GROUPS OF wa|<fs> IN GROUP group [INDEX INTO idx]\ [[WHERE ( log_exp )](ABENFOR_COND.html)]\ GROUP BY [group_key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html)\ [ASCENDING|DESCENDING [AS TEXT]]\ [WITHOUT MEMBERS]\ \}\ [[let_exp](ABAPLET.html)] ...`

These syntax forms of an [iteration expression](ABENITERATION_EXPRESSION_GLOSRY.html) using [`FOR`](ABENFOR.html) perform [table iterations](ABENTABLE_ITERATION_GLOSRY.html).

A `FOR` expression like this evaluates the content of an internal table and its result can be used to construct the result of the wrapper constructor expression. The three variants of a `FOR` expression for internal tables work in the same way as the following variants of the statement [`LOOP AT itab`](ABAPLOOP_AT_ITAB_VARIANTS.html):

The variables or field symbols declared in the `FOR` expressions are local here. The local data from all outer `FOR` expressions can be used when their values are defined. As an option, `LET` expressions [`let_exp`](ABAPLET.html) can be specified to define local helper fields at the end of each `FOR` expression that can be used in the context of the `FOR` loop. The helper fields are filled in every iteration step.

The system field `sy-tabix` is not set by a `FOR` expression. The addition `INDEX INTO` can be used instead.

Generation of an internal table `jtab` from an internal table `itab` using a [table comprehension](ABENTABLE_COMPREHENSION_GLOSRY.html). Generation of a text string `str` from the internal table `jtab` using a [table reduction](ABENTABLE_REDUCTION_GLOSRY.html). The result in `str` is the character string `1, 9, 25`.

[Read Lines of Internal Tables](ABENFOR_IN_ITAB.html)

[Group Lines of Internal Tables](ABENFOR_GROUPS_OF.html)

[Read Group Members of Internal Tables](ABENFOR_IN_GROUP.html)

-   When used in a constructor expression with the reduction operator [`REDUCE`](ABENCONSTRUCTOR_EXPRESSION_REDUCE.html), these are known as [table reductions](ABENTABLE_REDUCTION_GLOSRY.html).
-   When used in a constructor expression with the instance operator [`NEW`](ABENNEW_CONSTRUCTOR_PARAMS_ITAB.html) or with the value operator [`VALUE`](ABENVALUE_CONSTRUCTOR_PARAMS_ITAB.html) for internal tables, these are known as [table comprehensions](ABENTABLE_COMPREHENSION_GLOSRY.html).

-   The first variant [`FOR ... IN itab`](ABENFOR_IN_ITAB.html) works in the same way as the regular line variant [`LOOP AT itab`](ABAPLOOP_AT_ITAB.html) without the addition `GROUP BY`.
-   The second variant [`FOR GROUPS ... OF`](ABENFOR_GROUPS_OF.html) works in the same way as the variant for grouping lines with the addition [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html).
-   The third variant [`FOR ... IN GROUP`](ABENFOR_IN_GROUP.html) works in the same way as the variant [`LOOP AT GROUP`](ABAPLOOP_AT_GROUP.html) for [member loops](ABENMEMBER_LOOP_GLOSRY.html).

-   Multiple consecutive `FOR` expressions with different variants (including the [conditional iteration](ABENFOR_CONDITIONAL.html)) can be specified in a constructor expression. These expressions then work in the same way as nested loops.
-   The clearing or replacement of the complete table body of the internal table that is currently processed in a `FOR` expression is not allowed. Any attempt leads to the runtime error `TABLE_FREE_IN_LOOP`.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nFINAL(itab) = \\n VALUE itab( ( 1 ) ( 3 ) ( 5 ) ). \\n\\ \\nFINAL(jtab) = \\n VALUE itab( FOR wa IN itab ( ipow( base = wa exp = 2 ) ) ). \\n\\ \\nFINAL(str) = \\n REDUCE string( INIT s = \`\` \\n FOR wa IN jtab \\n NEXT s = COND #( WHEN s = \`\` THEN |\\{ wa \\}| \\n ELSE |\\{ s \\}, \\{ wa \\}| ) ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html