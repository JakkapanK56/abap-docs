---
title: "ABENST_TT_NAMESPACE"
description: |
  ABENST_TT_NAMESPACE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENST_TT_NAMESPACE.htm"
abapFile: "ABENST_TT_NAMESPACE.html"
keywords: ["insert", "do", "if", "data", "ABENST", "NAMESPACE"]
---

`<tt:namespace name="prefix"|name=""/>`

The ST statement `tt.namespace` declares an explicit namespace.

By default, namespace declarations are only written to the resulting XML data in serializations if the associated namespace prefix is used as part of the name in a literal XML element or attribute or in a non-literal attribute. A namespace declaration is written exactly to the element in which it is required. Namespace declarations whose prefix is not used explicitly are ignored in serializations. In deserializations, the binding of the namespace prefix to the correct URI is checked.

For XML elements of the resulting XML data in which a namespace declaration is required even though the relevant namespace prefix is not part of a name but used, for example, as content of an attribute, this can be forced in serializations by using the statement `tt:namespace`. The statement can be specified one or more times within a literal XML element before its subelements. Each statement declares a namespace for the current XML element with the namespace prefix specified after the attribute `name`. The namespace prefix must be known in the current context, that is, it must have been defined in a surrounding XML element with `xmlns:prefix="uri"`.

**Serializing Namespace Declarations**

If a surrounding element does not yet contain a declaration of the namespace, the statement `tt:namespace name="prefix"` inserts the definition `xmlns:prefix="uri"` into the definition of the literal XML element and thus applies it to all its subelements. The statement `tt:namespace name=""` inserts the definition `xmlns="uri"` if defined in a surrounding XML element. Within the XML element, no other declarations of this namespace are created. In particular, other `tt:namespace` statements within the same XML element are ignored.

**Deserializing Namespace Declarations**

In deserializations, the statement `tt:namespace` is ignored.

The ST program `DEMO_ST_NAMESPACE1` below shows how namespaces are handled by default:

The definition of the namespace with the prefix `abc` in element `context1` is not needed in standard XML and is omitted in serializations. In the subelements `abc:X` and `xyz:Y` of `context2`, the declaration of namespaces is needed and inserted in serializations. The result of a serialization is as follows:

The ST program `DEMO_ST_NAMESPACE2` below contains explicit namespace declarations:

The `tt:namespace` statements are used to explicitly insert namespace declarations for the prefixes `abc` and `xyz` into the elements `context1` and `context2`. Now the content of attribute `attr` of `context1` can be evaluated with specific reference to the namespace and the declaration of namespaces is no longer needed in the elements `abc:X` and `xyz:Y` of `context2`.

\\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n ...\\ \\n ...\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\n ... \\n \\ \\n \\ \\n \\ \\n \\ \\n ... \\n \\ \\n \\ \\n ... \\n \\ \\n \\ \\n \\ \\n\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n \\ \\n \\ \\n \\ \\n \\ \\n ...\\ \\n ...\\ \\n \\ \\n \\ \\n \\ \\n abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_st.html abenst\_serial\_deserial.html