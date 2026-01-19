---
title: "ABAPDERIVED_TYPES_PKY"
description: |
  ABAPDERIVED_TYPES_PKY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDERIVED_TYPES_PKY.htm"
abapFile: "ABAPDERIVED_TYPES_PKY.html"
keywords: ["do", "if", "case", "data", "types", "ABAPDERIVED", "TYPES", "PKY"]
---

`%pky` is a [component group](ABENCOMPONENT_GROUP_GLOSRY.html) in [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html).

It serves as an identifier in a transaction in which a [RAP BO instance](ABENRAP_BO_INSTANCE_GLOSRY.html) is created. In non-[`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios, `%pky` is equal to [`%key`](ABAPDERIVED_TYPES_KEY.html) (and, thus, serves also as an identifier for persisted RAP BO instances). In a late numbering scenario, it is equal to the combination of [`%pid`](ABAPDERIVED_TYPES_PID.html) and `%key`. This identifier does not change between the creation of an instance and the next saving.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

As a general best practice, you should use a [RAP BO instance key component group](ABENKEY_COMP_GROUP_GLOSRY.html) when referring to the entire key, rather than listing the individual key fields. It is recommended that you use `%tky` whenever possible.

In the following cases, type compatibility cannot be guaranteed in component group assignments, resulting in syntax warnings:

In the above cases, the `CORRESPONDING` operator can be used to ensure type compatibility in assignments to key component groups:

... %tky = CORRESPONDING #( wa-%tky ) ... \\n... %key = CORRESPONDING #( wa-%key ) ... \\n... %pky = CORRESPONDING #( wa-%pky ) ...

In cases where different data objects of key component groups of a BDEF derived type are to be assigned to the same key component group of the same entity, a direct assignment works without a syntax warning because the content is identical. A direct assignment is recommended (`...wa1_root-%tky = wa2_root-%tky ...`). The use of the `CORRESPONDING` operator is unnecessary and has poorer performance. This is true, for example, for key component group assignments in the context of RAP response parameters failed and reported.

APPEND VALUE #( %tky = wa-%tky \\n                  ... \\n               ) TO failed-root\_entity.

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

The example [Using `%pre` / `%tmp` / `%pky`](ABENDERIVED_TYPES_PRE_TMP_ABEXA.html) demonstrates the use of `%pky` with an [unmanaged RAP BO](ABENUNMANAGED_RAP_BO_GLOSRY.html) in a [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenario.

-   Wherever `%key` can be specified within ABAP EML statements during the [RAP interaction phase](ABENRAP_INT_PHASE_GLOSRY.html) except for RAP create operations, `%pky` can be specified, too.
-   `%pky` is basically another option to refer to the keys. In non-late numbering scenarios, `%key` is the same as `%pky` since `%pid` is not available. In scenarios without late numbering and without [draft](ABENBDL_WITH_DRAFT.html), `%pky` is [`%tky`](ABAPDERIVED_TYPES_TKY.html) since [`%is_draft`](ABAPDERIVED_TYPES_IS_DRAFT.html) is not available. As outlined in the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html), the use of `%tky` is generally preferable to `%pky`. However, there are special cases in which `%tky` is not available and `%pky` can be used instead, for example, implementations with [draft actions](ABENBDL_DRAFT_ACTION.html) or save actions.

-   Mixing key component groups when they refer to the same RAP BO entity, e.g. `wa-%tky = wa-%key`. Such an assignment should also be avoided when both component groups have an identical scope in terms of components (e.g. `%tky` and `%key` in non-late-numbering and non-draft scenarios).
-   Mixing the same key component groups when referring to two different RAP BO entities, for example, `wa_root-%tky = wa_child-%tky`. In this case, adding more components later may cause syntax errors for an assignment that worked previously.
-   Defining structured types that have the same components as key component groups, and then assigning data objects of that type to those of the respective, original key component group.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html