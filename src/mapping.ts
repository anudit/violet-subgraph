import {
  HumanboundMintLogic,
  Minted
} from "../generated/HumanboundMintLogic/HumanboundMintLogic"
import { HBT, Metadata } from "../generated/schema"
import { ipfs, json } from "@graphprotocol/graph-ts"

export function handleMinted(event: Minted): void {
  let entity = HBT.load(event.params.tokenId.toString())

  if (!entity) {
    entity = new HBT(event.params.tokenId.toString())
  }

  entity.owner = event.params.to;
  entity.tokenId = event.params.tokenId

  let contract = HumanboundMintLogic.bind(event.address);
  let tokenUri = contract.tokenURI(event.params.tokenId);

  entity.tokenURI = tokenUri;

  let hash = tokenUri.replaceAll('ipfs://', '');
  let data = ipfs.cat(hash);

  if (data) {

    let jsonData = json.fromBytes(data).toObject();
    if (jsonData) {

      const metaDataEntity = new Metadata(event.params.tokenId.toString());
      metaDataEntity.tokenPointed = event.params.tokenId.toString();

      const name = jsonData.get("name");
      if (name) metaDataEntity.name = name.toString();

      const description = jsonData.get("description");
      if (description) metaDataEntity.description = description.toString();

      const image = jsonData.get("image");
      if (image) metaDataEntity.image = image.toString();

      const animation_url = jsonData.get("animation_url");
      if (animation_url) metaDataEntity.animation_url = animation_url.toString();

      const external_url = jsonData.get("external_url");
      if (external_url) metaDataEntity.external_url = external_url.toString();

      metaDataEntity.save();
    }

  };

  entity.save()
}
