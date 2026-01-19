---
title: "ABENCDS_TABLE_ENTITY_ANNO"
description: |
  ABENCDS_TABLE_ENTITY_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_TABLE_ENTITY_ANNO.htm"
abapFile: "ABENCDS_TABLE_ENTITY_ANNO.html"
keywords: ["if", "class", "ABENCDS", "TABLE", "ENTITY", "ANNO"]
---

``... @[`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) ...``

Specifies an [annotation](ABENCDS_ANNOTATION_GLOSRY.html)\\ [`annotation`](ABENCDS_ANNOTATIONS_SYNTAX.html) as a table entity annotation in the definition of a [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html) in front of the statement [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html).

For `annotation`, both [ABAP annotations](ABENABAP_ANNOTATION_GLOSRY.html) and [framework-specific annotations](ABENFRMWRK_ANNOTATION_GLOSRY.html) can be specified that are available for this scope. For framework-specific annotations, refer to [Framework-Specific Annotation Syntax](ABENCDS_ANNOTATIONS_FRMWRK_TABLES.html).

The following is a list of the ABAP annotations for the current scope:

-   AbapCatalog Annotations

-   `[AbapCatalog.deliveryClass](ABENCDS_61840010-_ANNO.html)`
-   `[AbapCatalog.entityBuffer.definitionAllowed](ABENCDS_2036691489-_ANNO.html)`

-   AccessControl Annotations

-   `[AccessControl.authorizationCheck](ABENCDS_1180334353_ANNO.html)`

-   ClientHandling Annotations

-   `[ClientHandling.type](ABENCDS_613831553_ANNO.html)`

-   Alongside the function annotations shown here, the globally valid [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html) can also be specified for a table entity.
-   The annotations `AccessControl` and `ObjectModel` have further [framework-specific subannotations](ABENCDS_ANNOTATIONS_FRMWRK.html).
-   Special rules for [Client Handling in CDS Table Entities](ABENCDS_TABLE_ENTITY_CLIENT.html):

-   For the annotation `ClientHandling.type` only the enumeration values `#CLIENT_DEPENDENT` and `#CLIENT_INDEPENDENT` can be specified in table entity definitions. Especially, `#INHERITED` cannot be used.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html abencds\_define\_table\_entity.html