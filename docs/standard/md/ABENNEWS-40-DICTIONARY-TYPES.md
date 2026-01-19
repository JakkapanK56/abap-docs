---
title: "ABENNEWS-40-DICTIONARY-TYPES"
description: |
  ABENNEWS-40-DICTIONARY-TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-40-DICTIONARY-TYPES.htm"
abapFile: "ABENNEWS-40-DICTIONARY-TYPES.html"
keywords: ["do", "while", "if", "data", "types", "internal-table", "ABENNEWS", "DICTIONARY", "TYPES"]
---

Until now data types were administered and defined in different ways in the ABAP programming language and in ABAP Dictionary.

In ABAP release 3.0, many enhancements were made to the type concept in the ABAP programming language. Elementary and structured data types can now be defined independently of each other. Structured data types can be further subdivided into structures and internal tables. Structure components and line types in internal tables can have any data type, which makes it possible to define extremely complex data types. If a complex data type is split into all its component parts, the result is always the elementary ABAP data types.

ABAP data types and ABAP Dictionary data types previously only genuinely corresponded to one another if they were structures with elementary components. In ABAP Dictionary, the ABAP data type 'structure' corresponded to the structure of database tables and standalone structures. From ABAP programs, the addition `LIKE` could be used to reference database tables and structures in ABAP Dictionary. It was also possible to reference individual components of the dictionary types. Complex ABAP data types, however, like internal tables or non-elementary structures had no direct equivalent in the dictionary. From ABAP release 3.0, type pools based on include technology were made available as an interim solution. These type pools allowed the user to store ABAP data types centrally in the dictionary.

The following sections describe which dictionary data types correspond to individual ABAP data types and how they are addressed in ABAP:

Elementary data types in ABAP correspond to the data elements that were until now only found in ABAP Dictionary. From ABAP release 4.5A, data elements will also be called elementary types in the dictionary. For the time being, the two-tiered domain concept for elementary types retains its validity. The actual elementary dictionary data type contains the semantic properties, while the technical properties are defined in a domain. Elementary types and all previous dictionary data elements can be referenced directly in ABAP programs using the addition `TYPE`. This converts all external dictionary data types into their corresponding ABAP data types. Elementary types are the smallest indivisible units of those structured types and table types listed below. This means that all dictionary types contain semantic properties such as texts, value tables, and documentation.

Structures in ABAP correspond to the structures that up to now were only found in ABAP Dictionary. From ABAP release 4.5A, structures in the dictionary are called structured types. From ABAP release 4.5A, individual structured type components can have any dictionary data type, so making complex structures possible. In ABAP programs, the addition `TYPE` can be used to reference structured types in ABAP programs. For reasons of compatibility, the `LIKE` reference to structured types is retained.

From ABAP release 4.5A, table types can be defined in ABAP Dictionary. These table types have exactly the same specification as internal tables in ABAP, including an access type, key, and line type. Any dictionary data type can be used as a line type, so making complex nested tables possible. In ABAP programs, the addition `TYPE` can be used to reference table types in the dictionary.

As well as the central administration of data types, the most important task of ABAP Dictionary is still the administration of database tables. The dictionary describes the elementary types from which the structured type of a data record in the database table is constructed. As in the past, it is still possible to use the addition `LIKE` in ABAP to reference the structure of database tables and of individual data fields. From 4.5A, it is also possible to use `TYPE` to reference the structure and fields of database tables.

SAP plans to enable the central definition of constants in ABAP Dictionary. This is currently only possible in type pools. Also, a comprehensive bundling concept will make the encapsulation done in type pools available throughout the system.

abenabap.html abennews.html abennews-4.html abennews-40.html