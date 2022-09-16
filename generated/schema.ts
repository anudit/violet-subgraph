// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class HBT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("tokenURI", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HBT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type HBT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("HBT", id.toString(), this);
    }
  }

  static load(id: string): HBT | null {
    return changetype<HBT | null>(store.get("HBT", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }
}

export class Metadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenPointed", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Metadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Metadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Metadata", id.toString(), this);
    }
  }

  static load(id: string): Metadata | null {
    return changetype<Metadata | null>(store.get("Metadata", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenPointed(): string {
    let value = this.get("tokenPointed");
    return value!.toString();
  }

  set tokenPointed(value: string) {
    this.set("tokenPointed", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }

  get animation_url(): string | null {
    let value = this.get("animation_url");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set animation_url(value: string | null) {
    if (!value) {
      this.unset("animation_url");
    } else {
      this.set("animation_url", Value.fromString(<string>value));
    }
  }

  get external_url(): string | null {
    let value = this.get("external_url");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set external_url(value: string | null) {
    if (!value) {
      this.unset("external_url");
    } else {
      this.set("external_url", Value.fromString(<string>value));
    }
  }
}