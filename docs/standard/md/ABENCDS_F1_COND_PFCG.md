---
title: "For example, when this is the condition"
description: |
  ALL ( toSetVal.F ) = ASPECT PFCG_AUTH( AUTH_OBJECT, F ) and the values of the set-valued association for a dedicated entity row are Then access to the row is granted when the user's authorization either contains the single values A1 and A2 or the wildcard A, but not when only A1 is prese
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_COND_PFCG.htm"
abapFile: "ABENCDS_F1_COND_PFCG.html"
keywords: ["select", "update", "do", "if", "case", "try", "method", "class", "data", "types", "ABENCDS", "COND", "PFCG"]
---

``...[ALL|EXISTS]\     ([element1 [BYPASS WHEN bypass_condition]\     |[`\{ element1[, element2 ...] \}`](ABENCDS_F1_COND_PFCG_MAPPING.html)\      [, element2 [BYPASS WHEN bypass_condition]\     |[`\{ element1[, element2 ...] \}`](ABENCDS_F1_COND_PFCG_MAPPING.html) ...]] )           =|?= ASPECT pfcg_auth                  ( auth_object [IN SCENARIO scenario_name],                   [mapped_field1|\{[`PFCG_MAPPING = pfcg_mapping`](ABENCDS_F1_COND_PFCG_MAPPING.html)\}[,                    mapped_field2|\{[`PFCG_MAPPING = pfcg_mapping`](ABENCDS_F1_COND_PFCG_MAPPING.html)\} ...]][,                    auth_field1 = 'value'[,                    auth_field2 = 'value' ...]] ) ...``

[1.  `... ALL`](#ABAP_ADDITION_1@3@)

[2.  `... EXISTS`](#ABAP_ADDITION_2@3@)

[3.  `... BYPASS WHEN`](#ABAP_ADDITION_3@3@)

[4.  `... IN SCENARIO`](#ABAP_ADDITION_4@3@)

PFCG condition as part of an [access condition](ABENACCESS_CONDITION_GLOSRY.html)\\ [`cds_cond`](ABENCDS_DCL_ROLE_COND_EXPR.html) in an [access rule](ABENCDS_DCL_ROLE_RULES.html) of the statement [`DEFINE ROLE`](ABENCDS_F1_DEFINE_ROLE.html) in [CDS DCL](ABENCDS_DCL_GLOSRY.html). A PFCG condition filters the elements of the CDS entity specified on the left side of the operator `=` or `?=` with the [authorizations](ABENAUTHORIZATION_GLOSRY.html) specified on the right side, which are granted using the classic role maintenance (transaction PFCG). CDS access control takes this information and the authorizations of the current user and uses it to create logical conditions, which are evaluated each time the object is accessed.

If the operator `?=` is used, the evaluation is made in the same way as when using `=`. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](ABENNULL_VALUE_GLOSRY.html) or their type-dependent initial value. This applies even if the user does not have an authorization for the specified authorization object.

The operator [`NOT`](ABENCDS_DCL_ROLE_COND_EXPR.html) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements `element` and mapped authorization fields `mapped_field`.

The following applies with respect to the order in which a PFCG condition is evaluated:

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](ABENAUTHORIZATION_GLOSRY.html) are compared with content from CDS elements. Here, the field values are [converted](ABENCDS_F1_DCL_PFCG_MAPPING.html) to the dictionary types of the CDS elements.

Values from the right side which are not compatible with the element type result in a `false` predicate for the value. If all values of a specific authorization field are not compatible, the entire field is handled as the `false` predicate and the authorization is ignored. When all authorizations are ignored, the result of the PFCG condition is the `false` predicate.

During [update](ABENAUTHORITY_DURING_UPDATE.html) task processing, the predefined aspect `pfcg_auth` behaves as if the user has full authorization. This replicates the behavior of the classic [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html) statement, which in this situation always returns `sy-subrc` = 0.

When at least one of the involved elements uses a set-valued association, with this addition you specify that the access to the entity row shall only be granted when all resulting association values satisfy the condition.

For example, when this is the condition

ALL ( toSetVal.F ) = ASPECT PFCG\_AUTH( AUTH\_OBJECT, F )

and the values of the set-valued association for a dedicated entity row are

Then access to the row is granted when the user's authorization either contains the single values *A1* and *A2* or the wildcard *A\**, but not when only *A1* is present.

Using `BYPASS WHEN`, dedicated initial values can be ignored in the decision whether all association rows are hit:

Here, access is granted for the same user authorizations by

ALL (toSetVal.F BYPASS WHEN IS NULL ) = ...

When there are multiple elements with path expressions used in the PFCG condition and the `ALL` quantifier is used, then the following requirement is enforced:

For each pair of involved path expressions, the substring from the beginning up to but not including the last component name are either equal or one is fully contained in the other.

With this limitation, the system prevents the accidental creation of a meaningless cross-product between unrelated set-valued associations (for example in a sales order all combinations of *Allowed Invoice Currency* and *Contact Person Communication Channel*).

Similar to the usage of `EXISTS` in literal conditions, it can serve in PFCG conditions to isolate set-valued associations used in them from the usage of the same associations in other locations of the access control.

Due to the limitation regarding the usage of path expressions inside `ALL` and `EXISTS`, inside the element group of the PFCG condition the issue does not exist.

The addition `BYPASS WHEN bypass_condition` can be used to specify that the element is not used for authorization filtering if it meets the specified condition.

The following are possible for `bypass_condition`:

The addition can be used to let incomplete documents pass a PFCG condition without adding empty values to the PFCG role.

The following applies to the addition `BYPASS WHEN`:

In the case of a PFCG condition with a single field

`... ( element BYPASS WHEN IS NULL ) = ASPECT pfcg_auth ( object, field )`

the following applies to the user who has the allowed value *A* for the field `field` and the authorization object `object`:

In the case of a PFCG condition with two fields

`... ( element1 BYPASS WHEN IS NULL, element2 BYPASS WHEN IS INITIAL ) = ASPECT pfcg_auth ( object, field1, field2 )`

the following applies to a user who has the allowed values *A* and *B* for the fields `field1` and `field2` respectively and the authorization object `object`:

The following would be necessary to formulate the PFCG condition with two fields without the addition `BYPASS WHEN`:

`(element1,element2) = ASPECT pfcg_auth(object,field1,field2) OR element1 IS NULL AND (element2) = ASPECT pfcg_auth(object,field2) OR element2 IS INITIAL AND (element1) = ASPECT pfcg_auth(object,field1) OR (element1 IS NULL AND element2 IS INITIAL) AND () = ASPECT pfcg_auth(object)`

The following abstract examples explain various types of PFCG conditions:

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator `NOT`:

The access condition is true if the current user is not assigned the authorization object `auth_object`. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

The following CDS role constructs an access rule for the CDS view `demo_cds_auth_pfcg`. A PFCG condition is specified that associates the CDS element `carrid` with the authorization field `CARRID` of the authorization object `S_CARRID`. If specified, `actvt='03'` restricts the CDS access control check to the associated authorizations of the current user that have the value *3* in `ACTVT`.

CDS or DDIC source code was not found

The CDS view is as follows:

The program `DEMO_CDS_AUTH_PFCG` accesses the view.

**Note** Accessing the CDS-managed DDIC view (obsolete) of a CDS DDIC-based view as shown here is for demonstration purposes only. This way of accessing such CDS views is [obsolete](ABENCDS_ACCESS_OBSOLETE.html) and only the CDS entities should now be accessed.

The optional addition `IN SCENARIO` can be used to apply the switchable authorization (transaction `SACF`) to an authorization object.

The following applies to the addition `IN SCENARIO`:

-   Left Side

-   The left side consists of a parenthesized comma-separated list consisting of zero, one, or multiple [CDS elements](ABENCDS_ELEMENT_GLOSRY.html) of a CDS entity for which the access condition is defined. An element `element` can be specified directly or by using a path expression [`path_expr`](ABENSQL_PATH_EXPRESSION_GLOSRY.html) and must have one of the valid [data types](ABENCDS_F1_DCL_COND_DATA_TYPES.html). In a set-valued path expression, it is sufficient for the condition to be true for just one of the values.
-   The addition `BYPASS WHEN` can be used to specify a bypass condition for an element `element`. If the condition is met, the element in question is not used for authorization filtering.
-   As an alternative to a single element `element`, an element list in curly brackets [`\{ element1[, element2 ...] \}`](ABENCDS_F1_COND_PFCG_MAPPING.html) can be specified instead. A [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html) must be mapped to this list using [`PFCG_MAPPING = pfcg_mapping`](ABENCDS_F1_COND_PFCG_MAPPING.html) on the right side.

-   Right Side
-   The right side is introduced using `ASPECT`\\ `pfcg_auth`. Here, `pfcg_auth` is a predefined [aspect](ABENCDS_ASPECT_GLOSRY.html) used to associate the CDS elements with the [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current user for an [authorization object](ABENAUTHORIZATION_OBJECT_GLOSRY.html) of the [SAP authorization concept](ABENBC_AUTHORITY_CHECK.html). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using `auth_object`.
-   `mapped_field1`, `mapped_field2` are used to specify the names of the [authorization fields](ABENAUTHORIZATION_FIELD_GLOSRY.html) of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map a single authorization field to multiple CDS elements. By default, CDS access control evaluates all [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true when at least one authorization exists whose authorization values match the values of the entity elements on the left side.
-   If a CDS element is specified on the left side as an element list in curly brackets `[\{ element1[, element2 ...] \}](ABENCDS_F1_COND_PFCG_MAPPING.html)` rather than being specified directly, [`PFCG_MAPPING = pfcg_mapping`](ABENCDS_F1_COND_PFCG_MAPPING.html) must be used to specify a [PFCG mapping](ABENCDS_PFCG_MAPPING_GLOSRY.html) instead of the name of an authorization field `mapped_field`.
-   Further optional authorization fields `auth_field1`, `auth_field2` of the authorization object can be specified to which literal values can be mapped using `=`. In this case, the evaluation only respects those [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.
-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field `mapped_field` can be specified after `auth_object`. If further optional authorization fields `auth_field1`, `auth_field1`, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](ABENAUTHORIZATION_GLOSRY.html) (or those authorizations specified using `auth_field1`, `auth_field1`, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.
-   The authorization object `auth_object`, authorization field `auth_field` and scenario name `scenario_name` can be written without single quotes when they comply with identifier syntax, otherwise they must be written as text literals with single quotes.

-   If multiple authorizations are evaluated, the resulting conditions are combined using a logical *or*.
-   In the conditions of each authorization used, the values for the authorization fields in question are combined using a logical *and*.
-   If there are multiple values for an authorization field, they are combined using a logical *or*.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case, unexpected results can arise.
-   PFCG conditions with non-empty parentheses on the left side cannot be negated using the operator `NOT`, since this entails the opposite of an authorization check and hence unexpected results.
-   PFCG conditions can be combined within an access rule using [literal conditions](ABENCDS_F1_COND_LITERAL.html), [user conditions](ABENCDS_F1_COND_USER.html), and [inheritance conditions](ABENCDS_F1_COND_INHERIT.html).
-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](ABENNULL_VALUE_GLOSRY.html). If this behavior is unwanted, `AND` can be used to attach a [literal condition](ABENCDS_F1_COND_LITERAL.html)\\ `element IS NOT NULL`.
-   It is advisable to specify an `element` of the CDS entity directly and to only use path expressions in exceptional cases.
-   The operator `?=` is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements. `BYPASS WHEN` is a better alternative.
-   The statement regarding operator `?=` in chapter "CDS DCL-DEFINE ROLE, operator" applies to PFCG conditions as well.
-   The global and context-specific disabling of authorization checks is respected.
-   When any of the left side elements of a PFCG condition (including those which are part of a PFCG mapping group) is declared as optional with `DEFAULT FALSE` and missing at runtime, the entire PFCG condition is handled as logically false. This decision is taken before the authorization object is evaluated, therefore it is not affected by full authorization or disablement of authorization checks.
-   Optional elements with `DEFAULT TRUE` are removed from the left side of the PFCG condition together with their right side counterpart. If this applies to all left side elements, a PFCG condition with empty element list remains, and the result is a Boolean predicate depending on the assignment status of the authorization object to the user.
-   In code executed in update task, PFCG conditions behave like full authorization.
-   The size of the database statement resulting from a PFCG condition depends on the amount of role data maintained for the currently logged on user. Tools which maintain the role data in an automated way might populate authorizations with many individual values (for example all cost centers in a company). These values then appear in the database statement and may exceed the limit for the statement size or lead to increased statement processing time. Runtime optimizations apply to plain fields when the application `WHERE` clause already denotes strong restrictions on the affected fields, however the availability of this optimization cannot be assumed.
-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime framework. The internal implementation can be made using `WHERE` conditions or [common table expressions](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) and can change between releases.
-   In ABAP SQL reads, the additional conditions can be viewed in the [SQL Trace](ABENSQL_TRACE_GLOSRY.html) tools (transaction `ST05`).
-   The authorization checks can be found in transactions `SU24` and `SU25`.
-   For `element`, some variants of this condition type support the use of the function `CONTEXT_NODE_VALUES`. This function is reserved for use by SAP.
-   When an element has a CDS enumerated type and this element is used in a PFCG condition outside of a PFCG mapping, no value from the right side except the full authorization value is compatible with this element and the `false` predicate is generated. The syntax check emits a warning for this situation.

-   Although the argument leading to the path expression limitation is based on set-valued associations, the DCL syntax check will apply it also to single-valued associations, to avoid that later changes to the cardinality of the association invalidate existing access controls.
-   The `ALL` quantifier results in an additional `EXISTS` statement on the database, formulated on the protected entity. It cannot be guaranteed that the database optimizer recognizes this constellation properly as self-join. The performance of the database selection can therefore be impacted.
-   The quantifier `ALL` can be applied to a condition regardless of whether element contains a set-valued association at all. However, it will then not have an effect but lead to the potential performance degradation when applied unnecessarily.
-   The usage of PFCG-Mappings (`PFCG_MAPPING`) is not possible together with this addition.
-   A row in which all elements resolve to an empty result set is handled equally to a single result with all elements having a null value.

-   [`IS NULL`](ABENCDS_COND_EXPR_NULL_V2.html)
-   [`IS INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html)
-   `IS INITIAL OR NULL`

-   If the logged on user does not have the specified authorization, the PFCG condition is false, even if all CDS elements on the left side have the bypass value. This ensures that access to a row is secured by the authorization object in all cases and, if necessary, for specific filter values.
-   If rows consisting solely of bypass values should be read in this case, the corresponding logical condition must be defined separately and combined with the PFCG condition using the logical operator `OR`. If the difference between the initial value and the null value is not relevant, the operator `?=` can be used since this is evaluated independently from the authorizations of the user.

-   The following example is a typical case. Multiple elements, `element1`, `element2`, are mapped to different authorization fields, `field1`, `field2`, of an authorization object `auth_object`. Those [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current user are evaluated in which a particular activity is allowed.
-   `@MappingRole: 'true' DEFINE ROLE demo_role \{ grant SELECT ON entity WHERE ( element1, element2 ) = ASPECT pfcg_auth ( auth_object, field1, field2, ACTVT = '02'); \}`
-   The current user has two authorizations for the authorization object `auth_object`:

-   An authorization with the values *A* and *B* for the authorization field `field1` and the values *C* and *D* for the authorization field `field2`
-   An authorization with the value *X\** for the authorization field `field1` and the value *Y* for the authorization field `field2`

-   The access condition added to the other conditions of the CDS entity `entity` by CDS access control using a logical *and* can be expressed in SQL as follows:
-   `... AND ( ( element1 = 'A' OR element1 = 'B' ) AND ( element2 = 'C' OR element2 = 'D' ) OR element1 LIKE 'X%' AND element2 = 'Y' )`
-   The values of each authorization are combined using `AND` and the conditions of both authorizations are combined using `OR`. The wildcard character `*` is [converted](ABENCDS_F1_DCL_PFCG_MAPPING.html) to a `LIKE` condition. The actual variant in question, however, can have a different appearance.
-   If `?=` instead of `=` is used in the example above, the access condition is expanded roughly as follows:
    `... element2 = 'Y' OR ( ( element1 IS NULL or element1 = '' ) AND ( element2 IS NULL or element2 = '' ) )`
-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](ABENAUTHORIZATION_GLOSRY.html) of the current user are used that contain both the activities *02* and *03*, plus the authorization field `country` with the value *DE*. Only those rows are read for which the CDS element `element` matches the authorization field `field` of these authorizations.
-   `@MappingRole: true DEFINE ROLE demo_role \{ GRANT SELECT ON entity WHERE (element) = ASPECT pfcg_auth( auth_object, field, actvt = '02', actvt = '03', country = 'DE' );\}`
-   In the following example, the same authorization field `field` is used for the items `mapped_field` and `auth_field`. If the current user has an authorization with the values *X*, *Y*, and *Z* for this authorization field, this authorization is used by specifying `field = 'X'`. CDS access control then uses all three allowed values *X*, *Y*, and *Z* when the CDS entity is accessed.
-   `@MappingRole: true DEFINE ROLE demo_role \{ GRANT SELECT ON entity WHERE (element) = ASPECT pfcg_auth( auth_object, field, field = 'X' ); \}`
-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object `auth_object` with the activity *03*.
-   `@MappingRole: true DEFINE ROLE demo_role \{ GRANT SELECT ON entity WHERE ( ) = ASPECT pfcg_auth( auth_object, ACTVT = '03' ); \}`
-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization for the authorization object `auth_object` (with arbitrary values).
-   `@MappingRole: true DEFINE ROLE demo_role \{ GRANT SELECT ON entity WHERE ( ) = ASPECT pfcg_auth( auth_object ); \}`

-   There is no implicit authorization check when the associated [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is accessed. Instead, the rows without authorization are removed from the results later using the statement [`AUTHORITY-CHECK`](ABAPAUTHORITY-CHECK.html).
-   When the CDS is accessed, the `SELECT` statement only reads the data for which the current user has authorization.

-   Unlike direct use in program code (`CL_SACF=>AUTH_CHECK_SPEC`), the use of switchable authorizations has the restriction that there is no interaction with the user interface (such as warning messages or dialogs in recording mode). The recording modes behave as if the check method were called using the parameter `ID_SILENT = 'X'` and do not persist any data in the `SACF` configuration.
-   The security audit log, which can be enabled from the `SACF` configuration contains the name of the CDS entity as well as the name of the authorization object and the requested and filter fields.
-   If the PFCG condition uses PFCG mappings, these must also have the addition `IN SCENARIO` and name the same scenario.
-   The scenario name can be written without single quotes when it complies with identifier syntax, otherwise it must be written with surrounding single quotes as a text literal.

... WHERE NOT ( ) = ASPECT pfcg\_auth( auth\_object ) ... @AbapCatalog.sqlViewName: 'DEMO\_CDS\_PFCG'\\n@AccessControl.authorizationCheck: #CHECK\\ndefine view demo\_cds\_auth\_pfcg\\n as select from\\n scarr\\n \\{\\n key carrid,\\n carrname,\\n currcode,\\n url\\n \\};\\n **toSetVal Row Number** **toSetVal.F** **Value of element** **Filtering Result** **Value of element1** **Value of element2** Filtering Result **toSetVal Row Number** **toSetVal.F**\\ `1` `A1`\\ `2` `A2` `1` `A1` `2` `A2` `3` `NULL` *A* OK `NULL` OK (by bypass value for `field`) *X* Blocked *A* `B` OK `NULL` `B` OK (by bypassing for `field1`) *A* `INITIAL` OK (by bypassing for `field2`) `NULL` `INITIAL` OK (by bypassing for `field1` and `field2`) *X* `INITIAL` Blocked `NULL` `Y` Blocked *X* `Y` Blocked `INITIAL` `NULL` Blocked (`NULL` and `INITIAL` are distinguished) abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html