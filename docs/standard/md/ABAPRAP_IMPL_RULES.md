---
title: "ABAPRAP_IMPL_RULES"
description: |
  ABAPRAP_IMPL_RULES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPRAP_IMPL_RULES.htm"
abapFile: "ABAPRAP_IMPL_RULES.html"
keywords: ["select", "update", "delete", "do", "if", "case", "method", "class", "types", "ABAPRAP", "IMPL", "RULES"]
---

The [ABAP contract checks](ABENCONTRACT_CHECKS_GLOSRY.html) include [RAP BO contract](ABENRAP_BO_CONTRACT_GLOSRY.html) checks. The RAP BO contract defines a set of rules and guidelines for the [RAP BO provider](ABENRAP_BO_PROVIDER_GLOSRY.html) and [consumer](ABENRAP_BO_CONSUMER_GLOSRY.html) implementation to ensure consistency and reliability.

The checks also include transactional contract checks that are implemented in the [controlled SAP LUW](ABENCONTROLLED_SAP_LUW_GLOSRY.html) concept. This concept is implicitly used by RAP.

To enforce the ABAP contract checks, the following [checkpoint groups](ABENCHECKPOINT_GROUP_GLOSRY.html) can be activated.

**Note** Depending on the context (for example, *strict(2)* or implementations in the [restricted ABAP language version scope](ABENRESTRICTED_VERSION_GLOSRY.html)), the checkpoint group activation is not required. The violations can, especially in case of *CC\_STMT* and depending on the checkpoint group activation, result in a runtime error or they can be logged.

The following table contains RAP BO contract check violations:

See [here](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ba879a6e2ea04d9bb94c7ccd7cdac446/491c002326bc14cde10000000a42189b) how to enable a checkpoint group. You can choose whether violations are logged or cause a runtime error.

-   Development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap)
-   [Restrictions in Transactional Phases](ABAPINVALID_STMTS_IN_TX.html)
-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)

**Checkpoint group** **Purpose** **Runtime errors**\\ `CC_STMT` To enable the controlled SAP LUW checks. They check for invalid statements and operations in the transactional phases. For more information, see [here](ABAPINVALID_STMTS_IN_TX.html). \\ `BEHAVIOR_ILLEGAL_STATEMENT`, `BEHAVIOR_ILLEGAL_STMT_IN_CALL`\\ `CC_RAP_CONTRACT`, `CC_RAP_INTERNAL` RAP BO contract-related checkpoint groups to check for violations of RAP BO consumer and provider implementations. Note that the following list only relates to these checkpoint groups. `BEHAVIOR_CONTRACT_VIOLATION` **RAP BO Contract Check Violation** **Details**\\ Missing `%cid` [`%cid`](ABAPDERIVED_TYPES_CID.html) should always be filled in [RAP create operations](ABENRAP_CREATE_OPERATION_GLOSRY.html), [RAP create-by-association operations](ABENRAP_CBA_OPERATION_GLOSRY.html) (here, `%cid` should also be filled in the [%target](ABAPDERIVED_TYPES_TARGET.html) structure) and [RAP factory actions](ABENRAP_FACTORY_ACTION_GLOSRY.html). If [`%cid`](ABAPDERIVED_TYPES_CID.html) is of no relevance, you can make use of the addition [`AUTO FILL CID`](ABAPMODIFY_ENTITY_ENTITIES_FIELDS.html) to automatically fill `%cid` with a unique dummy value to make sure that it is filled. ABAP EML modify operations in RAP save sequence The RAP BO provider may only perform ABAP EML modify operations in the RAP interaction phase or in the `finalize` saver method. Improper provider implementations of [draft actions](ABENRAP_BO_DRAFT_ACTION_GLOSRY.html) that are specified with [`with additional implementation`](ABENBDL_DRAFT_ACTION.html)\\ Provider implementations of the [`edit`](ABENBDL_DRAFT_ACTION2_ABEXA.html), [`discard`](ABENBDL_DRAFT_ACTION2_ABEXA.html), and [`activate`](ABENBDL_DRAFT_ACTION1_ABEXA.html) methods should not return failed entries. \\
\\
Provider implementations of the `edit`, `discard`, and `activate`, and [`resume`](ABENBDL_DRAFT_ACTION2_ABEXA.html) methods should not return [state messages](ABENRAP_STATE_MES_GLOSRY.html). [`%state_area`](ABAPDERIVED_TYPES_STATE_AREA.html) should not be filled. Improper authorization check If a BDEF defines authorization checks ([`authorization context`](ABENBDL_AUTHORIZATION_CONTEXT.html)), then no authorization check should be performed that deviates from the definition, i.e. the authorization object used must either be listed in the `own authorization context`, or must be suppressed by another context. In such a case, the `BEHAVIOR_UNEXPECTED_AUTH_CHECK` runtime error is usually raised. Mapping of invalid preliminary keys \\ [RAP BO consumers](ABENRAP_BO_CONSUMER_GLOSRY.html) must not request the mapping of preliminary keys for which no final keys exist. Therefore, [RAP BO providers](ABENRAP_BO_PROVIDER_GLOSRY.html) should map all preliminary keys unless the operation failed. RAP BO consumers should also avoid requesting the mapping for preliminary keys if the corresponding instances have been deleted in the course of the session. Not respecting static [feature control](ABENRAP_FEATURE_CONTROL_GLOSRY.html) RAP BO consumers must respect the static feature control. For example, fields that are specified as read-only in the BDEF must not be updated, or fields that are specified as mandatory must be provided in a create operation. Unnecessary or ambiguous requests by RAP BO consumers RAP BO consumers must not request unnecessary or ambiguous operations, that is, an update operation is unnecessary if no fields are changed. Examples of ambiguous operations are duplicate update operations on the same instance, duplicate delete operations, or action or function executions. Improper use of [augmentation](ABENRAP_BO_AUGMENTATION_GLOSRY.html) An ABAP EML `MODIFY` statement using the addition `AUGMENTING` must not overwrite fields of the original request, i. e. there must not be a flag in `%control` which is set for the same instance and field both in the original and in the augmenting operation. An ABAP EML `MODIFY` statement using the addition `AUGMENTING` containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the `RELATING` clause so that responses can be associated. Non-privileged access The contract check detects access to CDS views if they are specified with [access control](ABENCDS_ACCESS_CONTROL_GLOSRY.html), for example, a `SELECT` statement without the `WITH PRIVILEGED ACCESS` addition. The check is performed as with an `AUTHORITY-CHECK OBJECT` statement. Therefore, in RAP handler and saver methods, as well as in [classified APIs](ABENCLASSIFIED_API_GLOSRY.html), a contract violation occurs where an authorization check is generally not allowed, or access without the `WITH PRIVILEGED ACCESS` addition is detected. Disallowed entries in the `failed` response parameter RAP handler method implementations of actions defined with `with additional implementation`, such as the draft actions `edit`, `activate` and `discard` (except `resume`), must not add entries to the `failed` response parameter as they cannot be considered for the current processing phase. Otherwise, the runtime error `BEHAVIOR_BAD_HANDLER_RESPONSE` is raised. \\
\\
RAP handler methods of ABAP EML modify operations must not add entries to `failed` that do not correspond to instances that are input for the operation. Entries with wrong fail causes in the `failed` response parameter RAP handler method implementations are allowed to add entries the following fail causes: \\
\\
Precheck, augmentation: Any fail cause, except `if_abap_behv=>cause-locked` \\
\\
RAP saver methods `adjust_numbers`, `save`, `save_modified`, `finalize`, `check_before_save`, and RAP handler methods with `FOR NUMBERING` for early numbering: `if_abap_behv=>cause-unspecific` \\
\\
Locks: `if_abap_behv=>cause-locked`, `if_abap_behv=>cause-not_found` \\
\\
Read and read-by-association operations: `if_abap_behv=>cause-not_found`, `if_abap_behv=>cause-unauthorized` \\
\\
Functions: any fail cause, except `if_abap_behv=>cause-locked` \\
\\
Feature control and authorization: `if_abap_behv=>cause-not_found`; not applicable to global feature control and global authorization \\
\\
Create, create-by-association, update, delete operations and actions: Any fail cause, except `if_abap_behv=>cause-locked` \\
\\
Draft action `resume`: Any fail cause, except `if_abap_behv=>cause-locked` \\
\\
Validations on save: `if_abap_behv=>cause-unspecific` \\
\\
The following contexts are not applicable: Global feature control, global authorization, determination on save and on modify, `cleanup` and `map_messages` methods. \\
\\
Otherwise, the runtime error `BEHAVIOR_BAD_HANDLER_RESPONSE` is raised. Entries with non-initial `%state_area` components in the `reported` response parameter \\ `%state_area` components must be initial in `reported` response parameter entries added in the following handler methods: Read, draft methods defined with `with additional implementation`, precheck, augmentation, `adjust_numbers`, handler methods with `FOR NUMBERING` for early numbering, `save`, `save_modified`, locks, (global) authorization, (global) feature control; not applicable in `cleanup` \\
\\
If the `%state_area` component is non-initial, the following components must be initial: `%create`, `%update`, `%delete`, `%action`, `%cid`, `%global`; only `%element` (as part of `%op`) can be specified in that case. \\
\\
Otherwise, the runtime error `BEHAVIOR_BAD_HANDLER_RESPONSE` is raised. abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_rap\_other.html