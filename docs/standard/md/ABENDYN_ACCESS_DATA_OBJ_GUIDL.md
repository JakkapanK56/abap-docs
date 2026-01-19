---
title: "ABENDYN_ACCESS_DATA_OBJ_GUIDL"
description: |
  ABENDYN_ACCESS_DATA_OBJ_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDYN_ACCESS_DATA_OBJ_GUIDL.htm"
abapFile: "ABENDYN_ACCESS_DATA_OBJ_GUIDL.html"
keywords: ["if", "method", "class", "data", "internal-table", "field-symbol", "ABENDYN", "ACCESS", "DATA", "OBJ", "GUIDL"]
---

Field symbols and data references are used to access data objects whose name and attributes are not known until runtime.

Data reference variables can be [declared](ABENDECLARATION_VARIABLES_GUIDL.html) in the same context as all other data objects, especially also as attributes of classes. Field symbols, in contrast, can only be declared within procedures ([methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) or in the global declaration part. However, the latter is [no longer allowed](ABENDECLARATION_VARIABLES_GUIDL.html).

**Use field symbols and data references in appropriate ways**

Use field symbols and data references for the purpose that best matches their semantics:

Both field symbols and data references can be understood as pointers to memory areas. The main difference is in the different access semantics.

Actually, data reference variables can be better used in programs that are based on [ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.html) because they have the same semantics as object reference variables and therefore represent a more [modern](ABENMODERN_ABAP_GUIDL.html) programming concept.

-   **Field symbols**
-   A field symbol is a symbolic name for a data object declared with `FIELD-SYMBOLS`, to which memory areas can be assigned using the `ASSIGN` statement or, if internal tables are processed, using the `ASSIGNING` addition. Field symbols are typed either generically or completely and can be used like a data object in all appropriate operand positions. For typing, the same rules apply as for [formal parameters of procedures](ABENTYPE_FORMAL_PARAM_GUIDL.html). When accessing field symbols, value semantics applies, which means that the assigned memory content is addressed directly. Field symbols are thus always handled like dereferenced pointers.
-   **Data references**
-   A data reference is the content of a data reference variable that is declared using `REF TO` and points to any data objects or parts of data objects. Data references are needed to create anonymous data objects using `CREATE DATA` or [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html). They can also be generated for existing data objects, however, using the statement `GET REFERENCE`, the reference operator [`REF`](ABENCONSTRUCTOR_EXPRESSION_REF.html), or, if internal tables are processed, using the `REFERENCE INTO` addition. A data reference variable is either completely generic or completely typed. When accessing data reference variables, reference semantics applies, which means that the data reference itself is addressed. To access the referenced memory content, a data reference variable must be dereferenced explicitly using the dereferencing operator (->\*).

-   Field symbols for value access (value semantics)
-   Data references for working with the references (reference semantics)

-   Due to their value semantics, field symbols should always be used if the focus is on the access to referenced data.
-   Due to their reference semantics, data references are to be used if the focus is on the explicit handling of references to data objects. Data references are vital for creating anonymous data objects or complex dynamic data structures, such as trees or chained lists in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) or in the shared objects memory. Furthermore, data references are the preferred element for implementing explicit sharing between any data objects, and for passing pointers to data objects to procedures.

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendynamic\_prog\_technique\_gdl.html