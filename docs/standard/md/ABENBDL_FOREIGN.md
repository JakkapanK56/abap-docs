---
title: "ABENBDL_FOREIGN"
description: |
  ABENBDL_FOREIGN - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_FOREIGN.htm"
abapFile: "ABENBDL_FOREIGN.html"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "types", "ABENBDL", "FOREIGN"]
---

`...  foreign entity ForeignEntityName [alias AliasName];   ...`

Defines a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html) which is not part of the [CDS composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of the current RAP BO as part of the [response structures](ABAPEML_RESPONSE.html), thus enabling message mapping for other BOs. An alias name `AliasName` can be specified. The length of this alias name can have a maximum of 30 characters.

A [foreign entity](ABENRAP_FOREIGN_ENTITY_GLOSRY.html) is defined in the [RAP behavior definition header](ABENCDS_BDEF_HEADER_GLOSRY.html) and is therefore included in the response structures of all RAP BO nodes of the current RAP BO. A foreign entity includes the specified entity `ForeignEntityName` in the response structures, but not a complete foreign RAP BO. It is possible to specify multiple foreign entities, if required.

Here is an example for a use case: A [RAP determination](ABENRAP_DETERMINATION_GLOSRY.html) may trigger an operation of another business object that then returns messages. To receive and adapt the messages from a foreign business object, the foreign business object can be registered in the current BO as a foreign entity. The messages are mapped during the [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html).

A reimplementation of the [RAP saver method](ABENABP_SAVER_METHOD_GLOSRY.html)\\ [`map_messages`](ABENSAVER_MAP_MESSAGES.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is optional.

RAP foreign entities can be defined in the following types of behavior definitions:

The [association target](ABENASSOCIATION_TARGET_GLOSRY.html) of a [cross-BO association](ABENCDS_CROSS_BO_ASSOC_GLOSRY.html) in a BDEF is automatically included in the response types as a foreign entity. This default behavior can be disabled using the syntax addition [`without response`](ABENBDL_ASSOCIATION.html).

The following example shows a managed BDEF based on the CDS root view entity `DEMO_RAP_FOREIGN_ENTITY`. It establishes a connection to the foreign entity `DEMO_SALES_CDS_SO_1`.

**Note** This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](ABENABP_HANDLER_METHOD_GLOSRY.html) in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) are not implemented here.

The class `CL_DEMO_RAP_FOREIGN_ENTITY` accesses the BDEF and creates three new entity instances.

Code snippet:

Result: The entities of the referenced foreign business object are added to the `reported` structure.

[Example for RAP Saver Method `map_messages`](ABENABP_MAP_MESSAGES_ABEXA.html)

-   [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html)
-   [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html)
-   [projection BDEF](ABENRAP_PROJECTION_BO_GLOSRY.html)
-   [interface BDEF](ABENRAP_BO_INTERFACE_GLOSRY.html)

-   Development guide for the ABAP RESTful Application Programming Model, section [*Mapping Messages Between Business Objects*](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/6a0e78d79b0a4f7e8d3298dbd99c8d09?version=sap_cross_product_abap).
-   [`map_messages`, RAP Saver Method](ABENSAVER_MAP_MESSAGES.html)

managed implementation in class bp\_demo\_rap\_foreign\_entity unique;\\nstrict(2);\\n//enables MAP\_MESSAGES:\\nforeign entity DEMO\_SALES\_CDS\_SO\_1;\\n\\ndefine behavior for DEMO\_RAP\_FOREIGN\_ENTITY alias RootEntity\\npersistent table DEMO\_DBTAB\_ROOT\\nlock master\\nauthorization master (global)\\n\\{\\n create;\\n update;\\n delete;\\n\\n field(readonly:update) key\_field;\\n\\} DELETE FROM demo\_dbtab\_root. \\n MODIFY ENTITIES OF DEMO\_RAP\_FOREIGN\_ENTITY \\n ENTITY RootEntity \\n CREATE FIELDS ( key\_field ) WITH VALUE #( \\n ( %cid = '1' key\_field = 1 ) \\n ( %cid = '2' key\_field = 2 ) \\n ( %cid = '3' key\_field = 3 ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). \\n COMMIT ENTITIES. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_bdef\_header.html