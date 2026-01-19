---
title: "ABENCDS_COND_EXPR_LIKE_V1"
description: |
  ABENCDS_COND_EXPR_LIKE_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_COND_EXPR_LIKE_V1.htm"
abapFile: "ABENCDS_COND_EXPR_LIKE_V1.html"
keywords: ["select", "do", "if", "data", "types", "ABENCDS", "COND", "EXPR", "LIKE"]
---

`... lhs [NOT] LIKE rhs [ESCAPE esc]...`

[`... ESCAPE esc`](#ABAP_ONE_ADD@1@)

Pattern comparison in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V1.html) in a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The relational expression is true if the string in `lhs` matches (does not match) the pattern in `rhs`.

Rules for the operands `lhs` and `rhs`:

Rules for the pattern in `rhs`:

The addition `ESCAPE` can be used to define a single-character [escape character](ABENESCAPE_CHARACTER_GLOSRY.html). `esc` expects a character-like [literal](ABENCDS_LITERAL_V1.html) with the length 1 containing the escape character. In the pattern in `rhs`, the escape character in `esc` can be placed before a wildcard character or before the escape character itself. Then, the character directly following the escape character loses its special meaning.

If an escape character in `rhs` is not placed in front of one of the valid characters, a syntax error occurs.

The character `#` is recommended for the escape character `esc`.

To search for the pattern '100%', the following expression can be used with `#` as the escape character.

-   The operand `lhs` must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, `cds_cond`, Operands](ABENCDS_COND_EXPR_OPERANDS_V1.html).
-   The data types of the operands must be comparable as described in topic [CDS DDL - DDIC-based View, `cds_cond`, Comparable Types](ABENCDS_COND_EXPR_TYPES_V1.html). Only character-like data types can be used.
-   For `rhs`, only character-like [literals](ABENCDS_LITERAL_V1.html) without domain prefix are allowed.

-   '%' is a wildcard character that represents any character string (including an empty string)
-   '\_' stands for any character

-   Do not use patterns in `rhs` that are closed by wildcard characters to search for trailing blanks. The semantics of searches of this type are dependent on the database system that is used and in general do not produce the required result.
-   If `lhs` contains the [null value](ABENNULL_VALUE_GLOSRY.html), then the comparison `lhs LIKE '%'` is **not** true. In ABAP SQL, this comparison **is** true (as described in topic [`sql_cond, LIKE`](ABENWHERE_LOGEXP_LIKE.html)).

... LIKE '100#%' ESCAPE '#' ... abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_conditional\_expression\_v1.html