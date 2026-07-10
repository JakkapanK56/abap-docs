---
title: "Program Type - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_type_guidl.htm"
abapFile: "abenprogram_type_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [ABAP-Specific Rules](ABENABAP_SPECIFIC_RULES_GUIDL.md) →  [Programm Type and Program Properties](ABENPROGR_TYPE_FEATURES_GUIDL.md) → 

Program Type

Background

Every ABAP program has a program type that specifies which declarations and processing blocks a program can contain, and how it can be executed using the ABAP runtime environment. These are the possible program types in ABAP:

-   Executable program
    An executable program can contain all possible declarative statements. All processing blocks are possible except for function modules. The program supports classic dynpros and selection screens. It can be executed using the statement SUBMIT or using transaction codes. Executable programs are created in ABAP Editor.

-   Class pool
    A class pool always contains declarative statements for a global class. It can also include declarative statements for local types, interfaces, and classes. Only methods can be used as processing blocks. The pool does not support classic dynpros or selection screens. Global class methods can be called externally (depending on visibility) and public methods of the global class can be executed using transaction codes. Class pools are created using Class Builder.

-   Interface pool
    An interface pool can only contain the declarative statements for a global interface. Processing blocks, classic dynpros, and selection screens are not possible. Interface pools cannot be called or executed and are created using Class Builder.

-   Function group (function pool)
    A function group can contain all types of declarative statements. All processing blocks are supported except for the reporting event blocks. Classic dynpros and selection screens are supported. The associated function modules can be called, but it is also possible to access dynpro processing of the function group by using transaction codes. Function groups using Function Builder.

-   Module pool
    A module pool can contain all possible declarative statements. All processing blocks are supported except for reporting event blocks and function modules. The module pool supports classic dynpros and selection screens. It can be executed using transaction codes. Module pools are created using ABAP Editor.

-   Subroutine pool
    A subroutine pool can contain all possible declarative statements. The LOAD-OF-PROGRAM event block, subroutines and methods can be used as processing blocks. The pool does not support classic dynpros or selection screens. The subroutines can be called, but it is also possible to execute methods using transaction codes. Subroutine pools are created using ABAP Editor.

-   Type group (type pool)
    A type group can contain the declarative statements, TYPES and CONSTANTS. Processing blocks, classic dynpros, and selection screens are not possible. Type groups cannot be called or executed. Type groups are created using ABAP Dictionary.

In addition to these compilation units (programs that can be compiled independently), include programs can also be used for [source code organization](ABENSOURCE_CODE_ORGA_GUIDL.md "Guideline").

In ABAP, a program execution means that the system loads a program into the memory and executes one or more of its processing blocks. A distinction is made between standalone and called program execution:

-   Standalone program execution
    When programs are executed as standalone programs, the program is started using a transaction code (statements CALL TRANSACTION and LEAVE TO TRANSACTION) or using the statement SUBMIT for an executable program. The statement SUBMIT also allows execution in a background process.

-   Called program execution
    In called program executions, a running program calls a procedure (method, function module, or subroutine) of another program. If necessary, this other program is loaded into the [internal session of the calling program](ABENINTERN_EXTERN_PROC_CALL_GUIDL.md "Guideline").

-   The program flow for standalone program execution depends on the selected program type and the type of program call:

-   If the program is called using a transaction, a distinction is made between object-oriented (OO) transactions and dialog transactions. For object-oriented transactions, the transaction code is linked to a method of a local or global class. This method defines the program flow. Dialog transactions, however, are associated with a classic dynpro of the program. In this case, the program flow is defined by the associated dynpro flow logic.

-   The program flow of an executable program that was started using SUBMIT is defined by the reporting process of the ABAP runtime environment. The runtime environment calls the different reporting event blocks (START-OFSELECTION, GET and END-OF-SELECTION) of the program.

-   The program type must be selected based on the technical program attributes described here and the requirements for program execution. Not all the program types mention here are appropriate for new developments.

Rule

Select the appropriate program type

To select the program type, proceed as follows:

-   The program type "class pool" or "interface pool" is automatically set for global classes and interfaces.

-   To implement completed functions that are to be displayed in the class library, use the program type "subroutine pool" can be used for local classes.

-   If required, the program type "function group" is set automatically for function modules. In addition, function groups must be used to wrap classic dynpros or selection screens.

-   If the programs needs to be executed within the scope of background processing, the executable program type is automatically set.

-   New module pools or type groups should no longer be created.

Details

The above hierarchy for selecting the program type is derived from the basic [rule](ABENABAP_OBJ_PROGR_MODEL_GUIDL.md "Guideline") described, which defines the use of ABAP Objects. The following list describes specific aspects in detail:

-   If ABAP Objects functions need to be provided across the whole package or system, this is done using global classes or interfaces that have the program type "class pool" or "interface pool" implicitly. The call is performed using a method call or an OO transaction (if a standalone program execution is required).

-   The "subroutine pool" program type can be used to implement completed functions called using a transaction code (not using a method call), and which do not require passed parameters and do not have a user interface. Only local classes are used for implementation. The program is called using an OO transaction. Subroutine pools - as the name suggests - were originally intended for subroutines that were called from other programs. Subroutines (and calling subroutines externally in particular) are declared as obsolete, according to the existing programming guidelines. Subroutine pools no longer have this purpose. Instead, subroutine pools are suggested as independent containers for local classes. This is because they are otherwise barely affected by implicit processes of the ABAP runtime environment.

-   Remote-enabled function modules (RFM) (which provide functions using the RFC interface across servers or across systems or are used for parallelization) can only be created in a function group. The implementation of the actual functions, however, is carried out in a class, for example in a local class within the [function group](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline").

-   The same applies to update function modules (which are called for the update using CALL FUNCTION IN UPDATE TASK) as to RFMs.

-   Programs with a [classic dynpro interface or selection screens](ABENENCAP_CLASS_INTERF_GUIDL.md "Guideline") (if still required) should also be created as a function group. The function group only implements the UI but does not contain its own application logic (based on the [SoC principle](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline")). This program type is suitable because it can contain both classic dynpros and an external functional interface in the form of function modules. The dialog modules of the function group called by the dynpro flow logic should only contain method calls, for instance, for methods of local classes.

-   An executable program includes multiple event blocks that are executed when the various reporting events occur. This form of event control is largely obsolete and should no longer be used. Executable programs should only be used where they are technically required, thus mainly for background processing. In this case, the actual implementation should also be carried out in methods, for example, methods of a local class within the executable program. The event block of the initial event, START-OF-SELECTION, should only contain a [method call](ABENDIAL_MOD_EVENT_BLOCK_GUIDL.md "Guideline"). No other event blocks should be included anymore.

-   The module pool used to be the program type traditionally used for classic dialog programming with dynpros. The [Separation of Concerns](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline") concept is not sufficiently supported by module pools. This is why no more new module pools should be created. Instead, any classic dynpros that are still required should be wrapped in function groups.

-   The type group program type was initially implemented as a temporary solution. This was because it was not always possible to define types for internal tables in ABAP Dictionary. The same applied to the global storage of constants. Both gaps have now been closed. In ABAP Dictionary, any types can be defined. In global classes and interfaces, types and constants can be created for package-wide or system-wide use. Therefore, the "type group" program type is obsolete, and no new [type groups](ABENDECLARATION_DTYPES_CONST_GUIDL.md "Guideline") should be created.

Note

In cases where program types other than class and interface pools are still used, the check Obsolete Statements (OO Context) should be activated in the [extended program check](ABENEXTENDED_PROGRAM_CHECK_GUIDL.md "Guideline"). This enables same stringent syntax check to be implemented for program components not implemented in local classes as for within classes.
