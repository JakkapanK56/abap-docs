---
title: "ABENNEWS-70-XML"
description: |
  ABENNEWS-70-XML - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-70-XML.htm"
abapFile: "ABENNEWS-70-XML.html"
keywords: ["if", "data", "types", "ABENNEWS", "XML"]
---

[1\. Enhancements to ST](#ABAP_MODIFICATION_1@4@)

[2. Changes to `CALL TRANSFORMATION`](#ABAP_MODIFICATION_2@4@)

The following changes have been made to the syntax for [Simple Transformations](ABENSIMPLE_TRANSFORMATION_GLOSRY.html):

See the [ST Statement Overview](ABENST_STATEMENTS.html).

In the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), the dynamic specification of parameters after the addition `PARAMETERS` has been enhanced by the option of entering the following table types:

-   New statements `tt:type`, `tt:node`, and `tt:front` for the definition of types in the ST program.
-   New attribute `type` for `tt:root` for the typing of data roots.
-   In type definitions and typings, `string` and `xstring` can now be also be entered as elementary ABAP types, and lengths can be specified for `c` and `x`.
-   New statement `tt:extensible` for controlling the extensibility of literal XML elements.
-   Generalization of the term *pattern* for conditional transformations.

-   `abap_trans_obj_bind_tab` for the specification of data references
-   `abap_trans_objbind_tab` for the specification of object references.

abenabap.html abennews.html abennews-70\_ehps.html abennews-70.html