---
title: "ABENBDL_ASSOC_IMPL_TYPE"
description: |
  ABENBDL_ASSOC_IMPL_TYPE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ASSOC_IMPL_TYPE.htm"
abapFile: "ABENBDL_ASSOC_IMPL_TYPE.html"
keywords: ["do", "if", "method", "ABENBDL", "ASSOC", "IMPL", "TYPE"]
---

`... [ managed | unmanaged ]`

RAP BDL offers the following statements to define the [association implementation type](ABENRAP_ASSOC_IMPL_TYPE_GLOSRY.html):

-   `managed`: Can only be used in business objects with [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html).

-   For [source-resolved associations](ABENSOURCE_RESOLVED_ASSOC_GLOSRY.html):
-   [Standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). The respective implementation methods do not have to be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).
-   [Nonstandard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) for [active instances](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html) must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) by the application developer.
-   [Nonstandard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) for [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html) are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html) in [draft-enabled RAP business objects](ABENDRAFT_RAP_BO_GLOSRY.html) with [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html). The respective implementation methods do not have to be implemented by the application developer.
-   For [target-resolved associations](ABENTARGET_RESOLVED_ASSOC_GLOSRY.html):
-   [Standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) and [nonstandard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). The respective implementation methods do not have to be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). This holds true for active instances and, in [draft-enabled business objects](ABENDRAFT_RAP_BO_GLOSRY.html), also for draft instances.

-   `unmanaged`: Can only be used in business objects with [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [managed](ABENMANAGED_RAP_BO_GLOSRY.html) and [draft-enabled business objects](ABENDRAFT_RAP_BO_GLOSRY.html) with [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [unmanaged](ABENUNMANAGED_RAP_BO_GLOSRY.html).
-   [Standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) and [Nonstandard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). This holds true for active and draft instances in [draft-enabled business objects](ABENDRAFT_RAP_BO_GLOSRY.html).
-   No specification of an [association implementation type](ABENRAP_ASSOC_IMPL_TYPE_GLOSRY.html):

-   In business object with [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [managed](ABENMANAGED_RAP_BO_GLOSRY.html):
-   [Standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) and [nonstandard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). The respective implementation methods do not have to be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). This holds true for active instances and draft instances in [draft-enabled business objects](ABENDRAFT_RAP_BO_GLOSRY.html). However, it is not guaranteed that transactional enablement works for all associations.
-   [Source-resolved cross-BO associations](ABENSOURCE_RESOLVED_ASSOC_GLOSRY.html) are affected by the addition [with cross associations](ABENBDL_WITH_CROSS_ASSOC.html) on BDEF header level: without that addition, certain scenarios are not supported, for example the [create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html) when the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) is specified with [RAP late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html). For already supported scenarios, the use of [with cross associations](ABENBDL_WITH_CROSS_ASSOC.html) leads to an improved managed runtime implementation with additional syntax checks and error handling.
-   In business objects with [implementation type](ABENCDS_BDEF_IMPL_TYPE_GLOSRY.html)\\ [unmanaged](ABENMANAGED_RAP_BO_GLOSRY.html):
-   \- [Operations for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) for [active instances](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html): [Standard operations for associations](ABENRAP_STANDARD_OP_ASSOC_GLOSRY.html) and [nonstandard operations for associations](ABENRAP_NONST_OP_ASSOC_GLOSRY.html) for [active instances](ABENRAP_ACTIVE_INSTANCE_GLOSRY.html) must be implemented in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html).
-   \- [Operations for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) for [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html): Most of the [operations for associations](ABENRAP_OPERATION_ASSOC_GLOSRY.html) are handled by the [managed RAP BO provider](ABENMANAGED_RAP_BO_PROV_GLOSRY.html). However, it is not guaranteed that transactional enablement works for all associations. For example, the [create-by-association operation](ABENRAP_CBA_OPERATION_GLOSRY.html) of a [source-resolved association](ABENSOURCE_RESOLVED_ASSOC_GLOSRY.html) with a [association target](ABENASSOCIATION_TARGET_GLOSRY.html) with [RAP late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html) does not work without `[with cross associations](ABENBDL_WITH_CROSS_ASSOC.html)` on BDEF header.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_body.html abenbdl\_operations.html abenbdl\_association.html