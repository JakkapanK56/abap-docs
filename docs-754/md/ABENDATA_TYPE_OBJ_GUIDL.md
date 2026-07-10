---
title: "Data Types and Data Objects - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_obj_guidl.htm"
abapFile: "abendata_type_obj_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) → 

Data Types and Data Objects

Together with classes and objects, data types and data objects are the essentials of ABAP programming.

-   Data type

A data type describes a data object, just as a class describes an object. In this sense, a data type is comparable with a class without methods. ABAP interprets the content of a data object in accordance with its data type. Data types exist either as attributes bound to data objects or as standalone data objects. Standalone data types can be defined either in ABAP Dictionary or using the statement TYPES in an ABAP program.

-   Data object

A data object is an instance of a data type, just as an object is an instance of a class. It exists in the [internal session](ABENINTERNAL_SESSION_GLOSRY.md "Glossary Entry") of an ABAP program or as a shared object in the shared memory and occupies memory there for the contained data. A data object is created either implicitly when a program or procedure is loaded (named data object), or by using the statement CREATE DATA (anonymous data object). Named data objects are either variables (statements DATA, CLASS-DATA, and so on) or constants (statement CONSTANTS).

A data type describes the technical attributes of a data object (for example, the elementary types it is comprised of, its length) and semantic attributes (what type of entity is represented by the data object). Types that are defined in ABAP dictionary have additional attributes, for example for input/output on a classic dynpro or in Web Dynpro.

As far as the ABAP runtime environment is concerned, only the technical attributes of a data object are of interest for program execution. However, the semantic information, which is linked to the appropriate use of types, is essential for the legibility of the source code. For this reason, some of the rules covered in this section could also fall under the heading [Structure and Style](ABENSTRUCTURE_STYLE_GUIDL.md "Guideline"), since this covers not only robustness, but also good style, which, although it does not affect program execution, is nevertheless significant for readability and maintainability.

-   [Bound and Standalone Data Types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.md "Guideline")

-   [Declaration of Data Types and Constants](ABENDECLARATION_DTYPES_CONST_GUIDL.md "Guideline")

-   [Declaration of Variables](ABENDECLARATION_VARIABLES_GUIDL.md "Guideline")

-   [Inline Declarations](ABENDECLARATION_INLINE_GUIDL.md "Guideline")

-   [Including Structures](ABENINCLUDING_STRUCTURES_GUIDL.md "Guideline")

-   [Using Types](ABENUSING_TYPES_GUIDL.md "Guideline")

-   [Reference to Data Types or Data Objects](ABENREF_TYPES_OBJECTS_GUIDL.md "Guideline")

-   [Table Work Areas](ABENTABLE_WORK_AREA_GUIDL.md "Guideline")

-   [Literals](ABENLITERALS_GUIDL.md "Guideline")

-   [Strings](ABENSTRINGS_GUIDL.md "Guideline")

-   [Start Values](ABENSTART_VALUES_GUIDL.md "Guideline")

-   [Data Objects for Truth Values](ABENDATAOBJECTS_TRUE_VALUE_GUIDL.md "Guideline")

Continue
[Bound and Standalone Data Types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.md)
[Declaration of Data Types and Constants](ABENDECLARATION_DTYPES_CONST_GUIDL.md)
[Declaration of Variables](ABENDECLARATION_VARIABLES_GUIDL.md)
[Inline Declarations](ABENDECLARATION_INLINE_GUIDL.md)
[Including Structures](ABENINCLUDING_STRUCTURES_GUIDL.md)
[Using Types](ABENUSING_TYPES_GUIDL.md)
[Reference to Data Types or Data Objects](ABENREF_TYPES_OBJECTS_GUIDL.md)
[Table Work Areas](ABENTABLE_WORK_AREA_GUIDL.md)
[Literals](ABENLITERALS_GUIDL.md)
[Strings](ABENSTRINGS_GUIDL.md)
[Start Values](ABENSTART_VALUES_GUIDL.md)
[Data Objects for Truth Values](ABENDATAOBJECTS_TRUE_VALUE_GUIDL.md)
