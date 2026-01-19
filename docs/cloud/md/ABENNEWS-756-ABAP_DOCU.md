---
title: "ABENNEWS-756-ABAP_DOCU"
description: |
  ABENNEWS-756-ABAP_DOCU - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-756-ABAP_DOCU.htm"
abapFile: "ABENNEWS-756-ABAP_DOCU.html"
keywords: ["do", "if", "ABENNEWS", "756", "ABAP", "DOCU"]
---

From release 7.56 on, important settings of the ABAP Keyword Documentation can be configured explicitly. Before, the documentation was configured implicitly from system settings.

The configuration of the ABAP Keyword Documentation is saved in customizing table `ABDOCCONFIG`, that is maintained with transaction code `ABAP_DOCU_CONFIG` (based on executable program `ABAP_DOCU_CONFIG`) or with the configuration entity `ABAP_DOCU_CONFIG_ENTITY`. All repository objects related to the configuration are documented.

The following properties can be set:

Program `ABAP_DOCU_CONFIG` allows a choice to be made between different sets of parameters:

The passed parameters are used as default values for a dialog window and can be overridden there.

If customizing table `ABDOCCONFIG` is initial in a customer system, the first call of the ABAP Keyword documentation supplies it with values recommended for an SAP S/4HANA System. In SAP's own systems, values for a SAP development system are supplied. If the table is partly filled, default values are used for the missing rows. These values are initial for all properties except `VERSION`. If the language version is not passed by the caller and cannot be found in `ABDOCCONFIG`, the value *X* is used and a warning is shown in the documentation display.

-   **CP**
-   If set to *X*, the ABAP Keyword Documentation uses terms appropriate for the [SAP BTP ABAP environment](ABENSAP_BTP_ABAP_ENV_GLOSRY.html) (aka [Steampunk](ABENSTEAMPUNK_GLOSRY.html)) instead of [Application Server ABAP](ABENAS_ABAP_GLOSRY.html) in some footers and copyright texts.
-   Recommendation:

-   Set to *X* in systems of the SAP BTP ABAP environment.
-   Set to initial in all other systems.

-   **ICF**
-   Enables or disables the Web Version of the ABAP Keyword Documentation based on ICF nodes `/sap/public/bc/abap/docu` and `/sap/bc/abap/docu`.
-   The following settings can be applied:

-   If set to *X*, the Web Version is enabled. The execution of example programs from the Web Version is disabled.
-   If set to *E*, the Web Version is enabled. The execution of example programs from the Web Version is also enabled.

-   Recommendation:

-   Set to *E* in SAP development systems.
-   Set to *E* in customer development systems.
-   Set to *X* in SAP S/4HANA.
-   Set to initial in SAP BTP ABAP environment and SAP S/4HANA Cloud.

-   **BATCH**
-   If set to *X*, the infrastructure of the ABAP Keyword Documentation is allowed to start batch jobs that prepare buffers that are needed for search in and display of the documentation.
-   Recommendation:

-   Set to *X* in SAP S/4HANA.
-   Set to initial in SAP BTP ABAP environment.

-   **MAILBOX**
-   If set to *X*, the ABAP Keyword Documentation display offers a function to send a feedback mail to *abap.docu@exchange.sap.corp*. This mailbox is only available to SAP employees. Therefore, the setting makes sense for SAP's own development systems only.
-   Recommendation:

-   Set to *X* in SAP's own development systems.
-   Set to initial in all other systems.

-   **VERSION**
-   Determines the [ABAP language version](ABENABAP_VERSION_GLOSRY.html) for which the ABAP Keyword Documentation is displayed. Allowed values are defined in domain `ABAPVRS`. This setting can be overridden when calling the documentation using the respective APIs:

-   `CL_ABAP_DOCU` for the SAP GUI version
-   `CL_ABAP_DOCU_EXTERNAL` for the ADT or Web version.

-   Calls to the documentation from ABAP Workbench and ADT set the language version depending on the object currently being edited. Calls to the documentation via the `ABAPDOCU` and `ABAPHELP` transactions use the version from `ABDOCCONFIG` by default. An initial value for `VERSION` in `ABDOCCONFIG` displays the documentation for [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html) (*X*).
-   Recommendation:

-   Set to *X* in SAP S/4HANA
-   Set to `5` in SAP BTP ABAP environment and SAP S/4HANA Cloud

-   Parameter set typical for SAP development systems
-   Parameter set typical for customer development systems
-   Parameter set typical for SAP S/4HANA systems
-   Parameter set typical for SAP S/4HANA Cloud ABAP environment
-   Parameter set typical for SAP BTP ABAP environment
-   Current parameter set

abenabap.html abennews.html abennews-75.html abennews-756.html