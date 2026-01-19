---
title: "ABAPMAPPING_FROM_ENTITY"
description: |
  ABAPMAPPING_FROM_ENTITY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMAPPING_FROM_ENTITY.htm"
abapFile: "ABAPMAPPING_FROM_ENTITY.html"
keywords: ["insert", "update", "delete", "if", "case", "catch", "data", "types", "internal-table", "ABAPMAPPING", "FROM", "ENTITY"]
---

``\{\ [`INSERT ...`](ABAPINSERT_DBTAB.html)\ \}\  |\ \{\ [`MODIFY ...`](ABAPMODIFY_DBTAB.html)\ \}\  |\ \{\ [`UPDATE ... [INDICATORS SET STRUCTURE %control]`](ABAPUPDATE.html)\ \}\  |\ \{\ [`DELETE ...`](ABAPDELETE_DBTAB.html)\ \} MAPPING FROM ENTITY.``

[1. `INSERT ... MAPPING FROM ENTITY.`](#ABAP_VARIANT_1@1@)

[2. `MODIFY ... MAPPING FROM ENTITY.`](#ABAP_VARIANT_2@1@)

[3. `UPDATE ... [INDICATORS SET STRUCTURE %control] MAPPING FROM ENTITY.`](#ABAP_VARIANT_3@1@)

[4. `DELETE ... MAPPING FROM ENTITY.`](#ABAP_VARIANT_4@1@)

The addition `MAPPING FROM ENTITY` of the modifying ABAP SQL statements [`INSERT`](ABAPINSERT_DBTAB.html), [`UPDATE`](ABAPUPDATE.html), [`MODIFY`](ABAPMODIFY_DBTAB.html), and [`DELETE`](ABAPDELETE_DBTAB.html) is used to handle structures and internal tables that are typed with [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html), especially in cases where a [type mapping](ABENBDL_TYPE_MAPPING.html) is specified in the [RAP behavior definition](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html).

Used to insert one or more rows from a [source](ABAPINSERT_SOURCE.html) into a [target](ABAPIUMD_TARGET.html). See the detailed syntax options for `INSERT` in the [`INSERT` topic](ABAPINSERT_DBTAB.html).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE STRUCTURE FOR`](ABAPTYPE_STRUCTURE_FOR.html) and [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html) respectively. In this case, the types `... FOR UPDATE ...`, `... FOR CREATE ...`, `... FOR DELETE ...`, and `... FOR CHANGE ...` are possible.

The following example shows multiple `INSERT` statements with the `MAPPING FROM ENTITY` addition.

Used to insert one or more rows into a [target](ABAPIUMD_TARGET.html) or update existing rows based on the specification in a [source](ABAPINSERT_SOURCE.html). See the detailed syntax options for `MODIFY` in the [`MODIFY` topic](ABAPMODIFY_DBTAB.html).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE STRUCTURE FOR`](ABAPTYPE_STRUCTURE_FOR.html) and [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html) respectively. In this case, the types `... FOR UPDATE ...`, `... FOR CREATE ...`, `... FOR DELETE ...`, and `... FOR CHANGE ...` are possible.

The following example shows multiple `MODIFY` statements with the `MAPPING FROM ENTITY` addition.

Used to change one or more rows in a [target](ABAPIUMD_TARGET.html) based on specifications in a [source](ABAPINSERT_SOURCE.html). See the detailed syntax options for `...` in the [`UPDATE` topic](ABAPUPDATE.html).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE STRUCTURE FOR`](ABAPTYPE_STRUCTURE_FOR.html) and [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html) respectively. In this case, the types `... FOR UPDATE ...`, `... FOR CREATE ...`, `... FOR DELETE ...`, and `... FOR CHANGE ...` are possible.

The `UPDATE` statement can also be used with the addition [`INDICATORS SET STRUCTURE`](ABAPUPDATE_SET_INDICATOR.html) that includes the [`%control`](ABAPDERIVED_TYPES_CONTROL.html) structure to determine which fields are to be changed.

Currently, this variant is only possible in a context in which the related [RAP behavior definition (BDEF)](ABENCDS_BEHAVIOR_DEFINITION_GLOSRY.html) includes the notation [`persistent table`](ABENBDL_PERSISTENT_TABLE.html).

The following example shows multiple `UPDATE` statements with the `MAPPING FROM ENTITY` addition.

Used to delete one or more rows in a [target](ABAPIUMD_TARGET.html) based on the specification in a [source](ABAPINSERT_SOURCE.html). See the detailed syntax options for `DELETE` in the [`DELETE` topic](ABAPDELETE_DBTAB.html).

The sources, i. e. a structure or an internal table, must be typed with the [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html)\\ [`TYPE STRUCTURE FOR`](ABAPTYPE_STRUCTURE_FOR.html) and [`TYPE TABLE FOR`](ABAPTYPE_TABLE_FOR.html) respectively. In this case, the type `... FOR DELETE ...` is possible.

The following example shows multiple `DELETE` statements with the `MAPPING FROM ENTITY` addition.

The example [ABAP SQL Statements with the Addition `MAPPING FROM ENTITY`](ABENSQL_MAPPING_FROM_ENTITY_ABEXA.html) demonstrates the different variants.

-   In case of a problematic type conversion when using these statements, for example `INT4` to `NUMC`, a [`... CORRESPONDING #( ... MAPPING FROM ENTITY ) ...`](ABAPEML_CORRESPONDING.html) is automatically carried out without an explicit programming.
-   The catchable exception `CX_SY_CONVERSION_ERROR` occurs in case of type conversion errors.

DATA: ins\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map, \\n ins\_wa TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map. \\n... \\nINSERT demo\_tab\_root\_3 FROM @ins\_wa MAPPING FROM ENTITY. \\nINSERT demo\_tab\_root\_3 FROM TABLE @ins\_tab MAPPING FROM ENTITY. DATA: mod\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_map, \\n mod\_wa TYPE STRUCTURE FOR CREATE demo\_managed\_root\_map. \\n... \\nMODIFY demo\_tab\_root\_3 FROM @mod\_wa MAPPING FROM ENTITY. \\nMODIFY demo\_tab\_root\_3 FROM TABLE @mod\_tab MAPPING FROM ENTITY. DATA: up\_tab TYPE TABLE FOR UPDATE demo\_managed\_root\_map, \\n up\_wa TYPE STRUCTURE FOR UPDATE demo\_managed\_root\_map. \\n... \\nUPDATE demo\_tab\_root\_3 FROM @up\_wa MAPPING FROM ENTITY. \\nUPDATE demo\_tab\_root\_3 FROM TABLE @up\_tab MAPPING FROM ENTITY. \\nUPDATE demo\_tab\_root\_3 FROM @up\_wa \\n INDICATORS SET STRUCTURE %control MAPPING FROM ENTITY. \\nUPDATE demo\_tab\_root\_3 FROM TABLE @up\_tab \\n INDICATORS SET STRUCTURE %control MAPPING FROM ENTITY. DATA: del\_tab TYPE TABLE FOR DELETE demo\_managed\_root\_map, \\n del\_wa TYPE STRUCTURE FOR DELETE demo\_managed\_root\_map. \\n... \\nDELETE demo\_tab\_root\_3 FROM @del\_wa MAPPING FROM ENTITY. \\nDELETE demo\_tab\_root\_3 FROM TABLE @del\_tab MAPPING FROM ENTITY. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_rap\_other.html abapeml\_type\_mapping.html