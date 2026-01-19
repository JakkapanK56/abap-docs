---
title: "ABENCONSUMER_RULES"
description: |
  ABENCONSUMER_RULES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCONSUMER_RULES.htm"
abapFile: "ABENCONSUMER_RULES.html"
keywords: ["do", "types", "ABENCONSUMER", "RULES"]
---

The provider rules for objects with a release contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

The following sections list allowed changes to released APIs that must be considered when the APIs are accessed.

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

-   [C0 Contract Rules for Consumers of DDIC Objects](ABENC0_CONSUMER_RULES_DDIC.html)
-   [C0 Contract Rules for Consumers of CDS Entities](ABENC0_CONSUMER_RULES_CDS.html)
-   [C0 Contract Rules for Consumers of RAP Behavior Definitions](ABENC0_CONSUMER_RULES_BDEF.html)
-   [C1 Contract Rules for Consuming Elementary Types](ABENC1_CONSUMER_RULES_ELEM.html)
-   [C1 Contract Rules for Consuming Structures](ABENC1_CONSUMER_RULES_STRUCT.html)
-   [Example: Consumption of APIs with C1 Contract](ABENC1_DEMO_1.html)

abenabap.html abenabap\_versions\_and\_apis.html abenabap\_release\_contracts.html