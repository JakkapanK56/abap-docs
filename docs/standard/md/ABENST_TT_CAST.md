---
title: "ABENST_TT_CAST"
description: |
  ABENST_TT_CAST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_CAST.htm"
abapFile: "ABENST_TT_CAST.html"
keywords: ["do", "if", "case", "data", "ABENST", "CAST"]
---

`<tt:cast [to-ref="node"|to-var="variable"]\           [ref="node"|var="variable"] />`

The `tt:cast` statement can be used to assign the content of one reference variable to another reference variable when the static type of the source variable is more general than the static type of the target variable. This is called a [downcast](ABENDOWN_CAST_GLOSRY.html).

The `tt:cast` statement is a special case of the [`tt:assign`](ABENST_TT_ASSIGN.html) statement, in which only reference variables can be declared as source fields and target fields. Reference variables can be declared as follows:

If the downcast fails because the static type of the target variable is more specific than the dynamic type of the source variable when the statement is executed, the ST program terminates with the `CX_ST_RUNTIME_ERROR` exception.

-   A node `node` declared in accordance with the [addressing rules](ABENST_ADDRESSING.html) and to which an ABAP reference variable is bound
-   A [variable](ABENST_TT_VARIABLE.html) or [parameter](ABENST_TT_PARAMETER.html)\\ `variable` defined as a reference variable using `tt:ref-type`.

abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html abenst\_assignments.html