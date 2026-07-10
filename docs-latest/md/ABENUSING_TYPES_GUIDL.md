---
title: "Extracted Content"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENUSING_TYPES_GUIDL.html"
abapFile: "ABENUSING_TYPES_GUIDL.html"
type: "abap-reference"
---

## Background

You can use the data types declared according to the rules on [Bound and Standalone Data Types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.md) and [Declaration of Data Types and Constants](ABENDECLARATION_DTYPES_CONST_GUIDL.md) for declaring and creating data objects, as well as for typing field symbols or interface parameters. You specify them after the `TYPE` addition of the corresponding statement.

## Rule

**Use semantically appropriate data types only**

Use existing types only if they match the semantics of the typed object. You must not select an existing type based only on the technical properties.

## Details

As long as it extends beyond an elemental ABAP type, the type of a data object or an interface parameter provides the source code reader with information about the semantics of these variables. This makes it easier to recognize the meaning of individual variables.

For this reason, you must use only data types whose semantics match the usage. The technical properties of a type alone do not justify its use in a specific context, as this impedes the readability of the program.

In particular, this applies to the reuse or multiple use of existing types. If you require a data type with specific technical properties for an application, you should not simply use any type with these properties from ABAP Dictionary. In the past, this has frequently been the chosen procedure. Consequently applying package encapsulation may help prevent the unwanted use of own data types.

## Hint

This rule applies especially for the use of structures from ABAP Dictionary. For example, you should never use a structure defining a database table as a template for input or output fields of classic dynpros or in Web Dynpro. This would violate the [SoC principle](ABENSEPARATION_CONCERNS_GUIDL.md).

## Bad Example

In the following source code a variable is declared, whose name and use clearly indicate that it is used for a truth value. The variable is declared with a technically correct, but semantically incorrect, data type. `syst-batch`, after all, is the data type for the [system field](ABENSYSTEM_FIELDS_GDL.md) `sy-batch`, which indicates whether a program is executed in the background.

```
DATA is_empty TYPE syst-batch. 
... 
IF is_empty IS INITIAL. 
  ... 
ENDIF.
```

## Good Example

The following source code shows an improved example compared to the source code above. In this case, the `abap_bool` type of type pool `abap`, which is intended for [truth values](ABENDATAOBJECTS_TRUE_VALUE_GUIDL.md), is used. In addition, the request of the truth value is performed using a specifically designated constant from the same type pool.

```
DATA is_empty TYPE abap_boolean. 
... 
IF is_empty EQ abap_false. 
  ... 
ENDIF.
```
