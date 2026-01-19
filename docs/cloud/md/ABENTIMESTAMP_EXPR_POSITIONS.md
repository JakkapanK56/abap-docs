---
title: "ABENTIMESTAMP_EXPR_POSITIONS"
description: |
  ABENTIMESTAMP_EXPR_POSITIONS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTIMESTAMP_EXPR_POSITIONS.htm"
abapFile: "ABENTIMESTAMP_EXPR_POSITIONS.html"
keywords: ["if", "method", "data", "ABENTIMESTAMP", "EXPR", "POSITIONS"]
---

Time-stamp-like expression positions are [read positions](ABENREAD_POSITION_GLOSRY.html) where [time stamp fields](ABENTIMESTAMP_FIELD_GLOSRY.html) and [constructor expressions](ABENCONSTRUCTOR_EXPRESSION_GLOSRY.html), [table expressions](ABENTABLE_EXPRESSION_GLOSRY.html), and [built-in functions](ABENBUILTIN_FUNCTION_GLOSRY.html) can be specified, or [functional method calls](ABENFUNCTIONAL_METHOD_CALL_GLOSRY.html) and [method chainings](ABENMETHOD_CHAINING_GLOSRY.html) whose return value has a [time stamp type](ABENTIMESTAMP_TYPE_GLOSRY.html). The following time-stamp-like expression positions exist:

Specification of a functional method call and a time stamp function as arguments of the time stamp function `utclong_diff`.

-   Time-stamp-like arguments in time stamp functions

-   Operand `time_stamp` of the function
-   [`utclong_add( val = time_stamp ... )`](ABENUTCLONG_ADD.html)
-   Operands `time_stamp2` and `time_stamp1` of the function
-   [`utclong_diff( high = time_stamp2 low = time_stamp1 )`](ABENUTCLONG_DIFF.html)

-   Functional operand positions in statements for time stamps

-   Operand `time_stamp` of the statement
-   [`CONVERT UTCLONG time_stamp TIME ZONE tz INTO ...`](ABAPCONVERT_UTCLONG.html)

DATA ts TYPE timestampl. \\nGET TIME STAMP FIELD ts. \\n\\ \\ncl\_demo\_output=>display( \\n utclong\_diff( \\n low = cl\_abap\_tstmp=>tstmp2utclong( timestamp = ts ) \\n high = utclong\_add( val = utclong\_current( ) \\n hours = 1 ) ) ). abenabap.html abenabap\_reference.html abenabap\_syntax.html abenabap\_statements.html abenoperand\_positions.html abenexpression\_positions.html abenexpression\_positions\_read.html