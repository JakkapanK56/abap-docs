---
title: "ABENCDS_F1_COND_INHERIT_REPLACING"
description: |
  ABENCDS_F1_COND_INHERIT_REPLACING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_COND_INHERIT_REPLACING.htm"
abapFile: "ABENCDS_F1_COND_INHERIT_REPLACING.html"
keywords: ["if", "ABENCDS", "COND", "INHERIT", "REPLACING"]
---

``... REPLACING \{\ [`replacement_step`](ABENCDS_F1_COND_INHERIT_RPL_STEP.html) [, [`replacement_step`](ABENCDS_F1_COND_INHERIT_RPL_STEP.html), ...] \}``

This addition modifies inherited access conditions from source entity `cds_entity` before they are applied to the protected entity of the own access rule.

It contains a sequence of replacement steps [`replacement_step`](ABENCDS_F1_COND_INHERIT_RPL_STEP.html) which are executed in the order as appearing in the statement from left to right.

The first step operates on the inherited conditions and provides its result to the next step as input.

The result of the last step acts as output of the inheritance condition.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html abencds\_f1\_define\_role.html abencds\_dcl\_role\_conditions.html abencds\_f1\_cond\_inherit.html