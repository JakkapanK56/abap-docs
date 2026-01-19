---
title: "ABENLIKE_OBSOLETE"
description: |
  ABENLIKE_OBSOLETE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLIKE_OBSOLETE.htm"
abapFile: "ABENLIKE_OBSOLETE.html"
keywords: ["if", "class", "data", "types", "ABENLIKE", "OBSOLETE"]
---

`... LIKE dtype ...`

Outside of classes, the addition `LIKE` can be used to refer to [flat](ABENFLAT_GLOSRY.html) structures in the [ABAP Dictionary](ABENABAP_DICTIONARY_GLOSRY.html) and their components, as well as the properties of data objects. A `LIKE` reference to the flat components of a deep dictionary structure is not possible. This affects the following uses of `LIKE`:

If there is a data object with the name `dtype` in a local context, then this object hides the data type from the ABAP Dictionary.

Referring to a DDIC structure with `LIKE`.

Referring to a DDIC structure with `TYPE`.

-   in the declarative statements [`TYPES`](ABAPTYPES.html), [`DATA`](ABAPDATA.html), and so on.
-   in [complete typings](ABENTYPING_COMPLETE.html)
-   in the statement [`PARAMETERS`](ABAPPARAMETERS_TYPE.html)

-   The addition `LIKE` should only be used to refer to data objects.
-   It is neither possible to make a `LIKE` reference to a [CDS](ABENCDS_ENTITY_GLOSRY.html) entity, nor to make a `LIKE` reference to a [CDS-managed DDIC view](ABENCDS_MNGDDDIC_VIEW_GLOSRY.html) of a [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) ([obsolete](ABENCDS_ACCESS_OBSOLETE.html)).
-   For a reference to data types, the addition `TYPE` should always be used.

DATA wa LIKE scarr. DATA wa TYPE scarr. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_typing.html