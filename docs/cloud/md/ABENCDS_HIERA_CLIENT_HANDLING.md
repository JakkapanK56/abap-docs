---
title: "ABENCDS_HIERA_CLIENT_HANDLING"
description: |
  ABENCDS_HIERA_CLIENT_HANDLING - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_HIERA_CLIENT_HANDLING.htm"
abapFile: "ABENCDS_HIERA_CLIENT_HANDLING.html"
keywords: ["do", "if", "data", "ABENCDS", "HIERA", "CLIENT", "HANDLING"]
---

For CDS hierarchies, client handling cannot be defined using annotations. Instead client handling is predefined as follows:

-   Client dependency is determined by the client dependency of the CDS view used as its data source.
-   In a client-dependent CDS hierarchy, all rows are removed implicitly from the result set of the CDS view specified as a data source that do not match the client ID currently contained in the [session variable](ABENSESSION_VARIABLE_GLOSRY.html)\\ [`$session.client`](ABENCDS_SESSION_VARIABLE_V1.html) (that addresses the HANA session variable `CDS_CLIENT`) before the hierarchy is generated.

abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_hierarchies.html