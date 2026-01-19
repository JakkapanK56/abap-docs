---
title: "ABAPCALL_METHOD_DYNAMIC"
description: |
  ABAPCALL_METHOD_DYNAMIC - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCALL_METHOD_DYNAMIC.htm"
abapFile: "ABAPCALL_METHOD_DYNAMIC.html"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "ABAPCALL", "METHOD", "DYNAMIC"]
---

``CALL METHOD [`dynamic_meth`](ABAPCALL_METHOD_METH_IDENT_DYNA.html)\ \{\ [`parameter_list`](ABAPCALL_METHOD_PARAMETER_LIST.html)``\\ 
                         ``|\ [`parameter_tables`](ABAPCALL_METHOD_PARAMETER_TABLES.html)\ \}.``

This statement calls the method specified dynamically in [`dynamic_meth`](ABAPCALL_METHOD_METH_IDENT_DYNA.html) (Dynamic Invoke). Actual parameters are assigned to the formal parameters of the method, either statically using [`parameter_list`](ABAPCALL_METHOD_PARAMETER_LIST.html) or dynamically using [`parameter_tables`](ABAPCALL_METHOD_PARAMETER_TABLES.html).

Each method call sets the system field `sy-subrc` to 0 in the moment the method is called. Handling [non-class-based exceptions](ABENEXCEPTIONS_NON_CLASS.html) can change this value.

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, this a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class `CL_ABAP_DYN_PRG`, for example, can be used to do this.

The system field `sy-subrc` is set to 0 when a method is called. If a [non-class-based exception](ABENEXCEPTIONS_NON_CLASS.html) is raised and is handled by then assigning a value, `sy-subrc` is set to this value.

Dynamic call. The names of the class and method are specified in the strings `class` and `meth`. The interface parameters are passed using the internal table `ptab` and return values are assigned to the exceptions of the method using the table `etab`. Exceptions that are raised at the method call itself are handled in a [`TRY`](ABAPTRY.html) control structure with statement [`CATCH`](ABAPTRY.html).

`CX_SY_NO_HANDLER`

`CX_SY_DYN_CALL_EXCP_NOT_FOUND`

`CX_SY_DYN_CALL_ILLEGAL_CLASS`

`CX_SY_DYN_CALL_ILLEGAL_METHOD`

`CX_SY_DYN_CALL_ILLEGAL_TYPE`

`CX_SY_DYN_CALL_PARAM_MISSING`

`CX_SY_DYN_CALL_PARAM_NOT_FOUND`

`CX_SY_REF_IS_INITIAL`

-   In the dynamic method call, the parameters are not passed in parentheses. The syntax of the dynamic method call is like that of a [function module call](ABAPCALL_FUNCTION_GENERAL.html).
-   The statement `CALL METHOD` should now only be used for the dynamic method call. It is unnecessary, and therefore [obsolete](ABAPCALL_METHOD_STATIC.html), for the [static method call](ABENMETHOD_CALLS_STATIC.html).

-   See [Class-Based Exceptions in Procedures](ABENEXCEPTIONS_PROCEDURES.html).
    *Runtime error:*\\ `UNCAUGHT_EXCEPTION`

-   *Cause:* Exception does not exist
    *Runtime error:*\\ `DYN_CALL_METH_EXCP_NOT_FOUND`

-   *Cause:* Specified class does not exist
    *Runtime error:*\\ `DYN_CALL_METH_CLASS_NOT_FOUND`

-   *Cause:* Method cannot be accessed.
    *Runtime error:*\\ `CALL_METHOD_NOT_ACCESSIBLE`
-   *Cause:* The called method is not yet implemented.
    *Runtime error:*\\ `CALL_METHOD_NOT_IMPLEMENTED`
-   *Cause:* Call of the static constructor
    *Runtime error:*\\ `DYN_CALL_METH_CLASSCONSTRUCTOR`
-   *Cause:* Call of the instance constructor
    *Runtime error:*\\ `DYN_CALL_METH_CONSTRUCTOR`
-   *Cause:* Method does not exist
    *Runtime error:*\\ `DYN_CALL_METH_NOT_FOUND`
-   *Cause:* Method is not static
    *Runtime error:*\\ `DYN_CALL_METH_NO_CLASS_METHOD`
-   *Cause:* Call of a non-visible method
    *Runtime error:*\\ `DYN_CALL_METH_PRIVATE`
-   *Cause:* Call of a non-visible method
    *Runtime error:*\\ `DYN_CALL_METH_PROTECTED`

-   *Cause:* Type conflict during method call.
    *Runtime error:*\\ `CALL_METHOD_CONFLICT_GEN_TYPE`
-   *Cause:* Type conflict during method call.
    *Runtime error:*\\ `CALL_METHOD_CONFLICT_TAB_TYPE`
-   *Cause:* Type conflict during method call.
    *Runtime error:*\\ `CALL_METHOD_CONFLICT_TYPE`
-   *Cause:* Incorrect parameter type
    *Runtime error:*\\ `DYN_CALL_METH_PARAM_KIND`
-   *Cause:* Actual parameter cannot be filled
    *Runtime error:*\\ `DYN_CALL_METH_PARAM_LITL_MOVE`
-   *Cause:* Incorrect table type for a parameter
    *Runtime error:*\\ `DYN_CALL_METH_PARAM_TAB_TYPE`
-   *Cause:* Incorrect parameter type
    *Runtime error:*\\ `DYN_CALL_METH_PARAM_TYPE`

-   *Cause:* Missing actual parameter
    *Runtime error:*\\ `DYN_CALL_METH_PARAM_MISSING`
-   *Cause:* Parameter reference is empty
    *Runtime error:*\\ `DYN_CALL_METH_PARREF_INITIAL`

-   *Cause:* Incorrect parameter name
    *Runtime error:*\\ `DYN_CALL_METH_PARAM_NOT_FOUND`

-   *Cause:* Reference variable is initial
    *Runtime error:*\\ `DYN_CALL_METH_REF_IS_INITIAL`\\
    

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA: line TYPE c LENGTH 80, \\n text\_tab LIKE STANDARD TABLE OF line, \\n filename TYPE string, \\n filetype TYPE c LENGTH 10, \\n fleng TYPE i. \\n\\ \\nDATA: meth TYPE string, \\n class TYPE string, \\n ptab TYPE abap\_parmbind\_tab, \\n etab TYPE abap\_excpbind\_tab. \\n\\ \\nDATA: exc\_ref TYPE REF TO cx\_sy\_dyn\_call\_error. \\n\\ \\nclass = 'CL\_GUI\_FRONTEND\_SERVICES'. \\nmeth = 'GUI\_DOWNLOAD'. \\nfilename = 'c:\\\\temp\\\\text.txt'. \\nfiletype = 'ASC'. \\n\\ \\nptab = VALUE #( ( name = 'FILENAME' \\n kind = cl\_abap\_objectdescr=>exporting \\n value = REF #( filename ) ) \\n ( name = 'FILETYPE' \\n kind = cl\_abap\_objectdescr=>exporting \\n value = REF #( filetype ) ) \\n ( name = 'DATA\_TAB' \\n kind = cl\_abap\_objectdescr=>changing \\n value = REF #( text\_tab ) ) \\n ( name = 'FILELENGTH' \\n kind = cl\_abap\_objectdescr=>importing \\n value = REF #( fleng ) ) ). \\n\\ \\netab = VALUE #( ( name = 'OTHERS' value = 4 ) ). \\n\\ \\nTRY. \\n CALL METHOD (class)=>(meth) \\n PARAMETER-TABLE \\n ptab \\n EXCEPTION-TABLE \\n etab. \\n CASE sy-subrc. \\n WHEN 1. \\n ... \\n ... \\n ENDCASE. \\n CATCH cx\_sy\_dyn\_call\_error INTO exc\_ref. \\n out->write( exc\_ref->get\_text( ) ). \\nENDTRY. \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abenmethod\_calls.html abenmethod\_calls\_dynamic.html