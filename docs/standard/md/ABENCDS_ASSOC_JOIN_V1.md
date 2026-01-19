---
title: "ABENCDS_ASSOC_JOIN_V1"
description: |
  ABENCDS_ASSOC_JOIN_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_ASSOC_JOIN_V1.htm"
abapFile: "ABENCDS_ASSOC_JOIN_V1.html"
keywords: ["select", "if", "case", "method", "class", "data", "ABENCDS", "ASSOC", "JOIN"]
---

This topic describes the different use cases of CDS associations. It explains in which use case a join is generated on the database and which [join type](ABENJOIN_TYPE_GLOSRY.html) is generated each time. Examples and screenshots of the SQL statement generated on the database are provided to further illustrate the transformation into joins.

When a CDS association is instantiated as join on the database, then the [association source](ABENASSOCIATION_SOURCE_GLOSRY.html) represents the left side and the [association target](ABENASSOCIATION_TARGET_GLOSRY.html) represents the right side of the join. The `ON` condition of the association is added to the `ON` condition of the join.

There are the following basic use cases for CDS associations:

**Use case**: the data source of a CDS view entity after `FROM` is specified as path expression.

**Example**:

**SQL statement generated on the database**:

The SQL statement generated on the database shows that the path expression is transformed into an [inner join](ABENINNER_JOIN_GLOSRY.html) on the database. \\n\\n

**Use case**: an association is defined and exposed in the element list of a CDS view entity. In this way, it can be used in other CDS entities. However, the association is not part of the output and no data is selected from the association target.

**Example**:

**SQL statement generated on the database**:

The SQL statement generated on the database shows that no join is generated and that the association is not mentioned in the statement that is passed to the database. \\n\\n

**Use case**: an association is defined and an element from the association target is included in the element list of the same CDS view entity. In this example, the association is used, but not exposed, and therefore it cannot be used in path expressions of other CDS entities.

**Example**:

**SQL statement generated on the database**:

The SQL statement generated on the database shows that the path expression is transformed into a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) on the database. \\n\\n

**Use case**: an association is defined and used in the `WHERE` condition of the same CDS view entity. In this example, the association is used, but not exposed, and therefore it cannot be used in path expressions of other CDS entities.

**Example**:

**SQL statement generated on the database**:

The SQL statement generated on the database shows that the path expression is transformed into a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) with the cardinality many to one. \\n\\n

**Use case**: A CDS view entity uses an association that was defined and published in another CDS entity. The association is used in a path expression to include a field from the association target in the element list of the CDS view entity.

**Example**:

**SQL statement generated on the database**:

The SQL statement generated on the database shows that the path expression is transformed into a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) on the database. Note that this happens in the view that uses the association, and not in the view that defines the association. \\n\\n

**Use case**: The program `DEMO_CDS_SELECT_ASSOC` uses an association that was defined and published in a CDS view entity in a path expression in ABAP SQL.

**Example**:

REPORT demo\_cds\_select\_assoc. \\n\\ \\nCLASS demo DEFINITION \\n  PUBLIC SECTION. \\n    CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS demo IMPLEMENTATION. \\n  METHOD main. \\n    SELECT carrid, \\n           carrname, \\n           /\_spfli\[ (\*) \]-connid \\n           FROM demo\_cds\_assoc\_exposition \\n           INTO TABLE @DATA(result). \\n  ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n  demo=>main( ).

**SQL statement generated on the database**:

The path expression is transformed into a [left outer join](ABENLEFT_OUTER_JOIN_GLOSRY.html) on the database.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_from\\n as select from demo\_cds\_assoc\_spfli.\_sflight\\n\\{ \\n key carrid,\\n connid \\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_exposition\\n as select from scarr\\n association of one to many demo\_cds\_assoc\_spfli as \_spfli \\n on scarr.carrid = \_spfli.carrid\\n\\{\\n \_spfli,\\n key carrid,\\n carrname\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_element\\n as select from scarr\\n association of one to many demo\_cds\_assoc\_spfli as \_spfli \\n on scarr.carrid = \_spfli.carrid\\n\\{\\n key carrid, \\n \_spfli.connid,\\n carrname\\n\\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_where\\n as select from scarr\\n association \[1..1\] to demo\_cds\_assoc\_spfli as \_spfli \\n on scarr.carrid = \_spfli.carrid and \_spfli.connid = '....'\\n\\{\\n key carrid, \\n carrname\\n\\} where \_spfli.connid = '....'\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_external\_usage\\n as select from\\n demo\_cds\_assoc\_exposition \\n \\{\\n carrid,\\n carrname, \\n \_spfli.connid\\n \\}\\n \\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_association\_v1.html