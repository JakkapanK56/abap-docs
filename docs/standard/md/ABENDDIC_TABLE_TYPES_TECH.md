---
title: "ABENDDIC_TABLE_TYPES_TECH"
description: |
  ABENDDIC_TABLE_TYPES_TECH - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDDIC_TABLE_TYPES_TECH.htm"
abapFile: "ABENDDIC_TABLE_TYPES_TECH.html"
keywords: ["loop", "do", "if", "data", "types", "internal-table", "field-symbol", "ABENDDIC", "TABLE", "TYPES", "TECH"]
---

A table type describes an [internal table](ABENINTERNAL_TABLE_GLOSRY.html) with the following technical properties:

-   **Line type**
-   The line type can be defined as follows:

-   The line type can be defined by referencing any [data type](ABENDDIC_DATA_TYPES.html), including [DDIC database tables](ABENDDIC_DATABASE_TABLES.html) and [DDIC views](ABENDDIC_VIEWS.html).
-   Elementary or reference-like line types can also be specified by using their technical properties directly. This is done in the same way as with [data elements](ABENDDIC_DATA_ELEMENTS.html) or [structure components](ABENDDIC_STRUCTURES_TECH.html).

-   **Table category**
-   The table category can be specified as follows:

-   [Standard table](ABENSTANDARD_TABLE_GLOSRY.html)
-   [Sorted table](ABENSORTED_TABLE_GLOSRY.html)
-   [Hashed table](ABENHASHED_TABLE_GLOSRY.html)
-   [Index table](ABENINDEX_TABLE_GLOSRY.html) as a generic table category for standard tables and sorted tables
-   Any table as a generic table category for all table categories

-   These specifications are the same as defining the table category using the statement [`TYPES`](ABAPTYPES_TABCAT.html).
-   **Table key**
-   The following can be defined as a [table key](ABENITAB_KEY.html):

-   A primary key as a [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html). The primary key is either
-   \- the [standard key](ABENSTANDARD_KEY_GLOSRY.html), or
-   \- the entire table line, given it is not a table type and does not contain a table type as a component, or
-   \- is determined using individual components of a structured line type in the relevant order, or
-   \- an [empty primary table key](ABENITAB_EMPTY_KEY.html) for [standard tables](ABENSTANDARD_TABLE_GLOSRY.html).
-   A non-empty primary key of sorted tables and hashed tables can be given a unique [alias name](ABENALIAS_GLOSRY.html) from the namespace of the secondary keys. The uniqueness of the primary key is unique or non-unique, depending on the table category, and cannot be specified at all for generic tables. If no primary key is specified or its uniqueness is not defined, the table type is generic regarding this property.
-   Up to 15 secondary keys as [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html). Each secondary key has a unique name, which cannot be `PRIMARY_KEY` or `LOOP_KEY`, and is either a sorted key or a hash key. Sorted keys can be either unique or non-unique and a hash key is always unique. A secondary key is defined either by the entire table line, if it is not a table type or does not contain a table type as component, or by using individual components of a structured line type in the relevant order. Using the additions [`WITH`](ABAPTYPES_KEYDEF.html) or [`WITHOUT FURTHER SECONDARY KEYS`](ABAPTYPES_KEYDEF.html) of the statement `TYPES`, it is possible to define explicitly whether the table type is generic with respect to the secondary keys. It is currently not possible to specify an [alias name](ABENALIAS_GLOSRY.html) for a secondary key in the ABAP Dictionary.

-   **Initial row count**
-   This specification is a hint for the internal memory management of internal tables and corresponds to the addition [`INITIAL SIZE`](ABAPTYPES_ITAB.html) in the declaration of an internal table in an ABAP program.

-   Generic table types, that is, table types for which one or more properties are generic, can only be used in ABAP for [generic typings](ABENGENERIC_TYPING_GLOSRY.html) of formal parameters or field symbols.
-   A line type cannot be defined using a reference to a [CDS entity](ABENCDS_ENTITY_GLOSRY.html), nor using a reference to a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a corresponding [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). The latter has been possible before, but since ABAP release 7.85, access to CDS-managed DDIC views (obsolete) is [obsolete](ABENCDS_ACCESS_OBSOLETE.html).

abenabap.html abenabap\_dictionary.html abenddic\_data\_types.html abenddic\_table\_types.html