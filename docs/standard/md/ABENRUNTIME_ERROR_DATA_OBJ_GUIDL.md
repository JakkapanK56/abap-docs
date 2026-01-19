---
title: "ABENRUNTIME_ERROR_DATA_OBJ_GUIDL"
description: |
  ABENRUNTIME_ERROR_DATA_OBJ_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENRUNTIME_ERROR_DATA_OBJ_GUIDL.htm"
abapFile: "ABENRUNTIME_ERROR_DATA_OBJ_GUIDL.html"
keywords: ["if", "try", "catch", "class", "data", "exception-handling", "ABENRUNTIME", "ERROR", "DATA", "OBJ", "GUIDL"]
---

Using data objects can cause runtime errors if the data object contains unsuitable content or the access to the data object is unsuitable. Examples:

**Prevent runtime errors when accessing data objects**

You need to prevent runtime errors that can occur when accessing data objects. Robust applications should always be programmed to avoid these errors.

If it is not possible to determine whether subsequent access causes errors by filling data objects appropriately, either the relevant properties must be checked before the data is accessed or possible exceptions (subclasses of `CX_SY_CONVERSION_ERROR` or `CX_SY_DATA_ACCESS_ERROR`) must be caught during data access.

The following source code illustrates a typical situation that can easily cause a runtime error if the subarea defined by `offset` and `length` is not defined in `text`.

The following two pieces of source code illustrate how the above example can be changed to avoid runtime errors using prevention or exception handling.

-   Assigning values outside the value range of a target variable
-   Using values that cannot be converted to the required type. In other words, a conversion rule exists but the source field content is not convertible. For example, you are trying to assign a character field (with content that cannot be interpreted as a number) to a numeric field.
-   Access to parts of data objects (substring access). Either offset/length access or the use of built-in subfunctions such as `substring`.

DATA text TYPE string. \\n... \\nsubstring = text+offset(length). \\n... IF strlen( text ) > offset + length. \\n substring = text+offset(length). \\nELSE. \\n ... \\nENDIF.TRY. \\n substring = text+offset(length). \\n CATCH cx\_sy\_range\_out\_of\_bounds. \\n ... \\nENDTRY. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenassignment\_access\_gdl.html