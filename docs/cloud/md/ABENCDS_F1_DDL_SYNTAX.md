---
title: "ABENCDS_F1_DDL_SYNTAX"
description: |
  ABENCDS_F1_DDL_SYNTAX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_DDL_SYNTAX.htm"
abapFile: "ABENCDS_F1_DDL_SYNTAX.html"
keywords: ["do", "data", "ABENCDS", "DDL", "SYNTAX"]
---

The [CDS data definitions](ABENCDS_DATA_DEFINITION_GLOSRY.html) in ABAP CDS are created using the data definition language [CDS DDL](ABENCDS_DDL_GLOSRY.html) in [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html). The CDS DDL follows the [general CDS syntax rules for ABAP CDS](ABENCDS_GENERAL_SYNTAX_RULES.html) and comprises the following statements for the definition and extension of [CDS entities](ABENCDS_ENTITY_GLOSRY.html) and [CDS DDIC-based entities](ABENCDS_DDIC_BASED_ENTITY_GLOSRY.html):

The [DDL source code](ABENDDL_SOURCE_CODE_GLOSRY.html) of data definitions has its own editor in [ADT](ABENADT_GLOSRY.html), which is documented there. This editor can also be used to display the actual SQL statement generated from the CDS DDL source on the database.

-   Statements for [CDS entities](ABENCDS_VIEW_ENTITY.html):

-   [`DEFINE TABLE ENTITY`](ABENCDS_DEFINE_TABLE_ENTITY.html)
-   [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html)
-   [`DEFINE VIEW ENTITY AS PROJECTION ON`](ABENCDS_DEFINE_VIEW_AS_PROJECTION.html)
-   [`DEFINE TABLE FUNCTION`](ABENCDS_F1_DEFINE_TABLE_FUNCTION.html)
-   [`DEFINE EXTERNAL ENTITY`](ABENCDS_DEFINE_EXTERNAL_ENTITY.html)
-   [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html)
-   [`DEFINE CUSTOM ENTITY`](ABENCDS_F1_DEFINE_CUSTOM_ENTITY.html)
-   [`DEFINE ABSTRACT ENTITY`](ABENCDS_F1_DEFINE_ABSTRACT_ENTITY.html)

-   Statements for CDS aspects:

-   [`DEFINE ASPECT`](ABENCDS_DEFINE_ASPECT.html)

-   Statements for [CDS DDIC-based entities](ABENCDS_DDIC_ENTITY.html):

-   [`DEFINE VIEW`](ABENCDS_DEFINE_VIEW_V1.html)

-   Language elements that can be used in various CDS entities:

-   [Entity annotations](ABENCDS_F1_ENTITY_ANNOTATIONS.html)
-   [Input parameters](ABENCDS_F1_PARAM.html)
-   [Typing](ABENCDS_TYPING.html)
-   [Element annotations](ABENCDS_F1_ELEMENT_ANNOTATION.html)

-   Statements for [CDS type definitions](ABENCDS_TDL.html):

-   [`DEFINE TYPE [ENUM]`](ABENCDS_DEFINE_TYPE.html)

-   Statements for [CDS function definitions](ABENCDS_FDL.html):

-   [`DEFINE SCALAR FUNCTION`](ABENCDS_DEFINE_SCALAR_FUNCTION.html)

-   Statements for [CDS entity extensions](ABENCDS_VIEW_EXTENSION.html):

-   [`EXTEND VIEW ENTITY`](ABENCDS_EXTEND_VIEW_ENTITY.html)
-   [`EXTEND ABSTRACT ENTITY`](ABENCDS_EXTEND_ABSTRACT_ENTITY.html)
-   [`EXTEND CUSTOM ENTITY`](ABENCDS_EXTEND_CUSTOM_ENTITY.html)
-   [`EXTEND VIEW`](ABENCDS_EXTEND_VIEW.html)

abenabap.html abencds.html abencds\_entities.html