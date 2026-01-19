---
title: "ABENCDS_PATH_EXPR_CARD_V1"
description: |
  ABENCDS_PATH_EXPR_CARD_V1 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_PATH_EXPR_CARD_V1.htm"
abapFile: "ABENCDS_PATH_EXPR_CARD_V1.html"
keywords: ["select", "if", "data", "ABENCDS", "PATH", "EXPR", "CARD"]
---

`...  1|*: ...`

Specifies the [cardinality](ABENCARDINALITY_GLOSRY.html) of the current CDS association:

The addition `1:` makes it possible to use filter conditions in path expressions, which are used in [`WHERE`](ABENCDS_WHERE_CLAUSE_V1.html) clauses or [`HAVING`](ABENCDS_HAVING_CLAUSE_V1.html) clauses. In a clause like this, it overwrites the [cardinality](ABENCARDINALITY_GLOSRY.html) of the [CDS association](ABENCDS_ASSOCIATION_V1.html). (The variant of the path expression can, however, be affected differently on certain database systems.)

The addition `1:` or `*:` cannot be specified as the only addition in square brackets.

The addition `1:` prevents a syntax error if a path specified with filter conditions or with a non-unique cardinality is used in a [`WHERE`](ABENCDS_WHERE_CLAUSE_V1.html) clause or [`HAVING`](ABENCDS_HAVING_CLAUSE_V1.html) clause. However, at runtime, there is no check to validate whether the condition achieves the required unique cardinality.

-   If the attribute `1:` is specified, the current CDS association is declared as unique.
-   If the attribute `*:` is specified, the current CDS association is declared as non-unique.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_path\_expression\_v1.html abencds\_path\_expr\_attr\_v1.html