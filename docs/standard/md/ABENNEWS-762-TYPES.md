---
title: "ABENNEWS-762-TYPES"
description: |
  ABENNEWS-762-TYPES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-762-TYPES.htm"
abapFile: "ABENNEWS-762-TYPES.html"
keywords: ["do", "if", "catch", "data", "types", "ABENNEWS", "762", "TYPES"]
---

[1. New Built-In ABAP Type `int8`](#ABAP_MODIFICATION_1@4@)

[2\. Global Temporary Tables](#ABAP_MODIFICATION_2@4@)

[3\. Value Ranges of Domains](#ABAP_MODIFICATION_3@4@)

[4\. Replacement Objects](#ABAP_MODIFICATION_4@4@)

The new built-in data type [`int8`](ABENBUILTIN_TYPES_NUMERIC.html) enables 8-byte integers with signs to be declared.

Database tables in ABAP Dictionary can be defined using the table category [global temporary table](ABENDDIC_DATABASE_TABLES_GTT.html). A global temporary table (GTT) can only be filled with temporary data during a database LUW. When a GTT is filled using ABAP SQL, it must be emptied again explicitly before the next implicit database commit. If not, an uncatchable exception is raised.

When the [value range of a domain](ABENDDIC_DOMAINS_SEMA.html) is defined, the data types `INT1`, `INT2`, and `INT4` are now checked (like `INT8`) to determine whether the fixed values and interval boundaries are valid values, that is, that they lie within the [value range](ABENDDIC_BUILTIN_TYPES.html) defined by the technical properties. Existing domains with invalid value ranges must be corrected.

A CDS view can be assigned as a [replacement object](ABENDDIC_REPLACEMENT_OBJECTS.html) to a transparent database table or a DDIC database view. In ABAP SQL reads, the replacement object is then accessed instead of the original object.

-   The associated data type in ABAP Dictionary was introduced with the name [`INT8`](ABENDDIC_BUILTIN_TYPES.html).
-   The [value range](ABENBUILTIN_TYPES_NUMERIC.html) of the new data type `int8` is -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807.
-   Apart from the extended value range, the new data type `int8` has the same properties as the existing data type [`i`](ABENBUILTIN_TYPES_NUMERIC.html) for 4-byte integers, with the following exceptions:

-   The [alignment required](ABENALIGNMENT.html) for data objects of type `int8` is an address divisible by 8.
-   The value of the [output length](ABENWRITE_OUTPUT_LENGTH.html) of data objects of type `int8` is 20.
-   A new [calculation type](ABENARITH_TYPE.html) has been introduced for `int8`, situated between `i` and `p` in the hierarchy.

abenabap.html abennews.html abennews-76.html abennews-762.html abennews-762-745.html