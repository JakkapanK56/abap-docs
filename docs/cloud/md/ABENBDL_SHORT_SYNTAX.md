---
title: "ABENBDL_SHORT_SYNTAX"
description: |
  ABENBDL_SHORT_SYNTAX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBDL_SHORT_SYNTAX.htm"
abapFile: "ABENBDL_SHORT_SYNTAX.html"
keywords: ["update", "delete", "do", "if", "class", "data", "ABENBDL", "SHORT", "SYNTAX"]
---

`([lock][, authorization][, etag]\ [, changedocuments]) dependent by _Assoc`

The following statements can be combined:

This syntax short form can be used if the [RAP authorization master entity](ABENRAP_AUTH_MA_ENT_GLOSRY.html), [RAP lock master entity](ABENRAP_LOCK_MA_ENT_GLOSRY.html), [RAP ETag master entity](ABENRAP_ETAG_MA_ENT_GLOSRY.html), and [RAP change documents master entity](ABENRAP_CHANGE_DOC_MASTER_GLOSRY.html) are defined in the same entity which is reached via the association `_Assoc`.

Each of the components `lock`, `authorization`, `etag`, and `changedocuments` is optional but at least one of them must be specified within the parentheses.

The following RAP behavior definition of type `managed` consists of four nodes. The root node is declared as lock master, authorization master, and ETag master entity. The three child nodes use the syntax short form to refer to the root entity for authorization control, locking, and optimistic concurrency control.

-   `lock dependent by _Assoc`
-   `authorization dependent by _Assoc`
-   `etag dependent by _Assoc`
-   `changedocuments dependent by _Assoc`

managed implementation in class bp\_demo\_rap\_extensible\_root unique;\\nstrict(2);\\nextensible\\n\\{ with determinations on modify;\\n with determinations on save;\\n with validations on save; \\}\\n\\nwith draft;\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_ROOT alias Root\\npersistent table demo\_dbtab\_root\\ndraft table demo\_dbtab\_exdrf\\nlock master\\ntotal etag Timestamp\\nauthorization master ( instance, global )\\nextensible\\n\\netag master LastChangedAt\\n\\{\\n create;\\n update;\\n delete;\\n association \_child \\{ create; with draft; \\}\\n\\n draft action ( authorization : none ) Edit;\\n draft action Activate optimized;\\n draft action Discard;\\n draft action Resume;\\n draft determine action Prepare extensible;\\n\\n field(readonly:update) KeyField;\\n field(readonly) Timestamp;\\n\\n mapping for demo\_dbtab\_root corresponding extensible\\n \\{\\n KeyField = key\_field;\\n DataField = data\_field;\\n CharField = char\_field;\\n CharField2 = char\_field\_2;\\n DecField = dec\_field;\\n Timestamp = crea\_date\_time;\\n LastChangedAt = lchg\_date\_time;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_CHILD alias Child\\npersistent table demo\_dbtab\_child\\ndraft table demo\_dbtab\_exchl\\n(lock, etag, authorization) dependent by \_parent\\nextensible\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField;\\n association \_parent \\{ with draft; \\}\\n association \_grchld \\{ create; with draft; \\}\\n\\n field(readonly:update) KeyFieldChild;\\n\\n mapping for demo\_dbtab\_child corresponding extensible\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_GRCHLD alias GrandChild\\npersistent table demo\_dbtab\_grchl\\ndraft table demo\_dbtab\_grch\\n(lock,authorization,etag) dependent by \_GrandParent\\nextensible\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField, KeyFieldChild;\\n association \_GrandParent \\{ with draft; \\}\\n association \_parent \\{ with draft; \\}\\n association \_child \\{ create; with draft; \\}\\n\\n field(readonly:update) KeyFieldGrchld;\\n\\n mapping for demo\_dbtab\_grchl corresponding extensible\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n KeyFieldGrchld = key\_field\_grchld;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\}\\n\\ndefine behavior for DEMO\_RAP\_EXTENSIBLE\_GGCHLD alias GreatGrandChild\\npersistent table demo\_dbtab\_ggchl\\ndraft table demo\_dbtab\_ggrch\\n(lock, authorization, etag) dependent by \_GreatGrandParent\\nextensible\\n\\{\\n update;\\n delete;\\n field ( readonly ) KeyField, KeyFieldChild, KeyFieldGrChld;\\n association \_GrandParent \\{ with draft; \\}\\n association \_parent \\{ with draft; \\}\\n association \_GreatGrandParent \\{ with draft; \\}\\n\\n field(readonly:update) KeyFieldGgchld;\\n\\n mapping for demo\_dbtab\_ggchl corresponding extensible\\n \\{\\n KeyField = key\_field;\\n KeyFieldChild = key\_field\_child;\\n KeyFieldGrchld = key\_field\_grchld;\\n KeyFieldGgchld = key\_field\_ggchld;\\n DataField = data\_field;\\n CharField = char\_field;\\n \\}\\n\\} abenabap.html abenabap\_rap.html abencds\_bdef.html abenbdl.html abenbdl\_rap\_bo.html abenbdl\_define\_beh.html abenbdl\_character.html