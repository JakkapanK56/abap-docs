---
title: "ABENBDL_ABSTRACT"
description: |
  ABENBDL_ABSTRACT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBDL_ABSTRACT.htm"
abapFile: "ABENBDL_ABSTRACT.html"
keywords: ["select", "update", "delete", "do", "if", "class", "ABENBDL", "ABSTRACT"]
---

[RAP abstract behavior definitions](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) are created using the behavior definition language [RAP BDL](ABENCDS_DDL_GLOSRY.html) in [BDL source code](ABENBDL_SOURCE_CODE_GLOSRY.html).

A [RAP abstract behavior definition](ABENCDS_ABSTRACT_BDEF_GLOSRY.html) mainly serves as typing mechanism for deep [action](ABENRAP_ACTION_GLOSRY.html) or [function](ABENRAP_FUNCTION_GLOSRY.html) parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.

The following example shows an abstract BDEF with three nodes that is constructed as hierarchy.

The managed BDEF `DEMO_CDS_DEEP_PARAMETER` uses the abstract BDEF as action parameter in three actions.

The abstract BDEF is used as flat parameter, as structure, or as table, depending on the keywords used.

-   How to use an abstract BDEF as [input parameter](ABENINPUT_PARAMETER_GLOSRY.html) for a [RAP action](ABENBDL_ACTION.html) or a [RAP function](ABENBDL_FUNCTION.html) in a managed or unmanaged RAP BO is described in topic [`RAP BDL - InputParameter`](ABENBDL_ACTION_INPUT_PARAM.html).
-   How to use an abstract BDEF as [output parameter](ABENOUTPUT_PARAMETER_GLOSRY.html) for a RAP action or a RAP function in a managed or unmanaged RAP BO is described in topic [`RAP BDL - OutputParameter`](ABENBDL_ACTION_OUTPUT_PARA.html).
-   Abstract behavior definitions can be classified with the [C0 contract](ABENC0_CONTRACT_GLOSRY.html) for extensibility.

-   Usage as flat parameter in action `a2_from_flat`

-   Usage as structure in action `a2_from_deep`

-   Usage as table in action `a2_from_deep_table`

abstract;\\nstrict(2);\\nwith hierarchy;\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ROOT alias Root\\n\\{\\n field ( suppress ) Dummy;\\n\\n deep mapping for DEMO\_CDS\_ABSTRACT\_STRUC\\n \\{\\n char10 = char\_10;\\n Integer4 = integer\_4;\\n sub \_itemStructure = struktur;\\n sub \_itemTable = tabelle;\\n \\}\\n\\n association \_itemTable;\\n association \_itemStructure;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ITEMSTRUCT alias ItemStructure\\n\\{\\n field ( suppress ) Dummy, ToRoot;\\n\\n deep mapping for DEMO\_ABSTRACT\_ITEMSTRUCT\\n \\{\\n Char10 = char\_10;\\n Integer4 = integer\_4;\\n \\}\\n\\n association \_parent;\\n\\}\\n\\ndefine behavior for DEMO\_CDS\_ABSTRACT\_ITEMTABLE alias ItemTable\\n\\{\\n field ( suppress ) Dummy, ToRoot;\\n\\n deep mapping for DEMO\_ABSTRACT\_ITEMTABLE corresponding\\n \\{\\n Char10 = char\_10;\\n Integer4 = integer\_4;\\n \\}\\n\\n association \_parent;\\n\\} managed implementation in class bp\_demo\_cds\_deep\_parameter unique;\\nstrict(2);\\n\\ndefine behavior for DEMO\_CDS\_DEEP\_PARAMETER\\npersistent table DEMO\_BO\_DEEP\\nlock master\\nauthorization master ( instance )\\n\\{\\n create;\\n update;\\n delete;\\n\\n mapping for demo\_bo\_deep\\n \\{\\n RootBO = root;\\n \\}\\n\\n field (readonly:update) RootBO;\\n\\n// mapping: none\\n action a2\_from\_flat parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n// mapping: structure\\n action a2\_from\_deep deep parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n // mapping: table\\n action a2\_from\_deep\_table deep table\\n parameter DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\n//deep selective output parameter\\n action a2\_deep\_result deep result selective \[1\]\\n DEMO\_CDS\_ABSTRACT\_ROOT;\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html