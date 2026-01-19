---
title: "ABENCDS_F1_DCL_SYNTAX_V5"
description: |
  ABENCDS_F1_DCL_SYNTAX_V5 - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DCL_SYNTAX_V5.htm"
abapFile: "ABENCDS_F1_DCL_SYNTAX_V5.html"
keywords: ["select", "data", "types", "ABENCDS", "DCL", "SYNTAX"]
---

In [CDS DCL](ABENCDS_DCL_GLOSRY.html), the following restrictions apply to CDS roles and CDS access policies defined by customers and partners in [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html) and [SAP S/4HANA Cloud ABAP environment](ABENS4_HANA_CLOUD_ABAP_ENV_GLOSRY.html):

See [Released APIs](ABENRELEASED_APIS.html) for a list of repository objects that are released as APIs in the current system.

-   An access control can use other development objects when these either belong to the same software component or are a [released API](ABENRELEASED_API_GLOSRY.html) with the [C1 contract](ABENC1_CONTRACT_GLOSRY.html). This affects the following usage types:

-   CDS entities as data source for data source in PFCG mappings and user-defined aspects.
-   CDS entities or database tables which act as association target in any used path expression.
-   CDS entities used as inheritance source for [access conditions](ABENACCESS_CONDITION_GLOSRY.html) or as selector for role-based inheritance.
-   Authorization objects

-   The following usage types cannot yet be released and are therefore limited to customer objects in the same software component:

-   Access roles used as inheritance source for role-based inheritance.
-   User-defined aspects and PFCG mappings.
-   SACF scenarios.

-   The protected entity itself can only be in the same software component as the access control.
-   In entity-based condition inheritance when inheriting from an entity not in the same software component, the following restrictions apply:

-   The usage of replacement step `ROOT WITH` is mandatory.
-   Replacement steps `PARAMETER WITH` and `PFCG FILTER` are allowed.
-   All other replacement steps cannot be used.

-   In role-based condition inheritance, the flavor without selector `(GRANT SELECT ON ... INHERIT ...)` is not allowed.

abenabap.html abencds.html abencds\_access\_control.html abencds\_f1\_dcl\_syntax.html