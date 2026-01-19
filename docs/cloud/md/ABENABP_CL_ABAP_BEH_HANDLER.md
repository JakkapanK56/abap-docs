---
title: "ABENABP_CL_ABAP_BEH_HANDLER"
description: |
  ABENABP_CL_ABAP_BEH_HANDLER - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENABP_CL_ABAP_BEH_HANDLER.htm"
abapFile: "ABENABP_CL_ABAP_BEH_HANDLER.html"
keywords: ["method", "class", "ABENABP", "ABAP", "BEH", "HANDLER"]
---

```[`CLASS`](ABAPCLASS_DEFINITION.html) lhc_bdef [`DEFINITION`](ABAPCLASS_DEFINITION.html)\    [`INHERITING FROM`](ABAPCLASS_OPTIONS.html)\ `` `CL_ABAP_BEHAVIOR_HANDLER` `` [[`ABSTRACT`](ABAPCLASS_OPTIONS.html)]\ [[`FINAL`](ABAPCLASS_OPTIONS.html)].    [`PRIVATE SECTION`](ABAPPRIVATE.html).  \      [`handler_method_declarations`](ABAPMETHODS_FOR_RAP_BEHV.html)\      ...  \  [`ENDCLASS`](ABAPCLASS_DEFINITION.html).  \  [`CLASS`](ABAPCLASS_IMPLEMENTATION.html) lhc_bdef [`IMPLEMENTATION`](ABAPCLASS_IMPLEMENTATION.html)\  \    [`handler_method_implementations`](ABAPMETHODS_FOR_RAP_BEHV.html)\    ...  \  [`ENDCLASS`](ABAPCLASS_IMPLEMENTATION.html).```

A handler class can be defined in the [CCIMP include](ABENCCIMP_GLOSRY.html) of an [ABAP behavior pool](ABENBEHAVIOR_POOL_GLOSRY.html). It consists of method declarations [`handler_method_declarations`](ABAPMETHODS_FOR_RAP_BEHV.html) and implementations [`handler_method_implementations`](ABAPMETHODS_FOR_RAP_BEHV.html).

A handler class `lhc_bdef` inherits from class `CL_ABAP_BEHAVIOR_HANDLER`. For modularization purposes, one behavior pool can define several handler classes. For example, each entity can have its own handler class, or individual handler classes can be defined to distinguish between reading and changing RAP BO entities.

Handler classes are implicitly [`ABSTRACT`](ABAPCLASS_OPTIONS.html) and [`FINAL`](ABAPCLASS_OPTIONS.html) since instantiating and calling only happens through the [RAP runtime engine](ABENRAP_RUNTIME_ENGINE_GLOSRY.html).

The example [Example for RAP Handler Methods](ABENRAP_HANDLER_METHODS_ABEXA.html) demonstrates RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.

abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_provide\_rap\_bos.html abenabap\_behavior\_pools.html abenabp\_handler\_class.html