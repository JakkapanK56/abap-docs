---
title: "ABAPDERIVED_TYPES_CID"
description: |
  ABAPDERIVED_TYPES_CID - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDERIVED_TYPES_CID.htm"
abapFile: "ABAPDERIVED_TYPES_CID.html"
keywords: ["update", "delete", "do", "if", "case", "types", "ABAPDERIVED", "TYPES", "CID"]
---

`%cid` is a component of [BDEF derived types](ABENRAP_DERIVED_TYPE_GLOSRY.html). It is a string to define a content ID that should be filled for ABAP EML requests. In [`strict(2)`](ABENBDL_STRICT_2.html) mode, the use of `%cid` is mandatory.

Content IDs are used as a unique, preliminary identifier for [RAP BO](ABENRAP_BO_GLOSRY.html) instances, especially as long as no primary key exists for the particular instance. `%cid` is used in RAP create operations to create RAP BO instances and for performing further, referencing modifications on those instances using [`%cid_ref`](ABAPDERIVED_TYPES_CID_REF.html). `%cid_ref` - which has the same value as `%cid` - is then used, for example, in RAP operations using [`CREATE BY`](ABAPMODIFY_ENTITY_ENTITIES_OP.html), [`UPDATE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) and [`DELETE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html), as well as [actions](ABENBDL_ACTION.html) with [`EXECUTE`](ABAPMODIFY_ENTITY_ENTITIES_OP.html) in a single ABAP EML [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) request.

`%cid` must be unique within one ABAP EML request and can be specified manually or automatically. The specified content ID is only valid within one ABAP EML request. The specification of `%cid` should be done even if there are no further operations referring to it. Especially in the context of [`early numbering`](ABENBDL_EARLY_NUMB.html) and [`late numbering`](ABENBDL_LATE_NUMBERING.html) scenarios, `%cid` must be specified to avoid issues.

In ABAP EML `MODIFY` statements, the [`AUTO FILL CID`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html) addition can be used to create `%cid` automatically to ensure that `%cid` is filled. However, if `%cid_ref` is to be used, `%cid` must be manually specified, as `%cid_ref` cannot refer to an automatically created value.

**Type**

The component has the following type: `ABP_BEHV_CID`.

**Where used**

This component can occur in the following type declarations of [`TYPE TABLE FOR ...`](ABAPTYPE_TABLE_FOR.html) and [`TYPE STRUCTURE FOR ...`](ABAPTYPE_STRUCTURE_FOR.html):

The component also occurs in the [`%target`](ABAPDERIVED_TYPES_TARGET.html) component.

[Using Keys and Identifying RAP BO Instances in a Nutshell](ABAPDERIVED_TYPES_KEYS_IDENTIFIERS.html)

The following source code section taken from `CL_DEMO_RAP_DRVD_TYPES_CID` demonstrates the component `%cid`.

The example [Using `%cid` / `%cid_ref`](ABENDERIVED_TYPES_CID_CIDREF_ABEXA.html) demonstrates the use of `%cid` and `%cid_ref` with a managed RAP BO.

-   `CREATE`
-   `ACTION IMPORT` ([static action](ABENBDL_ACTION.html))
-   `ACTION RESULT` (static action)
-   `FUNCTION IMPORT` ([static function](ABENBDL_FUNCTION.html))
-   `FUNCTION RESULT` (static function)
-   `FAILED [EARLY]`
-   `MAPPED [EARLY]`
-   `REPORTED [EARLY]`

-   A missing `%cid` specification can cause a runtime error. See [RAP Implementation Rules](ABAPRAP_IMPL_RULES.html).
-   Note the difference of using `%cid` with static actions and [factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html). In factory actions (this also includes static factory actions), the use of `%cid` is as outlined above. In case of static actions, `%cid` assumes a different role. Here, `%cid` must be considered as an operation ID which can be referred to in RAP [responses](ABAPTYPE_RESPONSE_FOR.html).

MODIFY ENTITY demo\_managed\_root\_4 \\n CREATE FIELDS ( key\_field field1 field2 field3 field4 ) \\n WITH VALUE #( \\n ( %cid = 'cid1' \\n key\_field = 1 \\n field1 = 'aaa' \\n field2 = 'bbb' \\n field3 = 10 \\n field4 = 11 ) \\n ( %cid = 'cid2' \\n key\_field = 2 \\n field1 = 'ccc' \\n field2 = 'ddd' \\n field3 = 20 \\n field4 = 21 ) \\n ( %cid = 'cid3' \\n key\_field = 3 \\n field1 = 'eee' \\n field2 = 'fff' \\n field3 = 30 \\n field4 = 31 ) ) \\n MAPPED FINAL(mapped) \\n FAILED FINAL(failed) \\n REPORTED FINAL(reported). abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenrpm\_derived\_types.html abapderived\_types\_comp.html abapderived\_types\_keys\_id.html