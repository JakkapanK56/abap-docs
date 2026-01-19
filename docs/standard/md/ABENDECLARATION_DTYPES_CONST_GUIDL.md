---
title: "ABENDECLARATION_DTYPES_CONST_GUIDL"
description: |
  ABENDECLARATION_DTYPES_CONST_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDECLARATION_DTYPES_CONST_GUIDL.htm"
abapFile: "ABENDECLARATION_DTYPES_CONST_GUIDL.html"
keywords: ["do", "if", "case", "method", "class", "data", "types", "ABENDECLARATION", "DTYPES", "CONST", "GUIDL"]
---

Data types and constants can be declared in the following contexts:

Technically speaking, type pools, global classes and interfaces are also ABAP programs, in which data types and constants are created using the `TYPES` and `CONSTANTS` statements. In contrast to other ABAP programs, the declarations can also be statically visible in other programs, depending on the visibility section. Absolute type names enable you to dynamically access the types of all programs.

**Declare data types and constants in the appropriate context**

Declare data types and constants in the context that guarantees the best possible encapsulation.

Data types and constants should be declared in the context in which they are [visible](ABENENCAPSULATION_GUIDL.html) for all potential consumers but not anywhere else:

The misuse of include programs for the declaration of data types and data objects that can be reused across various programs is [not allowed](ABENMULTIPLE_USE_INCLUDE_GUIDL.html).

The following source code shows the declaration of constants in a type pool that are required across different programs. The name of the type pool must precede the names of the constants as a prefix. You should not create any new [type pools](ABENPROGRAM_TYPE_GUIDL.html). For constants that are required in various different programs, the above rule recommends a declaration in global classes or interfaces.

The following source code illustrates the declaration of the constants in the above example in a global class. The visibility of the constants is restricted to the current package. In other programs, the constants are addressed using `cl_..._icons=>`.

-   **Cross-program**

-   in the ABAP Dictionary
-   in global classes and interfaces
-   in type pools

-   **Local program**

-   in the global declaration part of a program
-   in global classes and interfaces
-   in procedures ([Methods](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html))

-   **Local program data types and constants**

-   Data types that are only required by local data objects (usually helper variables) or constants that are only required in a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.html)) should be declared as local data types or constants.
-   Data types and constants that are only required within local classes should be declared in the corresponding visibility section of the classes or integrated using an interface.
-   If data types are required in multiple local classes and interfaces of a program, they should be created in the appropriate visibility section of a local class or an interface. Local classes or interfaces can be used that contain nothing else apart from these types or constants. In the global declaration part of programs, declarations of data types or constants are not required for semantic reasons.

-   **Cross-program data types and constants**

-   Data types and constants that a consumer requires to use a class or interface should be declared in the public visibility section of the global class or interface. Examples include data types used to type interface parameters of methods, and constants expected as actual parameters by methods, such as IDs of [exception texts](ABENEXCEPTION_TEXTS_GUIDL.html) in exception classes.
-   Data types required by different programs, classes, or interfaces are declared as real types of the ABAP Dictionary (not in type pools). These are usually semantically independent types, for which the ABAP Dictionary provides additional services, such as descriptive texts and documentation options. In this context, you must consider the [separation of concerns](ABENSEPARATION_CONCERNS_GUIDL.html).
-   For example, a structure of the ABAP Dictionary should never be used to type (Web) Dynpro fields and to simultaneously define a database table. Ideally, data types should be declared in encapsulated packages, which manage the cross-package use of their repository objects and which only expose types actually required outside the package in their package interfaces.
-   You should generally avoid declaring or even exposing purely technical types without semantic meaning, in application development packages of the ABAP Dictionary. The declaration of these types (such as `INT2` or `CHAR10`) should be restricted to fundamental basis packages.
-   You should not create any new type pools. Data types should be declared in global classes or interfaces, or as real types of the ABAP Dictionary. You should only create constants in global classes or interfaces. However, the use of existing type pools is still [allowed](ABENDATAOBJECTS_TRUE_VALUE_GUIDL.html). It is no longer necessary to load type pools explicitly using the `TYPE-POOLS` statement. However, you only need to declare new types or constants in a context, if no [semantically appropriate](ABENUSING_TYPES_GUIDL.html) types or constants exist that are more global. For example, if an appropriate ABAP Dictionary data type exists, it is not necessary to create a local data type in the class, to type an interface parameter of a global class method. In this case, the data type in the ABAP Dictionary might have to be published in the same package interface as the class. This would also be the case, however, if an interface parameter is typed with a data type of the class that refers to an ABAP Dictionary data type.

TYPE-POOL zicon. \\n TYPES zicon\_icon TYPE ... \\n CONSTANTS: \\n zicon\_cancel TYPE zicon\_icon VALUE icon\_cancel, \\n zicon\_check TYPE zicon\_icon VALUE icon\_check, \\n zicon\_check\_words TYPE zicon\_icon VALUE icon\_intensify, \\n zicon\_document TYPE zicon\_icon VALUE icon\_hlp, \\n zicon\_download TYPE zicon\_icon VALUE icon\_export, \\n ... CLASS cl\_...\_icons DEFINITION PUBLIC FINAL. \\n PUBLIC SECTION. \\n TYPES icon TYPE ... \\n CONSTANTS cancel TYPE icon VALUE icon\_cancel. \\n CONSTANTS check TYPE icon VALUE icon\_check. \\n CONSTANTS check\_words TYPE icon VALUE icon\_intensify. \\n CONSTANTS document TYPE icon VALUE icon\_hlp. \\n CONSTANTS download TYPE icon VALUE icon\_export. \\n ... \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html abendata\_type\_obj\_gdl.html