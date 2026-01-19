---
title: "ABENTYPING_CHECK_GENERAL"
description: |
  ABENTYPING_CHECK_GENERAL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTYPING_CHECK_GENERAL.htm"
abapFile: "ABENTYPING_CHECK_GENERAL.html"
keywords: ["do", "if", "case", "method", "data", "types", "internal-table", "field-symbol", "ABENTYPING", "CHECK", "GENERAL"]
---

The general rules for checking the typing apply strictly to:

The general rules for checking the typing are:

-   The assignment of all data objects to [field symbols](ABENFIELD_SYMBOL_GLOSRY.html)
-   The binding of named data objects to [input](ABENINPUT_PARAMETER_GLOSRY.html), [input/output](ABENINPUT_OUTPUT_PARAMETER_GLOSRY.html), and [output parameters](ABENOUTPUT_PARAMETER_GLOSRY.html) for procedures

-   If the assignment is made to generically typed field symbols or formal parameters, the system checks whether the [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) of the assigned data object are a subset of the generic type. The type properties that are not defined by typing are inherited from the actual parameter.
-   In assignments to completely typed field symbols or formal parameters, the technical properties of the data type of the assigned data object must correspond exactly to the typing. In assignments to field symbols or formal parameters typed with [enumerated types](ABAPTYPES_ENUM.html), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.
-   The result of the typing check when actual parameters are passed to formal parameters is independent of the pass by type. In a [pass by value](ABENPASS_BY_VALUE_GLOSRY.html), the check for [pass by reference](ABENPASS_BY_REFERENCE_GLOSRY.html) is always carried out, even though this can be stricter than necessary in individual cases.
-   If reference variables are passed, [upcasts](ABENUP_CAST_GLOSRY.html) are possible but [downcasts](ABENDOWN_CAST_GLOSRY.html) are not. If actual parameters are passed to input parameters typed as reference variables, an [upcast](ABENUP_CAST_GLOSRY.html) is only possible if there is no change of content within the procedure.
-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.
-   In assignments to generically and completely typed field symbols or formal parameters, only the [technical type properties](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) are checked. The following properties are not checked:

-   Names of structure components (but the names of [mesh nodes](ABENMESH_NODE_GLOSRY.html) and [mesh associations](ABENMESH_ASSOCIATION_GLOSRY.html) are checked).
-   Semantic properties of data types defined in the ABAP Dictionary (conversion exits, documentation, and so on)
-   [Initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html) of internal tables

-   If generally typed formal parameters or field symbols are accessed dynamically, these properties are inherited from the type of the actual parameter. In static access to generically typed formal parameters or field symbols, these properties are inherited from the typing of the formal parameter.

-   The constructor operators [`CONV`](ABENCONSTRUCTOR_EXPRESSION_CONV.html) and [`CAST`](ABENCONSTRUCTOR_EXPRESSION_CAST.html) are well suited to convert or cast invalid actual parameters to the type of a formal parameter.
-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules, the typing is only checked at the time of the assignment, that is, at runtime. In the case of completely typed field symbols and formal parameters of methods, the check is performed by the [syntax check](ABENSYNTAX_CHECK_GLOSRY.html).

abenabap.html abenabap\_reference.html abendeclarations.html abentyping.html abentyping\_check.html