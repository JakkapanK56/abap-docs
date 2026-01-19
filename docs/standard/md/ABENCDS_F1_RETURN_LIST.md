---
title: "ABENCDS_F1_RETURN_LIST"
description: |
  ABENCDS_F1_RETURN_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_RETURN_LIST.htm"
abapFile: "ABENCDS_F1_RETURN_LIST.html"
keywords: ["if", "method", "class", "data", "types", "ABENCDS", "RETURN", "LIST"]
---

``... RETURNS \{ [`element1`](ABENCDS_F1_RETURN_LIST_ELEMENT.html); [`element2`](ABENCDS_F1_RETURN_LIST_ELEMENT.html); ...; \} ...``

Defines the elements of a [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html). The elements are specified in a semicolon-separated list `[element1](ABENCDS_F1_RETURN_LIST_ELEMENT.html); [element2](ABENCDS_F1_RETURN_LIST_ELEMENT.html); ...;` in curly brackets `\{ \}`. The final element must also be followed by a semicolon.

These elements have the following meaning:

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](ABENDDIC_BUILTIN_TYPES.html).

In a [client-dependent](ABENCDS_FUNC_CLIENT_HANDLING.html) CDS table function, the first element must be typed with the built-in dictionary type `CLNT`. This element is the client field of the CDS table function. It is a column of the tabular return value of the associated AMDP function implementation and is not a component of the structured data type represented by the table function.

In a [client-dependent](ABENCDS_FUNC_CLIENT_HANDLING.html) CDS table function, the structured data type of the table function and the row type of the return value of the AMDP function implementation are not compatible. The AMDP function implementation [cannot](ABENAMDP_FUNCTION_METHODS.html) be called as a regular function method in ABAP anyway, which means that no correspondingly structured target variable needs to be declared.

The class `CL_DEMO_AMDP_FUNCTION_TYPE` uses [RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) to show the following for various CDS table functions:

For client-dependent table functions, a client field is defined after `RETURNS`. This field is a column of the return value of the AMDP function implementation and is not part of the structured data type.

-   They determine the components of the structured data types represented by a CDS table function with respect to ABAP.
-   This structured data type is the row type of the tabular return value `result` of the [AMDP function implementation](ABENAMDP_FUNCTION_METHODS.html)\\ `amdp_function` specified after [`IMPLEMENTED BY METHOD`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html).

-   The components of the structured data type
-   The parameters of the associated AMDP function implementation
-   The row type of the return value of the associated AMDP function implementation

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_f1\_define\_table\_function.html