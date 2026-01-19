---
title: "ABENNEWS-816-ABAP_OBJECTS"
description: |
  ABENNEWS-816-ABAP_OBJECTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-816-ABAP_OBJECTS.htm"
abapFile: "ABENNEWS-816-ABAP_OBJECTS.html"
keywords: ["case", "class", "ABENNEWS", "816", "ABAP", "OBJECTS"]
---

For technical reasons a [global class](ABENGLOBAL_CLASS_GLOSRY.html) that can be part of an inheritance tree that is

must contain the statements [`PROTECTED SECTION`](ABAPPROTECTED.html) and [`PRIVATE SECTION`](ABAPPRIVATE.html) also for empty protected and private sections.

Before Release 8.16, a syntax warning occurred in case of missing protected and private sections only for non-final classes. Now the warning occurs also for final subclasses.

-   a [subclass](ABENSUBCLASS_GLOSRY.html)
-   a non-[final](ABENFINAL_GLOSRY.html) class that is not a subclass but can be a [superclass](ABENSUPERCLASS_GLOSRY.html)

abenabap.html abennews.html abennews-81.html abennews-816.html