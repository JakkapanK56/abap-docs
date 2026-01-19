---
title: "ABENDDIC_DATABASE_TABLES_INDEX"
description: |
  ABENDDIC_DATABASE_TABLES_INDEX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDDIC_DATABASE_TABLES_INDEX.htm"
abapFile: "ABENDDIC_DATABASE_TABLES_INDEX.html"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "class", "data", "types", "ABENDDIC", "DATABASE", "TABLES", "INDEX"]
---

Indexes are special structures on the database that can improve the query processing time or provide additional query capabilities like text search. One or several indexes can be defined per database table. A DDIC database table has at least one [primary index](ABENPRIMARY_INDEX_GLOSRY.html) defined by its key fields. It can also have one or more optional [secondary indexes](ABENSECONDARY_INDEX_GLOSRY.html), a full text index and a fuzzy search index.

In the ABAP Dictionary, indexes can be classified as follows:

Each table has exactly one primary index that consists of its [key fields](ABENDDIC_DATABASE_TABLES_KEY.html) ([primary key](ABENPRIMARY_KEY_GLOSRY.html)). The primary index is unique, that is, each record of the table can be uniquely identified by its primary key. The primary index is created automatically by the AS ABAP for each DDIC database table.

On the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html), primary indexes can be defined as follows:

Existing `INVERTED HASH` indexes can be transformed to `INVERTED INDIVIDUAL` indexes.

For `INVERTED HASH` and `INVERTED INDIVIDUAL` indexes the following applies:

In addition to the primary index defined using the primary key, both unique and non-unique secondary indexes can be created for a DDIC database table. A secondary index consists of its name and its fields. In the ABAP Dictionary, the name is defined by an index ID that consists of three alphanumeric characters.

The secondary indexes defined for a DDIC database table are created when the table itself is created in the database system. Furthermore, new secondary indexes can be added later in the same system. Further secondary indexes can be created in other systems as extension indexes. An extension index does not modify the original indexes.

The index ID should adhere to the following naming conventions:

A short text is required for each secondary index defined in the ABAP Dictionary. On the database, the index name consists of the table name, the delimiter `~` and the DDIC index ID (for example, the database name of secondary index with ID `MTD` of DDIC database table `TMDIR` is `TMDIR~MTD`).

If for a DDIC database table [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) is switched on with the buffering type *Generic Buffering* or *Full Buffering*, each index defined in the ABAP Dictionary results also in an in-memory index for the representation of the table data in the [table buffer](ABENTABLE_BUFFER_GLOSRY.html). Such an index can improve the performance of evaluating the buffered data. For a secondary index, a property *On table buffer only* can be set. Then, the index is not created on the database, only in the table buffer.

The [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) supports a [fuzzy search index](https://help.sap.com/docs/SAP_HANA_PLATFORM/691cb949c1034198800afde3e5be6570/c612f9dc197049ef958fd0428b6faeb9). The ABAP Dictionary allows such an index to be created for DDIC database tables with the [storage type](ABENDDIC_DATABASE_TABLES_STORAGE.html) Column Store. A fuzzy search index can be defined on exactly one column of [built-in data type](ABENDDIC_BUILTIN_TYPES.html)\\ `CHAR`, `SSTRING` or `STRING`. For the first two types the length of the table field must be greater than 5. A fuzzy search index is always non-unique.

A fuzzy search index enables a [fuzzy search](https://help.sap.com/docs/SAP_HANA_PLATFORM/691cb949c1034198800afde3e5be6570/cc602780bb5710148aa2bf6cab3c015b) that provides advanced text search capabilities like similarity search. Accesses that make use of a fuzzy text index are based on the SQL language element `WHERE CONTAINS ...` and the function `SCORE`. Those are not yet supported by [ABAP CDS](ABENABAP_CDS_GLOSRY.html) and [ABAP SQL](ABENABAP_SQL_GLOSRY.html). In order to make use of a fuzzy search index, [AMDP](ABENAMDP_GLOSRY.html) or Native SQL must be used to access the DDIC database table.

Fuzzy search indexes should be used instead of full text indexes that are not available in [ABAP Cloud](ABENABAP_CLOUD_GLOSRY.html).

-   By their [repository object](ABENREPOSITORY_OBJECT_GLOSRY.html):

-   [Standard indexes](ABENSTANDARD_INDEX_GLOSRY.html) are part of the repository object of their DDIC database table and they are handled by the [Change and Transport System (CTS)](ABENCTS_GLOSRY.html) as a part of the table definition.
-   [Extension indexes](ABENEXTENSION_INDEX_GLOSRY.html) are individual repository objects and the CTS handles them as independent transport objects.

-   By their index type on the database:

-   Primary Index
-   Secondary Indexes
-   Fuzzy Search Index

-   [`INVERTED VALUE`](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/713e65a10d55404b9ac503bb7b4c735a)
-   Default index for [storage type](ABENDDIC_DATABASE_TABLES_STORAGE.html) Column Store.
-   [`INVERTED HASH`](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/713e65a10d55404b9ac503bb7b4c735a) (before HANA2, SPS 03)
-   Optional unique multi-column index of the SAP HANA database that is based on a hash function. In comparison to `INVERTED VALUE`, this index consumes considerably less memory.
-   [`INVERTED INDIVIDUAL`](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/713e65a10d55404b9ac503bb7b4c735a) (as of HANA2, SPS 03)
-   Optional unique multi-column index that has the same properties as an `INVERTED HASH` index but is less complex.

-   They must contain at least two key fields, while the default index `INVERTED VALUE` can consist of one key field.
-   Tables of [storage type](ABENDDIC_DATABASE_TABLES_STORAGE.html) Row Store are not supported.
-   Tables with a [temperature column](ABENTEMPERATURE_COLUMN_GLOSRY.html) are not supported.
-   They should not be used if range queries (`BETWEEN`) or similarity searches on a prefix of the index values are executed on the key fields, because this index type does not include sorting. Conditions are used for their key fields.

-   The IDs of indexes added by customers to DDIC tables delivered by SAP start with *Y* or *Z*.
-   The IDs of indexes added by customers to DDIC tables delivered by partners start with *J*. There can be conflicts between the index names of different partners in follow-on systems.
-   Index IDs starting with `H` are reserved for additional HANA indexes resulting from a performance analysis (see [SAP Note 1794297](https://launchpad.support.sap.com/#/notes/1794297)).
-   The IDs of indexes added to other tables can have any names, but cannot start with *Y*, *Z*, *J* or *H*. It is recommended that the IDs of fuzzy search indexes start with *FS*.

-   The following are some hints regarding the usage of secondary indexes on tables on the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html) with storage type Column Store:

-   In general, conditions that are expressed as [predicates](ABENPREDICATE_GLOSRY.html) are evaluated very efficiently by the database and secondary indexes are often not necessary for that purpose.
-   Secondary indexes may improve the performance for large tables with a high access frequency to a column (or columns) with a high selectivity.
-   Usually, an index should be defined on one column only. Such indexes also have a a low overhead during `INSERT` and `UPDATE` operations. Only in exceptional cases should a compound index with more than one field be used, e.g., if one column alone does not have a high selectivity.
-   It is not necessary to define secondary indexes on columns that are already part of the primary index.

-   Whether a secondary index is actually used or not is decided by the database optimizer.
-   Several checks are executed before a secondary index can be activated in the ABAP Dictionary. The checks can also be executed without activation.
-   The ID `0` is reserved for the primary index.
-   Table fields with the built-in data types [`STRING`](ABENDDIC_BUILTIN_TYPES.html), [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), and `GEOM_EWKB` cannot be index fields.

abenabap.html abenabap\_dictionary.html abenddic\_database\_tables.html abenddic\_database\_tables\_sema.html abenddic\_database\_tables\_semasspec.html