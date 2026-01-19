---
title: "ABENCDS_DDIC_ENTITY"
description: |
  ABENCDS_DDIC_ENTITY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_DDIC_ENTITY.htm"
abapFile: "ABENCDS_DDIC_ENTITY.html"
keywords: ["select", "do", "if", "class", "data", "ABENCDS", "DDIC", "ENTITY"]
---

It is still possible, but not recommended, to create DDIC-based entities. SAP recommends creating CDS view entities instead of CDS DDIC-based views.

A [CDS DDIC-based entity](ABENCDS_DDIC_BASED_ENTITY_GLOSRY.html) is a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) for which a [CDS-managed DDIC view (obsolete)](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) is created in the ABAP Dictionary alongside the CDS entity upon activation. Therefore, [DDIC-based entities](ABENCDS_DDIC_BASED_ENTITY_GLOSRY.html) are not exclusively CDS entities, but also DDIC artefacts (see image below). There is only one kind of DDIC-based entity available, namely [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).

A [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is defined using the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html). This kind of [CDS view](ABENCDS_VIEW_GLOSRY.html) was first released with release 7.40, SP05 and it was for many years the only available kind of CDS view.

Since release 7.80, [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) are available. They are defined using the statement `DEFINE VIEW ENTITY`. They have evolved from [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), serve the same purpose and have the same structure as their predecessor. But they offer several advantages over the *classic*\\ [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html):

A complete and exhaustive list of new features, improvements, and differences is provided in the following blog series: [CDS view entities are feature complete. Overview of new features, improvements, and differences](https://blogs.sap.com/2022/05/06/cds-view-entities-are-feature-complete.-overview-of-new-features-improvements-and-differences/).

For these reasons, it is recommended that [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) are created instead of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) when a new CDS view is required. [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) are still supported to ensure downward compatibility.

-   No additional DDIC view is created upon activation
-   Improved performance during view activation
-   Optimization and simplification of syntax
-   Stricter syntax checks indicate problematic situations more explicitly (for example, annotation checks)

-   The CDS view `DEMO_CDS_SCARR_SPFLI` shown below is a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html).
-   The second view shown below, `DEMO_CDS_SCARR_SPFLI_2`, is a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) and it uses the new syntax `DEFINE VIEW ENTITY`.
-   The syntax differs slightly: the second view does not have the annotation `@AbapCatalog.sqlViewName`, because it does not have any DDIC view (the SQL view of the database is derived directly from the definition). Moreover, name lists are not supported and the element names are specified with the keyword `AS` instead.
-   The class `CL_DEMO_CDS_DDIC_VS_VIEW_ENTTY` uses `SELECT` to access both views. The result is exactly the same.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine view demo\_cds\_scarr\_spfli(\\n id,\\n carrier,\\n flight,\\n departure,\\n destination\\n )\\n as select from spfli\\n join scarr on scarr.carrid = spfli.carrid\\n\\{\\n key spfli.carrid,\\n key scarr.carrname,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine view entity DEMO\_CDS\_SCARR\_SPFLI\_2\\n as select from spfli\\n join scarr\\n on scarr.carrid = spfli.carrid\\n \\{\\n key spfli.carrid as id,\\n key scarr.carrname as carrier,\\n key spfli.connid as flight,\\n spfli.cityfrom as departure,\\n spfli.cityto as destination\\n \\}\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html