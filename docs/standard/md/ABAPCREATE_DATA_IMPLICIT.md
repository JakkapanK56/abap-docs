---
title: "ABAPCREATE_DATA_IMPLICIT"
description: |
  ABAPCREATE_DATA_IMPLICIT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCREATE_DATA_IMPLICIT.htm"
abapFile: "ABAPCREATE_DATA_IMPLICIT.html"
keywords: ["select", "if", "data", "ABAPCREATE", "DATA", "IMPLICIT"]
---

[Short Reference](ABAPCREATE_DATA_SHORTREF.html)

``CREATE DATA dref [[`area_handle`](ABAPCREATE_DATA_AREA_HANDLE.html)].``

Creation of an anonymous data object with an implicit type. If neither of the additions `TYPE` or `LIKE` are specified, the data reference variable `dref` must be completely typed. The data object is then created with the static data type of the data reference variable.

When the character `#` is used in an operand position with the operand type of a data reference variable, the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) works like the statement `CREATE DATA dref`.

Creation of an anonymous data object of the type `SCARR` from the ABAP Dictionary. The type is implicitly determined using the static data type of the data reference variable.

[Creating Data Objects with Implicit Type](ABENCREATE_DATA_IMPLICIT_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dref TYPE REF TO scarr. \\n\\ \\nCREATE DATA dref. \\n\\ \\nSELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = 'LH' \\n INTO @dref->\*. \\n\\ \\nout->write( |\\{ dref->carrid \\}, \\{ dref->carrname \\}| ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html