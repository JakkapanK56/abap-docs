---
title: "ABENCDS_FUNC_CLIENT_SAFETY"
description: |
  ABENCDS_FUNC_CLIENT_SAFETY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_FUNC_CLIENT_SAFETY.htm"
abapFile: "ABENCDS_FUNC_CLIENT_SAFETY.html"
keywords: ["select", "do", "if", "method", "data", "types", "ABENCDS", "FUNC", "CLIENT", "SAFETY"]
---

The annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` makes a client-dependent CDS table function [client-safe](ABENCLIENT_SAFE_GLOSRY.html). If the value `true` (default) is used for that annotation, the following restrictions are checked that ensure client safety:

If the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` is not used but the table function has the ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) or is a [released API](ABENRELEASED_API_GLOSRY.html), the checks are done implicitly and client safety is enforced where necessary.

Client safety of CDS table functions does not mean that only data of the [current client](ABENCURRENT_CLIENT_GLOSRY.html) can be read. In [Standard ABAP](ABENSTANDARD_ABAP_GLOSRY.html), the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) can be used to set the HANA session variable `CDS_CLIENT` to other values than the current client. A restriction to the data of the current client is achieved in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), where `USING CLIENT` is not allowed.

The following `SELECT` statement accesses the CDS table function `DEMO_CDS_TABFUNC_SESS_VAR_CS` that is defined with the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)`. Nevertheless, with the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) data arbitrary clients can be selected. This is not possible in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

The following `SELECT` statement accesses the CDS table function `DEMO_CDS_TABFUNC_SESS_VAR_CS` that is defined with the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)`. Without the addition [`USING CLIENT`](ABAPSELECT_CLIENT.html) that cannot be used in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), only data of the current client can be selected.

-   All used objects must be client-safe.
-   The table function must have the annotations

-   `[ClientHandling.type](ABENCDS_613831553_ANNO.html)` with the value `#CLIENT_DEPENDENT` together with `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)` with the value `#SESSION_VARIABLE`.
-   `[ClientHandling.type](ABENCDS_613831553_ANNO.html)` with the value `#CLIENT_INDEPENDENT`.

-   The [AMDP function implementation](ABENAMDP_FUNCTION_METHOD_GLOSRY.html) that implements a client-dependent table function is then implicitly defined with the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) or [`CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) respectively.
-   The table function must not have a parameter of type [`CLNT`](ABENDDIC_BUILTIN_TYPES.html#abenddic-builtin-types-7---the-annotation---environment-systemfield--abencds-1937921420-anno-html---with-the-enumerated-value---client--cannot-be-used-for-a-parameter---final-out----cl--demo--output--new-------n-----ndata-clnt----sy-mandt----ncl--demo--input--request--changing-field---clnt------n-----nselect------n-from-demo--cds--tabfunc--sess--var--cs-using-client-clnt \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT \* \\n FROM demo\_cds\_tabfunc\_sess\_var\_cs "USING CLIENT @clnt \\n INTO TABLE @FINAL(result). \\n\\ \\nout->write( result ). \\n\\ \\nout->display( ). abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_func\_client\_handling.html