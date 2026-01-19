---
title: "ABENBDL_FIELD_AUGMENT"
description: |
  ABENBDL_FIELD_AUGMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_FIELD_AUGMENT.htm"
abapFile: "ABENBDL_FIELD_AUGMENT.html"
keywords: ["update", "delete", "do", "if", "method", "class", "types", "ABENBDL", "FIELD", "AUGMENT"]
---

`...field(modify[,FieldChar]) Field1[, Field2]\ [, ...];`

[RAP BO augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html) for read-only fields in a CDS projection behavior definition.

[CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html) may contain [CDS virtual elements](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) (defined using the keyword [`VIRTUAL`](ABENCDS_PROJ_VIEW_VIRTUAL_ELEMENT.html)), [fields defined by association traversal](ABENCDS_PROJ_VIEW_ELEMENT.html) ([path expressions](ABENPATH_EXPRESSION_GLOSRY.html)), or [CDS localized fields](ABENCDS_LOCALIZED_FIELD_GLOSRY.html) (defined using the keyword [`LOCALIZED`](ABENCDS_LOCALIZED.html)). These fields are by default excluded from the [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) for the [projection BDEF](ABENCDS_PROJ_BDEF_GLOSRY.html), because they are non-transactional in character. Augmentation provides a means to include these fields in transactional handling. As a prerequisite, they must be marked in the projection BDEF as follows:

field (modify) Field1 \[, Field2\]\[, ...\];

The effect is that the fields `Field1`, `Field2`, ... appear in derived types such as [`TYPE TABLE FOR CREATE`](ABAPTYPE_TABLE_FOR.html) for the projection BDEF.

The following field characteristics `FieldChar` are available for augmented fields:

The following example shows a projection BDEF that augments a virtual element. The base BDEF is `DEMO_RAP_MANAGED_ASSOC_ROOT`.

As a result, the field is part of the BDEF derived types:

For a complete end-to-end example, see the Development guide for the ABAP RESTful Application Programming Model, section [Editing Language-Dependent Fields](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/fc374ac9b02e4dbcba356afc77432dc2?version=sap_cross_product_abap).

-   `mandatory`
-   `readonly`
-   `mandatory:create`
-   `readonly:update`
-   `features:instance`

-   A prerequisite for using `features:instance` on an augmented field is that [BDEF strict mode](ABENRAP_STRICT_MODE_GLOSRY.html) is enabled.
-   An implementation in the [RAP handler method](ABENABP_HANDLER_METHOD_GLOSRY.html)\\ [`FOR INSTANCE FEATURES`](ABAPHANDLER_METH_FEATURES.html) in the ABAP behavior pool of the projection layer is required.

-   Development guide for the ABAP RESTful Application Programming Model, section [Operation Augmentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/346c2b7516ce4176bbb4daebaa80c2ca?version=sap_cross_product_abap).

projection\\nimplementation in class bp\_demo\_rap\_proj\_augment unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_AUGMENT alias \_Parent\\n\\{\\n use create(augment);\\n use update(augment);\\n use delete;\\n\\n use association \_child \\{ create(augment); \\}\\n\\n field(modify) VirtualElement;\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_AUGMENT\_CHILD alias \_Child\\n\\{\\n use update;\\n use delete;\\n\\n use association \_parent;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_projection\_bo.html abenbdl\_define\_beh\_projection.html abenbdl\_body\_projection.html