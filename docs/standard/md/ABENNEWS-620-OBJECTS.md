---
title: "ABENNEWS-620-OBJECTS"
description: |
  ABENNEWS-620-OBJECTS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-620-OBJECTS.htm"
abapFile: "ABENNEWS-620-OBJECTS.html"
keywords: ["delete", "do", "if", "method", "class", "data", "types", "internal-table", "ABENNEWS", "620", "OBJECTS"]
---

[1. New Variant `PROVIDE FIELDS`](#ABAP_MODIFICATION_1@4@)

[2\. Creating Objects from the SAP XSLT Processor](#ABAP_MODIFICATION_2@4@)

[3\. Polymorphism and Object Services](#ABAP_MODIFICATION_3@4@)

[4\. Accessing Data References and Static Class Components in JavaScript](#ABAP_MODIFICATION_4@4@)

[5\. Kernel Methods](#ABAP_MODIFICATION_5@4@)

[6. Recursions of `RAISE EVENT`](#ABAP_MODIFICATION_6@4@)

The statement [`PROVIDE FIELDS`](ABAPPROVIDE.html) makes it possible to process [internal tables](ABENDOBJ_ITAB.html) without [headers](ABENHEADER_LINE_GLOSRY.html). The functions of the statement `PROVIDE` are therefore also available under [ABAP Objects](ABENABAP_OBJECTS.html).

It is possible to create objects and call class methods from the [SAP XSLT processor](ABENXSLT_PROCESSOR_GLOSRY.html). Now only public methods are allowed, whereas previously private and [protected](ABENPROTECTED_GLOSRY.html) methods could also be called.

Parameter passing now supports all ABAP [elementary types](ABENDATA_TYPES.html), any object references, and the generic types `csequence` and `xsequence`. Previously, the types `c`, `d`, `f`, `i`, `n`, `string`, and `t` were supported.

The transfer has been tightened, so that for the data types `d` and `i` only valid specifications are allowed. Value losses for type `p` are now caught. The values of types `x` and `xstring` are converted into the [XML](ABENXML_GLOSRY.html) standard format [base64](ABENBASE64_GLOSRY.html).

The uniqueness of object keys is now checked not only by class, but across the whole inheritance hierarchy. The behavior of the following methods has also been changed:

Binding JavaScript objects to ABAP objects has been expanded to enable access to data reference variables and [static components](ABENSTATIC_COMPONENT_GLOSRY.html) (attributes and methods) of classes. In bound internal tables, you can delete lines using the JS method `deleteLines` and the JS method `append` has been renamed `appendLine`.

**Support for the connection of JavaScript to ABAP will be discontinued without replacement in a release after 7.1.**

The addition `BY KERNEL MODULE` of the statement [`METHOD`](ABAPMETHOD.html) makes it possible to implement methods as [kernel methods](ABENKERNEL_METHODS.html).

The number of possible recursions of the statement [`RAISE EVENT`](ABAPRAISE_EVENT.html) has been raised from 63 to 1023.

-   The methods `RELEASE` and `REFRESH_PERSISTENT` behave polymorphically, so that objects of subclasses can also be handled.
-   The methods `GET_PERSISTENT` and `DELETE_PERSISTENT` now access a table of the root class first, to optimize the type determination. Because the type is now stored over multiple transactions, it can no longer be changed.
-   By searching in the tables of the root class, the methods `CREATE_PERSISTENT` and `CREATE_TRANSIENT` now check whether the object key exists in another class of the inheritance hierarchy.

abenabap.html abennews.html abennews-6.html abennews-620.html