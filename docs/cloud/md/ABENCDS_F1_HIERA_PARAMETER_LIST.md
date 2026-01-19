---
title: "ABENCDS_F1_HIERA_PARAMETER_LIST"
description: |
  ABENCDS_F1_HIERA_PARAMETER_LIST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_HIERA_PARAMETER_LIST.htm"
abapFile: "ABENCDS_F1_HIERA_PARAMETER_LIST.html"
keywords: ["class", "ABENCDS", "HIERA", "PARAMETER", "LIST"]
---

``... WITH PARAMETERS [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ...``

Defines [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ... as input parameters of a [CDS hierarchy](ABENCDS_HIERARCHY_GLOSRY.html) in a comma-separated list.

An input parameter called `pname` can be used as an operand in the following places of the [`DEFINE HIERARCHY`](ABENCDS_F1_DEFINE_HIERARCHY.html) statement using the same syntax [`:pname`](ABENCDS_PARAMETER_V1.html) or [`$parameters.pname`](ABENCDS_PARAMETER_V1.html) as in CDS DDIC-based views (obsolete):

Defines an input parameter in a CDS hierarchy and its use after `START WHERE`. The class `CL_DEMO_HIERARCHY_TREE` accesses the CDS hierarchy and passes an actual parameter to the input parameter.

-   As operands after [`VALID FROM ... TO`](ABENCDS_F1_DEFINE_HIERARCHY.html) in the addition `PERIOD`.
-   As an operand on the right side of the start condition after [`START WHERE`](ABENCDS_F1_DEFINE_HIERARCHY.html).
-   As an operand on the right side of the directory condition after [`DIRECTORY FILTER BY`](ABENCDS_F1_DEFINE_HIERARCHY.html).
-   As an operand after [`DEPTH`](ABENCDS_F1_DEFINE_HIERARCHY.html).

define hierarchy DEMO\_CDS\_SIMPLE\_TREE\\n with parameters\\n p\_id : abap.int4\\n as parent child hierarchy(\\n source\\n DEMO\_CDS\_SIMPLE\_TREE\_SOURCE\\n child to parent association \_tree\\n start where\\n id = :p\_id\\n siblings order by\\n id ascending\\n )\\n \\{\\n id,\\n parent,\\n name\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_hierarchies.html abencds\_f1\_define\_hierarchy.html