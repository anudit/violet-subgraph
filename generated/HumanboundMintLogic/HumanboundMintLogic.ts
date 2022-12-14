// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Minted extends ethereum.Event {
  get params(): Minted__Params {
    return new Minted__Params(this);
  }
}

export class Minted__Params {
  _event: Minted;

  constructor(event: Minted) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BaseURISet extends ethereum.Event {
  get params(): BaseURISet__Params {
    return new BaseURISet__Params(this);
  }
}

export class BaseURISet__Params {
  _event: BaseURISet;

  constructor(event: BaseURISet) {
    this._event = event;
  }

  get newBaseURI(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class ContractURISet extends ethereum.Event {
  get params(): ContractURISet__Params {
    return new ContractURISet__Params(this);
  }
}

export class ContractURISet__Params {
  _event: ContractURISet;

  constructor(event: ContractURISet) {
    this._event = event;
  }

  get newContractURI(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class TokenURISet extends ethereum.Event {
  get params(): TokenURISet__Params {
    return new TokenURISet__Params(this);
  }
}

export class TokenURISet__Params {
  _event: TokenURISet;

  constructor(event: TokenURISet) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newTokenURI(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class HumanboundMintLogic__getInterfaceResultInterfacesStruct extends ethereum.Tuple {
  get interfaceId(): Bytes {
    return this[0].toBytes();
  }

  get functions(): Array<Bytes> {
    return this[1].toBytesArray();
  }
}

export class HumanboundMintLogic__getInterface1ResultInterfacesStruct extends ethereum.Tuple {
  get interfaceId(): Bytes {
    return this[0].toBytes();
  }

  get functions(): Array<Bytes> {
    return this[1].toBytesArray();
  }
}

export class HumanboundMintLogic extends ethereum.SmartContract {
  static bind(address: Address): HumanboundMintLogic {
    return new HumanboundMintLogic("HumanboundMintLogic", address);
  }

  getInterface(): Array<
    HumanboundMintLogic__getInterfaceResultInterfacesStruct
  > {
    let result = super.call(
      "getInterface",
      "getInterface():((bytes4,bytes4[])[])",
      []
    );

    return result[0].toTupleArray<
      HumanboundMintLogic__getInterfaceResultInterfacesStruct
    >();
  }

  try_getInterface(): ethereum.CallResult<
    Array<HumanboundMintLogic__getInterfaceResultInterfacesStruct>
  > {
    let result = super.tryCall(
      "getInterface",
      "getInterface():((bytes4,bytes4[])[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        HumanboundMintLogic__getInterfaceResultInterfacesStruct
      >()
    );
  }

  getSolidityInterface(): string {
    let result = super.call(
      "getSolidityInterface",
      "getSolidityInterface():(string)",
      []
    );

    return result[0].toString();
  }

  try_getSolidityInterface(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getSolidityInterface",
      "getSolidityInterface():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  contractURI(): string {
    let result = super.call("contractURI", "contractURI():(string)", []);

    return result[0].toString();
  }

  try_contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("contractURI", "contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getInterface1(): Array<
    HumanboundMintLogic__getInterface1ResultInterfacesStruct
  > {
    let result = super.call(
      "getInterface",
      "getInterface():((bytes4,bytes4[])[])",
      []
    );

    return result[0].toTupleArray<
      HumanboundMintLogic__getInterface1ResultInterfacesStruct
    >();
  }

  try_getInterface1(): ethereum.CallResult<
    Array<HumanboundMintLogic__getInterface1ResultInterfacesStruct>
  > {
    let result = super.tryCall(
      "getInterface",
      "getInterface():((bytes4,bytes4[])[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        HumanboundMintLogic__getInterface1ResultInterfacesStruct
      >()
    );
  }

  getSolidityInterface1(): string {
    let result = super.call(
      "getSolidityInterface",
      "getSolidityInterface():(string)",
      []
    );

    return result[0].toString();
  }

  try_getSolidityInterface1(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getSolidityInterface",
      "getSolidityInterface():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface1(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface1(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class GetInterfaceCall extends ethereum.Call {
  get inputs(): GetInterfaceCall__Inputs {
    return new GetInterfaceCall__Inputs(this);
  }

  get outputs(): GetInterfaceCall__Outputs {
    return new GetInterfaceCall__Outputs(this);
  }
}

export class GetInterfaceCall__Inputs {
  _call: GetInterfaceCall;

  constructor(call: GetInterfaceCall) {
    this._call = call;
  }
}

export class GetInterfaceCall__Outputs {
  _call: GetInterfaceCall;

  constructor(call: GetInterfaceCall) {
    this._call = call;
  }

  get interfaces(): Array<GetInterfaceCallInterfacesStruct> {
    return this._call.outputValues[0].value.toTupleArray<
      GetInterfaceCallInterfacesStruct
    >();
  }
}

export class GetInterfaceCallInterfacesStruct extends ethereum.Tuple {
  get interfaceId(): Bytes {
    return this[0].toBytes();
  }

  get functions(): Array<Bytes> {
    return this[1].toBytesArray();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get v(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get expiry(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get tokenURI(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RegisterInterfaceCall extends ethereum.Call {
  get inputs(): RegisterInterfaceCall__Inputs {
    return new RegisterInterfaceCall__Inputs(this);
  }

  get outputs(): RegisterInterfaceCall__Outputs {
    return new RegisterInterfaceCall__Outputs(this);
  }
}

export class RegisterInterfaceCall__Inputs {
  _call: RegisterInterfaceCall;

  constructor(call: RegisterInterfaceCall) {
    this._call = call;
  }

  get interfaceId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class RegisterInterfaceCall__Outputs {
  _call: RegisterInterfaceCall;

  constructor(call: RegisterInterfaceCall) {
    this._call = call;
  }
}

export class SupportsInterfaceCall extends ethereum.Call {
  get inputs(): SupportsInterfaceCall__Inputs {
    return new SupportsInterfaceCall__Inputs(this);
  }

  get outputs(): SupportsInterfaceCall__Outputs {
    return new SupportsInterfaceCall__Outputs(this);
  }
}

export class SupportsInterfaceCall__Inputs {
  _call: SupportsInterfaceCall;

  constructor(call: SupportsInterfaceCall) {
    this._call = call;
  }

  get interfaceId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SupportsInterfaceCall__Outputs {
  _call: SupportsInterfaceCall;

  constructor(call: SupportsInterfaceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Default1Call extends ethereum.Call {
  get inputs(): Default1Call__Inputs {
    return new Default1Call__Inputs(this);
  }

  get outputs(): Default1Call__Outputs {
    return new Default1Call__Outputs(this);
  }
}

export class Default1Call__Inputs {
  _call: Default1Call;

  constructor(call: Default1Call) {
    this._call = call;
  }
}

export class Default1Call__Outputs {
  _call: Default1Call;

  constructor(call: Default1Call) {
    this._call = call;
  }
}

export class _setBaseURICall extends ethereum.Call {
  get inputs(): _setBaseURICall__Inputs {
    return new _setBaseURICall__Inputs(this);
  }

  get outputs(): _setBaseURICall__Outputs {
    return new _setBaseURICall__Outputs(this);
  }
}

export class _setBaseURICall__Inputs {
  _call: _setBaseURICall;

  constructor(call: _setBaseURICall) {
    this._call = call;
  }

  get _baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class _setBaseURICall__Outputs {
  _call: _setBaseURICall;

  constructor(call: _setBaseURICall) {
    this._call = call;
  }
}

export class _setTokenURICall extends ethereum.Call {
  get inputs(): _setTokenURICall__Inputs {
    return new _setTokenURICall__Inputs(this);
  }

  get outputs(): _setTokenURICall__Outputs {
    return new _setTokenURICall__Outputs(this);
  }
}

export class _setTokenURICall__Inputs {
  _call: _setTokenURICall;

  constructor(call: _setTokenURICall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class _setTokenURICall__Outputs {
  _call: _setTokenURICall;

  constructor(call: _setTokenURICall) {
    this._call = call;
  }
}

export class BaseURICall extends ethereum.Call {
  get inputs(): BaseURICall__Inputs {
    return new BaseURICall__Inputs(this);
  }

  get outputs(): BaseURICall__Outputs {
    return new BaseURICall__Outputs(this);
  }
}

export class BaseURICall__Inputs {
  _call: BaseURICall;

  constructor(call: BaseURICall) {
    this._call = call;
  }
}

export class BaseURICall__Outputs {
  _call: BaseURICall;

  constructor(call: BaseURICall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class ContractURICall extends ethereum.Call {
  get inputs(): ContractURICall__Inputs {
    return new ContractURICall__Inputs(this);
  }

  get outputs(): ContractURICall__Outputs {
    return new ContractURICall__Outputs(this);
  }
}

export class ContractURICall__Inputs {
  _call: ContractURICall;

  constructor(call: ContractURICall) {
    this._call = call;
  }
}

export class ContractURICall__Outputs {
  _call: ContractURICall;

  constructor(call: ContractURICall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class GetInterface1Call extends ethereum.Call {
  get inputs(): GetInterface1Call__Inputs {
    return new GetInterface1Call__Inputs(this);
  }

  get outputs(): GetInterface1Call__Outputs {
    return new GetInterface1Call__Outputs(this);
  }
}

export class GetInterface1Call__Inputs {
  _call: GetInterface1Call;

  constructor(call: GetInterface1Call) {
    this._call = call;
  }
}

export class GetInterface1Call__Outputs {
  _call: GetInterface1Call;

  constructor(call: GetInterface1Call) {
    this._call = call;
  }

  get interfaces(): Array<GetInterface1CallInterfacesStruct> {
    return this._call.outputValues[0].value.toTupleArray<
      GetInterface1CallInterfacesStruct
    >();
  }
}

export class GetInterface1CallInterfacesStruct extends ethereum.Tuple {
  get interfaceId(): Bytes {
    return this[0].toBytes();
  }

  get functions(): Array<Bytes> {
    return this[1].toBytesArray();
  }
}

export class NameCall extends ethereum.Call {
  get inputs(): NameCall__Inputs {
    return new NameCall__Inputs(this);
  }

  get outputs(): NameCall__Outputs {
    return new NameCall__Outputs(this);
  }
}

export class NameCall__Inputs {
  _call: NameCall;

  constructor(call: NameCall) {
    this._call = call;
  }
}

export class NameCall__Outputs {
  _call: NameCall;

  constructor(call: NameCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class RegisterInterface1Call extends ethereum.Call {
  get inputs(): RegisterInterface1Call__Inputs {
    return new RegisterInterface1Call__Inputs(this);
  }

  get outputs(): RegisterInterface1Call__Outputs {
    return new RegisterInterface1Call__Outputs(this);
  }
}

export class RegisterInterface1Call__Inputs {
  _call: RegisterInterface1Call;

  constructor(call: RegisterInterface1Call) {
    this._call = call;
  }

  get interfaceId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class RegisterInterface1Call__Outputs {
  _call: RegisterInterface1Call;

  constructor(call: RegisterInterface1Call) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetContractURICall extends ethereum.Call {
  get inputs(): SetContractURICall__Inputs {
    return new SetContractURICall__Inputs(this);
  }

  get outputs(): SetContractURICall__Outputs {
    return new SetContractURICall__Outputs(this);
  }
}

export class SetContractURICall__Inputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetContractURICall__Outputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
    this._call = call;
  }
}

export class SetTokenURICall extends ethereum.Call {
  get inputs(): SetTokenURICall__Inputs {
    return new SetTokenURICall__Inputs(this);
  }

  get outputs(): SetTokenURICall__Outputs {
    return new SetTokenURICall__Outputs(this);
  }
}

export class SetTokenURICall__Inputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetTokenURICall__Outputs {
  _call: SetTokenURICall;

  constructor(call: SetTokenURICall) {
    this._call = call;
  }
}

export class SupportsInterface1Call extends ethereum.Call {
  get inputs(): SupportsInterface1Call__Inputs {
    return new SupportsInterface1Call__Inputs(this);
  }

  get outputs(): SupportsInterface1Call__Outputs {
    return new SupportsInterface1Call__Outputs(this);
  }
}

export class SupportsInterface1Call__Inputs {
  _call: SupportsInterface1Call;

  constructor(call: SupportsInterface1Call) {
    this._call = call;
  }

  get interfaceId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SupportsInterface1Call__Outputs {
  _call: SupportsInterface1Call;

  constructor(call: SupportsInterface1Call) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SymbolCall extends ethereum.Call {
  get inputs(): SymbolCall__Inputs {
    return new SymbolCall__Inputs(this);
  }

  get outputs(): SymbolCall__Outputs {
    return new SymbolCall__Outputs(this);
  }
}

export class SymbolCall__Inputs {
  _call: SymbolCall;

  constructor(call: SymbolCall) {
    this._call = call;
  }
}

export class SymbolCall__Outputs {
  _call: SymbolCall;

  constructor(call: SymbolCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class TokenURICall extends ethereum.Call {
  get inputs(): TokenURICall__Inputs {
    return new TokenURICall__Inputs(this);
  }

  get outputs(): TokenURICall__Outputs {
    return new TokenURICall__Outputs(this);
  }
}

export class TokenURICall__Inputs {
  _call: TokenURICall;

  constructor(call: TokenURICall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TokenURICall__Outputs {
  _call: TokenURICall;

  constructor(call: TokenURICall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}
