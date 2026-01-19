---
title: "ABENCDS_F1_DCL_FUNCTION"
description: |
  ABENCDS_F1_DCL_FUNCTION - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DCL_FUNCTION.htm"
abapFile: "ABENCDS_F1_DCL_FUNCTION.html"
keywords: ["select", "do", "while", "if", "case", "method", "data", "types", "ABENCDS", "DCL", "FUNCTION"]
---

`... \{ SACF_CHECK_IN_USE( NAME => scenario_name [, OBJECT => auth_object ] )            IS [NOT] INITIAL \}\    |\ \{ OPTIONAL_ELEMENT_EXISTS( NAME => element )            IS [NOT] INITIAL \}\    |\ \{ SWITCH_RUNTIME_STATE( NAME => switch_name )            IS [NOT] INITIAL \}\    |\ \{ TOGGLE_RUNTIME_STATE( NAME => toggle_name )            IS [NOT] INITIAL \}\    |\ \{ CONTEXT_NODE_EXISTS(...)            IS [NOT] INITIAL \} ...`

[1. `... SACF_CHECK_IN_USE ...`](#ABAP_VARIANT_1@1@)

[2. `... OPTIONAL_ELEMENT_EXISTS ...`](#ABAP_VARIANT_2@1@)

[3. `... SWITCH_RUNTIME_STATE ...`](#ABAP_VARIANT_3@1@)

[4. `... TOGGLE_RUNTIME_STATE ...`](#ABAP_VARIANT_4@1@)

[5. `... CONTEXT_NODE_EXISTS ...`](#ABAP_VARIANT_5@1@)

DCL functions are evaluated in the ABAP application server before the [access conditions](ABENACCESS_CONDITION_GLOSRY.html) are sent to the database.

They evaluate to either logical `TRUE` or logical `FALSE` and then may result in reduction of the logical expression tree of the access control.

The effect of the DCL function applies at runtime only. Syntactical correctness of the access control must be always given.

For example, in a condition like `dcl_function`\\ `AND element IS NULL` a syntax error will appear when element does not exist, even when the `dcl_function` at the time of compilation behaves like a logical `FALSE`.

Using this DCL function, the state of switchable authorization checks can be queried and used in an access control to enable or disable condition blocks.

The function behaves like the ABAP method `CL_SACF=>SACF_CHECK_IN_USE` with its parameters `ID_NAME` and `ID_OBJECT`. The returned value can only be tested by the `IS [NOT] INITIAL` operator:

This access control realizes a migration from an old authorization object `OLD_AUTH` to a new authorization object `NEW_AUTH` based on the SACF scenario `NEW_AUTH_SWITCH`. As soon as this scenario is activated, the old authorization object is no longer considered.

When you only need to introduce new authorization objects without the need to instantly disable the evaluation of a predecessor, the regular syntax addition to PFCG conditions is preferred:

`( element ) = ASPECT PFCG_AUTH( NEW_AUTH IN SCENARIO NEW_AUTH_SWITCH, F)`

With this DCL function, existence of the given CDS element in the protected entity can be queried at runtime. Based on the outcome of the check, larger condition blocks in the access control can then be enabled or disabled.

It is an extension to the concept of optional elements ([`WITH OPTIONAL ELEMENTS`](ABENCDS_DCL_ROLE_COND_RULE.html)) and allows application not only for newly introduced elements, but also for replacement scenarios in which an element is semantically replaced by another element.

This access control formerly realized access control using an association.

To increase the selection performance, this association should be replaced by a replica of the used element in the protected entity itself (`itemState`).

As this element is not instantly available in CDS entities which inherit their access conditions from this entity, the new element is introduced as optional element (the default value `FALSE` is secure by default, but in the current case not used at runtime due to the DCL function), and in this case, the former access control should apply.

As soon as the new element becomes available, it should be used instead and the former one no longer be used at all (to avoid performance degradation due to join evaluation).

This function retrieves the runtime state of a switch in the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) (SFW):

If the switch with the name `SWITCH_NAME` is active (*On*), the access condition tests the value of the field `STATE1`, otherwise it tests the value of the field `STATE2`.

This function behaves like `SWITCH_RUNTIME_STATE` at runtime. The difference between the two functions is the type of the switch whose name is specified in the `NAME` parameter. While `TOGGLE_RUNTIME_STATE` can only be used for switches of type *Feature Toggle*, the function `SWITCH_RUNTIME_STATE` can only be used for switches of other types.

The rationale for using two different functions is the best practice that feature toggles should exist only temporarily until the feature they guard becomes a core feature, while switches of other types are long-lived.

The dedicated function allows the reader of the access control to immediately recognize that the content is ephemeral.

This function is reserved for use by SAP.

-   `SACF_CHECK_IN_USE( ... ) IS INITIAL` is `TRUE` when the given scenario (eventually specifically for the given authorization object) is not active, that is, an authorization check switched by this scenario behaves like full authorization.
-   `SACF_CHECK_IN_USE( ...) IS NOT INITIAL` is `TRUE` when the given scenario (eventually specifically for the given authorization object) is active, that is, an authorization check switched by this scenario is executed based on the users authorizations.

-   The element which is queried in the function must be declared as optional element.
-   By using the function with an element, you explicitly make clear that the element may be missing, therefore declaring it optional is mandatory to avoid syntactically wrong access controls when the element is missing.
-   The element which is queried in the function must be used at least once outside in the access control in a condition statement.

-   If the switch state is *On*, the result of the function is considered non-initial and testing the function with `IS NOT INITIAL` returns `TRUE`, while testing with `IS INITIAL` returns `FALSE`.
-   Otherwise, the result of the function is initial and the test result is reversed under the two operators mentioned above.

-   For switches in the Switch Framework of type *Feature Toggle*, use the dedicated DCL function `TOGGLE_RUNTIME_STATE`.
-   This function is only evaluated at runtime. See the documentation for the CDS role addition [`SWITCHABLE`](ABENCDS_F1_DEFINE_ROLE.html) for another type of switch dependency in CDS access control that affects the access control generation process.

GRANT SELECT ON cds\_entity \\n WHERE \\n SACF\_CHECK\_IN\_USE (NAME => NEW\_AUTH\_SWITCH ) IS INITIAL \\n AND \\n ( element ) = ASPECT PFCG\_AUTH( OLD\_AUTH, F ) \\n OR \\n SACF\_CHECK\_IN\_USE( NAME => NEW\_AUTH\_SWITCH ) IS NOT INITIAL \\n AND \\n ( element ) = ASPECT PFCG\_AUTH( NEW\_AUTH, F ); GRANT SELECT ON cds\_entity \\n WITH OPTIONAL ELEMENTS (itemState DEFAULT FALSE ) \\n WHERE \\n OPTIONAL\_ELEMENT\_EXISTS( NAME => itemState ) IS INITIAL \\n AND \\n toItem.state = 'A' \\n OR \\n OPTIONAL\_ELEMENT\_EXISTS( NAME => itemState ) IS NOT INITIAL \\n AND \\n itemState = 'A'; GRANT SELECT ON cds\_entity \\n WHERE \\n IF \\n ( SWITCH\_RUNTIME\_STATE( NAME => SWITCH\_NAME ) IS NOT INITIAL ) \\n THEN \\n \\{ STATE1 = 'A' \\} \\n ELSE \\n \\{ STATE2 = 'A' \\}; abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html