---
title: "Typing of Formal Parameters - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_formal_param_guidl.htm"
abapFile: "abentype_formal_param_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Modularization units](ABENMODULARIZATION_UNIT_GUIDL.md) → 

Typing of Formal Parameters

Background

The typing of formal parameters can be full or generic. Formal parameters of methods must be, and formal parameters of function modules and subroutines should be, explicitly typed using the TYPE or LIKE addition. When actual parameters are bound to formal parameters, the system checks whether the data type of the actual parameter matches the typing of the formal parameter.

-   Full typing completely defines the data type of a formal parameter and applies to both dynamic access and static access to the formal parameter.

-   Generic typing does not define the data type of a formal parameter in full. Instead, the actual data type of the supplied actual parameter is used. The attributes of the actual parameter apply to dynamic access performed on formal parameters like this. The attributes defined by the typing apply to static access.

For generic typing, a set of built-in generic types is available in ABAP, which are only intended for the typing of formal parameters and field symbols. Using them in any other way can lead either to errors or to missing attributes being filled with default values. The generic types are: any, any table, c, clike, csequence, data, decfloat, hashed table, index table, n, numeric, object, simple, sorted table, standard table, table, x, and xsequence. Self-defined table types without fully specified table keys are also generic.

Rule

Be as specific as possible when typing formal parameters

Be only as generic as necessary when typing formal parameters. Fully generic types (any) should be the exception rather than the rule. When used, a formal parameter must be compliant with all possible fixed types.

Details

Absolute type security within a procedure can only be achieved using full typing. It should always be used when providing a generic service is not a defined goal. It is much easier to carry out [tests](ABENCORRECTNESS_QUALITY_GUIDL.md "Guideline") for non-generic services than for generic services.

A generically typed procedure interface usually involves more implementation effort within the procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")) to avoid [runtime errors](ABENRUNTIME_ERROR_DYN_PROC_GUIDL.md "Guideline"). Therefore, use the following principle when providing generic interfaces: as little generic typing as possible and as much generic typing as necessary. You should use specific generic types, such as numeric or csequence, instead of any or data, for example, if services are involved that are supposed to process numeric values or character strings. If csequence is used, the potential fixed types c and string must display different behavior with respect to trailing blanks or the potential numeric types in calculations for numeric must produce different [calculation types](ABENCALCULATION_TYPE_GLOSRY.md "Glossary Entry"). More specifically, when existing typings are generalized, it may be necessary to modify the implementation accordingly.

Generic typing can be a pitfall if you are not aware that you have used generic typing instead of full typing, because only the technical type attributes are checked when an actual parameter is connected, but no component names, for example. This can lead to different behavior than expected.

Notes

-   These statements about typing apply equally to [field symbols](ABENDYN_ACCESS_DATA_OBJ_GUIDL.md "Guideline").

-   In typings of formal parameters with the generic type [data](ABENBUILT_IN_TYPES_GENERIC.md), it should be noted that no [numeric functions](ABENMATHEMATICAL_FUNKTION_GLOSRY.md "Glossary Entry"), no [description functions](ABENDESCRIPTION_FUNCTION_GLOSRY.md "Glossary Entry"), and no [arithmetic expressions](ABENARITHMETIC_EXPRESSION_GLOSRY.md "Glossary Entry") can be passed to these parameters. This restriction can be bypassed by applying the [conversion operator](ABENCONVERSION_OPERATOR_GLOSRY.md "Glossary Entry") [CONV](ABENCONSTRUCTOR_EXPRESSION_CONV.md) to the actual parameter. This restriction does not apply to the generic type any, however, which means that, if required, a typing with the generic type any is recommended.

Bad Example

The following method shows different behavior when a blank is passed as a string of the type string or as a text field of the type c.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING flag TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF flag = abap\_false.
      ...
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Good Example

Using the built-in function [condense](ABENCONDENSE_FUNCTIONS.md) produces the same behavior when a blank is passed, regardless of the fixed type.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING flag TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    IF condense( flag ) = abap\_false.
      ...
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Bad Example

The example in the following source code shows the trap you can fall into, particularly when working with table types, if the table key is not specified in full their declaration (in a program or in ABAP Dictionary). Due to the missing key specification, the table type that is used to type the formal parameter of sort\_itab is generic. While the first static sort is successful, the second SORT statement fails and triggers a runtime error. For the dynamic component specification, the attributes of the actual parameter apply to the formal parameter, and the actual parameter does not have the col2 component (this can also be tracked in the ABAP Debugger).

CLASS class DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF struc,
              col1 TYPE type1,
              col2 TYPE type2,
           END OF struc,
           itab TYPE STANDARD TABLE OF struc.
    METHODS: main,
             sort\_itab CHANGING c\_itab TYPE itab.
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF struc,
             col1 TYPE type1,
             col3 TYPE type2,
           END OF struc.
    DATA itab TYPE STANDARD TABLE OF struc
              WITH NON-UNIQUE KEY col1 col3.
              ...
     sort\_itab( CHANGING c\_itab = itab ).
  ENDMETHOD.
  METHOD sort\_itab.
     SORT c\_itab BY col1 col2.
     SORT c\_itab BY ('COL1') ('COL2'). "<- Runtime error!
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code shows a very simple correction of the typing in the above example. Because the primary table key is specified in full, the type used is no longer generic, and dynamic sorts work like static sorts.

...
itab TYPE STANDARD TABLE OF struc
     WITH NON-UNIQUE KEY col1 col2.
...
