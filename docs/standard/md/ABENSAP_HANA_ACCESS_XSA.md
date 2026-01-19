---
title: "ABENSAP_HANA_ACCESS_XSA"
description: |
  ABENSAP_HANA_ACCESS_XSA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSAP_HANA_ACCESS_XSA.htm"
abapFile: "ABENSAP_HANA_ACCESS_XSA.html"
keywords: ["if", "case", "method", "data", "ABENSAP", "HANA", "ACCESS", "XSA"]
---

[SAP HANA XSA](ABENXSA_GLOSRY.html) (SAP HANA extended application services, advanced model) is the successor version of [SAP HANA XSC](ABENXSC_GLOSRY.html).

[SAP Web IDE for SAP HANA](ABENSAP_WEB_IDE_FOR_SAP_HAN_GLOSRY.html) and [SAP HANA Cockpit](ABENSAP_HANA_COCKPIT_GLOSRY.html) are used to develop and manage the native HANA objects in XSA. Deployment usually takes place (using [HDI](ABENHDI_GLOSRY.html) (SAP HANA Deployment Infrastructure) as [HDI objects](ABENHDI_OBJECT_GLOSRY.html) in [HDI containers](ABENHDI_CONTAINER_GLOSRY.html) that usually represent [database schemas](ABENDATABASE_SCHEMA_GLOSRY.html) in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).

Special [ABAP-managed HDI container (AMHCs)](ABENAMHC_GLOSRY.html) can be defined for [HDI objects](ABENHDI_OBJECT_GLOSRY.html) accessed from ABAP. [SAP HANA Transport for ABAP (HTA)](ABENHTA_GLOSRY.html) links these containers to the [Change and Transport System](ABENCTS_GLOSRY.html). The definition of an AMHC includes a [logical HDI container](ABENLOGICAL_HDI_CONTAINER_GLOSRY.html) that can be specified directly as a [logical schema](ABENLOGICAL_DATABASE_SCHEMA_GLOSRY.html) in the [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.schema`](ABENAMDP_LOGICAL_DB_SCHEMAS.html). This makes simple access to [HDI objects](ABENHDI_OBJECT_GLOSRY.html) possible from [AMDP](ABENAMDP_GLOSRY.html).

-   [AMDP](ABENAMDP.html) methods should be the preferred way of accessing the HDI objects in SAP HANA XSA.
-   If the [AMDP](ABENAMDP_GLOSRY.html) methods are not sufficient, [ADBC](ABENADBC_GLOSRY.html) can also be used to access [HDI objects](ABENHDI_OBJECT_GLOSRY.html). In this case, however the physical name of the HDI container is not provided automatically.
-   The access methods designed specifically for [XSC](ABENXSC_GLOSRY.html) objects in the [SAP HANA Repository](ABENSAP_HANA_REPOSITORY_GLOSRY.html) are not suitable for XSA objects.

abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_hana.html abensap\_hana\_access.html