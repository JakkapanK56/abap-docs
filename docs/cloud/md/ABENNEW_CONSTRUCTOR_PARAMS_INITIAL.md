---
title: "If no parameter is specified,"
description: |
  This is possible for every non-generic data type `dtype`. The instance constructor of a class `class` can either have only optional input parameters or no input parameters at all. The `#` symbol can stand for corresponding types. If `dtype` or `#` stand for an enumerated type(ABENENUM_TYPE_GLOSRY.
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEW_CONSTRUCTOR_PARAMS_INITIAL.htm"
abapFile: "ABENNEW_CONSTRUCTOR_PARAMS_INITIAL.html"
keywords: ["if", "class", "data", "types", "internal-table", "ABENNEW", "CONSTRUCTOR", "PARAMS", "INITIAL"]
---

`... NEW dtype|class|#( ) ...`

If no parameter is specified,

This is possible for every non-generic data type `dtype`. The instance constructor of a class `class` can either have only optional input parameters or no input parameters at all. The `#` symbol can stand for corresponding types.

If `dtype` or `#` stand for an [enumerated type](ABENENUM_TYPE_GLOSRY.html), its initial value is created according to its [base type](ABENBASE_TYPE_GLOSRY.html).

After the following program section is executed, `dref` points to an empty internal table with the line type `T100`. Both constructor expressions have the same function.

-   an anonymous data object retains its type-specific initial value,
-   no values are passed to the instance constructor of an object.

TYPES t\_itab TYPE TABLE OF t100 WITH EMPTY KEY. \\n\\ \\nDATA dref TYPE REF TO t\_itab. \\n\\ \\ndref = NEW #( ). \\ndref = NEW t\_itab( ). abenabap.html abenabap\_reference.html abencreate\_objects.html abenconstructor\_expression\_new.html