---
title: "ABENCDS_DEFINE_WRTBL_VIEW_V2"
description: |
  ABENCDS_DEFINE_WRTBL_VIEW_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DEFINE_WRTBL_VIEW_V2.htm"
abapFile: "ABENCDS_DEFINE_WRTBL_VIEW_V2.html"
keywords: ["select", "insert", "update", "delete", "if", "method", "class", "data", "types", "ABENCDS", "DEFINE", "WRTBL", "VIEW"]
---

`... WRITABLE ...`

The addition `WRITABLE` defines a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) as [writable](ABENWRITABLE_V2_GLOSRY.html).

CDS view entities cannot be defined as writable if they contain:

Further restrictions:

Writable view entities can only select from [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) and [CDS table entities](ABENCDS_TABLE_ENTITIES.html).

DML modifications that are available to be performed on writable view entities are:

Writable view entities can only select from [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) and [CDS table entities](ABENCDS_TABLE_ENTITIES.html).

The following view entity is defined as writable.

The class `CL_DEMO_CDS_WRITABLE_VES` manipulates data of the CDS view entity using different ABAP SQL DML statements.

The following method is from that class.

-   selects from more than one data source
-   joins
-   unions
-   aggregations
-   parameters
-   calculated fields

-   `[INSERT](ABAPINSERT_DBTAB.html)`
-   `[UPDATE](ABAPUPDATE.html)`
-   `[MODIFY](ABAPMODIFY_DBTAB.html)`
-   `[DELETE](ABAPDELETE_DBTAB.html)`

@AbapCatalog.viewEnhancementCategory: \[#NONE\]\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Writable CDS View Entity'\\n@Metadata.ignorePropagatedAnnotations: true\\n\\ndefine writable view entity DEMO\_CDS\_WRITABLE\_VE\\n as select from demo\_ddic\_types\\n\\{\\n key id as Id,\\n int1 as Int1,\\n int2 as Int2,\\n char10 as Char10\\n\\}\\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDELETE FROM demo\_cds\_writable\_ve. \\nINSERT demo\_cds\_writable\_ve \\n FROM TABLE @( \\n VALUE #( \\n ( id = 01 int1 = 4 int2 = 8 char10 = 'INSERT' ) \\n ( id = 02 int1 = 8 int2 = 16 char10 = 'MODIFY' ) \\n ( id = 03 int1 = 8 int2 = 16 char10 = 'UPDATE' ) \\n ( id = 04 int1 = 8 int2 = 16 char10 = 'DELETE' ) \\n ) ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_writable\_ve \\n INTO TABLE @DATA(insert). "#EC CI\_NOWHERE \\n\\ \\nout->write( insert ). \\n\\ \\nUPDATE demo\_cds\_writable\_ve SET char10 = 'UPDATE2' WHERE id = 03. \\n\\ \\nSELECT \* \\n FROM demo\_cds\_writable\_ve \\n ORDER BY id \\n INTO TABLE @DATA(update). "#EC CI\_NOWHERE \\n\\ \\nout->write( update ). \\n\\ \\nMODIFY demo\_cds\_writable\_ve FROM @( \\nVALUE #( id = 02 char10 = 'MODIFY2' ) ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_writable\_ve \\n ORDER BY id \\n INTO TABLE @DATA(modify). "#EC CI\_NOWHERE \\n\\ \\nout->write( modify ). \\n\\ \\nDELETE FROM demo\_cds\_writable\_ve \\n WHERE id = 04. \\n\\ \\nSELECT \* \\n FROM demo\_cds\_writable\_ve \\n ORDER BY id \\n INTO TABLE @DATA(delete). "#EC CI\_NOWHERE \\n\\ \\nout->write( delete ). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html