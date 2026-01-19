---
title: "ABENNEWS-777-CDS_ACCESS_CONTROL"
description: |
  ABENNEWS-777-CDS_ACCESS_CONTROL - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-777-CDS_ACCESS_CONTROL.htm"
abapFile: "ABENNEWS-777-CDS_ACCESS_CONTROL.html"
keywords: ["select", "if", "ABENNEWS", "777", "CDS", "ACCESS", "CONTROL"]
---

[1. Addition `COMBINATION MODE OR|AND` of the Statement `GRANT SELECT ON`](#ABAP_MODIFICATION_1@4@)

[2. Addition `REDEFINITION` of the Statement `GRANT SELECT ON`](#ABAP_MODIFICATION_2@4@)

[3. Addition `IN SCENARIO` of the Statement `GRANT SELECT ON`](#ABAP_MODIFICATION_3@4@)

[4. Generic Aspect Condition of the Statement `DEFINE ROLE`](#ABAP_MODIFICATION_4@4@)

[5. New Variant `INHERITING CONDITIONS FROM SUPER`](#ABAP_MODIFICATION_5@4@)

[6. `REPLACING` Operator `ELEMENT ... WITH`](#ABAP_MODIFICATION_6@4@)

[7\. Definition of a Generic Aspect](#ABAP_MODIFICATION_7@4@)

[8\. Access Control for ABAP CDS Hierarchies](#ABAP_MODIFICATION_8@4@)

[9\. DCL Restrictions for CDS Transactional Queries](#ABAP_MODIFICATION_9@4@)

[10. `VOID`](#ABAP_MODIFICATION_10@4@)

[11. `CONSTRAINT ID`](#ABAP_MODIFICATION_11@4@)

The optional addition [`COMBINATION MODE`](ABENCDS_DCL_ROLE_COND_RULE.html) can now be used to define how the access conditions of multiple CDS access rules for the same CDS entity are combined.

The addition [`REDEFINITION`](ABENCDS_DCL_ROLE_COND_RULE.html) is used to indicate that the specified CDS access rule is the only existing access rule and any other access rules are ignored.

The optional addition [`IN SCENARIO`](ABENCDS_F1_COND_PFCG.html) can be used to apply the switchable authorization check to an authorization object.

An aspect condition can now be used to specify the [generic aspect](ABENCDS_F1_COND_ASPECT.html) defined in an aspect definition in the right side introduced by `ASPECT`.

There is now another [variant](ABENCDS_F1_COND_INHERIT.html) of the inheritance condition in an access rule of the statement `DEFINE ROLE`, which applies the access conditions from `SUPER`.

Any number of [`ELEMENT`](ABENCDS_F1_COND_INHERIT.html) operators can be used to transform conditions that use fields of the inherited entity to a different field of the inheriting entity.

A [generic aspect](ABENCDS_F1_DEFINE_GENERIC_ASPECT.html) can now be defined as part of a CDS access policy itself defined using `DEFINE ACCESSPOLICY`.

ABAP CDS hierarchies can now be protected using access control with some [restrictions](ABENCDS_F1_DCL_HIERARCHIES.html).

Transactional queries apply the [access control](ABENCDS_F1_DCL_PROJECTION_VIEWS.html) of the underlying CDS entity with restrictions.

The new addition [`VOID`](ABENCDS_DCL_ROLE_CONDITIONS.html) can be specified in an access condition. It defines that the access condition in question is ignored.

The new addition [`CONSTRAINT ID`](ABENCDS_F1_DEFINE_PFCG_MAPPING.html) can be specified in a PFCG mapping as part of a CDS access policy. It defines further restrictions for authorization fields of authorization objects in a CDS access policy.

abenabap.html abennews.html abennews-77.html abennews-777.html