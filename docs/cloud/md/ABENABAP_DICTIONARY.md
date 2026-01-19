---
title: "For common usage in ABAP Dictionary objects, ABAP CDS, and ABAP programs, there is a set of"
description: |
  The DDIC types, DDIC database tables, can be used as global data types in ABAP programs. Dictionary objects must be activated before they can be used, just like ABAP programs. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictiona
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABAP_DICTIONARY.htm"
abapFile: "ABENABAP_DICTIONARY.html"
keywords: ["delete", "while", "if", "data", "types", "ABENABAP", "DICTIONARY"]
---

ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html). These dictionary objects are visible in and can be accessed from other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html), particularly [ABAP CDS](ABENABAP_CDS_GLOSRY.html) objects and ABAP programs, as long as this is in line with the package concept. As in the [ABAP language](ABENABALA_GLOSRY.html), the data types that can be defined in ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The main task of ABAP Dictionary structures is to describe DDIC database tables and DDIC views on the database, while at the same time being visible in all other repository objects and allowing for the definition of type-friendly interface parameters and data objects for handling DDIC database tables and DDIC views. Additionally, ABAP Dictionary manages lock objects and search helps. All ABAP Dictionary objects (definitions) are transportable repository objects.

The following ABAP Dictionary objects are available:

ABAP Dictionary has the following built-in data types and functions:

For common usage in ABAP Dictionary objects, ABAP CDS, and ABAP programs, there is a set of

The DDIC types, DDIC database tables, can be used as global data types in ABAP programs. Dictionary objects must be activated before they can be used, just like ABAP programs. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it continue to work with the previous active version until the modified dictionary object is activated successfully. A dictionary object can only be deleted once all objects that use it have been removed.

-   [Data types](ABENDDIC_DATA_TYPES.html)
-   ABAP Dictionary supports the following standalone data types:

-   [Data elements](ABENDDIC_DATA_ELEMENTS.html) for elementary data types and reference types.
-   [DDIC structures](ABENDDIC_STRUCTURES.html) that consist of other data types.
-   [DDIC table types](ABENDDIC_TABLE_TYPES.html) which can have any other DDIC data type except for built-in data types as a line type.
-   **Note** DDIC tables types are not to be confused with DDIC database tables that describe tables on the database.

-   The data types in the ABAP Dictionary serve as reference objects for interface parameters and data objects within AS ABAP. Other repository objects can refer directly to the data types in the ABAP Dictionary.
-   [DDIC database tables](ABENDDIC_DATABASE_TABLES.html)
-   A DDIC database table (not to be confused with a table type) is an object in the ABAP Dictionary that describes a database table. Regarding the data type, a DDIC database table is a non-nested structure in which further technical properties of the DDIC database table can be defined alongside the type properties. The physical database table on the database is created when a DDIC database table is activated. In an ABAP program, a DDIC database table is handled both as a DDIC structure and as a database table. This means that a DDIC database table can be used for typing structured data objects and it can also be accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html).
-   [DDIC tuning objects](ABENDDIC_TUNING_OBJECTS.html)
-   [HANA tuning objects](ABENHANA_TUNING_OBJECT_GLOSRY.html) can be created for DDIC objects to define technical settings and tunings that can be transported separately.

-   A set of [built-in ABAP Dictionary data types](ABENDDIC_BUILTIN_TYPES_INTRO.html), which are the basis for the elementary components of all ABAP Dictionary objects. [ABAP CDS](ABENABAP_CDS_GLOSRY.html) is also based on these elementary data types.
-   ABAP Dictionary provides a set of [built-in database functions](ABENDDIC_BUILTIN_FUNCTIONS.html) that can be used in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and/or in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

-   [predefined types](ABENDDIC_PREDEF_TYPES.html)

-   [Activating ABAP Dictionary Types](ABENDDIC_ACTIVATION.html)

abenabap.html