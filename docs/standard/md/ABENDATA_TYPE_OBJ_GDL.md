---
title: "ABENDATA_TYPE_OBJ_GDL"
description: |
  ABENDATA_TYPE_OBJ_GDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDATA_TYPE_OBJ_GDL.htm"
abapFile: "ABENDATA_TYPE_OBJ_GDL.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENDATA", "TYPE", "OBJ", "GDL"]
---

Together with classes and objects, data types and data objects are the essentials of ABAP programming.

A data type describes the technical properties of a data object (for example, the elementary types it is comprised of, its length) and semantic properties (what type of entity is represented by the data object). Types that are defined in ABAP dictionary have additional properties, for example for input/output on a classic dynpro or in Web Dynpro.

As far as the ABAP runtime framework is concerned, only the technical properties of a data object are of interest for program execution. However, the semantic information, which is linked to the appropriate use of types, is essential for the legibility of the source code. For this reason, some of the rules covered in this section could also fall under the heading [Structure and Style](ABENSTRUCTURE_STYLE_GDL.html), since this covers not only robustness, but also good style, which, although it does not affect program execution, is nevertheless significant for readability and maintainability.

-   **Data type**
-   A data type describes a data object, just as a class describes an object. In this sense, a data type is comparable with a class without methods. ABAP interprets the content of a data object in accordance with its data type. Data types exist either as properties bound to data objects or as standalone data objects. Standalone data types can be defined either in ABAP Dictionary or using the statement `TYPES` in an ABAP program.
-   **Data object**
-   A data object is an instance of a data type, just as an object is an instance of a class. It exists in the [internal session](ABENINTERNAL_SESSION_GLOSRY.html) of an ABAP program or as a shared object in the shared memory and occupies memory there for the contained data. A data object is created either implicitly when a program or procedure is loaded (named data object), or by using the statement `CREATE DATA` (anonymous data object). Named data objects are either variables (statements `DATA`, `CLASS-DATA`, and others) or constants (statement `CONSTANTS`). Variables and especially immutable variables can also be declared inline with [declaration operators](ABENDECLARATION_OPERATOR_GLOSRY.html).

-   [Bound and Standalone Data Types](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.html)
-   [Declaration of Data Types and Constants](ABENDECLARATION_DTYPES_CONST_GUIDL.html)
-   [Declaration of Variables](ABENDECLARATION_VARIABLES_GUIDL.html)
-   [Inline Declarations](ABENDECLARATION_INLINE_GUIDL.html)
-   [Immutable Variables](ABENIMMUTABLE_VARIABLES_GUIDL.html)
-   [Including Structures](ABENINCLUDING_STRUCTURES_GUIDL.html)
-   [Using Types](ABENUSING_TYPES_GUIDL.html)
-   [Reference to Data Types or Data Objects](ABENREF_TYPES_OBJECTS_GUIDL.html)
-   [Table Work Areas](ABENTABLE_WORK_AREA_GUIDL.html)
-   [Literals](ABENLITERALS_GUIDL.html)
-   [Strings](ABENSTRINGS_GUIDL.html)
-   [Start Values](ABENSTART_VALUES_GUIDL.html)
-   [Data Type for Truth Values](ABENDATAOBJECTS_TRUE_VALUE_GUIDL.html)

abenabap.html abenabap\_reference.html abenabap\_pgl.html abenrobust\_abap\_gdl.html