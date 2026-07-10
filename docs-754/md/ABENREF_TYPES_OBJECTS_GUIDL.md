---
title: "Reference to Data Types or Data Objects - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenref_types_objects_guidl.htm"
abapFile: "abenref_types_objects_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Robust ABAP](ABENROBUST_ABAP_GUIDL.md) →  [Data Types and Data Objects](ABENDATA_TYPE_OBJ_GUIDL.md) → 

Reference to Data Types or Data Objects

Background

As well as [using data types](ABENUSING_TYPES_GUIDL.md "Guideline") for declarations and typings with the addition TYPE, the alternative addition LIKE of the corresponding statements can be used to reference the data type of one of the data objects visible at this position directly. This includes references to data objects of the same program, interface parameters of the current procedure, attributes of global classes and interfaces, and constants in type groups.

Rule

Declare dependent data objects with reference to other data objects

If a data object directly depends on another data object, refer to it directly using LIKE for the declaration. In all other cases, use TYPE to refer to a standalone data type.

Details

For example, if a helper variable of the type of an input parameter is required within a procedure ([method](ABENFUNCT_MODULE_SUBROUTINE_GUIDL.md "Guideline")), it should not be declared with reference to the type of the parameter using TYPE but with reference to the parameter itself using LIKE. It is also possible to declare work areas using LIKE LINE OF if the parameter is an internal table. In the case of typing with LIKE, the type of the parameter can be changed retroactively without always having to adapt the procedure implementation.

However, if no close reference to another data object exists, it is usually more useful to declare data objects with reference to a [standalone data type](ABENBOUND_INDEPENDENT_DTYPE_GUIDL.md "Guideline") by using TYPE.

Note

Obsolete references to flat structures or database tables or views of the ABAP Dictionary using LIKE should never be implemented.

Bad Example

The following source code shows the declaration of a helper variable in a method that is supposed to be of the same data type as an interface parameter. The TYPE reference to the data type requires a manual implementation of any type changes.

CLASS some\_class DEFINITION ...
   PUBLIC SECTION.
     METHODS some\_method
       CHANGING some\_parameter TYPE some\_type.
     ...
ENDCLASS.
CLASS some\_class IMPLEMENTATION.
   METHOD some\_method.
     DATA save\_parameter TYPE some\_type.
     save\_parameter = some\_parameter.
     ...
   ENDMETHOD.
   ...
ENDCLASS.

Good Example

The following source code shows the improved declaration of the helper variable that now directly refers to the interface parameter with LIKE, so that possible type changes are automatically accepted.

   ...
    METHOD some\_method.
      DATA save\_parameter LIKE some\_parameter.
      save\_parameter = some\_parameter.
      ...
    ENDMETHOD.
...
