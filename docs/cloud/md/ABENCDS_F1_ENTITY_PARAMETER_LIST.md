---
title: "ABENCDS_F1_ENTITY_PARAMETER_LIST"
description: |
  ABENCDS_F1_ENTITY_PARAMETER_LIST - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_F1_ENTITY_PARAMETER_LIST.htm"
abapFile: "ABENCDS_F1_ENTITY_PARAMETER_LIST.html"
keywords: ["if", "class", "ABENCDS", "ENTITY", "PARAMETER", "LIST"]
---

``... WITH PARAMETERS [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ...``

Defines [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ... as input parameters of an [CDS abstract entity](ABENCDS_ABSTRACT_ENTITY_GLOSRY.html) in a comma-separated list.

Currently, input parameters called `pname` are used only to model the interface of an abstract entity. They cannot be used as operands in the CDS abstract entity.

An input parameter cannot be specified as an element in the element list.

The following DDL source code shows a CDS abstract entity with input parameters:

The class `CL_DEMO_CDS_ABSTRCT_ENTTY_PARA` shows that the parameter annotations of the CDS abstract entity can be evaluated using the class `CL_DD_DDL_ANNOTATION_SERVICE`.

define abstract entity demo\_cds\_abstract\_entity\_para\\n with parameters\\n @EndUserText.label: 'Date parameter'\\n p1 : abap.dats,\\n @EndUserText.label: 'Integer parameter'\\n p2 : abap.int4,\\n @EndUserText.label: 'Simple type parameter'\\n p3 : DEMO\_BT\_CHAR\_TEXT\\n \\{\\n key col1 : abap.char(3);\\n col2 : abap.int4;\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_abstract\_entities.html abencds\_f1\_define\_abstract\_entity.html