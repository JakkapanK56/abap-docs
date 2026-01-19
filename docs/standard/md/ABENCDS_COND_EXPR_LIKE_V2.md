---
title: "ABENCDS_COND_EXPR_LIKE_V2"
description: |
  ABENCDS_COND_EXPR_LIKE_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_COND_EXPR_LIKE_V2.htm"
abapFile: "ABENCDS_COND_EXPR_LIKE_V2.html"
keywords: ["select", "do", "if", "data", "types", "ABENCDS", "COND", "EXPR", "LIKE"]
---

`... lhs [NOT] LIKE rhs [ESCAPE esc]...`

[`... ESCAPE esc`](#ABAP_ONE_ADD@1@)

Pattern comparison in a [condition](ABENCDS_CONDITIONAL_EXPRESSION_V2.html) in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The relational expression is true if the string in `lhs` matches (does not match) the pattern in `rhs`.

Rules for the operands `lhs` and `rhs`:

Rules for the pattern in `rhs`:

The addition `ESCAPE` can be used to define a single-character [escape character](ABENESCAPE_CHARACTER_GLOSRY.html). `esc` expects a [character-like literal](ABENCDS_LITERAL_V2.html) with the length 1 containing the escape character. In the pattern in `rhs`, the escape character `esc` can be placed before a wildcard character or before the escape character itself. Then, the character directly following the escape character loses its special meaning.

If an escape character in `rhs` is not placed in front of one of the valid characters, a syntax error occurs.

The character `#` is recommended for the escape character `esc`.

To search for the pattern '100%', the following expression can be used with `#` as the escape character.

-   The operand `lhs` must stick to the context-dependent rules listed in topic [CDS DDL - View Entity, `cds_cond`, Operands](ABENCDS_COND_EXPR_OPERANDS_V2.html).
-   The data types of the operands must be comparable as described in topic [CDS DDL - View Entity, `cds_cond`, Comparable Types](ABENCDS_COND_EXPR_TYPES_V2.html). Only character-like data types can be used.
-   For `rhs`, only [character-like literals](ABENCDS_LITERAL_V2.html) are allowed.

-   '%' is a wildcard character that represents any character string (including an empty string)
-   '\_' stands for any character

-   Do not use patterns in `rhs` that are closed by wildcard characters to search for trailing blanks. The semantics of searches of this type are dependent on the database system that is used and in general do not produce the required result.
-   If `lhs` contains the [null value](ABENNULL_VALUE_GLOSRY.html), then the comparison `lhs LIKE '%'` is **not** true. In ABAP SQL, this comparison **is** true (as described in topic [`sql_cond, LIKE`](ABENWHERE_LOGEXP_LIKE.html)).

... LIKE '100#%' ESCAPE '#' ... abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_conditional\_expression\_v2.html