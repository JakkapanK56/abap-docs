---
title: "ABENCONSTRUCTOR_EXPRESSION_REF"
description: |
  ABENCONSTRUCTOR_EXPRESSION_REF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSTRUCTOR_EXPRESSION_REF.htm"
abapFile: "ABENCONSTRUCTOR_EXPRESSION_REF.html"
keywords: ["do", "if", "case", "class", "data", "types", "internal-table", "ABENCONSTRUCTOR", "EXPRESSION", "REF"]
---

``... REF type( dobj |\ [`table_exp`](ABENTABLE_EXPRESSIONS.html) ) ...``

[1. `... REF type( dobj )`](#ABAP_ALTERNATIVE_1@2@)

[2. `... REF type( table_exp )`](#ABAP_ALTERNATIVE_2@2@)

A [constructor expression](ABENCONSTRUCTOR_EXPRESSIONS.html) with the reference operator `REF` creates either a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) that points to the operand `dobj` or controls a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`table_exp`](ABENTABLE_EXPRESSIONS.html).

Existing data objects and table expressions can be specified as an operand, but no other expressions or function calls.

If a data object `dobj` is specified as an operand, the operator `REF` works like the statement [`GET REFERENCE`](ABAPGET_REFERENCE.html) and creates a [data reference variable](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html) as a result that points to the specified data object `dobj`. `type` determines the [static type](ABENSTATIC_TYPE_GLOSRY.html) of the result. The following can be specified for `type`:

The parentheses must contain exactly one operand `dobj`. If offsets/lengths ([`+off(len)`](ABENOFFSET_LENGTH.html)) are specified, the data type `dobj` here cannot be `string` or `xstring`.

Filling of an internal table with the value operator `VALUE`, where the component `dref` is given a value using `REF`. This is an excerpt from the [executable example for the class `CL_ABAP_BROWSER`](ABENHTML_BROWSER_ABEXA.html). Other use cases can be found in the executable [examples of ADBC](ABENADBC_ABEXAS.html), where parameter bindings are used.

If a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html)\\ [`table_exp`](ABENTABLE_EXPRESSIONS.html) is specified as an operand, the operator `REF` controls the type of its result and enables a default value to be specified for unfound lines, as described in the related [section](ABENTABLE_EXP_RESULT.html).

The result of the operator `REF` is a data reference variable that points to the fifth line of the internal table `itab`.

-   A non-generic data type `dtype` that satisfies the rules of [upcasts in data references](ABENCONVERSION_REFERENCES_DATA.html).
-   The generic data type [`data`](ABENBUILT_IN_TYPES_GENERIC.html).
-   The `#` character for a data type that is determined by the following hierarchy:

-   If the data type required in an operand position is unique and known completely, the [operand type](ABENOPERAND_TYPE_GLOSRY.html) is used.
-   If the operand type cannot be derived from the context, the data type of `dobj` is used.
-   If the data type of `dobj` is not known statically, the generic type [`data`](ABENBUILT_IN_TYPES_GENERIC.html) is used.

-   The conversion operator `REF` is suitable for avoiding declarations of helper variables that are only necessary, for example, to specify data reference variables as actual parameters.
-   No empty parentheses can be specified after `REF`.

TYPES pict\_line(1022) TYPE x. \\n\\ \\nDATA pict TYPE STANDARD TABLE OF pict\_line WITH EMPTY KEY. \\nDATA ext\_data TYPE cl\_abap\_browser=>load\_tab. \\n\\ \\next\_data = VALUE #( ( name = 'PICT.GIF' \\n type = 'image' \\n dref = REF #( pict ) ) ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i >= 10 ( i \* 10 ) ). \\n\\ \\nFINAL(dref) = REF #( itab\[ 5 \] ). \\n\\ \\nout->write( dref->\* ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_references.html