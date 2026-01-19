---
title: "ABENDDIC_BUILTIN_TYPES_INTRO"
description: |
  ABENDDIC_BUILTIN_TYPES_INTRO - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_BUILTIN_TYPES_INTRO.htm"
abapFile: "ABENDDIC_BUILTIN_TYPES_INTRO.html"
keywords: ["do", "if", "data", "types", "ABENDDIC", "BUILTIN", "TYPES", "INTRO"]
---

The built-in data types in ABAP Dictionary are used as follows:

The following sections describe the properties of the built-in data types in ABAP Dictionary:

The DDIC database table `DEMO_DDIC_TYPES` has columns with many different built-in ABAP Dictionary data types. The executable example [Built-In Dictionary Types](ABENDDIC_TYPES_ABEXA.html) shows how to fill each of these columns with literal values.

-   To construct user-defined DDIC data types (DDIC data elements, DDIC structures, including DDIC database tables and DDIC views, and DDIC table types) in the ABAP Dictionary. They can also be used in [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [ABAP CDS](ABENABAP_CDS_GLOSRY.html). They cannot be addressed directly in ABAP programs, with the exception of some type specifications in ABAP SQL. Built-in dictionary data types can only be addressed in ABAP programs by using dictionary objects or CDS objects and this is why they are also called external data types.
-   They have special technical and semantic properties and can be used to model semantic models.
-   They represent an interface between the built-in ABAP types and all possible vendor-specific data types of the supported databases. A mapping takes place in both directions.

-   [Overview of All Built-In Dictionary Types](ABENDDIC_BUILTIN_TYPES.html)
-   [Properties of the Built-In Dictionary Types](ABENDDIC_BUILTIN_TYPES_PROP.html)
-   [Use of the Built-In Dictionary Types](ABENDDIC_BUILTIN_TYPE_USAGE.html)

abenabap.html abenabap\_dictionary.html