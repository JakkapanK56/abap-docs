---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENPROGRAM_PROPERTY_GUIDL.html"
abapFile: "ABENPROGRAM_PROPERTY_GUIDL.html"
type: "abap-reference"
---

## Background

Alongside various, less important properties, each ABAP program has a set of program properties that control specific aspects of the program behavior and syntax check severity:

-   **ABAP language version**
-   for configuring the [ABAP language version](ABENABAP_VERSION_GLOSRY.md)
-   **Fixed point arithmetic**
-   For respecting the decimal separator for operations with packed numbers.
-   **Logical database**
-   For connecting an executable program with a logical database.

The program properties are defined when a program is created the relevant tool (Class Builder, Function Builder, ABAP Editor). It is possible to change them later.

## Rule

**Use the default settings for program properties**

Set the program properties for new programs as follows:

-   ABAP language version is [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.md) or higher
-   *Fixed Point Arithmetic* activated
-   No assignment to a logical database

When a new program is created, these settings are the same as the default values. This means that they can be applied without making any changes. Once the program properties are set they should no longer be modified.

## Details

Different behaviors or check severities are only provided for compatibility reasons, to ensure that existing programs can still be compiled and executed. New programs should definitely not use obsolete settings.

-   When a new program is created, the *ABAP Language Version* property is already set to [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.md) by default. This property must never be set to [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.md). Only Unicode systems are supported in the current release, which means such programs can no longer be used. Higher [ABAP language versions](ABENABAP_VERSION_GLOSRY.md) are possible because they cover the Unicode checks.
-   When a new program is created, the *Fixed Point Arithmetic* property is already set by default. This property must never be reset. If fixed point arithmetic is disabled, the position of the decimal separator of packed numbers (type `p`) is only respected for output in a classic dynpro, in assignments to fields of the types `c` and `string`, or for formatting using `WRITE TO`. The position is not respected for calculations. Today, this behavior only rarely meets the expectations of developers. If the calculation is to be carried out with packed numbers without any decimal places, this must be specified using the `DECIMALS 0` addition for the declaration.
-   When a new executable program is created, the *Logical Database* property is empty. This property assigns executable programs to a logical database. This enables the selection screen and flow of the program to be combined with the selection screen and flow of the logical database. A logical database is a special development object that is maintained in Logical Database Builder and which provides other ABAP programs with data from the nodes of a hierarchical tree structure. A logical database has a hierarchical structure, an ABAP database program and a separate standard selection screen. Logical databases should no longer be used. This is because they are based on cross-program usage of global data, implicit subroutine calls and reporting event control, and therefore do not comply with modern concepts. The function module `LDB_PROCESS` can be used to access existing logical databases. This function module can be called from a method. No new logical databases should be created. Instead a relevant service should be made available using a global class.

Because any later changes to the program properties potentially involve extra work, the correct properties should be configured right from the start and not changed later.

The following sections assume that fixed point arithmetic is always activated and that logical databases are not used.

## Hint

From ABAP release 740, SP05, the [strict modes](ABENABAP_SQL_STRICT_MODES.md) in the ABAP SQL syntax check require programs with the ABAP language version [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.md) in which the program property [*fixed point arithmetic*](ABENFIXED_POINT_ARITHMETIC_GLOSRY.md) is switched on.

## Example

In the following source code performs a substring write across two numeric components of a structure.

```
METHOD ... 
  DATA: 
    BEGIN OF struct, 
      comp1 TYPE i, 
      comp2 TYPE i, 
    END OF struct. 
  struct+2(4) = 'XXXX'. 
ENDMETHOD.
```

This was only possible for programs in the obsolete ABAP language version [Non-Unicode ABAP](ABENNON_UNICODE_ABAP_GLOSRY.md). Here an implicit [casting](ABENCASTING_GUIDL.md) of the subarea is performed for type `c`. The result in the components depends on the alignment gaps, the internal presentation of numeric values (byte order), and the code page used. Therefore, the result is extremely platform-dependent. A live program must never contain this type of code. This type of code often produces data with errors or runtime errors that are difficult to trace.

The above code produces a syntax error when used in an ABAP program defined as [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.md) or higher in the program properties (in accordance with the above rule). Unwanted substring accesses are prohibited, just like any other unwanted accesses to structures or other parts of the working memory. If these accesses cannot be identified by the syntax check, a runtime error occurs with a descriptive short dump while the program is running.
