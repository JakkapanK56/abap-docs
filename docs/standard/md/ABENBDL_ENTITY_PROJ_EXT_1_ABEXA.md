---
title: "ABENBDL_ENTITY_PROJ_EXT_1_ABEXA"
description: |
  ABENBDL_ENTITY_PROJ_EXT_1_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ENTITY_PROJ_EXT_1_ABEXA.htm"
abapFile: "ABENBDL_ENTITY_PROJ_EXT_1_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "types", "ABENBDL", "ENTITY", "PROJ", "EXT", "ABEXA"]
---

This example demonstrates how extension fields are added and behavior-enabled in a projection BDEF extension scenario.

**DDIC data model**

The DDIC data model consists of one database table: `DEMO_ROOT_EXT`:

This database table includes structure `DEMO_EXTENSION`.

**CDS data model**

The CDS data model consists of one root entity without child entities: `DEMO_RAP_FIELD_EXT`:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_RAP_FIELD_EXT` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as shown below. It defines global authorization control and adds field attributes to several fields.

**Behavior implementation**

For the RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_RAP_FIELD_EXT`, see `BP_DEMO_RAP_FIELD_EXT=========CCIMP`. This global class implements two methods:

**DDIC data model extension**

Extension fields are added to the DDIC data model via the structure extension `DEMO_EXTEND_STR`:

**CDS data model extension**

The extension fields are added to the CDS data model via the CDS view entity extension `DEMO_EXTENSION_RAP_BO`:

**BDEF extension**

The BDEF extension `DEMO_EXTENSION_RAP_BO` adds field attributes to the extension fields.

**ABP extension**

The ABP extension is implemented in the global class `BP_DEMO_EXTENSION_RAP_BO`, see `BP_DEMO_EXTENSION_RAP_BO======CCIMP`. This global class implements dynamic feature control for the extension field `NumFieldExt`: If the value of field `IntFieldExt` is greater than 1000, then field `NumFieldExt` is read-only. If the value of field `IntFieldExt` is less than or equal to 1000, access to field `NumFieldExt` is unrestricted.

**Data model projection**

The projection view `DEMO_RAP_PROJ_EXT_FIELD` projects the root node:

**View entity extension**

The CDS view entity extension `DEMO_RAP_PV_EX` extends the original CDS projection view. It includes the extension fields in the projection layer.

**Behavior projection**

The RAP projection behavior definition `DEMO_RAP_PROJ_EXT_FIELD` projects the base BDEF.

**BDEF projection extension**

The BDEF projection extension `DEMO_RAP_PROJ_BDEF_EXT` extends the projection behavior definition. Its adds field attributes to the extension fields.

**Access with ABAP using EML**

The source code above uses [ABAP EML](ABENEML_GLOSRY.html) to access the [RAP business object](ABENRAP_BO_GLOSRY.html) from an ABAP class:

Field attributes from the original base BO, from the projection BO, and from the extensions are respected. Fields declared as read-only on any layer must not be updated. `CharFieldExt` is not available in the derived types, since it has been suppressed.

-   `get_instance_features`: Implements dynamic feature control for field `DecField`: If field `CharField` has value *A*, then field `DecField` is read-only. If field `CharField` has any other value, then field `DataField` can be accessed without any restrictions.
-   `get_global_auth`: Defines global feature control for the complete RAP BO: Update requests are generally authorized and delete requests are generally unauthorized.

-   It inserts two entity instances using [`MODIFY ENTITIES CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html).
-   It updates both entity instances using [`MODIFY ENTITIES UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html).

@EndUserText.label : 'Database Table for Root Entity of RAP BO'\\n@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY\\n@AbapCatalog.tableCategory : #TRANSPARENT\\n@AbapCatalog.deliveryClass : #A\\n@AbapCatalog.dataMaintenance : #ALLOWED\\ndefine table demo\_root\_ext \\{\\n\\n key client : mandt not null;\\n key key\_field : abap.int4 not null;\\n data\_field : abap.string(0);\\n char\_field : abap.char(25);\\n char\_field\_2 : abap.char(25);\\n dec\_field : abap.dec(15,2);\\n include demo\_extension;\\n\\n\\} @EndUserText.label : 'Used for demo of RAP BO extension'\\n@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY\\ndefine structure demo\_extension \\{\\n\\n crea\_date\_time : timestampl;\\n lchg\_date\_time : timestampl;\\n\\n\\} @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, RAP BO ext'\\n@AbapCatalog.extensibility.extensible: true\\n@AbapCatalog.extensibility.dataSources: \['A'\]\\ndefine root view entity DEMO\_RAP\_FIELD\_EXT\\n as select from demo\_root\_ext as A\\n\\n\\{\\n key key\_field as KeyField,\\n// data\_field as DataField,\\n char\_field as CharField,\\n dec\_field as DecField\\n\\}\\n managed implementation in class bp\_demo\_rap\_field\_ext unique;\\nstrict(2);\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_FIELD\_EXT alias Root\\npersistent table demo\_root\_ext\\nlock master\\nauthorization master ( global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n\\n field ( mandatory : create, readonly : update ) KeyField;\\n field ( features : instance ) DecField;\\n// field(readonly) CharField;\\n\\n mapping for demo\_root\_ext corresponding extensible\\n \\{\\n KeyField = key\_field;\\n// DataField = data\_field;\\n CharField = char\_field;\\n DecField = dec\_field;\\n \\}\\n\\} @EndUserText.label : 'Used for demo of RAP BO extension'\\n@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE\\nextend type demo\_extension with demo\_extend\_str \\{\\n\\n data\_field\_ext : abap.string(0);\\n char\_field\_ext : abap.char(25);\\n int\_field\_ext : abap.int4;\\n num\_field\_ext : abap.int2;\\n int1\_field\_ext : abap.int1;\\n\\n\\} extend view entity DEMO\_RAP\_FIELD\_EXT with\\n\\{\\n// demo\_root\_ext.data\_field\_ext,\\n A.char\_field\_ext,\\n A.int\_field\_ext,\\n A.num\_field\_ext,\\n A.int1\_field\_ext\\n\\}\\n extension using interface DEMO\_RAP\_FIELD\_EXT\_INT\\n implementation in class bp\_demo\_extension\_rap\_bo unique;\\n\\nextend behavior for Root\\n\\{\\n\\n// field ( readonly ) DataFieldExt;\\n field ( mandatory ) IntFieldExt;\\n field ( suppress ) CharFieldExt;\\n field ( features : instance ) NumFieldExt;\\n\\n field ( readonly : update ) Int1FieldExt;\\n\\} @EndUserText.label: 'CDS pv, demo for RAP proj ext'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.extensibility.dataSources: \[ 'B' \]\\ndefine root view entity DEMO\_RAP\_PROJ\_EXT\_FIELD\\n provider contract transactional\_query\\n as projection on DEMO\_RAP\_FIELD\_EXT as B\\n\\{\\n key KeyField,\\n// DataField,\\n CharField,\\n DecField\\n\\}\\n extend view entity DEMO\_RAP\_PROJ\_EXT\_FIELD with\\n\\{\\n B.char\_field\_ext,\\n// DEMO\_RAP\_FIELD\_EXT.data\_field\_ext,\\n B.int1\_field\_ext,\\n B.int\_field\_ext,\\n B.num\_field\_ext\\n\\}\\n projection;\\nstrict(2);\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_PROJ\_EXT\_FIELD alias Root\\nextensible\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\} extension for projection;\\n\\nextend behavior for Root \\{\\n\\nfield(suppress) char\_field\_ext;\\nfield(readonly:update) int\_field\_ext;\\n\\} \* Public class definition \\nCLASS cl\_demo\_rap\_proj\_ext\_field DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_proj\_ext\_field IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_root\_ext. "#EC CI\_NOWHERE \\n MODIFY ENTITIES OF demo\_rap\_proj\_ext\_field \\n ENTITY root \\n CREATE \\n FIELDS ( keyfield charfield int\_field\_ext ) WITH VALUE #( \\n ( %cid = '1' \\n keyfield = 1 \\n charfield = 'A' \\n int\_field\_ext = 500 ) \\n ( %cid = '2' \\n keyfield = 2 \\n charfield = 'B' \\n int\_field\_ext = 1000 ) ) \\n MAPPED DATA(mapped) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, char\_field, \\n int\_field\_ext, num\_field\_ext \\n FROM demo\_root\_ext \\n INTO TABLE @FINAL(result). \\n\\ \\n MODIFY ENTITIES OF demo\_rap\_proj\_ext\_field \\n ENTITY root \\n UPDATE FIELDS ( charfield num\_field\_ext ) WITH VALUE #( \\n ( keyfield = 1 charfield = 'update' num\_field\_ext = 7 ) \\n ( keyfield = 2 charfield = 'update' num\_field\_ext = 7 ) ) \\n MAPPED mapped \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n SELECT key\_field, char\_field, \\n int\_field\_ext, num\_field\_ext \\n FROM demo\_root\_ext \\n INTO TABLE @FINAL(result1). \\n\\ \\n out->next\_section( 'After CREATE' \\n )->write( result \\n )->next\_section( 'After UPDATE' \\n )->write( result1 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_projection.html abenbdl\_extension\_for\_projection.html