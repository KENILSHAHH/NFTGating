import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";

// Initialize the Smart Account
// All values are optional except networkConfig only in the case of gasless dappAPIKey is required
let options = {
  activeNetworkId: 80001,
  supportedNetworksIds: [80001],
  networkConfig: [
    {
      chainId: 80001,
      dappAPIKey:"Ef3kCfbuA.f77ee233-4c99-4e08-91ff-562344d15567",
      
    }

  ]
} 

// this provider is from the social login which we created in previous setup
let smartAccount = new SmartAccount(provider, options);
smartAccount = await smartAccount.init();