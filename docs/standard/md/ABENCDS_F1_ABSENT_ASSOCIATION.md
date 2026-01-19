---
title: "ABENCDS_F1_ABSENT_ASSOCIATION"
description: |
  ABENCDS_F1_ABSENT_ASSOCIATION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_ABSENT_ASSOCIATION.htm"
abapFile: "ABENCDS_F1_ABSENT_ASSOCIATION.html"
keywords: ["if", "data", "ABENCDS", "ABSENT", "ASSOCIATION"]
---

``... ASSOCIATION [[`cardinality`](ABENCDS_CARDINALITY_V2.html)]\ [TO] target ON [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\                  [ WITH DEFAULT FILTER [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html)\ ] ...``

Defines a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html) in the [element list](ABENCDS_F1_ABSENT_ELEMENT_LIST.html) of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html). The CDS association uses an `ON` condition to associate the current CDS entity with a [association target](ABENASSOCIATION_TARGET_GLOSRY.html)\\ `target`. The same rules apply that are described in topic [`CDS view entity, ASSOCIATION`](ABENCDS_SIMPLE_ASSOCIATION_V2.html) with the following differences:

A CDS association defined using the addition `ASSOCIATION` in the element list of a CDS abstract entity is always exposed. It cannot, however, be used in any [SQL path expressions](ABENSQL_PATH_EXPRESSION_GLOSRY.html), neither in ABAP CDS or in ABAP SQL.

The following DDL source code shows a CDS abstract entity that exposes a CDS association with another CDS abstract entity:

-   The addition `AS _assoc` is not used. The CDS association is declared using the name `_assoc`, after which the addition `ASSOCIATION` is specified in the element list.
-   No [session variables](ABENSESSION_VARIABLE_GLOSRY.html) can be used in the conditions [`cds_cond`](ABENCDS_CONDITIONAL_EXPRESSION_V2.html).

-   A CDS association of a CDS abstract entity cannot be used anywhere where it could produce instances of join expressions.
-   For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](ABENCDS_DATA_SOURCE_MATRIX.html).

define abstract entity demo\_cds\_abstract\_entity\_assoc\\n \\{ \\n key key\_col: abap.char(3);\\n \_assoc : association of many to one demo\_cds\_abstract\_entity on\\n demo\_cds\_abstract\_entity\_assoc.key\_col = \_assoc.col1;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html abencds\_f1\_define\_abstract\_entity.html abencds\_f1\_absent\_element\_list.html abencds\_f1\_absent\_list\_element.html