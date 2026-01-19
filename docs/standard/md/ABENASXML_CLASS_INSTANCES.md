---
title: "ABENASXML_CLASS_INSTANCES"
description: |
  ABENASXML_CLASS_INSTANCES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENASXML_CLASS_INSTANCES.htm"
abapFile: "ABENASXML_CLASS_INSTANCES.html"
keywords: ["do", "if", "case", "catch", "method", "class", "data", "ABENASXML", "CLASS", "INSTANCES"]
---

To transform classes to [XML](ABENXML_GLOSRY.html) using the statement [`CALL TRANSFORMATION`](ABAPCALL_TRANSFORMATION.html), or to create classes from XML data, their classes must implement the interface `IF_SERIALIZABLE_OBJECT`. The instance of a class (object) is represented as a subelement of [`heap`](ABENABAP_XSLT_ASXML_GENERAL.html) as follows:

  <asx:heap xmlns:nspace ...>\\ \\n    <class id = "key">\\ \\n      <part classVersion = "...">\\ \\n        <name>...</name>\\ \\n        ... \\n      </part>\\ \\n      ... \\n    </class>\\ \\n  </asx:heap>

The `class` element name is the schema type name of the class of the object (or the dynamic type of the reference variables) from the `nspace` namespace (see table below) in uppercase letters. The mandatory attribute `id` contains the unique key `key` of the element used to reference it by the representation of the associated reference variables in `values`. The subelements `<part>...</part>` contain the values of the instance attributes of individual object parts as subelements `<name>...</name>`. The individual object parts are defined by means of the serializable classes of the current inheritance hierarchy.

The namespace of the class name indicates where the class is defined. The table below shows the possible namespaces, whereby in the first column, `classes` stands for `http://www.sap.com/abapxml/classes`. The same substitution rule applies to the identifiers `PRG`, `CPOOL`, and `FPOOL` as to the namespaces for [anonymous data objects](ABENASXML_ANONYMOUS_DATA_OBJECT.html).

The serializable values of an instance of a class (instance attributes or output parameters of a special helper method) are represented in the asXML representation for named data objects or for reference variables as the content or attributes of `<name>...</name>`. Here, `name` is the name of an instance attribute or output parameter in uppercase letters. For interface attributes, the name of the interface is added before the name, separated by a period (.), to distinguish it from an identically named class attribute. The same [substitution rules](ABENABAP_XSLT_ASXML_NAMED.html) apply to the identifiers as to all elements.

The serializable values of an instance of a class are specified in the class by implementing the system interface `IF_SERIALIZABLE_OBJECT`. The system interface `IF_SERIALIZABLE_OBJECT` is a [tag interface](ABENTAG_INTERFACE_GLOSRY.html). Its implementation shows the runtime framework the serializability of a class and its subclasses and allows the declaration of certain other components in the class according to fixed syntax rules. This interface `IF_SERIALIZABLE_OBJECT` can only be implemented in one class of a path and is effective for all subclasses as of this class.

If the class or one of its superclasses does not implement the interface `IF_SERIALIZABLE_OBJECT`, the element `class` does not contain any subelements. By default, all instance attributes of a class in which the interface `IF_SERIALIZABLE_OBJECT` is implemented directly or in a superclass are serialized and deserialized to this class. This behavior can be changed by declaring special helper methods. [Static attributes](ABENSTATIC_ATTRIBUTE_GLOSRY.html) are ignored in serializations or deserializations (except for the special constant `SERIALIZABLE_CLASS_VERSION`).

If the class or one of its superclasses implements the interface `IF_SERIALIZABLE_OBJECT`, the element `<class>...</class>` contains at least one subelement `<part>...</part></class>`. These subelements correspond to individual serializable object parts and contain the representations of the instance attributes of the respective object part in asXML format. An object part is determined by the class in which instance attributes are declared or in which an interface that contains instance attributes is implemented. A serializable class contains an object part for itself as well as object parts for all superclasses in the current path of the inheritance tree up to and including the class that implements interface `IF_SERIALIZABLE_OBJECT`. The name `part` is the name of the respective class. If the class is a local class, the prefix `local` is added in front of the name, separated by a period (.), to distinguish it from an identically named global class. Object parts of superclasses in which the interface `IF_SERIALIZABLE_OBJECT` is not implemented are not serializable and do not have a corresponding subelement `part`. This means that a class in which the interface `IF_SERIALIZABLE_OBJECT` is not implemented (neither in the class itself nor in a superclass) creates an empty XML element `class` in serializations.

In serializations, the XML elements `part` of the object parts of the superclasses that implemented the interface `IF_SERIALIZABLE_OBJECT` are created for the subclasses and by default the XML elements of the instance attributes are created in the order in which they are declared in the class.

During deserialization, an object of the respective class is generated, whereby the instance constructor is not executed. After the object is created, all instance attributes have their [initial value](ABENINITIAL_VALUE_GLOSRY.html) or the [start value](ABENSTART_VALUE_GLOSRY.html) that is specified using the addition `VALUE` of the statement `DATA`. By default, the instance attributes are supplied with the values of the associated XML elements, whereby the order of the object parts and the attributes is not important. Instance attributes without a corresponding XML element retain their value. Superfluous XML elements are ignored if they do not belong to a namespace and otherwise raise a catchable exception. During the deserialization of an element with no subelements `part`, no object is created and the target reference variable is initialized instead.

If a class or one of its superclasses implements the interface `IF_SERIALIZABLE_OBJECT`, the [private](ABENPRIVATE_GLOSRY.html) constant `SERIALIZABLE_CLASS_VERSION` of type `i` can be declared in each object part, that is, in each participating class of the inheritance tree. In serializations, the value of the constant is assigned to attribute `classVersion` of the XML element `part`. In deserializations, the attribute value is currently not evaluated but is intended for possible future enhancements.

Using the standard behavior poses a certain security risk because all instance attributes of an object can be serialized and can be manipulated in the XML data created.

By default, all instance attributes of an object part are serialized regardless of their visibility and the version of the class is checked. To change this behavior, for each object part, the instance methods `SERIALIZE_HELPER` and `DESERIALIZE_HELPER` can be declared and implemented in the respective class. These methods can only be declared as private instance methods in classes that implement the interface `IF_SERIALIZABLE_OBJECT` directly or in one of its superclasses. The declaration of one of the methods restricts the declaration of the others, and the interface is predefined by the syntax check as described below:

If the methods `SERIALIZE_HELPER` and `DESERIALIZE_HELPER` are declared in an object part, the instance attributes of the object part are not serialized and deserialized. Instead, in serializations, the method `SERIALIZE_HELPER` is executed, and the values of all output parameters are written to the corresponding element `part` as subelements in the order specified in asXML format. The name of a subelement is the name of the corresponding output parameter in uppercase letters. In deserializations, the method `DESERIALIZE_HELPER` is called and the values of the subelements of the corresponding element `part` are passed to the input parameters of the identically named methods. The order does not matter here, and superfluous XML elements are ignored.

[Adjusted Serialization and Deserialization](ABENSERIALIZABLE_OBJECT_ABEXA.html)

-   For this, see the [executable example](ABENSERIALIZABLE_OBJECT_ABEXA.html).

-   The method `SERIALIZE_HELPER` is only allowed to have output parameters, and the method `DESERIALIZE_HELPER` is only allowed to have input parameters with generic [typing](ABENTYPING_GLOSRY.html).
-   For each output parameter of method `SERIALIZE_HELPER`, there must be an identically named input parameter of method `DESERIALIZE_HELPER` with the same typing. Additional input parameters of method `DESERIALIZE_HELPER` must be optional.
-   The method `SERIALIZE_HELPER` must not have any output parameters of name `SERIALIZABLE_CLASS_VERSION`, and the method `DESERIALIZE_HELPER` is allowed to have an optional input parameter of type `i`, which is currently not used but is intended for possible future enhancements.

**Namespace** **Where Defined**\\ `classes/global` Class Library `classes/program/PRG` Program `PRG`\\ `classes/class-pool/CPOOL` Class Pool `CPOOL`\\ `classes/function-pool/FPOOL` Function pool `FPOOL` abenabap.html abenabap\_reference.html abendata\_interchange.html abenabap\_xml.html abenabap\_xml\_trafos.html abenabap\_xslt\_asxml.html abenabap\_xslt\_asxml\_named.html abenabap\_xslt\_asxml\_references.html