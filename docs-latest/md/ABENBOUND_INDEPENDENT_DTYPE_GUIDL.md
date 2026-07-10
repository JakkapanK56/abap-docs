---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBOUND_INDEPENDENT_DTYPE_GUIDL.html"
abapFile: "ABENBOUND_INDEPENDENT_DTYPE_GUIDL.html"
type: "abap-reference"
---

## Background

A bound data type only exists as a property of a data object. It is created when a data object is not declared using a reference to a standalone data type that defines all technical properties, but when technical properties are defined in the statement `DATA` instead. Here `DATA` is used as a synonym for all statements that declare data objects. The resulting type is a property of the declared variable and it is bound to this variable. If this type is needed in several different places, it has to be defined separately for each place where it is used.

A standalone data type is declared in the ABAP Dictionary or using the statement `TYPES` and defines all technical properties of a data object with one exception: When table types are defined, they can be generic with respect to the keys specified. A standalone generic type can only be used for typing but not for data declarations. However, there is one exception: In a `DATA` statement, the standard key is added to the generic standard table type.

## Rule

**Use standalone data types**

Use standalone data types instead of constructing bound data types when declaring data objects.

## Details

Here is a list of reasons that support the declaration of standalone types:

-   The declaration of a standalone data type allows multiple data objects (or interface parameters or field symbols) to use a type without the need to always redefine this type.
-   Even if only one data object of this type is required initially, it is very likely that further data objects will be added during the course of the development. If the type needs to be adapted later on, you can do this centrally.
-   Declaring a standalone type and using it to declare a data object is nothing more than following the rule for the [SoC principle](ABENSEPARATION_CONCERNS_GUIDL.md).

The data type should always have a specific meaning and a meaningful [name](ABENNAMING_GDL.md). This gives data types a clear semantic meaning and makes the program easier to read and understand. Therefore, you should declare different data types for technically identical but semantically different data objects. This also increases the probability that a type can be adapted later on without making major program changes.

Therefore you should avoid declaring purely technical data types that cannot be associated with specific semantics, because this does not make it easier to read or enhance the program.

## Hint

A separate [rule](ABENDECLARATION_DTYPES_CONST_GUIDL.md) specifies where the standalone data types should be declared.

## Bad Example

The following source code shows the declaration of two data objects that are supposed to have the same data type. However, the technical properties, length, and number of decimal places are defined as standalone, bound data types in the `DATA` statements in question.

... 
DATA number\_1 TYPE p LENGTH 6 DECIMALS 2. 
DATA number\_2 TYPE p LENGTH 6 DECIMALS 2. 
...

## Good Example

The following source code moves the definition of the technical properties of the data objects in the above example to a separate `TYPES` statement. The standalone data type is only declared once and can then be used multiple times.

TYPES number\_type TYPE p LENGTH 6 DECIMALS 2. 
`...` 
`DATA: number_1 TYPE number_type,` 
      `number_2 TYPE number_type.` 
`...`
