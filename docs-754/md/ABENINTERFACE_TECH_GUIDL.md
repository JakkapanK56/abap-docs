---
title: "Selecting the User Interface Technology - ABAP Keyword Documentation"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_tech_guidl.htm"
abapFile: "abeninterface_tech_guidl.htm"
type: "abap-reference"
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](ABENABAP.md) →  [ABAP Programming Guidelines](ABENABAP_PGL.md) →  [Architecture](ABENARCHITECTURE_GUIDL.md) →  [User Interfaces](ABENUSER_INTERFACES_GUIDL.md) → 

Selecting the User Interface Technology

Background

Various UI technologies can be used in the ABAP environment. We distinguish between classic technologies, which are based on the SAP GUI and are almost completely integrated into the ABAP language, and new Web-based technologies, which display the UI in a Web browser and are accessed through object-oriented interfaces in ABAP.

The classic SAP GUI technologies are:

-   Classic dynpros
    A classic dynpro is a component of an ABAP program. It is created using Screen Painter in ABAP Workbench and called using either a transaction code or the CALL SCREEN statement. Every time a dynpro is called, a dynpro sequence is started.

-   Selection screens
    A selection screen is a specific classic dynpro that is not created manually in Screen Painter. Instead, it is defined using the ABAP statements PARAMETERS, SELECT-OPTIONS, and SELECTION-SCREEN. A selection screen is called either implicitly when executable programs are started or explicitly using the CALL SELECTION-SCREEN statement.

-   Classic lists
    Classic lists are used to output data in a structured and formatted manner. The formatted data is stored in a list buffer using specific ABAP statements (such as WRITE, FORMAT) and displayed on a special system dynpro. Classic lists are called either automatically (when an executable program is run) or with the LEAVE TO LIST-PROCESSING statement.

The new Web-based technologies are:

-   Business Server Pages
    Business Server Pages (BSP) are the counterpart to JavaServer Pages (JSP). BSPs are HTML pages with content that is partly dynamic. The dynamic content is created by server-side scripts that are written in ABAP. In AS ABAP, this type of script occurs as a generated ABAP Objects class. You create Business Server Pages using Web Application Builder in ABAP Workbench.

-   Web Dynpro ABAP
    Web Dynpro ABAP is a technology for creating platform-independent, Web-based interfaces. The architecture of Web Dynpro is based on the Model View Controller approach (MVC) for [SoC](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline"). The three components of the model view controller are the data model, which describes the application, the presentation view, and the program controller for responding to user actions. Web Dynpro applications are created using Web Dynpro Explorer in ABAP Workbench and appear in AS ABAP using generated ABAP Objects classes.

-   SAPUI5
    SAPUI5 is a tool set for developing user interfaces for Web applications in HTML5. SAPUI5 supports the Model View Controller (MVC) approach and based on the user interface elements delivered in JavaScript and CSS libraries. The data connection to the application server is established using the data formats [XML](ABENXML_GLOSRY.md "Glossary Entry"), [JSON](ABENJSON_GLOSRY.md "Glossary Entry") or OData. User interfaces developed with SAPUI5 can be connected to SAP and non-SAP platforms. In particular, SAPUI5 user interfaces can be developed for ABAP applications of [AS ABAP](ABENSAP_NW_ABAP_GLOSRY.md "Glossary Entry"). The connection is established using [ICF](ABENICF_GLOSRY.md "Glossary Entry") and [APC](ABENAPC_GLOSRY.md "Glossary Entry").

Rule

Use Web Dynpro ABAP or SAPUI5

Use Web Dynpro ABAP or SAPUI5 whenever possible to create the UIs of new application programs.

Details

Web Dynpro ABAP and SAPUI5 are SAP's standard UI technologies for developing modern Web applications in the ABAP environment. The MVC approach automatically ensures a separation of presentation logic and application logic, based on the [SoC principle](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline").

Compared to Web Dynpro, the BSP technology is much more fundamental. An MVC approach for the SoC is supported, but developers are still responsible for the implementation. BSPs can be regarded as the predecessor technology of Web Dynpro ABAP. The use of BSPs is now restricted to cases where a Web application is based on a single HTML page, for which scripting is required and the function cannot be implemented with Web Dynpro ABAP.

The classic SAP UI technology (classic dynpros based on the SAP GUI, including selection screens and lists) is no longer sufficient for modern and flexible business applications where the user interface must be accessible in a portal, for example. The MVC approach is not supported by frameworks or by any relevant tools.

Exception

The various UI technologies are not interoperable. In other words, it is usually not possible to switch parts of an application based on classical dynpros (including selection screens and classic lists) to Web Dynpro ABAP or SAPUI5. In addition, the commonly implemented dynpro programming model was previously not very oriented toward SoC. This makes it difficult or even impossible to implement a changeover for the purpose of further development. Consequently, in exceptional cases, classic dynpros and/or selection screens might be required if a new development needs to be included in an existing framework. For these exceptional cases, the following rules have been devised to ensure that these obsolete UI technologies are handled using a more modern approach.

Notes

-   In general, the UI technology of an application that is strictly modeled on the [separation of concerns](ABENSEPERATION_CONCERNS_GUIDL.md "Guideline") can be replaced without any problems (see example below).

-   Web Dynpro ABAP and SAPUI5 are not part of the ABAP language. Specific guidelines regarding their use are not in the scope of these programming guidelines, which focus mainly on using the ABAP language to implement services.

Example

The transaction DEMO\_CR\_CAR\_RENTAL is called. Now two user interfaces can be selected for a car rental example:

-   A UI based on classic dynpros and selection screens. However, according to the above rule, using this UI technology in application programs is no longer recommended.

-   A modern UI based on Web Dynpro ABAP

Since the example application strictly separates all concerns, you can use it with different UIs without having to make adjustments to the application and persistence logic. The SoC is therefore a critical prerequisite for potential changeovers from classic dynpros to Web Dynpro ABAP.
