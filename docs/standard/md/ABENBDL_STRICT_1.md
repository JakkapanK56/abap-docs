---
title: "ABENBDL_STRICT_1"
description: |
  ABENBDL_STRICT_1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_STRICT_1.htm"
abapFile: "ABENBDL_STRICT_1.html"
keywords: ["update", "delete", "do", "if", "method", "class", "ABENBDL", "STRICT"]
---

`...  strict;   ...`

The addition `strict` enables [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html), version 1.

`strict` must always appear as the second line in a [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

A complete list of additional syntax requirements in BDEF strict mode is provided in the development guide for the ABAP RESTful Application Programming Model, section [Strict Mode - Implementation Requirements](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/761d389302e8463a9c3509907f22f22f?version=sap_cross_product_abap).

Related information:

[RAP BDL - BDEF Strict Mode](ABENBDL_STRICT.html)

[RAP BDL - `strict(2)`](ABENBDL_STRICT_2.html)

The following RAP behavior definition demonstrates the syntax for enabling strict mode. It is mandatory that the keyword `strict` is the second statement of the behavior definition.

In this example, strict mode enforces [authorization control](ABENRAP_AUTH_CONTROL_GLOSRY.html).

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) are not implemented here.

The following RAP behavior definition shows an unmanaged BDEF with strict mode. It is mandatory that the keyword `strict` is the second statement of the behavior definition.

In this example, strict mode enforces the following:

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) of the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) are not implemented here.

-   Each entity must be defined as `lock master` or `lock dependent`
-   Each entity must be defined as `authorization master` or `authorization dependent`
-   The child entity must explicitly specify the to-parent association
-   The field `key_field`, which is used in the ON condition of the to-parent association `_parent`, must be specified as `readonly`.

managed implementation in class bp\_demo\_rap\_strict unique;\\nstrict;\\ndefine behavior for DEMO\_RAP\_STRICT\\npersistent table DEMO\_DBTAB\_ROOT\\nlock master\\nauthorization master ( global )\\n\\{\\n create;\\n update;\\n delete;\\n field ( readonly:update ) key\_field;\\n\\} unmanaged implementation in class bp\_demo\_unmanaged\_root\_strict unique;\\nstrict;\\n\\ndefine behavior for DEMO\_UNMANAGED\_ROOT\_STRICT\\n\\nlock master\\nauthorization master ( instance, global )\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; \\}\\n field ( readonly ) key\_field;\\n\\}\\n\\ndefine behavior for DEMO\_UNMANAGED\_CHILD\_STRICT\\nlock dependent by \_parent\\nauthorization dependent by \_parent\\n\\{\\n update;\\n delete;\\n association \_parent;\\n field ( readonly ) key\_field;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html abenbdl\_strict.html