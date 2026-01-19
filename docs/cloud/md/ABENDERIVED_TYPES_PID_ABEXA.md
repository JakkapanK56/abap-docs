---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDERIVED_TYPES_PID_ABEXA.htm"
abapFile: "ABENDERIVED_TYPES_PID_ABEXA.html"
keywords: ["select", "update", "delete", "loop", "do", "if", "method", "class", "data", "types", "ABENDERIVED", "TYPES", "PID", "ABEXA"]
---

This example demonstrates the use of `%pid` with an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) in a [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenario.

**Data model**

The CDS data model consists of the root entity `DEMO_UMANAGED_ROOT_LATE_NUM`.

Root entity:

**Behavior definition**

The [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_UMANAGED_ROOT_LATE_NUM` is defined in [RAP BDL](ABENCDS_BDL_GLOSRY.html) as follows:

**Behavior implementation**

For the above RAP behavior definition, one [ABP](ABENBEHAVIOR_POOL_GLOSRY.html) is created. The global class of the behavior pool is `BP_DEMO_UMANAGED_ROOT_LATE_NUM`. The actual behavior implementation takes place in local classes that are defined and implemented in the `BP_DEMO_UMANAGED_ROOT_LATE_NUMCCIMP` of the behavior pool. See more details on the implementation in the example [`COMMIT ENTITIES BEGIN, END` with `CONVERT KEY OF`](ABENCOMMIT_ENTITIES_BEGINEND_ABEXA.html).

**Access with ABAP using EML**

There is one ABAP EML modify request that creates several [RAP BO instances](ABENRAP_BO_INSTANCE_GLOSRY.html). Here, the keys are left empty because a preliminary ID `%pid` is assigned in the course of the `create` method in the behavior pool.

With a [`COMMIT ENTITIES BEGIN ... END`](ABAPEMLCOMMIT_ENTITIES_LATE.html) statement, which includes a [`CONVERT KEY OF`](ABAPCONVERT_KEY.html) statement, the instances are saved to the database table. The [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) method assigns the final keys to the instances. Using the `CONVERT KEY OF` statement, the key information for the instances is retrieved.

The output shows two tables for the mapping information. The first one includes the [`MAPPED EARLY`](ABAPTYPE_RESPONSE_FOR.html) mapping information that shows initial values for the key. The second one shows the [`MAPPED LATE`](ABAPTYPE_RESPONSE_FOR.html) mapping information including the final keys. Note that `%tmp` is not used and relevant in this scenario, hence, `%tmp` shows initial values. Another table shows the database table entries after the create operation.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'CDS view entity, RAP unmanaged, draft'\\ndefine root view entity DEMO\_UNMANAGED\_ROOT\_DRAFT\\n as select from demo\_tab\_root\_4\\n composition \[1..\*\] of DEMO\_UNMANAGED\_CHILD\_DRAFT as \_child\\n \\{\\n key key\_field,\\n field1,\\n field2,\\n field3,\\n field4,\\n @Semantics.systemDateTime.lastChangedAt: true\\n crea\_date\_time,\\n @Semantics.systemDateTime.localInstanceLastChangedAt: true\\n lchg\_date\_time,\\n \_child\\n \\}\\n unmanaged implementation in class bp\_demo\_umanaged\_root\_late\_num unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_UMANAGED\_ROOT\_LATE\_NUM\\nlock master\\nauthorization master ( global )\\nlate numbering\\n\\n\\{\\n create;\\n update;\\n field ( readonly ) key\_field;\\n\\} \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_drvd\_types\_pid DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n mapped\_early TYPE RESPONSE FOR MAPPED EARLY \\n demo\_umanaged\_root\_late\_num, \\n lt\_mapped\_late TYPE TABLE FOR MAPPED LATE \\n demo\_umanaged\_root\_late\_num. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_drvd\_types\_pid IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`Demo for BDEF derived type component: \` && \\n \`%pid\` ). \\n\\ \\n MODIFY ENTITY demo\_umanaged\_root\_late\_num \\n CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #( \\n ( %cid = 'cid1' field1 = 'aaa' field2 = 'bbb' \\n field3 = 10 field4 = 11 ) \\n ( %cid = 'cid2' field1 = 'ccc' field2 = 'ddd' \\n field3 = 20 field4 = 21 ) \\n ( %cid = 'cid3' field1 = 'eee' field2 = 'fff' \\n field3 = 30 field4 = 31 ) \\n ) \\n MAPPED mapped\_early. \\n\\ \\n IF mapped\_early IS NOT INITIAL. \\n out->write\_doc( \`MAPPED EARLY response:\` \\n )->write( mapped\_early ). \\n ENDIF. \\n\\ \\n COMMIT ENTITIES BEGIN. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n CONVERT KEY OF demo\_umanaged\_root\_late\_num \\n FROM \-%pid \\n TO FINAL(lv\_root\_key). \\n\\ \\n APPEND VALUE #( %pid = \-%pid \\n %key = lv\_root\_key \\n ) \\n TO lt\_mapped\_late. \\n\\ \\n ENDLOOP. \\n\\ \\n COMMIT ENTITIES END. \\n\\ \\n IF lt\_mapped\_late IS NOT INITIAL. \\n out->write\_doc( \`MAPPED LATE response:\` \\n )->write( lt\_mapped\_late ). \\n ENDIF. \\n\\ \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_3 \\n INTO TABLE @FINAL(db\_tab\_entries). \\n\\ \\n out->write\_html( \\n \`**Database table entries after RAP operations with final keys:**\` \\n )->write( db\_tab\_entries ). \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_3. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_drvd\_types\_pid DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n METHODS constructor. \\n\\ \\n PRIVATE SECTION. \\n DATA: \\n mapped\_early TYPE RESPONSE FOR MAPPED EARLY \\n demo\_umanaged\_root\_late\_num, \\n lt\_mapped\_late TYPE TABLE FOR MAPPED LATE \\n demo\_umanaged\_root\_late\_num. \\n METHODS: \\n initialize\_dbtabs. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_drvd\_types\_pid IMPLEMENTATION. \\n METHOD main. \\n\\ \\n out->begin\_section( \`Demo for BDEF derived type component: \` && \\n \`%pid\` ). \\n\\ \\n MODIFY ENTITY demo\_umanaged\_root\_late\_num \\n CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #( \\n ( %cid = 'cid1' field1 = 'aaa' field2 = 'bbb' \\n field3 = 10 field4 = 11 ) \\n ( %cid = 'cid2' field1 = 'ccc' field2 = 'ddd' \\n field3 = 20 field4 = 21 ) \\n ( %cid = 'cid3' field1 = 'eee' field2 = 'fff' \\n field3 = 30 field4 = 31 ) \\n ) \\n MAPPED mapped\_early. \\n\\ \\n IF mapped\_early IS NOT INITIAL. \\n out->write\_doc( \`MAPPED EARLY response:\` \\n )->write( mapped\_early ). \\n ENDIF. \\n\\ \\n COMMIT ENTITIES BEGIN. \\n\\ \\n IF sy-subrc <> 0. \\n out->write\_doc( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num \\n ASSIGNING FIELD-SYMBOL(). \\n\\ \\n CONVERT KEY OF demo\_umanaged\_root\_late\_num \\n FROM \-%pid \\n TO FINAL(lv\_root\_key). \\n\\ \\n APPEND VALUE #( %pid = \-%pid \\n %key = lv\_root\_key \\n ) \\n TO lt\_mapped\_late. \\n\\ \\n ENDLOOP. \\n\\ \\n COMMIT ENTITIES END. \\n\\ \\n IF lt\_mapped\_late IS NOT INITIAL. \\n out->write\_doc( \`MAPPED LATE response:\` \\n )->write( lt\_mapped\_late ). \\n ENDIF. \\n\\ \\n SELECT key\_field, field1, field2, field3, field4 \\n FROM demo\_tab\_root\_3 \\n INTO TABLE @FINAL(db\_tab\_entries). \\n\\ \\n out->write\_html( \\n \`**Database table entries after RAP operations with final keys:**\` \\n )->write( db\_tab\_entries ). \\n\\ \\n ENDMETHOD. \\n METHOD initialize\_dbtabs. \\n DELETE FROM demo\_tab\_root\_3. \\n ENDMETHOD. \\n METHOD constructor. \\n super->constructor( ). \\n initialize\_dbtabs( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abenderived\_types\_abexas.html