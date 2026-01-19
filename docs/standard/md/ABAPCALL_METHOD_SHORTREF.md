---
title: "ABAPCALL_METHOD_SHORTREF"
description: |
  ABAPCALL_METHOD_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCALL_METHOD_SHORTREF.htm"
abapFile: "ABAPCALL_METHOD_SHORTREF.html"
keywords: ["if", "method", "class", "internal-table", "ABAPCALL", "METHOD", "SHORTREF"]
---

[Reference](ABAPCALL_METHOD_DYNAMIC.html)

`CALL METHOD \{(meth_name)              |oref->(meth_name)              |(class_name)=>(meth_name)              |class=>(meth_name)              |(class_name)=>meth\}\    [PARAMETER-TABLE ptab]\    [EXCEPTION-TABLE etab].`

Dynamic method call.

**Specifies the method:**

**Specifies the parameters:**

-   [`(meth_name)`](ABAPCALL_METHOD_METH_IDENT_DYNA.html) (method contained in `meth_name`)
-   [`(class_name)`](ABAPCALL_METHOD_METH_IDENT_DYNA.html) (class contained in `class_name`)

-   [`PARAMETER-TABLE ptab`](ABAPCALL_METHOD_PARAMETER_TABLES.html)\\
    Assigns dynamic actual parameters to formal parameters using an internal table `ptab` of type `abap_parmbind_tab`.
-   [`EXCEPTION-TABLE etab`](ABAPCALL_METHOD_PARAMETER_TABLES.html)\\
    Assigns dynamic return codes to non-class-based exceptions using an internal table `etab` of type `abap_excpbind_tab`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html