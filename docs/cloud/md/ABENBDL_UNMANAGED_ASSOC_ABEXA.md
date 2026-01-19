---
title: "Demo for Unmanaged Association CBA"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_UNMANAGED_ASSOC_ABEXA.htm"
abapFile: "ABENBDL_UNMANAGED_ASSOC_ABEXA.html"
keywords: ["select", "insert", "delete", "loop", "do", "if", "method", "class", "data", "internal-table", "ABENBDL", "UNMANAGED", "ASSOC", "ABEXA"]
---

This example demonstrates the unmanaged [read-by-association operation](ABENRAP_RBA_OPERATION_GLOSRY.html) and [create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html) for an [intra-BO composition](ABENCDS_INTRA_BO_ASSOC_GLOSRY.html) relationship.

The [CDS data model](ABENCDS_DATA_DEFINITION_GLOSRY.html) defines an [association](ABENCDS_ASSOCIATION_GLOSRY.html) with a filter in the ON condition. Since this filter condition is not considered by the managed [RAP read-by-association operation](ABENRAP_RBA_OPERATION_GLOSRY.html) and [RAP create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html) provider, an unmanaged [association](ABENCDS_ASSOCIATION_GLOSRY.html) with a custom implementation is created.

**Data model**

The [composition tree](ABENCDS_COMPOSITION_TREE_GLOSRY.html) of the BO consists of a [parent](ABENPARENT_ENTITY_GLOSRY.html) (`DEMO_RAP_UNMANAGED_ASSOC_SRC`, referred to as "source") and a [child entity](ABENCHILD_ENTITY_GLOSRY.html) (`DEMO_RAP_UNMANAGED_ASSOC_TGT`, referred to as "target").

The source entity defines two associations:

**Behavior Definition**

The association `_ToTargetWithFilter` is declared as unmanaged in the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html)\\ `DEMO_RAP_UNMANAGED_ASSOC_SRC`. It is enabled for [create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html) and for [draft handling](ABENRAP_DRAFT_HANDLING_GLOSRY.html).

...

`unmanaged association _ToTargetWithFilter \{ create; with draft; \}`

...

**Behavior Pool**

The behavior pool `BP_DEMO_RAP_UNMANAGED_ASSOC_SR` includes the implementation of the create-by-association (cba) and read-by-association (rba) methods. Both method implementations consider the filter condition from the CDS data model.

The intention of the code example is to demonstrate the implementation of the unmanaged association operations. In the first part, three instances are to be created on the target entity via EML. The implemented create-by-association method ensures that only the instances with matching filter conditions are actually created. In the second part, the implemented read-by-association method ensures that only those instances are read that match the filter conditions.

The code example includes the following steps:

-   The to-child association to the target entity.
-   The same relationship from the parent to the child entity is added a second time as a regular association. This is needed as a basis for the unmanaged association in the behavior definition. The association has an on condition that filters instances where the "Filter" field value is 'A'.

-   The database tables are cleared.
-   On the source table, an instance with the `source_id = 1` is created.
-   With the [create-by-association](ABENRAP_CBA_OPERATION_GLOSRY.html), three instances are to be created on the target entity:

-   Instance 1: `cid1, filter = 'A', %control-Filter = *on*`
-   Instance 2: `cid2, Filter = 'B', %control-Filter = *on*`
-   Instance 3: `cid3, Filter = 'A'`

-   The intention of the code example is to ensure, that instance 1 is created, since the filter condition is fulfilled. The second instance must be rejected, since the filter condition is not fulfilled. The third instance should be created with `Filter = 'A'`, as the unset `%control` causes that the value for that field is set internally by the CBA handler.
-   The executable example includes another cba using the composition `_ToChild` only. The *Filter* field is filled with the value *C*. The instance is written to the database table, since the filter criterium is not applied here. The purpose of this step is also to demonstrate the RBA in the next section.
-   The rba is performed through the association `_ToTargetWithFilter`. Since the association is declared unmanaged in the BDEF, the method `rba_Totargetwithstatus` in the behavior pool `BP_DEMO_RAP_UNMANAGED_ASSOC_SR` is called. Only those instances are read, where the *Filter* value is *A*.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'Source Entity for Unmanaged Association'\\n@Metadata.ignorePropagatedAnnotations: true\\ndefine root view entity DEMO\_RAP\_UNMANAGED\_ASSOC\_SRC\\n as select from demo\_tab\_ua\_src as SourceEntity\\n composition of exact one to many DEMO\_RAP\_UNMANAGED\_ASSOC\_TGT \\n as \_ToChild\\n association of exact one to many DEMO\_RAP\_UNMANAGED\_ASSOC\_TGT \\n as \_ToTargetWithFilter \\n on $projection.SourceId = \_ToTargetWithFilter.SourceId\\n and \_ToTargetWithFilter.Filter = 'A'\\n\\{\\n\\n key source\_id as SourceId,\\n local\_last\_changed\_at as LocalLastChangedAt,\\n last\_changed\_at as LastChangedAt,\\n\\n \_ToChild,\\n \_ToTargetWithFilter\\n\\}\\n METHOD cba\_ToTargetWithFilter. \\n" Prepare an internal table for managed similar association keys, \\n" convert input CBA entities into CBA-compatible structure \\n DATA keys\_cbc TYPE TABLE FOR CREATE \\n demo\_rap\_unmanaged\_assoc\_src\\\\\_ToChild. \\n\\ \\n keys\_cbc = CORRESPONDING #( DEEP entities\_cba ). \\n\\ \\n DATA failed\_targets LIKE failed-targetentity. \\n LOOP AT keys\_cbc ASSIGNING FIELD-SYMBOL(<key\_cbc>). \\n\\ \\n CLEAR <key\_cbc>-%cid\_ref. \\n\\ \\n LOOP AT <key\_cbc>-%target ASSIGNING FIELD-SYMBOL(<target>). \\n\\ \\n IF <target>-%control-Filter = if\_abap\_behv=>mk-on. \\n " Remove all targets with Filter value different than 'A' \\n IF <target>-Filter <> 'A'. \\n\\ \\n " Record the failure for this target entity creation \\n APPEND INITIAL LINE TO failed\_targets \\n ASSIGNING FIELD-SYMBOL(<failed\_target>). \\n <failed\_target> = VALUE #( %cid = <target>-%cid \\n %is\_draft = <target>-%is\_draft \\n %fail = VALUE \\n #( cause = if\_abap\_behv=>cause-unspecific ) ). \\n\\ \\n " Remove invalid target from creation list \\n DELETE <key\_cbc>-%target. \\n ENDIF. \\n ELSE. \\n\\ \\n " If 'Filter' control flag is off, \\n " switch it on and set Filter='A' \\n <target>-%control-Filter = if\_abap\_behv=>mk-on. \\n <target>-Filter = 'A'. \\n ENDIF. \\n\\ \\n ENDLOOP. \\n ENDLOOP. \\n\\ \\n" Delegates actual persistent creation of child entities \\n" to managed association handler \\n MODIFY ENTITY IN LOCAL MODE demo\_rap\_unmanaged\_assoc\_src \\n CREATE BY \\\\\_ToChild \\n FROM keys\_cbc \\n MAPPED mapped \\n FAILED failed \\n REPORTED reported. \\n\\ \\n" Append any failed targets detected earlier \\n APPEND LINES OF failed\_targets TO failed-targetentity. \\nENDMETHOD. METHOD rba\_ToTargetWithFilter. \\n DATA keys\_rbc TYPE TABLE FOR READ IMPORT \\n demo\_rap\_unmanaged\_assoc\_src\\\\\_ToChild. \\n keys\_rbc = CORRESPONDING #( keys\_rba ). \\n\\ \\n LOOP AT keys\_rbc ASSIGNING FIELD-SYMBOL(<key\_rbc>). \\n " Set control flag to switch on filtering on child entities \\n <key\_rbc>-%control-Filter = if\_abap\_behv=>mk-on. \\n ENDLOOP. \\n\\ \\n" Read child entities of SourceEntity via managed association \_ToChild \\n READ ENTITY IN LOCAL MODE demo\_rap\_unmanaged\_assoc\_src \\n BY \\\\\_ToChild \\n FROM keys\_rbc \\n RESULT result \\n LINK DATA(link\_tab) \\n FAILED failed. \\n\\ \\n LOOP AT result ASSIGNING FIELD-SYMBOL(<result\_row>). \\n " Remove any child rows that do NOT have Filter='A' \\n IF <result\_row>-Filter = 'A'. \\n CONTINUE. \\n ENDIF. \\n " Remove links and result rows for filtered-out entities \\n DELETE link\_tab WHERE target-%tky = <result\_row>-%tky. \\n DELETE result. \\n ENDLOOP. \\n\\ \\n" Return filtered association links \\n association\_links = CORRESPONDING #( link\_tab ). \\nENDMETHOD. \* Public class definition \\n"!

Demo for Unmanaged Association CBA

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_unm\_cba DEFINITION \\nINHERITING FROM cl\_demo\_classrun \\nPUBLIC \\n FINAL \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION. \\n\\ \\n PRIVATE \\nSECTION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_unm\_cba IMPLEMENTATION. \\n METHOD main. \\n " Clean up the DB tables before demo to start with empty tables \\n DELETE FROM demo\_tab\_ua\_src. \\n DELETE FROM demo\_tab\_ua\_tgt. \\n\\ \\n " Prepare a source entity instance with SourceId=1 and insert in DB \\n DATA source TYPE demo\_tab\_ua\_src. \\n source = VALUE #( source\_id = 1 ). \\n INSERT demo\_tab\_ua\_src FROM @source. \\n COMMIT ENTITIES. \\n\\ \\n " Create target entities using unmanaged create-by-association \\n MODIFY ENTITY demo\_rap\_unmanaged\_assoc\_src \\n CREATE BY \\\\\_ToTargetWithFilter \\n FROM VALUE #( ( SourceId = source-source\_id \\n\\ \\n %target = VALUE #( ( %cid = 'cid1' \\n Filter = 'A' \\n %control-Filter = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid2' \\n Filter = 'B' \\n %control-Filter = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid3' \\n Filter = 'A' ) ) ) ). \\n\\ \\n\\ \\n " Create target entities using managed create-by-association \\n MODIFY ENTITY demo\_rap\_unmanaged\_assoc\_src \\n CREATE BY \\\\\_ToChild \\n FROM VALUE #( ( \\n SourceId = source-source\_id \\n %target = VALUE #( ( \\n %cid = 'cid1' \\n Filter = 'C' \\n %control-Filter = if\_abap\_behv=>mk-on ) ) ) ). \\n\\ \\n " Check for errors in RAP save sequence \\n COMMIT ENTITIES. \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n " Read back target entities using read-by-association \\n READ ENTITY demo\_rap\_unmanaged\_assoc\_src \\n BY \\\\\_ToTargetWithFilter \\n ALL FIELDS WITH VALUE #( ( SourceId = source-source\_id ) ) \\n RESULT FINAL(result\_rba). \\n\\ \\n out->write( result\_rba ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for Unmanaged Association CBA

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_rap\_unm\_cba DEFINITION \\nINHERITING FROM cl\_demo\_classrun \\nPUBLIC \\n FINAL \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION. \\n\\ \\n PRIVATE \\nSECTION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_rap\_unm\_cba IMPLEMENTATION. \\n METHOD main. \\n " Clean up the DB tables before demo to start with empty tables \\n DELETE FROM demo\_tab\_ua\_src. \\n DELETE FROM demo\_tab\_ua\_tgt. \\n\\ \\n " Prepare a source entity instance with SourceId=1 and insert in DB \\n DATA source TYPE demo\_tab\_ua\_src. \\n source = VALUE #( source\_id = 1 ). \\n INSERT demo\_tab\_ua\_src FROM @source. \\n COMMIT ENTITIES. \\n\\ \\n " Create target entities using unmanaged create-by-association \\n MODIFY ENTITY demo\_rap\_unmanaged\_assoc\_src \\n CREATE BY \\\\\_ToTargetWithFilter \\n FROM VALUE #( ( SourceId = source-source\_id \\n\\ \\n %target = VALUE #( ( %cid = 'cid1' \\n Filter = 'A' \\n %control-Filter = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid2' \\n Filter = 'B' \\n %control-Filter = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid3' \\n Filter = 'A' ) ) ) ). \\n\\ \\n\\ \\n " Create target entities using managed create-by-association \\n MODIFY ENTITY demo\_rap\_unmanaged\_assoc\_src \\n CREATE BY \\\\\_ToChild \\n FROM VALUE #( ( \\n SourceId = source-source\_id \\n %target = VALUE #( ( \\n %cid = 'cid1' \\n Filter = 'C' \\n %control-Filter = if\_abap\_behv=>mk-on ) ) ) ). \\n\\ \\n " Check for errors in RAP save sequence \\n COMMIT ENTITIES. \\n IF sy-subrc <> 0. \\n out->write( \`An issue occurred in the RAP save sequence.\` ). \\n ENDIF. \\n\\ \\n " Read back target entities using read-by-association \\n READ ENTITY demo\_rap\_unmanaged\_assoc\_src \\n BY \\\\\_ToTargetWithFilter \\n ALL FIELDS WITH VALUE #( ( SourceId = source-source\_id ) ) \\n RESULT FINAL(result\_rba). \\n\\ \\n out->write( result\_rba ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_association.html abenbdl\_assoc\_impl\_type.html