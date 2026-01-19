---
title: "ABENCDS_F1_DEFINE_GENERIC_ASPECT"
description: |
  ABENCDS_F1_DEFINE_GENERIC_ASPECT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DEFINE_GENERIC_ASPECT.htm"
abapFile: "ABENCDS_F1_DEFINE_GENERIC_ASPECT.html"
keywords: ["select", "do", "if", "case", "data", "ABENCDS", "DEFINE", "GENERIC", "ASPECT"]
---

``\  [[`aspect_annot`](ABENCDS_F1_DCL_AS_ANNOTATIONS.html)]\  [DEFINE] ASPECT aspect AS SELECT FROM aspect_entity    WITH USER ELEMENT user_element    [WITH FILTER ELEMENTS ( filter_element1 [AS filter_alias1],          filter_element2... ) ]\  \{      output1 [BYPASS WHEN aspect_bypass_condition]\      [, ... ]\  \}``

Defines a user-defined aspect `aspect` as part of a [CDS access policy](ABENCDS_ACCESS_POLICY_GLOSRY.html) defined using [`DEFINE ACCESSPOLICY`](ABENCDS_F1_DEFINE_ACCESSPOLICY.html). The name of the user-defined aspect must be the same as the name of the CDS access policy.

The definition of a user-defined aspect contains the following:

The following are possible as bypass conditions `aspect_bypass_condition`:

At runtime, the field `user_element` is filled with the user name of the current user. The rows produced in the aspect entity are matched with their output fields in the specified order and with the elements on the left side of the access condition to which the user-defined aspect is assigned. This means those rows in the protected entity meet the condition for which a row exists for the current user in the aspect entity.

When the bypass condition is used, the match with this field is not used if this condition exists in a row of the aspect entity. A specified value, therefore, (such as an asterisk `*`) can be used to indicate that any values of the protected entity are allowed.

**Special Requirements in the Aspect Entity**

The content of the aspect entity has a particular relevance for audits by being used in a user-defined aspect in access control.

To determine which user had access to particular data at a particular time in a system, it must be possible to reconstruct the state of the data of the aspect entity. Existing mechanisms (such as version management or change documents) cover this requirement in the case of development objects or PFCG roles, whereas aspect entities may freely specify their data sources and cannot control whether these sources are themselves auditable.

The development and runtime systems for CDS access control cannot check whether data sources are auditable. To emphasize this requirement, however, the aspect entity must have the following annotations:

-   An aspect entity `aspect_entity`, specified after the name `aspect`, which is used as a data source.
-   An element `user_element` of the aspect entity that is used as the input field for the user name of the logged on user.
-   An optional list of elements `filter_element` of the aspect entity. Using filter elements, the rows of the aspect entity can be reduced specifically for a usage location in an access role `( ( ...) = ASPECT ... FILTER BY`\\ `condition>)`. Filter elements are addressed in the filter condition using the last component of their path expression. Optionally an alias can be specified by the `AS` addition. Adding filter elements is a compatible change from the perspective of access roles using the aspect, that is, they offer a filtering possibility, but do not mandate that filtering is in fact done.
-   A comma-separated list that specifies the output elements `output1, output2, ...` of the generic aspect. The specified order applies.
-   Any number of the output fields can be tagged with a condition using the addition `BYPASS WHEN aspect_bypass_condition`. Typical bypass values are `*` or an empty value.

-   [`IS [NOT] NULL`](ABENCDS_COND_EXPR_NULL_V2.html)
-   [`IS [NOT] INITIAL`](ABENCDS_COND_EXPR_INITIAL_V2.html)
-   `IS INITIAL OR NULL`
-   Is met if the value of the aspect is `NULL` or the type-compliant initial value.
-   `= [literal](ABENCDS_LITERAL_V2.html)`

-   An auditing type with the annotation `@AccessControl.auditing.type`. Currently only the value `#CUSTOM` is possible.
-   A component with the annotation `@AccessControl.auditing.specification` specifying (as text) how the content of the entity is audited.

-   Just adding the annotations, however, does not activate auditing. This annotation should only be set if it is ensured that auditing takes place.
-   Auditing must respect all data sources of the aspect entity.
-   If auditing cannot be ensured, the aspect entity cannot be used in a user-defined aspect.
-   In ABAP SQL access to a CDS entity assigned a role of this type, user-defined aspects are defined internally using a [subquery](ABENSUBQUERY_GLOSRY.html) after `EXISTS`.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_accesspolicy.html