---
title: "ABENBDL_CHARACTER"
description: |
  ABENBDL_CHARACTER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_CHARACTER.htm"
abapFile: "ABENBDL_CHARACTER.html"
keywords: ["if", "case", "data", "ABENBDL", "CHARACTER"]
---

```...  [[`persistent table`](ABENBDL_PERSISTENT_TABLE.html)] TableName       [[`draft table`](ABENBDL_DRAFT_TABLE.html) DraftTableName]\       [[`SavingOptions`](ABENBDL_SAVING.html)]\      \{[[`` `etag` ``](ABENBDL_ETAG.html)]\       [[`Locking`](ABENBDL_LOCKING.html)]\       [[`Authorization`](ABENBDL_AUTHORIZATION.html)]\}\      |\ [`SyntaxShortForm`](ABENBDL_SHORT_SYNTAX.html)\       [[`` `extensible` ``](ABENBDL_EXTENSIBLE.html)]\       [[`` `early numbering` ``](ABENBDL_EARLY_NUMB.html)]\       [[`` `late numbering` ``](ABENBDL_LATE_NUMBERING.html)] ...```

This topic provides an overview of all available [entity behavior characteristics](ABENCDS_ENTITY_PROPERTIES_GLOSRY.html). Entity behavior characteristics define additional properties for a [RAP BO entity](ABENRAP_BO_ENTITY_GLOSRY.html). Some are mandatory and some are optional. Different characteristics are available for managed, unmanaged, and draft-enabled scenarios. In some cases, the order of notation is important. For example, the `total etag` must always be specified directly after the `lock master`. These details are described in the respective topics.

Each characteristic can occur only once in a RAP behavior definition.

-   [`persistent table`](ABENBDL_PERSISTENT_TABLE.html)
-   Specifies the [RAP persistent table](ABENRAP_PERSISTENT_TABLE_GLOSRY.html)\\ `TableName` for storing the CDS entity's data changes that result from transactional behavior. Only available for [managed RAP BO](ABENMANAGED_RAP_BO_GLOSRY.html).
-   [`draft table`](ABENBDL_DRAFT_TABLE.html)
-   Specifies the [RAP draft table](ABENDRAFT_TABLE_GLOSRY.html)\\ `DraftTableName` for storing data changes of [draft instances](ABENRAP_DRAFT_INSTANCE_GLOSRY.html). This addition is only available for draft-enabled scenarios using the addition [`with draft`](ABENBDL_WITH_DRAFT.html) or [`with collaborative draft`](ABENBDL_WITH_COLL_DRAFT.html).
-   [`SavingOptions`](ABENBDL_SAVING.html)
-   The default [save sequence](ABENRAP_SAVE_SEQ_GLOSRY.html) can either be enhanced or switched off and overwritten with a user-defined saving strategy. Can be defined in the [BDEF header](ABENCDS_BDEF_HEADER_GLOSRY.html) and then applies to all entities of the business object. It is also possible to define saving options as an entity behavior characteristic. If specified, an implementation in the [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html) is required. Only available for [managed implementation scenarios](ABENMANAGED_RAP_BO_GLOSRY.html).
-   [`etag`](ABENBDL_ETAG.html)
-   [Optimistic concurrency control](ABENOPTIMISTIC_CONC_CONTROL_GLOSRY.html).
-   [`Locking`](ABENBDL_LOCKING.html)
-   [Pessimistic concurrency control](ABENPESSIMIST_CONC_CONTROL_GLOSRY.html).
-   [`Authorization`](ABENBDL_AUTHORIZATION.html)
-   Defines which [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) under which circumstances are allowed to read or change data of a business object.
-   [`ShortSyntaxForm`](ABENBDL_SHORT_SYNTAX.html): The three statements `lock dependent by _assoc`, `authorization dependent by _assoc`, and `etag dependent by _assoc` can be summarized into one statement: `(lock, authorization, etag) dependent by _assoc`. For details, see topic [RAP - `SyntaxShortForm`](ABENBDL_SHORT_SYNTAX.html).
-   [`extensible`](ABENBDL_EXTENSIBLE.html)
-   [RAP extensibility enablement](ABENRAP_EXT_ENABLEMENT_GLOSRY.html)
-   [`early numbering`](ABENBDL_EARLY_NUMB.html)
-   [RAP early numbering](ABENRAP_EARLY_NUMBERING_GLOSRY.html) means early value assignment for the primary key fields.
-   [`late numbering`](ABENBDL_LATE_NUMBERING.html)
-   [Late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html) means late value assignment for the primary key fields.

abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html