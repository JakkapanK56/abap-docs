---
title: "ABENNEWS-792-ABAP_CDS"
description: |
  ABENNEWS-792-ABAP_CDS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-792-ABAP_CDS.htm"
abapFile: "ABENNEWS-792-ABAP_CDS.html"
keywords: ["if", "data", "ABENNEWS", "792", "ABAP", "CDS"]
---

[1. Annotation `Environment.sql.passValue`, Scope Enhancement](#ABAP_MODIFICATION_1@4@) 

[2. New Annotation `Environment.sql.passValueForClient`](#ABAP_MODIFICATION_2@4@)

[3\. Further Operand Positions for Typed Literals](#ABAP_MODIFICATION_3@4@)

The ABAP annotation [`Environment.sql.passValue`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) is now also available for [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html) in CDS view entities, CDS projection views, and CDS hierarchies. The annotation scope has been enhanced.

A new ABAP annotation is available in CDS view entities, CDS projection views, and CDS hierarchies: [`Environment.sql.passValueForClient`](ABENCDS_F1_ENTITY_ANNOTATIONS.html). It works in a similar way to the annotation `Environment.sql.passValue`, but for client fields. It specifies whether a placeholder *?* or a literal value is passed to the database in an ABAP SQL condition when the client field is compared with a host variable.

[Typed literals](ABENTYPED_LITERAL_GLOSRY.html) can now be used in more operand positions in ABAP CDS. They can now be used in the `WHERE` condition of [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) and in the `ON` condition of [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html).

abenabap.html abennews.html abennews-79.html abennews-792.html