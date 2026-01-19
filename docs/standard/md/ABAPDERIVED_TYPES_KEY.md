---
title: "ABAPDERIVED_TYPES_KEY"
description: |
  ABAPDERIVED_TYPES_KEY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_KEY.htm"
abapFile: "ABAPDERIVED_TYPES_KEY.html"
keywords: ["update", "delete", "if", "case", "method", "data", "types", "internal-table", "ABAPDERIVED", "TYPES", "KEY"]
---

`%key` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). The component group contains the primary key fields of a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html). Thus, it serves as an identifier for persisted instances.

Wherever `%key` can be specified within ABAP EML statements during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html), [`%tky`](ABAPDERIVED_TYPES_TKY.html) can be specified, too. Since the component group `%tky` includes `%key`, it is recommended that `%tky` is specified instead of `%key` also in non-[draft](ABENBDL_WITH_DRAFT.html) scenarios. `%tky` also contains the draft indicator [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html). When using `%tky` in non-draft scenarios, you are prepared for a later switch to a draft scenario and you can avoid lots of adaptations in the code.

**Type**

The key fields in `%key` have their original line type. In case of the use within [`%control`](ABAPDERIVED_TYPES_CONTROL.html), the type of the key fields is `ABP_BEHV_FLAG`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The component also occurs within the following component groups:

As a general best practice, you should use a [RAP BO instance key component group](ABENKEY_COMP_GROUP_GLOSRY.html) when referring to the entire key, rather than listing the individual key fields. It is recommended that you use `%tky` whenever possible.

In the following cases, type compatibility cannot be guaranteed in component group assignments, resulting in syntax warnings:

In the above cases, the `CORRESPONDING` operator can be used to ensure type compatibility in assignments to key component groups:

... %tky = CORRESPONDING #( wa-%tky ) ... \\n... %key = CORRESPONDING #( wa-%key ) ... \\n... %pky = CORRESPONDING #( wa-%pky ) ...

In cases where different data objects of key component groups of a BDEF derived type are to be assigned to the same key component group of the same entity, a direct assignment works without a syntax warning because the content is identical. A direct assignment is recommended (`...wa1_root-%tky = wa2_root-%tky ...`). The use of the `CORRESPONDING` operator is unnecessary and has poorer performance. This is true, for example, for key component group assignments in the context of RAP response parameters failed and reported.

APPEND VALUE #( %tky = wa-%tky \\n                  ... \\n               ) TO failed-root\_entity.

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_KEY` demonstrates the component `%key`. It includes various options on how to refer to the key, also visualizing the occurrence of the key in various component groups.

The example [Using `%key`](ABENDERIVED_TYPES_KEY_ABEXA.html) demonstrates the use of `%key` with a managed RAP BO.

-   `CREATE`
-   `UPDATE`
-   `DELETE`
-   `READ IMPORT`
-   `READ RESULT`
-   `READ LINK` (here, as part of the structures `SOURCE` and `TARGET`)
-   `ACTION IMPORT` ([instance actions](ABENBDL_ACTION.html))
-   `ACTION RESULT` (instance actions)
-   `ACTION REQUEST` (instance actions)
-   `FUNCTION IMPORT` ([instance functions](ABENBDL_FUNCTION.html) )
-   `FUNCTION RESULT` (instance functions)
-   `FUNCTION REQUEST` (instance functions)
-   `PERMISSIONS KEY`
-   `DETERMINATION`
-   `VALIDATION`
-   `FAILED [EARLY|LATE]`
-   `MAPPED [EARLY|LATE]`
-   `REPORTED [EARLY|LATE]`
-   `CHANGE`
-   `[INSTANCE] FEATURES KEY`
-   `[INSTANCE] FEATURES RESULT`
-   `[INSTANCE] AUTHORIZATION KEY`
-   `[INSTANCE] AUTHORIZATION RESULT`

-   `%control`
-   [`%param`](ABAPDERIVED_TYPES_PARAM.html)
-   [`%tmp`](ABAPDERIVED_TYPES_TMP.html)
-   [`%pky`](ABAPDERIVED_TYPES_PKY.html)

-   Mixing key component groups when they refer to the same RAP BO entity, e.g. `wa-%tky = wa-%key`. Such an assignment should also be avoided when both component groups have an identical scope in terms of components (e.g. `%tky` and `%key` in non-late-numbering and non-draft scenarios).
-   Mixing the same key component groups when referring to two different RAP BO entities, for example, `wa_root-%tky = wa_child-%tky`. In this case, adding more components later may cause syntax errors for an assignment that worked previously.
-   Defining structured types that have the same components as key component groups, and then assigning data objects of that type to those of the respective, original key component group.

-   In late numbering scenarios, not only [`%pid`](ABAPDERIVED_TYPES_PID.html) but also `%key` can contain preliminary keys during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html). The preliminary keys are transformed into final key values with the [`adjust_numbers`](ABENSAVER_ADJUST_NUMBERS.html) method.
-   The components of an internal table typed with `TYPE TABLE FOR KEY OF` or a structure with the type `TYPE STRUCTURE FOR KEY OF` comprise the key fields directly and not as `%key` component groups.

MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FROM VALUE #( \\n %control = VALUE #( key\_field = if\_abap\_behv=>mk-on \\n field1 = if\_abap\_behv=>mk-on \\n field2 = if\_abap\_behv=>mk-on \\n field3 = if\_abap\_behv=>mk-on \\n field4 = if\_abap\_behv=>mk-on ) \\n ( %cid = 'cid1' \\n %key-key\_field = 1 \\n field1 = 'aaa' field2 = 'bbb' field3 = 10 field4 = 11 ) \\n ( %cid = 'cid2' \\n %key = VALUE #( key\_field = 2 ) \\n field1 = 'ccc' field2 = 'ddd' field3 = 20 field4 = 21 ) \\n ( %cid = 'cid3' \\n key\_field = 3 \\n field1 = 'eee' field2 = 'fff' field3 = 30 field4 = 31 ) \\n ( %cid = 'cid4' \\n %data-%key-key\_field = 4 \\n field1 = 'ggg' field2 = 'hhh' field3 = 40 field4 = 41 ) \\n ( %cid = 'cid5' \\n %data-key\_field = 5 \\n field1 = 'iii' field2 = 'jjj' field3 = 50 field4 = 51 ) ) \\n "Other options for referring to the key besides using %key \\n "are demonstrated. \\n UPDATE FIELDS ( field2 ) WITH VALUE #( \\n ( %key-key\_field = 1 \\n field2 = 'up1' ) \\n ( key\_field = 2 \\n field2 = 'up2' ) \\n ( %tky-%key-key\_field = 3 \\n field2 = 'up3' ) \\n ( %tky-key\_field = 4 \\n field2 = 'up4' ) \\n ( %tky-%pky-%key-key\_field = 5 \\n field2 = 'up5' ) \\n ( %tky-%pky-key\_field = 6 \\n field2 = 'up6' ) \\n ( %pky-key\_field = 7 \\n field2 = 'up7' ) \\n ( %pky-%key-key\_field = 8 \\n field2 = 'up8' ) \\n ( %data-%key-key\_field = 9 \\n field2 = 'up9' ) \\n ( %data-key\_field = 10 \\n field2 = 'up10' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html