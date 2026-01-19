---
title: "ABENNEWS-740-EXPRESSIONS"
description: |
  ABENNEWS-740-EXPRESSIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-740-EXPRESSIONS.htm"
abapFile: "ABENNEWS-740-EXPRESSIONS.html"
keywords: ["do", "if", "data", "types", "internal-table", "ABENNEWS", "740", "EXPRESSIONS"]
---

[1\. Inline Declarations](#ABAP_MODIFICATION_1@4@)

[2\. Constructor Expressions](#ABAP_MODIFICATION_2@4@)

[3\. Table Expressions](#ABAP_MODIFICATION_3@4@)

[4. New Built-In Function `ipow`](#ABAP_MODIFICATION_4@4@)

[5\. Writable Expressions](#ABAP_MODIFICATION_5@4@)

The new [declaration operators](ABENDECLARATION_OPERATOR_GLOSRY.html)\\ [`DATA`](ABENDATA_INLINE.html) and [`FIELD-SYMBOL`](ABENFIELD-SYMBOL_INLINE.html) make [inline declarations](ABENINLINE_DECLARATION_GLOSRY.html) possible in [declaration expressions](ABENDECLARATION_EXPRESSION_GLOSRY.html) in [declaration positions](ABENDECLARATION_POSITION_GLOSRY.html).

A new type of expression, [constructor expressions](ABENCONSTRUCTOR_EXPRESSIONS.html), uses [constructor operators](ABENCONSTRUCTOR_OPERATOR_GLOSRY.html) in [general expression positions](ABENGENERAL_EXPRESSION_POSITIONS.html) to construct results of specified types.

The new table expressions [`itab[ ... ]`](ABENTABLE_EXPRESSIONS.html) allow reads to be performed on internal tables in operand positions.

The new integer power function [`ipow`](ABENPOWER_FUNCTION.html) enables fields of any numeric type and with integer values to be raised to a power. The calculation type is determined by the base.

Some expressions are [writable expressions](ABENWRITABLE_EXPRESSION_GLOSRY.html) that can be specified in [result positions](ABENRESULT_POSITION_GLOSRY.html).

-   [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) creates objects
-   [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) creates values
-   [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html) gets references
-   [`EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html) performs a lossless assignment or calculation
-   [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) converts values
-   [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) performs an upcast or downcast
-   [`COND`](ABENCONDITIONAL_EXPRESSION_COND.html) and [`SWITCH`](ABENCONDITIONAL_EXPRESSION_SWITCH.html) enable conditional expressions

abenabap.html abennews.html abennews-740.html abennews-740\_sp02.html