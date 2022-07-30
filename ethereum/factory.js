import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x215FD336C63995466EBeC9306ca56F36315A55f5"
);

export default instance;
