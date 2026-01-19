---
title: "ABENDDIC_TOOLS"
description: |
  ABENDDIC_TOOLS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_TOOLS.htm"
abapFile: "ABENDDIC_TOOLS.html"
keywords: ["do", "if", "method", "class", "data", "types", "ABENDDIC", "TOOLS"]
---

[Dictionary objects](ABENDICTIONARY_OBJECT_GLOSRY.html) are maintained using the ABAP Dictionary tool in ABAP Workbench and the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html). The ABAP Dictionary tool in ABAP Workbench and the ADT tools each cover parts of the set of dictionary objects, but most objects can be maintained using both methods.

The ABAP Dictionary tool is integrated into the SAP GUI-based [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html) and can be called as a standalone tool using the transaction `SE11`. In all other ABAP Workbench tools, the associated tool for a dictionary object can be called using forward navigation.

The ABAP Dictionary tool in ABAP Workbench includes the functions required to create and maintain the following dictionary objects:

Dictionary objects are maintained in form-based tools, which means that their properties are entered on SAP GUI screens and stored as metadata in the associated system tables when saved.

More information about the ABAP Dictionary tool in ABAP Workbench can be found in the [ABAP Dictionary](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21ea0b446011d189700000e8322d00) documentation in SAP Help Portal.

The names of the properties of dictionary objects that can be maintained in the ABAP Dictionary tool of the ABAP Workbench follow the names used in that tool.

The [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) provide form-based and source-code-based tools for maintaining dictionary objects.

For the following ABAP Dictionary objects, the [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) offer form-based tools that work in a similar way to the ABAP Dictionary tools in ABAP Workbench:

A description of these tools can be found under [Working with Classic Objects in ABAP Dictionary](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/b4788663d14e4492983a76e944f16caa).

The [ABAP development tools for Eclipse (ADT)](ABENADT_GLOSRY.html) offer source-code-based editors for the following ABAP Dictionary objects:

The following source code shows the definition of the DDIC database table `SCARR` using [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html). The annotations define the technical and semantic properties of the table. The structure itself is defined after the statement `DEFINE TABLE`, with further annotations describing the properties of database fields.

-   [Data types](ABENDDIC_DATA_TYPES.html)
-   [DDIC database tables](ABENDDIC_DATABASE_TABLES.html)
-   [DDIC table views](ABENDDIC_TABLE_VIEWS.html)
-   [Enhancements](ABENDDIC_ENHANCEMENTS.html)
-   [Replacement objects](ABENDDIC_REPLACEMENT_OBJECTS.html)
-   [Lock objects](ABENLOCK_OBJECT_GLOSRY.html)
-   [Search helps](ABENSEARCH_HELP_GLOSRY.html)

-   [Data elements](ABENDDIC_DATA_ELEMENTS.html)
-   [Domains](ABENDDIC_DOMAINS.html)
-   [DDIC table types](ABENDDIC_TABLE_TYPES.html)
-   [Technical properties of database tables](ABENDDIC_DATABASE_TABLES_TECHSPEC.html)
-   [DDIC external views](ABENDDIC_EXTERNAL_VIEWS.html)
-   [Lock objects](ABENLOCK_OBJECT_GLOSRY.html)

-   [DDIC structures](ABENDDIC_STRUCTURES.html), [DDIC database tables](ABENDDIC_DATABASE_TABLES.html), [append structures](ABENDDIC_APPEND_STRUCTURES.html)
-   These dictionary objects are edited using the following [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statements:

-   [`DEFINE STRUCTURE`](ABENDDICDDL_DEFINE_STRUCTURE.html)
-   [`DEFINE TABLE`](ABENDDICDDL_DEFINE_TABLE.html)
-   [`EXTEND TYPE`](ABENDDICDDL_EXTEND_TYPE.html)

-   Here, however, the source code of the dictionary objects is not saved and transported. Instead, the source code of a dictionary object of this type is generated from the metadata of the associated system tables. Conversely, the metadata itself is derived from source code directly and saved to the system tables. Like in ABAP CDS, the source code contains SQL parts that define the data structure and annotations (introduced using `@`) that define properties.
-   [Type pools](ABENDDIC_TYPE_GROUPS.html)
-   Type pools are edited in ABAP Editor in ADT.
-   [Dependency rules](ABENDDIC_DEPENDENCY_RULES.html)
-   Dependency rules are defined using the following [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement:

-   [`DEFINE DEPENDENCY RULE`](ABENDDICDDL_DEFINE_DRUL.html)

-   The source code for dependency rules is saved and transported and a dependency rule is created from the source code.
-   [Dynamic caches](ABENDDIC_DYNAMIC_CACHES.html)
-   Dynamic caches are defined using the following [Dictionary DDL](ABENDICTIONARY_DDL_GLOSRY.html) statement:

-   [`DEFINE DYNAMIC CACHE`](ABENDDICDDL_DEFINE_DYNAMIC_CACHE.html)

-   The source code for dynamic caches is saved and transported and a dynamic cache is created from the source code.

-   The standalone transportable [table-specific technical properties of DDIC database tables](ABENDDIC_DATABASE_TABLES_TECHSPEC.html) are maintained in a form-based tool in ADT and not in Dictionary DDL.
-   A description of the Dictionary DDL for DDIC structures, DDIC database tables, and DDIC append structures can also be found in the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

@EndUserText.label : 'Airline' \\n@AbapCatalog.enhancement.category : #EXTENSIBLE\_CHARACTER\_NUMERIC \\n@AbapCatalog.tableCategory : #TRANSPARENT \\n@AbapCatalog.deliveryClass : #A \\n@AbapCatalog.dataMaintenance : #ALLOWED \\ndefine table scarr \\{ \\n @AbapCatalog.foreignKey.keyType : #KEY \\n @AbapCatalog.foreignKey.screenCheck : true \\n key mandt : s\_mandt not null \\n with foreign key \[0..\*,1\] t000 \\n where mandt = scarr.mandt; \\n key carrid : s\_carr\_id not null; \\n carrname : s\_carrname not null; \\n @AbapCatalog.foreignKey.keyType : #NON\_KEY \\n @AbapCatalog.foreignKey.screenCheck : true \\n currcode : s\_currcode not null \\n with foreign key \[0..\*,1\] scurx \\n where currkey = scarr.currcode; \\n url : s\_carrurl not null; \\} abenabap.html abenabap\_dictionary.html