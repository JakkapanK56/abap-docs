---
title: "Multiple Use of Include Programs - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmultiple_use_include_guidl.htm"
abapFile: "abenmultiple_use_include_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md) →  [Source Code Organization](ABENSOURCE_CODE_ORGA_GUIDL.md) → 

Multiple Use of Include Programs

Background

From a technical point of view, it is possible to use an include program multiple times by integrating it more than once into a master program or different master programs.

Rule

Do not use include programs more than once

Use an include program for the modularization of exactly one master program. It must not be integrated into multiple different master programs. Also, an include program should only be integrated once within a master program.

Details

The multiple use of include programs is highly problematic conceptually. This particularly concerns the use of include programs for the reuse of:

-   Type definitions

-   Data declarations

-   Local classes

-   Procedure implementations

We strongly recommended using only suitable means for reuse, such as global classes or interfaces, for the reasons specified in the following sections.

Restricted maintainability
The integration of an include program into multiple master programs dramatically restricts the maintainability both of the include program itself and of the master programs using it. Changes to an include program like this can be unproblematic in the context of selected master programs, but can make other master programs syntactically incorrect at the same time. This is particularly critical for master programs that integrate include programs that were developed in other systems.

Increased resource consumption
If master programs that use shared include programs are executed at the same time, these include programs must be loaded multiple times by the ABAP runtime environment, which increases memory consumption. In the past, include programs were used multiple times for the central definition of constants, for example. Today, you should use a global interface or global class for this purpose. Because it is loaded only once, the memory consumption does not increase with every new use as it does with any multiple use of include programs.

The memory consumption also increases if an include program is used multiple times within one master program (for example, through integration into the source code of multiple function modules of a function group or into the source code of multiple methods of a class) because this expands the master program unnecessarily. When using centrally defined, [standalone types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.md "Guideline") and storing required constants in suitable classes or interfaces, there remains no conceivable scenario where it would be useful to use include programs multiple times within a master program.

Missing semantic context
Like source code files in other programming environments, include programs are integrated into a master program as pure text and without any semantics. The semantics only emerge in the context of the master program and the position where the include program is integrated. Consequently, especially class definitions that are integrated into different master programs by using an include program result in different technical classes whose objects have different reference types and cannot be exchanged between the master programs.

Bad Example

The following source code shows an include program that contains declarations of constants intended for use in multiple programs. According to the above rule, procedures of this type are no longer permitted.

\*&---------------------------------------------\*
\*& Include Z\_ORDERS\_OF\_MAGNITUDE
\*&---------------------------------------------\*
CONSTANTS:
  mega TYPE  p DECIMALS 6 VALUE '1000000.0',
  kilo TYPE  p DECIMALS 6 VALUE '1000.0',
  milli TYPE p DECIMALS 6 VALUE '0.001',
  micro TYPE p DECIMALS 6 VALUE '0.000001'.

Good Example

The following source code shows the same declarations of constants as in the above example, but this time in a global class suitable for reuse. Here, a corresponding ABAP Unit test method would even be possible that checks the consistency of the constants.

CLASS zcl\_orders\_of\_magnitude DEFINITION PUBLIC .
  PUBLIC SECTION.
    CONSTANTS:
      mega TYPE  p DECIMALS 6 VALUE '1000000.0',
      kilo TYPE  p DECIMALS 6 VALUE '1000.0',
      milli TYPE p DECIMALS 6 VALUE '0.001',
      micro TYPE p DECIMALS 6 VALUE '0.000001'.
ENDCLASS.
