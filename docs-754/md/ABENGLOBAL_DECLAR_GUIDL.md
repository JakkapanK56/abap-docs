---
title: "Global Declarations of a Program - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_declar_guidl.htm"
abapFile: "abenglobal_declar_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Program Structure and Procedure Structure](ABENPROGR_PROC_STRUCTURE_GUIDL.md) → 

Global Declarations of a Program

Background

Each ABAP program has a global declaration part where data types, interfaces, classes, and data objects that are visible throughout the program can be declared.

From a technical viewpoint, the global declaration part consists of all declarations that cannot be assigned to a more local context (class, procedure). All declarations implemented in processing blocks without their own contexts (in event blocks and dialog modules) and declarations declared between completed processing blocks are assigned to the global context. Event blocks of GET and AT SELECTION-SCREEN events are exceptions. Variables declared here are only valid in the event block.

In an ABAP statement, it is only ever possible to refer to the previous declarations of the currently visible contexts.

Rule

Implement global declarations centrally

Place the global declaration part of a program at a central, context-related point at the beginning of the program.

Details

The global declaration part should only ever be the area between the introductory statement of an ABAP program and the first implementation. This the only place where global declarations should be made in a meaningful order. This ensures that the declarations intended for global use can really be used in all subsequent implementations.

There should not be any declarative statements in contexts that do not support local data (provided that they are [still used](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline")). Otherwise, a false impression of local validity is created when the program is read, which may lead to the program not being correctly understood.

This rule is only of explicit relevance when working with program types other than class or interface pools. Class Builder implicitly specifies which declarations occur and where. These are the declarations of the global class/global interface itself as well as optional local data types, classes, and interfaces in [class pools](ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.md "Guideline"). The developer cannot directly access the master program of a class pool or interface pool. This is still the case even if the source code-based Class Builder is introduced, because it only shows the declaration and implementation of the global class.

For other [program types](ABENPROGRAM_TYPE_GUIDL.md "Guideline") (subroutine pools, function groups, and executable programs), the developer can access the entire master program. If these program types are used, adherence to the rule is the developer's responsibility. The top include is helpful here. It is especially suited to all programs that are [organized](ABENSOURCE_CODE_ORGA_GUIDL.md "Guideline") using include programs. The [top include](ABENTOP_INCLUDE_GLOSRY.md "Glossary Entry") is specially designed for the global declaration part and is therefore supported by ABAP Workbench and ABAP Compiler. ABAP Workbench creates and includes the top include automatically. The compiler incorporates the relevant top include into the syntax check for an individual include program. This enables meaningful syntax checks to be made on individual include programs.

If the top include is available, it should always be the first include program that a master program includes. The top include can also contain additional INCLUDE statements. The top include, and any include programs included in the top include, can only contain declarations and not implementations.

If [ABAP Objects](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline") are the main focus, the global declaration part or the top include should only contain declarations of local classes and interfaces, if the above rule is strictly adhered to. Data types should only be [declared](ABENDECLARATION_DTYPES_CONST_GUIDL.md "Guideline") for classes and interfaces or in ABAP Dictionary. Global data objects are only required for communication with classical dynpros. Therefore they should only be used in the top include for function groups that encapsulate classic [dynpros](ABENENCAP_CLASS_INTERF_GUIDL.md "Guideline").

Exception

The above rule can be mainly justified due to the visibility within the program and the validity of declarations. Strictly speaking therefore, it only applies to program types other than class pools. In class pools, the visibility outside of the class pool and the resulting [dependencies](ABENLOCAL_TYPE_GLOB_CLASS_GUIDL.md "Guideline") are also important.

A further exception applies in the following situation: the local classes of a program are relatively independent units and their implementations do not refer to the declarations of other local classes. In this case, their declaration and implementation parts can be specified one after the other to improve readability.

Bad Example

The following source code shows a function group for encapsulating a classic dynpro, after the include programs have been resolved. The two dialog modules contain data declarations that look like local declarations but have global validity. Static access to this type of data object is only possible below the declaration, which means the function module has no access to g\_input\_field, and the PBO module has no access to g\_ok\_code.

FUNCTION-POOL z\_screen.

DATA g\_start\_value TYPE c LENGTH 20.

FUNCTION z\_handle\_screen.
\*"------------------------------------------------------
\*"\*"Local Interface:
\*" IMPORTING
\*" REFERENCE(i\_start\_value) TYPE csequence OPTIONAL
\*"------------------------------------------------------
  g\_start\_value = i\_start\_value.
  CALL SCREEN 100.
ENDFUNCTION.

MODULE status\_0100 OUTPUT.
  DATA g\_input\_field TYPE c LENGTH 20.
  g\_input\_field = g\_start\_value.
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  DATA g\_ok\_code TYPE sy-ucomm.
  CASE g\_ok\_code.
    WHEN '...'.
       ...
  ENDCASE.
ENDMODULE.

Good Example

The following source code shows the function group from the above example, after the global declarations have been moved to a coherent global declaration part that follows the introductory statement. The additional global data object g\_start\_value is no longer required, and g\_ok\_code can be accessed in the PBO module.

FUNCTION-POOL z\_screen.

DATA: g\_input\_field TYPE c LENGTH 20,
      g\_ok\_code TYPE sy-ucomm.

FUNCTION z\_handle\_screen.
\*"------------------------------------------------------
\*"\*"Local Interface:
\*" IMPORTING
\*" REFERENCE(i\_start\_value) TYPE csequence OPTIONAL
\*"------------------------------------------------------
  g\_input\_field = i\_start\_value.
  CALL SCREEN 100.
ENDFUNCTION.

MODULE status\_0100 OUTPUT.
  CLEAR g\_ok\_code.
ENDMODULE.

MODULE user\_command\_0100 INPUT.
  CASE g\_ok\_code.
    WHEN '...'.
      ...
  ENDCASE.
ENDMODULE.
