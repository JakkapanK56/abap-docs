---
title: "ABENCLIENT_DEPENDENT_GLOSRY"
description: |
  ABENCLIENT_DEPENDENT_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCLIENT_DEPENDENT_GLOSRY.htm"
abapFile: "ABENCLIENT_DEPENDENT_GLOSRY.html"
keywords: ["do", "if", "data", "ABENCLIENT", "DEPENDENT", "GLOSRY"]
---

A [SQL data source](ABENSQL_DATA_SOURCE_GLOSRY.html) for which an implicit [client handling](ABENCLIENT_HANDLING_GLOSRY.html) takes place when accessed with [ABAP SQL](ABENABAP_SQL_GLOSRY.html).

See also: [client-independent](ABENCLIENT_INDEPENDENT_GLOSRY.html).

-   A [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) or [DDIC view](ABENDDIC_VIEW_GLOSRY.html) in [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) is client-dependent if the first column is a [client column](ABENCLIENT_COLUMN_GLOSRY.html). The system table `T000`, which contains the [AS ABAP](ABENAS_ABAP_GLOSRY.html)\\ [client IDs](ABENCLIENT_IDENTIFIER_GLOSRY.html), is an exception to this rule.
-   The client dependency of a [CDS entity](ABENCDS_ENTITY_GLOSRY.html) is determined by its data sources. Client handling is by done implicitly by filtering the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ `$session.client`.
-   The client dependency of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) is declared in the [CDS source code](ABENCDS_SOURCE_CODE_GLOSRY.html) by the [ABAP annotation](ABENABAP_ANNOTATION_GLOSRY.html)\\ `@CLientHandling.type`.

ABENSQL\_GLOSSARY.html ABENCDS\_GLOSSARY.html ABENDDIC\_GLOSSARY.html