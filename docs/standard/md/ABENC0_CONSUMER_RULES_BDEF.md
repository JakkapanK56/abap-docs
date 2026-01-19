---
title: "ABENC0_CONSUMER_RULES_BDEF"
description: |
  ABENC0_CONSUMER_RULES_BDEF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENC0_CONSUMER_RULES_BDEF.htm"
abapFile: "ABENC0_CONSUMER_RULES_BDEF.html"
keywords: ["do", "if", "ABENC0", "CONSUMER", "RULES", "BDEF"]
---

The provider rules for objects with a C0 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to [released APIs](ABENRELEASED_API_GLOSRY.html). Therefore, the users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

When extending BDEFs, consumers must obey the following naming rules to avoid naming conflicts.

The following applies to extensions in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html):

The following applies to extensions in [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html):

The checks apply to the following elements:

-   Problems during an upgrade.
-   Syntax errors after an upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

-   If the extension has a [namespace prefix](ABENNAME_SPACE_PREFIX_GLOSRY.html), such as `/PREFIX/`, its elements must also have this prefix.

-   Element names must either be without prefix, or the element names are checked against the name of the extension according to rules 1 - 3 listed above.

-   [Alias names](ABENALIAS_GLOSRY.html) of [RAP BO entities](ABENRAP_BO_ENTITY_GLOSRY.html).
-   External names of RAP BO entities, specified using the addition [`external`](ABENBDL_DEFINE_BEH.html).
-   Alias names of associations, specified using the addition [`abbreviation`](ABENBDL_ASSOCIATION.html)
-   Alias names of [RAP foreign entities](ABENRAP_FOREIGN_ENTITY_GLOSRY.html).
-   Names of [RAP actions](ABENRAP_ACTION_GLOSRY.html) and [RAP functions](ABENRAP_FUNCTION_GLOSRY.html).
-   External names of RAP actions and RAP functions, specified using the addition `external`.
-   External names of action and function results, specified using the addition [`external`](ABENBDL_ACTION_OUTPUT_PARA.html).
-   Names of [RAP determinations](ABENRAP_DETERMINATION_GLOSRY.html) and [RAP validations](ABENRAP_VALIDATION_GLOSRY.html).
-   Names of [RAP BO determine actions](ABENRAP_BO_DET_ACTION_GLOSRY.html).
-   Names of [RAP business events](ABENRAP_ENTITY_EVENT_GLOSRY.html).

1.  Otherwise, if the name of the extension does not start with *Z* or with *Y*, the element name must not begin with a namespace prefix, nor with *ZZ* or *YY*.
2.  If the behavior for an extension node is defined ([extension entity behavior definition](ABENBDL_DEFINE_BEH_EXTEND.html)), the element names inside this entity must either be without prefix, or they are checked against the name of the extension according to the rules above.

abenabap.html abenabap\_versions\_and\_apis.html abenabap\_release\_contracts.html abenconsumer\_rules.html