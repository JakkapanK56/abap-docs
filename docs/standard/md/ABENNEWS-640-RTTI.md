---
title: "ABENNEWS-640-RTTI"
description: |
  ABENNEWS-640-RTTI - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-640-RTTI.htm"
abapFile: "ABENNEWS-640-RTTI.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENNEWS", "640", "RTTI"]
---

The [runtime type services (RTTS)](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html) are a further development of the former [runtime type identification (RTTI)](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html). With the enhancement of the [type description classes](ABENTYPE_CLASS_GLOSRY.html) to include methods for creating dynamic types (see modification 1), the RTTS include (from ABAP release 6.40) the RTTI and also runtime type creation (RTTC).

[1\. Methods for Creating Data Types](#ABAP_MODIFICATION_1@4@)

[2\. New Methods for Types from ABAP Dictionary](#ABAP_MODIFICATION_2@4@)

[3. Enhancement of the Method `GET_COMPONENT_TYPE`](#ABAP_MODIFICATION_3@4@)

[4. Enhancement of the Method `GET_PROPERTY`](#ABAP_MODIFICATION_4@4@)

[5. New Method `HAS_PROPERTY`](#ABAP_MODIFICATION_5@4@)

[6. New Method `GET_CLASS_NAME`](#ABAP_MODIFICATION_6@4@)

[7. New Method `GET_DATA_TYPE_KIND`](#ABAP_MODIFICATION_7@4@)

The type description classes of RTTI were enhanced using [RTTC](ABENRUN_TIME_TYPE_CREATION_GLOSRY.html) methods. These methods create type description objects independently of existing types. This means what was previously RTTI becomes the [RTTS](ABENRUN_TIME_TYPE_SERVICES_GLOSRY.html).

Together with the addition `HANDLE` of the statements [`CREATE DATA`](ABAPCREATE_DATA_HANDLE.html) and [`ASSIGN`](ABAPASSIGN_CASTING.html), the RTTC-specific methods of the RTTS allow the construction of data objects of any types for the program runtime and the [casting](ABENCAST_CASTING_GLOSRY.html) of dynamic types.

The most important new methods for dynamically defining data types are:

If the type of a type description object comes from ABAP Dictionary, the dictionary properties of the type can be identified using the following methods:

**For any data types**

**For elementary data types**

**For structures and database tables**

Previously, the method `GET_COMPONENT_TYPE` of class `CL_ABAP_STRUCTDESCR` for parameter `P_NAME` only accepted actual parameters of types `string` and `c`. Although the formal parameter is type `any`, during the call, a type check was executed that caused a serious error for non-text-like actual parameters. Actual parameters of type `csequence` and `numeric` are now accepted. A text-like parameter is interpreted as a component name, a numeric parameter as the position of the component in the structure. An actual parameter that does not apply to `csequence` or `numeric` raises the non-class-based exception `UNSUPPORTED_INPUT_TYPE`.

A new public constant `CL_ABAP_TYPEDESCR=>TYPEPROPKIND_HASCLIENT` has been introduced. If this constant of method `GET_PROPERTY` is passed to class `CL_ABAP_TYPEDESCR`, the system checks whether the type of the type description object has a client field. A reference to a data object of type `abap_bool` is always returned. If the type has a client field, the referenced data object has the value of the constant `abap_true`. If the type does not have a client field or if it does not affect a structure, the referenced data object has the value of the constant `abap_false`.

A new public method `HAS_PROPERTY` has been introduced in class `CL_ABAP_TYPEDESCR`. Unlike `GET_PROPERTY`, this method only identifies whether a type has a property and only returns the values from `abap_true` or `abap_false`.

A new public method `GET_CLASS_NAME` has been introduced in class `CL_ABAP_CLASSDESCR`. This method returns the name of the class of an object.

A new public method `GET_DATA_TYPE_KIND` has been introduced in class `CL_ABAP_DATADESCR`. This method returns the same values as the statement [`DESCRIBE FIELD`](ABAPDESCRIBE_FIELD.html) with the addition `TYPE`. These values are also defined as constants with the prefix `TYPE_KIND_` of class `CL_ABAP_DATADESCR`.

-   `GET_C`, `GET_D`, `GET_F`, and so on of class `CL_ABAP_ELEMDESCR` for creating type description objects for elementary data types.
-   `CREATE` of class `CL_ABAP_STRUCTDESCR` for creating type description objects for structured data types based on a component table.
-   `CREATE` of class `CL_ABAP_TABLEDESCR` for creating type description objects for table types, where the properties of the table are passed to the input parameters.
-   `CREATE` of class `CL_ABAP_REFDESCR` for creating type description objects for reference types, where the static type is passed to an input parameter.

-   `CL_ABAP_TYPEDESCR=>IS_DDIC_TYPE`
-   returns `abap_true` when the object describes a type from ABAP Dictionary
-   `CL_ABAP_TYPEDESCR=>ABSOLUTE_NAME`
-   returns the absolute name of a type (also for program-defined types)
-   `CL_ABAP_TYPEDESCR=>GET_DDIC_HEADER`
-   returns the [nametab header](ABENNAME_TAB_HEADER_GLOSRY.html) of a type from ABAP Dictionary
-   `CL_ABAP_TYPEDESCR=>GET_DDIC_OBJECT`
-   returns the [nametab field descriptions](ABENNAME_TAB_FIELDS_GLOSRY.html) of a type from ABAP Dictionary

-   `CL_ABAP_ELEMDESCR=>GET_DDIC_FIELD`
-   returns the properties of the data element and its texts (replaces function module `DDIF_FIELDINFO_GET`)
-   `CL_ABAP_ELEMDESCR=>GET_DDIC_FIXED_VALUES`
-   returns the [fixed values](ABENFIXED_VALUE_GLOSRY.html) of the data element

-   `CL_ABAP_STRUCTDESCR=>GET_DDIC_FIELD_LIST`
-   returns the features of the structure and its texts (replaces function module `DDIF_FIELDINFO_GET`)

abenabap.html abennews.html abennews-6.html abennews-640.html