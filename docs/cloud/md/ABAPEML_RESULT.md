---
title: "ABAPEML_RESULT"
description: |
  ABAPEML_RESULT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPEML_RESULT.htm"
abapFile: "ABAPEML_RESULT.html"
keywords: ["do", "if", "case", "data", "types", "internal-table", "ABAPEML", "RESULT"]
---

`... RESULT result_tab ...`

Used to store results of the following operations in an internal table `result_tab`:

The internal table `result_tab` must be typed with a specific [BDEF derived type](ABENRAP_DERIVED_TYPE_GLOSRY.html) depending on the operation performed. The use of `RESULT` is mandatory for all operations except for the modify operation executing an action.

The internal tables comprise nested structures that contain special components. See the details on the components in the documentation for [Components of Derived Types](ABAPDERIVED_TYPES_COMP.html).

The following table provides an overview on those operations that offer a result, their BDEF derived type, and the relevant components for the internal tables:

Additional components are possible for all contexts: If [late numbering](ABENRAP_LATE_NUMBERING_GLOSRY.html) is defined for a BO, the component `%pid` is available. In case of a draft-enabled BO, the component `%is_draft` is available.

-   All [`READ`](ABAPREAD_ENTITY_ENTITIES_OP.html) operations.
-   A [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) operation executing an [action](ABENRAP_ACTION_GLOSRY.html).

**Context** **Types** **Possible [Components](ABAPDERIVED_TYPES_COMP.html) of Structures in Internal Table `result_tab`**\\ [`READ`](ABAPREAD_ENTITY_ENTITIES.html) operations (excluding [functions](ABENBDL_FUNCTION.html)) `TABLE FOR READ RESULT bdef[\\_assoc]`\\ \\ `%data` \\
`%key` \\
`%pky` \\
`%tky`\\ [`READ`](ABAPREAD_ENTITY_ENTITIES.html) operations executing functions (`READ ... EXECUTE`) `TABLE FOR FUNCTION RESULT bdef~function`\\ \\ `%key` \\
`%param` \\
`%pky` \\
`%tky`\\ [`MODIFY`](ABAPMODIFY_ENTITY_ENTITIES.html) operations executing an action (`MODIFY ... EXECUTE`) `TABLE FOR ACTION RESULT bdef~action`\\ \\ `%cid_ref` \\
`%key` \\
`%param` \\
`%pky` \\
`%tky` abenabap.html abenabap\_rap.html abenabap\_for\_rap\_bos.html abenabap\_consume\_rap\_bos.html abeneml.html abapcommon\_eml\_elements.html