// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MaxjaAirdrop is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public tokenIds;

    constructor() ERC721("MaxjaTest", "MXT") {}

    function sendNFT(address to, string memory tokenURI)
        onlyOwner()
        public
        returns (uint256)
    {
        tokenIds.increment();

        uint256 nftId = tokenIds.current();
        _mint(to, nftId);
        _setTokenURI(nftId, tokenURI);

        return nftId;
    }
}