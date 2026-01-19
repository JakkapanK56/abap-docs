---
title: "ABENCDS_1937921420_ANNO"
description: |
  ABENCDS_1937921420_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_1937921420_ANNO.htm"
abapFile: "ABENCDS_1937921420_ANNO.html"
keywords: ["select", "do", "if", "case", "class", "data", "ABENCDS", "1937921420", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

An input parameter can be annotated exactly once with the annotation `Environment.systemField`. If the CDS entity is used as a [data source](ABAPSELECT_DATA_SOURCE.html) of a [`SELECT`](ABAPSELECT.html) statement in [ABAP SQL](ABENABAP_SQL_GLOSRY.html), this assignment has the following consequences:

Any other values for `value` are ignored and raise an exception. For CDS view entities, no value or a wrong value lead to a syntax error.

The annotation `Environment.sql.passValue` is available for parameters in [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html), [CDS projection views](ABENCDS_PROJECTION_VIEW_GLOSRY.html), and [CDS hierarchies](ABENCDS_HIERARCHY_GLOSRY.html). It is not available for parameters in any other CDS entity.

The following CDS view entity connects all input parameters with ABAP system fields and the `SELECT` list consists only of the input parameters. The ABAP class `CL_DEMO_CDS_SYSTEM_FIELDS` accesses the CDS view entity, once with explicit and once with implicit parameter passing, and produces both results.

Controls value passing to parameters.

Assigns an ABAP system field to an input parameter of a CDS object for implicit parameter passing in ABAP SQL.

The possible enumeration values denote the system field. Tha annotation cannot be specified without a value. Otherwise, a syntax error (CDS view entity) or an exception during usage (all other CDS entities) occurs.

sy-mandt

sy-langu

sy-uname

sy-datum

sy-uzeit

sy-datlo

sy-zonlo

-   No explicit actual parameter can be assigned in ABAP SQL to an input parameter to which the system field `sy-mandt` was assigned using `#CLIENT`. ABAP SQL always implicitly passes the ID of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) in accordance with the nominal value of `sy-mandt` or from the clients specified using [`USING CLIENT`](ABAPSELECT_CLIENT.html). The obsolete addition [`CLIENT SPECIFIED`](ABAPSELECT_CLIENT_OBSOLETE.html) cannot be specified when a CDS entity of this type is accessed.
-   No explicit actual parameter needs to be assigned in ABAP SQL to an input parameter to which a system field other than `sy-mandt` is assigned using `#SYSTEM_...`. If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.
-   For ABAP CDS, this annotation has no effect. Each formal parameter requires an actual parameter and also [session variables](ABENCDS_SESSION_VARIABLE_V2.html) must be specified explicitly.

-   The annotation `@Environment.systemField` is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or [session variables](ABENCDS_SESSION_VARIABLE_V2.html).
-   The value `#CLIENT` of the annotation `@Environment.systemField` is particularly significant for [client-dependent CDS table functions](ABENCDS_FUNC_CLIENT_HANDLING.html). If an input parameter is annotated like this, it is given the current client ID implicitly by the ABAP SQL statement [`SELECT`](ABAPSELECT.html) and can be used to restrict the result set in the platform-dependent implementation of the function. `@Environment.systemField: #CLIENT` cannot be specified in the case of [client-independent CDS table functions](ABENCDS_FUNC_CLIENT_HANDLING.html).

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity DEMO\_CDS\_SYSTEM\_FIELDS\_VE\\n with parameters\\n @Environment.systemField : #CLIENT\\n p\_mandt : syst\_mandt,\\n @Environment.systemField : #SYSTEM\_DATE\\n p\_datum : syst\_datum,\\n @Environment.systemField : #SYSTEM\_TIME\\n p\_uzeit : syst\_uzeit,\\n @Environment.systemField : #SYSTEM\_LANGUAGE\\n p\_langu : syst\_langu,\\n @Environment.systemField : #USER\\n p\_uname : syst\_uname\\n as select from\\n demo\_expressions\\n \\{\\n $parameters.p\_mandt as client\_field,\\n $parameters.p\_datum as datum,\\n $parameters.p\_uzeit as uzeit,\\n $parameters.p\_langu as langu,\\n $parameters.p\_uname as uname\\n \\}\\n where\\n id = '1';\\n **Kind** [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ **Syntax** `Environment.systemField`\\ **Scope** `#PARAMETER`\\ **Type** `String(20)`\\ **Enums** `#CLIENT, #SYSTEM_DATE, #SYSTEM_LANGUAGE, #SYSTEM_TIME, #USER, #USER_DATE, #USER_TIMEZONE`\\ **Default** `-`\\ **Text** `-`\\ **MDE** `-`\\ **API** `RELEASED_FOR_KEY_USER_APPS, RELEASED_FOR_SAP_CLOUD_PLATFORM` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_abap\_annos.html abencds\_environment\_a.html