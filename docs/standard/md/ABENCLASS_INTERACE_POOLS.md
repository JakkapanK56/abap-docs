---
title: "ABENCLASS_INTERACE_POOLS"
description: |
  ABENCLASS_INTERACE_POOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLASS_INTERACE_POOLS.htm"
abapFile: "ABENCLASS_INTERACE_POOLS.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENCLASS", "INTERACE", "POOLS"]
---

Class pools and interface pools are the ABAP programs where [global classes](ABENGLOBAL_CLASS_GLOSRY.html) and [global interfaces](ABENGLOBAL_INTERFACE_GLOSRY.html) of the class library are defined. They are created in the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) or using the [Class Builder](ABENCLASS_BUILDER_GLOSRY.html) tool in the [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).

These statements are generated in the master program when a class or interface pool is created.

Each class pool or interface pool can only contain one global class or one global interface. The global class or global interfaces are declared using the following statements:

In addition to the declaration of the global class, a class pool can only contain the following statements:

Locally defined types, classes, and interfaces in class pools can be used in the following ways:

The obsolete statement [`TYPE-POOLS`](ABAPTYPE-POOLS.html) is also possible but ignored.

In addition to the declaration of the global interface, an interface pool cannot contain its own declarations or implementations.

The obsolete statement [`TYPE-POOLS`](ABAPTYPE-POOLS.html) is also possible but ignored.

Like any other ABAP program, class and interface pools consist of a global declaration part for declarations and an implementation part for implementations (procedures).

The [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) or Class Builder organize the various declarations and implementations of a class or interface pool in [include programs](ABENINCLUDE_PROGRAM_GLOSRY.html) whose names are usually not visible to the developer. Include programs exist for:

The actual organization of class and interface pools in include programs and the naming conventions for the includes can be found under [`CLASS-POOL`](ABAPCLASS-POOL.html) and [`INTERFACE-POOL`](ABAPCLASS-POOL.html).

Apart from the statements listed above, no statements other than `CLASS - ENDCLASS` and `INTERFACE - ENDINTERFACE` are required and are therefore not allowed in class pools. The [stricter syntax](ABENABAP_OBJECTS_STRICT.html) of ABAP Objects applies to all allowed statements.

The following restrictions are particularly important:

-   A program of [program type](ABENPROGRAM_TYPE_GLOSRY.html) class pool is introduced using the statement [`CLASS-POOL`](ABAPCLASS-POOL.html).
-   A program of [program type](ABENPROGRAM_TYPE_GLOSRY.html) interface pool is introduced using the statement [`INTERFACE-POOL`](ABAPINTERFACE-POOL.html).

-   [`CLASS ... PUBLIC.` ... `ENDCLASS.`](ABAPCLASS.html)
-   [`INTERFACE ... PUBLIC.` ... `ENDINTERFACE.`](ABAPINTERFACE.html)

-   Declaration of local data types using the statement [`TYPES`](ABAPTYPES.html). These data types can be used by the global class in the private visibility section and in the implementation part.
-   Declaration of local constants using the statement [`CONSTANTS`](ABAPCONSTANTS.html). These data types can be used by the global class in the private visibility section and in the implementation part.
-   Declaration of local interfaces using the statements [`INTERFACE` ... `ENDINTERFACE`](ABAPINTERFACE.html). These can be used by the global class in the private visibility section and in the implementation part.
-   Declaration and implementation of local classes using the statements [`CLASS` ... `ENDCLASS`](ABAPCLASS.html). These can be used by the global class in the private visibility section and in the implementation part.
-   Definition of [macros](ABENMACRO_GLOSRY.html) using [`DEFINE` ... `END-OF-DEFINITION`](ABAPDEFINE.html). These macros can be used by the global class in the implementation part.

-   Only the methods of the global class access the local declarations and implementations in the program. These provide auxiliary methods, for example, which should not be visible in the interface of the global class. This is the most common scenario. Any changes made to local declarations in the program do not affect the interface of the global class.
-   Apart from the methods of the global class, declarations in the private visibility section of the class also refer to the local declarations in the program. This is a more unusual scenario, in which changes made to the local declarations affect the interface of the global class and [subclasses](ABENSUBCLASS_GLOSRY.html), and [friends](ABENFRIEND_GLOSRY.html) of the global class are recompiled before the next execution.

-   The global declaration part of a class pool can therefore contain the declarations of local data types, local interfaces, and local classes, in addition to the actual declaration part of the global class. The implementation part of a class pool can contain the implementation parts of local classes in addition to the implementation part of the global class.
-   The global declaration part of an interface pool can only contain the declaration of the global interface and the implementation part of an interface pool is always empty.

-   Each visibility section in the declaration part of the global class
-   Each implementation of a method of the global class
-   Local declarations and implementations ([CCIMP include](ABENCCIMP_GLOSRY.html) and [CCDEF include](ABENCCDEF_GLOSRY.html)).
-   Test classes in ABAP Unit

-   No processing blocks except methods
-   Event blocks such as `START-OF-SELECTION`, `AT SELECTION-SCREEN`,`GET`, or `AT LINE-SELECTION` and dialog modules defined by `MODULE - ENDMODULE` are not allowed. This means that runtime framework events cannot be processed. ABAP Objects has its own event concept for this. Neither [function modules](ABENFUNCTION_MODULE_GLOSRY.html) nor [subroutines](ABENSUBROUTINE_GLOSRY.html) can be defined using `FUNCTION - ENDFUNCTION` or `FORM - ENDFORM`. The methods of a class pool can still call external function modules and subroutines in addition methods.
-   No interface work areas to other programs
-   The statements `TABLES` and `NODES` and the addition `COMMON PART` of the `DATA` statement are not possible. This means that class and interface pools do not support any global data areas across programs within an [internal session](ABENINTERNAL_SESSION_GLOSRY.html).
-   No own [dynpros](ABENDYNPRO_GLOSRY.html)
-   Screen processing as performed in other ABAP programs is not possible. No [dynpros](ABENDYNPRO_GLOSRY.html) can be defined in a class pool or interface pool. If classic dynpros, including [selection screens](ABENSELECTION_SCREEN_GLOSRY.html), are required, it is best to encapsulate them in [function pools](ABENFUNCTION_POOL_GLOSRY.html). It is recommended that other suitable output media instead of classic lists are used. For tabular list output, the classes of the SAP List Viewer (ALV), such as `CL_SALV_TABLE`, should be used. For simple text output, wrappers of the browser control, such as dynamic documents or text edit control wrappers, should be used.
-   No processing of extracts
-   [Extract data sets](ABENEXTRACT_DATASET_GLOSRY.html) cannot be processed in global classes since the defining statement [`FIELD-GROUPS`](ABAPFIELD-GROUPS.html) is forbidden in class or interface pools.

abenabap.html abenabap\_reference.html abenabap\_objects.html abenabap\_objects\_statements.html