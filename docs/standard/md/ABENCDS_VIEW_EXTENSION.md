---
title: "ABENCDS_VIEW_EXTENSION"
description: |
  ABENCDS_VIEW_EXTENSION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_VIEW_EXTENSION.htm"
abapFile: "ABENCDS_VIEW_EXTENSION.html"
keywords: ["delete", "do", "if", "types", "ABENCDS", "VIEW", "EXTENSION"]
---

A [CDS entity extension](ABENCDS_ENTITY_EXTEND_GLOSRY.html) is a transportable extension of a CDS entity. A CDS entity extension can make additions to the original entity, but it cannot modify, overwrite, or delete elements from the original entity. There are currently four different statements that can be used to extend a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) in [CDS DDL](ABENCDS_DDL_GLOSRY.html):

When working in a [restricted ABAP language version](ABENRESTRICTED_VERSION_GLOSRY.html), extensions are possible only to [released APIs](ABENRELEASED_API_GLOSRY.html) that are released under the [C0 stability contract for extensions](ABENC0_CONTRACT_GLOSRY.html).

-   [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html)

-   This variant is used to define a [CDS view entity extension](ABENCDS_VIEW_ENTITY_EXTEND_GLOSRY.html) for a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) or a [CDS projection view](ABENCDS_PROJECTION_VIEW_GLOSRY.html).
-   Available since release 7.78.

-   [`EXTEND CUSTOM ENTITY`](ABENCDS_EXTEND_CUSTOM_ENTITY.html)

-   This variant is used to define a [CDS custom entity extension](ABENCDS_CUS_ENTITY_EXTEND_GLOSRY.html) for a [CDS custom entity](ABENCDS_CUSTOM_ENTITY_GLOSRY.html).
-   Available since release 7.89.

-   [`EXTEND ABSTRACT ENTITY`](ABENCDS_EXTEND_ABSTRACT_ENTITY.html)

-   This variant is used to define a [CDS abstract entity extension](ABENCDS_ABS_ENTITY_EXTEND_GLOSRY.html) for a [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html).
-   Available since release 7.84.

-   [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html)

-   This variant is used to define a [CDS view extension](ABENCDS_VIEW_EXTEND_GLOSRY.html) that is also linked with a [DDIC append view](ABENDDIC_APPEND_VIEW_GLOSRY.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html).
-   Available since release 7.40, SP08.
-   Recommended for extending [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html), defined using the statement [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html).

-   Since release 7.78, there are two different statements available that can be used to extend a [CDS view](ABENCDS_VIEW_GLOSRY.html), namely `EXTEND VIEW` and `EXTEND VIEW ENTITY`. The differences and when to use what is explained in topic [ABAP CDS - Extending CDS views](ABENCDS_VIEW_EXTEND.html).
-   Every CDS entity extension has its own [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). The DDL source code in a CDS entity extension is edited in a different editor from the DDL source code of the base entity. The ADT documentation describes how these types of source code are created.
-   DDL source code can also be displayed in [Repository Browser](ABENREPOSITORY_BROWSER_GLOSRY.html) in [ABAP Workbench](ABENABAP_WORKBENCH_GLOSRY.html).
-   CDS entity extensions are connected to [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) whenever they are defined in a [package](ABENPACKAGE_GLOSRY.html) that is assigned a [switch](ABENSWITCH_GLOSRY.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html