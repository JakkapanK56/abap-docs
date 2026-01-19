---
title: "ABENCDS_200896311_ANNO"
description: |
  ABENCDS_200896311_ANNO - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_200896311_ANNO.htm"
abapFile: "ABENCDS_200896311_ANNO.html"
keywords: ["do", "if", "data", "ABENCDS", "200896311", "ANNO"]
---

The following table shows the [properties](ABENCDS_SAP_ANNO_PROPS.html) of the annotation:

The [annotation definition](ABENCDS_ANNO_DEFINITION_GLOSRY.html) documentation ([KTD](ABENKTD_GLOSRY.html)) is shown below.

Defines the handling of metadata of a CDS object.

Can be specified for a *reference annotation* to explicitly allow for unchecked expressions to be used for values of such annotations.

Annotations that support unchecked expressions in reference annotations need to guarantee that this does not introduce gaps into the API-Release-Check. This e.g. can be done in a secondary object handler that evaluates the unchecked expression.

**Kind** [Framework-specific annotation](ABENFRMWRK_ANNOTATION_GLOSRY.html)\\ **Syntax** `Metadata.uncheckedExpressionsAllowed`\\ **Scope** `#ANNOTATION`\\ **Type** `Boolean`\\ **Enums** `-`\\ **Default** `true`\\ **Text** `-`\\ **MDE** `-`\\ **API** `-` abenabap.html abencds.html abencds\_annotations.html abencds\_annotations\_sap.html abencds\_annotations\_ktd\_docu.html abencds\_frmwrk\_annos.html abencds\_metadata\_f.html