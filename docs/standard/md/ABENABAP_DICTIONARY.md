---
title: "For common usage in ABAP Dictionary objects, ABAP CDS, and ABAP programs, there is a set of"
description: |
  The DDIC types, DDIC database tables, and DDIC views can be used as global data types in ABAP programs. Dictionary objects must be activated before they can be used, just like ABAP programs. Once activated, new or modified definitions are available directly for all other repository objects. If an ex
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_DICTIONARY.htm"
abapFile: "ABENABAP_DICTIONARY.html"
keywords: ["delete", "do", "while", "if", "case", "class", "data", "types", "ABENABAP", "DICTIONARY"]
---

ABAP Dictionary is a persistent repository of type definitions (meta data) in the form of [dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html). These dictionary objects are visible in and can be accessed from other [repository objects](ABENREPOSITORY_OBJECT_GLOSRY.html), particularly [ABAP CDS](ABENABAP_CDS_GLOSRY.html) objects and ABAP programs, as long as this is in line with the package concept. As in the [ABAP language](ABENABALA_GLOSRY.html), the data types that can be defined in ABAP Dictionary can be elementary, structured, or tabular. Reference types are also possible. The main task of ABAP Dictionary structures is to describe DDIC database tables and DDIC views on the database, while at the same time being visible in all other repository objects and allowing for the definition of type-friendly interface parameters and data objects for handling DDIC database tables and DDIC views. Additionally, ABAP Dictionary manages lock objects and search helps. All ABAP Dictionary objects (definitions) are transportable repository objects.

The following ABAP Dictionary objects are available:

ABAP Dictionary has the following built-in data types and functions:

For common usage in ABAP Dictionary objects, ABAP CDS, and ABAP programs, there is a set of

The DDIC types, DDIC database tables, and DDIC views can be used as global data types in ABAP programs. Dictionary objects must be activated before they can be used, just like ABAP programs. Once activated, new or modified definitions are available directly for all other repository objects. If an existing dictionary object is changed, the repository objects that use it continue to work with the previous active version until the modified dictionary object is activated successfully. A dictionary object can only be deleted once all objects that use it have been removed.

For an overview of the tools for dictionary objects, see the following:

-   [Data types](ABENDDIC_DATA_TYPES.html)
-   ABAP Dictionary supports the following standalone data types:

-   [Data elements](ABENDDIC_DATA_ELEMENTS.html) for elementary data types and reference types.
-   [DDIC structures](ABENDDIC_STRUCTURES.html) that consist of other data types.
-   [DDIC table types](ABENDDIC_TABLE_TYPES.html) which can have any other DDIC data type except for built-in data types as a line type.
-   **Note** DDIC tables types are not to be confused with DDIC database tables that describe tables on the database.

-   The data types in the ABAP Dictionary serve as reference objects for interface parameters and data objects within AS ABAP. Other repository objects can refer directly to the data types in the ABAP Dictionary.
-   [DDIC database tables](ABENDDIC_DATABASE_TABLES.html)
-   A DDIC database table (not to be confused with a table type) is an object in the ABAP Dictionary that describes a database table. Regarding the data type, a DDIC database table is a non-nested structure in which further technical properties of the DDIC database table can be defined alongside the type properties. The physical database table on the database is created when a DDIC database table is activated. In an ABAP program, a DDIC database table is handled both as a DDIC structure and as a database table. This means that a DDIC database table can be used for typing structured data objects and it can also be accessed using [ABAP SQL](ABENABAP_SQL_GLOSRY.html).
-   [DDIC views](ABENDDIC_VIEWS.html)
-   A DDIC view defines an application-specific view. It includes columns of one or multiple DDIC database tables. When combining multiple tables, a view usually implements a join with statically defined join conditions. The columns of a view represent a non-nested structure that can be used as a data type. The following types of DDIC views are available:

-   [DDIC table views](ABENDDIC_TABLE_VIEWS.html) for views on database tables in the ABAP Dictionary.
-   [DDIC external views](ABENDDIC_EXTERNAL_VIEWS.html) (obsolete) for views on [SAP HANA views](ABENHANA_VIEW_GLOSRY.html).

-   In ABAP SQL, a DDIC view can usually be accessed like a DDIC database table. An exception to this are [DDIC maintenance views](ABENMAINTENANCE_VIEW_GLOSRY.html) and [DDIC help views](ABENHELP_VIEW_GLOSRY.html).
-   [Extensibility](ABENDDIC_ENHANCEMENTS.html)
-   ABAP Dictionary supports extensions of [DDIC structures](ABENDDIC_STRUCTURES.html), [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), [DDIC database views](ABENDDIC_DATABASE_VIEWS.html), and [domains](ABENDDIC_DOMAINS.html). These extensions do not modify the original object.
-   [Replacement objects](ABENDDIC_REPLACEMENT_OBJECTS.html)
-   [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) and [DDIC database views](ABENDDIC_DATABASE_VIEWS.html) can be assigned a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) as replacement object. In certain access scenarios, the access is then redirected to the replacement object instead of the original object.
-   [DDIC tuning objects](ABENDDIC_TUNING_OBJECTS.html)
-   [HANA tuning objects](ABENHANA_TUNING_OBJECT_GLOSRY.html) can be created for DDIC objects to define technical settings and tunings that can be transported separately.

-   A set of [built-in ABAP Dictionary data types](ABENDDIC_BUILTIN_TYPES_INTRO.html), which are the basis for the elementary components of all ABAP Dictionary objects. [ABAP CDS](ABENABAP_CDS_GLOSRY.html) is also based on these elementary data types.
-   ABAP Dictionary provides a set of [built-in database functions](ABENDDIC_BUILTIN_FUNCTIONS.html) that can be used in [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and/or in [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

-   [predefined types](ABENDDIC_PREDEF_TYPES.html)

-   [Activating ABAP Dictionary Types](ABENDDIC_ACTIVATION.html)

-   [Tools for Dictionary Objects](ABENDDIC_TOOLS.html)

-   GUI technologies such as classic [dynpros](ABENDYNPRO_GLOSRY.html) or [Web Dynpro](ABENWEB_DYNPRO_GLOSRY.html) are closely linked with ABAP Dictionary. This applies especially to [input checks](ABENABAP_DYNPROS_CHECKS_AUTO.html) as well as [field helps](ABENFIELD_HELP_GLOSRY.html) and [input helps](ABENINPUT_HELP_GLOSRY.html) of input fields (see [Field Helps, Input Helps, and Dropdown List Boxes](ABENABAP_DYNPROS_HELP.html)). If the data type of an input field is declared using a type from the ABAP Dictionary, the documentation of the data elements is used implicitly as the F1 help. Fixed values from domains, check tables (foreign keys), and search helps can all be used for the F4 help. All valid input values of a field can be provided by means of the value range of a domain. Any changes to existing dictionary objects that are used directly or indirectly on UIs can, in the worst cases, modify the behavior of the UIs to the extent that they can no longer be executed.
-   Database objects managed by the ABAP Dictionary, such as DDIC database tables or DDIC views, should not be accessed directly on the database (see [Access to ABAP-Managed Database Objects](ABENDATABASE_ACCESS_RECOMM.html)).
-   Further dictionary objects are:

-   [Lock objects](ABENLOCK_OBJECT_GLOSRY.html)
-   Lock objects serve as a basis for [SAP locks](ABENSAP_LOCK_GLOSRY.html). Lock objects specify DDIC database tables linked by means of foreign key relationships to which a shared lock is to be applied. When a lock object is created, two [lock function modules](ABENLOCK_FUNCTION_MODULE_GLOSRY.html) for use in ABAP programs are generated automatically.
-   [Search helps](ABENSEARCH_HELP_GLOSRY.html)
-   A search help can search for values using a combination of structure components, data elements, and check tables to browse through assigned data. The user does not need to know the exact spelling of a value.

-   This documentation describes the type definitions in ABAP Dictionary and how they interact with the ABAP programming language. Detailed information about [lock objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21eea5446011d189700000e8322d00) and [search helps](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21ee2b446011d189700000e8322d00) can be found in the [ABAP Dictionary](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21ea0b446011d189700000e8322d00) documentation on SAP Help Portal.

abenabap.html