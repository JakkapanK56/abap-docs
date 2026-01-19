---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_FIELD_EXT_ABEXA.htm"
abapFile: "ABENBDL_FIELD_EXT_ABEXA.html"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "method", "class", "data", "ABENBDL", "FIELD", "EXT", "ABEXA"]
---

This example demonstrates how extension fields are added and behavior-enabled in a RAP BO extension scenario.

**DDIC data model**

The DDIC data model consists of one database table: `DEMO_ROOT_EXT`:

This database table includes structure `DEMO_EXTENSION`.

**CDS data model**

The CDS data model consists of one root entity without child entities: `DEMO_RAP_FIELD_EXT`:

**CDS transactional interface**

The following CDS transactional interface is created as stable public interface for extensions:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_RAP_FIELD_EXT` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as shown below. It defines global authorization control and adds field attributes to multiple fields.

**Behavior implementation**

For the RAP behavior definition, one [ABAP behavior pool (ABP)](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_RAP_FIELD_EXT`, see `BP_DEMO_RAP_FIELD_EXT=========CCIMP`. This global class implements two methods:

**RAP BO Interface**

The following RAP BO interface is used as stable public interface for extensions.

**DDIC data model extension**

Extension fields are added to the DDIC data model via the structure extension `DEMO_EXTEND_STR`:

**CDS data model extension**

The extension fields are added to the CDS data model via the CDS view entity extension `DEMO_EXTENSION_RAP_BO`:

**CDS transactional interface extension**

The extension fields are added to the CDS transactional interface by means of an entity extension `DEMO_RAP_TI_FIELD_EXT`:

**BDEF extension**

The BDEF extension `DEMO_EXTENSION_RAP_BO` adds field attributes to the extension fields using the BDEF interface.

**ABP extension**

The ABP extension is implemented in the global class `BP_DEMO_EXTENSION_RAP_BO`, see `BP_DEMO_EXTENSION_RAP_BO======CCIMP`. This global class implements dynamic feature control for the extension field `NumFieldExt`: If the value of field `IntFieldExt` is greater than 1000, then field `NumFieldExt` is read-only. If the value of field `IntFieldExt` is less than or equal to 1000, access to field `NumFieldExt` is unrestricted.

**Access with ABAP using EML**

The source code above uses [ABAP EML](ABENEML_GLOSRY.html) to access the [RAP business object](ABENRAP_BO_GLOSRY.html) from an ABAP class:

For the entity instance with key value *1*, the field `NumFieldExt` is dynamically set to read-only by the field feature control. This field is not updated, but error messages are returned.

Execution order for `CREATE`:

Execution order for `UPDATE`:

-   `get_instance_features`: Implements dynamic feature control for field `DecField`: If field `CharField` has value *A*, then field `DecField` is read-only. If field `CharField` has any other value, then field `DecField` can be accessed without any restrictions.
-   `get_global_auth`: Defines global feature control for the complete RAP BO: Update requests are generally authorized and delete requests are generally unauthorized.

-   It inserts two entity instances using [`MODIFY ENTITIES CREATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html).
-   It updates both entity instances using [`MODIFY ENTITIES UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html).

-   Global authorization control specified in the original ABP.

-   Global authorization control specified in the original ABP.
-   Field feature control specified in the original ABP.
-   Field feature control specified in the extension ABP.

@EndUserText.label : 'Database Table for Root Entity of RAP BO'\\n@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY\\n@AbapCatalog.tableCategory : #TRANSPARENT\\n@AbapCatalog.deliveryClass : #A\\n@AbapCatalog.dataMaintenance : #ALLOWED\\ndefine table demo\_root\_ext \\{\\n\\n key client : mandt not null;\\n key key\_field : abap.int4 not null;\\n data\_field : abap.string(0);\\n char\_field : abap.char(25);\\n char\_field\_2 : abap.char(25);\\n dec\_field : abap.dec(15,2);\\n include demo\_extension;\\n\\n\\} @EndUserText.label : 'Used for demo of RAP BO extension'\\n@AbapCatalog.enhancement.category : #EXTENSIBLE\_ANY\\ndefine structure demo\_extension \\{\\n\\n crea\_date\_time : timestampl;\\n lchg\_date\_time : timestampl;\\n\\n\\} @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, RAP BO ext'\\n@AbapCatalog.extensibility.extensible: true\\n@AbapCatalog.extensibility.dataSources: \['A'\]\\ndefine root view entity DEMO\_RAP\_FIELD\_EXT\\n as select from demo\_root\_ext as A\\n\\n\\{\\n key key\_field as KeyField,\\n// data\_field as DataField,\\n char\_field as CharField,\\n dec\_field as DecField\\n\\}\\n @EndUserText.label: 'CDS transactional interface, RAP BO ext'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@AbapCatalog.extensibility.dataSources: \[ 'A' \]\\ndefine root view entity DEMO\_RAP\_FIELD\_EXT\_INT \\nprovider contract transactional\_interface\\nas projection on DEMO\_RAP\_FIELD\_EXT as A\\n\\{\\n key KeyField,\\n// DataField,\\n CharField,\\n DecField\\n\\}\\n managed implementation in class bp\_demo\_rap\_field\_ext unique;\\nstrict(2);\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_FIELD\_EXT alias Root\\npersistent table demo\_root\_ext\\nlock master\\nauthorization master ( global )\\nextensible\\n\\{\\n create;\\n update;\\n delete;\\n\\n field ( mandatory : create, readonly : update ) KeyField;\\n field ( features : instance ) DecField;\\n// field(readonly) CharField;\\n\\n mapping for demo\_root\_ext corresponding extensible\\n \\{\\n KeyField = key\_field;\\n// DataField = data\_field;\\n CharField = char\_field;\\n DecField = dec\_field;\\n \\}\\n\\} interface;\\nextensible;\\n\\ndefine behavior for DEMO\_RAP\_FIELD\_EXT\_INT alias Root\\n\\{\\n use create;\\n use update;\\n use delete;\\n\\} @EndUserText.label : 'Used for demo of RAP BO extension'\\n@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE\\nextend type demo\_extension with demo\_extend\_str \\{\\n\\n data\_field\_ext : abap.string(0);\\n char\_field\_ext : abap.char(25);\\n int\_field\_ext : abap.int4;\\n num\_field\_ext : abap.int2;\\n int1\_field\_ext : abap.int1;\\n\\n\\} extend view entity DEMO\_RAP\_FIELD\_EXT with\\n\\{\\n// demo\_root\_ext.data\_field\_ext,\\n A.char\_field\_ext,\\n A.int\_field\_ext,\\n A.num\_field\_ext,\\n A.int1\_field\_ext\\n\\}\\n extend view entity DEMO\_RAP\_FIELD\_EXT\_INT with\\n\\{\\n// DEMO\_RAP\_FIELD\_EXT.data\_field\_ext as DataFieldExt,\\n A.char\_field\_ext as CharFieldExt,\\n A.int\_field\_ext as IntFieldExt,\\n A.num\_field\_ext as NumFieldExt,\\n A.int1\_field\_ext as Int1FieldExt\\n\\}\\n extension using interface DEMO\_RAP\_FIELD\_EXT\_INT\\n implementation in class bp\_demo\_extension\_rap\_bo unique;\\n\\nextend behavior for Root\\n\\{\\n\\n// field ( readonly ) DataFieldExt;\\n field ( mandatory ) IntFieldExt;\\n field ( suppress ) CharFieldExt;\\n field ( features : instance ) NumFieldExt;\\n\\n field ( readonly : update ) Int1FieldExt;\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_field\_ext DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_field\_ext IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DELETE FROM demo\_root\_ext. \\n MODIFY ENTITIES OF demo\_rap\_field\_ext\_int \\n ENTITY root \\n CREATE \\n FIELDS ( keyfield charfield intfieldext ) WITH VALUE #( \\n ( %cid = '1' \\n keyfield = 1 \\n charfield = 'A' \\n intfieldext = 2000 ) \\n ( %cid = '2' \\n keyfield = 2 \\n charfield = 'B' \\n intfieldext = 500 ) ) \\n MAPPED DATA(mapped) \\n FAILED DATA(failed) \\n REPORTED DATA(reported). \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred \` && \\n \`in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n MODIFY ENTITIES OF demo\_rap\_field\_ext\_int \\n ENTITY root \\n UPDATE FIELDS ( charfield numfieldext ) WITH VALUE #( \\n ( keyfield = 1 charfield = 'A' numfieldext = 7 ) \\n ( keyfield = 2 charfield = 'B' numfieldext = 7 ) ) \\n MAPPED mapped \\n FAILED failed \\n REPORTED reported. \\n\\ \\n COMMIT ENTITIES. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred \` && \\n \`in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n DATA itab TYPE TABLE OF string WITH EMPTY KEY. \\n LOOP AT reported-root ASSIGNING FIELD-SYMBOL(). \\n APPEND \`Instance key: \` && \\n \-keyfield && \\n \`, \` && \\n reported-root\[ sy-tabix \]-%msg->m\_severity && \\n \`: \` && \\n reported-root\[ sy-tabix \]-%msg->if\_message~get\_text( ) \\n TO itab. \\n ENDLOOP. \\n out->write( itab ). \\n SELECT key\_field, char\_field, data\_field, \\n int\_field\_ext, num\_field\_ext \\n FROM demo\_root\_ext \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_extension.html abenbdl\_extensibility\_managed\_unm.html abenbdl\_extension\_syntax.html abenbdl\_extend\_beh.html abenbdl\_entity\_beh\_extension.html abenbdl\_new\_elem\_ext.html