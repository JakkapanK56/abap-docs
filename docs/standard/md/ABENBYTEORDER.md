---
title: "ABENBYTEORDER"
description: |
  ABENBYTEORDER - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENBYTEORDER.htm"
abapFile: "ABENBYTEORDER.html"
keywords: ["if", "case", "class", "data", "types", "ABENBYTEORDER"]
---

The byte order determines the order in which bytes of specific data objects are stored in the memory.

The binary representation of numbers with the ABAP type `i`, `int8`, `decfloat16`, `decfloat34`, `f`, and `s` is hardware-dependent. An important part of this is the **byte order**, which is predefined by the processor of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) on the current [AS instance](ABENAS_INSTANCE_GLOSRY.html), is important: It determines whether the highest-value byte or lowest-value byte is stored first in the memory. In the case of the highest-value byte, the binary representation is referred to as [big endian](ABENBIG_ENDIAN_GLOSRY.html) and in the latter case, the representation is known as [little endian](ABENLITTLE_ENDIAN_GLOSRY.html).

The byte order of the [host computer](ABENHOST_COMPUTER_GLOSRY.html) of the current [AS instance](ABENAS_INSTANCE_GLOSRY.html) can be taken from the static attribute `ENDIAN` in the [system class](ABENSYSTEM_CLASS_GLOSRY.html)\\ [`CL_ABAP_CHAR_UTILITIES`](ABENCL_ABAP_CHAR_UTILITIES.html).

The number 16909060 in hexadecimal notation can be represented by the following byte strings:

The most common processors that use little endian representations are Intel and `DEC` Alpha. Most other processors use big endian.

Characters are represented by unsigned 2-byte integer values in the [Unicode](ABENUNICODE_GLOSRY.html) format [UCS-2](ABENUCS2_GLOSRY.html), which is supported by the ABAP programming language. This means that this format depends on the number representation used by the hardware. A distinction is therefore made between UCS-2BE (big endian) and UCS-2LE (little endian).

Character-like or byte-like data objects of the type `c` or `string`, or `x` or `xstring`, are often used as anonymous containers for data objects, in particular structures, and stored persistently.

If such a container is stored and imported from an [AS instance](ABENAS_INSTANCE_GLOSRY.html) whose [host computer](ABENHOST_COMPUTER_GLOSRY.html) has a different byte order, problems can occur if the container is used for content for which the byte order is critical. This is always the case when numeric content of the type `i`, `int8`, `decfloat16`, `decfloat34`, `f`, or `s` is stored in character-like or byte-like containers. Problems can also arise when byte-like content is stored in character-like containers.

Usually, in order to be able to work with the content of an imported container, a [casting](ABENCAST_CASTING_GLOSRY.html) is performed on the data type whose data is stored in the container. However, because no type information is stored in the container, any necessary conversion of the byte order cannot take place.

The only way to prevent these problems is to avoid having numeric components in anonymous containers and never store byte-like content in character-like fields.

The statement `[EXPORT](ABAPEXPORT_DATA_CLUSTER.html) ... TO [DATA BUFFER](ABAPEXPORT_DATA_CLUSTER_MEDIUM.html)` can be used to store ABAP data in byte strings. When the statement [`IMPORT`](ABAPIMPORT_DATA_CLUSTER.html) is used, the byte order is handled automatically.

**Endian** **Byte 1** **Byte 2** **Byte 3** **Byte 4** Big *0x01* *0x02* *0x03* *0x04* Little *0x04* *0x03* *0x02* *0x01* abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html