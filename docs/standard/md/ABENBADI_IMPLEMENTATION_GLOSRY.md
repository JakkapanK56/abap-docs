---
title: "ABENBADI_IMPLEMENTATION_GLOSRY"
description: |
  ABENBADI_IMPLEMENTATION_GLOSRY - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBADI_IMPLEMENTATION_GLOSRY.htm"
abapFile: "ABENBADI_IMPLEMENTATION_GLOSRY.html"
keywords: ["select", "method", "class", "ABENBADI", "IMPLEMENTATION", "GLOSRY"]
---

Implementation of a [BAdI](ABENBADI_GLOSRY.html). Multiple BAdI implementations can be assigned to a single BAdI. A BAdI implementation consists of a [BAdI implementation class](ABENBADI_IMPLEMENT_CLASS_GLOSRY.html) and a filter condition that can be used to select the BAdI implementation in the [`GET BADI`](ABAPGET_BADI.html) statement in the [BAdI object](ABENBADI_METHOD_GLOSRY.html). A BAdI implementation is created as an [enhancement implementation element](ABENENHANCEMENT_IMPL_ELEM_GLOSRY.html) as part of an [enhancement](ABENENHANCEMENT_GLOSRY.html) in [Enhancement Builder](ABENENHANCEMENT_BUILDER_GLOSRY.html), where it can be marked as a standard implementation. A BAdI implementation can be in the state *active* or *inactive*, which overrides both the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html) setting and the filter condition.

ABENTECHNO\_GLOSSARY.html