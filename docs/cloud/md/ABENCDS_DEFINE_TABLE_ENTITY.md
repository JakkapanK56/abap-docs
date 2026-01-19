---
title: "ABENCDS_DEFINE_TABLE_ENTITY"
description: |
  ABENCDS_DEFINE_TABLE_ENTITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_TABLE_ENTITY.htm"
abapFile: "ABENCDS_DEFINE_TABLE_ENTITY.html"
keywords: ["select", "insert", "update", "delete", "if", "method", "class", "data", "ABENCDS", "DEFINE", "TABLE", "ENTITY"]
---

``[[`@entity_annot1`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  [[`@entity_annot2`](ABENCDS_F1_ENTITY_ANNOTATIONS.html)]\  ...  [[`@table_entity_annot1`](ABENCDS_TABLE_ENTITY_ANNO.html)]\  [[`@table_entity_annot2`](ABENCDS_TABLE_ENTITY_ANNO.html)]\  ...  [DEFINE]\ [ROOT] TABLE ENTITY table_entity            [`element_list`](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html)[;]``

Defines an [CDS table entity](ABENCDS_TABLE_ENTITY_GLOSRY.html)\\ `table_entity` in [CDS DDL](ABENCDS_DDL_GLOSRY.html).

The following source code shows a CDS table entity:

The class `CL_DEMO_CDS_TABLE_ENTITY` manipulates data of the CDS table entity using different ABAP SQL DML statements.

The following method is from that class.

-   A CDS table entity is defined using the statement `DEFINE TABLE ENTITY`. The name `table_entity` must follow the naming rules for CDS objects that are described in the topic [ABAP CDS - General Syntax Rules](ABENCDS_GENERAL_SYNTAX_RULES.html) with one constraint: the name of a table entity can have no more than 25 characters.
-   The CDS table entity can be enriched with [entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html)\\ `entity_annot1`, `entity_annot2`, ... (these are annotations that can be used in all CDS entities) or with [table entity annotations](ABENCDS_TABLE_ENTITY_ANNO.html)\\ `table_entity_annot1`, `table_entity_annot2`, ... (these are annotations that are only available for CDS table entities).
-   The addition [`ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V2.html) is optional. It defines the table entity as root entity of a [RAP business object](ABENRAP_BO_GLOSRY.html) in the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html). For further details, see topic [CDS DDL - CDS View Entity, `ROOT`](ABENCDS_DEFINE_ROOT_VIEW_V2.html).
-   [`element_list`](ABENCDS_TABLE_ENTITY_ELEMENT_LIST.html) defines the elements of the table entity.

@ClientHandling.type: #CLIENT\_INDEPENDENT\\n@AbapCatalog.deliveryClass: #APPLICATION\_DATA\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS table entity, client independent'\\ndefine table entity DEMO\_CDS\_TE\_CLIENT\_IND\\n\\{\\n key key\_element : abap.char(1);\\n\\n @EndUserText.label: 'This field is nullable'\\n col1 : abap.char(3) null;\\n \\n @EndUserText.label: 'This field uses a CDS simple type'\\n col2 : demo\_simple\_type;\\n\\n @EndUserText.label: 'This field uses a data element'\\n col3 : demo\_bt\_inheritance;\\n\\n @EndUserText.label: 'This field uses a CDS enum type'\\n col4 : DEMO\_CDS\_ENUM\_WEEKDAY;\\n\\n \_assoc : association of many to many DEMO\_CDS\_TE\_ASSOC \\n on $projection.key\_element = \_assoc.col3;\\n\\n\\}\\n DELETE FROM demo\_cds\_te\_client\_ind. \\n\\ \\nINSERT demo\_cds\_te\_client\_ind \\n FROM TABLE @( \\n VALUE #( ( key\_element = 'A' col1 = 'aaa' col2 = 8 col3 = 'A' ) \\n ( key\_element = 'B' col1 = 'bbb' col2 = 9 col3 = 'B' ) \\n ( key\_element = 'C' col1 = 'ccc' col2 = 10 col3 = 'C' ) \\n ( key\_element = 'D' col1 = 'ddd' col2 = 11 col3 = 'D' ) \\n ) ). \\n\\ \\nUPDATE demo\_cds\_te\_client\_ind \\n SET col1 = 'XXX' \\n WHERE key\_element = 'A'. \\n\\ \\n\\ \\nMODIFY demo\_cds\_te\_client\_ind FROM @( \\n VALUE #( key\_element = 'B' col1 = 'XXX' \\n ) ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_te\_client\_ind \\n ORDER BY key\_element \\n INTO TABLE @DATA(modify). "#EC CI\_NOWHERE abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_entities.html