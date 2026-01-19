---
title: "The data type of"
description: |
  are allowed to be changed by the API provider as follows: All these changes result in a larger value range compared with the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operat
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENC1_CONSUMER_RULES_ELEM.htm"
abapFile: "ABENC1_CONSUMER_RULES_ELEM.html"
keywords: ["do", "class", "data", "types", "internal-table", "ABENC1", "CONSUMER", "RULES", "ELEM"]
---

The data type of

are allowed to be changed by the API provider as follows:

All these changes result in a larger value range compared with the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operations with structured data that contain components of such a type.

When working with elementary data objects of one of the above types the behavior after an allowed type change depends on the type, the operand position and the content.

**Possible Problems**

Examples for possible problems are:

**Mitigation**

When declaring data objects, always refer to the released data types themselves. Do not refer to user-defined types. Use data objects referring to released types only at operand positions where changing the type cannot produce an error.

Changing the data type of a component of a structure changes the [technical type](ABENTECHNICAL_TYPE_PRPT_GLOSRY.html) of the complete structure. This has a large impact since there are many operand positions, where compatibility is required for structures and generally, the same errors can occur that result from changing the elements of structures described below and the same mitigations apply.

-   DDIC domains or DDIC data elements
-   components of DDIC structures and DDIC database tables or elements of CDS entities
-   public types of global ABAP classes or interfaces

-   Integer types `INT1`, `INT2`, and `INT4` or `b`, `s`, and `i` can be replaced by integer types of a larger value range.
-   The length of data types `CHAR`, `SSTRING`, `DEC`, `CURR`, `QUAN`, `DF16_DEC`, `DF34_DEC` or `c`, `p` can be increased.
-   The number of decimal places of data types `DEC`, `CURR`, `QUAN`, `DF16_DEC`, `DF34_DEC` or `p` can be increased.

-   In assignments of data objects that have a changed type to data objects whose type is not changed, content can be cut off or overflow exceptions may occur.
-   In statements that require compatible data types, syntax errors can occur. Examples are:

-   Assignments between [data reference variables](ABENDATA_REFERENCE_VARIABLE_GLOSRY.html).
-   Access to internal tables with an elementary line type using a table key.
-   Importing data from data clusters with [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html).

-   In statements that require lossless assignments, exceptions can occur. Examples are:

-   [Lossless operator `EXACT`](ABENCONSTRUCTOR_EXPRESSION_EXACT.html)
-   [Host variables](ABENABAP_SQL_HOST_VARIABLES.html) in read position ABAP SQL.

abenabap.html abenabap\_versions\_and\_apis.html abenabap\_release\_contracts.html abenconsumer\_rules.html