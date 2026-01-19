---
title: "ABENSTREAMS_LOCATORS"
description: |
  ABENSTREAMS_LOCATORS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTREAMS_LOCATORS.htm"
abapFile: "ABENSTREAMS_LOCATORS.html"
keywords: ["do", "while", "if", "case", "method", "class", "data", "types", "internal-table", "ABENSTREAMS", "LOCATORS"]
---

In ABAP SQL, [data streams](ABENDATA_STREAM_GLOSRY.html) and [locators](ABENLOCATOR_GLOSRY.html) can be used to access [LOBs](ABENLOB_GLOSRY.html). LOBs are fields in data sources of type [`STRING`](ABENDDIC_BUILTIN_TYPES.html) or [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), or SQL expressions that return one of these data types, for example, [type conversion functions](ABENABAP_SQL_CONVERSION_FUNCTIONS.html). The associated objects are grouped together under the term [LOB handles](ABENLOB_HANDLE_GLOSRY.html). While a locator is always an LOB handle, there can also be data streams for other resources (see [Streaming](ABENSTREAMING.html)).

For regular access to LOBs, ABAP data objects of the types `string` and `xstring` are used, to which the entire LOB is passed in the case of reads and from which the entire LOB is taken in the case of writes. Data streams and locators, however, work as follows:

The use of data streams and locators for LOBs in DDIC database tables can improve performance with respect to the program runtime, by omitting unnecessary data transports. There are, however, also some disadvantages:

The following sections introduce the classes for data streams and locators as well as the interfaces they include for general LOB handles.

A maximum of 1000 LOB handles can be open in a [database LUW](ABENDATABASE_LUW_GLOSRY.html).

-   For reads, [reader streams](ABENREADER_STREAM_GLOSRY.html) can be linked with LOBs using the assignment of corresponding reference variables. The same applies to writes and [writer streams](ABENWRITER_STREAM_GLOSRY.html). LOB data can be processed in portions using the methods of the streams. This has the benefit that LOBs do not have to be completely realized in the ABAP program.
-   In the case of reads and writes, locators can be linked with LOBs by assigning corresponding reference variables. Using the methods of the locators, the substrings of LOBs or the properties of LOBs can be accessed without requiring a complete realization in the ABAP program. Furthermore, locators enable the copying of LOBs within the database without having to transport the data between the database and the AS ABAP.

-   The use of locators leads to higher resource consumption in the database system. Locators are not yet supported by all databases. In this case, they must be emulated from the database interface on AS ABAP.
-   The use of data streams does not lead to increased resource consumption in the database system, but data streams are somewhat more limited in their use. In particular, data streams cannot be used if internal tables are used in the ABAP SQL statements.

-   [Streaming](ABENABAP_SQL_STREAMING.html)
-   [Locators](ABENLOCATORS.html)
-   [LOB Interfaces](ABENLOB_INTERFACES.html)

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html