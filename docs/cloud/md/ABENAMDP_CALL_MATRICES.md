---
title: "ABENAMDP_CALL_MATRICES"
description: |
  ABENAMDP_CALL_MATRICES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_CALL_MATRICES.htm"
abapFile: "ABENAMDP_CALL_MATRICES.html"
keywords: ["method", "class", "data", "ABENAMDP", "CALL", "MATRICES"]
---

The following table show how the client handling affects the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list of an AMDP method. For standalone AMDP methods, client handling is defined by AMDP options. For AMDP methods implementing CDS table functions, client handling is governed by the table function.

*CS* means usage of [client-safe](ABENCLIENT_SAFE_GLOSRY.html) object by a client-safe object. *\-* means usage not possible.

The following table shows the allowed combinations of the AMDP options [`client_handling`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) (columns) with objects of the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list (rows).

The following table shows the allowed combinations of [CDS table functions](ABENCDS_TABLE_FUNCTION_GLOSRY.html) implemented by [`FOR TABLE FUNCTION`](ABAPCLASS-METHODS_FOR_TABFUNC.html) (columns) with objects of the [`USING`](ABAPMETHOD_BY_DB_PROC.html) list (rows).

**`client_handling`/\\
`USING`** [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) [`CDS SESSION CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) **AMDP Methods**\\ [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* - [`CDS SESSION CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *CS*\\ **CDS Table Functions**\\ [Client-dependent using session variable without client parameter](ABENCDS_FUNC_CLIENT_HDL_DEF.html#abencds-func-client-hdl-def-3----client-safe--abencds-func-client-safety-html----cs-----client-independent--abencds-func-client-hdl-def-html-@ITOC@@ABENCDS_FUNC_CLIENT_HDL_DEF_4) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *CS*\\ **Other CDS entities**\\ Client-dependent, filtered by session variable (e.g. [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html)), except [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *\-*\\ Client-independent ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *CS*\\ **DDIC objects**\\ [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) *CS* *CS* **Table Function**/\\
`USING` [Client-dependent using session variable without client parameter](ABENCDS_FUNC_CLIENT_HDL_DEF.html#abencds-func-client-hdl-def-3----client-safe--abencds-func-client-safety-html----client-independent--abencds-func-client-hdl-def-html-@ITOC@@ABENCDS_FUNC_CLIENT_HDL_DEF_4) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) **AMDP Methods**\\ [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* - [`CDS SESSION CLIENT INDEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *CS*\\ **CDS Table Functions**\\ [Client-dependent using session variable without client parameter](ABENCDS_FUNC_CLIENT_HDL_DEF.html#abencds-func-client-hdl-def-3----client-safe--abencds-func-client-safety-html----cs-----client-independent--abencds-func-client-hdl-def-html-@ITOC@@ABENCDS_FUNC_CLIENT_HDL_DEF_4) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *CS*\\ **Other CDS entities**\\ Client-dependent, filtered by session variable (e.g. [CDS view entities](ABENCDS_V2_VIEW_GLOSRY.html)), except [CDS DDIC-based view](ABENCDS_V1_VIEW_GLOSRY.html) ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *\-*\\ Client-independent ([client-safe](ABENCDS_FUNC_CLIENT_SAFETY.html)) *CS* *CS*\\ **DDIC objects**\\ [DDIC database tables](ABENDDIC_DB_TABLE_GLOSRY.html) *CS* *CS* abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_methods.html abapmethods\_amdp\_options.html abapmethods\_amdp\_options\_client.html