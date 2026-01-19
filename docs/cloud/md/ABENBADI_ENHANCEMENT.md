---
title: "ABENBADI_ENHANCEMENT"
description: |
  ABENBADI_ENHANCEMENT - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENBADI_ENHANCEMENT.htm"
abapFile: "ABENBADI_ENHANCEMENT.html"
keywords: ["select", "do", "if", "method", "class", "ABENBADI", "ENHANCEMENT"]
---

BAdIs are part of the [enhancements](ABENENHANCEMENT_GLOSRY.html) made available by the ABAP Enhancement Framework. BAdIs, together with their calling positions in ABAP programs, form explicit [enhancement options](ABENENHANCEMENT_POINT_GLOSRY.html) of these programs and are assigned to [enhancement spots](ABENENHANCEMENT_SPOT_GLOSRY.html).

If BAdIs and their calling positions are defined in a system, [enhancements](ABENENHANCEMENT_GLOSRY.html) can be made in follow-on systems by creating [BAdI](ABENBADI_IMPLEMENTATION_GLOSRY.html) implementations in these systems. A BAdI implementation consists mainly of a [BAdI implementation class](ABENBADI_IMPLEMENT_CLASS_GLOSRY.html) whose instances enhance the functions of an ABAP program at runtime in the form of an [object plug-in](ABENOBJECT_PLUGIN_GLOSRY.html). In the ABAP Enhancement Framework, a BAdI implementation is an [enhancement implementation element](ABENENHANCEMENT_IMPL_ELEM_GLOSRY.html) and is administrated by [enhancement implementations](ABENENHANCEMENT_IMPL_GLOSRY.html).

A BAdI consists mainly of a [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html) that contains the declaration of [BAdI methods](ABENBADI_METHOD_GLOSRY.html), and a set of filters. The filters enable certain BAdI implementations to be selected for use. The following settings can be made in the definition of a BAdI, in addition to the selection of the [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html):

BAdIs of the ABAP Enhancement Framework are supported by the ABAP runtime framework by the following ABAP statements:

The BAdIs of the ABAP Enhancement Framework are also freely switchable using switches from the [Switch Framework](ABENSWITCH_FRAMEWORK_GLOSRY.html).

-   Whether a BAdI is intended for single or multiple use. If a BAdI is intended for single use, only a single [BAdI implementation](ABENBADI_IMPLEMENTATION_GLOSRY.html) can be used in an [internal session](ABENINTERNAL_SESSION_GLOSRY.html), and one BAdI implementation must be available for each use.
-   A fallback [BAdI implementation class](ABENBADI_IMPLEMENT_CLASS_GLOSRY.html) can be specified to be used if no BAdI implementation matches the filter conditions.
-   A BAdI can be defined as context-free or context-dependent. This setting controls the instantiation of the [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html). In context-free BAdIs, it is possible to define whether an object plug-in can be created only once or multiple times within an internal session. In context-dependent BAdIs, the object plug-ins are linked with a [context object](ABENBADI_CONTEXT_OBJECT_GLOSRY.html).

-   [`GET BADI`](ABAPGET_BADI.html)
-   Creates a [BAdI object](ABENBADI_OBJECT_GLOSRY.html) as a handle for [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html).
-   [`CALL BADI`](ABAPCALL_BADI.html)
-   Calls [BAdI methods](ABENBADI_METHOD_GLOSRY.html) in [object plug-ins](ABENOBJECT_PLUGIN_GLOSRY.html).

-   For a BAdI that is intended for single use, it is best to always specify a fallback implementation class and to implement it in the same system as the BAdI.
-   The implementation of the [BAdI methods](ABENBADI_METHOD_GLOSRY.html) of a [BAdI interface](ABENBADI_INTERFACE_GLOSRY.html) can be made optional, like any other interface method, by using the addition [`DEFAULT`](ABAPMETHODS_DEFAULT.html).
-   See also the documentation [Enhancement Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/46a2cfc13d25463b8b9a3d2a3c3ba0d9/949cdc40132a8531e10000000a1550b0) in SAP Help Portal.

abenabap.html abenabap\_reference.html abenenhancement\_framework.html