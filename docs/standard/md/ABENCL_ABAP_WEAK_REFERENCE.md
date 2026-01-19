---
title: "ABENCL_ABAP_WEAK_REFERENCE"
description: |
  ABENCL_ABAP_WEAK_REFERENCE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_ABAP_WEAK_REFERENCE.htm"
abapFile: "ABENCL_ABAP_WEAK_REFERENCE.html"
keywords: ["select", "delete", "do", "if", "method", "class", "data", "types", "ABENCL", "ABAP", "WEAK", "REFERENCE"]
---

An object in the system class `CL_ABAP_WEAK_REFERENCE` represents a [weak reference](ABENWEAK_REFERENCE_GLOSRY.html) to an object in a class. Unlike regular [object references](ABENOBJECT_REFERENCE_GLOSRY.html), a weak reference is ignored when the [garbage collector](ABENGARBAGE_COLLECTOR_GLOSRY.html) is executed. This means that a weak reference does not keep the referenced object from being deleted when the garbage collector is executed.

A weak reference to an existing object is created by passing an object reference to the instance constructor of `CL_ABAP_WEAK_REFERENCE`. The [functional method](ABENFUNCTIONAL_METHOD_GLOSRY.html)\\ `GET` can then be used to retrieve the reference afterwards. If the object was deleted in the meantime, the return value is initial.

A different type of reference keeps objects alive until the available memory becomes limited. The class `CL_ABAP_SOFT_REFERENCE` is designed for these [soft references](ABENSOFT_REFERENCE_GLOSRY.html), but this class is currently still implemented like the class `CL_ABAP_WEAK_REFERENCE`.

A weak reference is set to the object of the object reference variable `oref`, and the latter is then deleted. The weak reference points to the object for as long as the garbage collector is not executed. The return value is initial after the explicit call of the garbage collector.

CLASS demo DEFINITION. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n DATA(oref) = NEW demo( ). \\n FINAL(wref) = NEW cl\_abap\_weak\_reference( oref ). \\n CLEAR oref. \\n\\ \\n IF wref->get( ) IS NOT INITIAL. \\n out->write( 'Weak reference not initial' ). \\n ENDIF. \\n\\ \\n out->write( 'Garbage collection' ). \\n cl\_abap\_memory\_utilities=>do\_garbage\_collection( ). \\n\\ \\n IF wref->get( ) IS INITIAL. \\n out->write( 'Weak reference initial' ). \\n ENDIF. \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendata\_references.html