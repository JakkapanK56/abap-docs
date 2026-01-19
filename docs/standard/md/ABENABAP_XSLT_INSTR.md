---
title: "ABENABAP_XSLT_INSTR"
description: |
  ABENABAP_XSLT_INSTR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENABAP_XSLT_INSTR.htm"
abapFile: "ABENABAP_XSLT_INSTR.html"
keywords: ["select", "insert", "do", "if", "case", "method", "data", "types", "ABENABAP", "XSLT", "INSTR"]
---

In the following, supported and not supported XSLT instructions of the [SAP XSLT processor](ABENABAP_XSLT_PROCESSOR.html) are listed. The URI for the XSLT namespace is `http://www.w3.org/1999/XSL/Transform`.

**Element** **Attributes** **Description** **Element** **Attributes** **Description** **Element** **Attributes** **Description** **Element** **Attributes** **Description** **Element** **Attributes** **Description** **Element** **Attributes** **Description** **Element** **Alternative** `xsl:key` `name`\\
`match`\\
`use` Declares keys. `xsl:import` `href` See below. `xsl:include` `href` See below. `xsl:output` `method`\\
`version`\\
`encoding`\\
`omit-xml-declaration`\\
`standalone`\\
`doctype-public`\\
`doctype-system`\\
`cdata-section-elements`\\
`indent`\\
`media-type` Specifies how the result tree is output.\\
**Note:** The *cdata-section-elements* attribute is not supported. `xsl:param` `name`\\
`select` Binds a variable to a default value.\\
**Note:** XSLT types can be assigned to a parameter using the *sap:type* attribute. The following values can be used: *string*, *number*, *boolean*, *node-set*, *external*, and *xstring*. A type conversion is triggered in ABAP. Example: In ABAP, a date is passed as string *'2001-05-16'*. The parameter declaration in XSLT is *xsl:param name="p" sap:type="number"*. The date is first converted to a number in ABAP (number of days from *0001-01-01*). The number is then passed to the XSLT program. `xsl:preserve-space` `elements` Adds an element to the set of whitespace-preserving element names. `xsl:strip-space` `elements` Removes an element from the set of whitespace-preserving element names. `xsl:template` `match`\\
`name`\\
`priority`\\
`mode` See below. `xsl:variable` `name`\\
`select` See below. `xsl:attribute` `name`\\
`namespace` Adds an attribute to a result element. `xsl:comment` - Creates a comment node in the result tree. `xsl:copy` `use-attribute-sets` Copies the current node without attributes and child nodes.\\
**Note:** The *use-attributes-sets* attribute is not supported. `xsl:copy-of` `select` Inserts a result tree fragment into the result tree. `xsl:element` `name`\\
`namespace`\\
`use-attribute-sets` Creates an element node in the result tree.\\
**Note:** The *use-attributes-sets* attribute is not supported.\\
The element name *QName* is not validated.\\
Namespace declarations are not necessarily copied to the result tree. If a namespace attribute is specified in the element instruction, no namespace node is created in the result tree unless a URI must be declared. If the namespace attribute contains a prefix, it is not necessarily used. If a namespace attribute is not specified in the element instruction, all namespace declarations are copied to the created element in the result tree. A prefix specified in the namespace attribute is also used in the result node. `xsl:processing-instruction` `name` Creates a processing instruction node. `xsl:text` `disable-output-escaping` Writes literal data characters. `xsl:value-of` `select`\\
`disable-output-escaping`\\ Creates a text node in the result tree. `xsl:choose` - Selects one alternative. It is used with a sequence of `xsl:when` elements and an optional `xsl:otherwise` element. `xsl:for-each` `select` Specifies a template for each selected node. `xsl:if` `test` Contains a template that is instantiated if the evaluated expression is true. `xsl:otherwise` - Specifies a default content template. `xsl:sort` `select`\\
`lang`\\
`data-type`\\
`order`\\
`case-order` Sorts the output structure. \\
**Note:** The *lang* attribute is ignored. `xsl:variable` `name`\\
`select` Binds a variable to a value.\\
**Note:** The instruction *xsl:variable name="x"* within the scope of another variable declaration of *x* can cause a syntax error. *x* can still be referenced after it is bound and if it is outside of its scope. The following is allowed:\\
*<A><xsl:variable name="x" select="..."/></A>*\\
*<xsl:value-of select="$x"/>* `xsl:when` `test` Selects the first content template of a test that is true. `xsl:apply-templates` `select`\\
`mode` Processes selected nodes. `xsl:call-template` `name` Calls a specified template. `xsl:param` `name`\\
`select` Binds a variable to a default value. `xsl:template` `match`\\
`name`\\
`priority` \\
`mode` Defines a template rule.\\
**Note:** In addition to patterns in the specification, appropriate match patterns are accepted. Example: *(A|B)/C*. `xsl:with-param` `name`\\
`select` Passes a parameter to a template and replaces the value of the variable binding. `xsl:apply-imports` - Processes the current node and applies the template rule of the imported stylesheet.\\
**Note:** Parameters can be passed to the called template in the same way as for *xsl:apply-templates* using *xsl:with-param*. `xsl:import` `href` Imports another XSLT stylesheet.\\
**Note:** Import units are defined as nodes in the import tree. The relationship *imports to* is defined between the import units through the (transitive) relationship in the import tree.\\
Example: *Program Y* is imported into *program X* if the import unit of *program Y* was imported into the import unit of *program X*. `xsl:include` `href` Includes another XSLT stylesheet.\\
**Note:** The inclusion uses the name of the repository instead of a URL. The name is specified in the *sap:name* attribute. The *href* attribute no longer applies in this case. `xsl:stylesheet` `id`\\
`extension-element-prefixes`\\
`exclude-result-prefixes`\\
`version` Represents a stylesheet.\\
**Note:** The *extension-element-prefixes* attribute is not supported. `xsl:transform` `id`\\
`extension-element-prefixes`\\
`exclude-result-prefixes`\\
`version` Synonym for `xsl:stylesheet`. `xsl:message` `terminate` Sends a message to report errors. `xsl:attribute-set` Use the `xsl:attribute` element or literal result attributes. `xsl:decimal-format` Use the `position()` function or a parameter as a counter. `xsl:fallback` - `xsl:namespace-alias` Use the `xsl:element` element. `xsl:number` Use the `position()` function or a parameter as a counter. abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt.html abenabap\_xslt\_self\_written.html abenabap\_xslt\_statements.html