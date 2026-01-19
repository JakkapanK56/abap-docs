---
title: "ABENCL_DEMO_OUTPUT"
description: |
  ABENCL_DEMO_OUTPUT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCL_DEMO_OUTPUT.htm"
abapFile: "ABENCL_DEMO_OUTPUT.html"
keywords: ["select", "do", "if", "method", "class", "data", "internal-table", "ABENCL", "DEMO", "OUTPUT"]
---

Class `CL_DEMO_OUTPUT` is provided by the ABAP Keyword Documentation to create simple outputs of data in example programs without the need of [classic lists](ABENABAP_DYNPRO_LIST.html). It is not intended for production usage. It can be used in demonstration programs, local test programs or for temporary testing in production programs. It must not be used in production programs.

The class can be used via static methods and instance methods. For using instance methods, interface `IF_DEMO_OUTPUT` can be used. The following methods create output in an output stream:

The standard output format is *HTML*. Optionally, also formats *TEXT*, *JSON* and *XML* can be set. The format is set with method `SET_MODE` for the static methods or using the input parameter `MODE` of the factory method `NEW` for the instance methods.

Each instance method returns the self reference `me` in order to enable method chainings.

[Usage of `CL_DEMO_OUTPUT`](ABENCL_DEMO_OUTPUT_ABEXA.html)

-   Methods `BEGIN_SECTION`, `NEXT_SECTION`, and `END_SECTION` create headers and open or close header levels.
-   Methods `WRITE_DATA`, `WRITE_TEXT`, `WRITE_XML`, `WRITE_JSON`, `WRITE_HTML` and so on write different kinds of output to the output stream.

-   With method `WRITE_DATA` any kind of ABAP data can be written to the output stream.
-   The other methods create formatted outputs of texts, XML, JSON, or HTML data.

-   Method `WRITE` is generic and handles ABAP data as well as texts in non-proportional format.
-   Methods `DISPLAY_...` (available as static methods only) work as `WRITE_...` but close the current output stream and open a new one. If a SAP GUI is available, the output is displayed in a window.
-   Method `LINE` creates a horizontal line.
-   Method `DISPLAY` closes the current output stream and opens a new one. If a SAP GUI is available, the output is displayed in a window. Optionally, data can be passed to `DISPLAY` in the same way as for `WRITE`.
-   Method `GET` works like `DISPLAY` but does not display the data. Instead the formatted output data are returned in a text string and can be handled further.

-   `CL_DEMO_OUTPUT` is based on a class `CL_DEMO_OUTPUT_STREAM` that collects the data in an internal table that is converted to an XML file and raises an event on completion. Special handler classes convert the XML file to HTML, plain text, or JSON depending on the output mode.
-   `CL_DEMO_OUTPUT` is widely used in the example classes and programs of the ABAP Keyword Documentation.
-   `CL_DEMO_OUTPUT` is integrated into the ABAP console of [ADT](ABENADT_GLOSRY.html) that can be filled by executing classes (inheriting from `CL_DEMO_CLASSRUN` or implementing `IF_OO_ADT_CLASSRUN`) or executable programs by F9.
-   There is also a class `CL_DEMO_INPUT` for rudimentary inputs. But this class is not as powerful as [selection screens](ABENSELECTION_SCREEN_GLOSRY.html).
-   For usage in [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html), there is a class `CL_DEMO_OUTPUT_CLOUD` and an interface `IF_DEMO_OUTPUT` that wrap `CL_DEMO_OUTPUT` and `IF_DEMO_OUTPUT`. They have only instance methods and no `DISPLAY` methods. The method `GET` can be used to retrieve different outputs in order to process them further. For an example, see `CL_DEMO_OUTPUT_USAGE_CLOUD`.

abenabap.html abenabap\_reference.html abenabap\_screens.html