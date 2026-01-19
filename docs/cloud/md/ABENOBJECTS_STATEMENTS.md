---
title: "ABENOBJECTS_STATEMENTS"
description: |
  ABENOBJECTS_STATEMENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENOBJECTS_STATEMENTS.htm"
abapFile: "ABENOBJECTS_STATEMENTS.html"
keywords: ["do", "if", "case", "class", "data", "ABENOBJECTS", "STATEMENTS"]
---

A data object is an instance of a data type and occupies as much memory space as is allowed by its type. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly in their declaration as [named data objects](ABENNAMED_DATA_OBJECT_GLOSRY.html) or explicitly as [anonymous data objects](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) using [`CREATE DATA`](ABAPCREATE_DATA.html) or the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html).

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the technical properties of the data object completely. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as a property of the data object and is called a [bound data type](ABENBOUND_DATA_TYPE_GLOSRY.html).

For more information about data objects, see [Data Objects](ABENDATA_OBJECTS.html).

-   The following are data objects that are not declared using keywords:

-   [Literals](ABENLITERAL.html) are data objects that are declared in operand positions using literal source code.
-   [Text symbols](ABENTEXT_SYMBOLS.html) are character-like constant data objects that are declared outside the program.

-   Declaration of variables and constants in every context:

-   [`DATA`](ABAPDATA.html)
-   [`CONSTANTS`](ABAPCONSTANTS.html)

-   Declaration of static attributes in classes:

-   [`CLASS-DATA`](ABAPCLASS-DATA.html)

-   Declaration of static variables in procedures:

-   [`STATICS`](ABAPSTATICS.html)

abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html