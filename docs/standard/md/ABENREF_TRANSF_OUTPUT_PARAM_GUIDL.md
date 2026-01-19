---
title: "ABENREF_TRANSF_OUTPUT_PARAM_GUIDL"
description: |
  ABENREF_TRANSF_OUTPUT_PARAM_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENREF_TRANSF_OUTPUT_PARAM_GUIDL.htm"
abapFile: "ABENREF_TRANSF_OUTPUT_PARAM_GUIDL.html"
keywords: ["insert", "delete", "do", "if", "method", "class", "data", "internal-table", "ABENREF", "TRANSF", "OUTPUT", "PARAM", "GUIDL"]
---

When parameters are passed to a procedure by reference, this procedure directly uses the data object that has been passed as a parameter. Its value is consequently determined by the calling program of the procedure. Particular notice must be made of this behavior for `EXPORTING` parameters, whose value is (unlike the pass by value method) not initialized when the procedure is called. After the procedure has started, an output parameter that was passed by reference has the value of the supplied actual parameter.

**Use output parameters correctly with pass by reference**

Do not evaluate `EXPORTING` parameters that are passed by reference in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) until a value has been explicitly assigned.

The value of an output parameter that has been passed by reference is undefined from the perspective of the procedure, since cannot be evaluated within the procedure in a useful manner. Therefore, no assumptions can be made regarding the content of the parameter until the first value has been assigned to it.

If a parameter like this is an internal table or a string, a simple write is not sufficient. First, an initialization must be implemented. For example, if new lines are to be inserted in an internal table that is supposed to be produced by reference, its current content needs to be deleted first. Pass by reference means that it cannot be guaranteed that the table is actually empty when the procedure is started. The same applies to strings that are filled using concatenation operations within the procedure.

If the described properties are to be exploited for writable parameters that have been passed by reference in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)), that is, a read is to be performed prior to the write or an existing dynamic data object is to be extended, the [appropriate formal parameter type](ABENTYPE_FORMAL_PARAM_PROC_GUIDL.html) must be specified, that is, input/output parameter (`CHANGING` parameter).

Strictly speaking, optional output parameters that have been passed by reference must be initialized only if the parameter is bound to an actual parameter when called. This can be determined using the `IS SUPPLIED` query. The obsolete query, `IS REQUESTED`, in contrast, should no longer be used.

The following source code shows how an internal table that, for performance reasons, is implemented by reference is returned. For this reason, it cannot be declared as a `RETURNING` parameter. The tabular output parameter is explicitly initialized at the beginning of the method before new lines are inserted.

CLASS class DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS get\_some\_table \\n EXPORTING e\_some\_table TYPE table\_type. \\nENDCLASS. \\nCLASS class IMPLEMENTATION. \\n METHOD get\_some\_table. \\n DATA new\_line LIKE LINE OF e\_some\_table. \\n CLEAR e\_some\_table. \\n ... \\n INSERT new\_line INTO TABLE e\_some\_table. \\n ... \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abenmodularization\_unit\_gdl.html