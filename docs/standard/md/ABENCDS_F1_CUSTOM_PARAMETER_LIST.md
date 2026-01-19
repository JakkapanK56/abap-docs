---
title: "ABENCDS_F1_CUSTOM_PARAMETER_LIST"
description: |
  ABENCDS_F1_CUSTOM_PARAMETER_LIST - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_F1_CUSTOM_PARAMETER_LIST.htm"
abapFile: "ABENCDS_F1_CUSTOM_PARAMETER_LIST.html"
keywords: ["ABENCDS", "CUSTOM", "PARAMETER", "LIST"]
---

``... WITH PARAMETERS [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ...``

Defines [CDS parameters](ABENCDS_PARAMETER_GLOSRY.html)\\ [`parameter1`](ABENCDS_F1_PARAM.html), [`parameter2`](ABENCDS_F1_PARAM.html), ... as input parameters of a CDS custom entity in a comma-separated list.

An input parameter called `pname` is used to model the interface of a CDS custom entity. It cannot be used in the [element list](ABENCDS_F1_CUSTOM_ELEMENT_LIST.html) of the CDS custom entity.

The following DDL source code shows a CDS custom entity with an input parameter:

This CDS custom entity is used in the [executable example for implementing a custom entity](ABENCDS_CUSTOM_QUERY_ABEXA.html).

@EndUserText.label: 'CDS custom entity, query implementation'\\n@ObjectModel.query.implementedBy: 'ABAP:CL\_DEMO\_CUSTOM\_ENTITY\_QUERY'\\ndefine custom entity DEMO\_CDS\_CUSTOM\_ENTITY\\n with parameters\\n p\_number : int1\\n \\{\\n key id : int4;\\n uuid : abap.char(32);\\n \\}\\n abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html