---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENMULTIPLE_USE_INCLUDE_GUIDL.html"
abapFile: "ABENMULTIPLE_USE_INCLUDE_GUIDL.html"
type: "abap-reference"
---

## Background

From a technical point of view, it is possible to use an include program multiple times by including it more than once into a compilation unit or different compilation units.

## Rule

**Do not use include programs more than once**

Use an include program for the modularization of exactly one compilation. It must not be included into multiple different compilation units. Also, an include program should only be included once within a compilation unit.

## Details

The multiple use of include programs is highly problematic conceptually. This particularly concerns the use of include programs for the reuse of:

-   Type definitions
-   Data declarations
-   Local classes
-   Procedure implementations

We strongly recommended using only suitable means for reuse, such as global classes or interfaces, for the reasons specified in the following sections.

**Restricted maintainability** The inclusion of an include program into multiple compilation units dramatically restricts the maintainability both of the include program itself and of the compilation units using it. Changes to an include program like this can be unproblematic in the context of selected master programs, but can make other compilation units syntactically incorrect at the same time. This is particularly critical for compilation units that include such include programs that were developed in other systems.

**Increased resource consumption** If compilation units that use shared include programs are executed at the same time, these include programs must be loaded multiple times by the ABAP runtime framework, which increases memory consumption. In the past, include programs were used multiple times for the central definition of constants, for example. Today, you should use a global interface or global class for this purpose. Because it is loaded only once, the memory consumption does not increase with every new use as it does with any multiple use of include programs.

The memory consumption also increases if an include program is used multiple times within one compilation unit (for example, through inclusion into the source code of multiple function modules of a function pool or into the source code of multiple methods of a class) because this expands the compilation unit unnecessarily. When using centrally defined, [standalone types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.md) and storing required constants in suitable classes or interfaces, there remains no conceivable scenario where it would be useful to use include programs multiple times within a compilation unit.

**Missing semantic context** Like source code files in other programming environments, include programs are included into a compilation unit as pure text and without any semantics. The semantics only emerge in the context of the compilation unit and the position where the include program is included. Consequently, especially class definitions that are included into different compilation units by using an include program result in different technical classes whose objects have different reference types and cannot be exchanged between the compilation units.

## Bad Example

The following source code shows an include program that contains declarations of constants intended for use in multiple programs. According to the above rule, procedures of this type are no longer allowed.

```
*&---------------------------------------------* 
*& Include Z_ORDERS_OF_MAGNITUDE 
*&---------------------------------------------* 
CONSTANTS: 
  mega TYPE  p DECIMALS 6 VALUE '1000000.0', 
  kilo TYPE  p DECIMALS 6 VALUE '1000.0', 
  milli TYPE p DECIMALS 6 VALUE '0.001', 
  micro TYPE p DECIMALS 6 VALUE '0.000001'.
```

## Good Example

The following source code shows the same declarations of constants as in the above example, but this time in a global class suitable for reuse. Here, a corresponding ABAP Unit test method would even be possible that checks the consistency of the constants.

```
CLASS zcl_orders_of_magnitude DEFINITION PUBLIC. 
  PUBLIC SECTION. 
    CONSTANTS: 
      mega TYPE  p DECIMALS 6 VALUE '1000000.0', 
      kilo TYPE  p DECIMALS 6 VALUE '1000.0', 
      milli TYPE p DECIMALS 6 VALUE '0.001', 
      micro TYPE p DECIMALS 6 VALUE '0.000001'. 
ENDCLASS.
```
