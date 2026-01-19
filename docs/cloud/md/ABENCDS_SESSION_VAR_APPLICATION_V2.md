---
title: "ABENCDS_SESSION_VAR_APPLICATION_V2"
description: |
  ABENCDS_SESSION_VAR_APPLICATION_V2 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_SESSION_VAR_APPLICATION_V2.htm"
abapFile: "ABENCDS_SESSION_VAR_APPLICATION_V2.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENCDS", "SESSION", "VAR", "APPLICATION"]
---

`... $session.vname ...`

Specifies an application [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `vname` in an operand position in a [`SELECT` statement](ABENCDS_SELECT_STATEMENT_V2.html) of a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html). The variable must be prefixed by `$session.`.

Application session variables are required for specific applications and they can be set by dedicated system programs using a special system class. The following application session variables exist:

A CDS view entity that accesses an application session variable must be usable as replacement object. That implies that the respective CDS view entity must not have any [input parameters](ABENCDS_PARAMETER_V2.html).

-   From a technical perspective, session variables indicate global variables of the current database. Application session variables are set to their value by dedicated system programs using a special system class. Like [ABAP system fields](ABENSYSTEM_FIELDS.html), they are modifiable from an ABAP program. However, they should not be changed in application programs. They should only be used for reads. Otherwise, important information for further program execution may be lost.
-   The annotation [`environment.systemField`](ABENCDS_F1_PARAMETER_ANNOTATIONS.html) is relevant for built-in session variables, but not for application session variables.
-   In existing CDS view entities without corresponding input parameters, session variables can be passed to the input parameters of CDS view entities or CDS table functions used there.
-   Application session variables are supported only in CDS view entities. However, it is possible to build a CDS DDIC-based view (obsolete) on top of a CDS view entity with application session variables. The information is passed on to the CDS DDIC-based view (obsolete) in this case.

-   CDS view entities with application session variables cannot be used in [AMDP](ABENAMDP_GLOSRY.html), since AMDP does not support application session variables.
-   The [ADT](ABENADT_GLOSRY.html) function Data Preview does not work for CDS view entities with application session variables.

**vname** **Value when accessed**\\ `bs_instance_id` Instance ID of the current business service instance. The returned value has the data type `SSTRING`. `bs_zone_id` Zone ID of the current business service instance. The returned value has the data type `SSTRING`. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_operands\_v2.html abencds\_session\_variable\_v2.html