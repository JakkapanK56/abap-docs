---
title: "ABENCDS_FIELD_V1"
description: |
  ABENCDS_FIELD_V1 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_FIELD_V1.htm"
abapFile: "ABENCDS_FIELD_V1.html"
keywords: ["select", "do", "if", "try", "data", "ABENCDS", "FIELD"]
---

`... [entity.]field|[alias.]field ...`

Field of a [data source](ABENCDS_DATA_SOURCE_V1.html)\\ `entity` of the current [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html). `field` expects the actual name of the element. Any alternative element names defined using [`AS`](ABENCDS_SELECT_LIST_ENTRY_V1.html) cannot be used, with the exception of the `ON` condition of a [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html).

If the view entity makes use of multiple [data sources](ABENCDS_DATA_SOURCE_V1.html) by using join expressions, then you must ensure that all field names are unique. If a field name `field` is not unique, then `field` must be prefixed with the name `entity` of the data source or with the alias name `alias` of the data source separated by a period (.). If the field name is unique, it may but does not need to be prefixed.

abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_define\_view\_v1.html abencds\_select\_statement\_v1.html abencds\_operands\_and\_expr\_v1.html abencds\_operands\_v1.html