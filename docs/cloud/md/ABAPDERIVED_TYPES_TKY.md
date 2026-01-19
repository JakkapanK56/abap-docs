---
title: "ABAPDERIVED_TYPES_TKY"
description: |
  ABAPDERIVED_TYPES_TKY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_TKY.htm"
abapFile: "ABAPDERIVED_TYPES_TKY.html"
keywords: ["update", "do", "if", "case", "data", "types", "ABAPDERIVED", "TYPES", "TKY"]
---

`%tky` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html) and specifies the transactional key. A [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) must always be uniquely identifiable by its transactional key for internal processing during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html).

`%tky` contains [`%key`](ABAPDERIVED_TYPES_KEY.html) and the draft indicator [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html) as components which makes it particularly suitable for [draft](ABENBDL_WITH_DRAFT.html) scenarios. Since `%tky` includes `%key`, `%tky` can also be used in non-draft scenarios for referring to the primary keys. Its use in non-draft scenarios is even recommended as a preparation for a possible later switch to a draft scenario. In doing so, lots of adaptations to the code regarding the keys and the inclusion of [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html) can be avoided.

As a general best practice, you should use a [RAP BO instance key component group](ABENKEY_COMP_GROUP_GLOSRY.html) when referring to the entire key, rather than listing the individual key fields. It is recommended that you use `%tky` whenever possible.

In the following cases, type compatibility cannot be guaranteed in component group assignments, resulting in syntax warnings:

In the above cases, the `CORRESPONDING` operator can be used to ensure type compatibility in assignments to key component groups:

... %tky = CORRESPONDING #( wa-%tky ) ... \\n... %key = CORRESPONDING #( wa-%key ) ... \\n... %pky = CORRESPONDING #( wa-%pky ) ...

In cases where different data objects of key component groups of a BDEF derived type are to be assigned to the same key component group of the same entity, a direct assignment works without a syntax warning because the content is identical. A direct assignment is recommended (`...wa1_root-%tky = wa2_root-%tky ...`). The use of the `CORRESPONDING` operator is unnecessary and has poorer performance. This is true, for example, for key component group assignments in the context of RAP response parameters failed and reported.

APPEND VALUE #( %tky = wa-%tky \\n                  ... \\n               ) TO failed-root\_entity.

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

As outlined in the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html), the use of `%tky` is generally preferable in whatever context. However, there are special cases in which `%tky` is not available and [`%pky`](ABAPDERIVED_TYPES_PKY.html) can be used instead, for example, implementations with [draft actions](ABENBDL_DRAFT_ACTION.html) or save actions.

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_TKY` demonstrates the component `%tky`.

The example [Using `%tky`](ABENDERIVED_TYPES_TKY_ABEXA.html) demonstrates the use of `%tky` with a managed RAP BO in a draft and non-draft scenario.

-   Mixing key component groups when they refer to the same RAP BO entity, e.g. `wa-%tky = wa-%key`. Such an assignment should also be avoided when both component groups have an identical scope in terms of components (e.g. `%tky` and `%key` in non-late-numbering and non-draft scenarios).
-   Mixing the same key component groups when referring to two different RAP BO entities, for example, `wa_root-%tky = wa_child-%tky`. In this case, adding more components later may cause syntax errors for an assignment that worked previously.
-   Defining structured types that have the same components as key component groups, and then assigning data objects of that type to those of the respective, original key component group.

-   Wherever `%key` can be specified within ABAP EML statements during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) except for RAP create operations, `%tky` can be specified, too.

MODIFY ENTITY demo\_managed\_draft\_root \\n UPDATE FIELDS ( field2 ) WITH VALUE #( \\n ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on \\n %key-key\_field = 4 ) \\n field2 = 'up\_draft1' ) \\n ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on \\n %key-key\_field = 5 ) \\n field2 = 'up\_draft2' ) \\n ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on \\n %key-key\_field = 6 ) \\n field2 = 'up\_draft3' ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html