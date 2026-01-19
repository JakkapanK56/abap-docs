---
title: "ABENCDS_ASPECTS"
description: |
  ABENCDS_ASPECTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_ASPECTS.htm"
abapFile: "ABENCDS_ASPECTS.html"
keywords: ["select", "if", "method", "class", "data", "ABENCDS", "ASPECTS"]
---

A CDS DDL aspect is a [CDS object](ABENCDS_OBJECT_GLOSRY.html) defined using the statement [`DEFINE ASPECT`](ABENCDS_DEFINE_ASPECT.html) in the [CDS DDL](ABENCDS_DDL_GLOSRY.html) of ABAP Core Data Services (CDS). A CDS aspect can be used to reuse dedicated parts of CDS entities, such as annotations, fields, or calculations. CDS aspects only generate a runtime artifact, which means that no [SQL view](ABENSQL_VIEW_GLOSRY.html) is generated on the database and cannot be accessed using an ABAP `SELECT` statement.

Once a CDS aspect has been defined and activated, it can be bound to one or more [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html) or [CDS projection views](ABENCDS_PROJ_VIEWS.html) using the syntax [`BIND ASPECT`](ABENCDS_BIND_ASPECT.html) behind the [`DEFINE VIEW ENTITY`](ABENCDS_DEFINE_VIEW_ENTITY.html) statement. Using the syntax [`INCLUDE aspect`](ABENCDS_INCLUDE_ASPECT.html), the aspect can then be included in the [select statement](ABENCDS_SELECT_STATEMENT_V2.html) of a CDS view entity. If all fields of a CDS aspect are included with the syntax [`INCLUDE aspect.*`](ABENCDS_INCLUDE_ASPECT.html), fields can be excluded using the syntax [`EXCLUDE aspect.field`](ABENCDS_INCLUDE_ASPECT.html).

Frameworks:

-   CDS Aspects are supported by analytical runtimes such as the [ABAP Analytical Engine](ABENABAP_AE_GLOSRY.html).
-   The [annotations](ABENCDS_ANNOTATION_GLOSRY.html) of a CDS aspect can be evaluated using the methods of the class `CL_DD_DDL_ANNOTATION_SERVICE`.
-   CDS aspects can currently **not** be used in OData scenarios and in Fiori applications built with the [ABAP RESTful Application Programming Model](ABENARAP_GLOSRY.html).

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html