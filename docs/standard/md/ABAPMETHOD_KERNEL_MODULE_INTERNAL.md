---
title: "ABAPMETHOD_KERNEL_MODULE_INTERNAL"
description: |
  ABAPMETHOD_KERNEL_MODULE_INTERNAL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMETHOD_KERNEL_MODULE_INTERNAL.htm"
abapFile: "ABAPMETHOD_KERNEL_MODULE_INTERNAL.html"
keywords: ["do", "if", "method", "class", "ABAPMETHOD", "KERNEL", "MODULE", "INTERNAL"]
---

**These additions are for internal use only. \\nDo not use them in application programs.**

[`... ... BY KERNEL MODULE p1 ...`](#ABAP_ONE_ADD@1@)

This addition to the statement `METHOD` defines the method `meth` as a [kernel method](ABENKERNEL_METHODS.html). This means that the method `meth` is not implemented in ABAP but in the kernel instead by using one of the kernel modules `p1` specified here. No statements are allowed between `METHOD` and `ENDMETHOD`.

In global classes, the addition must be entered directly in the source code editor of the Class Builder and is not listed under the properties of the method there.

abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenabap\_language\_procedures.html abenabap\_methods.html abapmethod.html