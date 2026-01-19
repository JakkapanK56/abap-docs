---
title: "ABENCDS_LITERAL_V2"
description: |
  ABENCDS_LITERAL_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_LITERAL_V2.htm"
abapFile: "ABENCDS_LITERAL_V2.html"
keywords: ["select", "do", "if", "data", "types", "ABENCDS", "LITERAL"]
---

[CDS literals](ABENCDS_LITERAL_GLOSRY.html) can be used in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html).

In CDS, there are two different kinds of literals:

Rules for escaping in typed and untyped literals in ABAP CDS:

-   [Typed literals](ABENCDS_TYPED_LITERAL_V2.html) (cover most built-in types of the ABAP Dictionary)
-   [Untyped literals](ABENCDS_UNTYPED_LITERAL_V2.html) (character literals and numeric literals)

-   A single quote (') must be escaped

-   with a single quote: `'...''...'`
-   or with a backslash: `'...\\'...'`

-   A backslash (\\\\) must be escaped with a backslash: `'...\\\\\...'`

-   The [literal operator](ABENLITERAL_OPERATOR_GLOSRY.html) is not supported for CDS literals.
-   [Fixed domain values](ABENCDS_LITERAL_V1.html) are not supported in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html). However, if a CDS view entity selects data from another CDS entity with fixed domain values, then these elements with fixed domain values can be included in the current view entity.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html