---
title: "ABENCL_ABAP_CHAR_UTILITIES"
description: |
  ABENCL_ABAP_CHAR_UTILITIES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCL_ABAP_CHAR_UTILITIES.htm"
abapFile: "ABENCL_ABAP_CHAR_UTILITIES.html"
keywords: ["do", "method", "class", "data", "ABENCL", "ABAP", "CHAR", "UTILITIES"]
---

The class `CL_ABAP_CHAR_UTILITIES` provides attributes and methods as utilities for string processing.

The components of this class are all static and public and the attributes are read-only and are initialized in the class constructor. Details about the attributes and methods of this class are described in the class documentation.

The following lines demonstrate that attributes of the class `CL_ABAP_CHAR_UTILITIES` containing [control characters](ABENCONTROL_CHARACTER_GLOSRY.html) can be replaced by a representation of the [control characters](ABENSTRING_TEMPLATES_SEPARATORS.html) in a [string template](ABENSTRING_TEMPLATE_GLOSRY.html).

ASSERT cl\_abap\_char\_utilities=>newline = |\\\\n|. \\nASSERT cl\_abap\_char\_utilities=>horizontal\_tab = |\\\\t|. \\nASSERT cl\_abap\_char\_utilities=>cr\_lf = |\\\\r\\\\n|. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abencl\_abap\_string\_utilities.html