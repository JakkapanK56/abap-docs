---
title: "ABENNEWS-756-CDS_ACCESS_CONTROL"
description: |
  ABENNEWS-756-CDS_ACCESS_CONTROL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-756-CDS_ACCESS_CONTROL.htm"
abapFile: "ABENNEWS-756-CDS_ACCESS_CONTROL.html"
keywords: ["select", "update", "if", "data", "ABENNEWS", "756", "CDS", "ACCESS", "CONTROL"]
---

[1\. Graceful Behavior in Access Condition Inheritance for Missing Dictionary Elements](#ABAP_MODIFICATION_1@4@)

[2\. Unified Syntax for Authorization Objects, Authorization Fields and SACF Scenario Names](#ABAP_MODIFICATION_2@4@)

[3\. Additional Filtering of User-Defined Aspect Usage](#ABAP_MODIFICATION_3@4@)

[4\. Condition Replacement for Role-Based Inheritance](#ABAP_MODIFICATION_4@4@)

[5\. Generic Element Replacement for Condition Inheritance](#ABAP_MODIFICATION_5@4@)

[6\. Enabling/Disabling of Access Conditions Based on the State of SACF](#ABAP_MODIFICATION_6@4@)

[7\. Access Conditions for CDS Hierarchies Based on Elements of the Hierarchy Directory](#ABAP_MODIFICATION_7@4@)

[8\. New DCL Function](#ABAP_MODIFICATION_8@4@)

[9\. Consideration of Special Runtime Modes](#ABAP_MODIFICATION_9@4@)

From this release on, authors of access controls can mark a subset of the CDS elements used in their access conditions as optional, so that CDS entities which inherit their access conditions are not affected by a Day-1-impact any more.

GRANT SELECT ON cds\_entity WITH OPTIONAL ELEMENTS ( \\n     element1 DEFAULT (TRUE|FALSE), ...) WHERE ...

[More Information](ABENCDS_DCL_ROLE_COND_RULE.html)

At all locations of access controls, references to authorization objects, authorization fields, and SACF scenario names can be written in identifier syntax when they comply with it and in string syntax with single apostrophes as an alternative.

Before:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO 'THESCENARIO' )

Now allowed:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO TheScenario )

[More Information](ABENCDS_F1_DEFINE_ROLE.html)

When using user-defined aspects, these can now denominate an arbitrary set of their elements (path expressions are supported) as filter element. These filter elements can by referenced when using the user-defined aspect in an access condition.

DEFINE ASPECT ... AS SELECT FROM ... \\n  WITH USER ELEMENT ... \\n  WITH FILTER ELEMENTS ( element1, element2 AS alias2 ) \\n  \\{ \\n      ... \\n  \\} \\nWHERE ( ... ) = ASPECT ... FILTER BY ( element1 = 'X' OR \\n                                       alias2 IS NOT NULL )

[More Information](ABENCDS_F1_COND_ASPECT.html)

The `REPLACING` section formerly only available to entity-based inheritance

INHERITING CONDITIONS FROM ENTITY cds\_entity

is now also available for role-based inheritance

INHERIT role FOR GRANT SELECT ON cds\_entity

[More Information](ABENCDS_F1_COND_INHERIT.html)

The `REPLACING` section of condition inheritance now supports a generic replacement step to replace an arbitrary field or association of the inheritance source with an arbitrary field or association of the inheritance target.

WHERE INHERITING CONDITIONS FROM ENTITY Source REPLACING \\{ \\n  ELEMENT Element1OfSource WITH Element1OfTarget, \\n  ELEMENT Assoc1OfSource WITH Assoc1\[r = 4\].Assoc2OfTarget, \\n  ELEMENT Assoc2(p : $parameters.p1)\[ q = 1\].Field WITH MyShortField \\}

[More Information](ABENCDS_F1_COND_INHERIT_REPLACING.html)

Respecting settings in the switchable authorization framework (SACF) was already possible for dedicated PFCG conditions:

ASPECT PFCG\_AUTH ( S\_OBJECT IN SCENARIO ... )

Now, those settings can be used to enable or disable entire condition sets:

GRANT SELECT ON cds\_entity \\n  WHERE \\n    SACF\_CHECK\_IN\_USE (NAME => NEW\_AUTH\_SWITCH ) IS INITIAL \\n      AND \\n    ( element ) = ASPECT PFCG\_AUTH( OLD\_AUTH, F ) \\n  OR \\n    SACF\_CHECK\_IN\_USE( NAME => NEW\_AUTH\_SWITCH ) IS NOT INITIAL \\n      AND \\n    ( element ) = ASPECT PFCG\_AUTH( NEW\_AUTH, F );

[More Information](ABENCDS_F1_DCL_FUNCTION.html)

For CDS hierarchies, access control was restricted to the use of conditions not resulting in database filtering. Now elements located in the declared hierarchy directory

[DIRECTORY ... FILTER BY](ABENCDS_F1_DEFINE_HIERARCHY.html)

can be used to formulate such conditions.

The following new [DCL function](ABENCDS_F1_DCL_FUNCTION.html) is available: [`OPTIONAL_ELEMENT_EXISTS`](ABENCDS_F1_DCL_FUNCTION.html).

When operating the system with the emergency user `SAP*`, CDS access control is now deactivated.

During processing of an update task, PFCG conditions are now considered as fully authorized.

[More Information](ABENAUTHORITY_DURING_UPDATE.html)

abenabap.html abennews.html abennews-75.html abennews-756.html